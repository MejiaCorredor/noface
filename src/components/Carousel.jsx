import React from 'react';
import styles from './Carousel.module.scss';

export default function Carousel({ items }) {
  const [index, setIndex] = React.useState(0);
  if (!items || items.length === 0) return null;

  const prev = () => setIndex(i => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIndex(i => (i === items.length - 1 ? 0 : i + 1));

  return (
    <div className={styles.carousel}>
      <button className={styles.arrow} onClick={prev} aria-label="Anterior">&#60;</button>
      <div className={styles.item}>{items[index]}</div>
      <button className={styles.arrow} onClick={next} aria-label="Siguiente">&#62;</button>
    </div>
  );
}
