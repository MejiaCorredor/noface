import React from 'react';
import styles from './Login.module.css';


export default function Login({ onLogin }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [remember, setRemember] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username);
    } else {
      setError('Por favor ingresa usuario y contraseña');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.logo}>
        <span className={styles.principalText}>~NOFACE~</span>
        <br />
        <span className={styles.secondaryText}>clothing</span>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ENTER YOUR USERNAME"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0.2rem 0' }}>
          <input
            type="checkbox"
            id="remember"
            checked={remember}
            onChange={e => setRemember(e.target.checked)}
            style={{ width: 16, height: 16, accentColor: '#181818' }}
          />
          <label htmlFor="remember" style={{ fontSize: '0.95rem', color: '#181818' }}>Recordar</label>
        </div>
        <a href="#" style={{ color: '#181818', textDecoration: 'none', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Olvidé la contraseña</a>
        {error && <div className={styles.error}>{error}</div>}
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}
