import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topContent}>
          {/* Left Brand Area */}
          <div className={styles.brandArea}>
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
            
            <p className={styles.description}>
              Supporting your journey to a calmer mind and a healthier<br/>life through thoughtful and personalized care.
            </p>

            <div className={styles.newsletter}>
              <p className={styles.newsletterLabel}>Subscribe for your wellness dose.</p>
              <div className={styles.inputGroup}>
                <input type="email" placeholder="Enter email address for newsletter ..." />
                <button aria-label="Subscribe">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Links Area */}
          <div className={styles.rightContent}>
            <div className={styles.linksGrid}>
              <div className={styles.linkColumn}>
                <h4>Company</h4>
                <ul>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/book">Book</Link></li>
                </ul>
              </div>
              <div className={styles.linkColumn}>
                <h4>Resources</h4>
                <ul>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Price List</a></li>
                  <li><Link to="/privacy">User Policy</Link></li>
                  <li><a href="#">Support</a></li>
                </ul>
              </div>
              <div className={styles.linkColumn}>
                <h4>Get in Touch</h4>
                <ul>
                  <li><a href="#">Phone</a></li>
                  <li><a href="#">Email</a></li>
                  <li><a href="#">Location</a></li>
                  <li><a href="#">Social Media</a></li>
                </ul>
              </div>
            </div>

            <div className={styles.copyrightRow}>
              <p>Copyright © Innerly 2026</p>
              <div></div> {/* Spacer for middle column */}
              <button className={styles.backToTop} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Giant Text */}
      <div className={styles.giantTextContainer}>
        <h1 className={styles.giantText}>INNERLY</h1>
      </div>
    </footer>
  );
};

export default Footer;
