import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServicesListSection.module.css';

const CompassIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#E1937D" strokeWidth="2"/>
    <path d="M16.2426 7.75736L13.4142 13.4142L7.75736 16.2426L10.5858 10.5858L16.2426 7.75736Z" stroke="#E1937D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WatchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="3" width="10" height="18" rx="2" stroke="#E1937D" strokeWidth="2"/>
    <circle cx="12" cy="12" r="5" fill="white" stroke="#E1937D" strokeWidth="2"/>
    <path d="M10 12H11.5L12 10.5L12.5 13.5L13 12H14" stroke="#E1937D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WindIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 8H17C18.6569 8 20 6.65685 20 5C20 3.34315 18.6569 2 17 2" stroke="#E1937D" strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 13H19C20.6569 13 22 14.3431 22 16C22 17.6569 20.6569 19 19 19" stroke="#E1937D" strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 18H14" stroke="#E1937D" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const SyncIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.5 2V6H17.5" stroke="#E1937D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.5 22V18H6.5" stroke="#E1937D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 15.5C18.8 18.2 16.1 20 13 20C8.6 20 5 16.4 5 12C5 10.3 5.5 8.7 6.5 7.4" stroke="#E1937D" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 8.5C5.2 5.8 7.9 4 11 4C15.4 4 19 7.6 19 12C19 13.7 18.5 15.3 17.5 16.6" stroke="#E1937D" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ServicesListSection = () => {
  const services = [
    {
      icon: <CompassIcon />,
      title: "Guidance For Inner Balance",
      description: "Tailored guidance designed to help you navigate your emotional and mental health journey with ease."
    },
    {
      icon: <WatchIcon />,
      title: "Personalized Mental Wellness Support",
      description: "Support your overall well-being by integrating mental clarity, emotional stability, and healthy habits."
    },
    {
      icon: <WindIcon />,
      title: "Stress & Anxiety Management Support",
      description: "Learn practical techniques to manage stress, reduce anxiety, and regain control of your thoughts."
    },
    {
      icon: <SyncIcon />,
      title: "Continuous Emotional Care System",
      description: "Stay supported with ongoing insights and tools to help you grow, reflect, and maintain inner balance."
    }
  ];

  return (
    <section className={styles.servicesListSection}>
      <div className={styles.container}>
        <div className={styles.listWrapper}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceRow}>
              {/* Icon Circle */}
              <div className={styles.iconCircle}>
                {service.icon}
              </div>

              {/* Title Column */}
              <h3 className={styles.serviceTitle}>
                {service.title}
              </h3>

              {/* Description Column */}
              <p className={styles.serviceDescription}>
                {service.description}
              </p>

              {/* Action Button */}
              <div className={styles.actionColumn}>
                <Link to="/services/detail" className={styles.wellnessButton}>
                  Start Wellness
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesListSection;
