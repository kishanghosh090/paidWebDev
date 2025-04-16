import React, { useEffect } from "react";
import { useSocket } from "../providers/Socket";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [email, setEmail] = React.useState("");
  const [roomCode, setRoomCode] = React.useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleRoomJoined = ({ roomId }) => {
    console.log(`You have joined room: ${roomId}`);
    navigate(`/room/${roomId}`);
  };
  useEffect(() => {
    socket.on("joined-room", handleRoomJoined);
  }, [socket]);

  const handleJoinRoom = () => {
    if (email && roomCode) {
      socket.emit("join-room", { roomId: roomCode, email });
      console.log(`Joining room: ${roomCode} with email: ${email}`);
      socket.on("joined-room", handleRoomJoined);
    } else {
      alert("Please enter both email and room code.");
    }
  };

  return (
    <div className="homepage-container">
      <h2>Welcome to the Home Page</h2>

      <div className="input-container">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Your Email Here"
        />

        <input
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          type="text"
          placeholder="Enter Room Code"
        />
        <button onClick={handleJoinRoom}>Enter Room</button>
      </div>
    </div>
  );
};

export default HomePage;
