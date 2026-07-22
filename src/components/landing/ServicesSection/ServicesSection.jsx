import React from 'react';
import styles from './ServicesSection.module.css';
import Button from '../../common/Button/Button';
import videoThumbnail from '../../../assets/images/services_thumbnail.png';

const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.header}>
        <span className={styles.tag}>Our Services</span>
        <h2 className={styles.title}>
          Comprehensive Mental Wellness<br />Support For Everyday Life
        </h2>
        <p className={styles.subtitle}>
          We provide trusted mental wellness support to help you manage stress, improve emotional<br />balance, and build healthier habits for a calmer and happier life.
        </p>
      </div>

      <div className={styles.videoContainer}>
        <img src={videoThumbnail} alt="Therapy session" className={styles.videoThumbnail} />
        <button className={styles.playButton} aria-label="Play video">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 3L19 12L5 21V3Z" fill="white" />
          </svg>
        </button>
      </div>

      <div className={styles.servicesGrid}>
        {/* Card 1 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E29F8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            <h3>Stress Management</h3>
          </div>
          <p>Helping you handle daily stress with practical coping strategies, calming techniques, and healthier routines for emotional balance.</p>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E29F8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c-4-4-4-9-4-12 0-3 3-6 4-6s4 3 4 6c0 3 0 8-4 12z"></path>
                <path d="M12 10c-1-1-2-1-3-1-3 0-6 3-6 7 0 1 1 2 2 2h7"></path>
                <path d="M12 10c1-1 2-1 3-1 3 0 6 3 6 7 0 1-1 2-2 2h-7"></path>
              </svg>
            </div>
            <h3>Mindfulness Practice</h3>
          </div>
          <p>Helping you stay present, calm, and focused through mindfulness techniques that encourage relaxation, self-awareness, and clarity.</p>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E29F8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h3>Emotional Support</h3>
          </div>
          <p>Safe guidance to help you understand emotions, manage emotional challenges, and build healthier ways to express yourself.</p>
        </div>

        {/* Card 4 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E29F8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 4v16"></path>
                <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
                <path d="M2 17h20"></path>
                <path d="M6 8v9"></path>
              </svg>
            </div>
            <h3>Sleep Wellness</h3>
          </div>
          <p>Improving your sleep quality with healthy nighttime habits and guidance to support better mental health and daily energy.</p>
        </div>
      </div>

      <div className={styles.actionContainer}>
        <Button variant="primary">Start Healing</Button>
      </div>
    </section>
  );
};

export default ServicesSection;
