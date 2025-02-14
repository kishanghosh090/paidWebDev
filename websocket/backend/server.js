import expres from "express";
import http from "http";
import io from "socket.io";
const app = expres();
const server = http.createServer(app);

io(server).on("connection", (socket) => {
    console.log("a user connected");
    
 
});
