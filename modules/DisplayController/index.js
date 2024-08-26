import renderSidebar from './Sidebar.js'
import renderProjectCards from './ProjectsView.js';
import initForm from './Forms.js';
import { clearStorage } from '../Storage.js';
import { removeProject } from '../Project.js';
import renderProjectView from './ProjectDetailsView.js';

function initUI() {
    renderSidebar();
    renderProjectCards();
    initForm();

    document.addEventListener('projectCreated', renderProjectCards);
    document.addEventListener('projectRemoved', (e) => {
        removeProject(e.detail.id);
        renderProjectCards();
    })
    document.getElementById('clear-projects-btn').addEventListener('click', () => {
        clearStorage();
        renderProjectCards(); // Re-render project cards if necessary
    });

    document.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (card) {
            const projectId = parseInt(card.getAttribute('data-id'), 10);
            renderProjectView(projectId);
        }
    });

    document.querySelector('.projects-button').addEventListener('click', () => {
        renderProjectCards(); // Renders the projects view when clicked
    });
}

export { initUI };