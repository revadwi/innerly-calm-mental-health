import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import Button from '../Button/Button';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <svg width="42" height="42" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 40L24 24M24 56L56 24M56 56L72 40" stroke="var(--color-primary)" strokeWidth="6" strokeLinecap="round"/>
          <circle cx="8" cy="40" r="8" fill="var(--color-primary)"/>
          <circle cx="24" cy="24" r="8" fill="var(--color-primary)"/>
          <circle cx="24" cy="56" r="8" fill="var(--color-primary)"/>
          <circle cx="40" cy="40" r="8" fill="var(--color-primary)"/>
          <circle cx="56" cy="24" r="8" fill="var(--color-primary)"/>
          <circle cx="56" cy="56" r="8" fill="var(--color-primary)"/>
          <circle cx="72" cy="40" r="8" fill="var(--color-primary)"/>
        </svg>
        <span className={styles.logoText}>Innerly</span>
      </Link>
      
      <ul className={styles.navLinks}>
        <li className={currentPath === '/' ? styles.active : ''}><Link to="/">Home</Link></li>
        <li className={currentPath === '/about' ? styles.active : ''}><Link to="/about">About</Link></li>
        <li className={currentPath.startsWith('/services') ? styles.active : ''}><Link to="/services">Services</Link></li>
        <li className={currentPath === '/book' ? styles.active : ''}><Link to="/book">Book</Link></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className={styles.cta}>
        <Button variant="primary">Contact Us</Button>
      </div>
    </nav>
  );
};

export default Navbar;
