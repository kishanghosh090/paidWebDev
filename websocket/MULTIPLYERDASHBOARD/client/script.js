const socket = io("http://localhost:3000");

socket.on("connect", () => {
    console.log("Connected to the server");
    // socket.emit("message", "Hello from the client")
})
socket.on("message", (message) => {
    console.log(message);
    socket.emit("message", "Hello from the client")
})