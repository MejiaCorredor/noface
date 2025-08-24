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
      
      {isEmpty && (
        <div className={styles.emptyState}>
          No tienes prendas aún
        </div>
      )}

      {categorias.map(cat => {
        const items = grouped[cat.key];
        if (items.length === 0) return null;

        return (
          <div key={cat.key} className={styles.categorySection}>
            <h3 className={styles.categoryTitle}>{cat.label}</h3>
            
            {/* Grid de productos similar a tienda online */}
            <div className={styles.productsGrid}>
              {items.map((item) => (
                <div key={item._idx} className={styles.productCard}>
                  {/* Imagen del producto */}
                  <div className={styles.productImageContainer}>
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className={styles.productImage}
                        loading="lazy"
                      />
                    ) : (
                      <div className={styles.noImagePlaceholder}>
                        <span>👕</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Información del producto */}
                  <div className={styles.productInfo}>
                    <h4 className={styles.productName} title={item.name}>
                      {item.name}
                    </h4>
                    
                    {item.size && (
                      <div className={styles.productSize}>
                        Talla: {item.size}
                      </div>
                    )}
                    
                    <button
                      className={styles.removeButton}
                      onClick={() => setDeleteIndex(item._idx)}
                      type="button"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <button 
        className={styles.uploadButton} 
        onClick={() => fileInput.current.click()}
        type="button"
      >
        + Agregar Prenda
      </button>
      
      <input 
        type="file" 
        accept="image/*" 
        style={{display:'none'}} 
        ref={fileInput} 
        onChange={handleFileChange} 
      />

      {/* Modal para subir prenda */}
      {showModal && (
        <UploadModal 
          image={modalImg} 
          onClose={() => setShowModal(false)} 
          onSave={onUpload} 
        />
      )}

      {/* Modal para eliminar prenda */}
      {deleteIndex !== null && (
        <div className={styles.deleteModal}>
          <div className={styles.deleteModalContent}>
            <h3>¿Eliminar esta prenda?</h3>
            
            {clothes[deleteIndex]?.image && (
              <div className={styles.previewImageContainer}>
                <img 
                  src={clothes[deleteIndex].image} 
                  alt={clothes[deleteIndex].name} 
                  className={styles.previewImage}
                />
              </div>
            )}
            
            <div className={styles.deleteItemName}>
              {clothes[deleteIndex]?.name}
            </div>
            
            <div className={styles.modalButtons}>
              <button 
                className={styles.confirmDeleteButton}
                onClick={() => { 
                  onDelete(deleteIndex); 
                  setDeleteIndex(null); 
                }}
                type="button"
              >
                Sí, eliminar
              </button>
              <button 
                className={styles.cancelButton}
                onClick={() => setDeleteIndex(null)}
                type="button"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}