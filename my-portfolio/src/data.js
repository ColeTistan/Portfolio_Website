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
/*
* TODO - modify array elements as objects with icon color and url data.
*/
const frontendTech = [
    DiReact,
    SiAngular,
    SiTailwindcss,
    SiJavascript,
    DiSass
]

const backendTech = [
    DiMongodb,
    SiExpress,
    DiNodejsSmall,
    SiPython,
    SiDjango
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