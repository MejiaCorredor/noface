import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import ConfirmLogoutModal from "./ConfirmLogoutModal";

export default function Navbar({ onNavigate, current, onLogout }) {
  const [showModal, setShowModal] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  const handleNav = (to) => {
    onNavigate(to);
  };

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const handleConfirmLogout = () => {
    setShowCongrats(true);
    setTimeout(() => {
      setShowCongrats(false);
      setShowModal(false);
      onLogout();
    }, 1400);
  };

  const handleCancelLogout = () => {
    setShowModal(false);
    setShowCongrats(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.centerLogoBlock}>
          <Logo onClick={() => handleNav("home")} disabled={current === "home"} />
        </div>
        <button
          className={styles.logoutBtnNav}
          onClick={handleLogoutClick}
          aria-label="Cerrar sesión"
          style={{position: 'absolute', right: 16, top: 8, background: 'none', border: 'none', outline: 'none', color: '#fff', fontSize: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', width: '48px', height: '48px', margin: 0, padding: 0, transition: 'background 0.2s, color 0.2s'}}
          onMouseOver={e => { e.currentTarget.style.background = '#222'; e.currentTarget.style.color = '#ffe066'; }}
          onMouseOut={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#fff'; }}
        >
          <span style={{display:'flex',alignItems:'center',justifyContent:'center',width:'28px',height:'28px'}}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          </span>
        </button>
      </nav>
      {showModal && (
        <ConfirmLogoutModal
          onConfirm={handleConfirmLogout}
          onCancel={handleCancelLogout}
          showCongrats={showCongrats}
        />
      )}
    </>
  );
}
