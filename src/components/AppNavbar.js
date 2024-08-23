import React from "react";
import { Navbar } from "reactstrap";

const AppNavbar = () => {
  return (
    <header className="mb-auto">
      <Navbar className="justify-content-between navbar-expand-lg App-nav fixed-top">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNavAltMarkup"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link app-nav-item"
                id="app-nav-resume"
                rel="noopener noreferrer"
                target="_blank"
                href="https://docs.google.com/document/d/1RWd7uCKfkDe67xbidVGh_AKg8-NgWV1GUOjtVptbjOI/edit?usp=sharing"
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link app-nav-item"
                id="app-nav-portfolio"
                href="/#my-experience"
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link app-nav-item"
                id="app-nav-portfolio"
                href="/#my-portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link app-nav-item"
                id="app-nav-portfolio"
                href="/#my-contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className="nav-link app-nav-item"
                id="app-nav-spotify"
                href="/utune"
              >
                UTune
              </a>
            </li>
          </ul>
        </div>
      </Navbar>
    </header>
  );
};

export default AppNavbar;
