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
  useEffect(() => {
    // on user connect
    socket.on("connect", () => {
      console.log("connected", socket.id);
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
    socket.emit("message", text);
    setText("");
  };
  return (
    <Container>
      <h1>welcome to the chat</h1>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" size="large">
          send
        </Button>
      </form>
    </Container>
  );
}

export default App;
