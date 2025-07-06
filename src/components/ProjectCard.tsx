import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 h-full flex flex-col">
      <div className="bg-gray-200 dark:bg-gray-600 h-40 flex items-center justify-center">
        <span className="text-gray-500 dark:text-gray-400">Project Image</span>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 pb-6 mt-auto flex gap-4">
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ExternalLink size={16} />
            Demo
          </a>
        )}
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:underline"
        >
          <Github size={16} />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;