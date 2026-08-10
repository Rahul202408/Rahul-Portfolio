import React, { useState } from "react";
import TiltCard from "./TiltCard";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/rahultejura2026@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Subject: formData.subject || "Portfolio Contact Form Inquiry",
          Message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        // Fallback to mailto if API fails
        window.location.href = `mailto:rahultejura2026@gmail.com?subject=${encodeURIComponent(
          formData.subject || "Portfolio Contact Inquiry"
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
      }
    } catch (err) {
      window.location.href = `mailto:rahultejura2026@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Portfolio Contact Inquiry"
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-sm font-semibold mb-4">
            <MessageSquare className="w-4 h-4" /> GET IN TOUCH
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            LET'S WORK <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">TOGETHER</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project idea, mobile app requirement, or web development inquiry? Feel free to drop a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact info cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <TiltCard maxTilt={8}>
              <div className="glass-card rounded-[28px] p-6 border border-white/10 flex items-center gap-5 hover:border-cyan-400/40 transition">
                <div className="p-4 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-400/30">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    Email Address
                  </h4>
                  <a
                    href="mailto:rahultejura2026@gmail.com"
                    className="text-white font-bold text-lg hover:text-cyan-300 transition truncate block"
                  >
                    rahultejura2026@gmail.com
                  </a>
                </div>
              </div>
            </TiltCard>

            <TiltCard maxTilt={8}>
              <div className="glass-card rounded-[28px] p-6 border border-white/10 flex items-center gap-5 hover:border-cyan-400/40 transition">
                <div className="p-4 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-400/30">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">
                    Phone / WhatsApp
                  </h4>
                  <a
                    href="tel:+919426068560"
                    className="text-white font-bold text-lg hover:text-cyan-300 transition block"
                  >
                    +91 94260 68560
                  </a>
                </div>
              </div>
            </TiltCard>

            <TiltCard maxTilt={8}>
              <div className="glass-card rounded-[28px] p-6 border border-white/10 flex items-center gap-5 hover:border-cyan-400/40 transition">
                <div className="p-4 rounded-2xl bg-sky-500/20 text-sky-400 border border-sky-400/30">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">
                    Location
                  </h4>
                  <p className="text-white font-bold text-lg">
                    Rajkot, Gujarat, India
                  </p>
                </div>
              </div>
            </TiltCard>

            {/* Social Buttons */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/Rahul202408"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-white font-bold transition flex items-center justify-center gap-2"
              >
                <GithubIcon className="w-5 h-5 text-cyan-400" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/tejura-rahul-2025rajkot/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/10 text-white font-bold transition flex items-center justify-center gap-2"
              >
                <LinkedinIcon className="w-5 h-5 text-purple-400" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: 3D Form */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={5}>
              <div className="glass-card rounded-[36px] p-8 md:p-10 border border-white/15 shadow-2xl relative">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
                  Send Me a Direct Message
                </h3>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 text-center animate-fadeIn">
                    <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Thank You!
                    </h4>
                    <p className="text-cyan-300">
                      Your message has been received. I will get back to you shortly!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Alex Smith"
                          className="w-full px-5 py-3.5 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="e.g. alex@example.com"
                          className="w-full px-5 py-3.5 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="Project Discussion / Freelance / Hiring"
                        className="w-full px-5 py-3.5 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                        Your Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell me about your project requirement or idea..."
                        className="w-full px-5 py-3.5 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-600 text-black font-extrabold text-lg shadow-xl shadow-cyan-500/25 hover:scale-[1.02] disabled:opacity-50 transition flex items-center justify-center gap-3"
                    >
                      {isSending ? (
                        <>Sending Message...</>
                      ) : (
                        <>
                          Send Message <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
