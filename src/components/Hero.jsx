import React from 'react';
import styles from '../styles';

const Hero = () => {
  return (
    <div className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start justify-center gap-5`}>
        <div className='block items-center justify-center'>
          <h1 className={`font-bebas font-semibold text-secondary md:text-[150px] sm:text-[90px] xs:text-[60px] text-[60px] md:leading-[120px] sm:leading-[80px] leading-[50px] mt-2`}>
            LOS ANGELES 
            <span className='block text-terciary tracking-wider'>MOUNTAINS</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
