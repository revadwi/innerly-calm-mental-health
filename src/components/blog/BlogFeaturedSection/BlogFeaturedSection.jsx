import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogFeaturedSection.module.css';

import featuredImg from '../../../assets/images/services_thumbnail.png'; // Fallback to a suitable image
import avatarImg from '../../../assets/images/avatar_sarah.png';

const BlogFeaturedSection = () => {
  return (
    <section className={styles.featuredSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.topPill}>Daily Sanctuary</span>
          <h2 className={styles.title}>Featured Insights</h2>
          <p className={styles.subtitle}>Explore the World of Blogging and Today's News</p>
        </div>

        <Link to="/blog/detail" className={styles.featuredCard} style={{ textDecoration: 'none' }}>
          <div className={styles.imageWrapper}>
            <img src={featuredImg} alt="Spa and wellness items" className={styles.featuredImg} />
          </div>
          
          <div className={styles.cardContent}>
            <span className={styles.categoryPill}>Self-Care</span>
            <h3 className={styles.cardTitle}>Simple Daily Rituals to Quiet the Noise and Find Your Calm</h3>
            <div className={styles.authorInfo}>
              <img src={avatarImg} alt="Dr. Sarah Jenkins" className={styles.authorAvatar} />
              <div className={styles.authorDetails}>
                <span className={styles.authorName}>Dr. Sarah Jenkins</span>
                <span className={styles.publishDate}>May 29, 2025</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BlogFeaturedSection;
