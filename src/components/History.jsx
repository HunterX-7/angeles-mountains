import React from 'react';
import styles from '../styles';
import { navLinks } from '../constants';

const History = () => {
  return (
      <div id={navLinks[0].id} className='relative w-full h-screen mx-auto'>
        <div className={`${styles.paddingX} absolute inset-0 top-[80px] max-w-7xl mx-auto flex flex-row items-start justify-center gap-5`}>
          <div className='block items-center justify-center'>
            <div className='flex flex-row'>
              <h1 className={`font-bebas font-semibold text-quinary md:text-[150px] xs:text-[90px] text-[90px] md:leading-[120px] xs:leading-[80px] mt-2`}>
                {navLinks[0].number}           
              </h1>
              <span className='font-bebas absolute ml-[125px] mt-[35px] font-semibold text-[45px] text-senary tracking-wider hidden md:block'>{navLinks[0].title}</span>
              <span className='font-bebas absolute ml-[75px] mt-[35px] font-semibold text-[25px] text-senary tracking-wider block md:hidden'>{navLinks[0].title}</span>
            </div>
            <p className='font-lato xs:text-[18px] text-[12px] px-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quis aperiam omnis, debitis consequatur labore excepturi maiores est id magnam, voluptate optio doloremque odit nobis rerum? Cumque facere rem maiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio velit eveniet quidem nesciunt exercitationem laudantium sunt rerum eligendi expedita numquam autem, placeat, aut quisquam ducimus esse, in optio. Odio, esse!
            </p>
          </div>
        </div>
      </div>
  )
}

export default History
