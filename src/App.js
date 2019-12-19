import React from "react";

import Navigator from "./components/navbar";
import Landing from "./components/landing";
import Projects from "./components/projects";
import SKILLS from "./components/skills";
import Contact from "./components/contact";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <div>
      <Navigator />
      <Landing />
      <Projects />
      <SKILLS />
      <Contact />
    </div>
  );
}

export default App;
