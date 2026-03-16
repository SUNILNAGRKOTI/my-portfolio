import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export const personalInfo = {
  name: 'Sunil Nagarkoti',
  tagline: 'Full-Stack Developer & Mobile App Developer',
  description:
    'Results-driven Computer Applications professional with expertise in mobile app development, full-stack engineering, and database management. Skilled in building cross-platform applications with real-time features, REST API integration, AI/ML integration, and cloud services.',
  location: 'Bageshwar, Uttarakhand, India',
  email: 'sunilsinghnagarkoti108@gmail.com',
  phone: '+91 8650743567',
  resumeUrl: '/resume.pdf',
  social: [
    {
      name: 'GitHub',
      url: 'https://github.com/SunilNagarkoti',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sunil-nagarkoti-911729241',
      icon: FaLinkedin,
    },
    {
      name: 'Email',
      url: 'mailto:sunilsinghnagarkoti108@gmail.com',
      icon: FaEnvelope,
    },
  ],
  stats: [
    { label: 'Projects', value: '10+' },
    { label: 'Certifications', value: '3' },
    { label: 'Technologies', value: '20+' },
  ],
};
