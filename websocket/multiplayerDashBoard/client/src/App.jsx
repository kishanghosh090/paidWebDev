import { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [score, setScore] = useState({});
  const [socres, setAllSocres] = useState([]);
  const socket = io("http://localhost:3000");

  function connectSocket() {
    socket.on("connection", (socket) => {
      console.log("a user connected", socket);
    });
  }

  function handleInput(event) {
    const { name, value } = event.target;
    let currentObj = { [name]: value };
    setScore({ ...score, ...currentObj });
  }
  function sendScore() {
    // console.log(score);

    socket.emit("score", score);
    socket.on("playerScore", (data) => {
      setAllSocres(data);
    });
  }

  useEffect(() => {
    connectSocket();
    // sendScore();
  }, []);
  return (
    <>
      <h1>React Multi player dash board</h1>
      <Input
        name="name"
        placeholder="Enter your name"
        handleInput={handleInput}
      />
      <Input
        name="score"
        placeholder="Enter your socre"
        handleInput={handleInput}
      />
      <button
        onClick={() => {
          if (score.name && score.score) {
            sendScore();
            return;
          }
          alert("Please enter your name and score");
        }}
      >
        Send Scores
      </button>

      <table>
        <tr>
          <th>Name</th>
          <th>Score</th>
        </tr>
        {socres.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.score}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default App;
