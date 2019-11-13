import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

const Resume = () => {
  return (
    <div className="resume h-100">
      <div className="resume__body text-white d-flex flex-column h-100 p-3">
        <div className="overflow-auto">
          <h2>Objective</h2>
          <p>
            To be a productive member of a team where my skills in math and
            computer science will be challenged and further developed.
          </p>

          <h2>Education</h2>
          <ul>
            <li>Indiana University, IN</li>
            <li>BS Mathematics | 2018</li>
            <li>GPA 3.81</li>
            <li>
              Courses: Mathematical Computing, Computational Methods,
              Computational Models
            </li>
          </ul>

          <h2>Experience</h2>
          <div className="mb-2">
            <div>05/2013 - 8/2013</div>
            <div>
              Intern - Data Science | University of Nebraska Medical Center |
              Omaha, NE
            </div>
            <div>
              Utilized Python and Data Analysis techniques to assist physicians
              in the analysis of large amounts of patient data. Delivered an
              oral presentation at conclusion of internship.
            </div>
          </div>

          <div>
            <div>11/2018 – 02/2019 </div>
            <div>Intern - Software Engineer | Oasys | Houston, TX</div>
            <div>
              Utilized C++ and Python in assisting the development of various
              machine learning models utilized by the oil and gas industry
            </div>
          </div>
        </div>

        <div className="mt-auto d-flex">
          <h4
            className="unselectable mr-2"
            onClick={() => {
              document.getElementById("Personal-section").style.transform =
                "translateY(0%)";
            }}
          >
            SKILLS
          </h4>

          <h4 className="ml-auto">
            <a
              className="text-white text-decoration-none"
              href="https://drive.google.com/uc?export=download&id=1FXduDTBu6Xtux4iRXIn_PKStNyUtWopX"
            >
              DOWNLOAD
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Resume;
