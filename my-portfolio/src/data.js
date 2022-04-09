import { DiMongodb, DiReact, DiNodejsSmall } from 'react-icons/di';
import { SiExpress, SiPython, SiDjango, SiAngular, SiTailwindcss } from 'react-icons/si';

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
        icon: DiReact
    },
    {
        id: 2,
        icon: SiAngular
    },
    {
        id: 3,
        icon: SiTailwindcss
    }
]

const backendTech = [
    {
        id: 1,
        icon: DiMongodb
    },
    {
        id: 2,
        icon: SiExpress
    },
    {
        id: 3,
        icon: DiNodejsSmall
    },
    {
        id: 4,
        icon: SiPython
    },
    {
        id: 5,
        icon: SiDjango
    }
]
export default { navLinks, frontendTech, backendTech }