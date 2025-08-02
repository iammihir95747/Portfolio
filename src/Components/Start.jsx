import React, { useEffect, useState } from "react";

// Minimalistic, attractive logo SVG (e.g., stylized "MR" for Mihir Rathod)
const Logo = ({ animate }) => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    style={{
      display: "block",
      margin: "0 auto",
      filter: "drop-shadow(0 2px 16px rgba(0,255,255,0.10))",
    }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="40" cy="40" r="38" stroke="#fff" strokeWidth="3" fill="none" />
    <text
      x="50%"
      y="54%"
      textAnchor="middle"
      fill="#fff"
      fontFamily="'Space Grotesk', 'Poppins', sans-serif"
      fontWeight="bold"
      fontSize="2.5rem"
      letterSpacing="0.08em"
      dominantBaseline="middle"
      style={{
        textShadow: "0 2px 16px rgba(0,255,255,0.10), 0 1px 0 #fff",
        userSelect: "none",
        opacity: animate ? 1 : 0,
        transform: animate ? "scale(1)" : "scale(0.8)",
        transition: "opacity 1.2s cubic-bezier(.68,-0.55,.27,1.55), transform 1.2s cubic-bezier(.68,-0.55,.27,1.55)",
      }}
    >
      MR
    </text>
  </svg>
);

const loadingTexts = [
  "Minimalistic.",
  "Inspired.",
  "Creative.",
  "Loading...",
];

function Start() {
  const [step, setStep] = useState(0);
  const [logoTextVisible, setLogoTextVisible] = useState(false);

  useEffect(() => {
    // Animate logo text in after a short delay for smoothness
    const logoTimer = setTimeout(() => setLogoTextVisible(true), 300);
    return () => clearTimeout(logoTimer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % loadingTexts.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Poppins', 'Space Grotesk', sans-serif",
        letterSpacing: "0.08em",
      }}
    >
      <div
        style={{
          marginBottom: "2.5rem",
          animation: "logoPop 1.2s cubic-bezier(.68,-0.55,.27,1.55) both",
        }}
      >
        <Logo animate={logoTextVisible} />
      </div>
      <span
        style={{
          fontSize: "2.1rem",
          fontWeight: 700,
          opacity: 0.95,
          animation: "fadeIn 1.2s ease-in-out infinite alternate",
          textShadow: "0 2px 16px rgba(0,255,255,0.10), 0 1px 0 #fff",
        }}
      >
        {loadingTexts[step]}
      </span>
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0.7; }
            100% { opacity: 1; }
          }
          @keyframes logoPop {
            0% { transform: scale(0.8) translateY(20px); opacity: 0; }
            60% { transform: scale(1.05) translateY(-4px); opacity: 1; }
            100% { transform: scale(1) translateY(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

export default Start;
