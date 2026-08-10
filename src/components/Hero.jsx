import React from "react";
import TiltCard from "./TiltCard";
import {
  ArrowRight,
  Download,
  Sparkles,
  Smartphone,
  Globe,
  Zap,
  Code,
  Layers,
  Terminal,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Radial Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/15 blur-[160px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-purple-500/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Hero Text */}
        <div className="lg:col-span-7 flex flex-col text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-sm font-semibold w-fit mb-6 shadow-lg shadow-cyan-500/10">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            Available for New Projects & Freelance Work
          </div>

          <h2 className="text-xl md:text-2xl font-bold tracking-wider text-cyan-400 uppercase mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5" /> Full Stack & Mobile Engineer
          </h2>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]">
            TEJURA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 neon-glow-cyan">
              RAHUL
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
            Architecting high-performance <strong className="text-cyan-400 font-semibold">Flutter Mobile Apps</strong>,
            futuristic <strong className="text-purple-400 font-semibold">React Web Platforms</strong>, and high-conversion UI/UX digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-5 mt-10">
            <a
              href="#projects"
              className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 text-black font-extrabold text-lg shadow-2xl shadow-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              Explore My Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
            </a>

            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-white/5 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 font-bold text-lg backdrop-blur-xl transition duration-300 flex items-center gap-3"
            >
              <Download className="w-5 h-5" /> View & Download CV
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-black text-cyan-400 font-['Space_Grotesk']">
                10+
              </span>
              <span className="text-sm text-gray-400 font-medium">Completed Projects</span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-black text-purple-400 font-['Space_Grotesk']">
                100%
              </span>
              <span className="text-sm text-gray-400 font-medium">Responsive & Fast</span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-black text-sky-400 font-['Space_Grotesk']">
                2+
              </span>
              <span className="text-sm text-gray-400 font-medium">Tech Stack Domains</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Holographic Cyber Card */}
        <div className="lg:col-span-5 flex justify-center">
          <TiltCard className="w-full max-w-md">
            <div className="glass-card rounded-[38px] p-8 relative overflow-hidden border border-white/15 shadow-2xl">
              {/* Top Cyber Accents */}
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs font-mono text-cyan-400/80 tracking-widest uppercase flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5" /> DEV_PROFILE.v3
                </div>
              </div>

              {/* Holographic Avatar Circle */}
              <div className="relative w-36 h-36 mx-auto mb-6 rounded-3xl p-1 bg-gradient-to-tr from-cyan-400 via-purple-500 to-sky-400 shadow-2xl shadow-cyan-500/40 animate-float">
                <div className="w-full h-full bg-[#050714] rounded-[22px] flex flex-col items-center justify-center relative overflow-hidden group">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-4xl font-black text-white shadow-inner">
                    TR
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Developer Details */}
              <div className="text-center translate-z-10">
                <h3 className="text-2xl font-extrabold text-white tracking-wide">
                  Tejura Rahul
                </h3>
                <p className="text-cyan-400 font-semibold text-sm mt-1">
                  Flutter App & React Web Developer
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap justify-center gap-2 mt-5">
                  <span className="px-3 py-1 rounded-lg bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-mono flex items-center gap-1">
                    <Smartphone className="w-3.5 h-3.5" /> Flutter
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-purple-500/15 border border-purple-400/30 text-purple-300 text-xs font-mono flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5" /> React.js
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-mono flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" /> Node / Firebase
                  </span>
                </div>

                {/* Interactive Highlight Box */}
                <div className="mt-6 p-4 rounded-2xl bg-black/40 border border-white/10 text-left flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Full Stack Architecture</h4>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Clean Code • Scalable State • Modern UI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
