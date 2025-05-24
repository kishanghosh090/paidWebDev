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

    socket.on("message", (data) => {
        console.log(data);
        socket.broadcast.emit("message", data)
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