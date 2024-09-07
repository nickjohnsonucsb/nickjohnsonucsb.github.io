import React, { useState, useMemo } from "react";
import Zoom from "react-medium-image-zoom";
import "../styles/App.css";
import AppNavbar from "../components/AppNavbar";
import TypeWriter from "../components/home/TypeWriter.js";
import ExperienceArticle from "../components/home/ExperienceArticle.js";

import SchoolSelfieImg from "../styles/selfie.jpg";
import SecretsRotationImg from "../styles/SecretsRotationWorkflow.png";
import Info360Img from "../styles/Info360Tool.png";
import DLSImg from "../styles/Data-Lit-Series.png";
import DTEHeadImg from "../styles/Data-Tool-Explorer-Head.png";
import DTETable from "../styles/Data-Tool-Explorer-Table.png";
import NewsEventsImg from "../styles/News-And-Events.png";
import Portfolio from "../components/PortfolioGame";
import GoogleDocIcon from "../styles/GoogleDocIcon.png";
import briefcase from "../styles/briefcase.png";
import tatemLogo from "../styles/tatemLogo.png";
import autodeskLogo from "../styles/autodeskLogo.png";
import ucsbLogo from "../styles/ucsbLogo.png";
import folderIcon from "../styles/folderIcon.png";
import mailIcon from "../styles/mailIcon.png";
import ucsbSchoolLogo from "../styles/ucsbSchoolLogo.png";

import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-medium-image-zoom/dist/styles.css";

const phrases = [
  { text: "Nick", speed: 100, delay: 8000 },
  { text: "a Software Engineer", speed: 75 },
  { text: "a Full Stack Developer", speed: 50 },
  { text: "a React Developer", speed: 75 },
];

