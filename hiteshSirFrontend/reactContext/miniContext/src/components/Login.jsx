import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const { user, SetUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    SetUser({ username, password });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
