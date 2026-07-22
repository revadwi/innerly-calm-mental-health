import React, { useState } from 'react';
import styles from './TestimonialsFeedbackSection.module.css';
import singingBowlImg from '../../../assets/images/singing_bowl.png';
import avatarSarah from '../../../assets/images/avatar_sarah.png';
import avatar2 from '../../../assets/images/avatar_2.png';
import avatar3 from '../../../assets/images/avatar_3.png';

const Slice = ({ index, width, heightPercent, topPercent, containerWidth = 450, containerHeight = 340 }) => {
  const echoes = [1, 2, 3, 4, 5, 6];
  const gap = 20;
  const step = width + gap;
  const leftPx = index * step;
  const topPx = (containerHeight * topPercent) / 100;
  const heightPx = (containerHeight * heightPercent) / 100;
  
  return (
    <div 
      className={styles.sliceWrapper} 
      style={{ 
        width: `${width}px`, 
        height: `${heightPx}px`, 
        top: `${topPx}px`,
        left: `${leftPx}px`
      }}
    >
      {/* Echoes */}
      {echoes.map((i) => (
        <div 
          key={i} 
          className={styles.sliceEcho}
          style={{
            transform: `translate(${i * 3.5}px, -${i * 3.5}px)`,
            zIndex: 10 - i
          }}
        />
      ))}
      
      {/* Actual Image Slice */}
      <div 
        className={styles.sliceImage}
        style={{
          backgroundImage: `url(${singingBowlImg})`,
          backgroundPosition: `-${leftPx}px -${topPx}px`,
          backgroundSize: `${containerWidth}px ${containerHeight}px`
        }}
      />
    </div>
  );
};

const testimonials = [
  {
    id: 1,
    quote: "I used to feel overwhelmed by daily stress, but this platform gave me the tools to reclaim my peace. The guidance I received was compassionate, professional, and truly life-changing. I finally feel like myself again.",
    name: "Sarah Jenkins",
    role: "Verified User & Wellness Advocate",
    avatar: avatarSarah
  },
  {
    id: 2,
    quote: "Finding this space has been crucial for my daily routine. I've learned how to handle stressful days with a much healthier mindset.",
    name: "Emily Chen",
    role: "Verified User & Mind Balance Member",
    avatar: avatar2
  },
  {
    id: 3,
    quote: "The personalized approach and the supportive community have made all the difference in my mental wellness journey.",
    name: "Michael Taylor",
    role: "Verified User & Stress Care Member",
    avatar: avatar3
  },
  {
    id: 4,
    quote: "A truly remarkable experience. The tools provided are practical, effective, and easy to integrate into a busy lifestyle.",
    name: "Amanda Wright",
    role: "Verified User",
    avatar: avatarSarah
  },
  {
    id: 5,
    quote: "Every session feels like a breath of fresh air. The guidance is so thoughtful and I never feel alone in my journey.",
    name: "Rachel Gomez",
    role: "Verified User",
    avatar: avatar2
  },
  {
    id: 6,
    quote: "I can't recommend this enough. If you're struggling with daily anxiety, the resources here are a complete game changer.",
    name: "David Miller",
    role: "Wellness Advocate",
    avatar: avatar3
  }
];

const TestimonialsFeedbackSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className={styles.feedbackSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.tag}>Heartfelt Feedback</span>
            <h2 className={styles.title}>
              Voices of Healing<br />
              and Growth
            </h2>
          </div>

          <div className={styles.headerRight}>
            <button 
              onClick={prevSlide} 
              className={styles.navButtonPrev}
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#050201" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={nextSlide} 
              className={styles.navButtonNext}
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Content Row: Graphic + Slider */}
        <div className={styles.content}>
          {/* Left Graphic: Singing Bowl Slices */}
          <div className={styles.graphicContainer}>
            <Slice index={0} width={46} heightPercent={58} topPercent={14} containerWidth={450} containerHeight={340} />
            <Slice index={1} width={46} heightPercent={86} topPercent={8} containerWidth={450} containerHeight={340} />
            <Slice index={2} width={46} heightPercent={48} topPercent={22} containerWidth={450} containerHeight={340} />
            <Slice index={3} width={46} heightPercent={58} topPercent={10} containerWidth={450} containerHeight={340} />
            <Slice index={4} width={46} heightPercent={58} topPercent={30} containerWidth={450} containerHeight={340} />
            <Slice index={5} width={46} heightPercent={84} topPercent={10} containerWidth={450} containerHeight={340} />
          </div>

          {/* Right Cards Slider */}
          <div className={styles.sliderWindow}>
            <div 
              className={styles.sliderTrack}
              style={{ transform: `translateX(-${currentIndex * 520}px)` }}
            >
              {testimonials.map((item) => (
                <div key={item.id} className={styles.card}>
                  <p className={styles.quoteText}>{item.quote}</p>
                  
                  <div className={styles.cardFooter}>
                    <div className={styles.userInfo}>
                      <div className={styles.avatarWrapper}>
                        <img src={item.avatar} alt={item.name} className={styles.avatar} />
                      </div>
                      <div className={styles.userDetails}>
                        <h4 className={styles.userName}>{item.name}</h4>
                        <span className={styles.userRole}>{item.role}</span>
                      </div>
                    </div>
                    
                    {/* Big Quote Mark */}
                    <div className={styles.quoteIcon}>
                      <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 24V14.4C0 10.1333 1.16667 6.46667 3.5 3.4C5.83333 0.333333 9.03333 -0.8 13.1 0L10.7 5.4C8.76667 5.86667 7.23333 6.76667 6.1 8.1C4.96667 9.43333 4.4 11 4.4 12.8H11.2V24H0ZM16.8 24V14.4C16.8 10.1333 17.9667 6.46667 20.3 3.4C22.6333 0.333333 25.8333 -0.8 29.9 0L27.5 5.4C25.5667 5.86667 24.0333 6.76667 22.9 8.1C21.7667 9.43333 21.2 11 21.2 12.8H28V24H16.8Z" fill="#050201"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className={styles.paginationDots}>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`${styles.dot} ${currentIndex === idx ? styles.activeDot : ''}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsFeedbackSection;
