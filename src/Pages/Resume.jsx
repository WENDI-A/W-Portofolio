import React from "react";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white px-6 md:px-20 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-3xl transform transition hover:scale-105 duration-300 cursor-pointer">
          📄
        </div>
        <h1 className="text-4xl font-bold mt-6">Resume</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Download my complete resume or explore my professional journey below.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-sm font-bold">
            Get PDF Resume
          </button>
          <button className="px-6 py-3 rounded-lg bg-[#21262d] hover:bg-[#30363d] transition text-sm font-bold">
            View Online
          </button>
        </div>
      </div>

      {/* Contact / Info (smaller circular icons) */}
      <div className="bg-[#161b22] border border-gray-700 rounded-xl p-8 flex flex-col md:flex-row justify-between gap-6 mb-16">
        {/* Location */}
        <a
          href="#"
          className="flex items-center gap-4 hover:shadow-lg hover:scale-105 transform transition duration-300 rounded-lg p-2 cursor-pointer"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center p-2 overflow-hidden">
            <svg
              className="w-10 h-10 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z"></path>
              <circle cx="12" cy="10" r="2.5"></circle>
            </svg>
          </div>
          <div>
            <h4 className="font-bold">Location</h4>
            <p className="text-gray-400 text-sm">Addis Ababa, Ethiopia</p>
          </div>
        </a>

        {/* Phone (gray) */}
        <a
          href="tel:+251900000000"
          className="flex items-center gap-4 hover:shadow-lg hover:scale-105 transform transition duration-300 rounded-lg p-2 cursor-pointer"
        >
          <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center p-2 overflow-hidden">
            <svg
              className="w-10 h-10 text-white filter grayscale opacity-75"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92V21a1 1 0 0 1-1.11 1 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 9.74 19.86 19.86 0 0 1 0 1.11 1 1 0 0 1 1 0h4.09a1 1 0 0 1 1 .76c.12.77.33 1.53.61 2.27a1 1 0 0 1-.23 1.02L5.7 6.7a16 16 0 0 0 8.6 8.6l1.65-1.65a1 1 0 0 1 1.02-.23c.74.28 1.5.49 2.27.61a1 1 0 0 1 .76 1V21z"></path>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-gray-400 text-sm">Phone</h4>
            <p className="text-white font-semibold">(+251) 900-000-000</p>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:example@gmail.com"
          className="flex items-center gap-4 hover:shadow-lg hover:scale-105 transform transition duration-300 rounded-lg p-2 cursor-pointer"
        >
          <div className="w-16 h-16 rounded-full bg-indigo-600/20 flex items-center justify-center p-2 overflow-hidden">
            <svg
              className="w-10 h-10 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 4h16v16H4z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div>
            <h4 className="font-bold">Email</h4>
            <p className="text-gray-400 text-sm">example@gmail.com</p>
          </div>
        </a>
      </div>

      {/* Section Tabs (centered) */}
      <div className="flex gap-4 overflow-x-auto mb-10 justify-center">
        {["Experience", "Education", "Skills", "Projects"].map((item, i) => (
          <button
            key={i}
            className={`px-5 py-2 rounded-lg text-sm whitespace-nowrap font-bold ${
              i === 0 ? "bg-indigo-600" : "bg-[#21262d] hover:bg-[#30363d]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Professional Experience */}
      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">💼 Professional Experience</h2>
      <p className="text-gray-400 mb-8">My career journey and achievements</p>

      <div className="space-y-8 mb-20">
        {/* Job 1 */}
        <div className="bg-[#161b22] border border-gray-700 rounded-xl p-8 relative hover:shadow-2xl hover:scale-105 transform transition duration-300 cursor-pointer hover:border-indigo-500">
          <h3 className="text-lg font-bold">Software Engineer</h3>
          <p className="text-gray-300 font-bold">Company Name</p>
          <p className="text-gray-500 text-sm mt-1">2025 – Present</p>

          {/* status badge with circular icon */}
          <div className="absolute top-6 right-6 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block" aria-hidden="true" />
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Current</span>
          </div>

          <ul className="mt-4 space-y-2 text-gray-400 text-sm list-disc list-inside">
            <li className="font-medium">Worked on large-scale software development projects.</li>
            <li className="font-medium">Improved system performance and reliability using modern tools.</li>
            <li className="font-medium">Collaborated with cross‑functional teams to deliver high‑impact solutions.</li>
          </ul>
        </div>

        {/* Job 2 */}
        <div className="bg-[#161b22] border border-gray-700 rounded-xl p-8 hover:shadow-2xl hover:scale-105 transform transition duration-300 cursor-pointer hover:border-indigo-500">
          <h3 className="text-lg font-bold">Full‑Stack Developer</h3>
          <p className="text-gray-300 font-bold">Tech Institute</p>
          <p className="text-gray-500 text-sm mt-1">2024 – 2025</p>

          <ul className="mt-4 space-y-2 text-gray-400 text-sm list-disc list-inside">
            <li className="font-medium">Developed modern web apps using React and Node.js.</li>
            <li className="font-medium">Built REST APIs integrated with MySQL databases.</li>
            <li className="font-medium">Participated in agile workflows and daily standups.</li>
          </ul>
        </div>
      </div>

      {/* Certifications */}
      <h2 className="text-2xl font-bold mb-6 text-center">Certifications & Achievements</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-[#161b22] border border-gray-700 rounded-xl p-8 text-center hover:shadow-2xl hover:scale-105 transform transition duration-300 cursor-pointer hover:border-indigo-500"
          >
            <div className="text-4xl mb-3">🏅</div>
            <h3 className="font-bold">Certification Title {i}</h3>
            <p className="text-gray-400 text-sm">Organization</p>
            <p className="text-indigo-400 text-sm mt-1 font-bold">2024</p>
          </div>
        ))}
      </div>

      {/* Footer (keep only if you don't render Footer globally in App.jsx) */}
      {/* If App.jsx already renders <Footer />, remove the block below. */}
      <div className="border-t border-gray-700 pt-10 text-center text-gray-500 text-sm">
        © 2025 Your Name. All rights reserved.
      </div>
    </div>
  );
}