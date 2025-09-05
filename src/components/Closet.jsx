




import React, { useRef, useState, useEffect } from 'react';
import styles from './Closet.module.scss';
import UploadModal from './UploadModal';

export default function Closet({ clothes, onUpload, onDelete }) {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    document.documentElement.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = '';
      document.documentElement.style.overflowY = '';
    };
  }, []);
  const fileInput = useRef();
  const [modalImg, setModalImg] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [openCat, setOpenCat] = useState(null);

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

  // Agrupar las prendas por categoría
  const grouped = {};
  for (const cat of categorias) {
    grouped[cat.key] = clothes
      .map((c, i) => ({ ...c, _idx: i }))
      .filter(c => c.type === cat.key);
  }

  const isEmpty = clothes.length === 0;

  return (
    <div className={styles.closetContainer} style={{ background: '#181818', minHeight: '100vh', color: '#fff' }}>
      <h2 style={{
        color: '#f5c518',
        fontFamily: "'Jersey 15', monospace",
        fontSize: '2.1rem',
        textAlign: 'center',
        marginBottom: '2rem',
        letterSpacing: '1px'
      }}>Tu Closet</h2>
      {isEmpty && <div style={{ textAlign: 'center', opacity: 0.7, marginBottom: '2rem' }}>No tienes prendas aún</div>}
      {categorias.map(cat =>
        grouped[cat.key].length > 0 && (
          <div key={cat.key} className={styles.categoryContainer}>
            <button
              onClick={() => setOpenCat(openCat === cat.key ? null : cat.key)}
              style={{
                width: '100%',
                background: '#232323',
                border: '2px solid #f5c518',
                color: '#f5c518',
                fontFamily: "'Jersey 15', monospace",
                fontSize: '1.3rem',
                letterSpacing: '1px',
                textAlign: 'center',
                padding: '1.1rem 0',
                cursor: 'pointer',
                outline: 'none',
                borderRadius: '16px',
                marginBottom: openCat === cat.key ? '1.1rem' : 0,
                fontWeight: 'bold',
                boxShadow: '0 4px 24px 0 #0004',
                transition: 'background 0.2s'
              }}
            >
              {cat.label} <span style={{marginLeft:8}}>{openCat === cat.key ? '▲' : '▼'}</span>
            </button>
            {openCat === cat.key && (
              <div className={styles.clothesGrid} style={{marginBottom:'1.2rem'}}>
                {grouped[cat.key].map((c) => (
                  <div className={styles.clothItem} key={c._idx} style={{
                    background: '#2e2e2e',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px #0002',
                    color: '#fff'
                  }}>
                    {c.image && (
                      <img
                        src={c.image}
                        alt={c.name}
                        className={styles.closetImg}
                        style={{
                          width: 90,
                          height: 90,
                          objectFit: 'cover',
                          borderRadius: 10,
                          marginBottom: 8,
                          background: '#181818',
                          border: '2px solid #f5c518'
                        }}
                      />
                    )}
                    <div style={{ fontWeight: 600, marginBottom: 2 }}>{c.name}</div>
                    {c.size && <div style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: 2 }}>Talla: {c.size}</div>}
                    <button
                      className={styles.deleteBtn}
                      onClick={() => setDeleteIndex(c._idx)}
                      style={{
                        marginTop: '0.7rem',
                        background: '#c0392b',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 8,
                        padding: '0.4rem 1.1rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >Eliminar</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      )}
      <button
        className={styles.uploadBtn}
        onClick={() => fileInput.current.click()}
        style={{
          background: '#f5c518',
          color: '#181818',
          border: 'none',
          borderRadius: 8,
          padding: '0.5rem 1.3rem',
          fontWeight: 600,
          marginTop: '1.5rem',
          cursor: 'pointer'
        }}
      >Subir Prenda</button>
      <input type="file" accept="image/*" style={{ display: 'none' }} ref={fileInput} onChange={handleFileChange} />
      {showModal && <UploadModal image={modalImg} onClose={() => setShowModal(false)} onSave={onUpload} />}
      {deleteIndex !== null && (
        <div className={styles.deleteModal}>
          <div className={styles.deleteModalContent} style={{
            background: '#232323',
            color: '#fff',
            border: '2px solid #f5c518',
            borderRadius: 16
          }}>
            <h3 style={{ color: '#f5c518', marginBottom: 10 }}>¿Eliminar esta prenda?</h3>
            {clothes[deleteIndex]?.image && <img src={clothes[deleteIndex].image} alt={clothes[deleteIndex].name} className={styles.closetImg} style={{ marginBottom: 10, width: 90, height: 90, objectFit: 'cover', borderRadius: 10, border: '2px solid #f5c518' }} />}
            <div style={{ marginBottom: 12 }}>{clothes[deleteIndex]?.name}</div>
            <button
              className={styles.uploadBtn}
              style={{
                background: '#c0392b',
                color: '#fff',
                marginRight: 10,
                border: 'none',
                borderRadius: 8,
                padding: '0.4rem 1.1rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
              onClick={() => { onDelete(deleteIndex); setDeleteIndex(null); }}
            >Eliminar</button>
            <button
              className={styles.uploadBtn}
              style={{
                background: '#f5c518',
                color: '#181818',
                border: 'none',
                borderRadius: 8,
                padding: '0.4rem 1.1rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
              onClick={() => setDeleteIndex(null)}
            >Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );

}
