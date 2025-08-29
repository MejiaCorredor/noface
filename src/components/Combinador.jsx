import React, { useState } from 'react';
import Carousel from './Carousel';
import ConfirmarCombinacion from './ConfirmarCombinacion';
import styles from './Combinador.module.scss';

const Combinador = ({ clothes, onUse }) => {
  const camisetas = clothes.filter(c => c.type === 'camiseta');
  const pantalones = clothes.filter(c => c.type === 'pantalon');
  const zapatos = clothes.filter(c => c.type === 'zapatos');
  const gorras = clothes.filter(c => c.type === 'gorra');

  const [iC, setIC] = useState(0);
  const [iP, setIP] = useState(0);
  const [iZ, setIZ] = useState(0);
  const [iG, setIG] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedItems, setSelectedItems] = useState({
    gorra: false, // Por defecto sin gorra
    camiseta: true,
    pantalon: true,
    zapatos: true
  });

  const handleCheckboxChange = (type) => {
    setSelectedItems(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const seleccionActual = [
    selectedItems.gorra ? gorras[iG] : null,
    selectedItems.camiseta ? camisetas[iC] : null,
    selectedItems.pantalon ? pantalones[iP] : null,
    selectedItems.zapatos ? zapatos[iZ] : null
  ].filter(p => p);

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
      <h2 style={{color:'#fff',fontFamily:"'Jersey 15', monospace",fontSize:'2.2rem',marginBottom:'2.2rem',letterSpacing:'1px',textAlign:'center'}}>
        Combina tu outfit
      </h2>
      
      <div className={styles.carousels}>
        <div className={styles.carouselGroup}>
          <Carousel
            items={[
              <div key="no-hat" style={{width:200,height:200,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:24,background:'#232323',color:'#fff',fontSize:'2.5rem',flexDirection:'column'}}>
                <span role="img" aria-label="Sin gorra" style={{fontSize:'3.5rem',marginBottom:'0.5rem'}}>🚫</span>
                <span style={{fontSize:'1.1rem'}}>Sin gorra</span>
              </div>,
              ...gorras.map((c, idx) =>
                c.image
                  ? <img key={idx} src={c.image} alt={c.name} style={{width:200,height:200,objectFit:'cover',borderRadius:24,background:'#232323'}} />
                  : <span key={idx} style={{color:'#fff',fontSize:'2rem'}}>{c.name}</span>
              )
            ]}
            currentIndex={iG}
            onIndexChange={setIG}
          />
        </div>

        {/* Camisetas */}
        <div className={styles.carouselGroup}>
          {camisetas.length > 0 && (
            <Carousel 
              items={camisetas.map(c => 
                c.image 
                  ? <img src={c.image} alt={c.name} style={{width:200,height:200,objectFit:'cover',borderRadius:24,background:'#232323'}} /> 
                  : <span style={{color:'#fff',fontSize:'2rem'}}>{c.name}</span>
              )}
              currentIndex={iC}
              onIndexChange={setIC}
            />
          )}
        </div>

        {/* Pantalones */}
        <div className={styles.carouselGroup}>
          {pantalones.length > 0 && (
            <Carousel 
              items={pantalones.map(c => 
                c.image 
                  ? <img src={c.image} alt={c.name} style={{width:200,height:200,objectFit:'cover',borderRadius:24,background:'#232323'}} /> 
                  : <span style={{color:'#fff',fontSize:'2rem'}}>{c.name}</span>
              )}
              currentIndex={iP}
              onIndexChange={setIP}
            />
          )}
        </div>

        {/* Zapatos */}
        <div className={styles.carouselGroup}>
          {zapatos.length > 0 && (
            <Carousel 
              items={zapatos.map(c => 
                c.image 
                  ? <img src={c.image} alt={c.name} style={{width:200,height:200,objectFit:'cover',borderRadius:24,background:'#232323'}} /> 
                  : <span style={{color:'#fff',fontSize:'2rem'}}>{c.name}</span>
              )}
              currentIndex={iZ}
              onIndexChange={setIZ}
            />
          )}
        </div>
      </div>
      <button className={styles.usarBtn} style={{background:'#f5c518',color:'#181818',fontWeight:600,border:'none',borderRadius:8,padding:'0.7rem 2.2rem',fontSize:'1.1rem',marginTop:'2rem',letterSpacing:'1px',cursor:'pointer'}} onClick={handleUsar}>Usar esta combinación</button>
      {showConfirm && (
        <ConfirmarCombinacion
          prendas={seleccionActual}
          onConfirm={handleConfirm}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
}

export default Combinador;
