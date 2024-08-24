let projects = [];

function createProject(id, name) {
    const project = {
        id,
        name,
        todos: [],

        addTodo(todo) {
            this.todos.push(todo);
        },

        removeTodo(todoId) {
            this.todos = this.todos.filter(todo => todo.id !== todoId);
        }
    };

    projects.push(project)

    return project;
}

function removeProject(projectId) {
    projects = projects.filter(project => project.id !== projectId);
}

function getProjects() {
    return projects;
}

export { createProject, removeProject, getProjects };
