import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Img from "../assets/mypic.png";
import project2 from "../assets/project2.png";
import ResumePDF from "../assets/resume.pdf"; // Import your resume PDF

// Font: Inter (geometric sans-serif)
const FONT = "font-inter";

// --- Data ---

const NAV_LINKS = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Play", href: "#play" },
  { name: "Resume", href: "#resume" }, // Resume section
  { name: "Contact", href: "#contact" }, // Contact section
];

const SOCIALS = [
  {
    name: "Figma",
    href: "https://figma.com/",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#0ACF83" />
        <circle cx="12" cy="7" r="4" fill="#A259FF" />
        <circle cx="12" cy="17" r="4" fill="#F24E1E" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/iammihir95747",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="#222" strokeWidth="2" />
        <path d="M9 18c-4-1.5-4-6 0-7" stroke="#222" strokeWidth="1.5" />
        <path d="M15 18c4-1.5 4-6 0-7" stroke="#222" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" stroke="#222" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "CV",
    href: ResumePDF,
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="#1976d2" strokeWidth="2" />
        <path d="M8 8h8M8 12h8M8 16h4" stroke="#1976d2" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mihir-rathod-563273300/",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="2" stroke="#1976d2" strokeWidth="2" />
        <rect x="6" y="9" width="2" height="7" fill="#1976d2" />
        <rect x="11" y="12" width="2" height="4" fill="#1976d2" />
        <circle cx="7" cy="7" r="1" fill="#1976d2" />
      </svg>
    ),
  },
  {
    name: "Message",
    href: "mailto:mihirrathod95747@gmail.com",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="#1976d2" strokeWidth="2" />
        <path d="M3 6l9 7 9-7" stroke="#1976d2" strokeWidth="2" />
      </svg>
    ),
  },
];

const PROJECTS = [
  {
    name: "Portfolio Website",
    desc: "A personal portfolio to showcase my work and skills. Responsive, fast, and modern.",
    stack: ["React", "Tailwind CSS"],
    img: "https://wiztoonz.com/wp-content/uploads/2022/04/Blog-Post-Portfolio-1170x658.jpg",
    href: "https://mihirrathodprofile.vercel.app/",
    color: "from-[#e0f7fa] to-[#f1f8e9]",
    inProgress: false,
  },
  {
    name: "Cab Booking Website",
    desc: "All React state, props, and functionality are implemented here.",
    stack: ["React.js"],
    img: project2,
    href: "https://www.chamundacab.com/",
    color: "from-[#fceabb] to-[#f8b500]",
    inProgress: false,
  },
  {
    name: "Next Project",
    desc: "Coming soon. Stay tuned for more.",
    stack: [],
    img: "",
    href: "#",
    color: "from-[#e0c3fc] to-[#8ec5fc]",
    inProgress: true,
  },
];

const TIMELINE = [
  {
    year: "2026",
    title: "Master of Computer Applications (MCA)",
    desc: "Gujarat University (Ongoing)",
    tags: ["Education"],
  },
  {
    year: "2024",
    title: "Bachelor of Computer Applications (BCA)",
    desc: "Gujarat University, 7.33 CGPA",
    tags: ["Education"],
  },
  {
    year: "2021",
    title: "Higher Secondary Certificate (HSC)",
    desc: "GSEB 58.42%",
    tags: ["School"],
  },
  {
    year: "2019",
    title: "Secondary School Certificate (SSC)",
    desc: "GSEB 68.66%",
    tags: ["School"],
  },
];

const PRINCIPLES = [
  {
    title: "Clarity",
    desc: "Designs should be easy to understand and navigate.",
  },
  {
    title: "Delight",
    desc: "Subtle details and micro-interactions create joy.",
  },
  {
    title: "Consistency",
    desc: "A unified system builds trust and usability.",
  },
  {
    title: "Purpose",
    desc: "Every element must serve a clear function.",
  },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
];

const PLAY_TOOLS = [
  {
    name: "Color Palette Generator",
    desc: "Generate harmonious color palettes for your next project.",
    img: "🎨",
  },
  {
    name: "SVG Blob Maker",
    desc: "Create organic SVG blobs for backgrounds.",
    img: "🧬",
  },
  {
    name: "CSS Glassmorphism",
    desc: "Preview and copy glassmorphism CSS styles.",
    img: "🧊",
  },
  {
    name: "Noise Texture Maker",
    desc: "Generate subtle noise PNGs for backgrounds.",
    img: "🌫️",
  },
];

