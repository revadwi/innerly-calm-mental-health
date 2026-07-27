import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import therapyBg from '../../../assets/images/therapy_session_404_bg.png';

const Hero404 = ({ onBackHome }) => {
  return (
    <section className="w-full min-h-[85vh] flex flex-col items-center justify-center text-center relative px-4 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={therapyBg}
          alt="Therapy session background with hands holding clipboard and blurred cozy interior"
          className="w-full h-full object-cover object-center scale-105"
        />
        
        {/* Soft, Lightened Gradient Overlay for Warm Visibility & Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/40 backdrop-blur-[0.5px]" />
      </div>

      {/* Content Flow Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center text-center py-16 px-4">
        
        {/* 1. "Error 404" Tag Pill */}
        <div className="mb-8">
          <span className="px-7 py-2 rounded-full bg-white shadow-sm inline-block text-xs md:text-sm font-medium text-[#2E3127] tracking-wider">
            Error 404
          </span>
        </div>

        {/* 2. Larger (Zoomed In) Main Heading */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-[1.05] tracking-[-0.02em] max-w-4xl mb-6 drop-shadow-sm">
          It’s okay to be lost. <br className="hidden sm:inline" />
          Let’s find your way back.
        </h1>

        {/* 3. Description Paragraph */}
        <p className="font-light text-sm sm:text-base md:text-[16px] text-[#F5F4F0] leading-[1.7] tracking-[0.01em] max-w-[1100px] w-full mx-auto text-center mb-10 px-4 drop-shadow-sm">
          The page you are looking for might have moved, but your peace of mind shouldn't. Take a deep breath, reset, and let us<br className="hidden sm:inline" />{" "}
          guide you back to a space of calm and safety.
        </p>

        {/* 4. "Back to Home Base" Primary Button */}
        <div>
          {onBackHome ? (
            <button
              onClick={onBackHome}
              className="bg-white text-[#2E3127] pl-8 pr-2.5 py-2.5 rounded-full font-medium text-sm md:text-base flex items-center gap-5 shadow-xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer active:scale-100"
            >
              <span className="font-medium text-[#2E3127]">Back to Home Base</span>
              <span className="w-10 h-10 bg-[#8A9468] rounded-full flex items-center justify-center text-white shrink-0 group-hover:bg-[#788257] transition-colors duration-300">
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
              </span>
            </button>
          ) : (
            <Link
              to="/"
              className="bg-white text-[#2E3127] pl-8 pr-2.5 py-2.5 rounded-full font-medium text-sm md:text-base flex items-center gap-5 shadow-xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer active:scale-100"
            >
              <span className="font-medium text-[#2E3127]">Back to Home Base</span>
              <span className="w-10 h-10 bg-[#8A9468] rounded-full flex items-center justify-center text-white shrink-0 group-hover:bg-[#788257] transition-colors duration-300">
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero404;
