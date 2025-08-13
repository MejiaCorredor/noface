
import React, { useState } from 'react';
import Login from '../components/Login';
import Home from '../components/Home';

import Navbar from '../components/Navbar';
import Closet from '../components/Closet';

export default function MainRouter() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState('home');

  const handleNavigate = (to) => setPage(to);

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
    content = <Closet />;
  } else if (page === 'recs') {
    content = <div>Recomendaciones (próximamente)</div>;
  } else {
    content = <div>Página en construcción</div>;
  }

  return <>
    <Navbar onNavigate={handleNavigate} current={page} />
    <div style={{ paddingTop: 60 }}>{content}</div>
  </>;
}
