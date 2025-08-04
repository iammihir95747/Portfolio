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
    url: "mihirrathod95747@gmail.com",
    label: "Email",
    isEmail: true,
  },
];

function openGmailCompose(email) {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
  window.open(gmailUrl, "_blank", "noopener,noreferrer");
}

const navLinks = [
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/todo", label: "Todo App" },
];

const Footer = () => (
  <footer className="w-full bg-black text-white py-4 text-center text-xs">
    <ul className="flex justify-center gap-4 mb-2 list-none p-0">
      {socialLinks.map((s) =>
        <li key={s.label}>
          {s.isEmail ? (
            <button
              onClick={() => openGmailCompose(s.url)}
              aria-label={s.label}
              className="bg-transparent border-none cursor-pointer text-lg text-white hover:text-cyan-400 p-0"
              style={{ padding: 0, background: "none", border: "none" }}
            >
              {s.icon}
            </button>
          ) : (
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-lg text-white hover:text-cyan-400"
            >
              {s.icon}
            </a>
          )}
        </li>
      )}
    </ul>
    <ul className="flex justify-center gap-4 mb-2 list-none p-0">
      {navLinks.map(link => (
        <li key={link.href}>
          <a
            href={link.href}
            className="hover:underline text-white"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
    
  </footer>
);

export default Footer;
