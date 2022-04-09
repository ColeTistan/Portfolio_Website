import { DiMongodb, DiReact, DiNodejsSmall, DiSass } from 'react-icons/di';
import { SiExpress, SiPython, SiDjango, SiAngular, SiTailwindcss, SiJavascript } from 'react-icons/si';

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

const exportData = {
    navLinks, 
    frontendTech, 
    backendTech 
}

export default exportData