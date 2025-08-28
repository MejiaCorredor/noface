import React, { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import styles from "./Navbar.module.css";
import Logo from "./Logo";

export default function Navbar({ onNavigate, current, onLogout }) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleNav = (to) => {
    setOpen(false);
    onNavigate(to);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.leftBlock}></div>
        <div className={styles.centerLogo}>
          <Logo onClick={() => onNavigate("home")} disabled={current === "home"} />
        </div>
        <div className={styles.rightBlock}>
          <button
            className={styles.logoutBtn}
            onClick={() => setShowConfirm(true)}
            onMouseOver={e => e.currentTarget.classList.add(styles.logoutBtnHover)}
            onMouseOut={e => e.currentTarget.classList.remove(styles.logoutBtnHover)}
            aria-label="Cerrar sesión"
          >
            <span className={styles.icon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </span>
          </button>
        </div>
      </nav>
      {showConfirm && (
        <ConfirmModal
          message="¿Seguro que deseas cerrar sesión?"
          onConfirm={() => { setShowConfirm(false); onLogout(); }}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </>
  );
}
