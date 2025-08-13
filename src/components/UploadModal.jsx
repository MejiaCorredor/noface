import React, { useState, useRef } from 'react';
import styles from './UploadModal.module.css';

const tipos = [
  { value: 'camiseta', label: 'Camiseta' },
  { value: 'pantalon', label: 'Pantalón' },
  { value: 'zapatos', label: 'Zapatos' },
  { value: 'gorra', label: 'Gorra' },
];

export default function UploadModal({ onClose, onSave, image }) {
  const [tipo, setTipo] = useState('camiseta');
  const [talla, setTalla] = useState('');
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre) return alert('Ponle un nombre a la prenda');
    if ((tipo === 'camiseta' || tipo === 'pantalon' || tipo === 'zapatos') && !talla) return alert('Especifica la talla');
    onSave({
      name: nombre,
      type: tipo,
      size: talla,
      image,
      lastUsed: Date.now(),
    });
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>Subir Prenda</h3>
        {image && <img src={image} alt="preview" className={styles.preview} />}
        <form onSubmit={handleSubmit}>
          <label>Nombre:
            <input value={nombre} onChange={e => setNombre(e.target.value)} required />
          </label>
          <label>Tipo:
            <select value={tipo} onChange={e => setTipo(e.target.value)}>
              {tipos.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
          </label>
          {(tipo === 'camiseta' || tipo === 'pantalon' || tipo === 'zapatos') && (
            <label>Talla:
              <input value={talla} onChange={e => setTalla(e.target.value)} required />
            </label>
          )}
          <div className={styles.actions}>
            <button type="button" onClick={onClose}>Cancelar</button>
            <button type="submit">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
