import React from "react";
import { X, ExternalLink, Smartphone, Layers, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl glass-card rounded-[36px] p-6 md:p-10 border border-white/20 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-cyan-500/20 border border-white/10 transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider border border-cyan-400/30">
            {project.category}
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          {project.title}
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
          {project.description ||
            "A high-performance modern web application built with clean architecture, responsive 3D UI components, and optimized state management."}
        </p>

        {/* Tech Stack Chips */}
        <div className="mb-8">
          <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4" /> Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {(project.tags || ["React", "JavaScript", "Tailwind CSS", "Vite"]).map(
              (tag, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 text-sm font-mono"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-8 p-6 rounded-2xl bg-black/40 border border-white/10">
          <h4 className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-4">
            Key Features
          </h4>
          <ul className="space-y-3">
            {(
              project.features || [
                "Responsive 3D Glassmorphism UI",
                "Optimized state management and smooth navigation",
                "High performance and accessibility standards",
              ]
            ).map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-extrabold shadow-lg shadow-cyan-500/30 hover:scale-105 transition flex items-center gap-2"
            >
              View Live Demo
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-2xl bg-white/10 border border-white/15 text-white font-bold hover:border-cyan-400 transition flex items-center gap-2"
            >
              Source Code
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
