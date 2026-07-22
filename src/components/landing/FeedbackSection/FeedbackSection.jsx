import React, { useState } from 'react';
import styles from './FeedbackSection.module.css';
import singingBowlImg from '../../../assets/images/singing_bowl.png';
import avatarSarah from '../../../assets/images/avatar_sarah.png';
import avatar2 from '../../../assets/images/avatar_2.png';

const Slice = ({ index, width, height, top }) => {
  const echoes = [1, 2, 3, 4, 5, 6];
  const gap = 10;
  const step = width + gap;
  
  return (
    <div 
      className={styles.sliceWrapper} 
      style={{ 
        width: `${width}px`, 
        height: `${height}%`, 
        top: `${top}%`,
        left: `${index * step}px`
      }}
    >
      {/* Echoes */}
      {echoes.map((i) => (
        <div 
          key={i} 
          className={styles.sliceEcho}
          style={{
            transform: `translate(${i * 6}px, -${i * 6}px)`,
            zIndex: 10 - i
          }}
        />
      ))}
      
      {/* Actual Image Slice */}
      <div 
        className={styles.sliceImage}
        style={{
          backgroundImage: `url(${singingBowlImg})`,
          backgroundPosition: `calc(-${index * step}px - 50px) -${top * 4}px`,
          backgroundSize: '500px 400px'
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
    role: "Verified User",
    avatar: avatar2
  },
  {
    id: 3,
    quote: "The personalized approach and the supportive community have made all the difference in my mental wellness journey.",
    name: "Jessica Miller",
    role: "Verified User",
    avatar: avatarSarah
  },
  {
    id: 4,
    quote: "A truly remarkable experience. The tools provided are practical and easy to integrate into a busy lifestyle.",
    name: "Amanda Wright",
    role: "Verified User",
    avatar: avatar2
  },
  {
    id: 5,
    quote: "Every session feels like a breath of fresh air. The community is so supportive and I never feel alone in my journey.",
    name: "Rachel Gomez",
    role: "Verified User",
    avatar: avatarSarah
  },
  {
    id: 6,
    quote: "I can't recommend this enough. If you're struggling with daily anxiety, the resources here are a complete game changer.",
    name: "Michael Taylor",
    role: "Wellness Advocate",
    avatar: avatar2
  }
];

const FeedbackSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className={styles.feedbackSection}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.tag}>Heartfelt Feedback</span>
          <h2 className={styles.title}>
            Voices of Healing<br />and Growth
          </h2>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.navButtonPrev} onClick={prevSlide} aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#929971" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button className={styles.navButtonNext} onClick={nextSlide} aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.content}>
        {/* Left Graphic */}
        <div className={styles.graphicContainer}>
          <Slice index={0} width={58} height={45} top={25} />
          <Slice index={1} width={58} height={80} top={10} />
          <Slice index={2} width={58} height={35} top={40} />
          <Slice index={3} width={58} height={45} top={20} />
          <Slice index={4} width={58} height={45} top={40} />
          <Slice index={5} width={58} height={75} top={15} />
        </div>

        {/* Right Carousel */}
        <div className={styles.carouselContainer}>
          <div 
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentIndex * 472}px)` }} // 440px width + 32px gap
          >
            {testimonials.map((item) => (
              <div 
                key={item.id} 
                className={styles.testimonialCard}
              >
                <p className={styles.quote}>
                  {item.quote}
                </p>
                
                <div className={styles.authorArea}>
                  <img src={item.avatar} alt={item.name} className={styles.avatar} />
                  <div className={styles.authorInfo}>
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                  </div>
                  <div className={styles.quoteIcon}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 10C9 8.34315 10.3431 7 12 7H13V9H12C11.4477 9 11 9.44772 11 10V11H13V17H7V11H9V10ZM18 10C18 8.34315 19.3431 7 21 7H22V9H21C20.4477 9 20 9.44772 20 10V11H22V17H16V11H18V10Z" fill="#1C1B19"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className={styles.pagination}>
        {testimonials.map((_, index) => (
          <span 
            key={index} 
            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
        {/* Mockup shows 6 dots, but we have 4 testimonials. We can add 2 extra empty spans for visual fidelity if needed, but linking them to state is better. I will add 2 more dummy testimonials to match the 6 dots. */}
      </div>
    </section>
  );
};

export default FeedbackSection;
