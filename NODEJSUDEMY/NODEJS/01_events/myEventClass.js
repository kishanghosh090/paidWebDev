const EventEmitter = require("node:events");

class Chat extends EventEmitter {
  sendMessage(msg) {
    console.log(`message sent ${msg}`);
    this.emit("messageRecived", msg);
  }
}

const chat = new Chat();

chat.on("messageRecived", (msg) => {
  console.log(`new messafe : ${msg}`);
});

chat.sendMessage();
