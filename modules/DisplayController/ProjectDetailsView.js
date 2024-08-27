import { getProjectById } from "../Project";
import {
  addTodoToProject,
  removeTodoFromProject,
  toggleTodoCompletion,
} from "../Todo";

function renderProjectView(projectId) {
  const project = getProjectById(projectId);
  const content =
    document.getElementById("content") ||
    document.getElementById("content-details-view");

  if (content && content.id === "content") {
    // Change the id from 'content' to 'content-details-view'
    content.id = "content-details-view";
  }

  if (project) {
    content.innerHTML = `
        <div class="project-view" data-project-id="${projectId}">
            <div class="project-details">
                <h2>${project.name}</h2>
                <p>${project.description}</p>
            </div>
            <div class="todo-list">
                <h3>Todos</h3>
                <ul id="todo-list">
                    ${project.todos
                      .map(
                        (todo) => `
                        <li class="todo-item" data-todo-id= "${todo.id}">
                            <input type="checkbox" ${todo.completed ? "checked" : ""}>
                            <span>${todo.text}</span>
                            <button class="delete-todo-btn">x</button>
                        </li>`,
                      )
                      .join("")}
                </ul>
                <button id="add-todo-btn">Add Todo</button>
            </div>
        </div>
        `;

    document
      .getElementById("add-todo-btn")
      .addEventListener("click", () => handleAddTodoClick(projectId));

    document
      .querySelectorAll('.todo-item input[type="checkbox"]')
      .forEach((checkbox) => {
        checkbox.addEventListener("change", (e) => {
          const todoId = e.target.closest(".todo-item").getAttribute("data-todo-id")
          toggleTodoCompletion(projectId, todoId);
          renderProjectView(projectId);
        });
      });

    document.querySelectorAll(".delete-todo-btn").forEach((button) => {
      button.addEventListener("click", (e) => {
        const todoId = e.target.closest(".todo-item").getAttribute("data-todo-id")
        removeTodoFromProject(projectId, todoId);
        renderProjectView(projectId);
      });
    });
  }
}

function handleAddTodoClick(projectId) {
  const todoText = prompt("Enter the todo:");
  if (todoText) {
    addTodoToProject(projectId, todoText);
    renderProjectView(projectId);
  }
}

export default renderProjectView;
