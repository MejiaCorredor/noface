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
    <>
      <nav className={styles.navbar}>
        <div className={styles.leftBlock}>
          <Logo onClick={() => handleNav("home")} disabled={current === "home"} />
          <span className={styles.centerText}>Tu estilo, tu mundo ✨</span>
        </div>

        <div className={styles.desktopNav}>
          <button
            className={current === "home" ? styles.active : ""}
            onClick={() => handleNav("home")}
          >
            🏠 Inicio
          </button>
          <button
            className={current === "closet" ? styles.active : ""}
            onClick={() => handleNav("closet")}
          >
            👚 Closet
          </button>
          <button
            className={current === "recs" ? styles.active : ""}
            onClick={() => handleNav("recs")}
          >
            ✨ Recomendaciones
          </button>
          <button className={styles.logoutBtn} onClick={onLogout}>
            🚪 Salir
          </button>
        </div>

        <button
          className={styles.menuBtn}
          onClick={() => setOpen((o) => !o)}
          aria-label="Menú"
        >
          <span className={styles.menuIcon}>&#9776;</span>
        </button>
      </nav>

      <div className={`${styles.menu} ${open ? styles.menuOpen : styles.menuClosed}`}>
        <div className={styles.navBtns}>
          <button
            className={current === "home" ? styles.active : ""}
            onClick={() => handleNav("home")}
          >
            <span className={styles.icon}>🏠</span>
            <span className={styles.btnText}>Inicio</span>
          </button>
          <button
            className={current === "closet" ? styles.active : ""}
            onClick={() => handleNav("closet")}
          >
            <span className={styles.icon}>👚</span>
            <span className={styles.btnText}>Closet</span>
          </button>
          <button
            className={current === "recs" ? styles.active : ""}
            onClick={() => handleNav("recs")}
          >
            <span className={styles.icon}>✨</span>
            <span className={styles.btnText}>Recomendaciones</span>
          </button>
        </div>
        <button className={styles.logoutBtnMobile} onClick={onLogout}>
          🚪 Cerrar sesión
        </button>
      </div>

      {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}
    </>
  );
}
