import React, { useEffect, useState } from "react";
import pieChartPic from "../styles/PieChartEx.png";
import databricksImg from "../styles/databricks.png";
import barChartPic from "../styles/BaChartEx.png";
import spotifyLogo from "../styles/Spotify_Logo_RGB_Green.png";
import cookbookHomePic from "../styles/cookbook-home.png";
import cookbookFriendsPic from "../styles/cookbook-friends.png";
import cookbookCommentsPic from "../styles/cookbook-comments.png";
import courseListPic from "../styles/courseListEx.png";
import Zoom from "react-medium-image-zoom";

const Portfolio = () => {
  const [isStartScreen, setIsStartScreen] = useState(true);
  const [isLoadScreen, setIsLoadScreen] = useState(false);

  const [isUTuneScreen, setIsUTuneScreen] = useState(false);
  const [isDatabricksScene, setIsDatabricksScene] = useState(false);
  const [isCookbookSocialScreen, setIsCookbookSocialScreen] = useState(false);
  const [isGenerativeImageScreen, setIsGenerativeImageScreen] = useState(false);
  const [isUniversityAppScreen, setIsUniversityAppScreen] = useState(false);
  const [isPacManScreen, setIsPacManScreen] = useState(false);
  const [isYelpCampScreen, setIsYelpCampScreen] = useState(false);

  const StartScreen = () => {
    return (
      <div className="start-screen">
        <h1 className="app-head-text"> NICOLAS JOHNSON </h1>
        <h2 className="app-head-text">PORTFOLIO</h2>
        <div className="d-flex justify-content-center">
          <button
            class="play-button"
            onClick={() => {
              setIsStartScreen(false);
              setIsLoadScreen(true);
            }}
          >
            START
          </button>
        </div>
      </div>
    );
  };

  const YelpCampScreen = () => {
    return (
      <div className="yelpCamp-screen project-screen">
        <div className="project-content">
          <div className="project-top">
            <button
              className="return-button"
              onClick={() => {
                setIsLoadScreen(true);
                setIsYelpCampScreen(false);
              }}
            >
              &lt; &lt; &nbsp; &nbsp; Return
            </button>
          </div>
          <h1>Yelp-Camp</h1>
          <div className="project-columns">
            <div>
              Full stack project that allows users to post campgrounds and leave
              reviews.
              <ul>
                <li>Uses Node.js, Express.js, EJS, and MongoDB.</li>
                <li>Uses Cloudinary API to upload and save user images.</li>
                <li>Passport for user login and authentication.</li>
                <li>Following a Udemy web developer bootcamp.</li>
              </ul>
            </div>
            <div className="project-images">
              <Zoom>
                <img
                  src="https://user-images.githubusercontent.com/91104605/154908905-6b821194-2f41-4980-ba98-9b4c1d79f873.png"
                  alt="img"
                />
              </Zoom>
              <Zoom>
                <img
                  src="https://user-images.githubusercontent.com/91104605/154909027-deb11710-7ff9-47c3-86d4-ff7505c1c35a.png"
                  alt="img"
                />
              </Zoom>
            </div>
          </div>

          <a
            className="btn btn-primary mt-5"
            href="https://github.com/tiny-babies/VaxMan"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository
          </a>
        </div>
      </div>
    );
  };

  const PacmMnScreen = () => {
    return (
      <div className="pacMan-screen project-screen">
        <div className="project-content">
          <div className="project-top">
            <button
              className="return-button"
              onClick={() => {
                setIsLoadScreen(true);
                setIsPacManScreen(false);
              }}
            >
              &lt; &lt; &nbsp; &nbsp; Return
            </button>
          </div>
          <h1>Reverse Pac-Man</h1>
          <div className="project-columns">
            <div>
              Using Python PyGame, created a simple 2D video game that uses WASD
              controls to move Pac-Man to try and cure the infected ghosts. The
              infected ghosts duplicate in time intervals.
              <ul>
                <li>Whole game coded in python.</li>
                <li>
                  Created the game-logic and the randomized non-player movement.
                </li>
                <li>Created and rendered my own map.</li>
              </ul>
            </div>
            <div className="project-images">
              <Zoom>
                <img
                  src="https://user-images.githubusercontent.com/91104605/154907911-c621400b-da7e-4d53-b98c-f822643d8571.png"
                  alt="img"
                />
              </Zoom>
              <Zoom>
                <img
                  src="https://user-images.githubusercontent.com/91104605/154908077-aacee132-af07-47cc-87db-410e711b5d73.png"
                  alt="img"
                />
              </Zoom>
              <Zoom>
                <img
                  src="https://user-images.githubusercontent.com/91104605/154908116-9121da32-1e09-4829-91bf-548c14ebddd0.png"
                  alt="img"
                />
              </Zoom>
            </div>
          </div>

          <a
            className="btn btn-primary mt-5"
            href="https://github.com/tiny-babies/VaxMan"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository
          </a>
        </div>
      </div>
    );
  };

  const UniversityAppScreen = () => {
    return (
      <div className="universityApp-screen project-screen">
        <div className="project-content">
          <div className="project-top">
            <button
              className="return-button"
              onClick={() => {
                setIsLoadScreen(true);
                setIsUniversityAppScreen(false);
              }}
            >
              &lt; &lt; &nbsp; &nbsp; Return
            </button>
          </div>
          <h1>University Course Search App for UCSB</h1>
          <div className="project-columns">
            <div>
              Team-based project for CS156: Advanced Applications Programming.
              Allows students to search through the University of California,
              Santa Barbara's courses and course history, and to login with a
              student email to create a student schedule.
              <ul>
                <li>
                  Node.js and Spring-Boot Java back-end with Pitest and Junit
                  testing.
                </li>
                <li>
                  Developed back-end API endpoints with SwaggerIO to establish
                  CRUD operations with MongoDB to store user course schedule
                  data.
                </li>
                <li>
                  Established API endpoints to query for courses at UC Santa
                  Barbara.
                </li>
                <li>
                  Developed React components that consume the back-end RESTful
                  API endpoints in order to design pages for listing and
                  creating student schedules.
                </li>
                <li>
                  React front-end testing with Jest and mutation testing with
                  Stryker.
                </li>
                <li>Simulated Agile Envrionment with GitHub.</li>
                <li>Class Grade: A+ (WINTER 2022)</li>
              </ul>
            </div>
            <div className="project-images">
              <Zoom>
                <img src={courseListPic} alt="img" />
              </Zoom>
            </div>
          </div>

          <a
            className="btn btn-primary mt-5"
            href="https://github.com/tiny-babies/university-course-search-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository
          </a>
        </div>
      </div>
    );
  };

  const GenerativeImageScreen = () => {
    return (
      <div className="generativeImage-screen project-screen">
        <div className="project-content">
          <div className="project-top">
            <button
              className="return-button"
              onClick={() => {
                setIsLoadScreen(true);
                setIsGenerativeImageScreen(false);
              }}
            >
              &lt; &lt; &nbsp; &nbsp; Return
            </button>
          </div>
          <h1>Generative Image Extention using DeepFill v2</h1>
          <div className="project-columns">
            <div>
              DeepFill v2 is an open source Image Inpainting model that uses
              contextual attention. I edited and fine-tuned the model to extend
              its capabilities for image extention.
              <ul>
                <li>
                  Pre-processed a Places2 dataset from Kaggle with NumPy:
                  filtering outliers, and placing masks on the input images.
                </li>
                <li>
                  Fed the dataset into a pre-trained deepfill v2 model to
                  enhance performance on image extention, using Random Search
                  for hyperparameter tuning.
                </li>
                <li>
                  Edited the model to consider masks that are outside of the
                  known image in order to extend the image on those masks.
                </li>
                <li>
                  The model uses a contextual attention layer to compute an
                  attention score for each missing pixel relating to surrounding
                  patches. Dilated Convolution layers are performed before and
                  in parallel with the attention layer before results are fed
                  into the decoder to get the result.
                </li>
              </ul>
            </div>
            <div className="project-images">
              <Zoom>
                <img
                  src="https://github.com/tiny-babies/generative_image_extension/raw/main/Examples/ex1/originalImg.jpg"
                  alt="img"
                />
              </Zoom>
              <Zoom>
                <img
                  src="https://github.com/tiny-babies/generative_image_extension/raw/main/Examples/ex1/output_Mirroring_FineTuned.png"
                  alt="img"
                />
              </Zoom>
              <Zoom>
                <img
                  src="https://github.com/tiny-babies/generative_image_extension/raw/main/Examples/ex7/originalImg.jpg"
                  alt="img"
                />
              </Zoom>
              <Zoom>
                <img
                  src="https://github.com/tiny-babies/generative_image_extension/raw/main/Examples/ex7/output_Mirroring_FineTuned.png"
                  alt="img"
                />
              </Zoom>
            </div>
          </div>

          <a
            className="btn btn-primary mt-5"
            href="https://github.com/tiny-babies/generative_image_extension"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository
          </a>
        </div>
      </div>
    );
  };

  const CookbooksocialScreen = () => {
    return (
      <div className="cookbookSocial-screen project-screen">
        <div className="project-content">
          <div className="project-top">
            <button
              className="return-button"
              onClick={() => {
                setIsLoadScreen(true);
                setIsCookbookSocialScreen(false);
              }}
            >
              &lt; &lt; &nbsp; &nbsp; Return
            </button>
          </div>
          <h1>
            Cookbook Social: Full-Stack, MVP Social Media App for sharing food
            posts.
          </h1>
          <div className="project-columns">
            <div>
              Log in with Google OAuth, and make friends, comment, like, and
              share posts, and search through recipes. Build your own account
              with creating posts with a personal webpage that showcases
              everything you've shared!
              <ul>
                <li>
                  Frontend with React.js and backend APIs with Express.js.
                </li>
                <li>Google OAuth for authentication.</li>
                <li>
                  Google's Firebase (noSQL) and Firestore to upload images and
                  store user information.
                </li>
                <li>
                  Made with a team of 5 members. I worked on the backend APIs
                  and frontend React pages for making and editing posts and also
                  for the friends feature which includes sending and accepting
                  friend requests.
                </li>
              </ul>
            </div>
            <div className="project-images">
              <Zoom>
                <img src={cookbookHomePic} alt="img" />
              </Zoom>
              <Zoom>
                <img src={cookbookFriendsPic} alt="img" />
              </Zoom>
              <Zoom>
                <img src={cookbookCommentsPic} alt="img" />
              </Zoom>
            </div>
          </div>

          <a
            className="btn btn-success mt-5"
            href="https://cookbook-social.herokuapp.com/profile/9Es45fOkOBa5BO9oUSdZ5R7ZFvA2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Cookbook Social
          </a>
          <a
            className="btn btn-primary mt-5 mx-5"
            href="https://github.com/tiny-babies/cookbook-social"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository
          </a>
        </div>
      </div>
    );
  };

  const UTuneScreen = () => {
    return (
      <div className="utune-screen project-screen">
        <div className="project-content">
          <div className="project-top">
            <button
              className="return-button"
              onClick={() => {
                setIsLoadScreen(true);
                setIsUTuneScreen(false);
              }}
            >
              &lt; &lt; &nbsp; &nbsp; Return
            </button>
          </div>
          <h1>
            UTune:{" "}
            <img
              src={spotifyLogo}
              alt="img"
              style={{ width: "12%", marginInline: "8px" }}
            ></img>{" "}
            Analysis App
          </h1>
          <div className="project-columns">
            <div>
              Log into your Spotify account to see insight into your favorite
              artists and music.
              <ul>
                <li>Frontend project with Node.js and React.</li>
                <li>Axios to consume data from the Spotify Web API.</li>
                <li>
                  React components that compute additional insight into the
                  Spotify song statistics.
                </li>
                <li>
                  Chart.js and Bootstrap to design React pages and components to
                  display Spotify information.
                </li>
              </ul>
            </div>
            <div className="project-images">
              <Zoom>
                <img src={pieChartPic} alt="img" />
              </Zoom>

              <Zoom>
                <img src={barChartPic} alt="img" />
              </Zoom>
            </div>
          </div>

          <a
            className="btn btn-success mt-5"
            href="/utune"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open UTune
          </a>
          <a
            className="btn btn-primary mt-5 mx-5"
            href="https://github.com/tiny-babies/tiny-babies.github.io/tree/master"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository
          </a>
        </div>
      </div>
    );
  };
  const DatabrickScene = () => {
    return (
      <div className="databricks-screen project-screen">
        <div className="project-content">
          <div className="project-top">
            <button
              className="return-button"
              onClick={() => {
                setIsLoadScreen(true);
                setIsDatabricksScene(false);
              }}
            >
              &lt; &lt; &nbsp; &nbsp; Return
            </button>
          </div>
          <h1>Databricks with Apache Spark.</h1>
          <div className="project-columns">
            <div>
              Used Databricks's Delta Live Tables and PySpark to create a big
              data pipeline to process financial regulatory data.
              <ul>
                <li>
                  Runs a Delta Live Tables pipeline to ingest granular,
                  semi-structured (CSV / JSON), financial regulatory records.
                </li>
                <li>
                  Uses PySpark to schematize data so that it can be stored into
                  a SQL table.
                </li>
                <li>
                  Also uses a PySpark module to enforce the Financial Regulatory
                  Data Standard onto the records to ensure that they pass
                  supposed thresholds and expecations.
                </li>
                <li>
                  Quarantines records that fail the expectations into a separate
                  SQL table so that they could supposedly be reviewed.
                </li>
              </ul>
            </div>
            <div className="project-images">
              <Zoom>
                <img src={databricksImg} alt="img" />
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const LoadScreen = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      setLoaded(true);
    }, []);

    return (
      <div className={`load-screen`}>
        <div className={`game-content  ${loaded ? "loaded" : ""}`}>
          <h2>Project Select</h2>
          <div className="load-screen-grid">
            <div
              className="project-item"
              onClick={() => {
                setIsDatabricksScene(true);
                setIsLoadScreen(false);
              }}
            >
              <h4>Databricks with Apache Spark</h4>
              <div className="project-item-container">
                <div
                  style={{ width: "fit-content" }}
                  className="position-relative"
                >
                  <img src="https://i.pinimg.com/originals/85/07/9a/85079a8383f3fe7bcc7cb5dc6306e4c5.gif" />
                  <div className="project-item-overlay">
                    Click for more info. <br />
                  </div>
                </div>
              </div>
              <p className="mx-3">
                Made a <b>big data pipeline with Databricks and PySpark</b> to
                process semi-structured data into a <b>SQL</b> database.
              </p>
            </div>
            <div
              className="project-item"
              onClick={() => {
                setIsUTuneScreen(true);
                setIsLoadScreen(false);
              }}
            >
              <h4>UTune</h4>
              <div className="project-item-container">
                <div
                  style={{ width: "fit-content" }}
                  className="position-relative"
                >
                  <img src="https://i.pinimg.com/originals/68/ae/bf/68aebf4c71bd1d6090f87237272b01e5.gif" />
                  <div className="project-item-overlay">
                    Click for more info. <br />
                    The app is live to try!
                  </div>
                </div>
              </div>
              <p className="mx-3">
                Log into your Spotify account to view personalized insights with
                responsive graphics using{" "}
                <b>Node.js, React, and the Spotify Web API.</b>
              </p>
            </div>
            <div
              className="project-item"
              onClick={() => {
                setIsCookbookSocialScreen(true);
                setIsLoadScreen(false);
              }}
            >
              <h4>Cookbook Social</h4>
              <div className="project-item-container">
                <div
                  style={{ width: "fit-content" }}
                  className="position-relative"
                >
                  <img src="https://i.pinimg.com/originals/ae/5e/e0/ae5ee0667396678bcb67f007443f7842.gif" />
                  <div className="project-item-overlay">
                    Click for more info. <br />
                    The app is live to try!
                  </div>
                </div>
              </div>
              <p className="mx-3">
                <b>Full Stack Social Media app</b> to share food-related posts
                with your friends using{" "}
                <b>
                  Node.js, Express, React, and Google's Firebase and Firestore
                </b>
                .
              </p>
            </div>
            <div
              className="project-item"
              onClick={() => {
                setIsGenerativeImageScreen(true);
                setIsLoadScreen(false);
              }}
            >
              <h4>Generative Image Extention</h4>
              <div className="project-item-container">
                <div
                  style={{ width: "fit-content" }}
                  className="position-relative"
                >
                  <img src="https://i.pinimg.com/originals/74/5c/c9/745cc90fcc688569610f84bc5d2b2fd6.gif" />
                  <div className="project-item-overlay">
                    Click for more info. <br />
                    Repo is on Github.
                  </div>
                </div>
              </div>
              <p className="mx-3">
                <b>Computer Vision AI model</b> that generates images that make
                existing images appear longer using{" "}
                <b>Python, NumPy, TensorFlow.</b>
              </p>
            </div>
            <div
              className="project-item"
              onClick={() => {
                setIsUniversityAppScreen(true);
                setIsLoadScreen(false);
              }}
            >
              <h4>University Course Search App</h4>
              <div className="project-item-container">
                <div
                  style={{ width: "fit-content" }}
                  className="position-relative"
                >
                  <img src="https://i.pinimg.com/originals/7f/e8/58/7fe8583de9ae6252c547130c0c71c095.gif" />
                  <div className="project-item-overlay">
                    Click for more info. <br />
                    Repo is on Github.
                  </div>
                </div>
              </div>
              <p className="mx-3">
                <b>Full Stack web app</b> that allows UCSB students to log in,
                view courses, and create schedules. Done with{" "}
                <b>Spring-Boot, React, and Pitest and JUnit testing.</b>
              </p>
            </div>
            <div
              className="project-item"
              onClick={() => {
                setIsPacManScreen(true);
                setIsLoadScreen(false);
              }}
            >
              <h4>Reverse Pac-Man</h4>
              <div className="project-item-container">
                <div
                  style={{ width: "fit-content" }}
                  className="position-relative"
                >
                  <img src="https://i.pinimg.com/originals/bb/6d/76/bb6d7677244c8427db85c4d7e2a903ca.gif" />
                  <div className="project-item-overlay">
                    Click for more info. <br />
                    Repo is on Github.
                  </div>
                </div>
              </div>
              <p className="mx-3">
                <b>Simple 2D Video Game</b> created with{" "}
                <b>Python and PyGame</b> where Pac-Man must eat the ghosts
                before they duplicate.
              </p>
            </div>
            <div
              className="project-item"
              onClick={() => {
                setIsYelpCampScreen(true);
                setIsLoadScreen(false);
              }}
            >
              <h4>Yelp-Camp</h4>
              <div className="project-item-container">
                <div
                  style={{ width: "fit-content" }}
                  className="position-relative"
                >
                  <img src="https://i.pinimg.com/originals/b4/6c/00/b46c006814f3d668bd495ebfece21405.gif" />
                  <div className="project-item-overlay">
                    Click for more info. <br />
                    Repo is on Github.
                  </div>
                </div>
              </div>
              <p className="mx-3">
                <b>Full Stack web app</b> that allows users to create
                campgrounds and review them. Created with{" "}
                <b>Express and MongoDB.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app-game-scene">
      {isStartScreen && <StartScreen />}
      {isLoadScreen && <LoadScreen />}
      {isUTuneScreen && <UTuneScreen />}
      {isDatabricksScene && <DatabrickScene />}
      {isCookbookSocialScreen && <CookbooksocialScreen />}
      {isGenerativeImageScreen && <GenerativeImageScreen />}
      {isUniversityAppScreen && <UniversityAppScreen />}
      {isPacManScreen && <PacmMnScreen />}
      {isYelpCampScreen && <YelpCampScreen />}
    </div>
  );
};

export default Portfolio;
