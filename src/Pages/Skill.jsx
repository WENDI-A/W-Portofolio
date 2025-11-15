// ...existing code...
import React from 'react';
import { FaReact, FaServer, FaTools, FaUsers, FaCertificate } from 'react-icons/fa';
import Footer from './Footer';

const skillsData = [
  {
    title: 'Frontend Development',
    icon: <FaReact className="text-indigo-400 text-7xl mb-4" />,
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    title: 'Backend Development',
    icon: <FaServer className="text-orange-400 text-7xl mb-4" />,
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: <FaTools className="text-red-400 text-7xl mb-4" />,
    skills: [
      { name: 'GitHub', level: 95 },
      { name: 'Figma', level: 90 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: <FaUsers className="text-yellow-400 text-7xl mb-4" />,
    skills: [
      { name: 'Problem Solving', level: 95 },
      { name: 'Team Leadership', level: 90 },
      { name: 'Communication', level: 90 },
      { name: 'Project Management', level: 85 },
    ],
  },
];

const certifications = [
  { title: 'JavaScript Algorithms and Data Structures', org: 'freeCodeCamp', year: 2024, color: 'text-red-400' },
  { title: 'Programming Fundamentals', org: 'Udacity', year: 2024, color: 'text-blue-400' },
];

const Skill = () => {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans px-6 py-12 min-h-screen">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4">Skills & Expertise</h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          A comprehensive overview of my technical skills and professional competencies — interactive, animated and easy to scan.
        </p>
      </header>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="group bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 flex flex-col transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border-indigo-500 cursor-pointer"
            aria-label={category.title}
          >
            <div className="flex flex-col items-center text-center mb-6">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                {category.icon}
              </div>
              <h3 className="font-extrabold text-2xl mt-2">{category.title}</h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="group/item bg-gray-700/30 p-3 rounded-lg transition-all duration-300 hover:bg-gray-700/60"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold">{skill.name}</span>
                    <span className="text-sm font-bold">{skill.level}%</span>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="rounded-full h-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications & Training */}
      <section className="max-w-6xl mx-auto mt-12 mb-16">
        <h2 className="text-3xl font-extrabold mb-6 text-center">Certifications & Training</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 p-10 rounded-2xl shadow-lg border border-gray-700 text-center flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border-indigo-500"
            >
              <FaCertificate className={`text-6xl mb-4 ${cert.color}`} />
              <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
              <p className="text-gray-400 text-lg">{cert.org}</p>
              <p className="text-gray-500 mt-2 font-semibold">{cert.year}</p>
            </div>
          ))}
        </div>
      </section>

       
    </div>
  );
};

export default Skill;
// ...existing code...