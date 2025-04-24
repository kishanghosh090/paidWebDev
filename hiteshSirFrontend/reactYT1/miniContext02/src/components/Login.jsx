import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";

function Login() {
  const { setUser } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    setUser({ userName, password });
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="Enter your username"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter your password"
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
