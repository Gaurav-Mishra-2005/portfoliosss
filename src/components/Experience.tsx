import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Experience
        </h2>
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 md:p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Open to Opportunities
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm currently open to internships in Software Development, Web Development, or DevOps. 
            I'm eager to apply my skills in a professional environment and contribute to meaningful projects.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;