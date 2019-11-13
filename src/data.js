import PaintApp from "./resources/paintApp.png";
import ToolWorld from "./resources/tool_world.png";
import GraphicsProduct from "./resources/graphics_product.png";

const paintApp = {
  NAME: "Social Media Website",
  IMG: PaintApp,
  GIT: "https://github.com/dkwroot/yakker",
  DEMO: "https://dkwroot-yakker.glitch.me/",
  TECH: [
    ["fab", "react"],
    ["fab", "bootstrap"],
    ["fab", "node-js"],
    ["fab", "js"]
  ],
  DESCIPTION:
    "A social media website titled, Yakker. It allows a user to create a profile and to post on their own message wall."
};

const productApp = {
  NAME: "Merchant Website",
  IMG: ToolWorld,
  GIT: "https://github.com/dkwroot/tool-world",
  DEMO: "https://dkwroot-tool-world.glitch.me/",
  TECH: [
    ["fab", "react"],
    ["fab", "bootstrap"],
    ["fab", "node-js"],
    ["fab", "js"]
  ],
  DESCIPTION:
    "A tool sale website. It allows users to browse the inventory and add desired tools to their shopping cart."
};

const drawSite = {
  NAME: "Product Website",
  IMG: GraphicsProduct,
  GIT: "https://github.com/dkwroot/3Raw",
  DEMO: "https://dkwroot.github.io/3Raw/",
  TECH: [
    ["fab", "react"],
    ["fab", "bootstrap"],
    ["fab", "node-js"],
    ["fab", "js"]
  ],
  DESCIPTION:
    "A stylist landing page for a drawing program called 3Draw. It demonstrates design and animation."
};

const myProjects = [paintApp, productApp, drawSite];

//https://csb-6ntnx.netlify.com/

export default myProjects;
