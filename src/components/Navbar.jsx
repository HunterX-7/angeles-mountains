import React from 'react';
import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if(window.scrollY >= 70) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeNavbar);

  return (
    <nav className={`z-10 w-full fixed flex py-2 justify-between items-center ${navbar ? 'navbar active ease-out duration-200' : 'navbar ease-out duration-200'}`}>
      <div className='w-full flex sm:mx-32 mx-4 justify-between items-center'>
        <a href="#" className='flex items-center cursor-pointer gap-2'>
          <img src={logo} alt="Logo" className='w-[54px] h-[54px] object-contain' />
          <p className={`text-secondary font-bebas leading-none tracking-normal text-[24px] font-semibold cursor-pointer mt-1 px-2
            ${navbar ? '' : 'ease-out duration-200 hidden'}
            `}
          >
            LOS ANGELES <span className='text-terciary block tracking-wider'>MOUNTAINS</span>
          </p>
        </a>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1 gap-20'>
          {navLinks.map((nav) => (
            <li key={nav.id} className={`font-lato italic font-black cursor-pointer text-[16px] ${navbar ? 'text-terciary' : 'text-white'} underline underline-offset-4 decoration-2`}>
              <a href={`#${nav.id}`}>
                {nav.number}
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img 
              src={toogle ? close : menu} 
              alt="menu" 
              className='w-[28px] h-[28px] object-contain' 
              onClick={() => setToogle((prev) => !prev)} 
            />
            <div 
              className={`${toogle ? 'flex' : 'hidden'} p-6 bg-gradient-to-r from-secondary to-terciary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
            >
              <ul className='list-none flex flex-col justify-end items-center flex-1 gap-5'>
                {navLinks.map((nav) => (
                  <li key={nav.id} className={`font-lato italic font-black cursor-pointer text-[16px] text-white underline underline-offset-4 decoration-2`}>
                    <a href={`#${nav.id}`}>
                      {nav.number}
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
