import React from 'react';
import { FaReact, FaServer, FaTools, FaUsers, FaCertificate } from 'react-icons/fa';
import Footer from './Footer';

const skillsData = [
  {
    title: 'Frontend Development',
    icon: <FaReact className="text-blue-400 text-5xl mb-4" />,
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
    icon: <FaServer className="text-orange-400 text-5xl mb-4" />,
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: <FaTools className="text-red-400 text-5xl mb-4" />,
    skills: [
      { name: 'GitHub', level: 95 },
      { name: 'Figma', level: 90 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: <FaUsers className="text-yellow-400 text-5xl mb-4" />,
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
    <div className="bg-gray-900 text-gray-100 font-sans px-4 py-10 min-h-screen">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Skills & Expertise</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and professional competencies, developed through years of hands-on experience and continuous learning.
        </p>
      </header>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="bg-gray-800 p-5 rounded-xl shadow-lg flex flex-col"
          >
            <div className="flex flex-col items-center text-center mb-4">
              {category.icon}
              <h3 className="font-bold text-xl">{category.title}</h3>
            </div>
            <div className="space-y-3">
              {category.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications & Training */}
      <section className="max-w-5xl mx-auto mt-20 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Certifications & Training</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 text-center flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <FaCertificate className={`text-5xl mb-4 ${cert.color}`} />
              <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
              <p className="text-gray-400 text-lg">{cert.org}</p>
              <p className="text-gray-500 mt-2">{cert.year}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Skill;
