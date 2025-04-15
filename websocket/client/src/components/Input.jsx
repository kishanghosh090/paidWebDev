import React from "react";

export default function Input({ placeholder, handleInput, name }) {
  return (
    <div className="input">
      <input
      onChange={handleInput}
        name={name}
        className="input-field"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
