
import React, { useRef } from 'react';
import styles from './Closet.module.css';

export default function Closet({ clothes, onUpload }) {
  const fileInput = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      onUpload({
        name: file.name,
        type: 'custom',
        image: ev.target.result,
        lastUsed: Date.now(),
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.closetContainer}>
      <h2>Tu Closet</h2>
      <div className={styles.clothesGrid}>
        {clothes.length === 0 && <div style={{gridColumn:'1/3',textAlign:'center',opacity:0.7}}>No tienes prendas aún</div>}
        {clothes.map((c, i) => (
          <div className={styles.clothItem} key={i}>
            {c.image && <img src={c.image} alt={c.name} style={{maxWidth:60,maxHeight:60,display:'block',margin:'0 auto 0.5rem'}} />}
            <div>{c.name}</div>
            {c.size && <div style={{fontSize:'0.9rem',opacity:0.7}}>Talla: {c.size}</div>}
          </div>
        ))}
      </div>
      <button className={styles.uploadBtn} onClick={()=>fileInput.current.click()}>Subir Prenda</button>
      <input type="file" accept="image/*" style={{display:'none'}} ref={fileInput} onChange={handleFileChange} />
    </div>
  );
}
