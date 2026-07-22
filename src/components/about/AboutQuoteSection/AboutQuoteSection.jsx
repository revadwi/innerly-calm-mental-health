import React from 'react';
import styles from './AboutQuoteSection.module.css';

const AboutQuoteSection = () => {
  return (
    <section className={styles.quoteSection}>
      <div className={styles.container}>
        <div className={styles.quoteCard}>
          <div className={`${styles.sticker} ${styles.stickerSupport}`}>
            Support
          </div>
          <div className={`${styles.sticker} ${styles.stickerGrowth}`}>
            Growth
          </div>
          
          <h2 className={styles.quoteText}>
            "Innerly helped me find peace and manage stress better. With caring support and helpful guidance, I feel more balanced, confident, and mentally stronger every day."
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutQuoteSection;
