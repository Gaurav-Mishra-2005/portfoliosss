import React from 'react';
import { skillsData } from '../data/skillsData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md flex flex-col items-center transition-transform duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-3 text-blue-600 dark:text-blue-400">
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;