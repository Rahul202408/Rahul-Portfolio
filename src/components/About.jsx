import React from "react";
import TiltCard from "./TiltCard";
import { User, Code2, Cpu, Rocket, ShieldCheck, Sparkles } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8 text-cyan-400" />,
      title: "Cross-Platform Engineering",
      desc: "Building seamless high-performance Flutter mobile apps for Android & iOS alongside responsive React web portals.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: "Modern UI/UX Aesthetic",
      desc: "Crafting glassmorphic 3D designs, smooth micro-interactions, responsive layouts, and eye-catching visual aesthetics.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-sky-400" />,
      title: "Performance & Scalability",
      desc: "Writing clean, modular, maintainable code with strict state management and optimal API integration.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
      title: "End-to-End Delivery",
      desc: "From conceptual UI/UX wireframes to Play Store deployment and production deployment.",
    },
  ];

  return (
    <section id="about" className="relative py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-sm font-semibold mb-4">
            <User className="w-4 h-4" /> ABOUT ME
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            WHO AM <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">I</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            A computer science software developer with a relentless passion for creating high-impact digital applications.
          </p>
        </div>

        {/* Top 2 Banner Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* My Journey Card */}
          <TiltCard>
            <div className="glass-card rounded-[32px] p-8 md:p-10 h-full border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-400/30">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">My Journey</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  I am <strong className="text-cyan-400 font-semibold">Tejura Rahul</strong>, a Computer Science Developer based in Rajkot, Gujarat.
                  My passion lies at the intersection of powerful frontend logic and immersive design.
                  I specialize in crafting mobile applications published on the Google Play Store and complex React web applications.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-sm font-mono text-cyan-400">📍 Rajkot, Gujarat, India</span>
                <span className="text-sm font-mono text-purple-400">🎓 CS Engg (Darshan Uni • 6.60 CGPA)</span>
              </div>
            </div>
          </TiltCard>

          {/* Philosophy / Mindset Card */}
          <TiltCard>
            <div className="glass-card rounded-[32px] p-8 md:p-10 h-full border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-400/30">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Development Focus</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  Whether building an intuitive Flutter app like <em className="text-cyan-300">Anusthan Jaap</em> or an interactive e-commerce React platform like <em className="text-purple-300">Comfy React Website</em>, I prioritize clean architecture, responsive layouts, and slick 3D user interfaces.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-mono">
                  #FlutterDev
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-mono">
                  #ReactJS
                </span>
                <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-300 text-xs font-mono">
                  #UIUXDesign
                </span>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <TiltCard key={idx} maxTilt={10}>
              <div className="glass-card rounded-[28px] p-7 h-full border border-white/10 hover:border-cyan-400/40 transition duration-300">
                <div className="mb-5">{item.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
