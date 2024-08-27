import { getStoredProjects, saveProjectsToLocalStorage } from "./Storage";

function addTodoToProject(projectId, todoText) {
    const projects = getStoredProjects();
    const project = projects.find(proj => proj.id === projectId);

    if (project) {
        const newTodo = {
            id: `${Date.now()}`,
            text: todoText,
            completed: false,
        };
        project.todos.push(newTodo);
        saveProjectsToLocalStorage(projects)
    }
}

function removeTodoFromProject (projectId, todoId) {
    const projects = getStoredProjects();
    const project = projects.find(proj => proj.id === projectId);

    if (project) {
        project.todos = project.todos.filter(todo => todo.id !== todoId);
        console.log("todo removed")
        console.log(project.todos)
        console.log(todoId)
        saveProjectsToLocalStorage(projects);
    }
}

function toggleTodoCompletion(projectId, todoId) {
    const projects = getStoredProjects();
    const project = projects.find(proj => proj.id === projectId);

    if (project) {
        const todo = project.todos.find(todo => todo.id === todoId);
        if (todo) {
            todo.completed = !todo.completed;

            saveProjectsToLocalStorage(projects);
        }
    }
}

export { addTodoToProject, removeTodoFromProject, toggleTodoCompletion };