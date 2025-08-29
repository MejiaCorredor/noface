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

  useEffect(() => {
    const saved = localStorage.getItem("historialOutfits");
    if (saved) setHistorial(JSON.parse(saved));
  }, []);

  return (
    <div className={styles.historialContainer}>
      <h2>Historial de Outfits</h2>
      {historial.length === 0 ? (
        <p style={{color:'#aaa'}}>Aún no has usado ningún outfit.</p>
      ) : (
        <ul className={styles.historialList}>
          {historial.map((item, idx) => (
            <li key={idx} className={styles.historialItem}>
              <div className={styles.historialDate}>{formatDate(item.date)}</div>
              <div className={styles.historialPrendas}>
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
