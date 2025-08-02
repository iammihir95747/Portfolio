import React, { useState, useRef, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import Navbar from "./Navbar.jsx";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with React and Tailwind CSS. Features smooth animations and dark mode.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    github: "https://mihirrathodprofile.vercel.app/",
    demo: "#",
    video: null,
  },
  {
    title: "TodoAPP",
    description:
      "Currently working on it.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    github: "#",
    demo: "#",
    video: null,
  },
];

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
  { name: "React", icon: <FaReact className="text-cyan-400" />, image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" />, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
  { name: "Figma", icon: <FaFigma className="text-pink-500" />, image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80" },
];

const socialLinks = [
  {
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    icon: <FaEnvelope />,
    url: "mailto:your.email@example.com",
    label: "Email",
  },
];

import bgVideo from "../assets/bg.mp4";

function Master() {
  const [darkMode, setDarkMode] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Sending...");
    setTimeout(() => {
      setFormStatus("Thank you! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  const defaultSkillImage = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80";

  const videoSrc = bgVideo;
  const fallbackVideoSrc = "https://www.w3schools.com/howto/rain.mp4";
  const fallbackImageSrc = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80";

  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const [useFallbackVideo, setUseFallbackVideo] = useState(false);

  useEffect(() => {
    setVideoError(false);
    setUseFallbackVideo(false);
  }, [darkMode]);

  const handleVideoError = () => {
    if (!useFallbackVideo) {
      setUseFallbackVideo(true);
    } else {
      setVideoError(true);
    }
  };

  return (
    <div
      className={`font-sans ${darkMode ? "dark" : ""} min-h-screen transition-colors duration-500 relative`}
      style={{ background: "none" }}
    >
      {/* Global Background Video */}
      <div className="fixed inset-0 -z-20 w-full h-full overflow-hidden pointer-events-none">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{
              opacity: 1,
              transition: "opacity 0.5s",
            }}
            onError={handleVideoError}
          >
            <source src={useFallbackVideo ? fallbackVideoSrc : videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={fallbackImageSrc}
            alt="Background"
            className="w-full h-full object-cover"
            style={{
              opacity: darkMode ? 0.7 : 0.5,
              transition: "opacity 0.5s",
            }}
          />
        )}
      </div>

      {/* Navbar at the very top, no extra space */}
      <Navbar />

      {/* Theme Toggle */}
      <button
        className="fixed top-5 right-5 z-50 rounded-full p-2 bg-black/70 text-white hover:bg-white hover:text-black transition"
        aria-label="Toggle dark mode"
        onClick={() => setDarkMode((d) => !d)}
      >
        <span className="text-xl">
          {darkMode ? "🌞" : "🌙"}
        </span>
      </button>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section
          id="hero"
          className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 relative"
        >
          {/* No background video here, it's now global */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center gap-6 w-full max-w-3xl mx-auto  text-white py-12 px-6 rounded-none relative z-10">
              <img
                src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover mb-4"
              />
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-poppins">
                Hi, I'm <span className="text-black bg-white px-2 rounded">Mihir Rathod</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-200 tracking-wide mb-4">
                Web Developer &amp; Creative Coder
              </h2>
              <a
                href="#projects"
                className="inline-block px-8 py-3 text-black bg-white rounded font-semibold hover:bg-gray-200 transition"
              >
                View My Work
              </a>
              <div className="flex gap-4 mt-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-2xl text-white hover:text-black hover:bg-white rounded-full p-2 transition"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-screen py-20 px-0 flex flex-col items-center"
          style={{ position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full bg-white text-black py-12 px-6 rounded-none flex flex-col items-center"
          >
            <div className="w-full max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 font-poppins text-black">
                About Me
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                I'm a passionate web developer with a love for building beautiful, functional, and accessible web experiences. My journey started with curiosity and a knack for problem-solving, and now I thrive on turning ideas into reality with code. I enjoy collaborating, learning new technologies, and bringing creativity into every project. When I'm not coding, you might find me sketching, exploring new music, or hiking. My goal is to contribute to impactful projects and grow as a developer every day.
              </p>
              <div className="flex flex-wrap gap-6 justify-center mt-4">
                <div className="flex flex-col items-center">
                  <FaReact className="text-3xl text-cyan-400 mb-1" />
                  <span className="text-xs text-gray-600">React Lover</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaFigma className="text-3xl text-pink-400 mb-1" />
                  <span className="text-xs text-gray-600">Design Enthusiast</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaNodeJs className="text-3xl text-green-500 mb-1" />
                  <span className="text-xs text-gray-600">Backend Curious</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaJs className="text-3xl text-yellow-400 mb-1" />
                  <span className="text-xs text-gray-600">JS Fan</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <div
          className="w-full bg-black text-white py-6 text-center text-4xl tracking-wide font-extrabold"
          style={{
            letterSpacing: "0.08em",
            fontFamily: "'Pacifico', 'Dancing Script', 'Poppins', 'Space Grotesk', sans-serif",
            textShadow: "0 2px 16px rgba(0,255,255,0.12), 0 1px 0 #fff"
          }}
        >
          Minimalistic Design • Clean • Inspired by Simplicity 
        </div>
        {/* Projects Section */}
        <section
          id="projects"
          className="w-screen py-20 px-0 flex flex-col items-center"
          style={{ position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full bg-white text-black py-12 px-6 rounded-none flex flex-col items-center"
          >
            <div className="w-full max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 font-poppins text-black text-center">
                Projects
              </h3>
              <p className="text-lg mb-6 leading-relaxed text-center">
                Here are some of the projects I've worked on, each reflecting my passion for building useful and engaging web applications. I'm always eager to learn and take on new challenges!
              </p>
              <div className="flex flex-wrap gap-6 justify-center mt-4">
                {projects.map((project, idx) => (
                  <div key={project.title} className="flex flex-col items-center bg-white rounded-lg shadow-sm p-4 min-w-[180px] max-w-[220px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-20 h-20 object-cover rounded-lg mb-2 border border-black/10 ${project.title === "Coming Soon" ? "opacity-60" : ""}`}
                    />
                    <span className="text-base font-semibold text-black">{project.title}</span>
                    <span className="text-xs text-gray-600 mb-2 text-center">{project.description}</span>
                    {project.github && project.github !== "#" ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition"
                      >
                        View
                      </a>
                    ) : (
                      <span className="mt-2 px-4 py-1 bg-gray-300 text-gray-600 rounded-full text-sm font-semibold cursor-not-allowed">
                        Coming Soon
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-10 px-2 sm:px-4"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.5, ease: "easeOut" } }
            }}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto bg-black/95 text-white py-8 px-3 sm:px-6 rounded-xl shadow-xl flex flex-col items-center"
          >
            <motion.h3
              className="text-2xl sm:text-3xl font-extrabold mb-1 font-poppins text-center tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-white/80 via-white to-white/60 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </motion.h3>
            <motion.p
              className="text-gray-400 mb-6 text-center max-w-xs text-sm font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              Have a project in mind or just want to say hi? Drop me a message below.
            </motion.p>
            <form
              className="w-full flex flex-col gap-4"
              onSubmit={handleFormSubmit}
              autoComplete="off"
            >
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.18, duration: 0.4, type: "spring" }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full bg-black/80 border border-white/10 rounded-md text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:border-cyan-400 transition-all font-poppins text-base shadow"
                  value={form.name}
                  onChange={handleFormChange}
                  required
                />
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.22, duration: 0.4, type: "spring" }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full bg-black/80 border border-white/10 rounded-md text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:border-cyan-400 transition-all font-poppins text-base shadow"
                  value={form.email}
                  onChange={handleFormChange}
                  required
                />
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.26, duration: 0.4, type: "spring" }}
              >
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={2}
                  className="w-full bg-black/80 border border-white/10 rounded-md text-white placeholder-gray-400 py-2 px-3 focus:outline-none focus:border-cyan-400 transition-all font-poppins text-base resize-none shadow"
                  value={form.message}
                  onChange={handleFormChange}
                  required
                />
              </motion.div>
              <motion.button
                type="submit"
                className="mt-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white font-bold py-2 rounded-full shadow hover:from-purple-500 hover:to-cyan-400 hover:scale-105 transition-all duration-200 text-base tracking-wide disabled:opacity-60 border-0 outline-none focus:ring-2 focus:ring-cyan-400"
                disabled={formStatus === "Sending..."}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
              >
                {formStatus === "Sending..." ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 2L11 13" /><path d="M22 2L15 22L11 13L2 9L22 2Z" /></svg>
                    Send
                  </span>
                )}
              </motion.button>
              {formStatus && (
                <motion.div
                  className="text-green-400 text-center text-xs mt-1 font-poppins"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {formStatus}
                </motion.div>
              )}
            </form>
            <motion.div
              className="flex justify-center gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-xl text-white/80 hover:text-cyan-400 hover:bg-white/10 rounded-full p-2 transition-all duration-200 border border-white/10 hover:scale-110"
                  style={{ boxShadow: "0 2px 8px 0 rgba(0,255,255,0.08)" }}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-white bg-black w-full text-sm">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>

      <style>{`
        .font-poppins {
          font-family: 'Poppins', 'Inter', 'Space Grotesk', sans-serif;
        }
      `}</style>
    </div>
  );
}

export default Master;
