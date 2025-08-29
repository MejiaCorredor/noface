import React, { useEffect, useState } from "react";
import styles from "./Historial.module.scss";

// Utilidad para formatear la fecha
function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Historial() {
  const [historial, setHistorial] = useState([]);
  const [openIdx, setOpenIdx] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("historialOutfits");
    if (saved) setHistorial(JSON.parse(saved));
  }, []);

  return (
    <div className={styles.historialContainer}>
  <h2>Historial de Outfits</h2>
  <div className={styles.historialDivider}></div>
      {historial.length === 0 ? (
        <p style={{color:'#aaa'}}>Aún no has usado ningún outfit.</p>
      ) : (
        <ul className={styles.historialList}>
          {historial.map((item, idx) => {
            const abierto = openIdx === idx;
            return (
              <li key={idx} className={styles.historialItem}>
                <button
                  className={styles.historialBtn}
                  onClick={() => setOpenIdx(abierto ? null : idx)}
                  aria-expanded={abierto}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    color: '#f5c518',
                    fontFamily: "'Jersey 15', monospace",
                    fontSize: '1.1rem',
                    letterSpacing: '1px',
                    textAlign: 'left',
                    padding: '1.1rem 0',
                    cursor: 'pointer',
                    outline: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.7rem',
                    borderRadius: '12px',
                  }}
                >
                  <span style={{flex:1}}>{formatDate(item.date)}</span>
                  <span style={{fontSize:'1.2rem', opacity:0.7}}>{abierto ? '▲' : '▼'}</span>
                </button>
                <div className={abierto ? styles.categoryExpand : styles.categoryCollapse}>
                  <div className={styles.historialPrendas} style={{marginTop:'1.1rem',marginBottom:'0.7rem'}}>
                    {item.outfit.map((prenda, i) => (
                      <span key={i} className={styles.prendaTag}>
                        {prenda.image ? (
                          <img 
                            src={prenda.image} 
                            alt={prenda.name}
                            className={styles.prendaImg}
                            style={{width:38, height:38, objectFit:'cover', borderRadius:8, marginRight:8, background:'#232323'}}
                          />
                        ) : (
                          <span style={{marginRight:8}}>
                            {prenda.type === 'gorra' && '🧢'}
                            {prenda.type === 'camiseta' && '👕'}
                            {prenda.type === 'pantalon' && '👖'}
                            {prenda.type === 'zapatos' && '👞'}
                          </span>
                        )}
                        {prenda.name}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
