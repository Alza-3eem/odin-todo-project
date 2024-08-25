import "./styles/styles.css"
import { initUI } from "../modules/DisplayController/index.js";
import { getStoredProjects } from "../modules/Storage.js";

initUI();

console.log('Initial projects on page load:', getStoredProjects());