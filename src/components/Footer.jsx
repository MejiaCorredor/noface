import React from "react";
import styles from "./Footer.module.css";

export default function Footer({ onNavigate, current }) {
  return (
    <footer className={styles.footer}>
      <button
        className={current === "home" ? styles.active : ""}
        onClick={() => onNavigate("home")}
        aria-label="Inicio"
      >
        <span className={styles.icon}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12L12 3l9 9"/><path d="M9 21V9h6v12"/></svg>
        </span>
      </button>
      <button
        className={current === "closet" ? styles.active : ""}
        onClick={() => onNavigate("closet")}
        aria-label="Closet"
      >
        <span className={styles.icon}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M16 10V6a4 4 0 0 0-8 0v4"/></svg>
        </span>
      </button>
      <button
        className={current === "recs" ? styles.active : ""}
        onClick={() => onNavigate("recs")}
        aria-label="Recomendaciones"
      >
        <span className={styles.icon}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
        </span>
      </button>
      <button
        className={styles.cartBtn}
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
