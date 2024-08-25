import renderSidebar from './Sidebar.js'
import renderProjectCards from './ProjectsView.js';
import initForm from './Forms.js';
import { clearStorage } from '../Storage.js';
import { removeProject } from '../Project.js';

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
}

export { initUI };