import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', icon, onClick }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};

export default Button;
