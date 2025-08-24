import React from 'react';
import Carousel from './Carousel';
import styles from './Combinador.module.css';

export default function Combinador({ clothes, onUse }) {
  // Separar por tipo
  const camisetas = clothes.filter(c => c.type === 'camiseta');
  const pantalones = clothes.filter(c => c.type === 'pantalon');
  const zapatos = clothes.filter(c => c.type === 'zapatos');
  const gorras = clothes.filter(c => c.type === 'gorra');

  // Estado de selección
  const [iC, setIC] = React.useState(0);
  const [iP, setIP] = React.useState(0);
  const [iZ, setIZ] = React.useState(0);
  const [iG, setIG] = React.useState(0);

  const handleUsar = () => {
    // Marcar como usado
    [camisetas[iC], pantalones[iP], zapatos[iZ], gorras[iG]].forEach(prenda => {
      if (prenda) onUse(prenda);
    });
    alert('¡Combinación marcada como usada!');
  };

  return (
    <div className={styles.combinadorContainer}>
      <h2>Combina tu outfit</h2>
      <div className={styles.carousels}>
        <Carousel items={camisetas.map(c => c.image ? <img src={c.image} alt={c.name} style={{maxWidth:80,maxHeight:80}} /> : c.name)} type="Camiseta" index={iC} setIndex={setIC} />
        <Carousel items={pantalones.map(c => c.image ? <img src={c.image} alt={c.name} style={{maxWidth:80,maxHeight:80}} /> : c.name)} type="Pantalón" index={iP} setIndex={setIP} />
        <Carousel items={zapatos.map(c => c.image ? <img src={c.image} alt={c.name} style={{maxWidth:80,maxHeight:80}} /> : c.name)} type="Zapatos" index={iZ} setIndex={setIZ} />
        <Carousel items={gorras.map(c => c.image ? <img src={c.image} alt={c.name} style={{maxWidth:80,maxHeight:80}} /> : c.name)} type="Gorra" index={iG} setIndex={setIG} />
      </div>
      <button className={styles.usarBtn} onClick={handleUsar}>Usar esta combinación</button>
    </div>
  );
}
