import React from "react";

import "./style.css";

const logo_items = [
  "https://raw.githubusercontent.com/dkwroot/icons/master/proj_icons/portfolio/cloud_1.svg?sanitize=true",
  "https://raw.githubusercontent.com/dkwroot/icons/master/proj_icons/portfolio/planet.svg?sanitize=true",
  "https://raw.githubusercontent.com/dkwroot/icons/master/proj_icons/portfolio/plane.svg?sanitize=true",
  "https://raw.githubusercontent.com/dkwroot/icons/master/proj_icons/portfolio/satellite.svg?sanitize=true"
];

const Landing = props => {
  const buildLogo = logo_items.map((item, id) => {
    return (
      <div key={`logo-item_${id}`} className="logo__position logo__main">
        <img
          className="logo__image"
          style={{ animation: `planetAnim ${(4 - id) * 20}s linear infinite` }}
          src={item}
          alt="missing logo"
        />
      </div>
    );
  });
  return (
    <div id="TOP" className="logo">
      <div className="logo__position logo__twinkling" />
      <div className="logo__position logo__glow" />
      <div className="logo__position logo__namebox">
        <h3 className="">Derek Root</h3>
        <h3 className="">Software Engineer</h3>
      </div>
      {buildLogo}
    </div>
  );
};

export default Landing;
