import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
