import React from 'react';
import styles from './styles';
import { Navbar, Hero, History, Teams, Footer } from './components';

const App = () => {
  return (
    <>
      <div className='relative z-0'>
        <Navbar />
        <div className='bg-hero-pattern-1 bg-cover bg-no-repeat bg-top'>
          <Hero />
        </div>
        <History />
        <Teams />
        <Footer />
      </div>
    </>
  )
}

export default App
