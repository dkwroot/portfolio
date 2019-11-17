import PaintApp from "./resources/paintApp.png";
import ToolWorld from "./resources/tool_world.png";
import GraphicsProduct from "./resources/graphics_product.png";

const socialMediaApp = {
  NAME: "Social Media Website",
  IMG: PaintApp,
  GIT: "https://github.com/dkwroot/yakker",
  DEMO: "https://yakkers.herokuapp.com/",
  TECH: [
    ["fab", "react"],
    ["fab", "bootstrap"],
    ["fab", "node-js"],
    ["fab", "js"]
  ],
  DESCIPTION:
    "A social media website titled, Yakker. It allows a user to create a profile and to post on their own message wall."
};

const merchantApp = {
  NAME: "Merchant Website",
  IMG: ToolWorld,
  GIT: "https://github.com/dkwroot/tool-world",
  DEMO: "https://tool-world.herokuapp.com/",
  TECH: [
    ["fab", "react"],
    ["fab", "bootstrap"],
    ["fab", "node-js"],
    ["fab", "js"]
  ],
  DESCIPTION:
    "A tool sale website. It allows users to browse the inventory and add desired tools to their shopping cart."
};

const productPage = {
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

const myProjects = [socialMediaApp, merchantApp, productPage];

//https://csb-6ntnx.netlify.com/

export default myProjects;
