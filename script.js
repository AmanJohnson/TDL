document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-btn");
  const newItemInput = document.getElementById("new-item-input");
  const todoList = document.getElementById("todo-list");

  addButton.addEventListener("click", () => {
    const taskText = newItemInput.value.trim();
    if (taskText) {
      addTask(taskText);
      newItemInput.value = "";
    }
  });

  function addTask(taskText) {
    const listItem = document.createElement("li");
    listItem.classList.add("todo-item");

    const taskSpan = document.createElement("span");
    taskSpan.classList.add("todo-text");
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    const editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editTask(taskSpan));
    listItem.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTask(listItem));
    listItem.appendChild(deleteButton);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        taskSpan.classList.add("completed");
      } else {
        taskSpan.classList.remove("completed");
      }
    });
    listItem.insertBefore(checkbox, taskSpan);

    todoList.appendChild(listItem);
  }

  function deleteTask(listItem) {
    todoList.removeChild(listItem);
  }

  function editTask(taskSpan) {
    const newTaskText = prompt("Edit your task:", taskSpan.textContent);
    if (newTaskText !== null) {
      taskSpan.textContent = newTaskText.trim();
    }
  }
});
