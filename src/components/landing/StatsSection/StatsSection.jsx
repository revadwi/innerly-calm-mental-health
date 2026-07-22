import React from 'react';
import styles from './StatsSection.module.css';
import Button from '../../common/Button/Button';
import handsImg from '../../../assets/images/hands.png';

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const StatsSection = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.imageCol}>
        <img src={handsImg} alt="Hands holding" className={styles.handsImage} />
      </div>

      <div className={styles.statsCol}>
        <div className={styles.statNumberWrapper}>
          <h2 className={styles.statNumber}>600+</h2>
          <div className={styles.line}></div>
        </div>
        <p className={styles.statText}>
          People supported<br/>on their mental<br/>wellness journey.
        </p>
      </div>

      <div className={styles.cardCol}>
        <div className={styles.card}>
          <p className={styles.cardText}>
            Your mental health matters. We provide support, guidance, and helpful
            resources for a better balance in life.
          </p>
          <div className={styles.cardCta}>
            <Button variant="primary" icon={<ArrowRightIcon />}>
              Get Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
