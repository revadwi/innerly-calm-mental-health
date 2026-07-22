import React from 'react';
import styles from './AboutChooseUsSection.module.css';
import whyChooseUsImg from '../../../assets/images/why_choose_us.png';

const AboutChooseUsSection = () => {
  return (
    <section className={styles.chooseUsSection}>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          {/* Left Column: Image with overlays */}
          <div className={styles.imageWrapper}>
            <img src={whyChooseUsImg} alt="Why Choose Us" className={styles.mainImage} />
            
            {/* Top Right Decorative Hotspot */}
            <div className={styles.hotspot}>
              <span className={styles.hotspotDot}></span>
            </div>
            
            {/* Bottom Left CTA Button */}
            <button className={styles.bookButton}>
              Book Session
              <span className={styles.arrowCircle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#94A376" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>

          {/* Right Column: Content */}
          <div className={styles.contentColumn}>
            <div className={styles.badge}>
              Why Choose Us
            </div>
            
            <h2 className={styles.heading}>
              You Deserve Better<br/>Mental Wellness
            </h2>
            
            <p className={styles.description}>
              Discover a safe and supportive space for your mental well-being. We are here to guide your journey toward emotional balance, inner peace, healthier habits, and a stronger, healthier mind every day.
            </p>
            
            {/* Features Row */}
            <div className={styles.featuresRow}>
              {/* Feature 1: Dark Card */}
              <div className={`${styles.featureCard} ${styles.darkCard}`}>
                <div className={styles.iconCircleWhite}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="10" width="14" height="11" rx="2" stroke="#E1937D" strokeWidth="2"/>
                    <path d="M8 10V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V10" stroke="#E1937D" strokeWidth="2"/>
                    <path d="M12 14V17" stroke="#E1937D" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>Confidential Support</h3>
                <p>Your privacy matters. We provide a safe space to share and heal.</p>
              </div>

              {/* Feature 2: Light Card */}
              <div className={styles.featureCard}>
                <div className={styles.iconCircleDark}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#8D6959" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 6C9.24 6 7 8.24 7 11C7 13.76 9.24 16 12 16C14.76 16 17 13.76 17 11" stroke="#8D6959" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 9C10.9 9 10 9.9 10 11C10 12.1 10.9 13 12 13C13.1 13 14 12.1 14 11C14 9.9 13.1 9 12 9" stroke="#8D6959" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>Easy Access</h3>
                <p>Trusted mental wellness support whenever you need guidance.</p>
              </div>

              {/* Feature 3: Light Card */}
              <div className={styles.featureCard}>
                <div className={styles.iconCircleDark}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#8D6959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#8D6959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8585 15.3516 20 15.13" stroke="#8D6959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#8D6959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Supportive Community</h3>
                <p>A caring community to connect, share, and grow together.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutChooseUsSection;
