import { SiMeta, SiCoursera } from 'react-icons/si';
import { FaUniversity, FaAward } from 'react-icons/fa';

export const certifications = [
  {
    title: 'Meta Android Mobile Application Development',
    issuer: 'Coursera',
    year: '2025',
    icon: SiMeta,
    description: 'Android development, UI/UX design, mobile programming',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM',
    year: '2024',
    icon: FaAward,
    description: 'Data analysis, programming fundamentals, machine learning',
    gradient: 'from-emerald-500 to-cyan-600',
  },
  {
    title: 'Advanced Programming Workshop',
    issuer: 'IIT Delhi Virtual Lab',
    year: '2022',
    icon: FaUniversity,
    description: 'Algorithms, data structures, software development',
    gradient: 'from-orange-500 to-rose-600',
  },
];

export const competencies = {
  technical: [
    'Mobile App Development',
    'Full-Stack Development',
    'Database Design',
    'API Integration',
    'Cloud Services',
    'System Design',
    'Version Control',
  ],
  analytical: [
    'Problem-Solving',
    'Debugging',
    'Performance Optimization',
    'Algorithm Design',
    'Critical Thinking',
  ],
  soft: [
    'Team Collaboration',
    'Agile Methodology',
    'Technical Documentation',
    'Self-Learning',
  ],
  languages: ['Hindi (Native)', 'English (Professional)'],
};
