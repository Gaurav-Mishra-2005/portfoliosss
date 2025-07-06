import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Gaurav Mishra</h3>
            <p className="text-gray-400 mt-1">Aspiring Software Engineer</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="mailto:gaurav.mishra@iiitbhopal.ac.in"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com/in/gauravmishra-here"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/gauravmishra-here"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-400 text-sm">
          <p>© {currentYear} Gaurav Mishra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;