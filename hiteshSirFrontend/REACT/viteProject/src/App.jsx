import "./App.css";

import React, { useState } from "react";

const App = () => {
  const [a, setA] = useState(10)
  return (
    <div>
      <h1>hello {a}</h1>
      <button onClick={() => setA(a + 1)}>chane a</button>
    </div>
  );
};

export default App;
