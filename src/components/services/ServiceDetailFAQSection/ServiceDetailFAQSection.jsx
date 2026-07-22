import React, { useState } from 'react';
import styles from './ServiceDetailFAQSection.module.css';

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 15L12 9L18 15" stroke="#0D0503" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ServiceDetailFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // first item open by default

  const faqData = [
    {
      question: "What mental wellness services do you offer?",
      answer: "We offer a variety of mental wellness services including counseling sessions, emotional support, stress management, mindfulness guidance, and personal wellness programs."
    },
    {
      question: "How do I know which support is right for me?",
      answer: "We recommend starting with an initial consultation session. Our professionals will discuss your current goals, concerns, and lifestyle to help identify the program that best fits your wellness journey."
    },
    {
      question: "Are the sessions private and confidential?",
      answer: "Yes, confidentiality is our highest priority. All sessions, discussion content, and personal information are kept strictly private in accordance with professional ethical standards and privacy regulations."
    },
    {
      question: "How often should I attend wellness sessions?",
      answer: "The frequency of sessions depends entirely on your personal goals and needs. Most clients start with weekly or bi-weekly sessions and gradually adjust as they gain tools and feel more balanced."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        {/* Left Column: Heading & Info */}
        <div className={styles.leftColumn}>
          <div className={styles.badge}>
            Wellness Support
          </div>
          <h2 className={styles.heading}>
            Frequently<br />
            Asked Questions
          </h2>
          <p className={styles.description}>
            We understand that your mental wellness journey may come with questions. Here are some common concerns and helpful answers to support your path toward emotional balance and well-being.
          </p>
        </div>

        {/* Right Column: Accordion */}
        <div className={styles.rightColumn}>
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
              >
                <button 
                  className={styles.faqHeader}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.faqQuestion}>{item.question}</span>
                  <div className={`${styles.chevron} ${isOpen ? styles.rotated : ''}`}>
                    <ChevronIcon />
                  </div>
                </button>
                <div className={`${styles.contentWrapper} ${isOpen ? styles.expanded : ''}`}>
                  <div className={styles.faqAnswer}>
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailFAQSection;
