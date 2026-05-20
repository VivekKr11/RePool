import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Lenis from "lenis";
import gsap from "gsap";
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
import TermsAndCondition from './TermsAndCondition/TermsAndCondition';
import Services from './Services/Services';
import Privacy from './TermsAndCondition/Privacy';

function App() {
  // ── Lenis smooth scroll, synced to GSAP's RAF ticker ──
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      // expo-out easing: fast start, silky deceleration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.8,
    });

    const lenisRaf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(lenisRaf);
    gsap.ticker.lagSmoothing(0); // no frame-skip compensation — keeps scroll consistent

    return () => {
      gsap.ticker.remove(lenisRaf);
      lenis.destroy();
    };
  }, []);

  // ── Footer height → CSS variable (for reveal effect) ──
  useEffect(() => {
    const update = () => {
      const el = document.querySelector(".rp-footer");
      if (el) {
        document.documentElement.style.setProperty("--footer-h", `${el.offsetHeight}px`);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="rp-page-body">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/About" element={<AboutLeap />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/annualreturn" element={<AnnualReturn />} />
            <Route path="/pallet" element={<Pallet />} />
            <Route path="/flc" element={<FLC />} />
            <Route path="/ppboxes" element={<Ppboxes />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/windowpls" element={<WindowFLC />} />
            <Route path="/metaltrolley" element={<MetalTrolley />} />
            <Route path="/others" element={<Others />} />
            <Route path="/termsandcondition" element={<TermsAndCondition />} />
            <Route path="/services" element={<Services />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
