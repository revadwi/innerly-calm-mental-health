import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import AboutHeroSection from '../../components/about/AboutHeroSection/AboutHeroSection';
import AboutQuoteSection from '../../components/about/AboutQuoteSection/AboutQuoteSection';
import AboutChooseUsSection from '../../components/about/AboutChooseUsSection/AboutChooseUsSection';
import AboutSupportSection from '../../components/about/AboutSupportSection/AboutSupportSection';
import AboutCTASection from '../../components/about/AboutCTASection/AboutCTASection';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Navbar />
      <main>
        <AboutHeroSection />
        <AboutQuoteSection />
        <AboutChooseUsSection />
        <AboutSupportSection />
        <AboutCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
