import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Disasters from "./pages/Disasters";
import Emergency from "./pages/Emergency";
import Modules from "./pages/Modules";
import Resources from "./pages/Resources";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import SafetyTips from "./pages/SafetyTips";

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/disasters" element={<Disasters/>} />
          <Route path="/emergency" element={<Emergency/>} />
          <Route path="/modules" element={<Modules/>} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/safetytips" element={<SafetyTips/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
