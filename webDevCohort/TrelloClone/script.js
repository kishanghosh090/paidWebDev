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
        // console.log(e.target);
        draggedCard = this;
    }
    );

    taskElement.addEventListener("dragend", function (e) {
        this.classList.remove("dragging");
    });

    taskElement.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        showContextMenu(e);
    })


    return taskElement;
}

const columns = document.querySelectorAll(".column .tasks");
columns.forEach((column) => {
    column.addEventListener("dragover", dragover)
});

function dragover(e) {
    // console.log(e);

    e.preventDefault();
    // console.log(draggedCard);

    this.appendChild(draggedCard);

    // this.appendChild(dragCard);
}

function showContextMenu(e) {
    let menu = document.querySelector(".contextMenu")
    menu.style.display = "block";
    menu.style.left = `${e.pageX}px`;
    menu.style.top = `${e.pageY}px`;
    menu.style.position = "absolute";
    menu.style.zIndex = 1000;

    const edit = document.querySelector(".edit");
    const deleteBtn = document.querySelector(".delete");

    edit.addEventListener("click", function (event) {


        // aleart input
        let input = prompt(`Edit task `);


        // console.log(input);

        if (input === null || input === e.target.innerText || input === "") {
            // close prompt
            alert("Please enter a valid task.");
            input = null;
            return;
        }
        if (input) {
            e.target.innerHTML = `${input} <span>${new Date().toLocaleString()}</span>`;
            // close prompt
            alert("Task updated successfully.");
            input = null;
            return
        }
        return
    })
    deleteBtn.addEventListener("click", function () {
        e.target.remove();
        // confirm delete

    })

}


function hideContextMenu() {
    let menu = document.querySelector(".contextMenu")
    menu.style.display = "none";
}
document.addEventListener("click", function (e) {
    // console.log(e.target.closest(".contextMenu"));
    if (true) {
        hideContextMenu();
    }
}
);