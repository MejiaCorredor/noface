import React, { useState } from 'react';
import styles from './Home.module.scss';
import LoadingScreen from './LoadingScreen';

export default function Home({ onGoToCloset, onGoToRecs }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoToCloset = () => {
    setIsLoading(true);
    setTimeout(() => {
      onGoToCloset();
    }, 800);
  };

  const handleGoToRecs = () => {
    setIsLoading(true);
    setTimeout(() => {
      onGoToRecs();
    }, 800);
  };

  return (
    <div className={styles.homeContainer}>
      {isLoading && <LoadingScreen />}
      
      {/* Hero */}
      <div className={styles.hero}>
        <h2>👋 Bienvenido a tu espacio NOFACE</h2>
        <p>Organiza tu closet, descubre combinaciones y encuentra tu estilo.</p>
      </div>

      {/* Acciones principales */}
      <div className={styles.quickActions}>
        <div className={styles.actionCard} onClick={handleGoToCloset}>
          <span className={styles.actionIcon}>👕</span>
          <h3>Closet</h3>
          <p>Explora tus prendas guardadas</p>
        </div>
        <div className={styles.actionCard} onClick={handleGoToRecs}>
          <span className={styles.actionIcon}>✨</span>
          <h3>Recomendaciones</h3>
          <p>Descubre nuevas combinaciones</p>
        </div>
      </div>

      {/* Categorías */}
      <div className={styles.featured}>
        <h3>Categorías</h3>
        <div className={styles.categoryGrid}>
          <div className={styles.categoryCard}>
            
            <span>Camisetas</span>
          </div>
          <div className={styles.categoryCard}>
           
            <span>Pantalones</span>
          </div>
          <div className={styles.categoryCard}>
            
            <span>Zapatos</span>
          </div>
          <div className={styles.categoryCard}>
            
            <span>Accesorios</span>
          </div>
        </div>
      </div>

      {/* Inspiración del día */}
      <div className={styles.tipCard}>
        <h4>💡 Tip de estilo</h4>
        <p>Combina tonos neutros con un accesorio llamativo para destacar sin perder elegancia.</p>
      </div>

    </div>
  );
}
