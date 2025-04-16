import { useState } from "react";
import io from "socket.io-client";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [formInput, setFormInput] = useState({});
  const socket = io("http://localhost:4000", {
    transports: ["websocket"],
  });
  const [crudData, setCrudData] = useState([]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setFormInput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (event) => {
    // console.log(formInput);
    event.preventDefault();
    if (!formInput.name || !formInput.age || !formInput.phone) {
      alert("Please fill all the fields");
      return;
    }

    socket.emit("data", formInput);

    setFormInput({ name: "", age: "", phone: "" });
    socket.on("data", (data) => {
      console.log(data);
      setCrudData(data);
    });
  };

  useEffect(() => {}, []);
  return (
    <>
      <h1>CRUD operation</h1>
      <div className="form-fields">
        <input
          type="text"
          onChange={handleInput}
          name="name"
          className="input-field"
          placeholder="Enter Your Input"
        />
        <input
          type="text"
          onChange={handleInput}
          name="age"
          className="input-field"
          placeholder="Enter Your Age"
        />
        <input
          type="number"
          onChange={handleInput}
          name="phone"
          className="input-field"
          placeholder="Enter Your Phone Number"
        />
        <button onClick={handleSubmit}>Add Data</button>
      </div>
    </>
  );
}

export default App;
