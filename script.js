const board = document.querySelector(".board");

board.addEventListener("click", (e) => {
  if (e.target.closest("[data-add]")) addTask(e);
});

function addTask(e) {
  const column = e.target.closest(".column");
  const tasks = column.querySelector(".tasks");

  const task = prompt("Enter Task :");
  if (!task) return;

  const taskElement = document.createElement("div");
  taskElement.className = "card";
  taskElement.draggable = true;
  taskElement.innerHTML = `    
        <div class="title">${task}</div>
        <div class="btns">
        <div data-edit>
          <i class="ph-duotone ph-pencil-simple"></i>
        </div>
        <div data-delete>
          <i class="ph-duotone ph-trash"></i>
        </div>
        div>`;

  tasks.appendChild(taskElement);
}
