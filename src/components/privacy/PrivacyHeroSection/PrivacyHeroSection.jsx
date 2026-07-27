import React from 'react';
import Navbar from '../../common/Navbar/Navbar';
import Footer from '../../common/Footer/Footer';
import styles from './PrivacyHeroSection.module.css';

const PrivacyHeroSection = () => {
  return (
    <div className={styles.container}>
      {/* 1. Global Wrapper for all sections (Navbar, Hero, Content) */}
      <div className={styles.wrapper}>
        
        {/* Component Details: Navbar */}
        <Navbar />

        {/* Component Details: Hero Section (Privacy Policy Header Card) */}
        <section className={styles.heroSection}>
          {/* Top Badge */}
          <div>
            <span className={styles.badge}>
              Privacy Policy
            </span>
          </div>

          {/* Main Heading */}
          <h1 className={styles.title}>
            Your Peace of Mind is Our Priority
          </h1>

          {/* Subtitle / Date */}
          <p className={styles.subtitle}>
            Last modified: April 29, 2026
          </p>
        </section>

        {/* Content Section Below Hero */}
        <div className={styles.content}>
          {/* Section 1: Introduction */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Introduction
            </h2>
            <p className={styles.sectionText}>
              At our core, we believe that mental well-being starts with a foundation of trust. We are committed to protecting your personal journey and ensuring that your data is handled with the same care and respect you give to your own healing process. This policy outlines how we collect, use, and safeguard your information.
            </p>
          </section>

          {/* Section 2: Using our services */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Using our services
            </h2>
            <p className={styles.sectionText}>
              Our platform is designed to be a safe space for your personal growth. By engaging with our mindfulness tools, community forums, or coaching sessions, you agree to interact in a way that promotes a supportive and healing environment for yourself and others.
            </p>
            <p className={styles.sectionText}>
              We strive to provide seamless access to resources that nourish your mind. To maintain the integrity of this sanctuary, we ask that you use our services mindfully, respecting both the technology and the community that makes this journey possible.
            </p>
          </section>

          {/* Section 3: Privacy and copyright protection */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Privacy and copyright protection
            </h2>
            <p className={styles.sectionText}>
              Your stories, reflections, and progress are uniquely yours. We respect the intellectual property of your personal breakthroughs. Any original content you share remains your own, and we use industry-standard encryption to ensure your private reflections stay private.
            </p>
            <p className={styles.sectionText}>
              We also protect the curated wisdom and therapeutic resources provided on our site. All educational materials, guided meditations, and articles are protected by copyright, ensuring that the quality and intent of our mental wellness resources remain consistent and authentic.
            </p>
          </section>

          {/* Section 4: Your content in our services */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Your content in our services
            </h2>
            <p className={styles.sectionText}>
              When you contribute to our community—whether through a journal entry, a comment, or a shared goal—you grant us a limited license to host that content so it remains accessible to you. We do not sell your personal narratives to third parties.
            </p>
            <p className={styles.sectionText}>
              Your data is used solely to personalize your wellness experience, helping us suggest the right meditation or exercise at the right time. We believe in transparency; you always retain the right to download, edit, or delete your content as you navigate your personal evolution.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyHeroSection;
