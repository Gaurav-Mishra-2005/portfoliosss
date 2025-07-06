import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;