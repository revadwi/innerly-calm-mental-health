import React from 'react';
import styles from './ServiceDetailCareSection.module.css';
import handsImg from '../../../assets/images/hands.png';
import whyChooseUsImg from '../../../assets/images/why_choose_us.png';

const ShieldCheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#E1937D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 11L11 13L15 9" stroke="#E1937D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TeamIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#E1937D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="4" stroke="#E1937D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21V19C22.9993 18.1137 22.6944 17.2528 22.135 16.5682C21.5756 15.8837 20.7937 15.414 19.92 15.23" stroke="#E1937D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.13C16.8839 3.31006 17.6749 3.79255 18.2384 4.50201C18.802 5.21147 19.1022 6.09637 19.1022 7.005C19.1022 7.91363 18.802 8.79853 18.2384 9.50799C17.6749 10.2175 16.8839 10.6999 16 10.88" stroke="#E1937D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ServiceDetailCareSection = () => {
  return (
    <section className={styles.careSection}>
      <div className={styles.container}>
        {/* Left Column: Overlapping Images */}
        <div className={styles.imageColumn}>
          <div className={styles.imagesContainer}>
            <img src={handsImg} alt="Caring Hands" className={styles.backImage} />
            <div className={styles.frontImageWrapper}>
              <img src={whyChooseUsImg} alt="Care Team Hands Stacked" className={styles.frontImage} />
            </div>
          </div>
        </div>

        {/* Right Column: Text Contents */}
        <div className={styles.contentColumn}>
          <div className={styles.badge}>
            Who We Care For
          </div>
          <h2 className={styles.heading}>
            Enhance your mental well-being with supportive, proven approaches
          </h2>
          <p className={styles.description}>
            We provide thoughtful and personalized mental wellness support designed to help you manage stress, build resilience, and improve your overall emotional health.
          </p>
          
          <div className={styles.quoteBlock}>
            “Your journey to better mental well-being starts with understanding, support, and consistent care tailored to your needs.”
          </div>

          <div className={styles.benefitList}>
            {/* Benefit 1 */}
            <div className={styles.benefitItem}>
              <div className={styles.iconCircle}>
                <ShieldCheckIcon />
              </div>
              <div className={styles.benefitText}>
                <h4 className={styles.benefitTitle}>Years of Trusted Support</h4>
                <p className={styles.benefitSubtext}>We help individuals navigate challenges and improve.</p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className={styles.benefitItem}>
              <div className={styles.iconCircle}>
                <TeamIcon />
              </div>
              <div className={styles.benefitText}>
                <h4 className={styles.benefitTitle}>Dedicated Care Team</h4>
                <p className={styles.benefitSubtext}>Our team provides personalized guidance and support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailCareSection;
