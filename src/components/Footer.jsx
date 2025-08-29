import React from "react";
import styles from "./Footer.module.scss";

export default function Footer({ current, onNavigate }) {
  return (
    <footer className={styles.footer}>
      <button
        className={current === "home" ? styles.active : ""}
        onClick={() => onNavigate("home")}
        aria-label="Inicio"
      >
        <span className={styles.icon}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5L12 4l9 5.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </span>
      </button>
      <button
        className={current === "closet" ? styles.active : ""}
        onClick={() => onNavigate("closet")}
        aria-label="Closet"
      >
        <span className={styles.icon}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
        </span>
      </button>
      <button
        className={current === "recs" ? styles.active : ""}
        onClick={() => onNavigate("recs")}
        aria-label="Recomendaciones"
      >
        <span className={styles.icon}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        </span>
      </button>
      <button
        className={current === "cart" ? styles.active : ""}
        onClick={() => onNavigate("cart")}
        aria-label="Carrito"
      >
        <span className={styles.icon}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        </span>
      </button>
    </footer>
  );
}
