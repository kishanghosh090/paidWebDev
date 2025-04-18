import express from "express";
import { Server } from "socket.io";

const io = new Server();
const app = express();

const emailToSocketMapping = new Map();

io.on("connection", (socket) => {
  socket.on("join-room", (data) => {
    const { roomId, emailId } = data;
    console.log("User", emailId, "joined room", roomId);
    emailToSocketMapping.set(emailId, socket.id);
    socket.join(roomId);
    socket.broadcast.to(roomId).emit("user-joined", { emailId });
  });
});

io.listen(8001, () => {
  console.log("Socket server is running on port 8001");
});
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
