import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/mihir-rathod-563273300/",
    label: "LinkedIn",
    isEmail: false,
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/iammihir95747",
    label: "GitHub",
    isEmail: false,
  },
  {
    icon: <FaEnvelope />,
    url: "mailto:mihirrathod95747@gmail.com",
    label: "Email",
    isEmail: true,
  },
];

// Use #section links for same-page navigation
const navLinks = [
  { href: "#resume", label: "Resume" },
  { href: "#work", label: "Projects" },
];

const Footer = () => (
  <footer className="w-full bg-black text-white py-8 text-xs border-t border-gray-800 tracking-widest uppercase">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6 px-4">
      {/* Social Links */}
      <div className="flex gap-4 mb-2 md:mb-0 order-1">
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target={s.isEmail ? undefined : "_blank"}
            rel={s.isEmail ? undefined : "noopener noreferrer"}
            aria-label={s.label}
            className="text-lg text-white hover:text-blue-400 transition-colors"
          >
            {s.icon}
          </a>
        ))}
      </div>
      {/* Navigation Links */}
      <div className="flex gap-6 mb-2 md:mb-0 order-3 md:order-2">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:underline text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
      {/* Contact Info */}
      <div className="flex flex-col items-center md:items-end gap-1 order-2 md:order-3">
        <p className="break-all">Email: mihirrathod95747@gmail.com</p>
        <p>Contact: +91 9574713004</p>
      </div>
    </div>
  </footer>
);

export default Footer;
