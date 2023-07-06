import React from 'react';
import styles from './styles';
import { Navbar, Hero, History, Teams } from './components';

const App = () => {
  return (
    <div className='bg-terciary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-terciary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-terciary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <History />
          <Teams />
        </div>
      </div>
    </div>
  )
}

export default App