// --- Animations ---
const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: "easeOut" },
  }),
};

const hoverLift = {
  whileHover: { y: -8, scale: 1.03, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)" },
  whileTap: { scale: 0.98 },
};

// --- Components ---

function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md ${FONT}`}
      style={{ fontFamily: "Inter, Satoshi, sans-serif", height: "48px" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6" style={{ height: "48px" }}>
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center h-full"
          style={{ height: "48px" }}
        >
          <span className="inline-block align-middle">Mihir Rathod</span>
        </a>
        <ul className="hidden md:flex gap-7 h-full items-center">
          {NAV_LINKS.filter(link => link.name !== "Play").map((link) => (
            <li key={link.name} className="h-full flex items-center">
              {link.name === "Resume" ? (
                <a
                  href="#resume"
                  className="relative text-base text-gray-700 dark:text-gray-200 font-semibold px-1 py-1 transition-colors duration-200
                    after:content-[''] after:block after:h-0.5 after:bg-gradient-to-r after:from-green-400 after:to-yellow-200 after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left flex items-center h-full"
                  style={{
                    fontFamily: "Inter, Satoshi, sans-serif",
                    letterSpacing: "0.01em",
                    height: "48px",
                  }}
                >
                  {link.name}
                </a>
              ) : (
                <a
                  href={link.href}
                  className="relative text-base text-gray-700 dark:text-gray-200 font-semibold px-1 py-1 transition-colors duration-200
                    after:content-[''] after:block after:h-0.5 after:bg-gradient-to-r after:from-green-400 after:to-yellow-200 after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left flex items-center h-full"
                  style={{
                    fontFamily: "Inter, Satoshi, sans-serif",
                    letterSpacing: "0.01em",
                    height: "48px",
                  }}
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>
        {/* Removed Play button and reduced nav height */}
      </div>
      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            className="fixed inset-0 z-50 bg-white/90 dark:bg-gray-900/95 backdrop-blur-md flex flex-col items-center justify-center md:hidden"
          >
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
            >
              ×
            </button>
            <ul className="flex flex-col gap-7 text-xl">
              {NAV_LINKS.filter(link => link.name !== "Play").map((link) => (
                <li key={link.name}>
                  {link.name === "Resume" ? (
                    <a
                      href="#resume"
                      className="text-gray-900 dark:text-white font-semibold"
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-900 dark:text-white font-semibold"
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 pt-32 pb-16"
    >
      {/* Gradient BG */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#e6f9e5] via-[#f8f8e1] to-[#f7f6f2]" />
      {/* Glowing stars */}
      <motion.div
        className="absolute left-10 top-16 text-2xl opacity-70"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span role="img" aria-label="star">✨</span>
      </motion.div>
      <motion.div
        className="absolute right-10 bottom-20 text-2xl opacity-60"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      >
        <span role="img" aria-label="star">✨</span>
      </motion.div>
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white text-center mb-6 leading-tight"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        style={{ fontFamily: "Inter, Satoshi, sans-serif" }}
      >
        Hi. I'm <span className="bg-gradient-to-r from-green-400 to-yellow-200 bg-clip-text text-transparent">Mihir.</span>
        <br />
        <span className="block mt-2">A Web Developer.</span>
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 text-center max-w-xl mx-auto mb-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 0.2 }}
      >
        I design and build digital products with clarity, delight, and purpose.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 0.3 }}
      >
        <a
          href="#work"
          className="px-5 py-2 rounded-md bg-green-100 text-green-800 font-medium hover:bg-green-200 transition-colors duration-150"
        >
          View Work
        </a>
        <a
          href="#about"
          className="px-5 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150"
        >
          About Me
        </a>
        <a
          href="#resume"
          className="px-5 py-2 rounded-md border border-green-300 bg-transparent text-green-700 font-medium flex items-center gap-2 hover:bg-green-50 transition-colors duration-150"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="16" rx="3" stroke="#1976d2" strokeWidth="2" />
            <path d="M8 8h8M8 12h8M8 16h4" stroke="#1976d2" strokeWidth="2" />
          </svg>
          Resume
        </a>
      </motion.div>
    </section>
  );
}

function Work() {
  return (
    <section
      id="work"
      className="max-w-5xl mx-auto px-4 py-20"
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        Selected Work
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.filter((p) => !p.inProgress).map((proj, i) => (
          <motion.a
            key={proj.name}
            href={proj.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block rounded-[40px] overflow-hidden shadow-lg bg-gradient-to-br ${proj.color} transition-all duration-200`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={i}
            whileHover={hoverLift.whileHover}
            whileTap={hoverLift.whileTap}
          >
            <div className="flex flex-col h-full">
              <img
                src={proj.img}
                alt={proj.name}
                className="w-full h-56 object-cover rounded-t-[40px] group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-7 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{proj.name}</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full bg-white/70 text-xs font-medium text-gray-700 border border-gray-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
      {/* In Progress Section */}
      <motion.div
        className="mt-20 flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.div
          className="text-center text-lg font-bold text-gray-400 tracking-wide animate-pulse"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="inline-block align-middle mr-2">🚧</span>
          More projects in progress...
        </motion.div>
      </motion.div>
    </section>
  );
}

