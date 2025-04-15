function addTask(columnId) {
    const input = document.getElementById(`${columnId}-input`);
    const taskText = input.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
    const taskElement = createTaskElement(taskText);
    document.getElementById(`${columnId}-tasks`).appendChild(taskElement);
    input.value = "";
}

function createTaskElement(taskText) {
    const taskElement = document.createElement("div");
    taskElement.innerHTML = `${taskText} <span>${new Date().toLocaleString()}</span>`;
    taskElement.classList.add("card");
    taskElement.draggable = true;
    return taskElement;
}