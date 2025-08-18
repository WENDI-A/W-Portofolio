import React from "react";
import { FaUserFriends } from "react-icons/fa"; // icon
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { FaPlane, FaMoneyBillWave, FaCode, FaChalkboardTeacher } from "react-icons/fa";
import { FaLaptopCode, FaUsers, FaUserCheck,FaDumbbell  } from "react-icons/fa";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      {/* Content Wrapper */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <FaUserFriends className="text-purple-600 text-6xl" />
          </div>
          <h1 className="text-4xl font-bold text-gray-100 mb-2">About Me</h1>
          <p className="text-lg text-gray-400">
            Dedicated software engineer with a passion for creating innovative
            solutions that make a difference.
          </p>
        </header>

        {/* My Story + Background */}
       {/* My Story + Background */}
<section className="flex gap-12 mb-16 items-stretch">
  {/* My Story - 75% */}
  <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 w-3/4 h-full flex flex-col justify-center">
    <h2 className="text-2xl font-bold text-purple-400 mb-4">My Story</h2>
    <div className="space-y-4 text-gray-300">
      <p>
        With over 2 years of experience in software development, I have
        developed a deep understanding of full-stack web, mobile and
        blockchain technologies and best practices.
      </p>
      <p>
        Throughout my career, I've worked with big companies, contributing
        to projects that solve real problems.
      </p>
      <p>
        I believe in writing data, mathematics code and ordinary user
        experiences that are both functional and digital. My approach
        ensures technical expertise with strong communication skills and
        a collaborative mindset.
      </p>
    </div>
  </div>

  {/* Background - 25% */}
  <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 w-1/4 flex flex-col gap-6">
    <h2 className="text-2xl font-bold text-purple-400 mb-4">Background</h2>
    <div className="flex-1 flex flex-col gap-6 text-gray-300">
      {/* Education */}
      <div className="text-white rounded-lg p-6 w-full shadow-lg hover:bg-gray-700 transition-colors flex-1">
        <div className="flex items-center mb-2">
          <FaGraduationCap className="text-blue-500 mr-2" />
          <span className="text-blue-500 font-semibold">Education</span>
        </div>
        <p className="text-lg font-medium">Member of Science Degree in Computer Science</p>
        <p className="text-sm text-gray-400">Research Institute Institute of Technology, 2025</p>
      </div>

      {/* Current Role */}
      <div className="text-white rounded-lg p-6 w-full shadow-lg hover:bg-gray-700 transition-colors flex-1">
        <div className="flex items-center mb-2">
          <FaBriefcase className="text-green-500 mr-2" />
          <span className="text-green-500 font-semibold">Current Role</span>
        </div>
        <p className="text-lg font-medium">Software Engineer</p>
        <p className="text-sm text-gray-400">Human Efimers, 2025 - Present</p>
      </div>

      {/* Location */}
      <div className="text-white rounded-lg p-6 w-full shadow-lg hover:bg-gray-700 transition-colors flex-1">
        <div className="flex items-center mb-2">
          <FaMapMarkerAlt className="text-red-500 mr-2" />
          <span className="text-red-500 font-semibold">Location</span>
        </div>
        <p className="text-lg font-medium">Addis Ababa, Ethiopia</p>
        <p className="text-sm text-gray-400">Available for Remote Work</p>
      </div>
    </div>
  </div>
</section>

<section className="mb-12">
  <h2 className="text-2xl font-bold text-purple-400 mb-6">My Journey</h2>

  <div className="relative">
    {/* Vertical line in the center */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-600"></div>

    {/* Timeline item 1 - Left */}
    <div className="mb-8 flex justify-start w-full relative">
      <div className="w-1/2 pr-8 text-right">
        <p className="text-gray-400 text-sm">2025 - Present</p>
        <h3 className="font-bold text-gray-100">Software Engineer</h3>
        <p className="text-gray-400">Manuel</p>
        <p className="text-gray-300">Managing software systems</p>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-2 border-gray-900"></div>
    </div>

    {/* Timeline item 2 - Right */}
    <div className="mb-8 flex justify-end w-full relative">
      <div className="w-1/2 pl-8 text-left">
        <p className="text-gray-400 text-sm">2025</p>
        <h3 className="font-bold text-gray-100">Full-Stack Developer</h3>
        <p className="text-gray-400">Efimgan Artificial Intelligence Institute</p>
        <p className="text-gray-300">Built complete applications with AI clinical programs</p>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-2 border-gray-900"></div>
    </div>

    {/* Timeline item 3 - Left */}
    <div className="mb-8 flex justify-start w-full relative">
      <div className="w-1/2 pr-8 text-right">
        <p className="text-gray-400 text-sm">2025</p>
        <h3 className="font-bold text-gray-100">Computer Science Degree</h3>
        <p className="text-gray-400">International University Institute of Technology</p>
        <p className="text-gray-300">Graduate with Great Income (ZERO)</p>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-2 border-gray-900"></div>
    </div>

    {/* Timeline item 4 - Right */}
    <div className="mb-8 flex justify-end w-full relative">
      <div className="w-1/2 pl-8 text-left">
        <p className="text-gray-400 text-sm">2024</p>
        <h3 className="font-bold text-gray-100">ALX Software Engineering</h3>
        <p className="text-gray-400">ALX AIres</p>
        <p className="text-gray-300">Graduate / U-branch Software Engineering Program</p>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-2 border-gray-900"></div>
    </div>
  </div>
</section>


        {/* Core Values */}
 

{/* Core Values */}
<section className="mb-16">
  <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center mt-4">Core Values</h2>
  <div className="grid md:grid-cols-3 gap-6">
    
    {/* Quality Code */}
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center text-center">
      <FaLaptopCode className="text-purple-400 text-4xl mb-4" />
      <h3 className="font-bold text-gray-100 mb-2">Quality Code</h3>
      <p className="text-gray-300">
        Writing clean, maintainable, and well-documented code that stands the test of time and delivers real business results.
      </p>
    </div>

    {/* Collaboration */}
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center text-center">
      <FaUsers className="text-green-400 text-4xl mb-4" />
      <h3 className="font-bold text-gray-100 mb-2">Collaboration</h3>
      <p className="text-gray-300">
        Working effectively with teams to deliver exceptional results through clear communications and shared vision.
      </p>
    </div>

    {/* User Focus */}
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center text-center">
      <FaUserCheck className="text-blue-400 text-4xl mb-4" />
      <h3 className="font-bold text-gray-100 mb-2">User Focus</h3>
      <p className="text-gray-300">
        Creating solutions that prioritize user experience and solve real-world problems with intuitive design.
      </p>
    </div>

  </div>
</section>


   

{/* Personal Interests */}
<section className="mb-16">
  <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center mt-4">Personal Interests</h2>
  <div className="grid md:grid-cols-4 gap-6 text-gray-300">
    
    {/* Travel */}
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center text-center">
      <FaPlane className="text-purple-400 text-4xl mb-4" />
      <h3 className="font-semibold text-gray-100 mb-2">Travel</h3>
      <p>Exploring new cultures and technological innovation.</p>
    </div>

    {/* Finance */}
   <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center text-center">
  <FaDumbbell className="text-green-400 text-4xl mb-4" />
  <h3 className="font-semibold text-gray-100 mb-2">Fitness</h3>
  <p>Maintaining a healthy lifestyle through exercise and wellness.</p>
</div>

    {/* Open Source */}
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center text-center">
      <FaCode className="text-blue-400 text-4xl mb-4" />
      <h3 className="font-semibold text-gray-100 mb-2">Open Source</h3>
      <p>Contributing to the developer community.</p>
    </div>

    {/* Mentoring */}
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center text-center">
      <FaChalkboardTeacher className="text-yellow-400 text-4xl mb-4" />
      <h3 className="font-semibold text-gray-100 mb-2">Mentoring</h3>
      <p>Sharing knowledge and developing new skills.</p>
    </div>

  </div>
</section>

  <Footer/>
         
      </div>
     
    </div>
   
  );
};

export default About;
