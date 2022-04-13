import { DiMongodb, DiReact, DiNodejsSmall, DiSass } from 'react-icons/di';
import { SiExpress, SiPython, SiDjango, SiAngular, SiTailwindcss, SiJavascript, SiGithub, SiLinkedin } from 'react-icons/si';

const navLinks = [
    {
      id: 1,
      title: 'Work'
    },
    {
      id: 2,
      title: 'Contact'
    },
]

const frontendTech = [
  {
    id: 1,
    icon: DiReact,
    color: 'hover:text-sky-400',
    url: 'https://reactjs.org/'
  },
  {
    id: 2,
    icon: SiAngular,
    color: 'hover:text-red-600',
    url: 'https://angular.io/'
  },
  {
    id: 3,
    icon: SiTailwindcss,
    color: 'hover:text-cyan-400',
    url: 'https://tailwindcss.com/'
  },
  {
    id: 4,
    icon: SiJavascript,
    color: 'hover:text-yellow-300',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    id: 5,
    icon: DiSass,
    color: 'hover:text-pink-500',
    url: 'https://sass-lang.com/'
  }
]

const backendTech = [
  {
    id: 1,
    icon: DiMongodb,
    color: 'hover:text-green-600',
    url: 'https://www.mongodb.com/'
  },
  {
    id: 2,
    icon: SiExpress,
    color: 'hover:text-gray-400',
    url: 'https://expressjs.com/'
  },
  {
    id: 3,
    icon: DiNodejsSmall,
    color: 'hover:text-green-600',
    url: 'https://nodejs.org/en/'
  },
  {
    id: 4,
    icon: SiPython,
    color: 'hover:text-sky-800',
    url: 'https://www.python.org/'
  },
  {
    id: 5,
    icon: SiDjango,
    color: 'hover:text-emerald-700',
    url: 'https://www.python.org/'
  }
]

const socialIcons = [
  {
    id: 1,
    icon: SiLinkedin,
    url: 'https://www.linkedin.com/in/coletistan/'
  },
  {
    id: 2,
    icon: SiGithub,
    url: 'https://github.com/ColeTistan'
  }
]

const exportData = {
    navLinks, 
    frontendTech, 
    backendTech,
    socialIcons
}

export default exportData