import express from "express";
// import http from "http";
import { Server } from "socket.io";

const io = new Server({
    cors: true
})// initialize socket.io

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// socket.io setup
const emailToSocketMap = new Map();

io.on("connection", (socket) => {
    console.log("New client connected", socket.id);
    socket.on("join-room", (data) => {
        const { roomId, email } = data
        console.log("User joined room:", roomId, email);
        emailToSocketMap.set(email, socket.id)
        socket.join(roomId);
        socket.emit("joined-room", { roomId, email })
        // Notify other users in the room that a new user has joined
        socket.broadcast.to(roomId).emit("user-joined", { email })
    })
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
io.listen(3001, () => {
    console.log("Socket.io is running on port 3001");
}
);