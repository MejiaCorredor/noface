import React from "react";
import styles from "./Navbar.module.css";

export default function Logo({ onClick, disabled }) {
  return (
    <div
      className={styles.brand}
      onClick={!disabled ? onClick : undefined} // solo si no está deshabilitado
      style={{ 
        cursor: disabled ? "default" : "pointer", 
        opacity: disabled ? 0.7 : 1 
      }}
    >
      <span className={styles.logo}>~NOFACE~</span>
      <span className={styles.subtitle}>clothing</span>
    </div>
  );
}
