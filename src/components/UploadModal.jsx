
import React, { useState } from 'react';
import styles from './UploadModal.module.css';

const tipos = [
  { value: 'camiseta', label: 'Camiseta' },
  { value: 'pantalon', label: 'Pantalón' },
  { value: 'zapatos', label: 'Zapatos' },
  { value: 'gorra', label: 'Gorra' },
];

const tallasCamiseta = ['XS','S','M','L','XL','XXL'];
const tallasPantalon = ['28','30','32','34','36','38','40'];
const tallasZapatos = ['23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44'];


export default function UploadModal({ onClose, onSave, image }) {
  const [tipo, setTipo] = useState('camiseta');
  const [talla, setTalla] = useState('');
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre) {
      setError('Ponle un nombre a la prenda');
      return;
    }
    if ((tipo === 'camiseta' || tipo === 'pantalon' || tipo === 'zapatos') && !talla) {
      setError('Especifica la talla');
      return;
    }
    setError('');
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
          {error && <div style={{color:'#f5c518',marginBottom:8,fontWeight:'bold',textAlign:'center'}}>{error}</div>}
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
              <select value={talla} onChange={e => setTalla(e.target.value)} required>
                <option value="">Selecciona talla</option>
                {tipo === 'camiseta' && tallasCamiseta.map(t => <option key={t} value={t}>{t}</option>)}
                {tipo === 'pantalon' && tallasPantalon.map(t => <option key={t} value={t}>{t}</option>)}
                {tipo === 'zapatos' && tallasZapatos.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
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
