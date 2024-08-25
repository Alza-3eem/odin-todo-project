import { createProject } from "../Project";

function createModal() {
    const modal = document.createElement('div');
    modal.id = 'project-modal';
    modal.style.display = 'none';
    modal.innerHTML = `
        <div id="modal-overlay"></div>
        <div id="modal-content">
            <button id="close-modal-btn">X</button>
            <h2>Create Project</h2>
            <form id="create-project-form">
                <label for="project-name">Project Name:</label>
                <input type="text" id="project-name" name="project-name" required>
                <label for="project-description">Project Description:</label>
                <input type="text" id="project-description" name="project-description" required>
                <button type="submit">Create</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('close-modal-btn').addEventListener('click', hideModal);
    document.getElementById('create-project-form').addEventListener('submit', handleSubmit);
}

function showModal() {
    document.getElementById('project-modal').style.display = 'block';
}

function hideModal() {
    document.getElementById('project-modal').style.display = 'none';
}

function handleSubmit(e) {
    e.preventDefault();
    const projectName = document.getElementById('project-name').value.trim();
    const projectDescription = document.getElementById('project-description').value.trim();
    if (projectName) {
        const newProject = { id: Date.now(), name: projectName, description: projectDescription, todos: [] };
        createProject(Date.now(), projectName, projectDescription)
        document.dispatchEvent(new CustomEvent('projectCreated')); // Trigger a custom event
        hideModal();
    }
}

function initForm() {
    createModal();

    const createProjectBtn = document.querySelector('.create-project-btn');
    if (createProjectBtn) {
        createProjectBtn.addEventListener('click', showModal);
    }
}

export default initForm;