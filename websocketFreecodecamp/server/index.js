import http from "http";
import cors from "cors";
import { Server } from "socket.io";

const httpServer = http.createServer();
const socket = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});
socket.use((socket, next) => {
  //   console.log(socket);
  next();
});

const map = new Map();
socket.on("connection", (socket) => {
  console.log("socket connected", socket.id);
  if (!map.get(socket.client.id)) {
    map.set(socket.client.id, socket.id);
  }
  console.log(map);

  socket.emit("messgae", "hello");

  // disconnect event
  socket.on("disconnect", () => {
    map.delete(socket.id);
    console.log(map);

    console.log("socket disconnected", socket.id);
  });
});

// Start the server
const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
