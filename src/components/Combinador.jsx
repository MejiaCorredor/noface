
import React, { useState } from 'react';
import Carousel from './Carousel';
import ConfirmModal from './ConfirmModal';
import styles from './Combinador.module.css';

export default function Combinador({ clothes, onUse }) {
  // Separar por tipo
  const camisetas = clothes.filter(c => c.type === 'camiseta');
  const pantalones = clothes.filter(c => c.type === 'pantalon');
  const zapatos = clothes.filter(c => c.type === 'zapatos');
  const gorras = clothes.filter(c => c.type === 'gorra');


  // Estado de selección
  const [iC, setIC] = useState(0);
  const [iP, setIP] = useState(0);
  const [iZ, setIZ] = useState(0);
  const [iG, setIG] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);


  // Agregar opción de 'Sin gorra' al inicio
  const gorrasConNinguna = [{ name: 'Sin gorra', type: 'gorra', image: null, size: null }, ...gorras];
  const seleccionActual = [gorrasConNinguna[iG], camisetas[iC], pantalones[iP], zapatos[iZ]]
    .filter(p => !(p && p.type === 'gorra' && p.name === 'Sin gorra'));

  const handleUsar = () => {
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    seleccionActual.forEach(prenda => {
      if (prenda) onUse(prenda);
    });
    setShowConfirm(false);
  };

  return (
    <div className={styles.combinadorContainer}>
      <h2 style={{color:'#fff',fontFamily:"'Jersey 15', monospace",fontSize:'2.2rem',marginBottom:'2.2rem',letterSpacing:'1px',textAlign:'center'}}>Combina tu outfit</h2>
      <div className={styles.carousels}>
        {/* Gorras */}
        <div className={styles.carouselGroup}>
          <div className={styles.carouselLabel}>Gorra</div>
          <Carousel
            items={gorrasConNinguna.map(c =>
              c.name === 'Sin gorra'
                ? <span style={{color:'#fff',fontStyle:'italic',fontSize:'1.1rem',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    <span style={{fontSize:'2.2rem',marginBottom:4}}>🚫</span>
                    Sin gorra
                  </span>
                : (c.image ? <img src={c.image} alt={c.name} style={{width:140,height:140,objectFit:'cover',borderRadius:16,background:'#232323',border:'2px solid #f5c518'}} /> : <span style={{color:'#fff'}}>{c.name}</span>)
            )}
          />
        </div>
        {/* Camisetas */}
        <div className={styles.carouselGroup}>
          <div className={styles.carouselLabel}>Camiseta</div>
          <Carousel items={camisetas.map(c => c.image ? <img src={c.image} alt={c.name} style={{width:140,height:140,objectFit:'cover',borderRadius:16,background:'#232323',border:'2px solid #f5c518'}} /> : <span style={{color:'#fff'}}>{c.name}</span>)} />
        </div>
        {/* Pantalones */}
        <div className={styles.carouselGroup}>
          <div className={styles.carouselLabel}>Pantalón</div>
          <Carousel items={pantalones.map(c => c.image ? <img src={c.image} alt={c.name} style={{width:140,height:140,objectFit:'cover',borderRadius:16,background:'#232323',border:'2px solid #f5c518'}} /> : <span style={{color:'#fff'}}>{c.name}</span>)} />
        </div>
        {/* Zapatos */}
        <div className={styles.carouselGroup}>
          <div className={styles.carouselLabel}>Zapato</div>
          <Carousel items={zapatos.map(c => c.image ? <img src={c.image} alt={c.name} style={{width:140,height:140,objectFit:'cover',borderRadius:16,background:'#232323',border:'2px solid #f5c518'}} /> : <span style={{color:'#fff'}}>{c.name}</span>)} />
        </div>
      </div>
      <button className={styles.usarBtn} style={{background:'#f5c518',color:'#181818',fontWeight:600,border:'none',borderRadius:8,padding:'0.7rem 2.2rem',fontSize:'1.1rem',marginTop:'2rem',letterSpacing:'1px',cursor:'pointer'}} onClick={handleUsar}>Usar esta combinación</button>
      {showConfirm && (
        <ConfirmModal
          prendas={seleccionActual}
          onConfirm={handleConfirm}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
}
