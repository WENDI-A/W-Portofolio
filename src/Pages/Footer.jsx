const Footer = () => {
    return (
         <footer className="bg-gray-900 text-gray-900 dark:text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-2">Naol Solomon</h3>
            <p>
              Software Engineer passionate about creating efficient, scalable solutions using modern technologies and best practices.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-purple-500">About Me</a></li>
              <li><a href="#skills" className="hover:text-purple-500">Skills</a></li>
              <li><a href="#projects" className="hover:text-purple-500">Projects</a></li>
              <li><a href="#contact" className="hover:text-purple-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="mailto:naol@example.com" className="hover:text-purple-500">
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700"></hr>
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} wendimagegn abera. All rights reserved.
        </p>
      </footer>
    );
};

export default Footer;