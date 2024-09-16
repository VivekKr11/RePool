import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";
import Homepage from "./HomePage/Homepage";
import AboutLeap from "./AboutPage/AboutLeap";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/AboutLeap" element={<AboutLeap />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
