import React from 'react';
import styles from './styles';
import { Navbar, Hero, History, Teams, Footer, Slider, Accorddion } from './components';

const App = () => {
  return (
    <>
      <div className='relative z-10 bg-terciary'>
        <Navbar />
        <div className='bg-hero-pattern-1 bg-cover bg-no-repeat bg-top'>
          <Hero />
        </div>
        <div className='bg-hero-pattern-4 bg-cover bg-no-repeat bg-top'>
          <History />
          <Slider />
        </div>
        <div className='bg-white'>
          <Teams />
        </div>
        <div className='bg-hero-pattern-2 bg-cover bg-no-repeat bg-center flex justify-center items-center h-screen'>
          <div className='bg-accordion'>
            <Accorddion />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
