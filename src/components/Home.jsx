import React from 'react';
import styles from './Home.module.css';


export default function Home({ onGoToCloset, onGoToRecs }) {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.logo}>
        <span className={styles.principalText}>~NOFACE~</span>
        <span className={styles.secondaryText}>clothing</span>
      </div>
      <div className={styles.categories}>
        <button onClick={onGoToCloset}>CLOSET</button>
        <button onClick={onGoToRecs}>RECOMENDACIONES</button>
      </div>
      <div className={styles.featured}>
        <h3>Categorías</h3>
        <div className={styles.items}>
          <div className={styles.item}>Camiseta</div>
          <div className={styles.item}>Pantalón</div>
          <div className={styles.item}>Zapatos</div>
          <div className={styles.item}>Gorra</div>
        </div>
      </div>
    </div>
  );
}
