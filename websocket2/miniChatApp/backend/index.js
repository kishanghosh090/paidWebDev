import express from "express";
import { createServer } from "http";
import cors from "cors";
import "dotenv/config"
import { Server } from "socket.io";


const PORT = process.env.PORT || 4000;
const app = express()

app.use(cors({
    origin: "http://localhost:5173"
}))

const server = createServer(app)
const io = new Server(server, {
    origin: "http://localhost:5173"
})


// object where we store users
const users = {}
const rooms = {}
io.on("connection", (socket) => {
    console.log(`user connected ${socket.id}`);

    socket.on("join", (data) => {
        users[data] = socket.id

        io.emit("users", Object.keys(users))

        console.log(users);
    })

    socket.on("isOnline", (data) => {
        if (users[data.toPhone]) {
            const isRoomExists = Object.keys(rooms).find((key) => {
                return rooms[key].includes(users[data.toPhone]) || rooms[key].includes(users[data.userPhone])
            })
            if (isRoomExists) {
                socket.join(isRoomExists)
            } else {
                socket.join(socket.id)
                rooms[socket.id] = [users[data.userPhone], users[data.toPhone]]
            }
            socket.emit("online", true)
        } else {
            socket.emit("online", false)

        }
    })
    socket.on("disconnect", () => {
        for (const key in users) {
            if (users[key] === socket.id) {
                delete users[key]
                console.log(`user disconnected ${socket.id}`);

            }
        }
        console.log(users);

        console.log(`user disconnected ${socket.id}`);
    })
})

server.listen(PORT, () => {
    console.log(`Server listing at PORT ${PORT}`);

})