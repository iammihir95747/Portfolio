import React from "react";
import bgVideo from "../assets/bg.mp4"; // Make sure the path is correct
import resume from '../assets/resume.pdf'


const Resume = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12"
      id="resume"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
        style={{ pointerEvents: "none" }}
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken video for readability */}
    

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col items-center">
        {/* Hero Section */}
        <div className="w-full max-w-3xl text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Resume
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Explore my experience, education, and skills. Download my resume or preview it below!
          </p>
          <a
            href={resume}
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-200"
          >
            Download Resume
          </a>
        </div>

        {/* Resume Preview Section */}
        <div className="w-full max-w-4xl bg-white/90 rounded-2xl shadow-2xl p-4 md:p-8 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Resume Preview</h2>
          <div className="w-full h-[70vh] rounded-lg overflow-hidden border-2 border-gray-200 shadow-inner bg-gray-100">
            <iframe
                src={resume}
              title="Resume Preview"
              className="w-full h-full"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
