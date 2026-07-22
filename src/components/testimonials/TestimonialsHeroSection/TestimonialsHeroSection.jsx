import React from 'react';
import styles from './TestimonialsHeroSection.module.css';
import rightHeroImg from '../../../assets/images/testimonial_hero_right.png';
import meditateImg from '../../../assets/images/testimonial_hero_meditate.png';
import therapyImg from '../../../assets/images/testimonial_hero_therapy.png';
import avatarSarah from '../../../assets/images/avatar_sarah.png';
import avatar2 from '../../../assets/images/avatar_2.png';
import avatar3 from '../../../assets/images/avatar_3.png';

const TestimonialsHeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <h1 className={styles.heading}>
            Your<br />
            Journey to<br />
            Peace Begins
          </h1>

          {/* Middle Row: Meditate Image + Description */}
          <div className={styles.midRow}>
            <img src={meditateImg} alt="Meditation" className={styles.meditateImg} />
            <p className={styles.description}>
              Read how others found their balance. Explore the real stories of transformation from individuals who have reclaimed their mental clarity and emotional strength through our guidance.
            </p>
          </div>

          {/* Bottom Row: Avatars + Therapy Image & Stats */}
          <div className={styles.bottomRow}>
            {/* Avatars */}
            <div className={styles.avatarContainer}>
              <div className={styles.avatarStack}>
                <img src={avatar3} alt="User avatar" className={styles.avatarImg} />
                <img src={avatarSarah} alt="User avatar" className={styles.avatarImg} />
                <img src={avatar2} alt="User avatar" className={styles.avatarImg} />
                <span className={styles.avatarPlus}>5k+</span>
              </div>
              <span className={styles.avatarCaption}>Minds Empowered</span>
            </div>

            {/* Therapy Photo & Stats */}
            <div className={styles.statsContainer}>
              <img src={therapyImg} alt="Therapy Support" className={styles.therapyImg} />
              <div className={styles.statsList}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>120+</div>
                  <div className={styles.statLabel}>Personalized Support</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>98%</div>
                  <div className={styles.statLabel}>Found Their Balance</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Large Photo with Mindful Progress Overlay */}
        <div className={styles.rightColumn}>
          <div className={styles.imageCard}>
            <img src={rightHeroImg} alt="Mindful Progress" className={styles.rightHeroImg} />
            <div className={styles.badgeOverlay}>
              Mindful Progress
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHeroSection;
