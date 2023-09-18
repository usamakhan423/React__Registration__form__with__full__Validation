import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Form from "./components/Form";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Form />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
