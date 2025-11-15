import React from "react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white px-6 md:px-20 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-3xl transform transition hover:scale-105 duration-300 cursor-pointer">&lt;/&gt;</div>
        <h1 className="text-4xl font-bold mt-6">My Projects</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          A showcase of my work featuring modern web applications, mobile apps, and other software solutions.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          { label: "Projects Completed", value: "5+", icon: "⭐" },
          { label: "Success Rate", value: "65%", icon: "📈" },
          { label: "Experience", value: "2+ Years", icon: "🎖️" }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#161b22] rounded-xl p-8 text-center border border-gray-700
                       hover:shadow-2xl hover:scale-105 transition duration-300 transform cursor-pointer hover:border-indigo-500"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h2 className="text-3xl font-bold">{item.value}</h2>
            <p className="text-gray-400 mt-2 font-bold">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <input
          type="text"
          placeholder="Search projects..."
          className="flex-1 bg-[#161b22] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none"
        />
        <div className="flex gap-3 overflow-x-auto">
          {["All Projects", "Web Apps", "Mobile Apps", "Blockchain"].map((tag, i) => (
            <button
              key={i}
              className="px-4 py-2 rounded-lg bg-[#21262d] hover:bg-[#30363d] transition text-sm whitespace-nowrap font-bold"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        ⭐ Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mb-20">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-[#161b22] border border-gray-700 rounded-xl p-7
                       hover:shadow-2xl hover:scale-105 transform transition duration-300 cursor-pointer hover:bg-[#0f1720]"
          >
            <div className="h-40 bg-[#0d1117] rounded-lg mb-5"></div>
            <h3 className="text-lg font-bold">Project Title {i}</h3>
            <p className="text-gray-400 text-sm mt-2 font-medium">
              Short description of the project goes here. Explain what the system does and what technologies were
              used.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["React", "Node.js", "MySQL"].map((tech, t) => (
                <span key={t} className="bg-[#21262d] px-3 py-1 rounded-full text-xs font-bold">{tech}</span>
              ))}
            </div>
            <button className="mt-4 text-sm bg-[#21262d] px-4 py-2 rounded-lg hover:bg-[#30363d] hover:scale-105 hover:shadow-md transition font-bold">
              ⚡ Code
            </button>
          </div>
        ))}
      </div>

      {/* Other Projects */}
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">📁 Other Projects</h2>

      <div className="grid md:grid-cols-2 gap-10 mb-20">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="bg-[#161b22] border border-gray-700 rounded-xl p-7
                       hover:shadow-2xl hover:scale-105 transform transition duration-300 cursor-pointer hover:bg-[#0f1720]"
          >
            <div className="h-32 bg-[#0d1117] rounded-lg mb-5"></div>
            <h3 className="text-lg font-bold">Other Project {i}</h3>
            <p className="text-gray-400 text-sm mt-2 font-medium">
              A brief summary about the project. Add any relevant detail explaining its purpose.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Java", "Firebase", "API"].map((tech, t) => (
                <span key={t} className="bg-[#21262d] px-3 py-1 rounded-full text-xs font-bold">{tech}</span>
              ))}
            </div>
            <button className="mt-4 text-sm bg-[#21262d] px-4 py-2 rounded-lg hover:bg-[#30363d] hover:scale-105 hover:shadow-md transition font-bold">
              ⚡ Code
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-700 pt-10 text-center text-gray-500 text-sm">
        © 2025 Your Name. All rights reserved.
      </div>
    </div>
  );
}