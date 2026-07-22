import React from 'react';
import styles from './AboutSupportSection.module.css';
import stressImg from '../../../assets/images/singing_bowl.png';
import anxietyImg from '../../../assets/images/about_img_left.png';
import moodImg from '../../../assets/images/about_img_right.png';

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AboutSupportSection = () => {
  return (
    <section className={styles.supportSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            Who We Support
          </div>
          <h2 className={styles.heading}>
            Supporting Individuals Through<br/>
            Common Mental Wellness<br/>
            Challenges
          </h2>
        </div>

        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {/* Card 1: Stress Care */}
          <div className={styles.supportCard}>
            <div className={styles.imageContainer}>
              <img src={stressImg} alt="Stress Care" className={styles.cardImage} />
              
              {/* Arrow Button */}
              <div className={styles.arrowContainer}>
                <button className={styles.arrowButton}>
                  <ArrowIcon />
                </button>
              </div>

              {/* Title Overlay */}
              <div className={styles.titleOverlay}>
                Stress Care
              </div>
            </div>
            <p className={styles.description}>
              Helping individuals recognize stress triggers and develop healthy coping strategies to maintain balance and emotional well-being.
            </p>
          </div>

          {/* Card 2: Anxiety Help */}
          <div className={styles.supportCard}>
            <div className={styles.imageContainer}>
              <img src={anxietyImg} alt="Anxiety Help" className={styles.cardImage} />
              
              {/* Arrow Button */}
              <div className={styles.arrowContainer}>
                <button className={styles.arrowButton}>
                  <ArrowIcon />
                </button>
              </div>

              {/* Sparkle Icon */}
              <div className={styles.sparkleIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" fill="white" opacity="0.8"/>
                </svg>
              </div>

              {/* Title Overlay */}
              <div className={styles.titleOverlay}>
                Anxiety Help
              </div>
            </div>
            <p className={styles.description}>
              Providing guidance and practical techniques to manage anxious thoughts, improve calmness, and build confidence in daily life.
            </p>
          </div>

          {/* Card 3: Mood Balance */}
          <div className={styles.supportCard}>
            <div className={styles.imageContainer}>
              <img src={moodImg} alt="Mood Balance" className={styles.cardImage} />
              
              {/* Arrow Button */}
              <div className={styles.arrowContainer}>
                <button className={styles.arrowButton}>
                  <ArrowIcon />
                </button>
              </div>

              {/* Title Overlay */}
              <div className={styles.titleOverlay}>
                Mood Balance
              </div>
            </div>
            <p className={styles.description}>
              Encouraging self-awareness and emotional regulation to support healthier relationships and a more peaceful state of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSupportSection;
