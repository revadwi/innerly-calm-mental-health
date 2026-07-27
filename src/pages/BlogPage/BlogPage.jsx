import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-[#FDFCF8] flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex items-center justify-center">
        {/* Content cleared as requested */}
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
