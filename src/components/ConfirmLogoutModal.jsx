import React from "react";
import styles from "./ConfirmLogoutModal.module.scss";

export default function ConfirmLogoutModal({ onConfirm, onCancel, showCongrats }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {showCongrats ? (
          <div className={styles.congratsAnim}>
            <span role="img" aria-label="despedida" style={{fontSize:'4.5rem',display:'block'}}>👋</span>
            <div className={styles.congratsText}>¡Que tengas un buen día!</div>
          </div>
        ) : (
          <>
            <h3>¿Seguro que deseas cerrar sesión?</h3>
            <div className={styles.actions}>
              <button onClick={onCancel} className={styles.cancelBtn}>Cancelar</button>
              <button onClick={onConfirm} className={styles.confirmBtn}>Cerrar sesión</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
