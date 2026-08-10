import React, { useState, useEffect } from "react";
import { Menu, X, Code2, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-[#050714]/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group text-2xl font-black tracking-wider"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center p-[2px] transition duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-cyan-500/30">
            <div className="w-full h-full bg-[#0a0d24] rounded-[10px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-cyan-400" />
            </div>
          </div>
          <span className="font-extrabold text-white tracking-widest text-xl md:text-2xl">
            TEJURA<span className="text-cyan-400 neon-glow-cyan">.RAHUL</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-full px-6 py-2 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-cyan-400 rounded-full transition-all hover:bg-cyan-500/10 flex items-center gap-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://github.com/Rahul202408"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition"
            title="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/tejura-rahul-2025rajkot/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold rounded-xl group bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 group-hover:from-cyan-400 group-hover:to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105 transition duration-300"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#0a0d24] rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400 group-hover:text-white" />
              Let's Talk
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 hover:bg-cyan-500/10 transition"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0d24]/95 border-b border-cyan-500/20 backdrop-blur-2xl px-6 py-6 transition-all duration-300 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-lg font-semibold text-gray-200 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-xl transition"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex items-center gap-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-extrabold shadow-lg"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
