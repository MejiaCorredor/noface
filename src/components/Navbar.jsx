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

  {/* Menú hamburguesa eliminado */}
      </nav>

  {/* Menú hamburguesa eliminado */}
    </>
  );
}
