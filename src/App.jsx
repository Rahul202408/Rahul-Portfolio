import React from "react";
import ThreeBackground from "./components/ThreeBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050714] text-white selection:bg-cyan-500 selection:text-black font-['Outfit',sans-serif]">
      {/* 3D Interactive Three.js Background */}
      <ThreeBackground />

      {/* Glassmorphic Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10 space-y-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
