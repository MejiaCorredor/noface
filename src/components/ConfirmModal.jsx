import React from 'react';
import styles from './ConfirmModal.module.css';

export default function ConfirmModal({ prendas, onConfirm, onCancel, message }) {
  const [liked, setLiked] = React.useState(false);
  const [showCongrats, setShowCongrats] = React.useState(false);

  const handleConfirm = () => {
    setShowCongrats(true);
    setTimeout(() => {
      setShowCongrats(false);
      onConfirm();
    }, 1400);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {showCongrats && (
          <div className={styles.congratsAnim}>
            <span role="img" aria-label="felicitación" style={{fontSize:'4.5rem',display:'block'}}>🎉</span>
            <div className={styles.congratsText}>¡Excelente outfit!<br />Que tengas un feliz día</div>
          </div>
        )}
        {!showCongrats && <>
          <h3>{message || '¿Confirmar combinación?'}</h3>
          {prendas && prendas.length > 0 && (
            <div className={styles.prendasList}>
              {prendas.map((p, i) => (
                <div key={i} className={styles.prendaItem}>
                  {p.image && <img src={p.image} alt={p.name} className={styles.img} />}
                  <div>
                    <strong>{p.name}</strong>
                    <div style={{fontSize:'0.95rem',opacity:0.8}}>{p.type.charAt(0).toUpperCase() + p.type.slice(1)}{p.size ? ` - Talla: ${p.size}` : ''}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className={styles.actions}>
            <button onClick={onCancel} className={styles.cancelBtn}>Cancelar</button>
            <button onClick={handleConfirm} className={styles.confirmBtn}>Confirmar</button>
          </div>
        </>}
      </div>
    </div>
  );
}
