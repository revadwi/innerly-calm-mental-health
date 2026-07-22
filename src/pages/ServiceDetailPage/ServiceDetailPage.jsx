import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import ServiceDetailHero from '../../components/services/ServiceDetailHero/ServiceDetailHero';
import ServiceDetailCareSection from '../../components/services/ServiceDetailCareSection/ServiceDetailCareSection';
import ServiceDetailExploreSection from '../../components/services/ServiceDetailExploreSection/ServiceDetailExploreSection';
import ServiceDetailFAQSection from '../../components/services/ServiceDetailFAQSection/ServiceDetailFAQSection';
import ServiceDetailCTASection from '../../components/services/ServiceDetailCTASection/ServiceDetailCTASection';

const ServiceDetailPage = () => {
  return (
    <div className="service-detail-page">
      <Navbar />
      <main>
        <ServiceDetailHero />
        <ServiceDetailCareSection />
        <ServiceDetailExploreSection />
        <ServiceDetailFAQSection />
        <ServiceDetailCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
