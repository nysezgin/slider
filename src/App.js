import "./reset.css";
import "./App.scss";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  //// Is Mobile?
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  const isMobile = size < 768;

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <>
      <Header isMobile={isMobile} />
      <Main isMobile={isMobile} />
    </>
  );
}

export default App;
