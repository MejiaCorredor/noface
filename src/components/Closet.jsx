


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
            <button
              className={styles.deleteBtn}
              onClick={() => setDeleteIndex(i)}
              style={{marginTop:'0.7rem'}}
            >Eliminar</button>
          </div>
        ))}
      </div>
      <button className={styles.uploadBtn} onClick={()=>fileInput.current.click()}>Subir Prenda</button>
      <input type="file" accept="image/*" style={{display:'none'}} ref={fileInput} onChange={handleFileChange} />
      {showModal && <UploadModal image={modalImg} onClose={()=>setShowModal(false)} onSave={onUpload} />}
      {deleteIndex !== null && (
        <div className={styles.deleteModal}>
          <div className={styles.deleteModalContent}>
            <h3>¿Eliminar esta prenda?</h3>
            {clothes[deleteIndex]?.image && <img src={clothes[deleteIndex].image} alt={clothes[deleteIndex].name} style={{maxWidth:70,maxHeight:70,marginBottom:10}} />}
            <div style={{marginBottom:12}}>{clothes[deleteIndex]?.name}</div>
            <button className={styles.uploadBtn} style={{background:'#c0392b',marginRight:10}} onClick={() => { onDelete(deleteIndex); setDeleteIndex(null); }}>Eliminar</button>
            <button className={styles.uploadBtn} onClick={() => setDeleteIndex(null)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}
