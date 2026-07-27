import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogHeroSection.module.css';

import img1 from '../../../assets/images/blog_hero_1.png';
import img2 from '../../../assets/images/blog_hero_2.png';
import img3 from '../../../assets/images/blog_hero_3.png';
import img4 from '../../../assets/images/blog_hero_4.png';

const BlogHeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.leftImages}>
          <img src={img1} alt="Yoga pose" className={`${styles.imagePill} ${styles.outerLeft}`} />
          <img src={img2} alt="Meditation" className={`${styles.imagePill} ${styles.innerLeft}`} />
        </div>
        
        <div className={styles.centerContent}>
          <h1 className={styles.title}>Embrace<br/>Your Life</h1>
          <p className={styles.subtitle}>
            Uncover the strength within. Join our community to learn how to master your mental well-being and thrive every single day.
          </p>
          <Link to="/blog/detail" className={styles.ctaButton} style={{ textDecoration: 'none' }}>
            <span className={styles.buttonText}>Explore the Blog</span>
            <div className={styles.buttonIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#929971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </div>

        <div className={styles.rightImages}>
          <img src={img3} alt="Meditation" className={`${styles.imagePill} ${styles.innerRight}`} />
          <img src={img4} alt="Yoga pose" className={`${styles.imagePill} ${styles.outerRight}`} />
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;
