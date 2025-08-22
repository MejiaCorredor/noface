


import React, { useRef, useState } from 'react';
import styles from './Closet.module.css';
import UploadModal from './UploadModal';

export default function Closet({ clothes, onUpload, onDelete }) {


  const fileInput = useRef();
  const [modalImg, setModalImg] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setModalImg(ev.target.result);
      setShowModal(true);
    };
    reader.readAsDataURL(file);
  };

  // Agrupar por tipo
  const categorias = [
    { key: 'camiseta', label: 'Camisetas' },
    { key: 'pantalon', label: 'Pantalones' },
    { key: 'zapatos', label: 'Zapatos' },
    { key: 'gorra', label: 'Gorras' },
  ];

  const grouped = {};
  for (const cat of categorias) {
    grouped[cat.key] = clothes
      .map((c, i) => ({ ...c, _idx: i }))
      .filter(c => c.type === cat.key);
  }

  const isEmpty = clothes.length === 0;

  return (
    <div className={styles.closetContainer}>
      <h2>Tu Closet</h2>
      {isEmpty && <div style={{textAlign:'center',opacity:0.7,marginBottom:'2rem'}}>No tienes prendas aún</div>}
      {categorias.map(cat =>
        grouped[cat.key].length > 0 && (
          <div key={cat.key} style={{width:'100%', marginBottom:'2.2rem'}}>
            <h3 style={{textAlign:'left',color:'#f5c518',margin:'0 0 1.1rem 0',fontFamily:"'Jersey 15', monospace",fontSize:'1.5rem',letterSpacing:'1px'}}>{cat.label}</h3>
            <div className={styles.clothesGrid}>
              {grouped[cat.key].map((c) => (
                <div className={styles.clothItem} key={c._idx}>
                  {c.image && <img src={c.image} alt={c.name} className={styles.closetImg} />}
                  <div>{c.name}</div>
                  {c.size && <div style={{fontSize:'0.9rem',opacity:0.7}}>Talla: {c.size}</div>}
                  <button
                    className={styles.deleteBtn}
                    onClick={() => setDeleteIndex(c._idx)}
                    style={{marginTop:'0.7rem'}}
                  >Eliminar</button>
                </div>
              ))}
            </div>
          </div>
        )
      )}
      <button className={styles.uploadBtn} onClick={()=>fileInput.current.click()}>Subir Prenda</button>
      <input type="file" accept="image/*" style={{display:'none'}} ref={fileInput} onChange={handleFileChange} />
      {showModal && <UploadModal image={modalImg} onClose={()=>setShowModal(false)} onSave={onUpload} />}
      {deleteIndex !== null && (
        <div className={styles.deleteModal}>
          <div className={styles.deleteModalContent}>
            <h3>¿Eliminar esta prenda?</h3>
            {clothes[deleteIndex]?.image && <img src={clothes[deleteIndex].image} alt={clothes[deleteIndex].name} className={styles.closetImg} style={{marginBottom:10}} />}
            <div style={{marginBottom:12}}>{clothes[deleteIndex]?.name}</div>
            <button className={styles.uploadBtn} style={{background:'#c0392b',marginRight:10}} onClick={() => { onDelete(deleteIndex); setDeleteIndex(null); }}>Eliminar</button>
            <button className={styles.uploadBtn} onClick={() => setDeleteIndex(null)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}
