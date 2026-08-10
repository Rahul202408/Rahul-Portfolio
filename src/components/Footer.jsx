import React from "react";
import { ArrowUp, Code2, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 md:px-12 border-t border-white/10 bg-[#050714]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
            <Code2 className="w-4 h-4" />
          </div>
          <span className="font-extrabold text-white text-lg tracking-wider">
            TEJURA<span className="text-cyan-400">.RAHUL</span>
          </span>
        </div>

        <p className="text-gray-400 text-sm text-center font-light flex items-center gap-1.5">
          © {new Date().getFullYear()} Tejura Rahul • Designed & Built with 3D React & Tailwind
        </p>

        <button
          onClick={scrollToTop}
          className="p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/20 transition shadow-lg"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}
