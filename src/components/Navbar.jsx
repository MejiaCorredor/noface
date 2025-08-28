import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "./Logo";

export default function Navbar({ onNavigate, current, onLogout }) {

  const handleNav = (to) => {
    onNavigate(to);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.centerLogoBlock}>
        <Logo onClick={() => handleNav("home")} disabled={current === "home"} />
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
    </nav>
  );
}
