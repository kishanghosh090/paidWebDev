import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

let crudData = []

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("data", (data) => {
    // console.log(data);
    crudData.push(data);
    console.log(crudData);
    socket.emit("data", crudData);
  });
});

httpServer.listen(4000, () => {
  console.log("listening on *:4000");
});
