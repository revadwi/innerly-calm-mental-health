import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import TestimonialsHeroSection from '../../components/testimonials/TestimonialsHeroSection/TestimonialsHeroSection';
import TestimonialsFeedbackSection from '../../components/testimonials/TestimonialsFeedbackSection/TestimonialsFeedbackSection';
import TestimonialsVideoSection from '../../components/testimonials/TestimonialsVideoSection/TestimonialsVideoSection';
import TestimonialsCTASection from '../../components/testimonials/TestimonialsCTASection/TestimonialsCTASection';

const TestimonialsPage = () => {
  return (
    <div className="testimonials-page">
      <Navbar />
      <main>
        <TestimonialsHeroSection />
        <TestimonialsFeedbackSection />
        <TestimonialsVideoSection />
        <TestimonialsCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
