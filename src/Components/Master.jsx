import React from 'react';
import Img from "../assets/mypic.png"
import { img } from 'framer-motion/client';

const ACCENT1 = "text-blue-600";
const ACCENT2 = "text-gray-900";
const ACCENT_BG = "bg-blue-50";
const ACCENT_BTN = "bg-blue-600 hover:bg-blue-700 text-white";
const ACCENT_BORDER = "border-blue-600";
const ACCENT_LINE = "bg-blue-600";

const profileImg = Img;

const skillIcons = {
  MongoDB: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#4A8A08" d="M12 2l1.5 6.5L12 22l-1.5-13.5L12 2z"/><path fill="#222" d="M12 2v20"/></svg>
  ),
  "Express.js": (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="3" y="10" width="18" height="4" rx="2" fill="#222"/></svg>
  ),
  "React.js": (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#1976d2" strokeWidth="2"/><ellipse cx="12" cy="12" rx="4" ry="10" stroke="#1976d2" strokeWidth="2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="4" ry="10" stroke="#1976d2" strokeWidth="2" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="2" fill="#1976d2"/></svg>
  ),
  "Node.js": (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><polygon points="12,2 22,7 22,17 12,22 2,17 2,7" fill="#222"/><text x="12" y="16" textAnchor="middle" fontSize="7" fill="#4A8A08" fontWeight="bold">JS</text></svg>
  ),
  Git: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="7" cy="17" r="2" fill="#222"/><circle cx="17" cy="7" r="2" fill="#222"/><path stroke="#222" strokeWidth="2" d="M7 17L17 7"/></svg>
  ),
  "Tailwind CSS": (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M3 15c2-4 6-4 8 0s6 4 8 0" stroke="#1976d2" strokeWidth="2" fill="none"/></svg>
  ),
  "REST API": (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="8" rx="2" stroke="#222" strokeWidth="2"/><circle cx="8" cy="12" r="1" fill="#1976d2"/><circle cx="16" cy="12" r="1" fill="#1976d2"/></svg>
  ),
  JWT: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2" stroke="#1976d2" strokeWidth="2"/><path d="M6 12h12" stroke="#1976d2" strokeWidth="2"/><path d="M12 6v12" stroke="#1976d2" strokeWidth="2"/></svg>
  ),
};

const skills = [
  "MongoDB", "Express.js", "React.js", "Node.js", "Git", "Tailwind CSS", "REST API", "JWT"
];

const projectList = [
  {
    name: "Portfolio Website",
    stack: ["React", "Tailwind CSS"],
    desc: "A personal portfolio to showcase my work and skills. Responsive, fast, and modern.",
    github: "https://mihirrathodprofile.vercel.app/",
    demo: "#",
    img: "https://wiztoonz.com/wp-content/uploads/2022/04/Blog-Post-Portfolio-1170x658.jpg",
    featured: true,
  },
  {
    name: "Task List",
    stack: ["React.js"],
    desc: "All React state, props, and functionality are implemented here.",
    github: "https://mihirrathodprofile.vercel.app/tasklist",
    demo: "/tasklist",
    img: "https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png",
    featured: false,
  },

];

