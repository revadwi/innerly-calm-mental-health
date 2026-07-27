import React from 'react';
import styles from './TestimonialsVideoSection.module.css';

import videoMain from '../../../assets/images/video_main.png';
import videoSmall1 from '../../../assets/images/video_small_1.png';
import videoSmall2 from '../../../assets/images/video_small_2.png';
import videoSmall3 from '../../../assets/images/video_small_3.png';

const TestimonialsVideoSection = () => {
  return (
    <section className={styles.videoSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Video Spotlight</span>
          <h2 className={styles.title}>Real Stories of Healing and Growth</h2>
        </div>
        
        <div className={styles.mainVideoContainer}>
          <img src={videoMain} alt="Main Video" className={styles.mainVideoImage} />
          <button className={styles.playButtonMain} aria-label="Play video">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <polygon points="6 4 20 12 6 20 6 4"></polygon>
            </svg>
          </button>
        </div>

        <div className={styles.subHeader}>
          <h3 className={styles.subTitle}>Another Clients Says</h3>
        </div>

        <div className={styles.smallVideosGrid}>
          {/* Card 1 */}
          <div className={styles.videoCard}>
            <div className={styles.smallVideoContainer}>
              <img src={videoSmall1} alt="Video 1" className={styles.smallVideoImage} />
              <button className={styles.playButtonSmall} aria-label="Play video">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <polygon points="6 4 20 12 6 20 6 4"></polygon>
                </svg>
              </button>
            </div>
            <h4 className={styles.cardTitle}>How I Found Healing</h4>
          </div>

          {/* Card 2 */}
          <div className={styles.videoCard}>
            <div className={styles.smallVideoContainer}>
              <img src={videoSmall2} alt="Video 2" className={styles.smallVideoImage} />
              <button className={styles.playButtonSmall} aria-label="Play video">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <polygon points="6 4 20 12 6 20 6 4"></polygon>
                </svg>
              </button>
            </div>
            <h4 className={styles.cardTitle}>How Therapy Changed Me</h4>
          </div>

          {/* Card 3 */}
          <div className={styles.videoCard}>
            <div className={styles.smallVideoContainer}>
              <img src={videoSmall3} alt="Video 3" className={styles.smallVideoImage} />
              <button className={styles.playButtonSmall} aria-label="Play video">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <polygon points="6 4 20 12 6 20 6 4"></polygon>
                </svg>
              </button>
            </div>
            <h4 className={styles.cardTitle}>Rediscovering My Inner Peace</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsVideoSection;
