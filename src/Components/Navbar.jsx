import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Smooth scroll to section by id
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full flex justify-center mt-6">
      <div
        className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-3xl px-10 py-4 flex gap-10 items-center"
        style={{
          maxWidth: "fit-content",
          borderRadius: "2.5rem",
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.25) 0%, rgba(200,220,255,0.18) 100%)",
          boxShadow:
            "0 8px 32px 0 rgba(31, 38, 135, 0.25), 0 1.5px 8px 0 rgba(0,0,0,0.08)",
          border: "1.5px solid rgba(255,255,255,0.25)",
          backdropFilter: "blur(18px) saturate(160%)",
          WebkitBackdropFilter: "blur(18px) saturate(160%)",
        }}
      >
        <Link
          to="/"
          className="text-white font-semibold transition-colors duration-200"
        >
          Home
        </Link>
        <a
          href="#projects"
          className="text-white font-semibold transition-colors duration-200"
          onClick={e => handleScroll(e, "projects")}
        >
          Projects
        </a>
        <a
          href="#resume"
          className="text-white font-semibold transition-colors duration-200"
          onClick={e => handleScroll(e, "resume")}
        >
          Resume
        </a>
        <a
          href="#contact"
          className="text-white font-semibold transition-colors duration-200"
          onClick={e => handleScroll(e, "contact")}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
