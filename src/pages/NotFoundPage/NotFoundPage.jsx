import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Hero404 from '../../components/common/Hero404/Hero404';
import Footer from '../../components/common/Footer/Footer';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#1C1917] font-sans antialiased selection:bg-[#8A9468]/20 selection:text-[#8A9468]">
      <Navbar />
      <main className="flex-grow">
        <Hero404 />
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
