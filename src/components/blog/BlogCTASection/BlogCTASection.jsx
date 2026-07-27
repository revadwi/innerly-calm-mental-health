import React from 'react';
import styles from './BlogCTASection.module.css';

import ctaBg from '../../../assets/images/cta_bg.png';
import singingBowl from '../../../assets/images/singing_bowl.png';

const BlogCTASection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div 
          className={styles.ctaBanner}
          style={{ backgroundImage: `url(${ctaBg})` }}
        >
          <div className={styles.imageWrapper}>
            <img src={singingBowl} alt="Woman meditating with singing bowls" className={styles.image} />
          </div>
          
          <div className={styles.content}>
            <span className={styles.subtitle}>Wellness in Your Inbox</span>
            <h2 className={styles.title}>Unlock exclusive tools for your healing journey.</h2>
            <p className={styles.description}>
              Get weekly mindfulness exercises, expert mental health tips, and calming resources delivered straight to your inbox.
            </p>
            
            <button className={styles.ctaButton}>
              <span className={styles.buttonText}>Start My Journey</span>
              <div className={styles.buttonIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCTASection;
