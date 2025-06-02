import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(0);

  return (
    <>
      <div style={{ padding: 20 }}>
        <h1>Welcome to chai code</h1>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
      </div>

      <div>
        <h3>&& Operator</h3>
        {!!isLoggedIn && <p>welcome to chai code</p>}
      </div>
      <div>
        <h3>&& Operator</h3>
        {isLoggedIn ? <p>welcome to chai code</p> : <p>welcome </p>}
      </div>
    </>
  );
}

export default App;
