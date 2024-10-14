import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Events from "./components/Events.jsx";
import Family from "./components/Family.jsx";
import Business from "./components/Business.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/family" element={<Family />} />
        <Route path="/business" element={<Business />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
