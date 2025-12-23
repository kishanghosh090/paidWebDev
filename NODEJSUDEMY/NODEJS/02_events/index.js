const ChatRoom = require("./realtimeChatApp.js");

const chat = new ChatRoom();

chat.on("join", (user) => {
  console.log(`${user} has joined`);
});

chat.on("message", (user, message) => {
  console.log(`${user} : ${message}`);
});

chat.on("leave", (user) => {
  console.log(`${user} left from chat`);
});
// simulating the chat

chat.join("1");
chat.join("2");
chat.join("3");
chat.sendMessage("1", "hey 2 and 3");
chat.leave("3");
