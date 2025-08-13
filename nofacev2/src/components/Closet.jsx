import React from 'react';
import styles from './Closet.module.css';

export default function Closet() {
  return (
    <div className={styles.closetContainer}>
      <h2>Tu Closet</h2>
      <div className={styles.clothesGrid}>
        {/* Aquí irán las prendas del usuario */}
        <div className={styles.clothItem}>Camiseta</div>
        <div className={styles.clothItem}>Pantalón</div>
        <div className={styles.clothItem}>Zapatos</div>
        <div className={styles.clothItem}>Gorra</div>
      </div>
      <button className={styles.uploadBtn}>Subir Prenda</button>
    </div>
  );
}
