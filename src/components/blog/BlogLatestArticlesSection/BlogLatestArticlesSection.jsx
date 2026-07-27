import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogLatestArticlesSection.module.css';

import mainImg from '../../../assets/images/blog_hero_1.png'; // placeholder
import sideImg1 from '../../../assets/images/blog_hero_2.png';
import sideImg2 from '../../../assets/images/hands.png';
import sideImg3 from '../../../assets/images/testimonial_hero_meditate.png';
import avatar1 from '../../../assets/images/avatar_sarah.png';
import avatar2 from '../../../assets/images/avatar_2.png';
import avatar3 from '../../../assets/images/avatar_3.png';

const BlogLatestArticlesSection = () => {
  return (
    <section className={styles.latestArticlesSection}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <span className={styles.topPill}>Latest Article</span>
            <h2 className={styles.title}>Latest Articles</h2>
            <p className={styles.subtitle}>
              Discover the most popular and insightful articles across various topics in life, including technology, health, business, lifestyle, education, and global trends.
            </p>
          </div>

          <div className={styles.categoryFilters}>
          <button className={`${styles.filterBtn} ${styles.activeFilter}`}>All Items</button>
          <button className={styles.filterBtn}>Mindfulness</button>
          <button className={styles.filterBtn}>Self-Care</button>
          <button className={styles.filterBtn}>Therapy</button>
          <button className={styles.filterBtn}>Meditation</button>
        </div>

        <div className={styles.contentLayout}>
          {/* Main Card */}
          <Link to="/blog/detail" className={styles.mainCard} style={{ textDecoration: 'none' }}>
            <img src={mainImg} alt="The Art of Letting Go" className={styles.mainCardImg} />
            <div className={styles.mainCardBody}>
              <div className={styles.metaData}>
                <img src={avatar1} alt="Dr. Aris Julian" className={styles.avatar} />
                <span className={styles.authorName}>Dr. Aris Julian</span>
                <span className={styles.dot}>•</span>
                <span className={styles.publishDate}>Aug 25, 2024</span>
              </div>
              <h3 className={styles.mainCardTitle}>The Art of Letting Go: Finding Freedom in Emotional Release</h3>
              <p className={styles.mainCardExcerpt}>
                Explore the benefits of letting go with mindful techniques to release stress and embrace peace.
              </p>
            </div>
          </Link>

          {/* Side Cards */}
          <div className={styles.sideCardsWrapper}>
            {/* Side Card 1 */}
            <Link to="/blog/detail" className={styles.sideCard} style={{ textDecoration: 'none' }}>
              <div className={styles.sideCardBody}>
                <span className={`${styles.sidePill} ${styles.pillBlue}`}>Daily Habits</span>
                <h4 className={styles.sideCardTitle}>Digital Detox: How Unplugging Recharges Your Mental Battery</h4>
                <div className={styles.metaDataSmall}>
                  <img src={avatar2} alt="Natasha" className={styles.avatarSmall} />
                  <span className={styles.authorNameSmall}>Natasha</span>
                  <span className={styles.dot}>•</span>
                  <span className={styles.publishDateSmall}>Jan 5, 2025</span>
                </div>
              </div>
              <img src={sideImg1} alt="Digital Detox" className={styles.sideCardImg} />
            </Link>

            {/* Side Card 2 */}
            <Link to="/blog/detail" className={styles.sideCard} style={{ textDecoration: 'none' }}>
              <div className={styles.sideCardBody}>
                <span className={`${styles.sidePill} ${styles.pillGreen}`}>Resilience</span>
                <h4 className={styles.sideCardTitle}>Growth Mindset: Transforming Challenges into Opportunities</h4>
                <div className={styles.metaDataSmall}>
                  <img src={avatar3} alt="Rizal" className={styles.avatarSmall} />
                  <span className={styles.authorNameSmall}>Rizal</span>
                  <span className={styles.dot}>•</span>
                  <span className={styles.publishDateSmall}>Des 7, 2024</span>
                </div>
              </div>
              <img src={sideImg2} alt="Growth Mindset" className={styles.sideCardImg} />
            </Link>

            {/* Side Card 3 */}
            <Link to="/blog/detail" className={styles.sideCard} style={{ textDecoration: 'none' }}>
              <div className={styles.sideCardBody}>
                <span className={`${styles.sidePill} ${styles.pillYellow}`}>Sleep Hygiene</span>
                <h4 className={styles.sideCardTitle}>The Connection Between Deep Sleep and Emotional Stability</h4>
                <div className={styles.metaDataSmall}>
                  <img src={avatar1} alt="Richard" className={styles.avatarSmall} />
                  <span className={styles.authorNameSmall}>Richard</span>
                  <span className={styles.dot}>•</span>
                  <span className={styles.publishDateSmall}>Apr 6, 2024</span>
                </div>
              </div>
              <img src={sideImg3} alt="Deep Sleep" className={styles.sideCardImg} />
            </Link>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default BlogLatestArticlesSection;
