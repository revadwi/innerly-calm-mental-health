import React from 'react';
import styles from './BlogDetailHeroSection.module.css';

const BlogDetailHeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroCard}>
          <div className={styles.pillsWrapper}>
            <span className={`${styles.pill} ${styles.pillYellow}`}>Mindfulness</span>
            <span className={`${styles.pill} ${styles.pillGreen}`}>Self-Care</span>
            <span className={`${styles.pill} ${styles.pillBlue}`}>Wellness</span>
          </div>
          
          <h1 className={styles.title}>
            6 Simple Rituals to Start Your Day with Mindfulness
          </h1>
          
          <div className={styles.metaData}>
            <span className={styles.author}>Elena Thorne</span>
            <span className={styles.date}>Sunday, 26 April 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailHeroSection;
