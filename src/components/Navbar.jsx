import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav ng-class="hide-on-small-only">
          <ul className="side-nav fixed section table-of-contents">
            <li className="logo">
              <Link
                id="logo-container"
                aria-label="Navigate to the beginning of the page"
                to="/"
                className="brand-logo teal-text"
              >
                <h1 className="my-name">
                  Evelyn Goris
                </h1>
                <span className="brown-text light full-stack">Full Stack Developer</span>
              </Link>
            </li>
            <li className="bold">
              <Link
                aria-label="Navigate to the About section"
                to="/about"
                className="waves-effect waves-dark grey-text"
              >
                <i className="mdi-action-account-box small" />
                <span>About</span>
              </Link>
            </li>
            <li className="bold">
              <Link
                aria-label="Navigate to the Projects section"
                to="/projects"
                className="waves-effect waves-dark deep-purple-text text-lighten-2"
              >
                <i className="mdi-av-web small" />
                <span>Projects</span>
              </Link>
            </li>
            <li className="bold">
              <Link
                aria-label="Navigate to the Skills section"
                to="/skills"
                className="waves-effect waves-dark pink-text text-lighten-2"
              >
                <i className="mdi-av-equalizer small" />
                <span>Skills</span>
              </Link>
            </li>
            <li className="bold">
              <Link
                aria-label="Navigate to the Contact section"
                to="/contact"
                className="waves-effect waves-dark brown-text"
              >
                <i className="mdi-content-mail small" />
                <span>Contact</span>
              </Link>
            </li>
            <li className="bold">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Evelyn's resume in a new tab"
                href="https://drive.google.com/file/d/1Ee9JcUE9xnx-lWTZdjI7rAgECBdcAhMZ/view?usp=sharing"
                className="waves-effect waves-dark grey-text text-darken-3"
              >
                <i className="mdi-action-description small" />
                <span>Resume</span>
              </a>
            </li>
          </ul>
        </nav>
        <nav className="hide-on-large only trigger z-depth-1">
          <a
            aria-label="Toggle visibility of the mobile navbar"
            href="/"
            data-activates="slide-out"
            className="button-collapse"
          >
            <i className="mdi-navigation-menu" />
          </a>
          <div className="name-title">
            <Link
              id="name"
              aria-label="Navigate to the beginning of the page"
              to="/"
              className="teal-text"
            >
              Evelyn Goris
            </Link>
            <span className="brown-text light">Full Stack Developer</span>
          </div>
        </nav>
        <nav className="hide-on-large only">
          <ul id="slide-out" className="side-nav">
            <li className="bold">
              <Link
                aria-label="Navigate to the About section"
                to="/about"
                className="waves-effect waves-dark grey-text"
              >
                <i className="mdi-action-account-box small" />
                <span>About</span>
              </Link>
            </li>
            <li className="bold">
              <Link
                aria-label="Navigate to the Projects section"
                to="/projects"
                className="waves-effect waves-dark deep-purple-text text-lighten-2"
              >
                <i className="mdi-av-web small" />
                <span>Projects</span>
              </Link>
            </li>
            <li className="bold">
              <Link
                aria-label="Navigate to the Skills section"
                to="/skills"
                className="waves-effect waves-dark pink-text text-lighten-2"
              >
                <i className="mdi-av-equalizer small" />
                <span>Skills</span>
              </Link>
            </li>
            <li className="bold">
              <Link
                aria-label="Navigate to the Contact section"
                to="/contact"
                className="waves-effect waves-dark brown-text"
              >
                <i className="mdi-content-mail small" />
                <span>Contact</span>
              </Link>
            </li>
            <li className="bold">
              <a
                aria-label="Open Evelyn's Resume in a new tab"
                href="https://drive.google.com/file/d/1Ee9JcUE9xnx-lWTZdjI7rAgECBdcAhMZ/view?usp=sharing"
                className="waves-effect waves-dark grey-text text-darken-3"
              >
                <i className="mdi-action-description small" />
                <span>Resume</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
