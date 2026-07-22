import React from 'react';
import styles from './CTASection.module.css';

const CTASection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBanner}>
        <div className={styles.content}>
          <h2 className={styles.title}>Take a Moment for Yourself</h2>
          <p className={styles.description}>
            Slow down, breathe deeply, and reconnect with your inner peace. Your wellness journey starts with one small step today.
          </p>
          <button className={styles.ctaButton}>
            <span className={styles.buttonText}>Begin Your Journey</span>
            <div className={styles.buttonIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
