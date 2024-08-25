let projects = loadProjectsFromLocalStorage();

function saveProjectsToLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(projects));
}

function loadProjectsFromLocalStorage() {
    const projectsJSON = localStorage.getItem('projects');
    return projectsJSON ? JSON.parse(projectsJSON) : [];
}

function addProjectToStorage(project) {
    projects.push(project);
    saveProjectsToLocalStorage();
    console.log('Project added:', project);
    console.log('Current projects:', projects);
}

function removeProjectFromStorage(projectId) {
    projects = projects.filter(project => project.id !== projectId);
    saveProjectsToLocalStorage();
    console.log('Project removed with id:', projectId);
    console.log('Current projects:', projects);
}

function getStoredProjects() {
    projects = loadProjectsFromLocalStorage();
    return projects;
}

function clearStorage() {
    localStorage.removeItem('projects');
    projects = []; // Clear the local projects array as well
    console.log('Projects cleared');
}

export {
    saveProjectsToLocalStorage,
    loadProjectsFromLocalStorage,
    addProjectToStorage,
    removeProjectFromStorage,
    getStoredProjects,
    clearStorage
};