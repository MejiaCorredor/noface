import React, { useState, useEffect } from 'react';
import styles from './Recomendaciones.module.scss';

const CLIMA_OPCIONES = [
  { value: 'calido', label: 'Cálido' },
  { value: 'frio', label: 'Frío' },
];

export default function Recomendaciones({ clothes }) {
  useEffect(() => {
    document.body.style.overflowY = 'auto';
    return () => {
      document.body.style.overflowY = '';
    };
  }, []);
  const [clima, setClima] = useState('calido');

  // Filtrar prendas recomendadas según clima
  const getRecomendadas = () => {
    if (clima === 'calido') {
      return clothes.filter(c => c.type !== 'gorra');
    } else {
      return clothes.filter(c => c.type !== 'camiseta');
    }
  };

  // Prenda menos usada
  const menosUsada = clothes.reduce((min, c) =>
    (!min || c.lastUsed < min.lastUsed) ? c : min, null
  );

  const recomendadas = getRecomendadas();

  return (
    <div className={styles.recsContainer}>
      <div className={styles.header}>
        <h2>Recomendaciones de Outfit</h2>
        <p className={styles.subtitle}>Encuentra la combinación perfecta para hoy</p>
      </div>

      <div className={styles.climaCard}>
        <div className={styles.climaSelectorRow} style={{ justifyContent: 'center', display: 'flex' }}>
          <span className={styles.climaIcon}>{clima === 'calido' ? '\u2600\ufe0f' : '\u2744\ufe0f'}</span>
          <div className={styles.climaSelector}>
                <label htmlFor="clima">¿Cómo está el clima?</label>
            <select 
              id="clima" 
              value={clima} 
              onChange={e => setClima(e.target.value)}
              className={styles.climaSelect}
            >
              {CLIMA_OPCIONES.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className={styles.recommendationsGrid}>
        <div className={styles.recsCard}>
          {recomendadas.length > 0 ? (
            <div className={styles.clothesList}>
              {recomendadas.map((c, i) => (
                <div key={i} className={styles.clotheItem}>
                  <div className={styles.clotheImage}>
                    {c.image ? (
                      <img src={c.image} alt={c.name} />
                    ) : (
                      <div className={styles.placeholderImage}>👕</div>
                    )}
                  </div>
                  <div className={styles.clotheInfo}>
                    <span className={styles.clotheName}>{c.name}</span>
                    {c.size && (
                      <span className={styles.clotheSize}>Talla {c.size}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>No hay prendas disponibles para este clima</p>
            </div>
          )}
        </div>

        {menosUsada && (
          <div className={styles.specialCard}>
            <div className={styles.specialHeader}>
              <div className={styles.specialIcon}>⭐</div>
              <h3>¡Redescubre tu estilo! Prueba algo diferente hoy</h3>
            </div>
            <div className={styles.specialContent}>
              <div className={styles.clotheItem}>
                <div className={styles.clotheImage}>
                  {menosUsada.image ? (
                    <img src={menosUsada.image} alt={menosUsada.name} />
                  ) : (
                    <div className={styles.placeholderImage}>👕</div>
                  )}
                </div>
                <div className={styles.clotheInfo}>
                  <span className={styles.clotheName}>{menosUsada.name}</span>
                  {menosUsada.size && (
                    <span className={styles.clotheSize}>Talla {menosUsada.size}</span>
                  )}
                  <span className={styles.specialNote}>¿Te animas a usar esta prenda y sorprender?</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}