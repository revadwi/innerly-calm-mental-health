import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogDetailReadOtherSection.module.css';

import blog1 from '../../../assets/images/blog_hero_4.png';
import blog2 from '../../../assets/images/blog_hero_1.png';
import blog3 from '../../../assets/images/blog_hero_2.png';

import avatar1 from '../../../assets/images/avatar_sarah.png';
import avatar2 from '../../../assets/images/avatar_2.png';
import avatar3 from '../../../assets/images/avatar_3.png';

const BlogDetailReadOtherSection = () => {
  return (
    <section className={styles.readOtherSection}>
      <div className={styles.container}>
        <div className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>Read Other Blogs</h2>
          
          <div className={styles.cardsGrid}>
            {/* Card 1 */}
            <Link to="/blog/detail" className={styles.blogCard} style={{ textDecoration: 'none' }}>
              <img src={blog1} alt="The Art of Saying No" className={styles.blogImage} />
              <div className={styles.blogContent}>
                <span className={styles.category}>SELF-CARE</span>
                <h3 className={styles.blogTitle}>The Art of Saying No Without Feeling Guilty</h3>
                <p className={styles.blogDescription}>
                  Setting healthy boundaries reduces your stress emotional energy.
                </p>
                <div className={styles.authorInfo}>
                  <img src={avatar1} alt="Indira Shree" className={styles.authorAvatar} />
                  <div className={styles.authorText}>
                    <span className={styles.authorName}>Indira Shree</span>
                    <span className={styles.authorRole}>Wellness Consultant</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/blog/detail" className={styles.blogCard} style={{ textDecoration: 'none' }}>
              <img src={blog2} alt="Digital Detox" className={styles.blogImage} />
              <div className={styles.blogContent}>
                <span className={styles.category}>MINDFULNESS</span>
                <h3 className={styles.blogTitle}>Digital Detox: Finding Peace in a Wired World</h3>
                <p className={styles.blogDescription}>
                  Discover simple ways to disconnect and reconnect for a calmer mind.
                </p>
                <div className={styles.authorInfo}>
                  <img src={avatar2} alt="Shireen Audi" className={styles.authorAvatar} />
                  <div className={styles.authorText}>
                    <span className={styles.authorName}>Shireen Audi</span>
                    <span className={styles.authorRole}>Mental Health Advocate</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link to="/blog/detail" className={styles.blogCard} style={{ textDecoration: 'none' }}>
              <img src={blog3} alt="Resting is the Most Thing You Can Do" className={styles.blogImage} />
              <div className={styles.blogContent}>
                <span className={styles.category}>BRAIN HEALTH</span>
                <h3 className={styles.blogTitle}>Resting is the Most Thing You Can Do</h3>
                <p className={styles.blogDescription}>
                  Debunking hustle culture myths, builds emotional resilience.
                </p>
                <div className={styles.authorInfo}>
                  <img src={avatar3} alt="Amia Nindy" className={styles.authorAvatar} />
                  <div className={styles.authorText}>
                    <span className={styles.authorName}>Amia Nindy</span>
                    <span className={styles.authorRole}>Study Power CEO</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailReadOtherSection;
