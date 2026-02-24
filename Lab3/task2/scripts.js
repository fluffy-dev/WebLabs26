document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("new-task");
  const addBtn = document.getElementById("add-btn");
  const todoList = document.getElementById("todo-list");

  const initialTasks = [
    { text: "First item", done: true },
    { text: "Second item", done: false },
    { text: "Third item", done: false },
  ];

  initialTasks.forEach((task) => addTask(task.text, task.done));

  addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text !== "") {
      addTask(text);
      taskInput.value = "";
      taskInput.focus();
    }
  });

  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const text = taskInput.value.trim();
      if (text !== "") {
        addTask(text);
        taskInput.value = "";
      }
    }
  });

  function addTask(text, isDone = false) {
    const li = document.createElement("li");
    li.className = "todo-item";
    if (isDone) li.classList.add("done");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-checkbox";
    checkbox.checked = isDone;
    checkbox.addEventListener("change", () => {
      li.classList.toggle("done");
    });

    // Task Text
    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = text;

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.innerHTML = "&#9998;"; // Pencil icon

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "&#128465;";
    deleteBtn.addEventListener("click", () => {
      todoList.removeChild(li);
    });

    // Edit Functionality
    editBtn.addEventListener("click", () => {
      const isEditing = li.classList.contains("editing");

      if (isEditing) {
        // Save logic
        const input = li.querySelector(".edit-input");
        const newText = input.value.trim();
        if (newText !== "") {
          span.textContent = newText;
          li.replaceChild(span, input);
          editBtn.innerHTML = "&#9998;"; // Switch back to pencil
          li.classList.remove("editing");
        }
      } else {
        // Enter edit mode
        li.classList.add("editing");
        const input = document.createElement("input");
        input.type = "text";
        input.className = "edit-input";
        input.value = span.textContent;

        li.replaceChild(input, span);
        editBtn.innerHTML = "&#128190;"; // Switch to save icon
        input.focus();

        // Allow saving by pressing Enter
        input.addEventListener("keypress", (e) => {
          if (e.key === "Enter") editBtn.click();
        });
      }
    });

    // Assemble components
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  }
});
