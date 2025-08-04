import React from "react";

// Classic spinning loader SVG
const Spinner = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 50 50"
    style={{
      display: "block",
      margin: "0 auto",
    }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="25"
      cy="25"
      r="20"
      fill="none"
      stroke="#1976d2"
      strokeWidth="5"
      strokeLinecap="round"
      strokeDasharray="90 60"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="1s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

function Start() {
  return (
    <div
      style={{
        background: "#fff",
        color: "#222",
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
      <div style={{ marginBottom: "2.5rem" }}>
        <Spinner />
      </div>
      <span
        style={{
          fontSize: "1.3rem",
          fontWeight: 500,
          opacity: 0.85,
          letterSpacing: "0.08em",
        }}
      >
        Loading...
      </span>
    </div>
  );
}

export default Start;
