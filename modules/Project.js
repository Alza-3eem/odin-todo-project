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

export { createProject, removeProject, getProjects };