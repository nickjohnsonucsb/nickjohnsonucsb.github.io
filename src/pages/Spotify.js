import React from "react";
import Login from '../components/spotify/Login';
import Metrics from '../components/spotify/Metrics';
import AppNavbar from '../components/AppNavbar';
import {loginURL, hash, clientId} from '../Api';



class Spotify extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            isLoggedIn: false,
            token: null
        };
    }



    componentDidMount(){

        let _token = hash.access_token;

        if(_token){
            this.setState({
                token: _token,
            });
        }
        
    }


    async logout() {
        this.setState({
            token: null,
            isLoggedIn: false,
        });
        window.location.hash = "";

        
    }

    login(){
        window.location.replace(loginURL);
        this.setState({
            isLoggedIn: true,
        });
    }

    render(){
        return(
            <div>
                <AppNavbar/>
                <div className="app-top-margin top-margin-spotify"></div>
                {!this.state.token && (

                    
                    <Login
                        isLoggedIn={this.state.isLoggedIn}
                        login={() => this.login()}
                    />
                )}
                {this.state.token && (
                    <Metrics
                    token={this.state.token}
                    logout={() => this.logout()}
                    />
                    
                )}
            </div>
        )
    }


}

export default Spotify;




