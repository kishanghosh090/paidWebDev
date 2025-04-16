let draggedCard = null

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

    taskElement.addEventListener("dragstart", function (e) {
        this.classList.add("dragging");

        draggedCard = this;

    }
    );

    taskElement.addEventListener("dragend", function (e) {
        this.classList.remove("dragging");
    });


    return taskElement;
}

const columns = document.querySelectorAll(".column .tasks");
columns.forEach((column) => {
    column.addEventListener("dragover", dragover)
});

function dragover(e) {
    console.log(e);

    e.preventDefault();
    console.log(draggedCard);

    this.appendChild(draggedCard);

    // this.appendChild(dragCard);
}
