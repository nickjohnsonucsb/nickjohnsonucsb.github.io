import React from "react";
import Button from "react-bootstrap/Button";
import {ButtonGroup } from 'reactstrap';
import '../../styles/Spotify.css'
import BarChart from './BarChart';
import TopCategories from './TopCategories';
import PieChart from "./PieChart";
import {getRequest} from "../../Api";
import spotifyLogo from "../../styles/Spotify_Logo_RGB_Green.png"




class Metrics extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            userProfile: [],
            topArtists: [],
            topTracks: [],
            topTracksData: [],
            topTracksDataEach: [],
            artistList: [],
            rSelected: "short_term",
        };

    }

    async getUserRecentlyPlayed(){
        const response = await getRequest(this.props.token, "v1/me/player/recently-played?limit=50");
        return response.items;
    }

    async getUserProfile(){
        const response = await getRequest(this.props.token, "v1/me");

        return response;
    }

    async getArtistsById(){
        let ids = [];
        this.state.topTracks.forEach((item) => {
            ids.push(item.artists[0].id);
        });
        if(ids.length == 0) return [];
        const res = await getRequest(this.props.token, "v1/artists?ids=" + ids.join());
        return res.artists;
    }

    async getUserTopArtists(rSelected){
        const response = await getRequest(this.props.token, "v1/me/top/artists?time_range=" + rSelected + "&limit=10");
        // console.log(response);

        return response.items;
    }

    async getUsersTopTracks(){
        const response = await getRequest(this.props.token, "v1/me/top/tracks?time_range=medium_term&limit=50");
        return response.items;
    }

    async getTopTrackData(){
        const resTopTracks = await this.getUsersTopTracks();
        this.setState({ topTracks: resTopTracks });

        let popularity = 0;
        resTopTracks.forEach((track) => {
            popularity += track.popularity;
        });

        let ids = [];
        resTopTracks.forEach((item) => {
            ids.push(item.id);
        });
        let res = await getRequest(this.props.token, "v1/audio-features?ids=" + ids.join());


        res = res.audio_features;
        if(res.length == 1) return [];

        // console.log(res.data)
        this.setState({ topTracksDataEach: res });
        
        let map = new Map([
            ['acousticness', 0],
            ['danceability', 0],
            ['energy', 0],
            ['instrumentalness', 0],
            ['speechiness', 0],
            ['valence', 0],
        ]);


        res.forEach((track) => {
            for(const [feature, value] of Object.entries(track)){
                if (map.has(feature)){
                    // console.log("test");
                    map.set(feature, map.get(feature) + value);
                }
            }
            
        });
        map.set('speechiness', map.get('speechiness') * 3);
        map.set('instrumentalness', map.get('instrumentalness') * 2);
        let results = [];
        results.push({
            key: 'popularity',
            value: popularity / 100
        })
        map.forEach((val, key) => {
            results.push({
                key: key,
                value: val,
            });
        });
        // console.log(results);
        return results;

    }

    async componentDidMount(){
        const resTopTracksData = await this.getTopTrackData();
        const resTopArtists = await this.getUserTopArtists(this.state.rSelected);
        const resUserProfile = await this.getUserProfile();
        const resArtistList = await this.getArtistsById();
        // const resRecentlyPlayed = await this.getUserRecentlyPlayed();
        this.setState({
            topArtists: resTopArtists,
            topTracksData: resTopTracksData,
            isLoading: false,
            userProfile: resUserProfile,
            artistList: resArtistList,
        });

    }

    async onRadioBtnClick(rSelected){
        this.setState({
            rSelected,
            topArtists: [],
        });
        const res = await this.getUserTopArtists(rSelected);
    
        this.setState({
            topArtists: res, 
        })


    }



    render(){
        let results;
        results = this.state.topArtists.map((artist, index) => (
            <div className="artist-list" key={artist.id}>
                <div className="artist-card" key={artist.id} onClick={() => window.open(artist.external_urls['spotify'])}>
                    <h1 className="home-h1 spotify-card-titles">{index + 1}</h1>
                    <span className="artist-img" style={{
                        backgroundImage: "url(" + artist.images[0].url + ")"
                    }}></span>
                    <span className="artist-info">
                        {artist.name}
                    </span>
                </div>

            </div>

        ))

        return (
            <React.Fragment>
                <div className="app-body-container">
                    <div className="App-body">
                    
                        <h2 className="home-h2 spotify-card-titles" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>UTune: A <img src={spotifyLogo} alt="img" style={{ width: "12%", marginInline: "8px", }}></img> Analysis App</h2>
                        <Button
                            className="submit-button"
                            variant="danger"
                            onClick={() => this.props.logout()}
                        >
                            Logout
                        </Button>

                        <h1 className="home-h1 spotify-card-titles" style={{marginTop: "40px"}}>Hello, {this.state.userProfile.display_name}</h1>
                        <h2 className="home-h2 spotify-card-titles">Here are your Spotify stats...</h2>

                        {!this.state.artistList.length && (
                            <h1 className="home-h1 spotify-card-titles">{this.state.isLoading ? 'Loading...' : 'No Data Found.'}</h1>
                        )}
                        {this.state.artistList.length !== 0 && (
                            <div>
                                <h1 className="home-h1 spotify-card-titles" style={{
                                    margin: '50px'
                                }}>Your Favorite Genres</h1>
                                <h3 className="home-h3 spotify-card-titles">According to the top 50 songs you've listened to in the past 6 months.</h3>
                                <PieChart
                                    key={this.state.artistList}
                                    artists={this.state.artistList}
                                />
                            </div>

                        )}

                        <h1 className="home-h1 spotify-card-titles" style={{
                            margin: '50px'
                        }}>Your Top Artists</h1>
                        <ButtonGroup className='mb-5'>
                            <Button variant="outline-warning" onClick={() => this.onRadioBtnClick("short_term")} active={this.state.rSelected === "short_term"}>One Month</Button>
                            <Button variant="outline-warning" onClick={() => this.onRadioBtnClick("medium_term")} active={this.state.rSelected === "medium_term"}>Six Months</Button>
                            <Button variant="outline-warning" onClick={() => this.onRadioBtnClick("long_term")} active={this.state.rSelected === "long_term"}>All Time</Button>
                        </ButtonGroup>
                        <div >
                            {results.length ? (
                                results
                            ) : (
                                    <h1 className="home-h1 spotify-card-titles" style={{
                                    height: '100vh'
                                }}>NO RESULTS</h1>
                            )}
                        </div>
                            
                           
   
                            {!this.state.topTracksData.length && (
                            <h1 className="home-h1 spotify-card-titles">{this.state.isLoading ? 'Loading...' : 'No Data Found.'}</h1>
                            )}
                            {this.state.topTracksData.length !== 0 && (
                                <div>
                                <h1 className="home-h1 spotify-card-titles" style={{
                                    margin: '50px'
                                    }}>Your Type of Songs</h1>
                                <h3 className="home-h3 spotify-card-titles">According to the top 50 songs you've listened to in the past 6 months.</h3>
                                    

                                    <BarChart
                                    key={this.state.topTracksData}
                                    trackData={this.state.topTracksData}
                                    />
                                </div>
                        
                              )} 


                           


                        <TopCategories
                            key={this.state.topTracksData}
                            topTracksData={this.state.topTracksData}
                            topTracksDataEach={this.state.topTracksDataEach}
                            topTracks={this.state.topTracks}
                        /> 

                       
                        


                    

                </div>
                </div>
                
                
            </React.Fragment>
        )
    }



}

export default Metrics;
