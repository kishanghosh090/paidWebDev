import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("api/jokes/joke")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <h1>chai aur backend</h1>
      <p>JOKES: {jokes.length}</p>
      {jokes.map((joke) => {
        return (
          <div key={joke.id}>
            <p>{joke["text"]}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
