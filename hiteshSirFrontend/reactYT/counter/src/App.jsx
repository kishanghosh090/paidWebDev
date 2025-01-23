import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const addValue = () => {
    setCount((prevCounter) => {
      return prevCounter + 1;
    });
    setCount((prevCounter) => {
      return prevCounter + 1;
    });
  };

  return (
    <>
      <h1>hello chai from chai code </h1>
      <h2>counter value: {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <button>Remove value</button>
    </>
  );
}

export default App;
