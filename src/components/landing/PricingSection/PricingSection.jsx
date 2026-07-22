import React from 'react';
import styles from './PricingSection.module.css';
import Button from '../../common/Button/Button';

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#E29F8D"/>
    <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PricingSection = () => {
  return (
    <section className={styles.pricingSection}>
      <div className={styles.header}>
        <span className={styles.tag}>Pricing Plan</span>
        <h2 className={styles.title}>
          Choose Your<br />Mental Wellness Journey
        </h2>
      </div>

      <div className={styles.cardsContainer}>
        {/* Basic Support */}
        <div className={styles.pricingCard}>
          <div className={styles.cardHeader}>
            <h3>Basic Support</h3>
            <p>Perfect for starting your mental wellness journey with simple support.</p>
          </div>
          <div className={styles.price}>
            <span className={styles.amount}>$7</span>
            <span className={styles.period}>/ Week</span>
          </div>
          <ul className={styles.featureList}>
            <li><CheckIcon /> <span>Access to wellness resources</span></li>
            <li><CheckIcon /> <span>Self-care guidance</span></li>
            <li><CheckIcon /> <span>Stress management tips</span></li>
            <li><CheckIcon /> <span>Healthy habit support</span></li>
            <li><CheckIcon /> <span>Easy online access</span></li>
          </ul>
          <Button variant="primary" className={styles.bookButton}>Book Session</Button>
        </div>

        {/* Team Wellness */}
        <div className={styles.pricingCard}>
          <div className={styles.cardHeader}>
            <h3>Team Wellness</h3>
            <p>Mental wellness support for teams to improve balance and productivity.</p>
          </div>
          <div className={styles.price}>
            <span className={styles.amount}>$38</span>
            <span className={styles.period}>/ Team per mo</span>
          </div>
          <ul className={styles.featureList}>
            <li><CheckIcon /> <span>Team wellness resources</span></li>
            <li><CheckIcon /> <span>Group mindfulness sessions</span></li>
            <li><CheckIcon /> <span>Stress management support</span></li>
            <li><CheckIcon /> <span>Healthy workplace habits</span></li>
            <li><CheckIcon /> <span>Dedicated guidance</span></li>
          </ul>
          <Button variant="primary" className={styles.bookButton}>Book Session</Button>
        </div>

        {/* Premium Care */}
        <div className={styles.pricingCard}>
          <div className={styles.cardHeader}>
            <h3>Premium Care</h3>
            <p>Complete support for better balance and personal wellness growth.</p>
          </div>
          <div className={styles.price}>
            <span className={styles.amount}>$49</span>
            <span className={styles.period}>/ Month</span>
          </div>
          <ul className={styles.featureList}>
            <li><CheckIcon /> <span>Everything in Basic Support</span></li>
            <li><CheckIcon /> <span>Personal wellness sessions</span></li>
            <li><CheckIcon /> <span>Mindfulness practice guides</span></li>
            <li><CheckIcon /> <span>Emotional support resources</span></li>
            <li><CheckIcon /> <span>Priority assistance</span></li>
          </ul>
          <Button variant="primary" className={styles.bookButton}>Book Session</Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
