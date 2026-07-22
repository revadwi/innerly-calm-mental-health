import React from 'react';
import styles from './AboutHeroSection.module.css';
import heroImg from '../../../assets/images/about_img_center.jpg';
import avatar2 from '../../../assets/images/avatar_2.png';
import avatarSarah from '../../../assets/images/avatar_sarah.png';
// Using placeholders or existing images for avatars
import avatar3 from '../../../assets/images/avatar_2.png'; // Reusing avatar for mockup
import avatar4 from '../../../assets/images/avatar_sarah.png'; // Reusing avatar for mockup

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 4V20L20 12L7 4Z" fill="white"/>
  </svg>
);

const HandDrawnArrow = () => (
  <svg width="130" height="50" viewBox="0 0 130 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 30 Q 35 -10, 65 30 T 115 10" stroke="#1C1B19" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M105 10 L 115 10 L 115 20" stroke="#1C1B19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const AboutHeroSection = () => {
  return (
    <section className={styles.aboutHero}>
      <div className={styles.container}>
        <div className={styles.topContent}>
          <h1 className={styles.title}>A New Era of Better<br/>Mental Wellness</h1>
          <p className={styles.subtitle}>
            Discover a safe and supportive approach to mental<br/>wellness with expert guidance, self-care practices, and<br/>mindful healing for a healthier mind.
          </p>
        </div>
        
        <div className={styles.imageWrapper}>
          <img src={heroImg} alt="Meditation" className={styles.heroImage} />
          <button className={styles.playButton} aria-label="Play video">
            <div className={styles.playIconWrapper}>
              <PlayIcon />
            </div>
          </button>
        </div>

        <div className={styles.statsArea}>
          <div className={styles.statLeft}>
            <div className={styles.bigNumberWrapper}>
              <h2 className={styles.bigNumber}>600+</h2>
              <span className={styles.line}></span>
            </div>
            <p className={styles.statText}>People supported<br/>on their mental<br/>wellness journey.</p>
          </div>

          <div className={styles.statCard}>
            <div className={styles.cardLeft}>
              <div className={styles.dotLabel}>
                <span className={styles.dot}></span> Support
              </div>
              <div className={styles.progressData}>
                <h3>97<span className={styles.percent}>%</span></h3>
                <p>Innovative Progress</p>
              </div>
            </div>
            
            <div className={styles.cardArrow}>
              <HandDrawnArrow />
            </div>
            
            <div className={styles.cardRight}>
              <p>Trusted support and<br/>guidance for better<br/>balance and wellness.</p>
            </div>
          </div>

          <div className={styles.learnMore}>
            <div className={styles.avatarsWrapper}>
              <img src={avatar4} alt="Avatar 1" className={styles.avatar} />
              <img src={avatar2} alt="Avatar 2" className={styles.avatar} />
              <img src={avatarSarah} alt="Avatar 3" className={styles.avatar} />
              <img src={avatar2} alt="Avatar 4" className={styles.avatar} />
              <span className={styles.avatarCount}>150+</span>
            </div>
            <a href="#" className={styles.learnMoreLink}>Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
