import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import therapyBg from '../../../assets/images/therapy_session_404_bg.png';
import styles from './Hero404.module.css';

const Hero404 = ({ onBackHome }) => {
  return (
    <section className={styles.heroSection}>
      {/* Background Image Layer */}
      <div className={styles.backgroundLayer}>
        <img
          src={therapyBg}
          alt="Therapy session background with hands holding clipboard and blurred cozy interior"
          className={styles.backgroundImage}
        />
        
        {/* Soft, Lightened Gradient Overlay for Warm Visibility & Legibility */}
        <div className={styles.gradientOverlay} />
      </div>

      {/* Content Flow Container */}
      <div className={styles.contentContainer}>
        
        {/* 1. "Error 404" Tag Pill */}
        <div className={styles.errorBadgeWrapper}>
          <span className={styles.errorBadge}>
            Error 404
          </span>
        </div>

        {/* 2. Larger (Zoomed In) Main Heading */}
        <h1 className={styles.title}>
          It’s okay to be lost. <br className={styles.breakDesktop} />
          Let’s find your way back.
        </h1>

        {/* 3. Description Paragraph */}
        <p className={styles.description}>
          The page you are looking for might have moved, but your peace of mind shouldn't. Take a deep breath, reset, and let us<br className={styles.breakDesktop} />{" "}
          guide you back to a space of calm and safety.
        </p>

        {/* 4. "Back to Home Base" Primary Button */}
        <div>
          {onBackHome ? (
            <button
              onClick={onBackHome}
              className={styles.button}
            >
              <span className={styles.buttonText}>Back to Home Base</span>
              <span className={styles.buttonIconWrapper}>
                <ArrowRight className={styles.buttonIcon} />
              </span>
            </button>
          ) : (
            <Link
              to="/"
              className={styles.button}
            >
              <span className={styles.buttonText}>Back to Home Base</span>
              <span className={styles.buttonIconWrapper}>
                <ArrowRight className={styles.buttonIcon} />
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero404;
