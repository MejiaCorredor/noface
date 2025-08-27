import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "./Logo";

export default function Navbar({ onNavigate, current, onLogout }) {
  const [open, setOpen] = useState(false);

  const handleNav = (to) => {
    setOpen(false);
    onNavigate(to);
  };

  return (
    <nav className={styles.navbar}>
      {/* Bloque izquierdo: logout en desktop */}
      <div className={styles.leftBlock}>
        <button
          className={`${styles.logoutBtn} ${styles.desktopOnly}`}
          onClick={onLogout}
        >
          🚪 Salir
        </button>
      </div>

      {/* Bloque central: logo absolutamente centrado */}
      <div className={styles.centerBlock}>
        <Logo onClick={() => handleNav("home")} disabled={current === "home"} />
      </div>

      {/* Bloque derecho: menú hamburguesa */}
      <div className={styles.rightBlock}>
        <button
          className={styles.menuBtn}
          onClick={() => setOpen((o) => !o)}
          aria-label="Menú"
        >
          <span className={styles.menuIcon}>&#9776;</span>
        </button>
      </div>

      {/* Menú lateral (mobile) */}
      <div className={open ? styles.menuOpen : styles.menuClosed}>
        <div className={styles.menuLogo}>
          <Logo onClick={() => handleNav("home")} disabled={current === "home"} />
        </div>

        <button
          className={current === "home" ? styles.active : ""}
          onClick={() => handleNav("home")}
        >
          <span className={styles.icon} role="img" aria-label="Inicio">🏠</span>
          <span className={styles.btnText}>Inicio</span>
        </button>
        <button
          className={current === "closet" ? styles.active : ""}
          onClick={() => handleNav("closet")}
        >
          <span className={styles.icon} role="img" aria-label="Closet">👚</span>
          <span className={styles.btnText}>Closet</span>
        </button>
        <button
          className={current === "recs" ? styles.active : ""}
          onClick={() => handleNav("recs")}
        >
          <span className={styles.icon} role="img" aria-label="Recomendaciones">✨</span>
          <span className={styles.btnText}>Recomendaciones</span>
        </button>

        {/* Logout en mobile */}
        <button
          className={`${styles.logoutBtn} ${styles.mobileOnly}`}
          onClick={onLogout}
        >
          🚪 Cerrar sesión
        </button>
      </div>

      {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}
    </nav>
  );
}
