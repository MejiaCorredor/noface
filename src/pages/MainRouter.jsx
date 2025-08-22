
import React, { useState, useEffect } from 'react';
import Login from '../components/Login';
import Home from '../components/Home';



import Navbar from '../components/Navbar';
import Closet from '../components/Closet';
import Combinador from '../components/Combinador';
import Recomendaciones from '../components/Recomendaciones';


const PAGE_TITLES = {
  home: 'Inicio',
  closet: 'Closet',
  recs: 'Recomendaciones',
};

export default function MainRouter() {

  const [user, setUser] = useState(null);
  const [page, setPage] = useState('home');
  const [clothes, setClothes] = useState(() => {
    const saved = localStorage.getItem('closet');
    if (saved) return JSON.parse(saved);
    // Prendas base
    return [
      { name: 'Camiseta', type: 'camiseta', size: 'M', lastUsed: Date.now() },
      { name: 'Pantalón', type: 'pantalon', size: '32', lastUsed: Date.now() },
      { name: 'Zapatos', type: 'zapatos', size: '41', lastUsed: Date.now() },
      { name: 'Gorra', type: 'gorra', lastUsed: Date.now() },
    ];
  });

  // Persistir en localStorage
  useEffect(() => {
    localStorage.setItem('closet', JSON.stringify(clothes));
  }, [clothes]);

  // Cambiar el título de la pestaña según la página
  useEffect(() => {
    const base = 'NOFACE';
    const pageTitle = PAGE_TITLES[page] || '';
    document.title = pageTitle ? `${base} | ${pageTitle}` : base;
    // Cambiar favicon (logo)
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = '/vite.svg';
    }
  }, [page]);

  const handleNavigate = (to) => setPage(to);


  const handleUpload = (prenda) => {
    // Pedir talla si es camiseta, pantalon o zapatos
    let size = '';
    if (['camiseta','pantalon','zapatos'].includes(prenda.type)) {
      size = prompt('¿Cuál es tu talla para esta prenda?');
    }
    setClothes(prev => [...prev, { ...prenda, size }]);
  };

  // Marcar prenda como usada (actualiza lastUsed)
  const handleUse = (prenda) => {
    setClothes(prev => prev.map(c =>
      c === prenda ? { ...c, lastUsed: Date.now() } : c
    ));
  };

  if (!user) {
    return <>
      <Navbar onNavigate={handleNavigate} current={page} />
      <Login onLogin={setUser} />
    </>;
  }

  let content = null;

  if (page === 'home') {
    content = <Home onGoToCloset={() => setPage('closet')} onGoToRecs={() => setPage('recs')} />;
  } else if (page === 'closet') {
    content = <Closet clothes={clothes} onUpload={handleUpload} />;
  } else if (page === 'recs') {
    content = <>
      <Recomendaciones clothes={clothes} />
      <Combinador clothes={clothes} onUse={handleUse} />
    </>;
  } else {
    content = <div>Página en construcción</div>;
  }

  return <>
    <Navbar onNavigate={handleNavigate} current={page} />
    <div style={{ paddingTop: 60 }}>{content}</div>
  </>;
}
