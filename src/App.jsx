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

// Google Fonts via CDN (add to index.html for real use)
// For demo, we use Tailwind's font utilities

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with React and Tailwind CSS. Features smooth animations and dark mode.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/yourusername/portfolio",
    demo: "#",
  },
  {
    title: "Task Manager App",
    description:
      "A full-stack task manager with authentication, built using MERN stack. Real-time updates and drag-and-drop UI.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/yourusername/task-manager",
    demo: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard app using React and OpenWeatherMap API. Features location search and animated weather icons.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/yourusername/weather-dashboard",
    demo: "#",
  },
  {
    title: "Blog Platform",
    description:
      "A minimal blog platform with markdown support, built with Node.js and MongoDB. Clean UI and easy publishing.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/yourusername/blog-platform",
    demo: "#",
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

// Remove all background color classes from gradientBg
const gradientBg = "";

// Import the video from the assets folder
import bgVideo from "./assets/bg.mp4";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);

  // For skills hover image
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // For demo, form submission is simulated
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

  // Default image for skills section
  const defaultSkillImage = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80";

  // --- Fix for background video not showing ---
  // 1. Import local video asset from assets folder
  // 2. Add fallback to a public video URL if bg.mp4 is missing
  // 3. Add error handling to show a fallback image if video fails to load

  // Use imported video from assets folder
  const videoSrc = bgVideo;
  const fallbackVideoSrc = "https://www.w3schools.com/howto/rain.mp4"; // Example fallback video
  const fallbackImageSrc = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80";

  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const [useFallbackVideo, setUseFallbackVideo] = useState(false);

  useEffect(() => {
    setVideoError(false);
    setUseFallbackVideo(false);
  }, [darkMode]); // Reset error on theme change

  const handleVideoError = () => {
    if (!useFallbackVideo) {
      setUseFallbackVideo(true);
    } else {
      setVideoError(true);
    }
  };

  return (
    <div
      className={`font-sans ${
        darkMode ? "dark" : ""
      } min-h-screen transition-colors duration-500`}
      style={{ background: "none" }}
    >
      {/* Background Video */}
      <div className="fixed inset-0 -z-20 w-full h-full overflow-hidden">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{
              opacity: 1, // Set opacity to full
              transition: "opacity 0.5s",
              filter: "blur(9px)",
            }}
            onError={handleVideoError}
          >
            <source src={useFallbackVideo ? fallbackVideoSrc : videoSrc} type="video/mp4" />
            {/* Fallback text */}
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
        {/* Optional: animated gradient overlay */}
        {/* Remove gradientBg class */}
        {/* Remove overlay if you want only video, or keep if you want subtle effect */}
        {/* <div className={`absolute inset-0 animate-gradient pointer-events-none`} style={{ opacity: 0.5 }}></div> */}
      </div>

      {/* Theme Toggle */}
      <button
        className="fixed top-5 right-5 z-50 rounded-full p-2 shadow-lg transition hover:scale-110"
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
          className="flex flex-col items-center justify-center min-h-screen text-center px-4"
          style={{ background: "none" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center gap-6">
              <img
                src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-lg object-cover mb-4"
              />
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-white font-poppins">
                Hi, I'm <span className="text-indigo-400">Your Name</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-200 dark:text-gray-300 tracking-wide mb-4">
                Web Developer &amp; Creative Coder
              </h2>
              <a
                href="#projects"
                className="inline-block px-8 py-3 text-white rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition"
                // removed bg-indigo-600
                style={{ background: "none" }}
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
                    className="text-2xl text-gray-300 hover:text-indigo-400 transition"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Me Section */}
        <section
          id="about"
          className="max-w-3xl mx-auto py-20 px-4 flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <h3 className="text-3xl font-bold mb-6 text-indigo-300 font-poppins">
              About Me
            </h3>
            <p className="text-lg text-gray-200 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate web developer with a love for building beautiful, functional, and accessible web experiences. My journey started with curiosity and a knack for problem-solving, and now I thrive on turning ideas into reality with code. I enjoy collaborating, learning new technologies, and bringing creativity into every project. When I'm not coding, you might find me sketching, exploring new music, or hiking. My goal is to contribute to impactful projects and grow as a developer every day.
            </p>
            {/* Fun icons/timeline */}
            <div className="flex flex-wrap gap-6 justify-center mt-4">
              <div className="flex flex-col items-center">
                <FaReact className="text-3xl text-cyan-400 mb-1" />
                <span className="text-xs text-gray-400">React Lover</span>
              </div>
              <div className="flex flex-col items-center">
                <FaFigma className="text-3xl text-pink-400 mb-1" />
                <span className="text-xs text-gray-400">Design Enthusiast</span>
              </div>
              <div className="flex flex-col items-center">
                <FaNodeJs className="text-3xl text-green-500 mb-1" />
                <span className="text-xs text-gray-400">Backend Curious</span>
              </div>
              <div className="flex flex-col items-center">
                <FaJs className="text-3xl text-yellow-400 mb-1" />
                <span className="text-xs text-gray-400">JS Fan</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="max-w-4xl mx-auto py-20 px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-indigo-300 font-poppins text-center">
              Skills
            </h3>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Skill image preview */}
              <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                <img
                  src={
                    hoveredSkill
                      ? hoveredSkill.image
                      : defaultSkillImage
                  }
                  alt={hoveredSkill ? hoveredSkill.name : "Skill Preview"}
                  className="w-48 h-48 object-cover rounded-xl shadow-lg border-4 border-indigo-400 transition-all duration-300"
                  style={{
                    opacity: hoveredSkill ? 1 : 0.7,
                  }}
                />
              </div>
              {/* Skills grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center group cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onFocus={() => setHoveredSkill(skill)}
                    onBlur={() => setHoveredSkill(null)}
                    tabIndex={0}
                  >
                    <div className="text-4xl mb-2 group-hover:scale-110 transition">
                      {skill.icon}
                    </div>
                    <span className="text-gray-200 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Skill bars */}
            <div className="mt-10 space-y-4">
              {[
                { name: "HTML5", level: 95 },
                { name: "CSS3", level: 90 },
                { name: "JavaScript", level: 90 },
                { name: "React", level: 85 },
                { name: "Node.js", level: 75 },
                { name: "Tailwind", level: 80 },
              ].map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>{s.name}</span>
                    <span>{s.level}%</span>
                  </div>
                  <div className="w-full rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all"
                      style={{ width: `${s.level}%`, backgroundColor: "#6366f1" /* indigo-500 */ }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="max-w-5xl mx-auto py-20 px-4"
          style={{ background: "none" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-indigo-300 font-poppins text-center">
              Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 32px #0003" }}
                  className="rounded-xl shadow-lg overflow-hidden flex flex-col"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <h4 className="text-xl font-bold text-indigo-200 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex gap-4 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 text-white rounded hover:bg-indigo-600 transition text-sm"
                        style={{ background: "none" }}
                      >
                        GitHub
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 text-white rounded hover:bg-indigo-700 transition text-sm"
                        style={{ background: "none" }}
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="max-w-2xl mx-auto py-20 px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-indigo-300 font-poppins text-center">
              Contact
            </h3>
            <form
              className="rounded-xl p-8 shadow-lg flex flex-col gap-4"
              onSubmit={handleFormSubmit}
              style={{ background: "none" }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                style={{ background: "none" }}
                value={form.name}
                onChange={handleFormChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                style={{ background: "none" }}
                value={form.email}
                onChange={handleFormChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                style={{ background: "none" }}
                value={form.message}
                onChange={handleFormChange}
                required
              />
              <button
                type="submit"
                className="text-white rounded px-6 py-2 font-semibold hover:bg-indigo-700 transition"
                style={{ background: "none" }}
                disabled={formStatus === "Sending..."}
              >
                {formStatus === "Sending..." ? "Sending..." : "Send Message"}
              </button>
              {formStatus && (
                <div className="text-green-400 text-sm mt-2">{formStatus}</div>
              )}
            </form>
            <div className="flex justify-center gap-6 mt-8">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-3xl text-gray-300 hover:text-indigo-400 transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>

      {/* Subtle animated gradient overlay */}
      <style>{`
        .animate-gradient {
          background: linear-gradient(120deg, #1e293b 0%, #6366f1 100%);
          background-size: 200% 200%;
          animation: gradientMove 8s ease-in-out infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .font-poppins {
          font-family: 'Poppins', 'Inter', 'Space Grotesk', sans-serif;
        }
      `}</style>
    </div>
  );
}

export default App;
