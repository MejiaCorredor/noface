import React, { useState } from 'react';
import styles from './Recomendaciones.module.css';

const CLIMA_OPCIONES = [
  { value: 'calido', label: 'Cálido' },
  { value: 'frio', label: 'Frío' },
];

export default function Recomendaciones({ clothes }) {
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

  return (
    <div className={styles.recsContainer}>
      <h2>Recomendaciones</h2>
      <div className={styles.climaSel}>
        <label htmlFor="clima">Selecciona el clima:</label>
        <select id="clima" value={clima} onChange={e => setClima(e.target.value)}>
          {CLIMA_OPCIONES.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div className={styles.recsList}>
        <h3>Prendas recomendadas:</h3>
        <ul>
          {getRecomendadas().map((c, i) => (
            <li key={i}>
              {c.image && <img src={c.image} alt={c.name} style={{maxWidth:40,maxHeight:40,verticalAlign:'middle',marginRight:8}} />}
              {c.name} {c.size && <span style={{fontSize:'0.9rem',opacity:0.7}}>(Talla: {c.size})</span>}
            </li>
          ))}
        </ul>
      </div>
      {menosUsada && (
        <div className={styles.menosUsada}>
          <h3>Prenda menos usada:</h3>
          <div>
            {menosUsada.image && <img src={menosUsada.image} alt={menosUsada.name} style={{maxWidth:40,maxHeight:40,verticalAlign:'middle',marginRight:8}} />}
            {menosUsada.name} {menosUsada.size && <span style={{fontSize:'0.9rem',opacity:0.7}}>(Talla: {menosUsada.size})</span>}
          </div>
        </div>
      )}
    </div>
  );
}