function ResumeSection() {
  return (
    <section
      id="resume"
      className="max-w-3xl mx-auto px-4 py-20 flex flex-col items-center"
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        My Resume
      </motion.h2>
      <img
        src={Img}
        alt="Mihir Rathod"
        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mb-6"
      />
      <div className="mb-6 text-center">
        <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Mihir Rathod</div>
        <div className="text-gray-600 dark:text-gray-300 mb-1">Web Developer</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">Email: mihirrathod95747@gmail.com</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">LinkedIn: <a href="https://www.linkedin.com/in/mihir-rathod-563273300/" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-300 underline">mihir-rathod-563273300</a></div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">Location: Ahmedabad, Gujarat, India</div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <a
          href={ResumePDF}
          className="px-7 py-3 rounded-full bg-gradient-to-r from-green-400 to-yellow-200 text-gray-900 font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200 flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="16" rx="3" stroke="#1976d2" strokeWidth="2" />
            <path d="M8 8h8M8 12h8M8 16h4" stroke="#1976d2" strokeWidth="2" />
          </svg>
          Download Resume
        </a>
        <a
          href={ResumePDF}
          className="px-7 py-3 rounded-full border border-green-400 bg-white/80 dark:bg-gray-900/80 text-green-700 font-semibold shadow hover:scale-105 hover:shadow-lg transition-all duration-200 flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="16" rx="3" stroke="#1976d2" strokeWidth="2" />
            <path d="M8 8h8M8 12h8M8 16h4" stroke="#1976d2" strokeWidth="2" />
          </svg>
          Preview Resume
        </a>
      </div>
      <div className="w-full max-w-2xl aspect-[1/1.414] bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <iframe
          src={ResumePDF}
          title="Resume Preview"
          className="w-full h-full"
          style={{ minHeight: 500, border: "none" }}
        />
      </div>
      {/* Resume Details */}
      <div className="w-full mt-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Summary</h3>
        <p className="text-gray-700 dark:text-gray-200 mb-6">
          Passionate and detail-oriented Web Developer with experience in building responsive and user-friendly web applications using React.js and modern web technologies. Strong foundation in computer science and a keen eye for design and usability.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Education</h3>
        <ul className="mb-6">
          <li className="mb-2">
            <span className="font-medium text-gray-900 dark:text-white">Master of Computer Applications (MCA)</span> - Gujarat University (Ongoing)
          </li>
          <li className="mb-2">
            <span className="font-medium text-gray-900 dark:text-white">Bachelor of Computer Applications (BCA)</span> - Gujarat University, 7.33 CGPA
          </li>
          <li className="mb-2">
            <span className="font-medium text-gray-900 dark:text-white">Higher Secondary Certificate (HSC)</span> - GSEB 58.42%
          </li>
          <li>
            <span className="font-medium text-gray-900 dark:text-white">Secondary School Certificate (SSC)</span> - GSEB 68.66%
          </li>
        </ul>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Skills</h3>
        <ul className="flex flex-wrap gap-2 mb-6">
          <li className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">React.js</li>
          <li className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">JavaScript</li>
          <li className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">Tailwind CSS</li>
          <li className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">HTML5</li>
          <li className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">CSS3</li>
          <li className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">Git</li>
          <li className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">Figma</li>
        </ul>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Projects</h3>
        <ul className="mb-6">
          <li className="mb-2">
            <span className="font-medium text-gray-900 dark:text-white">Portfolio Website:</span> A personal portfolio to showcase my work and skills. Responsive, fast, and modern.
          </li>
          <li>
            <span className="font-medium text-gray-900 dark:text-white">Cab Booking Website:</span> All React state, props, and functionality are implemented here.
          </li>
        </ul>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-4 py-20"
    >
      <motion.div
        className="flex flex-col md:flex-row items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="flex-shrink-0 flex flex-col items-center">
          <img
            src={Img}
            alt="Mihir Rathod"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-lg mb-6"
          />
          <div className="text-center text-gray-500 text-xs">Mihir Rathod</div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-200 text-lg mb-8">
            I’m a passionate web developer with a love for clarity, delight, and purpose in digital products. I thrive in collaborative teams and love turning ideas into reality with clean, efficient code.
          </p>
          {/* Timeline */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Experience & Education</h3>
            <ol className="relative border-l-2 border-green-200 pl-6">
              {TIMELINE.map((item, i) => (
                <li key={item.title} className="mb-8 last:mb-0">
                  <span className="absolute -left-3 top-1.5 w-5 h-5 bg-gradient-to-br from-green-400 to-yellow-200 rounded-full border-2 border-white shadow"></span>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900 dark:text-white">{item.title}</span>
                    <span className="text-xs text-gray-500">{item.year}</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm mb-1">{item.desc}</div>
                  <div className="flex gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
          {/* Resume Section Inserted Here */}
          <ResumeSection />
          {/* Principles */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Design Principles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PRINCIPLES.map((p, i) => (
                <div key={p.title} className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-green-400">{i + 1}</span>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{p.title}</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Personal Story */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">My Story</h3>
            <p className="text-gray-700 dark:text-gray-200 text-base">
              I started my journey in web development out of curiosity and a desire to create. Over the years, I’ve honed my skills in React, Node.js, and design systems, always striving for clarity and delight in every project. When I’m not coding, you’ll find me exploring new design trends, hiking, or experimenting with creative tools.
            </p>
          </div>
        </div>
      </motion.div>
      {/* Gallery */}
      <motion.div
        className="mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Gallery</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {GALLERY.map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-32 sm:h-40 object-cover rounded-3xl shadow-md"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Footer({ dark, setDark }) {
  return (
    <footer className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400 text-sm">
      <div className="flex-1 text-left">
        &copy; {new Date().getFullYear()} Mihir Rathod
      </div>
      <div className="flex-1 flex justify-center">
        <button
          aria-label="Toggle dark mode"
          className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-yellow-50 border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-200"
          onClick={() => setDark((d) => !d)}
        >
          <motion.div
            animate={{ rotate: dark ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="text-xl"
          >
            {dark ? "🌙" : "☀️"}
          </motion.div>
        </button>
      </div>
      <div className="flex-1 flex justify-end gap-3">
        {SOCIALS.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 text-gray-700 dark:text-gray-200 hover:bg-gradient-to-br hover:from-green-100 hover:to-yellow-50 hover:text-green-700 transition-all duration-200"
            aria-label={s.name}
            download={s.name === "CV" ? true : undefined}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}

// --- Main Page ---

function Master() {
  const [dark, setDark] = useState(false);

  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      document.body.style.background = "#18181b";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.background = "#f7f6f2";
    }
  }, [dark]);

  return (
    <div
      className={`min-h-screen w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 ${FONT}`}
      style={{
        fontFamily: "Inter, Satoshi, sans-serif",
        letterSpacing: "0.01em",
      }}
    >
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <Work />
        <About />
        {/* ResumeSection is now included inside About after education, so not needed here */}
      </main>
      <Footer dark={dark} setDark={setDark} />
    </div>
  );
}

export default Master;