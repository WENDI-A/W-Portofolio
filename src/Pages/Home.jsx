import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './About';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
     {/* Hero Section */}
<section className="min-h-[80vh] flex flex-col items-start justify-center text-left py-16 px-4" id="home">
  <div className="bg-gradient-to-r from-purple-400 to-blue-500 text-white px-4 py-2 rounded-full mb-4">
    Available for new projects
  </div>
  <h1 className="text-6xl font-bold mb-4">wendimagegn abera</h1>
  <h2 className="text-3xl mb-6">Software Engineer</h2>
  <p className="max-w-2xl mb-8 text-lg">
    Dedicated to creating scalable web and mobile applications, as well as resolving complex issues through the use of clean and efficient code. Specialization includes React, Node.js, Flutter, and Solidity.
  </p>
  <div className="flex space-x-6">
    <a
      href="#work"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 text-lg rounded-lg transition transform hover:scale-105 duration-300"
    >
      View My Work
    </a>
    <a
      href="#resume"
      className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-3 px-8 text-lg rounded-lg transition transform hover:scale-105 duration-300"
    >
      Download Resume
    </a>
  </div>
</section>


      {/* What I Do Section */}
<section className="bg-gray-100 dark:bg-gray-900 py-16 px-6" id="services">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-12">What I Do</h2>
    <div className="grid md:grid-cols-3 gap-8">

      {/* Frontend Development */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700
                      hover:shadow-2xl hover:scale-105 hover:bg-purple-50 dark:hover:bg-gray-700 
                      transition duration-300 transform cursor-pointer">
        <div className="text-purple-500 text-5xl mb-4">
          <i className="fas fa-laptop-code"></i>
        </div>
        <h3 className="text-2xl font-semibold mb-4">Frontend Development</h3>
        <p>
          Building interactive and responsive web applications using <strong>React</strong>, <strong>Tailwind CSS</strong>, and modern UI frameworks to ensure smooth user experiences.
        </p>
      </div>

      {/* Backend Development */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700
                      hover:shadow-2xl hover:scale-105 hover:bg-purple-50 dark:hover:bg-gray-700 
                      transition duration-300 transform cursor-pointer">
        <div className="text-green-500 text-5xl mb-4">
          <i className="fas fa-server"></i>
        </div>
        <h3 className="text-2xl font-semibold mb-4">Backend Development</h3>
        <p>
          Creating robust server-side solutions with <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MySQL</strong> for secure, scalable, and efficient web applications.
        </p>
      </div>

      {/* UI/UX Design */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700
                      hover:shadow-2xl hover:scale-105 hover:bg-purple-50 dark:hover:bg-gray-700 
                      transition duration-300 transform cursor-pointer">
        <div className="text-blue-500 text-5xl mb-4">
          <i className="fas fa-pencil-ruler"></i>
        </div>
        <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
        <p>
          Designing intuitive and visually appealing user interfaces using <strong>Figma</strong> focusing on usability, accessibility, and user-centered design principles.
        </p>
      </div>

    </div>
  </div>
</section>





      {/* Call-to-Action Section */}
      <section className="bg-gray-100 dark:bg-gray-800 text-white py-16 px-6 text-center">
  <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
  <p className="max-w-2xl mx-auto mb-8">
    Let's work together to bring your ideas to life. I'm here to help you create exceptional digital experiences that drive results.
  </p>
  <div className="flex justify-center space-x-6">
    {/* Get In Touch Button */}
    <a
      href="#contact"
      className="bg-white text-purple-700 font-bold py-4 px-8 rounded-xl text-lg flex items-center justify-center space-x-2 
                 hover:bg-gray-200 transition transform hover:scale-105 duration-300"
    >
      <i className="fas fa-envelope"></i>
      <span>Get In Touch</span>
    </a>

    {/* View My Skills Button */}
    <a
      href="#skills"
      className="bg-transparent border border-white text-blue font-bold py-4 px-8 rounded-xl text-lg flex items-center justify-center 
                 hover:bg-white hover:text-blue-700 transition transform hover:scale-105 duration-300"
    >
      View My Skills
    </a>
  </div>
</section>


      {/* Footer */}
     <Footer/>
    </div>
  );
};

export default Home;
