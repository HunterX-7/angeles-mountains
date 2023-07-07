import React from 'react';
import { logo } from '../assets';

const Footer = () => {
  return (
      <footer className={`z-0 w-full flex py-2 justify-between items-center`}>
        <div className='w-full flex sm:mx-32 mx-4 justify-between items-center'>
          <a href="#" className='flex items-center cursor-pointer gap-2'>
            <img src={logo} alt="Logo" className='w-[54px] h-[54px] object-contain' />
            <p className={`text-primary sm:block hidden font-bebas leading-none tracking-normal text-[24px] font-semibold cursor-pointer mt-1 px-2`}
            >
              LOS ANGELES <span className='text-primary block tracking-wider'>MOUNTAINS</span>
            </p>
          </a>
          <ul className='list-none flex justify-end items-center flex-1 gap-20'>
            <li className='font-lato italic font-black text-primary cursor-pointer sm:text-[16px] text-[12px]'>
              COPYRIGHT 2023 ALL RIGHTS RESERVED
            </li>
          </ul>
        </div>
      </footer>
  )
}

export default Footer
