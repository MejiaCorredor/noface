import React, { useState } from 'react';
import styles from './Navbar.module.css';



export default function Navbar({ onNavigate, current }) {
  const [open, setOpen] = useState(false);
  const handleNav = (to) => {
    setOpen(false);
    onNavigate(to);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <span className={styles.logo}>~NOFACE~</span>
        <span className={styles.subtitle}>clothing</span>
      </div>
      <button className={styles.menuBtn} onClick={() => setOpen(o => !o)} aria-label="Menú">
        <span className={styles.menuIcon}>&#9776;</span>
      </button>
      <div className={open ? styles.menuOpen : styles.menuClosed}>
        <button className={current === 'home' ? styles.active : ''} onClick={() => handleNav('home')}>
          <span className={styles.icon} role="img" aria-label="Inicio">🏠</span>
          <span className={styles.btnText}>Inicio</span>
        </button>
        <button className={current === 'closet' ? styles.active : ''} onClick={() => handleNav('closet')}>
          <span className={styles.icon} role="img" aria-label="Closet">👚</span>
          <span className={styles.btnText}>Closet</span>
        </button>
        <button className={current === 'recs' ? styles.active : ''} onClick={() => handleNav('recs')}>
          <span className={styles.icon} role="img" aria-label="Recomendaciones">✨</span>
          <span className={styles.btnText}>Recomendaciones</span>
        </button>
      </div>
      {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}
    </nav>
  );
}
