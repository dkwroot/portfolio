import React from "react";

import projectData from "./data";

import "./style.css";

const Projects = props => {
  const flipCard = (card, enter) => {
    if (enter) {
      document.getElementById(card).className =
        "proj__card-area proj__card--flipped";
    } else {
      document.getElementById(card).className = "proj__card-area";
    }
  };

  const buildProjects = projectData.map((proj, id) => {
    return (
      <div
        key={`proj_${id}`}
        className="m-2 proj__card-container"
        onMouseEnter={() => {
          flipCard(`projID_${id}`, true);
        }}
        onMouseLeave={() => {
          flipCard(`projID_${id}`, false);
        }}
      >
        <div id={`projID_${id}`} className="proj__card-area">
          <div
            className={`proj__${proj.image} proj__cards proj__card--front`}
          />

          <div className="bg-light proj__cards proj__card--back p-1">
            <h6 className="text-right ">Title:</h6>
            <p className="ml-1">{proj.title}</p>
            <h6 className="text-right">Tech:</h6>
            <p className="ml-1 text-break">{proj.tech.join(`, `)}</p>
            <h6 className="text-right">Info:</h6>
            <p className="ml-1 text-break">{proj.info}</p>
            <div className="proj__button-container">
              <a href={proj.git} className="proj__button">
                GITHUB
              </a>
              <a href={proj.url} className="proj__button">
                DEMO
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div id="PROJECTS" className="section-75">
      <h1 className="d-flex justify-content-center m-4">MY PROJECTS</h1>
      <hr />
      <div
        className="d-flex flex-wrap justify-content-center"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1100"
      >
        {buildProjects}
      </div>
    </div>
  );
};

export default Projects;
