import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import navLinkData from '../data';

const Navbar = () => {

  let [open, setOpen] = useState(false)
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <nav className='nav'>
        <span className='nav-title'>
          Cole Tistan
        </span>
        <div onClick={() => setOpen(!open)} className='nav-menu'>
          {open ? <HiX />: <HiMenu />}
        </div>
        <ul className={`nav-list ${open ? 'top-16 opacity-100': 'top-[-490px] md:opacity-100 opacity-0'}`}>
          {
            navLinkData.navLinks.map((data) => { 
              return (
              <li className='nav-item' key={data.id}>
                <a href='#' className='hover:text-gray-500 font-medium duration-300 p-2'>
                  {data.title}
                </a>
              </li>
              )
            })
          }  
          <li className='nav-item'>
            <button className='button rounded-md border-sky-600 hover:bg-sky-600 hover:text-gray-200'>
              My Resume
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar