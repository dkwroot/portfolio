import React from "react";

import { Navbar } from "react-bootstrap";

import "./style.css";

const Navigator = props => {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="darkalpha"
      variant="dark"
      fixed="top"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="mx-2 text-white">
          <a href="#TOP">Top</a>
        </div>
        <div className="mx-2 text-white">
          <a href="#PROJECTS">Projects</a>
        </div>
        <div className="mx-2 text-white">
          <a href="#SKILLS">Skills</a>
        </div>
        <div className="mx-2 mr-auto text-white">
          <a href="#CONTACT">Contact</a>
        </div>

        <div className="mx-2 text-white">
          <a href="https://github.com/dkwroot">Github</a>
        </div>
        <div className="mx-2 text-white">
          <a href="https://www.linkedin.com/in/derek-root-595092134/">
            LinkedIn
          </a>
        </div>
        <div className="mx-2 text-white">
          <a href="https://github.com/dkwroot/portfolio/raw/master/src/resources/DEREK_ROOT_RESUME.pdf">
            Resume
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigator;
