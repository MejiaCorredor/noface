import React from 'react';
import styles from './Navbar.module.css';


export default function Navbar({ onNavigate, current }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <span className={styles.logo}>~NOFACE~</span>
        <span className={styles.subtitle}>clothing</span>
      </div>
      <div className={styles.navBtns}>
  <button className={current === 'home' ? styles.active : ''} onClick={() => onNavigate('home')}>Inicio</button>
  <button className={current === 'closet' ? styles.active : ''} onClick={() => onNavigate('closet')}>Closet</button>
  <button className={current === 'recs' ? styles.active : ''} onClick={() => onNavigate('recs')}>Recomendaciones</button>
      </div>
    </nav>
  );
}
