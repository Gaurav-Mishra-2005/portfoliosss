import React from 'react';
import { Trophy, Code, Award } from 'lucide-react';
import { achievementsData } from '../data/achievementsData';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
              <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Competitive Programming
            </h3>
            <ul className="space-y-3">
              {achievementsData.competitiveProgramming.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Certifications
            </h3>
            <ul className="space-y-3">
              {achievementsData.certifications.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;