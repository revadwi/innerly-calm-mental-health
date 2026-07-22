import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceDetailExploreSection.module.css';

const BrainIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 2C7.567 2 6 3.567 6 5.5c0 .38.06.75.18 1.1C5.49 7.6 5 8.74 5 10c0 1.05.37 2.02.98 2.78C5.37 13.54 5 14.51 5 15.5c0 1.933 1.567 3.5 3.5 3.5.38 0 .75-.06 1.1-.18.9 1.17 2.3 1.93 3.9 1.93s3-.76 3.9-1.93c.35.12.72.18 1.1.18 1.933 0 3.5-1.567 3.5-3.5 0-.99-.37-1.96-.98-2.72.61-.76.98-1.73.98-2.78 0-1.26-.49-2.4-1.18-3.4.12-.35.18-.72.18-1.1 0-1.933-1.567-3.5-3.5-3.5-.64 0-1.24.17-1.76.47C16.83 2.17 15.5 1.5 14 1.5c-1.5 0-2.83.67-3.24 1.47C10.24 2.17 9.64 2 9 2z" stroke="#E1937D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2v18" stroke="#E1937D" strokeWidth="2"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#E1937D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ScalesIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3v18M12 3l7 3M12 3L5 6M19 6v6m0 0c0 2-3 2-3 0s3-2 3 0zm-14 0v6m0 0c0 2 3 2 3 0s-3-2-3 0z" stroke="#E1937D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 21h18" stroke="#E1937D" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ServiceDetailExploreSection = () => {
  return (
    <section className={styles.exploreSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            Explore More Core
          </div>
          <h2 className={styles.heading}>
            Helping You Feel More Balanced,<br />
            Calm, and Supported
          </h2>
        </div>

        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {/* Card 1: Stress Care */}
          <div className={`${styles.card} ${styles.whiteCard}`}>
            <div className={styles.iconWrapper}>
              <BrainIcon />
            </div>
            <h3 className={styles.cardTitle}>Stress Care</h3>
            <p className={styles.cardDescription}>
              Personalized support to help you manage stress, build resilience, and improve your emotional well-being.
            </p>
            <Link to="/book" className={styles.bookButton}>
              Book Session
            </Link>
          </div>

          {/* Card 2: Emotional Healing (Highlight Card) */}
          <div className={`${styles.card} ${styles.darkCard}`}>
            <div className={styles.iconWrapper}>
              <div className={styles.whiteIconCircle}>
                <HeartIcon />
              </div>
            </div>
            <h3 className={styles.cardTitle}>Emotional Healing</h3>
            <p className={styles.cardDescription}>
              Guided sessions to help you process emotions, regain balance, build self-awareness, and move forward with greater clarity, confidence, inner peace, and resilience.
            </p>
            <button className={styles.healingButton}>
              <span>Start Healing</span>
              <div className={styles.arrowCircle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#94A376" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>

          {/* Card 3: Mind Balance */}
          <div className={`${styles.card} ${styles.whiteCard}`}>
            <div className={styles.iconWrapper}>
              <ScalesIcon />
            </div>
            <h3 className={styles.cardTitle}>Mind Balance</h3>
            <p className={styles.cardDescription}>
              A holistic approach to support your mental wellness, helping you stay balanced and emotionally grounded.
            </p>
            <Link to="/book" className={styles.bookButton}>
              Book Session
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailExploreSection;
