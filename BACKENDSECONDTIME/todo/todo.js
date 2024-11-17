const fs = require("fs");
const filePath = __dirname + "/tasks.json";

// load the task------------------------------>>>>>>>>>
const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return null;
  }
};

// save the saveTask------------------->>>>>>>>>>>>>

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};

// add a new task ------>>>>>>>>>>>>>>>>>>>>
const addTask = (task) => {
  let tasks = loadTasks();

  if (tasks == null) {
    tasks = [];
  }

  tasks.push({ task: task });
  saveTasks(tasks);
  console.log(`Task added`, tasks);
};

// list task------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const listTasks = () => {
  const taskArray = loadTasks();
  // console.log(taskArray);
  taskArray.forEach((task, indec) => {
    console.log(`${indec + 1} no task is ${task.task}`);
  });
};

// remove task------------------->
const removeTasks = (deleteElement) => {
  const allTasks = loadTasks();
  let newTaskArr = [];
  allTasks.forEach((task, index) => {
    if (deleteElement - 1 != index) {
      newTaskArr.push(task);
    }
  });
  saveTasks(newTaskArr);
  console.log(`"${allTasks[deleteElement - 1].task}" task delete successfully`);
};
const command = process.argv[2];
const argument = process.argv[3];

// types of operations which you can perform
if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTasks(parseInt(argument));
} else {
  console.log(`this is wrong command`);
}
