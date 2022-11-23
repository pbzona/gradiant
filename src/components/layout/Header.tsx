import React from 'react';
import logo from '../../logo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt='logo' />
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>gradiant</h1>
      </div>
    </header>
  );
};

export default Header;