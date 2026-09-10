const input = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", function () {
  const todoText = input.value;

  if (todoText === "") {
    return;
  }

  const li = document.createElement("li");

  li.textContent = todoText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteButton);
  todoList.appendChild(li);

  input.value = "";
});