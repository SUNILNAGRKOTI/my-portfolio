import {
  FaJava, FaPython, FaGitAlt, FaAndroid, FaDatabase,
} from 'react-icons/fa';
import {
  SiFlutter, SiDart, SiFirebase, SiCplusplus, SiC,
  SiMysql, SiSqlite, SiEclipseide,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbApi, TbBrandFramerMotion } from 'react-icons/tb';
import { MdArchitecture } from 'react-icons/md';

export const skillCategories = [
  {
    title: 'Programming Languages',
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'Java', icon: FaJava, level: 85 },
      { name: 'Python', icon: FaPython, level: 80 },
      { name: 'C++', icon: SiCplusplus, level: 75 },
      { name: 'Dart', icon: SiDart, level: 85 },
      { name: 'C', icon: SiC, level: 70 },
    ],
  },
  {
    title: 'Mobile Development',
    color: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'Flutter', icon: SiFlutter, level: 90 },
      { name: 'Firebase', icon: SiFirebase, level: 85 },
      { name: 'Android', icon: FaAndroid, level: 80 },
      { name: 'REST APIs', icon: TbApi, level: 85 },
      { name: 'Cross-Platform', icon: TbBrandFramerMotion, level: 85 },
    ],
  },
  {
    title: 'Databases',
    color: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'MySQL', icon: SiMysql, level: 80 },
      { name: 'SQLite', icon: SiSqlite, level: 80 },
      { name: 'Oracle', icon: FaDatabase, level: 70 },
      { name: 'Cloud Firestore', icon: SiFirebase, level: 85 },
    ],
  },
  {
    title: 'Tools & Frameworks',
    color: 'from-orange-500 to-amber-600',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 85 },
      { name: 'VS Code', icon: VscVscode, level: 90 },
      { name: 'Eclipse', icon: SiEclipseide, level: 70 },
    ],
  },
  {
    title: 'Core Concepts',
    color: 'from-pink-500 to-rose-600',
    skills: [
      { name: 'OOP', icon: MdArchitecture, level: 85 },
      { name: 'Data Structures', icon: FaDatabase, level: 85 },
      { name: 'Algorithms', icon: FaDatabase, level: 80 },
      { name: 'SDLC & Agile', icon: MdArchitecture, level: 80 },
      { name: 'State Management', icon: TbBrandFramerMotion, level: 85 },
    ],
  },
];
