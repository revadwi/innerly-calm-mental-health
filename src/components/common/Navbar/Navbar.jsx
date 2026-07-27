import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// 6-petal green geometric dots SVG logo (#8A9468)
export const InnerlyLogoIcon = ({ className = "w-8 h-8" }) => (
  <svg 
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`shrink-0 ${className}`}
  >
    <circle cx="20" cy="20" r="2.5" fill="#8A9468" />
    <circle cx="31" cy="20" r="3.2" fill="#8A9468" />
    <circle cx="25.5" cy="10.47" r="3.2" fill="#8A9468" />
    <circle cx="14.5" cy="10.47" r="3.2" fill="#8A9468" />
    <circle cx="9" cy="20" r="3.2" fill="#8A9468" />
    <circle cx="14.5" cy="29.53" r="3.2" fill="#8A9468" />
    <circle cx="25.5" cy="29.53" r="3.2" fill="#8A9468" />
    <path 
      d="M20 17.5C21.8 17.5 23.6 14.8 25.5 10.47M20 17.5C18.2 17.5 16.4 14.8 14.5 10.47M20 22.5C21.8 22.5 23.6 25.2 25.5 29.53M20 22.5C18.2 22.5 16.4 25.2 14.5 29.53M17.5 20C17.5 18.2 14.8 16.4 9 20M22.5 20C22.5 18.2 25.2 16.4 31 20" 
      stroke="#8A9468" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
      opacity="0.35"
    />
  </svg>
);

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Book', path: '/book' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isLinkActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

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
        <li className={currentPath === '/testimonials' ? styles.active : ''}><Link to="/testimonials">Testimonials</Link></li>
        <li className={currentPath === '/blog' ? styles.active : ''}><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className={styles.cta}>
        <Link to="/contact" className={styles.ctaButton}>Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
