import React from 'react';
import ContactHeroSection from '../../components/contact/ContactHeroSection/ContactHeroSection';
import Footer from '../../components/common/Footer/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#FDFCF8]">
      <main>
        <ContactHeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
