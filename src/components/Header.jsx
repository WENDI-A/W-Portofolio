import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "border-b-2 border-purple-500 pb-1 text-purple-500 font-semibold"
      : "hover:text-purple-400 transition-colors duration-200";

  return (
    <header className="sticky top-0 z-50 text-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between px-6 py-4 items-center">
        <div className="text-4xl font-bold">Wendimagegn Abera</div>

        <nav className="space-x-6 hidden md:flex">
          <NavLink to="/" className={navLinkClasses}>Home</NavLink>
          <NavLink to="/about" className={navLinkClasses}>About</NavLink>
          <NavLink to="/skill" className={navLinkClasses}>Skill</NavLink>
          <NavLink to="/projects" className={navLinkClasses}>Projects</NavLink>
          <NavLink to="/resume" className={navLinkClasses}>Resume</NavLink>
          <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
        </nav>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 p-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white"
          aria-label="Toggle Theme"
        >
          {darkMode ? <i className="fas fa-sun" /> : <i className="fas fa-moon" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
