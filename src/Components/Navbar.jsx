import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Navigation links for the navbar (Projects removed)
const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

// Social links (unchanged)
const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/iammihir95747/iammihir95747",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mihir-rathod-563273300/",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path
          d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "CV",
    href: "/mihir-cv.pdf",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path
          d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8.828a2 2 0 00-.586-1.414l-4.828-4.828A2 2 0 0014.172 2H6zm7 1.414L19.586 10H15a2 2 0 01-2-2V3.414z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

// Helper for smooth scroll to section in master.jsx
function scrollToSection(e, href, setOpen) {
  if (href.startsWith("#")) {
    e.preventDefault();
    const id = href.replace("#", "");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        if (setOpen) setOpen(false);
      } else {
        window.location.hash = href;
        if (setOpen) setOpen(false);
      }
    }, 0);
  }
}

function Navbar() {
  const [open, setOpen] = useState(false);

  // All links are hash links for section navigation in master.jsx
  const isHashLink = (href) => href.startsWith("#");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between h-[64px]">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 font-bold text-xl text-gray-900 dark:text-white"
          style={{ fontFamily: "Inter, Satoshi, sans-serif" }}
          onClick={e => scrollToSection(e, "#home")}
        >
          <span className="text-white">
            MihirRathod
          </span>
         
        </a>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-yellow-200 transition-colors duration-150"
                onClick={e => scrollToSection(e, link.href)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Socials (Desktop) */}
        <div className="hidden md:flex gap-3">
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
        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="#222"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            className="fixed inset-0 z-[100] flex flex-col md:hidden"
            style={{ backgroundColor: "white", minHeight: "100vh", minWidth: "100vw" }}
          >
            <div className="relative z-10 flex flex-col items-center w-full h-full bg-white text-black min-h-screen min-w-screen">
              <button
                className="absolute top-4 right-4 text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-150 z-20 text-black"
                onClick={() => setOpen(false)}
                aria-label="Close navigation"
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path d="M6 6l12 12M6 18L18 6" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <ul className="flex flex-col gap-7 text-2xl font-semibold mt-32 z-10">
                {NAV_LINKS.map((link) => (
                  <li key={link.name} className="text-center">
                    <a
                      href={link.href}
                      className="text-black font-semibold block py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-150"
                      onClick={e => scrollToSection(e, link.href, setOpen)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 mt-16 z-10">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-white text-black hover:bg-gray-100 transition-all duration-200"
                    aria-label={s.name}
                    download={s.name === "CV" ? true : undefined}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
