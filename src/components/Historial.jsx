import React, { useEffect, useState } from "react";
import styles from "./Historial.module.scss";

// Utilidad para formatear la fecha
function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString("es-ES", {
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
                <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
                  <span className={styles.historialDate}>{formatDate(item.date)}</span>
                </div>
                <button
                  className={styles.historialBtn}
                  onClick={() => setOpenIdx(abierto ? null : idx)}
                  aria-expanded={abierto}
                >
                  <span style={{flex:1}}>Ver outfit</span>
                  <span style={{fontSize:'1.2rem', opacity:0.7}}>{abierto ? '▲' : '▼'}</span>
                </button>
                <div className={abierto ? styles.categoryExpand : styles.categoryCollapse}>
                  <div className={styles.historialPrendas}>
                    {item.outfit.map((prenda, i) => (
                      <span key={i} className={styles.prendaTag}>
                        {prenda.image ? (
                          <img 
                            src={prenda.image} 
                            alt={prenda.name}
                            className={styles.prendaImg}
                          />
                        ) : (
                          <span style={{fontSize:'2rem', marginBottom:'0.3rem'}}>
                            {prenda.type === 'gorra' && '🧢'}
                            {prenda.type === 'camiseta' && '👕'}
                            {prenda.type === 'pantalon' && '👖'}
                            {prenda.type === 'zapatos' && '👞'}
                          </span>
                        )}
                        <span>{prenda.name}</span>
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
