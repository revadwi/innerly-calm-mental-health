import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import ServicesHeroSection from '../../components/services/ServicesHeroSection/ServicesHeroSection';
import ServicesListSection from '../../components/services/ServicesListSection/ServicesListSection';
import ServicesProcessSection from '../../components/services/ServicesProcessSection/ServicesProcessSection';
import PricingSection from '../../components/landing/PricingSection/PricingSection';
import ServicesCTASection from '../../components/services/ServicesCTASection/ServicesCTASection';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <Navbar />
      <main>
        <ServicesHeroSection />
        <ServicesListSection />
        <ServicesProcessSection />
        <PricingSection />
        <ServicesCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
