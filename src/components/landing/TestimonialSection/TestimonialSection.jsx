import React from 'react';
import styles from './TestimonialSection.module.css';

const TestimonialSection = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <div className={`${styles.badge} ${styles.badgeSupport}`}>Support</div>
        
        <p className={styles.quoteText}>
          "Innerly helped me find peace and manage stress better. With caring support and helpful guidance, I feel more balanced, confident, and mentally stronger every day."
        </p>

        <div className={`${styles.badge} ${styles.badgeGrowth}`}>Growth</div>
      </div>
    </section>
  );
};

export default TestimonialSection;
