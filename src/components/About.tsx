import React from 'react';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          About Me
        </h2>
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-gray-200 dark:bg-gray-600 h-64 w-full rounded-lg flex items-center justify-center">
                <img src="data/Portfoliio-imaage" alt="" />
                <span className="text-gray-500 dark:text-gray-400 ">Profile Image</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Gaurav Mishra
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm a Computer Science undergraduate at IIIT Bhopal (Class of 2027) with a current CGPA of 7.55. 
                My interests lie in C++, Web Development, DSA, and Problem-Solving.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I believe in project-based learning and collaborative work environments. 
                I'm constantly seeking opportunities to enhance my skills and contribute to meaningful projects.
                Currently, I'm open to internships where I can apply my knowledge and grow professionally.
              </p>
              <div>
                <a
                  href="src/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;