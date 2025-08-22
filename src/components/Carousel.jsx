import React from 'react';
import styles from './Carousel.module.css';

export default function Carousel({ items, type }) {
  const [index, setIndex] = React.useState(0);
  if (!items || items.length === 0) return null;

  const prev = () => setIndex(i => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIndex(i => (i === items.length - 1 ? 0 : i + 1));

  return (
    <div className={styles.carousel}>
      <button className={styles.arrow} onClick={prev}>&lt;</button>
      <div className={styles.item}>{items[index]}</div>
      <button className={styles.arrow} onClick={next}>&gt;</button>
      <div className={styles.type}>{type}</div>
    </div>
  );
}
