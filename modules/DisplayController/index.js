import renderSidebar from './Sidebar.js'
import renderProjectCards from './ProjectsView.js';
import initForm from './Forms.js';

function initUI() {
    renderSidebar();
    renderProjectCards();
    initForm();
}

export { initUI };