// components/sections/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'Chat App',
    description: 'A full-stack chat application built with Next.js, Node.js, and MongoDB. Features include user authentication, chat rooms, and real-time messaging.',
    backendFeatures: [
      'JWT authentication & session management',
      'RESTful API with Express.js',
      'Real-time messaging with Socket.io',
      'MongoDB for chat and user data storage',
    ],
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/MunnaKumar32990/Chat-App',
    demo: 'https://chatapp-demo.vercel.app',
  },
  {
    title: 'AI Resume Builder',
    description: 'A full-stack AI resume builder application built with Next.js, Node.js, and MongoDB. Features include user authentication, resume generation, and real-time messaging.',
    backendFeatures: [
      'User authentication & authorization',
      'RESTful API for resume data',
      'AI-powered resume generation (OpenAI API)',
      'MongoDB for user and resume storage',
    ],
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/MunnaKumar32990/AI-Resume-Builder',
    demo: 'https://ai-resume-builder-demo.vercel.app',
  },
  {
    title: 'Employee Management System',
    description: 'A full-stack employee management system built with Next.js, Node.js, and MongoDB. Features include user authentication, employee management, and real-time messaging.',
    backendFeatures: [
      'Role-based access control',
      'RESTful API for employee CRUD operations',
      'Real-time notifications with Socket.io',
      'MongoDB for employee and user data',
    ],
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/MunnaKumar32990/EmployeeManagementSystem',
    demo: 'https://employee-management-system-demo.vercel.app',
  },
];

const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredProjects =
    selectedTag === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Some of my recent work
          </p>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200
                ${selectedTag === tag
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30'}`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700 group-hover:opacity-90 transition-opacity">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                {project.backendFeatures && (
                  <ul className="mb-4 ml-4 list-disc text-gray-500 dark:text-gray-400 text-sm">
                    {project.backendFeatures.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="Live Demo"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;