document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (tasks.length == 0) {
    console.log("empty todo");
    const li = document.createElement("li");
    li.setAttribute("class", "notodo");
    li.innerHTML = `No Todo Has For Show`;
    todoList.appendChild(li);
  }

  tasks.forEach((task) => {
    renderTask(task);
  });

  addTaskBtn.addEventListener("click", (e) => {
    const taskText = todoInput.value.trim();
    if (taskText == "") {
      alert("Please enter a task");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    renderTask(newTask);
    saveTask();
    todoInput.value = "";
    if (tasks.length == 1) {
      window.location.reload();
    }
  });

  function renderTask(task) {
    const li = document.createElement("li");

    li.innerHTML = `${task.text} <button class="delete-btn">Delete</button>`;
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        return;
      } else {
        task.completed = !task.completed;
        li.classList.add("completed");
      }
    });

    todoList.appendChild(li);

    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      saveTask();
      todoList.removeChild(li);
      if (tasks.length == 0) {
        window.location.reload();
      }
    });
  }

  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
