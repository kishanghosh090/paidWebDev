import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const socket = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

let rem = 0

socket.on("connection", (socket) => {
    socket.emit("message", `${rem++}Hello from the server`)

    socket.on("message", (message) => {
        console.log(message);
    })
})




httpServer.listen(3000, () => {
    console.log("Server is running on port 3000");
})