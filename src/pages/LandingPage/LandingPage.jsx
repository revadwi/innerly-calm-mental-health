import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import HeroSection from '../../components/landing/HeroSection/HeroSection';
import StatsSection from '../../components/landing/StatsSection/StatsSection';
import AboutSection from '../../components/landing/AboutSection/AboutSection';
import TestimonialSection from '../../components/landing/TestimonialSection/TestimonialSection';
import ServicesSection from '../../components/landing/ServicesSection/ServicesSection';
import WhyChooseUsSection from '../../components/landing/WhyChooseUsSection/WhyChooseUsSection';
import FeedbackSection from '../../components/landing/FeedbackSection/FeedbackSection';
import PricingSection from '../../components/landing/PricingSection/PricingSection';
import CTASection from '../../components/landing/CTASection/CTASection';
import Footer from '../../components/common/Footer/Footer';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <TestimonialSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <FeedbackSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
