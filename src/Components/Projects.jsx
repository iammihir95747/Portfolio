import React from "react";

const projects = [
  {
    title: "Todo App",
    description:
      "A simple and intuitive Todo application to manage your daily tasks efficiently. Add, edit, and delete your todos with ease.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/yourusername/todo-app",
    demo: "https://your-todo-app-demo-link.com",
  },
  {
    title: "Notepad App",
    description:
      "A minimal Notepad app for quick notes. Supports saving, editing, and deleting notes with a clean interface.",
    image:
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/yourusername/notepad-app",
    demo: null, // No demo available
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with React and Tailwind CSS. Features smooth animations and dark mode.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    github: "https://mihirrathodprofile.vercel.app/",
    demo: null, // No demo available
  },
  {
    title: "Coming Soon",
    description: "Currently working on it.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    github: null,
    demo: null,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group bg-white/90 rounded-2xl shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-3xl relative"
          >
            <div className="overflow-hidden h-56">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col h-56 justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>
              <div className="flex gap-4">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg font-medium shadow hover:bg-blue-600 transition-colors duration-200"
                  >
                    GitHub
                  </a>
                ) : (
                  <button
                    disabled
                    className="px-4 py-2 bg-gray-400 text-white rounded-lg font-medium shadow cursor-not-allowed"
                  >
                    GitHub (Coming Soon)
                  </button>
                )}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-gray-800 transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="px-4 py-2 bg-blue-300 text-white rounded-lg font-medium shadow cursor-not-allowed"
                  >
                    Live Demo (Coming Soon)
                  </button>
                )}
              </div>
            </div>
            {/* Card hover effect overlay */}
            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
