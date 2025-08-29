import React, { useRef, useState } from 'react';
import styles from './Carousel.module.scss';

export default function Carousel({ items, currentIndex, onIndexChange }) {
  const [dragStartX, setDragStartX] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);

  if (!items || items.length === 0) return null;

  // Permitir control externo del índice si se provee, si no, usar interno
  const [internalIndex, setInternalIndex] = useState(0);
  const index = typeof currentIndex === 'number' ? currentIndex : internalIndex;
  const setIndex = onIndexChange || setInternalIndex;

  const clamp = (i) => (i + items.length) % items.length;

  const handleTouchStart = (e) => {
    setDragging(true);
    setDragStartX(e.touches ? e.touches[0].clientX : e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!dragging) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setDragOffset(x - dragStartX);
  };

  const handleTouchEnd = (e) => {
    if (!dragging) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const delta = endX - dragStartX;
    setDragging(false);
    setDragStartX(null);
    setDragOffset(0);
    if (Math.abs(delta) > 60) {
      if (delta < 0) setIndex(clamp(index + 1));
      else setIndex(clamp(index - 1));
    }
  };

  // Mostrar 3 imágenes: anterior, actual, siguiente
  const prevIdx = clamp(index - 1);
  const nextIdx = clamp(index + 1);

  return (
    <div
      className={styles.carousel}
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={() => { setDragging(false); setDragOffset(0); }}
      style={{ cursor: dragging ? 'grabbing' : 'grab' }}
    >
      <div className={styles.track} style={{ transform: `translateX(calc(-33.33% + ${dragOffset}px))`, transition: dragging ? 'none' : 'transform 0.25s cubic-bezier(.4,1.4,.6,1)' }}>
        <div className={styles.item + ' ' + styles.side}>{items[prevIdx]}</div>
        <div className={styles.item + ' ' + styles.center}>{items[index]}</div>
        <div className={styles.item + ' ' + styles.side}>{items[nextIdx]}</div>
      </div>
    </div>
  );
}
