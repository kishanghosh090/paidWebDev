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
  console.log(socket);
});
socket.on("connection", (socket) => {
  console.log("socket connected");
});

// Start the server
const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
