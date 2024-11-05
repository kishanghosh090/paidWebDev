const fs = require("fs");
const filePath = "./tasks.json";

const loadTask = () => {
  try {
    // console.log("i trace this for mine");
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    console.log(error);
  }
};
const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};

const listTask = () => {
  loadTask().forEach((element, index) => {
    console.log(`task${index + 1}: ${element.task}`);
  });
};
const addTask = (task) => {
  const tasks = loadTask();
  //   console.log("i trace this for my", task);
  tasks.push({ task });
  saveTasks(tasks);
  console.log(`task added`, task);
};
const removeTask = (index) => {
  const tasks = loadTask();
  
};
const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTask();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log(`command not found`);
}
