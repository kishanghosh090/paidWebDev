import { createServer } from "http"
import { Server } from "socket.io"


const httpServer = createServer()
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`)
})

httpServer.listen(3001, () => {
    console.log("Server is running on port 3001")
})