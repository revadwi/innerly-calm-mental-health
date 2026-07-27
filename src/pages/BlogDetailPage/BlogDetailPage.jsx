import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import BlogDetailHeroSection from '../../components/blog/BlogDetailHeroSection/BlogDetailHeroSection';
import BlogDetailContentSection from '../../components/blog/BlogDetailContentSection/BlogDetailContentSection';
import BlogDetailReadOtherSection from '../../components/blog/BlogDetailReadOtherSection/BlogDetailReadOtherSection';

const BlogDetailPage = () => {
  return (
    <div className="blog-detail-page">
      <Navbar />
      <main>
        <BlogDetailHeroSection />
        <BlogDetailContentSection />
        <BlogDetailReadOtherSection />
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
