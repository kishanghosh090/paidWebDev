import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hooks
  const passwordRef = useRef(null);

  const copyPasswordFromClipboard = useCallback(() => {
    // window.navigator.clipboard.writeText(password); // not too much optimized

    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 20);
    document.execCommand("copy");
  }, [passwordRef, password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%&";
    }

    for (let i = 1; i <= length; i++) {
      let char = str[Math.floor(Math.random() * str.length)];
      pass += char;
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full max-w-md mx-auto text-orange-500 bg-gray-600 px-3">
        <h1 className="text-3xl text-red-100">Password Generator</h1>
        <div className="flex w-full">
          <input
            type="text"
            value={password}
            className="p-2 m-2 w-full bg-white text-black rounded-md"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordFromClipboard}
            className="bg-blue-600 text-white px-2 py-1 rounded-md"
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col justify-between items-center">
          <div className="flex text-sm gap-x-1">
            <input
              type="range"
              min={4}
              max={20}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput" className="px-2">
              Numbers
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput" className="px-2">
              characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
