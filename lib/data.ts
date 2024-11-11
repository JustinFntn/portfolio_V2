import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import jeudames from '@/public/jeudames(1).png';
import { title } from 'process';
import { desc, image } from 'framer-motion/client';

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
    location: 'M3 Digital - Contract',
    description:
      'Front-end development for a variety of Shopify stores such as FitazFK, Rider Collective, Masseuse Massage, Francesca Jewellery and Salty Captain. Developed high quality landing pages and front end features using HTML, CSS, SCSS, JavaScript and Liquid.',
    icon: React.createElement(CgWorkAlt),
    date: 'September 2021 - February 2022',
  },
  {
    title: 'Junior Developer',
    location: 'YouPay',
    description:
      'Developed new features using Laravel, Vue.js, PHP, JavaScript, Tailwind CSS, MySQL and REST APIs. Created an email notification system for mechants to receive weekly/monthly summaries of YouPay carts created, paid and cancelled. I also integrated YouPay into dozens of stores.',
    icon: React.createElement(CgWorkAlt),
    date: 'February 2022 - November 2022',
  },
  {
    title: 'Software Engineer',
    location: 'The University of Queensland',
    description:
      'Full-stack software engineer in the Application Development and Support team. Worked on web applications such as CAHP (Casual Academic Hire and Payment), UQ Maps, UQ Donations, and Programs and Courses.',
    icon: React.createElement(CgWorkAlt),
    date: 'November 2022 - January 2024',
  },
  {
    title: 'Software Engineer',
    location: 'Humanforce',
    description:
      'Software engineer in the intelliHR platform team. We are a feature enablement team dedicated to developing features for developers, ensuring they are easier to create. We also look after issues of scale and technical debt for developers and the platform.',
    icon: React.createElement(CgWorkAlt),
    date: 'January 2024 - Present',
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
  },
  {
    name: 'TypeScript',
    icon: 'logos:typescript-icon',
  },
  {
    name: 'Node.js',
    icon: 'logos:nodejs-icon',
  },
  {
    name: 'Python',
    icon: 'logos:python',
  },
  {
    name: 'Java',
    icon: 'logos:java',
  },
  {
    name: 'HTML',
    icon: 'vscode-icons:file-type-html',
  },
  {
    name: 'SCSS',
    icon: 'logos:sass',
  },
  {
    name: 'Git',
    icon: 'logos:git-icon',
  },
  {
    name: 'MySQL',
    icon: 'logos:mysql',
  },
  {
    name: 'MongoDB',
    icon: 'devicon:mongodb-wordmark',
  },
  {
    name: 'Docker',
    icon: 'logos:docker-icon',
  },
  {
    name: 'Jenkins',
    icon: 'devicon:jenkins',
  },
] as const;
