import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter, Routes, Link, Route, Router } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //dark mode enable hai ya nhi

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Router>
        <div>
          
          <switch>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <div className="container my-3">
            <TextForm heading="Type here" />
            {/* <About/> */}
          </div>
            <Route path="/about">
              <About />
            </Route>
            {/* <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route> */}
          </switch>
        </div>
      </Router>
    </>
  );
}

export default App;
