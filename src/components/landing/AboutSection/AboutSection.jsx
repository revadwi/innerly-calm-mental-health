import React from 'react';
import styles from './AboutSection.module.css';
import imgLeft from '../../../assets/images/about_img_left.png';
import imgCenter from '../../../assets/images/about_img_center.png';
import imgRight from '../../../assets/images/about_img_right.png';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.content}>
        <span className={styles.tag}>About Innerly</span>
        <h2 className={styles.title}>
          Your Partner in<br />Mental Wellness
        </h2>
        <p className={styles.description}>
          At Innerly, we provide safe and supportive guidance to help you manage stress, improve emotional well-being, and build healthier habits for a more balanced and peaceful life.
        </p>
      </div>

      <div className={styles.imageGrid}>
        <img src={imgLeft} alt="Man meditating" className={styles.imgLeft} />
        <img src={imgRight} alt="Woman meditating" className={styles.imgRight} />
        <img src={imgCenter} alt="Connecting puzzle" className={styles.imgCenter} />

        <div className={styles.moodCard}>
          <div className={styles.moodIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
              <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="9" cy="9" r="1" fill="white" stroke="white" strokeWidth="1"/>
              <circle cx="15" cy="9" r="1" fill="white" stroke="white" strokeWidth="1"/>
            </svg>
          </div>
          <div className={styles.moodText}>
            <h4>Your mood</h4>
            <p>Feeling Better</p>
          </div>
          <div className={styles.arrowIcon}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className={styles.sleepCard}>
          <div className={styles.sleepIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 14H21V19H3V14Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 14V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H8C8.53043 6 9.03914 6.21071 9.41421 6.58579C9.78929 6.96086 10 7.46957 10 8V14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 14V8C14 7.46957 14.2107 6.96086 14.5858 6.58579C14.9609 6.21071 15.4696 6 16 6H19C19.5304 6 20.0391 6.21071 20.4142 6.58579C20.7893 6.96086 21 7.46957 21 8V14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 19V21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 19V21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.sleepText}>
            <h4>Sleep time</h4>
            <p>8 Hours</p>
          </div>
          <div className={styles.arrowIcon}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
