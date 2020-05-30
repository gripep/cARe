import React, { Component } from "react";

// react-fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faRssSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-bottom navbar-light bg-primary">
        <div class="collapse navbar-collapse">
          <div className="container-fluid">
            <div className="row justify-content-md-center">
              <div className="col-4 col-md-auto">
                <ul class="navbar-nav mr-auto">
                  <li>
                    <a className="nav-link mr-5 ml-5" href="#">
                      <FontAwesomeIcon icon={faHome} size="3x" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Home
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="nav-link mr-5 ml-5" href="#">
                      <FontAwesomeIcon icon={faRssSquare} size="3x" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        News
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link mr-5 ml-5"
                      href="https://github.com/gripep/cARe"
                    >
                      <FontAwesomeIcon icon={faGithub} size="3x" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        GitHub
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
