import React from 'react';
import styles from './ServiceDetailHero.module.css';

const ServiceDetailHero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.whiteCard}>
          <div className={styles.header}>
            <div className={styles.badge}>
              Services
            </div>
            <h1 className={styles.heading}>
              Personalized Mental Wellness<br />
              Services Solutions
            </h1>
            <p className={styles.subtitle}>
              Professional Support Designed to Help You Feel Balanced and Supported
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailHero;
