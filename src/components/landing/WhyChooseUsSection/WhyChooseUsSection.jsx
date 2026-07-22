import React from 'react';
import styles from './WhyChooseUsSection.module.css';
import Button from '../../common/Button/Button';
import whyChooseUsImg from '../../../assets/images/why_choose_us.png';

const WhyChooseUsSection = () => {
  return (
    <section className={styles.whyChooseUsSection}>
      <div className={styles.imageColumn}>
        <div className={styles.imgContainer}>
          <img src={whyChooseUsImg} alt="Workspace" className={styles.image} />
          
          <div className={styles.pulseIcon}>
            <div className={styles.pulseRing}></div>
            <div className={styles.pulseCore}></div>
          </div>

          <div className={styles.floatingButtonContainer}>
            <Button variant="primary" className={styles.bookButton}>
              Book Session
              <span className={styles.arrowIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.contentColumn}>
        <span className={styles.tag}>Why Choose Us</span>
        
        <h2 className={styles.title}>
          You Deserve Better<br />Mental Wellness
        </h2>
        
        <p className={styles.description}>
          Discover a safe and supportive space for your mental well-being. We are here to guide your journey toward emotional balance, inner peace, healthier habits, and a stronger, healthier mind every day.
        </p>

        <div className={styles.cardsRow}>
          {/* Card 1 - Dark */}
          <div className={`${styles.card} ${styles.cardDark}`}>
            <div className={`${styles.iconWrapper} ${styles.iconLight}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="11" width="12" height="10" rx="3" stroke="#D37C6E" strokeWidth="1.5"/>
                <path d="M16 11V7a4 4 0 00-8 0v4" stroke="#D37C6E" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 17.5l-1.5-1.5a1.2 1.2 0 011.5-1.9 1.2 1.2 0 011.5 1.9L12 17.5z" stroke="#D37C6E" strokeWidth="1.2" strokeLinejoin="round" fill="#D37C6E"/>
              </svg>
            </div>
            <h4>Confidential Support</h4>
            <p>Your privacy matters. We provide a safe space to share and heal.</p>
          </div>

          {/* Card 2 - Light */}
          <div className={`${styles.card} ${styles.cardLight}`}>
            <div className={`${styles.iconWrapper} ${styles.iconDark}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4a8 8 0 018 8 8 8 0 01-1.5 4.6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M4 12a8 8 0 012.3-5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 7a5 5 0 015 5 5 5 0 01-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M7 12a5 5 0 011.5-3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 10a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 15v5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M9 19v1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M15 19v1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h4>Easy Access</h4>
            <p>Trusted mental wellness support whenever you need guidance.</p>
          </div>

          {/* Card 3 - Light */}
          <div className={`${styles.card} ${styles.cardLight}`}>
            <div className={`${styles.iconWrapper} ${styles.iconDark}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M4 11a3 3 0 100-6 3 3 0 000 6z" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M1 21v-2a3 3 0 013-3h2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M20 11a3 3 0 100-6 3 3 0 000 6z" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M23 21v-2a3 3 0 00-3-3h-2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h4>Supportive Community</h4>
            <p>A caring community to connect, share, and grow together.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
