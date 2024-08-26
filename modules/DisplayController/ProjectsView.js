import { getProjects } from "../Project.js";
import { removeProject } from "../Project.js";

function createProjectCard(id, name, description, todos) {
    const projectCard = document.createElement('div');
    projectCard.classList.add('card');

    projectCard.setAttribute('data-id', id);
    
    // Convert todos array to a list of <li> elements
    const todosList = todos.map(todo => `<li>${todo.text}</li>`).join('');

    projectCard.innerHTML = `
        <div id="card-top">${name}
            <button class="delete-this-project">x</button>
        </div>
        <div class="project-content">
            <div class="project-description">${description}</div>
            <ul class="project-todos">
                ${todosList}
            </ul>
        </div>
    `;
    
    projectCard.querySelector('.delete-this-project').addEventListener('click', (e) => {
        const projectId = e.target.getAttribute('data-id');
        document.dispatchEvent(new CustomEvent('projectRemoved', { detail: { id: id } }));
    });
    
    return projectCard;
}

function renderProjectCards() {
    const projects = getProjects();
    const content = document.getElementById('content');
    
    if (content) {
        content.innerHTML = '';

        projects.forEach((project) => {
            content.appendChild(createProjectCard(project.id, project.name, project.description, project.todos));
            
        });
    } 
}

export default renderProjectCards;
