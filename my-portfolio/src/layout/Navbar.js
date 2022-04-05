import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      title: 'Work'
    },
    {
      id: 2,
      title: 'About'
    },
    {
      id: 3,
      title: 'Contact'
    },
  ]
  let [open, setOpen] = useState(false)
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <nav className='bg-gray-200 md:flex justify-between items-center py-4 md:px-10 px-7 text-gray-800 uppercase'>
        <span className='cursor-pointer font-bold text-3xl md:text-2xl tracking-wider mr-1'>
          Cole Tistan
        </span>
        <div onClick={() => setOpen(!open)} className='md:hidden absolute right-12 top-4 cursor-pointer text-4xl'>
          {open ? <HiX />: <HiMenu />}
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 md:static absolute bg-gray-200 md:z-auto 
                       z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-300 ease-in-out ${open ? 'top-16 opacity-100': 'top-[-490px] md:opacity-100 opacity-0'}`}>
          {
            navLinks.map((data) => { 
              return (
              <li 
                className='md:ml-8 md:my-0 my-7 text-center md:text-lg text-xl tracking-wider'
                key={data.id}
              >
                <a href='#' className='hover:text-gray-500 font-medium duration-300 p-2'>
                  {data.title}
                </a>
              </li>
              )
            })
          }  
          <li className='md:ml-8 text-center md:text-lg text-xl tracking-wider'>
            <button className='border-2 border-sky-600 font-medium uppercase 
                               duration-300 px-3 py-1 rounded-md focus:ring
                               hover:bg-sky-600 hover:text-gray-200'>
              My Resume
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar