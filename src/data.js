import PaintApp from "./resources/paintApp.png";
import ToolWorld from "./resources/tool_world.png";
import GraphicsProduct from "./resources/graphics_product.png";

const paintApp = {
  NAME: "PaintApp",
  IMG: PaintApp,
  GIT: "https://github.com/dkwroot/painting-app",
  DEMO: "https://csb-6ntnx.netlify.com/",
  TECH: [["fab", "react"], ["fab", "js"]],
  DESCIPTION: "words here..."
};

const productApp = {
  NAME: "ToolWorld",
  IMG: ToolWorld,
  GIT: "https://github.com/dkwroot/tool-world",
  DEMO: "https://tool-world.herokuapp.com",
  TECH: [
    ["fab", "react"],
    ["fab", "bootstrap"],
    ["fab", "node-js"],
    ["fab", "js"]
  ],
  DESCIPTION: "words here..."
};

const drawSite = {
  NAME: "3Draw",
  IMG: GraphicsProduct,
  GIT: "https://github.com/dkwroot/3Raw-page/tree/master/",
  DEMO: "https://csb-g05be-jo41y1dt6.now.sh",
  TECH: [
    ["fab", "react"],
    ["fab", "bootstrap"],
    ["fab", "node-js"],
    ["fab", "js"]
  ],
  DESCIPTION: "words here..."
};

const myProjects = [paintApp, productApp, drawSite];

export default myProjects;
