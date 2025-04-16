import React, { useEffect } from "react";
import { useSocket } from "../providers/Socket";

const RoomPage = () => {
  const socket = useSocket();
  
  const handleNewUserJoined = ({ email }) => {
    console.log(`New user joined: ${email}`);
  };

  // Listen for the "user-joined" event when the component mounts
  useEffect(() => {
    socket.on("user-joined", handleNewUserJoined);
  });
  return (
    <div className="room-page-container">
      <h3>Room Page</h3>
    </div>
  );
};

export default RoomPage;
