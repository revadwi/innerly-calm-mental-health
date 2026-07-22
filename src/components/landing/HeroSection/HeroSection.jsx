import React from 'react';
import styles from './HeroSection.module.css';
import Button from '../../common/Button/Button';
import heroImg from '../../../assets/images/hero.png';

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Your mental<br/>wellness<br/>starts here</h1>
        <div className={styles.ctaWrapper}>
          <Button variant="primary" icon={<ArrowRightIcon />}>
            Start Healing
          </Button>
        </div>
        <p className={styles.subtitle}>
          Find balance, peace, and support for your mental well-being. We provide
          trusted resources, expert guidance, and simple solutions to help you build
          healthier habits and a calmer mind.
        </p>
      </div>

      <div className={styles.heroImageWrapper}>
        <div className={styles.imageContainer}>
          <img src={heroImg} alt="Woman meditating" className={styles.heroImage} />
          
          <div className={`${styles.badge} ${styles.badge1}`}>
            Healthy Mind
          </div>
          <div className={`${styles.badge} ${styles.badge2}`}>
            Self Care
          </div>
          <div className={`${styles.badge} ${styles.badge3}`}>
            Mental Wellness
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
