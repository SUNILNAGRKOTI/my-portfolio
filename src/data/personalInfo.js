import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export const personalInfo = {
  name: 'Sunil Nagarkoti',
  tagline: 'Full-Stack Developer & Mobile App Developer',
  description:
    'Computer Applications graduate specializing in mobile app development and full-stack engineering. I build cross-platform applications with Flutter, Firebase, and modern tools — focused on clean code, real-world functionality, and solid user experience.',
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
