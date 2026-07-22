import React from 'react';
import styles from './ServicesHeroSection.module.css';
import stressImg from '../../../assets/images/about_img_left.png';
import emotionalImg from '../../../assets/images/about_img_center.png';
import counselingImg from '../../../assets/images/hands.png';
import growthImg from '../../../assets/images/about_img_right.png';

const ServicesHeroSection = () => {
  return (
    <section className={styles.servicesHero}>
      <div className={styles.container}>
        <div className={styles.whiteCard}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.badge}>
              How We Support You
            </div>
            <h1 className={styles.heading}>
              Services Designed for Your Well-Being
            </h1>
            <p className={styles.subtitle}>
              Explore our range of mental wellness services focused on helping you understand yourself, regulate emotions, and achieve a healthier life balance.
            </p>
          </div>

          {/* Cards Grid */}
          <div className={styles.cardsGrid}>
            {/* Card 1 */}
            <div className={styles.serviceCard}>
              <img src={stressImg} alt="Stress Management" className={styles.cardImage} />
              <div className={styles.labelOverlay}>
                Stress Management
              </div>
            </div>

            {/* Card 2 */}
            <div className={styles.serviceCard}>
              <img src={emotionalImg} alt="Emotional Balance" className={styles.cardImage} />
              <div className={styles.labelOverlay}>
                Emotional Balance
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles.serviceCard}>
              <img src={counselingImg} alt="Counseling & Support" className={styles.cardImage} />
              <div className={styles.labelOverlay}>
                Counseling & Support
              </div>
            </div>

            {/* Card 4 */}
            <div className={styles.serviceCard}>
              <img src={growthImg} alt="Personal Growth" className={styles.cardImage} />
              <div className={styles.labelOverlay}>
                Personal Growth
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
