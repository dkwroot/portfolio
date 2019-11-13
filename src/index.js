import React from "react";
import ReactDOM from "react-dom";
import Personal from "./components/personal";
import Projects from "./components/projects";
import Resume from "./components/resume";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCode, faGlobe } from "@fortawesome/free-solid-svg-icons";

library.add(faCode, fab, faGlobe);

function App() {
  return (
    <div className="App bg-secondary">
      <div className="row no-gutters h-100">
        <div className="col-12 col-sm-6 col-md-4">
          <div className="App__resume h-100">
            <div style={{ gridColumn: "1/2", gridRow: "1/2" }}>
              <Personal />
            </div>
            <div style={{ gridColumn: "1/2", gridRow: "1/2" }}>
              <Resume />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-8">
          <Projects />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
