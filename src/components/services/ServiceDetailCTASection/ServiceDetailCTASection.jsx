import React from 'react';
import styles from './ServiceDetailCTASection.module.css';

const ServiceDetailCTASection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBanner}>
        <div className={styles.content}>
          <h2 className={styles.title}>Take the First Step Toward Healing</h2>
          <p className={styles.description}>
            Small changes can create meaningful progress. Start building a calmer and healthier version of yourself today.
          </p>
          <button className={styles.ctaButton}>
            <span className={styles.buttonText}>Book a Session</span>
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

export default ServiceDetailCTASection;
