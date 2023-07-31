import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState({
    color: 50,
    backgroundColor: "#111827",
  });
  document.body.style.backgroundColor = mode.backgroundColor;
  const changeMode = () => {
    if (mode.color === 50) {
      setMode({ color: 950, backgroundColor: "#f3f4f6" });
    } else {
      setMode({ color: 50, backgroundColor: "#111827" });
    }
  };

  return (
    <>
      <Navbar mode={mode.color} changeMode={changeMode} />
    </>
  );
}

export default App;
