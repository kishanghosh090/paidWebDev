const EventEmitter = require("node:events");

const eventEmitter = new EventEmitter();

eventEmitter.on("greet", (msg) => {
  console.log(`${msg} to events in node js`);
});

const myListner = () => {
  console.log("test listner");
};

eventEmitter.on("test", myListner);

// emit the event
eventEmitter.once("pushnotify", () => {
  console.log("this event runs only one time");
});
eventEmitter.emit("greet", "hitesh from kishan");
eventEmitter.emit("pushnotify");
eventEmitter.emit("pushnotify"); // it'll not be called
eventEmitter.removeListener("test", myListner);
eventEmitter.emit("test"); //not work as test event listner was removed
console.log(eventEmitter.listenerCount("test"));
console.log(eventEmitter.listenerCount("greet"));