import React from "react";
import myProjects from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

const Projects = () => {
  let projects = myProjects.map((proj, index) => {
    const imgStyle = {
      gridColumn: "2/3",
      gridRow: "1/3",
      backgroundImage: `url(${proj.IMG})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    };

    const dependencyList = proj.TECH.map((tech, techID) => {
      return (
        <span className="mx-1" key={`tech_${techID}`}>
          <FontAwesomeIcon className="text-white" icon={tech} />
        </span>
      );
    });

    return (
      <div key={`proj_${index}`}>
        <div className="card__info text-white mt-3 d-flex">
          <div className="card__project-name mr-auto">{proj.NAME}</div>
          <div className="">{dependencyList}</div>
        </div>
        <div key={`proj_${index}`} className="card">
          <a href={proj.GIT}>
            <FontAwesomeIcon
              className="text-white h-100 w-100"
              icon={["fab", "github"]}
            />
          </a>
          <a href={proj.DEMO}>
            <FontAwesomeIcon
              className="text-white h-100 w-100"
              icon={"globe"}
            />
          </a>
          <div style={imgStyle} />
        </div>
      </div>
    );
  });
  return (
    <div className="projects">
      <div className="projects__body p-2">
        <div style={{ fontSize: "2rem", display: "flex" }}>
          <div className="card__title-line" />
          <div className="card__project-title">MY PROJECTS</div>
          <div className="card__title-line" />
        </div>
        {projects}
      </div>
    </div>
  );
};

export default Projects;
