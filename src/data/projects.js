import { SiFlutter, SiDart, SiFirebase, SiPython, SiMysql, SiSqlite } from 'react-icons/si';

export const projects = [
  {
    title: 'Healthify',
    subtitle: 'AI-Powered Cross-Platform Health & Wellness Application',
    description:
      'A comprehensive full-stack Flutter application serving as a personal health management platform with AI-powered features and real-time data sync.',
    highlights: [
      'Built with Firebase Auth, Cloud Firestore, and real-time data sync',
      'Integrated Gemini AI via REST API for intelligent health chatbot with NLP',
      'Camera-based vital signs scanner using photoplethysmography (PPG) for heart rate & stress estimation',
      'Interactive dashboards with FL Chart for mood, sleep, hydration & activity trends',
      'Modular architecture with symptom checker, PDF health reports, smart notifications & Google Sign-In',
    ],
    techStack: ['Flutter', 'Dart', 'Firebase', 'Gemini AI', 'REST APIs', 'FL Chart', 'Camera API', 'PDF Generation'],
    techIcons: [SiFlutter, SiDart, SiFirebase],
    gradient: 'from-violet-600 to-pink-600',
    category: 'Mobile App',
    screenshots: [
      '/my-portfolio/screenshots/1.jpeg',
      '/my-portfolio/screenshots/2.jpeg',
      '/my-portfolio/screenshots/3.jpeg',
      '/my-portfolio/screenshots/4.jpeg',
      '/my-portfolio/screenshots/5.jpeg',
      '/my-portfolio/screenshots/6.jpeg',
      '/my-portfolio/screenshots/7.jpeg',
      '/my-portfolio/screenshots/8.jpeg',
      '/my-portfolio/screenshots/9.jpeg',
      '/my-portfolio/screenshots/10.jpeg',
      '/my-portfolio/screenshots/11.jpeg',
      '/my-portfolio/screenshots/12.jpeg',
      '/my-portfolio/screenshots/13.jpeg',
      '/my-portfolio/screenshots/14.jpeg',
      '/my-portfolio/screenshots/15.jpeg',
      '/my-portfolio/screenshots/17.jpeg',
      '/my-portfolio/screenshots/18.jpeg',
      '/my-portfolio/screenshots/19.jpeg',
      '/my-portfolio/screenshots/20.jpeg',
      '/my-portfolio/screenshots/21.jpeg',
      '/my-portfolio/screenshots/22.jpeg',
    ],
  },
  {
    title: 'Contact Management System',
    subtitle: 'Desktop CRUD Application',
    description:
      'A Python desktop application with full CRUD operations, advanced search capabilities, and automated backup functionality.',
    highlights: [
      'Full CRUD operations with advanced search using SQLite and Tkinter GUI',
      'Normalized database schema with input validation and error handling',
      'Efficient data retrieval algorithms and automated backup system',
    ],
    techStack: ['Python', 'SQLite', 'Tkinter'],
    techIcons: [SiPython, SiSqlite],
    gradient: 'from-cyan-600 to-blue-600',
    category: 'Desktop App',
  },
  {
    title: 'Nutrition Tracking System',
    subtitle: 'Data-Driven Health Analytics Tool',
    description:
      'A desktop application with nutritional database, calorie calculation, and macro-nutrient analysis with data visualization.',
    highlights: [
      'Nutritional database with calorie calculation and macro-nutrient analysis',
      'Matplotlib data visualization for dietary trends',
      'MySQL database for efficient storage, retrieval, and dietary recommendation reports',
    ],
    techStack: ['Python', 'MySQL', 'Matplotlib', 'Tkinter'],
    techIcons: [SiPython, SiMysql],
    gradient: 'from-emerald-600 to-teal-600',
    category: 'Desktop App',
  },
];
