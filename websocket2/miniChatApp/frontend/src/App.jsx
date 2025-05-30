import { io } from "socket.io-client";

import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const socket = useMemo(
    () =>
      io("http://localhost:4000", {
        transports: ["websocket"],
      }),
    []
  );
  const [userPhone, setUserPhone] = useState("");
  const [toPhone, setToPhone] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
    });
    socket.on("users", (data) => {
      setUsers(data);
    });
    socket.on("online", (data) => {
      if (data) {
        toast.success("Your Friend Is Online. wait until Your Friend Join");
        setIsChatBoxOpen(true);
      } else {
        toast.error("Your Friend Is Offline");
      }
    });
  }, []);

  return (
    <div className="px-10 flex h-screen justify-center items-center bg-neutral-950">
      <Toaster />
      {!isOpen && (
        <div className="p-10 flex flex-col gap-4 bg-gray-800 text-white rounded-2xl">
          <h1 className="text-xl ">Enter Your Email To Start Chatting</h1>
          <input
            className="p-2 rounded-2xl border-2 "
            type="number"
            onChange={(e) => {
              setUserPhone(e.target.value);
            }}
          />
          <button
            onClick={() => {
              if (userPhone) {
                setIsOpen(true);
                socket.emit("join", userPhone);
              } else {
                alert("Please Enter Your Phone Number");
              }
            }}
            className="p-2 rounded-2xl bg-blue-600"
          >
            Start Chatting
          </button>
        </div>
      )}
      {isOpen && (
        <div className="p-10 flex flex-col gap-4 bg-gray-800 text-white rounded-2xl border-1 border-pink-700">
          {users.map((user) => (
            <h1 key={user}>{user}</h1>
          ))}
          {users.length === 0 && <h1>No Users Online</h1>}
          <h1>Join with Your Friend</h1>
          <input
            className="p-2 rounded-2xl border-2 "
            type="email"
            onChange={(e) => {
              setToPhone(e.target.value);
            }}
          />
          <button
            className="p-2 rounded-2xl bg-blue-600"
            onClick={() => {
              if (toPhone) {
                socket.emit("isOnline", { toPhone, userPhone });
              } else {
                alert("Please Enter Your Friend Phone Number");
              }
            }}
          >
            Check and Join
          </button>
        </div>
      )}
      {isChatBoxOpen && (
        <div className="p-10 flex flex-col gap-4 bg-gray-800 text-white rounded-2xl border-1 border-pink-700">
          <h1>Chat With Your Friend</h1>
          <input
            className="p-2 rounded-2xl border-2 "
            type="text"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button
            className="p-2 rounded-2xl bg-blue-600"
            onClick={() => {
              if (message) {
                socket.emit("message", {
                  from: userPhone,
                  to: toPhone,
                  message,
                });
              } else {
                alert("Please Enter Your Message");
              }
            }}
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
