import { CgWorkAlt } from 'react-icons/cg';
import jeudames from '../public/jeudames(1).png';
import Imper from '../public/Imper.png';
import Hermes from '../public/Hermes.png';

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
      'Full-stack web developer working with Node.js, Vue.js, TypeScript or Python. Involved in both feature development and maintenance tasks, including database operations (PostgreSQL, MongoDB, Redis) and system monitoring through Grafana. Contribute to building and maintaining web applications.',
    icon: CgWorkAlt,
    date: 'Septembre 2024 - Present',
  },
  {
    title: 'Level 2 IT Support',
    location: 'Atmo HDF',
    description:
      'Carried out tasks focused on problem-solving, as well as administering various tools, developing Python, Batch or PowerShell scripts, and creating Docker images.',
    icon: CgWorkAlt,
    date: 'Octobre 2023 - Septembre 2024',
  },
  {
    title: 'First-Year University Student in IT',
    location: 'Calais University Institute of Technology',
    description:
      'Full-stack software engineer in the Application Development and Support team. Worked on web applications such as CAHP (Casual Academic Hire and Payment), UQ Maps, UQ Donations, and Programs and Courses.',
    icon: CgWorkAlt,
    date: 'septembre 2022 - Juillet 2023',
  },
] as const;

export const projectsData = [
  {
    title: 'Imper',
    description: 'Observability and management platform of the computer park. Aims to present various metrics of regarding our application, servers, as well as user management.',
    tags: ['TypeScript', 'Bun.js','Express', 'Vue.js','Vite','Vuetify'],
    icons: ['logos:typescript-icon', 'logos:bun', 'logos:vue','logos:vitejs','logos:vuetifyjs'],
    imageUrl: Imper,
    githubLink: 'https://github.com/Atmo-HDF/Imper',
  },
  {
    title: 'Hermes',
    description: 'Platform with authentication for reporting and managing pollution spills as well as generating PDF, sending emails and SMS to the concerned authorities.',
    tags: ['TypeScript', 'Bun.js', 'Vue.js','Vuetify', 'Pinia'],
    icons: ['logos:typescript-icon', 'logos:bun', 'logos:vue', 'logos:vuetifyjs', 'logos:pinia'],
    imageUrl: Hermes,
    githubLink: 'https://github.com/Atmo-HDF/Hermes',
  },
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
    name: 'Bun.js',
    icon: 'logos:bun',
    url: 'https://bun.sh/',
  },
  {
    name: 'Vue.js',
    icon: 'logos:vue',
    url: 'https://vuejs.org/',
  },
  {
    name: 'Pinia',
    icon: 'logos:pinia',
    url: 'https://pinia.vuejs.org/',
  },
  {
    name: 'Vite',
    icon: 'logos:vitejs',
    url: 'https://vitejs.dev/',
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
    name: 'Python',
    icon: 'logos:python',
    url: 'https://www.python.org/',
  },
  {
    name: 'Git',
    icon: 'logos:git-icon',
    url: 'https://git-scm.com/',
  },
  {
    name: 'MongoDB',
    icon: 'devicon:mongodb-wordmark',
    url: 'https://www.mongodb.com/',
  },
  {
    name: 'PostgreSQL',
    icon: 'logos:postgresql',
    url: 'https://www.postgresql.org/',
  },
  {
    name: 'Redis',
    icon: 'logos:redis',
    url: 'https://redis.io/',
  },
  {
    name: 'MySQL',
    icon: 'logos:mysql',
    url: 'https://www.mysql.com/',
  },
  {
    name:'Github Actions',
    icon: 'logos:github-icon',
    url: 'https://github.com/',
  },
  {
    name: 'Docker',
    icon: 'logos:docker-icon',
    url: 'https://www.docker.com/',
  },
] as const;
