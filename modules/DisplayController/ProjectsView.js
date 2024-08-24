import { getProjects } from "../Project";

function createProjectCard(id, name, todos) {
    const projectCard = document.createElement('div');
    projectCard.classList.add('card');
    
    // Convert todos array to a list of <li> elements
    const todosList = todos.map(todo => `<li>${todo}</li>`).join('');

    projectCard.innerHTML = `
        <div id="card-top">${id}, ${name}</div>
        <ul class="project-todos">
            ${todosList}
        </ul>
    `;
    
    console.log(projectCard);
    return projectCard;
}

function renderProjectCards() {
    const projects = getProjects();
    const content = document.getElementById('content');
    
    if (content) {
        content.innerHTML = '';

        projects.forEach((project) => {
            content.appendChild(createProjectCard(project.id, project.name, project.todos));
        });
    } 
}

export default renderProjectCards;