const JOBS = [
  {
    company: "Tatem.com",
    date: "January 2024, Current Position",
    jobTitle: "Software Engineer",

    summary: (
      <>
        Founding team and core engineer for a local-first email client with
        thousands of wait-listed users. I <b>develop core UI/UX features</b>{" "}
        using{" "}
        <b>
          Typescript, React.js, Next.js, MobX, Tailwind, Node, and Supabase
          (PostgreSQL),
        </b>{" "}
        prompting thousands of new sign-ups and praise from{" "}
        <a
          href="https://francescod.medium.com/10-hot-productivity-apps-for-2024-e45e68f2ee22"
          rel="noopener noreferrer"
          target="_blank"
        >
          Medium
        </a>{" "}
        and{" "}
        <a
          href="https://godly.website/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Godly
        </a>
        .
      </>
    ),
    description: (
      <ul>
        <li>
          Implemented a local <b>cache database</b> with <b>IndexDB</b> that
          reduces loading time by over 90%.
        </li>
        <li>
          Shipped the <b>undo/redo action feature</b> by designing a{" "}
          <b>command pattern</b> with a transaction management queue and log
          that also manages error-handling and validation for each request, and
          decouples the client’s UI from the backend.
        </li>
        <li>
          Designed a <b>Real-Time, Online Auto-Save feature</b> with a
          prioritized mutex lock that manages concurrency and prioritizes the
          last request in a sequence for minimizing sent requests and bandwidth
          usage.
        </li>
        <li>
          Used React-PDF to build our first ever{" "}
          <b>custom attachment and PDF viewer</b>. I built several pdf
          functionalities from scratch including the Search Text feature to
          find specified pieces of text from the parsed PDF data.
        </li>
      </ul>
    ),
    logo: tatemLogo,
  },
  {
    company: "Autodesk",
    date: "June 2023 - September 2023",
    jobTitle: "Full Stack Developer Intern",

    summary: (
      <>
        Designed backend architecture of{" "}
        <b>RESTful APIs and SaaS microservices</b> using cloud computing with{" "}
        <b>
          AWS Cloud Services, Serverless Framework, Typescript, React, Node,
          Webpack, Jest, Snowflake (SQL) and MongoDB (NoSQL)
        </b>
        .
      </>
    ),
    description: (
      <ul>
        <li>
          Developed scalable REST APIs using relational (Snowflake - SQL) and
          non-relational (MongoDB - NoSQL) databases, constructing complex
          queries for{" "}
          <b>large volume, time-series data processing and retrieval</b>.
        </li>
        <li>
          <span className="d-flex flex-row justify-content-between  align-items-center">
            <span>
              Architected a <b>cross-app integration</b> between Info360
              Insight and InfoWater Pro by scaling APIs to support both
              'virtual' and 'physical' sensor data for a dynamic analytics
              feature.
            </span>
            <Zoom>
              <img
                src={Info360Img}
                alt="img"
                className="rounded-circle overflow-hidden ratio ratio-1x1 zoomable experience-desc-img"
              />
            </Zoom>
          </span>
        </li>
        <li>
          <span className="d-flex flex-row justify-content-between align-items-center">
            <span>
              {" "}
              Solved a <b>critical database vulnerability</b> by migrating
              multiple backend microservice applications to a new,
              audit-compliant workflow with automated database credentials
              rotation. Also implemented a new cache layer inside server memory
              that improved database access time by 99%.
            </span>{" "}
            <Zoom>
              <img
                src={SecretsRotationImg}
                alt="img"
                className="rounded-circle overflow-hidden ratio ratio-1x1 zoomable experience-desc-img"
              />
            </Zoom>
          </span>
        </li>
        <li>
          <a
            href="https://docs.google.com/presentation/d/1s9g_U7cg106SX7-eNdxrJ8ZT99eC2Sgn/edit?usp=sharing&ouid=118381956792979436680&rtpof=true&sd=true"
            rel="noopener noreferrer"
            target="_blank"
          >
            Made an intern presentation for my accomplishments.
          </a>
        </li>
      </ul>
    ),
    logo: autodeskLogo,
  },
  {
    company: "Research Data Department, UCSB",
    date: "January 2023 - June 2023",
    jobTitle: "Frontend Software Engineer",

    summary: (
      <>
        Frontend engineer for{" "}
        <a
          href="http://rcd.ucsb.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          rcd.ucsb.edu
        </a>
        , designing and developing the official website for centralizing UCSB
        research data.
      </>
    ),
    description: (
      <ul>
        <li>
          Designed responsive web page templates under a university theme with {' '}
          <b>Twig, PHP, Javascript, Bootstrap CSS, and HTML</b>, and resolved
          issues with hosting, security, and performance with Pantheon.
        </li>
        <li>
          <b>Scripted a CI pipeline with github actions</b> to automate syncing
          the git repositories in GitHub and Pantheon.
        </li>
        <li>
          Designed each new page to be scalable with an interface for admins to
          easily input new multi-media content into each page.
          <span className="d-flex flex-row justify-content-between  align-items-center mt-3 experience-img-list">
            <Zoom>
              <img
                src={DLSImg}
                alt="img"
                className="rounded-circle overflow-hidden ratio ratio-1x1 zoomable experience-desc-img-cover"
              />
            </Zoom>
            <Zoom>
              <img
                src={DTEHeadImg}
                alt="img"
                className="rounded-circle overflow-hidden ratio ratio-1x1 zoomable experience-desc-img-cover"
              />
            </Zoom>
            <Zoom>
              <img
                src={DTETable}
                alt="img"
                className="rounded-circle overflow-hidden ratio ratio-1x1 zoomable experience-desc-img-cover"
              />
            </Zoom>
            <Zoom>
              <img
                src={NewsEventsImg}
                alt="img"
                className="rounded-circle overflow-hidden ratio ratio-1x1 zoomable experience-desc-img-cover"
              />
            </Zoom>
          </span>
        </li>
      </ul>
    ),
    logo: ucsbLogo,
  },
];

