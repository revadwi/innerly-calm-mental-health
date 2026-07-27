import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Footer from '../../common/Footer/Footer';

// Cluster Logo Icon matching the organic node cluster shape in #8C9B6A
const ClusterLogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M8 40L24 24M24 56L56 24M56 56L72 40" stroke="#8C9B6A" strokeWidth="6" strokeLinecap="round" />
    <circle cx="8" cy="40" r="7" fill="#8C9B6A" />
    <circle cx="24" cy="24" r="7" fill="#8C9B6A" />
    <circle cx="24" cy="56" r="7" fill="#8C9B6A" />
    <circle cx="40" cy="40" r="7" fill="#8C9B6A" />
    <circle cx="56" cy="24" r="7" fill="#8C9B6A" />
    <circle cx="56" cy="56" r="7" fill="#8C9B6A" />
    <circle cx="72" cy="40" r="7" fill="#8C9B6A" />
  </svg>
);

export const PrivacyNavbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Book', path: '/book' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isLinkActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="w-full relative z-20 font-sans">
      <div className="flex justify-between items-center py-8">
        
        {/* Left (Brand) */}
        <Link to="/" className="flex items-center gap-3 group">
          <ClusterLogoIcon />
          <span className="font-serif text-xl font-bold text-[#8C9B6A]">Innerly</span>
        </Link>

        {/* Center (Nav Links) */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const active = isLinkActive(link.path);
            return (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={
                    active
                      ? 'text-[#1C1917] font-bold'
                      : 'text-[#78716C] hover:text-[#1C1917] transition-colors'
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Right (CTA Button - Sharp Box Shaped) */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-[#8C9B6A] text-white px-6 py-2.5 rounded-none text-sm font-medium hover:bg-[#7a885b] transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="md:hidden p-2 text-[#1C1917] focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mb-4">
          <div className="bg-[#FDFCF8] border border-[#F4EFE5] rounded-xl shadow-lg p-6 flex flex-col gap-4">
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base ${
                    active ? 'text-[#1C1917] font-bold' : 'text-[#78716C] font-medium'
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#8C9B6A] text-white text-center px-6 py-2.5 rounded-none text-sm font-medium hover:bg-[#7a885b] transition-colors mt-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const PrivacyHeroSection = () => {
  return (
    <div className="min-h-screen bg-[#FDFCF8]">
      {/* 1. Global Wrapper for all sections (Navbar, Hero, Content) */}
      <div className="w-full max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Component Details: Navbar */}
        <PrivacyNavbar />

        {/* Component Details: Hero Section (Privacy Policy Header Card) */}
        <section className="bg-[#F4EFE5] rounded-[2rem] p-10 md:p-16 my-6 text-center flex flex-col items-center justify-center gap-4">
          {/* Top Badge */}
          <div>
            <span className="bg-[#E4DACB] text-[#1C1917] text-xs md:text-sm font-medium px-5 py-1.5 rounded-full inline-block font-sans">
              Privacy Policy
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#1C1917] font-normal leading-tight max-w-2xl mt-2">
            Your Peace of Mind is Our Priority
          </h1>

          {/* Subtitle / Date */}
          <p className="text-[#78716C] text-sm md:text-base font-sans mt-1">
            Last modified: April 29, 2026
          </p>
        </section>

        {/* Content Section Below Hero */}
        <div className="mt-12 mb-20 space-y-10 text-left max-w-4xl">
          {/* Section 1: Introduction */}
          <section className="space-y-4">
            <h2 className="font-sans text-xl md:text-2xl font-semibold text-[#1C1917]">
              Introduction
            </h2>
            <p className="font-sans text-base text-[#8C7B70] leading-relaxed">
              At our core, we believe that mental well-being starts with a foundation of trust. We are committed to protecting your personal journey and ensuring that your data is handled with the same care and respect you give to your own healing process. This policy outlines how we collect, use, and safeguard your information.
            </p>
          </section>

          {/* Section 2: Using our services */}
          <section className="space-y-4">
            <h2 className="font-sans text-xl md:text-2xl font-semibold text-[#1C1917]">
              Using our services
            </h2>
            <p className="font-sans text-base text-[#8C7B70] leading-relaxed">
              Our platform is designed to be a safe space for your personal growth. By engaging with our mindfulness tools, community forums, or coaching sessions, you agree to interact in a way that promotes a supportive and healing environment for yourself and others.
            </p>
            <p className="font-sans text-base text-[#8C7B70] leading-relaxed">
              We strive to provide seamless access to resources that nourish your mind. To maintain the integrity of this sanctuary, we ask that you use our services mindfully, respecting both the technology and the community that makes this journey possible.
            </p>
          </section>

          {/* Section 3: Privacy and copyright protection */}
          <section className="space-y-4">
            <h2 className="font-sans text-xl md:text-2xl font-semibold text-[#1C1917]">
              Privacy and copyright protection
            </h2>
            <p className="font-sans text-base text-[#8C7B70] leading-relaxed">
              Your stories, reflections, and progress are uniquely yours. We respect the intellectual property of your personal breakthroughs. Any original content you share remains your own, and we use industry-standard encryption to ensure your private reflections stay private.
            </p>
            <p className="font-sans text-base text-[#8C7B70] leading-relaxed">
              We also protect the curated wisdom and therapeutic resources provided on our site. All educational materials, guided meditations, and articles are protected by copyright, ensuring that the quality and intent of our mental wellness resources remain consistent and authentic.
            </p>
          </section>

          {/* Section 4: Your content in our services */}
          <section className="space-y-4">
            <h2 className="font-sans text-xl md:text-2xl font-semibold text-[#1C1917]">
              Your content in our services
            </h2>
            <p className="font-sans text-base text-[#8C7B70] leading-relaxed">
              When you contribute to our community—whether through a journal entry, a comment, or a shared goal—you grant us a limited license to host that content so it remains accessible to you. We do not sell your personal narratives to third parties.
            </p>
            <p className="font-sans text-base text-[#8C7B70] leading-relaxed">
              Your data is used solely to personalize your wellness experience, helping us suggest the right meditation or exercise at the right time. We believe in transparency; you always retain the right to download, edit, or delete your content as you navigate your personal evolution.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyHeroSection;
