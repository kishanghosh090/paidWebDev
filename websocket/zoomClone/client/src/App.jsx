import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import { SocketProvider } from "./providers/Socket";
import RoomPage from "./pages/Room";

function App() {
  return (
    <>
      <SocketProvider value={useState(null)}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/room/:roomId" element={<RoomPage />} />
        </Routes>
      </SocketProvider>
    </>
  );
}

export default App;
