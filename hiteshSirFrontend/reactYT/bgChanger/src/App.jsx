import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen " style={{ backgroundColor: color }}>
      <ul className="flex bg-slate-50 p-3 justify-around absolute bottom-10 w-[80%] left-1/2 transform -translate-x-1/2 rounded-full">
        <li className="px-4 bg-slate-300 py-2 rounded-xl">
          <button
            onClick={() => {
              setColor("olive");
            }}
          >
            olive
          </button>
        </li>
        <li className="px-4 bg-slate-300 py-2 rounded-xl">
          <button
            onClick={() => {
              setColor("red");
            }}
          >
            red
          </button>
        </li>
        <li className="px-4 bg-slate-300 py-2 rounded-xl">
          <button
            onClick={() => {
              setColor("green");
            }}
          >
            green
          </button>
        </li>
        <li className="px-4 bg-slate-300 py-2 rounded-xl">
          <button
            onClick={() => {
              setColor("blue");
            }}
          >
            blue
          </button>
        </li>
        <li className="px-4 bg-slate-300 py-2 rounded-xl">
          <button
            onClick={() => {
              setColor("yellow");
            }}
          >
            yellow
          </button>
        </li>
        <li className="px-4 bg-slate-300 py-2 rounded-xl">
          <button
            onClick={() => {
              setColor("black");
            }}
          >
            black
          </button>
        </li>
        <li className="px-4 bg-slate-300 py-2 rounded-xl">
          <button
            onClick={() => {
              setColor("brown");
            }}
          >
            black
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
