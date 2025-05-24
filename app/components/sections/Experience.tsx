'use client';

import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experienceData = [
  {
    role: 'Social Intern',
  company: 'K L E F Deemed to be University – Student Activity Center',
  year: '2023 - 2024',
  details: [
    'Successfully completed the Social Internship Program focused on community service and social impact.',
    'Demonstrated strong dedication, teamwork, and leadership in addressing social challenges.',
    'Recognized for valuable contributions to society and unwavering commitment to social responsibility.',
    'Awarded a certificate of excellence (UID: Y23SIC01625) for outstanding service.'
    ],
  },
  {
    role: 'Frontend Developer (Intern)',
    company: 'Tech Solutions Pvt. Ltd.',
    year: '2022',
    details: [
      'Developed responsive web interfaces using React and Tailwind CSS.',
      'Worked closely with backend team to integrate REST APIs.',
      'Improved UI/UX for key client projects.'
    ],
  },
];

const Experience = () => {
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
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-gray-600 dark:text-gray-300">
            My professional journey so far
          </p>
        </motion.div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 dark:bg-green-900/40 rounded"></div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-12"
          >
            {experienceData.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border-l-4 ${idx % 2 === 0 ? 'border-green-500 ml-0 md:ml-12' : 'border-blue-500 ml-0 md:mr-12'} hover:shadow-2xl transition-shadow`}
                style={{ maxWidth: '90%', marginLeft: idx % 2 === 0 ? 'auto' : undefined, marginRight: idx % 2 !== 0 ? 'auto' : undefined }}
              >
                <div className="flex items-center mb-2">
                  <FaBriefcase className="text-2xl text-green-500 mr-3" />
                  <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-0">{exp.role}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-200 font-medium mb-1">{exp.company}</p>
                <p className="text-gray-500 dark:text-gray-400 mb-2">{exp.year}</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  {exp.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <span className="absolute left-1/2 top-4 transform -translate-x-1/2 w-5 h-5 bg-green-500 dark:bg-green-400 rounded-full border-4 border-white dark:border-gray-800 z-10"></span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 