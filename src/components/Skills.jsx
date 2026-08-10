import React, { useState } from "react";
import TiltCard from "./TiltCard";
import { Cpu, Smartphone, Globe, Database, Wrench } from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "All", icon: <Cpu className="w-4 h-4" /> },
    { name: "Mobile", icon: <Smartphone className="w-4 h-4" /> },
    { name: "Frontend", icon: <Globe className="w-4 h-4" /> },
    { name: "Backend", icon: <Database className="w-4 h-4" /> },
    { name: "Tools & Design", icon: <Wrench className="w-4 h-4" /> },
  ];

  const skillList = [
    {
      name: "Flutter",
      category: "Mobile",
      level: 92,
      color: "from-cyan-400 to-blue-500",
      desc: "Cross-platform iOS & Android, Dart, State Management (Provider, Riverpod)",
    },
    {
      name: "React.js",
      category: "Frontend",
      level: 90,
      color: "from-sky-400 to-cyan-500",
      desc: "Hooks, Context API, Tailwind CSS, Component Architecture",
    },
    {
      name: "Java",
      category: "Backend",
      level: 85,
      color: "from-orange-400 to-red-500",
      desc: "Object-Oriented Programming, Data Structures, Core Java Syntax",
    },
    {
      name: "React Native",
      category: "Mobile",
      level: 85,
      color: "from-indigo-400 to-cyan-400",
      desc: "Mobile development, Expo, Native Modules",
    },
    {
      name: "JavaScript (ES6+)",
      category: "Frontend",
      level: 95,
      color: "from-yellow-400 to-amber-500",
      desc: "Async JS, Promises, DOM Manipulation, Modern Syntaxes",
    },
    {
      name: "Firebase",
      category: "Backend",
      level: 88,
      color: "from-amber-400 to-orange-500",
      desc: "Firestore, Authentication, Cloud Functions, Realtime DB",
    },
    {
      name: "Node.js & Express",
      category: "Backend",
      level: 80,
      color: "from-emerald-400 to-green-500",
      desc: "REST APIs, Express middleware, Server logic",
    },
    {
      name: "MongoDB",
      category: "Backend",
      level: 82,
      color: "from-green-400 to-emerald-600",
      desc: "NoSQL Schemas, Aggregations, Mongoose",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      level: 94,
      color: "from-cyan-300 to-sky-500",
      desc: "Custom tokens, responsive design, animations & flex/grid",
    },
    {
      name: "UI/UX & Figma",
      category: "Tools & Design",
      level: 88,
      color: "from-purple-400 to-pink-500",
      desc: "Wireframing, Prototyping, Glassmorphic 3D Design Systems",
    },
    {
      name: "Git & GitHub",
      category: "Tools & Design",
      level: 90,
      color: "from-rose-400 to-red-500",
      desc: "Version Control, Branching, Pull Requests & CI/CD",
    },
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skillList
      : skillList.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-sm font-semibold mb-4">
            <Cpu className="w-4 h-4" /> TECH STACK & EXPERTISE
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            MY SKILLS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">& ARSENAL</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and frameworks I use to bring ideas to life.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-bold flex items-center gap-2 transition-all duration-300 ${
                  activeCategory === cat.name
                    ? "bg-gradient-to-r from-cyan-400 to-purple-600 text-black shadow-lg shadow-cyan-500/30 scale-105"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400"
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <TiltCard key={skill.name} maxTilt={8}>
              <div className="glass-card rounded-[28px] p-6 h-full border border-white/10 flex flex-col justify-between hover:border-cyan-400/40 transition duration-300">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-extrabold text-white">
                      {skill.name}
                    </h3>
                    <span className="text-sm font-mono font-bold text-cyan-400">
                      {skill.level}%
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                {/* Progress Bar Container */}
                <div>
                  <div className="w-full h-2.5 bg-black/40 rounded-full overflow-hidden p-0.5 border border-white/10">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 shadow-md`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="inline-block mt-3 text-[11px] font-mono text-gray-500 uppercase tracking-widest">
                    {skill.category}
                  </span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
