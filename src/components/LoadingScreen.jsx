import React from 'react';
import styles from './LoadingScreen.module.scss';

const LoadingScreen = () => (
  <div className={styles.overlay}>
    <div className={styles.logoContainer}>
      <span className={styles.logoText}>~NOFACE~</span>
    </div>
  </div>
);

export default LoadingScreen;
