import React, { useState} from 'react';
import Zoom from 'react-medium-image-zoom'
import '../styles/App.css';
import AppNavbar from '../components/AppNavbar';

import SchoolSelfieImg from '../styles/school-selfie.jpg'
import SecretsRotationImg from '../styles/SecretsRotationWorkflow.png'
import Info360Img from '../styles/Info360Tool.png'
import DLSImg from '../styles/Data-Lit-Series.png'
import DTEHeadImg from '../styles/Data-Tool-Explorer-Head.png'
import DTETable from '../styles/Data-Tool-Explorer-Table.png'
import NewsEventsImg from '../styles/News-And-Events.png'
import Portfolio from '../components/PortfolioGame';

import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import 'react-medium-image-zoom/dist/styles.css'





const Home = () => {

    const[toggleMore1, setToggleMore1] = useState(false);
    const[toggleMore2, setToggleMore2] = useState(false);


   
   



    return (
        <body>
            <AppNavbar />
            <div id="home-resume"></div>
            <div className="app-top-margin"></div>

            <div className="app-intro body" id="home-top">

                <div className="website-info" id="website-head-text">
                    <div className="name-title">
                        <div id='header-text'>
                            <h1>Software Engineer</h1>
                            <h2>Nicolas Johnson</h2>
                            <p>2023 Alumni of University of California, Santa Barbara <br/>Computer Science</p>

                            <p id="email">Contact: NickJohnsonUCSB@gmail.com</p>
                        </div>
                        
                       
                    </div>
                    <img id="app-intro-gif" src="https://i.pinimg.com/originals/f5/8f/e8/f58fe8e19a7e25ddf0c459a3599261d6.gif"></img>
                </div>
                <div className="button-links">
                    <ul id="contact-list">
                        <li title='LinikedIn'>
                            <a className="btn btn-lg btn-info" href="https://www.linkedin.com/in/njohnsonucsb" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin contact-icon" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                </svg>
                            </a>
                        </li>

                        <li title='GitHub'>
                            <a href="https://github.com/tiny-babies" target="_blank" className="btn btn-lg btn-info" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github contact-icon" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://docs.google.com/document/d/1RWd7uCKfkDe67xbidVGh_AKg8-NgWV1GUOjtVptbjOI/edit?usp=sharing" target="_blank" className="btn btn-lg btn-info" rel="noopener noreferrer">
                                <p className="contact-icon contact-icon-text">Resume</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1OJ4vu-6smOw_TnlQL3q5UnoCKjnrl3wT/view?usp=sharing" target="_blank" className="btn btn-lg btn-info" rel="noopener noreferrer">
                                <p className="contact-icon contact-icon-text">Transcript</p>
                            </a>
                        </li>


                    </ul>

                </div>

                <div className="app-intro-info">
                    <h1>Work Experience</h1>
                    <div className="app-intro-row">
                        <img src="https://i.pinimg.com/originals/c4/cb/e0/c4cbe0d6552d2fb6c1483f6bff42225d.gif"></img>
                        <div>
                            <h3 id="autodesk-title" className="work-experience-titles">Software Engineer Intern @ Autodesk</h3>
                            <p>
                                <ul>
                                    <li>June - September 2023</li>
                                    <li>Cloud computing with <b>AWS Cloud Services</b> to build serverless, scalable <b>REST APIs</b> using both relational (Snowflake - <b>SQL</b>) and non-relational (MongoDB - <b>NoSQL</b>) databases to construct complex queries for dynamic, large volume data retrieval.</li>
                                    <li><b>Developed a cross-application integration.</b> between Info360 Insight and InfoWater Pro.
                                    </li>
                                    <li>Solved a <b>database vulnerability</b> issue with implementing a Secrets Rotation Workflow with AWS.</li>
                                    <li>Improved an essential endpoint’s performance with <b>99% latency reduction.</b></li>
                                    <li>Architected serverless, event-driven microservices by developing <b>AWS Lambdas</b> with <b>Node.js and Typescript and with Jest Unit testing.</b><br />
                                        <button className="btn btn-dark more-button" type="button" onClick={() => setToggleMore1(!toggleMore1)}>{toggleMore1 ? "Hide" : "More"}</button>
                                        </li>
                                </ul>
                            </p>
                            
                        </div>

                    </div>
 
                    <div className={`more-info ${toggleMore1 ? 'more-info-show' : ''}`}>
                        <h5><b>Cross Application Integration between InfoWater Pro and Info360 Insight.</b></h5>
                        <ul>
                            <li>
                                Experimental feature requested by a client.
                            </li>
                            <li>
                                I edited and scaled some existing APIs, as well as <b>created new APIs for dynamic water usage retrieval.</b>
                            </li>
                            <li>
                                <b>SaaS backend development</b> with Node.js, Typescript, MongoDB, and Snowflake SQL.
                            </li>
                        </ul>
                        <h5><b>AWS Secrets Rotation Workflow Implementation</b></h5>
                        <ul>
                            <li>
                                <b>Solved a database vulnerability</b> in my team's SaaS backend repositories.
                            </li>
                            <li>
                                Used AWS Secrets Manager and an AWS Lambda function to rotate database credentials every month.
                            </li>
                            <li>
                                <b>Refactored</b> how each repository accesses the databases, and scaled the SaaS service for secrets rotation to include those repositories.
                            </li>
                            <li>
                                Using <b>infrastructure as code</b>, added a cache layer for speed-up of fetching database access credentials, <b>reducing latency by 99%</b> from 500ms to 4ms.
                            </li>
                        </ul>
                        <h5><a href="https://docs.google.com/presentation/d/1s9g_U7cg106SX7-eNdxrJ8ZT99eC2Sgn/edit?usp=sharing&ouid=118381956792979436680&rtpof=true&sd=true" rel="noopener noreferrer" target="_blank" >View my intern presentation.</a></h5>
                        <div className="website-info">
                            <Zoom style={{ width: "40%", }}>
                                <img src={Info360Img} alt="img" style={{ width: "450px", }}/>
                            </Zoom>
                            <Zoom style={{ width: "40%", }}>
                                <img src={SecretsRotationImg} alt="img" style={{ width: "400px", }}/>
                            </Zoom>
                            
                            
                        </div>
                       
                    </div>
                    

                    <div className="app-intro-row">
                        <img src="https://i.pinimg.com/originals/9f/92/6c/9f926c8c220127d81c8ba6897aa8d5db.gif"></img>
                        <div>
                            <h4 id="frontend-title" className="work-experience-titles">Frontend Software Engineer @ Data Research Department, UCSB</h4>
                            <p>
                                  <ul>
                                <li>
                                    January - June 2023
                                </li>
                                <li>Part-Time <b>Lead Frontend Engineer </b> of a small multidisciplinary team that is funded to create an official university website for centralizing UCSB Data Research.</li>
                                    <li>Designed and developed <b>responsive and scalable web page templates</b>, ensuring consistent university web theme and user experience across all devices using <b>PHP, Javascript, CSS, and HTML.</b>
                                    </li>
                                    <li>
                                        <b>Scripted a CI pipeline</b> to integrate hosting platforms with automated repository synchronization between GitHub and Pantheon.<br />
                                        <button className="btn btn-dark more-button" type="button" onClick={() => setToggleMore2(!toggleMore2)}>{toggleMore2 ? "Hide" : "More"}</button>
                                    </li>
        
                                    
                                    
                            </ul>
                            </p>
                          
                        </div>
                    </div>
                    <div className={`more-info ${toggleMore2 ? 'more-info-show' : ''}`}>
                        <b>The Data Research Deparment is a new department funded by the University of California, Santa Barbara with an iniative to centralize all the data research resources on campus.</b>
                        <h5 className="mt-2"><b>Lead Frontend Engineer</b></h5>
                        <ul>
                            <li>
                                Team of five multidisciplinary members with two other developers.
                            </li>
                            <li>
                                Orchestrated a content expansion initiative that increased the website’s size by over 400% incorporating new pages and multimedia content.
                            </li>
                            <li>
                                Actively monitored and resolved issues related to hosting, performance, security, and scalability with Pantheon.

                            </li>
                            <li>
                                The only student and undergrad hired onto the team.
                            </li>
                        </ul>
                        <h5>Image Portfolio of the web pages I created:</h5>
                        <div className="website-info mb-5">
                            <Zoom style={{ width: "20%", }}>
                                <img src={DLSImg} alt="img" style={{ height: "150px", }} />
                            </Zoom>
                            <Zoom style={{ width: "20%", }}>
                                <img src={DTEHeadImg} alt="img" style={{ height: "150px", }} />
                            </Zoom>
                            <Zoom style={{ width: "20%", }}>
                                <img src={DTETable} alt="img" style={{ height: "150px", }} />
                            </Zoom>
                            <Zoom style={{ width: "20%", }}>
                                <img src={NewsEventsImg} alt="img" style={{ height: "150px", }} />
                            </Zoom>


                        </div>
                    </div>

                    

                    <h1 className="mt-4">Education</h1>
                    <div className="app-intro-row mb-5" id="education-row">
                        <img src={SchoolSelfieImg} id="school-selfie" ></img>
                        <div id="education">
                            <h4>University of California, Santa Barbara</h4>
                            <p> <b>2023 Computer Science (B.S) Alumni with Engineering High Honors </b><br />
                                <b>GPA: 3.93 / 4.00</b> <br />
                                <b>Undergraduate Research on Machine Learning Algorithms</b> <br />
                                <ul>
                                    <li> Early Research Scholar Program 2021</li>
                                    <li>Mentor: Professor Eric Vigoda</li>
                                    <li><a href="https://drive.google.com/file/d/1DC-eRaMWz5kIyPOvXymQUynyhKVkneeZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">Project Proposal</a></li>
                                </ul>
                                
                                <b>Advanced Computer Vision Artificial Intelligence Research</b>
                                <ul>
                                    <li>Early Graduate Course Enrollment 2023</li>
                                    <li><a href="https://github.com/tiny-babies/generative_image_extension" target="_blank" rel="noopener noreferrer">Final Project</a> - Generative Machine Learning Model for Image Extention</li>
                                </ul>
                            </p>
                        </div>
                    </div>


                </div>

            </div>
            

            <div id="my-portfolio"></div>
            <Portfolio/>

           

            <div className="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">
                        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <svg class="bi" width="30" height="24"></svg>
                        </a>
                        <span class="mb-3 mb-md-0 text-muted">Nicolas Johnson</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li class="ms-3"> <a className="btn btn-lg btn-info" href="https://www.linkedin.com/in/njohnsonucsb" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin contact-icon" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </a></li>
                        <li class="ms-3"><a href="https://github.com/tiny-babies" target="_blank" className="btn btn-lg btn-info" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github contact-icon" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a></li>
                        <li class="ms-3"></li>
                    </ul>
                </footer>
            </div>


        </body>
    );
}

export default Home;