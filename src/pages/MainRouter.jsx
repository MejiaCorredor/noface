import React, { useState, useEffect } from 'react';
import Login from '../components/Login';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Closet from '../components/Closet';
import Combinador from '../components/Combinador';
import Recomendaciones from '../components/Recomendaciones';
import Logo from '../components/Logo';

const PAGE_TITLES = {
  home: 'Inicio',
  closet: 'Closet',
  recs: 'Recomendaciones',
};

export default function MainRouter() {
  const [user, setUser] = useState(() => {
    return localStorage.getItem('user') || null;
  });
  const [remember, setRemember] = useState(false);
  const [page, setPage] = useState('home');
  const [clothes, setClothes] = useState(() => {
    const saved = localStorage.getItem('closet');
    if (saved) return JSON.parse(saved);
    return [
      { name: 'Camiseta', type: 'camiseta', size: 'M', lastUsed: Date.now() },
      { name: 'Pantalón', type: 'pantalon', size: '32', lastUsed: Date.now() },
      { name: 'Zapatos', type: 'zapatos', size: '41', lastUsed: Date.now() },
      { name: 'Gorra', type: 'gorra', lastUsed: Date.now() },
    ];
  });

  useEffect(() => {
    localStorage.setItem('closet', JSON.stringify(clothes));
  }, [clothes]);

  useEffect(() => {
    if (remember && user) {
      localStorage.setItem('user', user);
    } else if (!user) {
      localStorage.removeItem('user');
    }
  }, [user, remember]);

  useEffect(() => {
    const base = 'NOFACE';
    const pageTitle = PAGE_TITLES[page] || '';
    document.title = pageTitle ? `${base} | ${pageTitle}` : base;

    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = '/vite.svg';
    }
  }, [page]);

  const handleNavigate = (to) => setPage(to);

  const handleGoHome = () => setPage('home');

  const handleUpload = (prenda) => setClothes(prev => [...prev, prenda]);

  const handleUse = (prenda) => {
    setClothes(prev =>
      prev.map(c => (c === prenda ? { ...c, lastUsed: Date.now() } : c))
    );
  };

  const handleLogin = (username, rememberChecked) => {
    setUser(username);
    setRemember(rememberChecked);
    setPage('home');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setPage('home');
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  let content = null;
  if (page === 'home') {
    content = (
      <Home
        onGoToCloset={() => setPage('closet')}
        onGoToRecs={() => setPage('recs')}
      />
    );
  } else if (page === 'closet') {
    const handleDelete = (index) => {
      setClothes(prev => prev.filter((_, i) => i !== index));
    };
    content = (
      <Closet clothes={clothes} onUpload={handleUpload} onDelete={handleDelete} />
    );
  } else if (page === 'recs') {
    content = (
      <>
        <Recomendaciones clothes={clothes} />
        <Combinador clothes={clothes} onUse={handleUse} />
      </>
    );
  } else {
    content = <div>Página en construcción</div>;
  }

  return (
    <>
      <Logo onClick={handleGoHome} />
      <Navbar
        onNavigate={handleNavigate}
        current={page}
        onLogout={handleLogout}
      />
      <div style={{ paddingTop: 60, paddingBottom: 70 }}>{content}</div>
      <Footer current={page} onNavigate={handleNavigate} />
    </>
  );
}