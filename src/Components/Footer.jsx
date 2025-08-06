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

const navLinks = [
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/todo", label: "Todo App" },
];

const Footer = () => (
  <footer className="w-full bg-black text-white py-10 text-center text-xs border-t border-gray-800  tracking-widest uppercase">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
      <div className="flex gap-4 mb-2 md:mb-0">
        {socialLinks.map((s) =>
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
        )}
      </div>
      <div className="flex gap-6 mb-2 md:mb-0">
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="hover:underline text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex gap-6 mb-2 md:mb-0">
        <p>Email : mihirrathod95747@gmail.com</p>
      <span>
        <p>Contact : +91 9574713004</p>
      </span>
      </div>
    </div>
  </footer>
);

export default Footer;
