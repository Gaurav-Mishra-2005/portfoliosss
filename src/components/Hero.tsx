import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center px-4 md:px-0">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
          Gaurav Mishra
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Aspiring Software Engineer | Full Stack Developer 
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="src/resume.pdf"
            download
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
          >
            <Download size={20} />
            Download Resume
          </a>
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
          >
            <ExternalLink size={20} />
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;