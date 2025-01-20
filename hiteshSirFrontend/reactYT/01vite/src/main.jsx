import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

function MyApp() {
  return (
    <div className="">
      <h1>custom APP!! | chai from kishan rana ghosh</h1>
    </div>
  );
}
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit to google
  </a>
);

const ReactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to visit google"
);
createRoot(document.getElementById("root")).render(<App />);
