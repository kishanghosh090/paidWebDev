import React, { useEffect, useMemo } from "react";
import { io } from "socket.io-client";
import { Button, Container } from "@mui/material";

function App() {
  const socket = useMemo(
    () =>
      io("http://localhost:3000", {
        transports: ["websocket"],
      }),
    []
  );
  const [text, setText] = React.useState("");
  const [room, setRoom] = React.useState("");
  const [socketID, setSocketID] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  useEffect(() => {
    // on user connect
    socket.on("connect", () => {
      console.log("connected", socket.id);
      setSocketID(socket.id);
    });

    socket.on("recive-message", (data) => {
      setMessages((prev) => [...prev, data]);
      console.log(data);
    });

    // socket.on("welcome", (data) => {
    //   console.log(data);
    // });

    socket.on("message", (data) => {
      console.log(data);
    });

    // on user disconnect
    // socket.on("disconnect", () => {});
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !room) {
      return;
    }

    socket.emit("message", { text, room });
    setText("");
    setRoom("");
  };
  return (
    <Container>
      <h1>welcome to the chat</h1>
      {socket.id && <h2>your id: {socketID}</h2>}
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
        <input
          style={{ width: "100%", marginBottom: "1rem" }}
          type="text"
          value={text}
          placeholder="message"
          onChange={(e) => setText(e.target.value)}
        />
        <input
          style={{ width: "100%", marginBottom: "1rem" }}
          type="text"
          name="room"
          id="room"
          value={room}
          placeholder="room"
          onChange={(e) => setRoom(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" size="large">
          send
        </Button>
      </form>

      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </Container>
  );
}

export default App;