const Home = () => {
  const [isVidLoaded, setIsVidLoaded] = useState(false);
  const isMobile = window.innerWidth <= 500;
  return (
    <body>
      <AppNavbar />

      <div className="position-relative video-background" onP>
        <video
          onCanPlayThrough={() => {
            setIsVidLoaded(true);
          }}
          onWaiting={() => setIsVidLoaded(false)}
          onPlay={() => {
            setIsVidLoaded(true);
          }}
          onPause={() => {
            const video = document.getElementById("video");
            video?.play();
          }}
          autoPlay
          playsInline
          muted
          loop
          id={"video"}
          className={
            "min-h-100 min-w-100 " + (isVidLoaded ? "opacity-1" : "opacity-0")
          }
          poster={
            isMobile
              ? "https://res.cloudinary.com/dukfn2auq/image/upload/f_auto,q_50/6775423-uhd-1440-2560-24fps_skr8rx"
              : "https://res.cloudinary.com/dukfn2auq/image/upload/f_auto,q_25/v1724344680/zpeuyljbohnycvuryvhr.webp"
          }
          style={{
            minWidth: "100%",
            zIndex: 0,
            background: "no-repeat",
            backgroundSize: "cover",
            transition: "opacity 2.5s cubic-bezier(0.39, 0.58, 0.57, 1)",
          }}
        >
          {isMobile ? (
            <source src="https://res.cloudinary.com/dukfn2auq/video/upload/f_auto:video,q_auto,h_700/6775423-uhd_1440_2560_24fps_online-video-cutter.com_v9ebug" />
          ) : (
            <>
              <source src="https://res.cloudinary.com/dukfn2auq/video/upload/f_mp4,vc_h265,q_auto,dpr_1.0/v1724442280/mkamvvkkwek8qnqxq9cc.mp4" />
              <source src="https://res.cloudinary.com/dukfn2auq/video/upload/f_auto:video,q_auto/ygpgde2pqjtmqhcdohno" />
            </>
          )}
        </video>
        <div className="position-absolute w-100 h-100 overlay-video" />
        <div
          className="d-flex flex-column position-relative playfair-text text-white h-100 mx-auto content-width justify-content-center align-items-center "
          style={{ zIndex: 2, paddingTop: "70px", gap: "100px" }}
        >
          <div className="text-center">
            <h1 className="title-lg">Software Engineer</h1>
            <h3 className="title-sm"> @ Tatem.com </h3>
            <h2 className="title-md">Nicolas Johnson</h2>
            <p className="subtitle-lg">
              2023 Computer Science Alumni of UC, Santa Barbara <br />
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-center bento-wrapper">
            <div
              className="d-grid bento-box"
              style={{
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateRows: "repeat(2, 1fr)",
              }}
            >
              <a
                className="d-flex flex-column bento-cup position-relative peer-overlay"
                style={{
                  gridColumn: "span 1",
                  gridRow: "span 2",
                }}
                rel="noopener noreferrer"
                target="_blank"
                href="https://docs.google.com/document/d/1RWd7uCKfkDe67xbidVGh_AKg8-NgWV1GUOjtVptbjOI/edit?usp=sharing"
              >
                <div className="position-absolute hover-overlay w-100 h-100 start-0 top-0" />
                <div id="resume-card">
                  <div className="go-up-big position-relative">
                    <img
                      src={GoogleDocIcon}
                      style={{ width: "65px" }}
                      className="mb-1"
                    />
                    <p className="subtitle-lg bento-text">Resume</p>
                  </div>
                </div>
              </a>
              <a
                className="d-flex flex-row align-items-center bento-cup justify-content-center gap-4 position-relative peer-overlay"
                style={{
                  gridColumn: "span 3",
                  gridRow: "span 1",
                }}
                href="/#my-experience"
              >
                <div className="position-absolute hover-overlay w-100 h-100" />
                <div className="go-up d-flex flex-row align-items-center justify-content-center gap-3 position-relative">
                  <img src={briefcase} id="briefcase-img" />
                  <p className="subtitle-lg bento-text">Work Experience</p>
                </div>
              </a>
              <a
                className="d-flex flex-row align-items-center bento-cup justify-content-center  gap-2 position-relative peer-overlay position-relative"
                style={{
                  gridColumn: "span 2",
                  gridRow: "span 1",
                }}
                href="/#my-portfolio"
              >
                <div className="position-absolute hover-overlay w-100 h-100" />
                <div className="go-up d-flex flex-row align-items-center justify-content-center gap-2 position-relative">
                  <img src={folderIcon} style={{ width: "60px" }} />
                  <p className="subtitle-lg bento-text">Portfolio</p>
                </div>
              </a>
              <a
                className="d-flex flex-row align-items-center bento-cup justify-content-center  gap-2 position-relative peer-overlay"
                style={{
                  gridColumn: "span 1",
                  gridRow: "span 1",
                }}
                href="/#my-contact"
              >
                <div className="position-absolute hover-overlay w-100 h-100" />
                <div className="go-up d-flex flex-row align-items-center justify-content-center gap-2 position-relative">
                  <img src={mailIcon} style={{ width: "50px" }} />
                  <p className="subtitle-lg bento-text">Contact</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="position-relative"
        style={{ zIndex: 1, background: "white" }}
      >
        <div className="playfair-text pt-4 mx-auto d-flex flex-column gap-4 content-width">
          <section className="w-100">
            <div className="d-flex flex-row lh-2">
              <div id="about">
                <h2 className="title-md">
                  Hello, I'm <TypeWriter phrases={phrases} />
                </h2>
                <p className="subtitle-md mb-0">
                  Junior Software Engineer on the founding team of Tatem.
                </p>
                <p className="text-p">
                  Currently very interested in and active in learning data
                  processing, developing big data pipelines, and machine
                  learning.
                </p>
              </div>

              <div className="rounded-circle overflow-hidden img-cont-lg">
                <img
                  src={SchoolSelfieImg}
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </section>

          <section id="my-experience">
            <div className="d-flex flex-column gap-3">
              <h3 className="title-sm mb-1">Work Experience</h3>
              {JOBS.map((job) => {
                return <ExperienceArticle {...job} />;
              })}
            </div>
          </section>
          <section>
            <div className="d-flex flex-column gap-2 pt-2">
              <h3 className="title-sm mb-1">Education</h3>
              <ExperienceArticle
                symbol={ucsbSchoolLogo}
                jobTitle={
                  <>
                    <div className="extra-space" />
                    <span className="number">2023</span> Computer Science (B.S)
                    Alumni with Engineering High Honors <br /> Major GPA:{" "}
                    <span className="number">4.0 / 4.0</span>
                  </>
                }
                description={
                  <>
                    {" "}
                    <b>
                      Undergraduate Research on Machine Learning Algorithms
                    </b>{" "}
                    <br />
                    <ul>
                      <li> Early Research Scholar Program 2021</li>
                      <li>Mentor: Professor Eric Vigoda</li>
                      <li>
                        <a
                          href="https://drive.google.com/file/d/1DC-eRaMWz5kIyPOvXymQUynyhKVkneeZ/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Project Proposal
                        </a>
                      </li>
                    </ul>
                    <b>
                      Advanced Computer Vision Artificial Intelligence Research
                    </b>
                    <ul>
                      <li>Early Graduate Course Enrollment 2023</li>
                      <li>
                        <a
                          href="https://github.com/tiny-babies/generative_image_extension"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Final Project
                        </a>{" "}
                        - Generative Machine Learning Model for Image Extention
                      </li>
                    </ul>
                  </>
                }
                company={"University of California, Santa Barbara"}
              />
            </div>
          </section>
        </div>
        <div
          className="content-width mx-auto pb-4 text-center playfair-text d-flex flex-column justify-content-center contact"
          id="my-contact"
        >
          <h2 className="title-sm m-0">Let's Connect!</h2>
          <p className="text-p pt-2">
            I'm very active on LinkedIn and would love to connect with you
            there. Or feel free to send me an email if that’s more convenient
            for you. I look forward to connecting!
          </p>
          <p className="subtitle-small mb-1">
            <b>LinkedIn:</b>{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/njohnsonucsb"
            >
              https://www.linkedin.com/in/njohnsonucsb
            </a>
          </p>
          <p className="subtitle-small ">
            <b>Email:</b> nickjamesjohnson@icloud.com
          </p>
        </div>
        <div id="my-portfolio" className="pt-4 mt-4"></div>
        <Portfolio />
      </div>
    </body>
  );
};

export default Home;
