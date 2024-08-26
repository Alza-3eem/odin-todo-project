import { addProjectToStorage, removeProjectFromStorage, getStoredProjects } from "./Storage";

function createProject(id, name, description) {
    const project = {
        id,
        name,
        description,
        todos: [],

        addTodo(todo) {
            this.todos.push(todo);
            addProjectToStorage(this);
        },

        removeTodo(todoId) {
            this.todos = this.todos.filter(todo => todo.id !== todoId);
            addProjectToStorage(this);
        }
    };

    addProjectToStorage(project);
    return project;
}

function removeProject(projectId) {
    removeProjectFromStorage(projectId);
}

function getProjects() {
    return getStoredProjects();
}

function getProjectById(projectId) {
    const projects = getStoredProjects();
    return projects.find(project => project.id === projectId);
}

export { createProject, removeProject, getProjects, getProjectById };