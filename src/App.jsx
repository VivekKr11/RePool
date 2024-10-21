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
import FLC from './Product/FLC';
import Ppboxes from './Product/Ppboxes';
import ContactUs from "./ContactUs/ContactUs";
import WindowFLC from './Product/WindowFLC';
import ScrollToTop from "./ScrollToTop";
import MetalTrolley from './Product/MetalTrolley';
import Others from './Product/Others';

function App() {
  return (
    <>
      <Router>
      <ScrollToTop />
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/AboutLeap" element={<AboutLeap />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/annualreturn" element={<AnnualReturn />} />
          <Route path="/pallet" element={<Pallet />} />
          <Route path="/flc" element={<FLC />} />
          <Route path="/ppboxes" element={<Ppboxes />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/windowflc" element={<WindowFLC />} />
          <Route path="/metaltrolley" element={<MetalTrolley />} />
          <Route path="/others" element={<Others />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
