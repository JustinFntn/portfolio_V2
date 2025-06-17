import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import jeudames from '../public/jeudames(1).png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Education',
    hash: '#education',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Web Developer',
    location: 'Atmo HDF',
    description:
      'Back-end development for various internal projects within the company, as well as in collaboration with local authorities in the Hauts-de-France region. Development of Node.js APIs with a MongoDB database.',
    icon: React.createElement(CgWorkAlt),
    date: 'Septembre 2024 - Present',
  },
  {
    title: 'Level 2 IT Support',
    location: 'Atmo HDF',
    description:
      'Carried out tasks focused on problem-solving, as well as administering various tools, developing Python, Batch or PowerShell scripts, and creating Docker images.',
    icon: React.createElement(CgWorkAlt),
    date: 'Octobre 2023 - Septembre 2024',
  },
  {
    title: 'First-Year University Student in IT',
    location: 'Calais University Institute of Technology',
    description:
      'Full-stack software engineer in the Application Development and Support team. Worked on web applications such as CAHP (Casual Academic Hire and Payment), UQ Maps, UQ Donations, and Programs and Courses.',
    icon: React.createElement(CgWorkAlt),
    date: 'septembre 2022 - Juillet 2023',
  },
] as const;

export const projectsData = [
  {
    title: 'Pokedex Api',
    description: 'A remplir et changer l\'image',
    tags: ['TypeScript', 'Node.js', 'Express', 'SQLite'],
    icons: ['logos:typescript-icon', 'logos:nodejs-icon', 'logos:express', 'logos:sqlite'],
    imageUrl: jeudames,
    githubLink: 'https://github.com/JustinFntn/pokedex-api',
  },
  {
    title: 'Chekers Game',
    description:
      'Cryptocurrency sentiment analysis website based on Twitter posts. Users can see the overall sentiment',
    tags: ['Python'],
    icons: ['logos:python'],
    imageUrl: jeudames,
    githubLink: 'https://github.com/JustinFntn/Jeu-de-dames',
  },
] as const;

export const skillsData = [
  {
    name: 'JavaScript',
    icon: 'logos:javascript',
    url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
  },
  {
    name: 'TypeScript',
    icon: 'logos:typescript-icon',
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Node.js',
    icon: 'logos:nodejs-icon',
    url: 'https://nodejs.org/',
  },
  {
    name: 'Vue.js',
    icon: 'logos:vue',
    url: 'https://vuejs.org/',
  },
  {
    name: 'Python',
    icon: 'logos:python',
    url: 'https://www.python.org/',
  },
  {
    name: 'HTML',
    icon: 'vscode-icons:file-type-html',
    url: 'https://developer.mozilla.org/fr/docs/Web/HTML',
  },
  {
    name: 'CSS',
    icon: 'vscode-icons:file-type-css',
    url: 'https://developer.mozilla.org/fr/docs/Web/CSS',
  },
  {
    name: 'Git',
    icon: 'logos:git-icon',
    url: 'https://git-scm.com/',
  },
  {
    name: 'MySQL',
    icon: 'logos:mysql',
    url: 'https://www.mysql.com/',
  },
  {
    name: 'MongoDB',
    icon: 'devicon:mongodb-wordmark',
    url: 'https://www.mongodb.com/',
  },
  {
    name: 'Docker',
    icon: 'logos:docker-icon',
    url: 'https://www.docker.com/',
  },
  {
    name: 'Jenkins',
    icon: 'devicon:jenkins',
    url: 'https://www.jenkins.io/',
  },
] as const;
