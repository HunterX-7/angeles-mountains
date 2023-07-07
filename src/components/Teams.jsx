import React from 'react';
import styles from '../styles';
import { navLinks } from '../constants';

const Teams = () => {
  return (
    <div id={navLinks[1].id} className='relative w-full sm:h-[240px] h-[200px] mx-auto'>
    <div className={`${styles.paddingX} absolute inset-0 sm:top-[90px] top-[30px] max-w-7xl mx-auto flex flex-row items-start justify-center gap-5`}>
      <div className='block items-center justify-center'>
        <div className='flex flex-row'>
          <h1 className={`font-bebas font-semibold text-quinary md:text-[150px] xs:text-[90px] text-[90px] md:leading-[120px] xs:leading-[80px] mt-2`}>
            {navLinks[1].number}           
          </h1>
          <span className='font-bebas absolute ml-[125px] mt-[35px] font-semibold text-[45px] text-senary tracking-wider hidden md:block'>{navLinks[1].title}</span>
          <span className='font-bebas absolute ml-[75px] mt-[35px] font-semibold text-[25px] text-senary tracking-wider block md:hidden'>{navLinks[1].title}</span>
          <div className='flex flex-row items-center ml-[60px]'>
            <p className='font-lato xs:text-[18px] text-[12px] pl-10'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro delectus eos nulla nemo consequatur sed architecto commodi ut fugiat error.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Teams
