import React from 'react';
import styles from './ServicesCTASection.module.css';

const ServicesCTASection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBanner}>
        <div className={styles.content}>
          <h2 className={styles.title}>Care Designed Around You</h2>
          <p className={styles.description}>
            Every journey is unique. Find wellness solutions tailored to your emotional and mental well-being.
          </p>
          <button className={styles.ctaButton}>
            <span className={styles.buttonText}>Get Started</span>
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

export default ServicesCTASection;
