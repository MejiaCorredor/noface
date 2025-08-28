import React, { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import styles from "./Navbar.module.css";
import Logo from "./Logo";

export default function Navbar({ onNavigate, current, onLogout }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showBye, setShowBye] = useState(false);

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
          onConfirm={() => {
            setShowConfirm(false);
            setShowBye(true);
            setTimeout(() => {
              setShowBye(false);
              onLogout();
            }, 1600);
          }}
          onCancel={() => setShowConfirm(false)}
        />
      )}
      {showBye && (
        <div style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(0,0,0,0.18)'}}>
          <div style={{background:'#181818',borderRadius:16,padding:'2.5rem 2.5rem',boxShadow:'0 4px 32px #0008',textAlign:'center',color:'#f5c518',fontFamily:'Jersey 15, monospace',fontSize:'2rem'}}>
            <span style={{fontSize:'4rem',display:'block'}}>👋</span>
            ¡Que tengas un feliz día!
          </div>
        </div>
      )}
    </>
  );
}
