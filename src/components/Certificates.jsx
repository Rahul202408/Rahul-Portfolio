import React, { useState } from "react";
import TiltCard from "./TiltCard";
import { Award, ExternalLink, X, Briefcase, Sparkles, Building2, CheckCircle2 } from "lucide-react";

export default function Certificates() {
  const [previewCert, setPreviewCert] = useState(null);

  const internshipDoc = {
    id: "intern-1",
    title: "React JS Development Internship",
    company: "Applified (Simplified Web & Mobile Apps)",
    founder: "Kedar Dave (Founder)",
    period: "01-04-2026 to 31-10-2026",
    enrollment: "22010101496 (Darshan University)",
    badge: "Official Internship Joining Letter",
    link: "https://drive.google.com/file/d/1YR7pWXZHSmZRf5RcdJf_lhSffKGvmAlM/view?usp=sharing",
    description:
      "Official Internship Joining Letter issued by Applified for React JS Development. Key focus areas include Web Development, UI/UX Design, Performance Optimization, and Feedback iteration under expert guidance.",
  };

  const certificates = [
    {
      id: 1,
      title: "Web Development Hackathon",
      issuer: "Darshan University, Rajkot",
      date: "9 Dec 2023",
      certId: "DUH23165",
      badge: "Hackathon Winner",
      link: "https://drive.google.com/file/d/1rjrYRG2hYaj4XeEzF64UkQYPcL3rN8ZP/view?usp=sharing",
      description:
        "One Day Hackathon on Web Development organized by the Department of Computer Science & Engineering, Darshan University.",
    },
    {
      id: 2,
      title: "Copilot Foundations",
      issuer: "Microsoft & Simplilearn SkillUp",
      date: "5 June 2025",
      certId: "8429685",
      badge: "AI & Microsoft Certified",
      link: "https://drive.google.com/file/d/1zaelp0xYp9MJr3cjygJrEvA9vlcNUBz8/view?usp=sharing",
      description: "Declaration of Completion for Microsoft Copilot Foundations online course on Simplilearn SkillUp portal.",
    },
    {
      id: 3,
      title: "NPTEL Cloud Computing",
      issuer: "NPTEL • IIT Kharagpur (Govt. of India)",
      date: "Jan - Apr 2025",
      badge: "Cloud Infrastructure",
      link: "https://drive.google.com/file/d/14mIJ4sxHvZMHjjTbMJgftnSvCq6qzb1t/view?usp=sharing",
      description: "12-week NPTEL Online Certification in Cloud Computing from IIT Kharagpur with a consolidated score of 54%.",
    },
    {
      id: 4,
      title: "Gemini for Google Workspace",
      issuer: "Google Cloud & Simplilearn SkillUp",
      date: "3 April 2025",
      certId: "8133060",
      badge: "AI & Google Cloud",
      link: "https://drive.google.com/file/d/1BUbzZ3o6KPMH7Vd9bNJDyDIFs4CMu2Iv/view?usp=sharing",
      description: "Declaration of Completion for Google Cloud course on Gemini for Google Workspace via Simplilearn SkillUp portal.",
    },
    {
      id: 5,
      title: "Machine Learning Specialization",
      issuer: "Simplilearn SkillUp",
      date: "21 April 2025",
      certId: "8139427",
      badge: "Machine Learning & AI",
      link: "https://drive.google.com/file/d/1w0Z_P0pOystsQnRr3gpOJhKY5PnaPV1_/view?usp=sharing",
      description: "Certificate of Completion for Machine Learning online course demonstrating commitment to data science and ML algorithms.",
    },
  ];

  return (
    <section id="certificates" className="relative py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-sm font-semibold mb-4">
            <Award className="w-4 h-4" /> RECOGNITIONS & EXPERIENCE
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            INTERNSHIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-400 to-purple-500">& CERTIFICATES</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Official internship accreditation, hackathon wins, and professional certificates earned along my engineering path.
          </p>
        </div>

        {/* UNIQUE FEATURED INTERNSHIP BANNER CARD */}
        <div className="mb-16">
          <TiltCard maxTilt={6}>
            <div className="relative rounded-[38px] p-8 md:p-10 bg-gradient-to-r from-[#0d1527] via-[#161f36] to-[#0d1527] border-2 border-amber-400/40 shadow-2xl shadow-amber-500/10 overflow-hidden group">
              {/* Top Glow Ribbon */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

              <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Featured Internship Joining Letter
                    </span>
                    <span className="text-xs font-mono text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      Enrollment: {internshipDoc.enrollment}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
                    {internshipDoc.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-cyan-400 text-sm font-semibold mb-4">
                    <span className="flex items-center gap-1.5 text-amber-300">
                      <Building2 className="w-4 h-4" /> {internshipDoc.company}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-300 font-mono text-xs">
                      {internshipDoc.period}
                    </span>
                  </div>

                  <p className="text-gray-300 text-base leading-relaxed font-light mb-6">
                    {internshipDoc.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {["React.js Development", "Web Design", "Code Optimization", "Production Processes"].map(
                      (skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-xl bg-black/40 border border-white/10 text-cyan-300 text-xs font-mono"
                        >
                          ✓ {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Right Action Box */}
                <div className="lg:col-span-4 flex flex-col justify-center items-stretch lg:items-end gap-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
                  <div className="text-left lg:text-right">
                    <span className="text-xs font-mono text-gray-400 block mb-1">Signed By</span>
                    <strong className="text-white text-lg block">{internshipDoc.founder}</strong>
                    <span className="text-xs text-amber-400 font-mono">Applified Inc.</span>
                  </div>

                  <a
                    href={internshipDoc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-black font-extrabold text-sm shadow-xl shadow-amber-500/25 hover:scale-105 transition flex items-center justify-center gap-2 group"
                  >
                    View Internship Letter <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                  </a>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Header for Certifications */}
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
          <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Award className="w-6 h-6 text-cyan-400" /> Verified Course Certifications
          </h3>
          <span className="text-xs font-mono text-cyan-400">
            {certificates.length} Official Documents
          </span>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <TiltCard key={cert.id} maxTilt={10}>
              <div className="glass-card rounded-[28px] p-7 h-full border border-white/10 flex flex-col justify-between hover:border-cyan-400/40 transition duration-300">
                <div>
                  {/* Top Trophy Icon */}
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 to-cyan-500/20 border border-amber-400/30 flex items-center justify-center text-3xl shadow-lg">
                      🏆
                    </div>
                    {cert.certId && (
                      <span className="text-[11px] font-mono bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg text-cyan-300">
                        ID: {cert.certId}
                      </span>
                    )}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 text-xs font-mono mb-3 inline-block">
                    {cert.badge}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-cyan-400 text-sm font-semibold mb-3">
                    {cert.issuer} • <span className="text-gray-400 font-mono text-xs">{cert.date}</span>
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                    {cert.description}
                  </p>
                </div>

                <button
                  onClick={() => setPreviewCert(cert)}
                  className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-cyan-500/15 hover:border-cyan-400/40 text-gray-200 hover:text-cyan-300 text-xs font-bold transition flex items-center justify-center gap-2 group"
                >
                  View Certificate Details
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                </button>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Certificate Detail / Image Modal */}
      {previewCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl glass-card rounded-[36px] p-8 border border-white/20 shadow-2xl overflow-hidden">
            <button
              onClick={() => setPreviewCert(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-cyan-500/20 border border-white/10 transition"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold uppercase border border-cyan-400/30">
                {previewCert.badge}
              </span>
              {previewCert.certId && (
                <span className="text-xs font-mono text-gray-400">
                  Certificate ID: <strong className="text-cyan-400">{previewCert.certId}</strong>
                </span>
              )}
            </div>

            <h3 className="text-3xl font-black text-white mb-2">
              {previewCert.title}
            </h3>

            <p className="text-cyan-400 font-bold text-base mb-6">
              Issued by {previewCert.issuer} ({previewCert.date})
            </p>

            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 mb-8">
              <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
                Summary / Verification
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {previewCert.description}
              </p>
            </div>

            <div className="flex gap-4 pt-4 border-t border-white/10">
              {previewCert.link && previewCert.link !== "#" ? (
                <a
                  href={previewCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-extrabold text-center shadow-lg hover:scale-105 transition flex items-center justify-center gap-2"
                >
                  Open Official Certificate URL <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <div className="w-full text-center py-3 text-xs font-mono text-gray-400 bg-white/5 rounded-xl border border-white/10">
                  💡 Note: Add official Google Drive / Image / PDF URL in <code className="text-cyan-300">Certificates.jsx</code> under <code className="text-cyan-300">link: "YOUR_URL"</code>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
