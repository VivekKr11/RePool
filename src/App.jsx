import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";
import Homepage from "./HomePage/Homepage";
import AboutLeap from "./AboutPage/AboutLeap";
import Leadership from "./AboutPage/Leadership";
import AnnualReturn from "./AboutPage/AnnualReturn";
import Pallet from "./Product/Pallet";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/AboutLeap" element={<AboutLeap />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/annualreturn" element={<AnnualReturn />} />
          <Route path="/pallet" element={<Pallet />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
