import React from 'react';
import styles from './BlogWellnessVideosSection.module.css';

import video1 from '../../../assets/images/video_main.png';
import video2 from '../../../assets/images/video_small_1.png';
import video3 from '../../../assets/images/video_small_2.png';
import video4 from '../../../assets/images/video_small_3.png';
import avatar1 from '../../../assets/images/avatar_sarah.png';
import avatar2 from '../../../assets/images/avatar_2.png';
import avatar3 from '../../../assets/images/avatar_3.png';

const BlogWellnessVideosSection = () => {
  const videos = [
    {
      id: 1,
      image: video1,
      title: '10-Minute Morning Meditation for Focus',
      author: 'Natasha',
      date: 'Des 25, 2023',
      avatar: avatar1,
    },
    {
      id: 2,
      image: video2,
      title: 'Breathwork Techniques to Instant Calm',
      author: 'Sarah Jenkins',
      date: 'Feb 5, 2024',
      avatar: avatar2,
    },
    {
      id: 3,
      image: video3,
      title: 'Understanding Burnout: Signs and Recovery',
      author: 'Dr. Julian',
      date: 'Jan 14, 2025',
      avatar: avatar3,
    },
    {
      id: 4,
      image: video4,
      title: 'The Power of Journaling for Mental Clarity',
      author: 'Amalia',
      date: 'Oct 21, 2024',
      avatar: avatar1,
    },
  ];

  return (
    <section className={styles.videosSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.topPill}>Wellness Watch</span>
            <h2 className={styles.title}>Guided Wellness Videos</h2>
            <p className={styles.subtitle}>
              Visual journeys designed to help you breathe, reflect, and find balance.
            </p>
          </div>
          <div className={styles.headerRight}>
            <button className={`${styles.navBtn} ${styles.prevBtn}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button className={`${styles.navBtn} ${styles.nextBtn}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div className={styles.videoGrid}>
          {videos.map((video) => (
            <div key={video.id} className={styles.videoCard}>
              <img src={video.image} alt={video.title} className={styles.videoImg} />
              <div className={styles.overlay}></div>
              
              <button className={styles.playBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </button>

              <div className={styles.cardContent}>
                <img src={video.avatar} alt={video.author} className={styles.avatar} />
                <div className={styles.textInfo}>
                  <h3 className={styles.videoTitle}>{video.title}</h3>
                  <div className={styles.metaData}>
                    <span>{video.author}</span>
                    <span className={styles.dot}>•</span>
                    <span>{video.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogWellnessVideosSection;
