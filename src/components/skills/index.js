import React from "react";

import "./style.css";

import skill_list from "./data";

const SKILLS = props => {
  const buildSkill = index => {
    return skill_list[index].map((skill, id) => {
      return (
        <div key={`language_${id}`} className="m-2 border skill__box">
          <div className="skill__card">
            <img className="h-100 w-100" src={skill.image} alt={skill.skill} />
          </div>
          <h5>{skill.skill}</h5>
          <p>{skill.exp}</p>
        </div>
      );
    });
  };

  return (
    <div
      id="SKILLS"
      className="section-100"
      style={{ background: "rgb(240,240,240)" }}
    >
      <h1 className="d-flex justify-content-center m-4">MY SKILLS</h1>
      <hr />
      <div className="skill__container align-items-stretch">
        <div
          className="mb-5 mx-5"
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h4 className="text-center">Languages</h4>
          <div className="skill__section">{buildSkill(0)}</div>
        </div>

        <div
          className="mb-5 mx-5"
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h4 className="text-center">Back-end</h4>
          <div className="skill__section">{buildSkill(1)}</div>
        </div>

        <div
          className="mb-5 mx-5"
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h4 className="text-center">Front-end</h4>
          <div className="skill__section">{buildSkill(2)}</div>
        </div>

        <div
          className="mb-5 mx-5"
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h4 className="text-center">Tools</h4>
          <div className="skill__section">{buildSkill(3)}</div>
        </div>
      </div>
    </div>
  );
};

export default SKILLS;
