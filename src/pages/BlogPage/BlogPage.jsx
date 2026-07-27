import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import BlogHeroSection from '../../components/blog/BlogHeroSection/BlogHeroSection';
import BlogFeaturedSection from '../../components/blog/BlogFeaturedSection/BlogFeaturedSection';
import BlogLatestArticlesSection from '../../components/blog/BlogLatestArticlesSection/BlogLatestArticlesSection';
import BlogWellnessVideosSection from '../../components/blog/BlogWellnessVideosSection/BlogWellnessVideosSection';
import BlogCTASection from '../../components/blog/BlogCTASection/BlogCTASection';

const BlogPage = () => {
  return (
    <div className="blog-page">
      <Navbar />
      <main>
        <BlogHeroSection />
        <BlogFeaturedSection />
        <BlogLatestArticlesSection />
        <BlogWellnessVideosSection />
        <BlogCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
