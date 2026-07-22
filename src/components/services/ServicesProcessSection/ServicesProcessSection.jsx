import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServicesProcessSection.module.css';
import processThumbnail from '../../../assets/images/services_thumbnail.png';

const ServicesProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Connect With Our Team",
      description: "Start by reaching out to our support team to share your concerns, emotional challenges, personal experiences, daily struggles, and wellness goals in a safe, private, and comfortable space."
    },
    {
      number: "02",
      title: "Personal Wellness Assessment",
      description: "We take time to understand your emotional needs, daily lifestyle, personal struggles, stress factors, and life challenges to create the most suitable support plan for your well-being."
    },
    {
      number: "03",
      title: "Guidance And Support Sessions",
      description: "Receive personalized guidance, counseling sessions, emotional support, stress management, and practical wellness strategies designed to improve your mental health and daily well-being."
    },
    {
      number: "04",
      title: "Progress And Care Review",
      description: "We regularly review your progress, provide continued guidance and emotional support, and help you maintain balance for long-term mental wellness, healing, self-growth, and personal development."
    }
  ];

  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            Your Wellness Journey
          </div>
          <h2 className={styles.heading}>
            Our Simple Process For Better<br/>
            Mental Wellness
          </h2>
          <p className={styles.subtitle}>
            We provide supportive mental wellness care to help you find balance, emotional strength, and peace of mind with trusted professionals.
          </p>
        </div>

        {/* Content Box */}
        <div className={styles.gridContainer}>
          {/* Left Column: Image wrapper with Book Session overlay */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <img src={processThumbnail} alt="Our Process" className={styles.mainImage} />
              
              {/* Bottom Right Cutout with Button */}
              <div className={styles.cutoutContainer}>
                <Link to="/book" className={styles.bookButton}>
                  Book Session
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Steps List */}
          <div className={styles.stepsColumn}>
            {steps.map((step, index) => (
              <div key={index} className={styles.stepRow}>
                {/* Step Number Circle */}
                <div className={styles.numberCircle}>
                  {step.number}
                </div>
                
                {/* Step Content */}
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>
                    {step.title}
                  </h3>
                  <p className={styles.stepDescription}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesProcessSection;
