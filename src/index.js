import "./styles/styles.css"
import { initUI } from "../modules/DisplayController/index.js";
import { createProject, removeProject, getProjects } from "../modules/Project.js";

const project1 = createProject(1, 'Project Alpha');
const project2 = createProject(2, 'Project Beta');

project1.addTodo("step 1")
project1.addTodo("step 2")
project2.addTodo("step 1")
project2.addTodo("step 2")

initUI();