import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const socket = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

let playerScores = [];

socket.on("connection", (socket) => {
  // console.log("a user connected", socket);
  // socket.on("message", (data) => {
  //   console.log(data);
  // });
  // socket.emit("message", "hello world");
  // start multiplayer game dash board------------
  socket.on("score", (data) => {
    // console.log(data, socket.id);
    playerScores.push({ ...data, id: socket.id });
    console.log(playerScores);
    socket.emit("playerScore", playerScores);
  });
});

httpServer.listen(3000, () => {
  console.log("listening on *:3000");
});
