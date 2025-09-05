import React from 'react';
import styles from './ConfirmarCombinacion.module.scss';

export default function ConfirmarCombinacion({ prendas, onConfirm, onCancel }) {
  // Ordenar prendas por tipo en orden específico
  const ordenTipos = ['gorra', 'camiseta', 'pantalon', 'zapatos'];
  const prendasOrdenadas = prendas.sort((a, b) => 
    ordenTipos.indexOf(a.type) - ordenTipos.indexOf(b.type)
  );

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h3>Confirmar Combinación</h3>
        
        <div className={styles.prendasList}>
          {prendasOrdenadas.map((prenda, i) => (
            <div key={i} className={styles.prendaItem}>
              <div className={styles.prendaType}>
                {prenda.type === 'camiseta' && '👕'}
                {prenda.type === 'pantalon' && '👖'}
                {prenda.type === 'zapatos' && '�'}
                {prenda.type === 'gorra' && '🧢'}
                <span>{prenda.type.charAt(0).toUpperCase() + prenda.type.slice(1)}</span>
              </div>
              <div className={styles.prendaContent}>
                {prenda.type === 'gorra' && prenda.name === 'Sin gorra' ? (
                  <div className={styles.placeholder}>
                    🚫 Sin gorra
                  </div>
                ) : prenda.image ? (
                  <img 
                    src={prenda.image} 
                    alt={prenda.name}
                    className={styles.prendaImage} 
                  />
                ) : (
                  <div className={styles.placeholder}>
                    {prenda.name}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className={styles.message}>
          ¿Deseas usar esta combinación?
        </p>
        
        <div className={styles.buttons}>
          <button 
            className={styles.cancelBtn}
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button 
            className={styles.confirmBtn}
            onClick={onConfirm}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}