import React, { useState } from "react";
import TiltCard from "./TiltCard";
import ProjectModal from "./ProjectModal";
import {
  FolderCode,
  ExternalLink,
  Smartphone,
  Globe,
  Layers,
  Sparkles,
  Info,
} from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Comfy React Website",
      category: "React",
      link: "https://comfyprojects.netlify.app/",
      github: "https://github.com/Rahul202408",
      description:
        "A feature-rich React e-commerce web platform showcasing comfortable furniture and dynamic cart management with responsive modern layouts.",
      tags: ["React.js", "JavaScript", "Netlify", "Tailwind CSS", "Cart State"],
      features: [
        "Interactive product catalog with category filter",
        "Responsive glassmorphic UI across all screen sizes",
        "Fast client-side rendering hosted live on Netlify",
      ],
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
    },
    {
      id: 2,
      title: "Anusthan Jaap Application",
      category: "Flutter",
      link: "https://play.google.com/store/apps/details?id=com.trtech.anusthanjaap",
      github: "https://github.com/Rahul202408",
      description:
        "A published Google Play Store Flutter application designed for spiritual jaap tracking, counter analytics, and personalized goal management.",
      tags: ["Flutter", "Dart", "Play Store", "Local Storage", "Android"],
      features: [
        "Published on Google Play Store with active users",
        "Custom jaap counter with interactive haptic feedback",
        "Offline-first architecture with progress statistics",
      ],
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-400/30",
    },
    {
      id: 3,
      title: "Omnifood Healthy Meal Delivery",
      category: "HTML / CSS",
      link: "https://omnifood-rahul2026.netlify.app/",
      github: "https://github.com/Rahul202408",
      description:
        "A premium 365-days-per-year healthy food subscription web landing page crafted with clean HTML5 and modern CSS3 design.",
      tags: ["HTML5", "CSS3", "JavaScript", "Netlify", "UI/UX"],
      features: [
        "Interactive meal plans, pricing tiers, and testimonial grid",
        "Fully responsive modern layout for desktop, tablet, and mobile",
        "Hosted live on Netlify with high performance and accessibility",
      ],
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-400/30",
    },
    {
      id: 4,
      title: "Backroads Tour & Travel App",
      category: "React",
      link: "https://backbroad-app-tr.netlify.app/",
      github: "https://github.com/Rahul202408",
      description:
        "A modern responsive travel & tour booking web application highlighting featured tours, packages, services, and smooth user navigation.",
      tags: ["React.js", "JavaScript", "HTML/CSS", "Netlify", "UI/UX"],
      features: [
        "Interactive tour package catalog with destination highlights",
        "Smooth scroll navigation with responsive layout across devices",
        "Hosted live on Netlify with fast client-side rendering",
      ],
      badgeColor: "bg-sky-500/20 text-sky-300 border-sky-400/30",
    },
    {
      id: 5,
      title: "Unsplash Images Search App",
      category: "React",
      link: "https://tempviterahul26.netlify.app/",
      github: "https://github.com/Rahul202408",
      description:
        "A fast Vite + React web application integrating Unsplash API for searching high-resolution photos with interactive dark theme toggle and dynamic grid gallery.",
      tags: ["React.js", "Unsplash API", "Vite", "Dark Mode", "Netlify"],
      features: [
        "Real-time Unsplash photo search with keyword filtering",
        "Dark theme / light theme toggle button with smooth state persistence",
        "Hosted live on Netlify with ultra-fast Vite client rendering",
      ],
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    },
    {
      id: 6,
      title: "3D Futuristic Developer Portfolio",
      category: "React",
      link: "#home",
      github: "https://github.com/Rahul202408",
      description:
        "An interactive 3D WebGL developer portfolio built with React 19, Vite, Three.js particle starfield, mouse perspective 3D card tilt, and automated contact system.",
      tags: ["React 19", "Three.js", "Vite", "Tailwind CSS", "3D Tilt"],
      features: [
        "Interactive 3D Three.js particle starfield & floating geometry",
        "Real-time 3D perspective mouse tilt card animations",
        "Live email contact integration and interactive certificate viewer",
      ],
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-400/30",
    },
  ];

  const categories = ["All", "React", "Flutter", "HTML / CSS"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-sm font-semibold mb-4">
            <FolderCode className="w-4 h-4" /> FEATURED WORKS
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            MY CREATIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">PROJECTS</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Explore live applications and platforms I have architected and deployed.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-3 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-cyan-400 to-purple-600 text-black shadow-lg shadow-cyan-500/30 scale-105"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <TiltCard key={project.id} maxTilt={12}>
              <div className="glass-card rounded-[32px] p-7 h-full border border-white/10 flex flex-col justify-between hover:border-cyan-400/50 transition duration-500 group">
                <div>
                  {/* Card Banner / Number */}
                  <div className="relative h-48 rounded-2xl bg-gradient-to-br from-cyan-500/15 via-purple-500/10 to-transparent border border-white/10 flex items-center justify-center overflow-hidden mb-6 group-hover:border-cyan-400/40 transition">
                    <span className="text-7xl font-black text-cyan-400/20 font-['Space_Grotesk'] group-hover:scale-110 group-hover:text-cyan-400/40 transition duration-500">
                      0{idx + 1}
                    </span>

                    {/* Category Chip */}
                    <span
                      className={`absolute top-4 left-4 px-3.5 py-1 rounded-full border text-xs font-mono font-bold backdrop-blur-md ${project.badgeColor}`}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-cyan-300 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-gray-300 text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-gray-200 hover:text-white text-xs font-bold transition flex items-center justify-center gap-1.5"
                    >
                      <Info className="w-4 h-4 text-cyan-400" /> Details
                    </button>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-extrabold text-xs shadow-md shadow-cyan-500/20 hover:scale-105 transition flex items-center justify-center gap-1.5"
                    >
                      View Live <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