function Master() {
  const milestones = [
    {
      year: "2026",
      title: "Master of Computer Applications (MCA)",
      desc: "Gujarat University Ongoing",
    },
    {
      year: "2024",
      title: "Bachelor of Computer Applications (BCA)",
      desc: "Gujarat University 7.33 CGPA ",
    },
    {
      year: "2021",
      title: "Higher Secondary Certificate (HSC)",
      desc: "GSEB 58.42%",
    },
    {
      year: "2019 ",
      title: "Secondary School Certificate (SSC)",
      desc: "GSEB 68.66%",
    },
  ];
  const socials = [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/mihir-rathod-563273300/",
      icon: (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2" stroke="#1976d2" strokeWidth="2"/><rect x="6" y="9" width="2" height="7" fill="#1976d2"/><rect x="11" y="12" width="2" height="4" fill="#1976d2"/><circle cx="7" cy="7" r="1" fill="#1976d2"/></svg>
      ),
    },
    {
      label: "GitHub",
      url: "https://github.com/iammihir95747",
      icon: (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#222" strokeWidth="2"/><path d="M9 18c-4-1.5-4-6 0-7" stroke="#222" strokeWidth="1.5"/><path d="M15 18c4-1.5 4-6 0-7" stroke="#222" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="#222" strokeWidth="1.5"/></svg>
      ),
    },
    {
      label: "Email",
      url: "mailto:mihirrathod95747@gmail.com",
      icon: (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2" stroke="#1976d2" strokeWidth="2"/><path d="M3 6l9 7 9-7" stroke="#1976d2" strokeWidth="2"/></svg>
      ),
    },
  ];
  return (
    <div
      className="font-sans bg-white text-gray-900 min-h-screen"
      style={{
        fontFamily: "'Poppins', 'Inter', 'Manrope', sans-serif",
        letterSpacing: "0.04em",
      }}
    >
      <nav className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-white/70 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <span className="font-extralight text-xl tracking-widest uppercase text-gray-900 select-none">MIHIR</span>
          <ul className="flex gap-7 text-sm font-light uppercase tracking-wider">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative transition-all duration-200 hover:underline underline-offset-8 decoration-2 decoration-blue-600"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main>
        <section
          id="home"
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-0 pt-32 pb-20 px-6 relative"
          style={{
            fontFamily: "'Poppins', 'Inter', 'Manrope', sans-serif",
          }}
        >
          <div className="flex-1 flex flex-col items-start justify-center animate-fadein">
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest mb-3 text-gray-900">
              Hi, I’m <span className="text-blue-600">Mihir Rathod</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold uppercase tracking-wide mb-4 text-gray-700">
              MERN Stack Web Developer
            </h2>
            <p className="text-gray-600 text-base mb-7 max-w-lg">
              Building fast, scalable, full-stack web applications using MongoDB, Express, React &amp; Node.js.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-2 border-2 border-blue-600 text-blue-600 font-semibold uppercase tracking-wide transition-all duration-200 bg-white hover:bg-blue-600 hover:text-white rounded-none shadow-none"
                style={{ borderRadius: 0 }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-2 border-2 border-gray-900 text-gray-900 font-semibold uppercase tracking-wide transition-all duration-200 bg-white hover:bg-gray-900 hover:text-white rounded-none shadow-none"
                style={{ borderRadius: 0 }}
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="hidden md:flex h-72 w-0.5 mx-10 bg-blue-600 rounded-none" />
          <div className="flex-1 flex justify-center items-center animate-slidein">
            <img
              src={profileImg}
              alt="Mihir Rathod"
              className="w-80 h-80 object-cover border-2 border-gray-300 shadow-lg scale-110 transition-transform duration-300"
              style={{ borderRadius: 0, transition: "box-shadow 0.2s, transform 0.3s" }}
            />
          </div>
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(0,0,0,0.04) 1px,transparent 1px),linear-gradient(rgba(0,0,0,0.04) 1px,transparent 1px)",
              backgroundSize: "32px 32px",
              zIndex: 0,
            }}
          />
        </section>
        <section
          id="about"
          className="max-w-6xl mx-auto px-6 py-16 border-b border-gray-100 flex flex-col md:flex-row gap-10"
        >
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-bold uppercase tracking-widest text-blue-600 mb-4">About Me</h3>
            <div className="text-gray-800 text-base mb-6">
              <p>
                I’m a passionate MERN Stack developer with 3+ years of experience building fast, scalable web applications. I thrive in collaborative teams and love turning ideas into reality with clean, efficient code.
              </p>
            </div>
            <div className="relative pl-6">
              {milestones.map((m, i) => (
                <div key={m.title} className="flex items-start mb-8 last:mb-0">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200" style={{ zIndex: 0 }} />
                  <div className="relative z-10">
                    <div
                      className="w-3 h-3 bg-blue-600 border-2 border-white rounded-none"
                      style={{
                        borderRadius: 0,
                        marginLeft: "-1.1rem",
                        marginTop: "0.25rem",
                      }}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{m.title}</div>
                    <div className="text-xs text-gray-500 mb-1">{m.year}</div>
                    <div className="text-gray-700 text-sm">{m.desc}</div>
                    {i < milestones.length - 1 && (
                      <div className="border-b border-gray-200 my-3" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src={profileImg}
              alt="About Mihir"
              className="w-56 h-64 object-cover border-2 border-gray-200 shadow-md"
              style={{ borderRadius: 0 }}
            />
          </div>
        </section>
        <section
          id="resume"
          className="max-w-6xl mx-auto px-6 py-16 border-b border-gray-100"
        >
          <h3 className="text-xl font-bold uppercase tracking-widest text-blue-600 mb-8">Resume</h3>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-gray-800 text-base mb-6">
                Download my latest resume to learn more about my experience, education, and skills in detail.
              </p>
              <a
                href="/resume"
                className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold uppercase tracking-wide transition-all duration-200 bg-white hover:bg-blue-600 hover:text-white rounded-none"
                style={{ borderRadius: 0 }}
              >
                View Resume
              </a>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src="https://thumbs.dreamstime.com/b/businessman-profile-icon-male-portrait-flat-design-vector-illustration-47075259.jpg"
                alt="Resume Icon"
                className="w-40 h-40 object-contain"
                style={{ borderRadius: 0 }}
              />
            </div>
          </div>
        </section>
        <section
          id="skills"
          className="max-w-6xl w-full mx-auto px-6 py-16 border-b border-gray-100"
        >
          <h3 className="text-xl font-bold uppercase tracking-widest text-blue-600 mb-8">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7">
            {skills.map((skill) => (
              <div
                key={skill}
                className="group flex flex-col items-center justify-center px-4 py-6 border border-gray-200 bg-white transition-all duration-200 cursor-pointer hover:border-blue-600"
                style={{ borderRadius: 0 }}
              >
                <div className="mb-3">{skillIcons[skill]}</div>
                <span className="text-gray-900 font-medium uppercase tracking-wide text-sm group-hover:underline group-hover:decoration-blue-600 group-hover:underline-offset-4 transition-all duration-150">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>
        <section
          id="projects"
          className="max-w-6xl mx-auto px-6 py-16 border-b border-gray-100"
        >
          <h3 className="text-xl font-bold uppercase tracking-widest text-blue-600 mb-8">Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {projectList.map((proj) => (
              <div
                key={proj.name}
                className={`relative flex flex-col bg-white border border-gray-200 transition-all duration-200 hover:scale-[1.025] hover:shadow-xl group`}
                style={{ borderRadius: 0 }}
              >
                {proj.featured && (
                  <div className="absolute left-0 top-0 h-8 w-1 bg-blue-600" />
                )}
                <img
                  src={proj.img}
                  alt={proj.name}
                  className="w-full h-40 object-cover border-b border-gray-200"
                  style={{ borderRadius: 0 }}
                />
                <div className="flex-1 flex flex-col p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-gray-900 text-lg">{proj.name}</h4>
                    {proj.featured && (
                      <span className="ml-2 px-2 py-0.5 text-xs uppercase font-bold text-blue-600 border border-blue-600 rounded-none">Featured</span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {proj.stack.map((s) => (
                      <span key={s} className="text-xs text-gray-500 uppercase tracking-wide">{s}</span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">{proj.desc}</p>
                  <div className="flex gap-3 mt-auto">
                    {proj.demo !== "#" && (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 border-2 border-blue-600 text-blue-600 font-semibold uppercase tracking-wide transition-all duration-200 bg-white hover:bg-blue-600 hover:text-white rounded-none"
                        style={{ borderRadius: 0 }}
                      >
                        Live Demo
                      </a>
                    )}
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 border-2 border-gray-900 text-gray-900 font-semibold uppercase tracking-wide transition-all duration-200 bg-white hover:bg-gray-900 hover:text-white rounded-none"
                      style={{ borderRadius: 0 }}
                    >
                    View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section
          id="contact"
          className="max-w-6xl mx-auto px-6 py-16"
        >
          <h3 className="text-xl font-bold uppercase bg-black p-4 tracking-widest text-white rounded mb-8 text-center">Contact</h3>
          <div className="flex flex-col md:flex-row gap-12 justify-center items-start">
            <form
              className="flex-1 max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 border border-gray-200 shadow-sm"
              style={{ borderRadius: 0 }}
            >
              <div className="col-span-1 md:col-span-2">
                <label htmlFor="name" className="block text-gray-800 mb-1 font-medium uppercase tracking-wide text-xs">Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-600 transition rounded-none"
                  required
                  style={{ borderRadius: 0 }}
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="email" className="block text-gray-800 mb-1 font-medium uppercase tracking-wide text-xs">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-600 transition rounded-none"
                  required
                  style={{ borderRadius: 0 }}
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="message" className="block text-gray-800 mb-1 font-medium uppercase tracking-wide text-xs">Message</label>
                <textarea
                  id="message"
                  rows={1}
                  className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-600 transition rounded-none"
                  required
                  style={{ borderRadius: 0 }}
                />
              </div>
              <div className="col-span-1 md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-2 border-2 border-blue-600 text-blue-600 font-semibold uppercase tracking-wide transition-all duration-200 bg-white hover:bg-blue-600 hover:text-white rounded-none"
                  style={{ borderRadius: 0 }}
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="flex-1 flex flex-col items-center gap-6">
              <div className="flex gap-4 mt-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 rounded-none"
                    style={{ borderRadius: 0 }}
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
       

      </main>
      <footer className="max-w-6xl mx-auto px-6 py-8 text-center text-xs text-gray-400 border-t border-gray-100 mt-8 tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Mihir Rathod. All rights reserved.
      </footer>
    </div>
  );
}

export default Master;