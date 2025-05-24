import express from "express";
import cors from "cors"
import { createServer } from "node:http"
import { Server } from "socket.io";


const PORT = 3000;

// server and socket setup start -----------
const app = express();
const server = createServer(app)
const io = new Server(server, {
    origin: " http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
})
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
}))
// server and socket setup end ---------------

// socket handler
io.on("connection", (socket) => {
    console.log(`user connected ${socket.id}`);



    // socket.emit("welcome", `hello `)

    // socket broadcast --> user connected
    // socket.broadcast.emit("welcome", ` ${socket.id} joined the server`)

    socket.on("message", async (data) => {
        console.log(data);
        // io.emit("message", data) // send to all users whih connected to the server
        // Sends to: All connected clients, including the sender.
        // Use case: Global announcements like "Server will restart in 5 minutes"

        // socket.emit("message", data) // send to the sender

        // Sends to: Only the client that triggered the current socket.
        // Use case: Sending a message just to the sender(e.g., an acknowledgment or private info).


        // socket.broadcast.emit("message", data) // send to all users except the sender
        // Sends to: 🌍 All clients except the sender.
        // Example use case: Notify others that a user has sent a message or joined the room.


        // ------------------------

        // socket.broadcast.emit("recive-message", data)

        // room in socket

        socket.to(data.room).emit("recive-message", data.text)

    })

    // socket disconnect --> user disconnected
    socket.on("disconnect", () => {
        console.log(`user disconnected ${socket.id}`);
        // cleanup 

    })

})



server.listen(PORT, () => {
    console.log(`server is listing at PORT ${PORT}`);
})