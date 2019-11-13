import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

const iconStyle = {
  fontSize: "3rem",
  color: "white"
};

const skillList = [
  "Javascript",
  "Node.js",
  "Python",
  "C#",
  "C++",
  "HTML5/CSS",
  "React",
  "Bootstrap",
  "Easy-Peasy",
  "MongoDB",
  "Express",
  "TensorFlow"
];

const designList = ["Photoshop", "Illustrator", "Blender", "Flash", "Moho"];

const Personal = () => {
  const generateList = arr => {
    const list = arr.map((x, id) => {
      return (
        <div className="col-6 col-lg-4" key={`skill_${id}`}>
          {x}
        </div>
      );
    });

    return list;
  };

  return (
    <div className="personal" id="Personal-section">
      <div className="personal__body d-flex flex-column h-100 p-3">
        <div className="info-card">
          <h1>Derek Root</h1>
          <h4 className="chalk-text">SOFTWARE ENGINEER</h4>
          <div>
            <a
              className="mx-1"
              href="https://www.linkedin.com/in/derek-root-595092134/"
            >
              <FontAwesomeIcon style={iconStyle} icon={["fab", "linkedin"]} />
            </a>
            <a className="mx-2" href="mailto:dkwroot@gmail.com">
              <FontAwesomeIcon style={iconStyle} icon={["fab", "google"]} />
            </a>
            <a className="mx-1" href="https://github.com/dkwroot">
              <FontAwesomeIcon style={iconStyle} icon={["fab", "github"]} />
            </a>
          </div>
        </div>

        <hr />

        <div>
          <h3 className="chalk-text text-center">TECHNOLOGY SKILLS</h3>
          <div className="row">{generateList(skillList)}</div>
        </div>

        <hr />
        <div className="mb-5">
          <h3 className="chalk-text text-center">DESIGN SKILLS</h3>
          <div className="row">{generateList(designList)}</div>
        </div>

        <div
          className="mt-auto"
          onClick={() => {
            document.getElementById("Personal-section").style.transform =
              "translateY(-100%)";
          }}
        >
          <h4 className="unselectable">RESUME</h4>
        </div>
      </div>
    </div>
  );
};

export default Personal;
