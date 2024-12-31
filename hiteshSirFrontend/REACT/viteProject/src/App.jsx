import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const submitHandler = (e) => {
    console.log(JSON.stringify(formData));
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={userName}
          onChange={(e) => {
            setuserName(e.target.value);
            setFormData({ ...formData, username: e.target.value });
          }}
          type="text"
          name="username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
            setFormData({ ...formData, password: e.target.value });
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
