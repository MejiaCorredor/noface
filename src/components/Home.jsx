import React from 'react';
import styles from './Home.module.css';


export default function Home({ onGoToCloset, onGoToRecs }) {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.logo}>
        <span className={styles.principalText}>~NOFACE~</span>
        <span className={styles.secondaryText}>clothing</span>
      </div>
      <div className={styles.actionsSection}>
        <button className={styles.actionBtn} onClick={onGoToCloset}>Ver Closet</button>
        <button className={styles.actionBtn} onClick={onGoToRecs}>Recomendaciones</button>
      </div>
      <div className={styles.featured}>
        <h3>Categorías</h3>
        <div className={styles.categoryGrid}>
          <div className={styles.categoryCard}>
            <span className={styles.emoji} role="img" aria-label="Camiseta">👕</span>
            <span>Camiseta</span>
          </div>
          <div className={styles.categoryCard}>
            <span className={styles.emoji} role="img" aria-label="Pantalón">👖</span>
            <span>Pantalón</span>
          </div>
          <div className={styles.categoryCard}>
            <span className={styles.emoji} role="img" aria-label="Zapatos">👟</span>
            <span>Zapatos</span>
          </div>
          <div className={styles.categoryCard}>
            <span className={styles.emoji} role="img" aria-label="Gorra">🧢</span>
            <span>Gorra</span>
          </div>
        </div>
      </div>
    </div>
  );
}
