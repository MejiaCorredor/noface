import React from 'react';
import styles from './Login.module.css';

export default function Login({ onLogin }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [remember, setRemember] = React.useState(false);
  const [error, setError] = React.useState('');
  const [isRegister, setIsRegister] = React.useState(false);

  // Guardar usuario (solo para registro)
  const saveUser = (user, pass) => {
    localStorage.setItem("registeredUser", JSON.stringify({ user, pass }));
  };

  // Obtener usuario
  const getUser = () => {
    const data = localStorage.getItem("registeredUser");
    return data ? JSON.parse(data) : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Por favor ingresa usuario y contraseña");
      return;
    }

    if (isRegister) {
      // Registro
      saveUser(username, password);
      setError("");
      alert("Cuenta creada con éxito. Ahora inicia sesión.");
      setIsRegister(false);
      setUsername('');
      setPassword('');
    } else {
      // Login
      const storedUser = getUser();

      if (storedUser && storedUser.user === username && storedUser.pass === password) {
        setError("");
        // 👉 aquí se conecta con MainRouter
        onLogin(username, remember);
      } else {
        setError("Usuario o contraseña incorrectos");
      }
    }
  };

  React.useEffect(() => {
    const remembered = localStorage.getItem("rememberUser");
    if (remembered) {
      setUsername(remembered);
      setRemember(true);
    }
  }, []);

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
          placeholder="ENTER YOUR EMAIL"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {!isRegister && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0.2rem 0' }}>
            <input
              type="checkbox"
              id="remember"
              checked={remember}
              onChange={e => setRemember(e.target.checked)}
              style={{ width: 16, height: 16, accentColor: '#f5c518' }}
            />
            <label htmlFor="remember" style={{ fontSize: '0.95rem', color: '#fff' }}>Recordar</label>
          </div>
        )}

        {!isRegister && (
          <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.95rem', marginBottom: '0.2rem' }}>
            Olvidé la contraseña
          </a>
        )}

        {error && <div className={styles.error}>{error}</div>}

        <button type="submit">{isRegister ? "CREAR CUENTA" : "LOGIN"}</button>
      </form>

      <button
        onClick={() => {
          setIsRegister(!isRegister);
          setError('');
        }}
        style={{
          marginTop: '1rem',
          background: 'transparent',
          border: 'none',
          color: '#f5c518',
          cursor: 'pointer',
          fontSize: '0.95rem'
        }}
      >
        {isRegister ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate"}
      </button>
    </div>
  );
}
