function createProjectsButton() {
    const projectsButton = document.createElement('div')
    projectsButton.classList.add('nav-item')
    projectsButton.textContent = "Projects"
    return projectsButton
}

function createAddProjectButton() {
    const addProjectButton = document.createElement('div')
    addProjectButton.classList.add('nav-item')
    addProjectButton.classList.add('create-project-btn')
    addProjectButton.textContent = "Create a Project"
    return addProjectButton
}

function renderSidebar() {
    const sidebarContainer = document.getElementById('sidebar-container')

    if (sidebarContainer) {
        sidebarContainer.innerHTML = ``

        sidebarContainer.appendChild(createProjectsButton())
        sidebarContainer.appendChild(createAddProjectButton())
    }
}

export default renderSidebar;