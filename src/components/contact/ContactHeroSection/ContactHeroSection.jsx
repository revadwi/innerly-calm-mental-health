import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from '../../common/Navbar/Navbar';
import styles from './ContactHeroSection.module.css';

export const ContactNavbar = Navbar;

const ContactHeroSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    primaryWellness: '',
    sessionPreference: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section className={styles.heroSection}>
      {/* Dynamic Navbar Component */}
      <Navbar />

      {/* Global Constrained Wrapper */}
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          
          {/* Left Column (Copywriting & Specialist Checklist) */}
          <div className={styles.leftColumn}>
            <div>
              <h1 className={styles.title}>
                Let's Take the First Step Together
              </h1>
              
              <p className={styles.description}>
                Whether you're seeking guidance, have questions about our mindfulness programs, or simply need someone to talk to, our team is here to help you find your path to inner peace.
              </p>
            </div>

            <div className={styles.specialistChecklist}>
              <p className={styles.checklistTitle}>
                Connect with our specialists to:
              </p>
              <ul className={styles.checklist}>
                <li>Discover Personalized Care</li>
                <li>Clarify Your Path</li>
                <li>Empower Your Growth</li>
                <li>Access Expert Resources</li>
              </ul>
            </div>
          </div>

          {/* Right Column (Contact Form Container) */}
          <div className={styles.rightColumn}>
            <form onSubmit={handleSubmit} className={styles.form}>
              
              {/* Row 1: Grid 2 cols (First Name*, Last Name*) */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName" className={styles.label}>
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName" className={styles.label}>
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                    className={styles.input}
                  />
                </div>
              </div>

              {/* Row 2: WhatsApp / Phone Number* */}
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  WhatsApp / Phone Number*
                </label>
                <div className={styles.phoneInputWrapper}>
                  <img 
                    src="https://flagcdn.com/w40/au.png" 
                    alt="Australia" 
                    className={styles.flag} 
                  />
                  <span className={styles.countryCode}>+61</span>
                  <div className={styles.divider}></div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    required
                    className={styles.phoneInput}
                  />
                </div>
              </div>

              {/* Row 3: Email Address* */}
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Personal email"
                  required
                  className={styles.input}
                />
              </div>

              {/* Row 4: Grid 2 cols (Primary Wellness*, Session Preference*) */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="primaryWellness" className={styles.label}>
                    Primary Wellness*
                  </label>
                  <div className={styles.selectWrapper}>
                    <select
                      id="primaryWellness"
                      name="primaryWellness"
                      value={formData.primaryWellness}
                      onChange={handleChange}
                      required
                      className={styles.select}
                      style={{ color: formData.primaryWellness ? '#2D2825' : '#A3887E' }}
                    >
                      <option value="" disabled style={{ color: '#A3887E' }}>Current Focus</option>
                      <option value="anxiety" style={{ color: '#2D2825' }}>Anxiety & Stress Management</option>
                      <option value="mindfulness" style={{ color: '#2D2825' }}>Mindfulness & Meditation</option>
                      <option value="therapy" style={{ color: '#2D2825' }}>Individual Therapy</option>
                      <option value="coaching" style={{ color: '#2D2825' }}>Life Coaching</option>
                    </select>
                    <ChevronDown className={styles.selectIcon} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="sessionPreference" className={styles.label}>
                    Session Preference*
                  </label>
                  <div className={styles.selectWrapper}>
                    <select
                      id="sessionPreference"
                      name="sessionPreference"
                      value={formData.sessionPreference}
                      onChange={handleChange}
                      required
                      className={styles.select}
                      style={{ color: formData.sessionPreference ? '#2D2825' : '#A3887E' }}
                    >
                      <option value="" disabled style={{ color: '#A3887E' }}>Preferred Session Type</option>
                      <option value="online" style={{ color: '#2D2825' }}>Online / Virtual Session</option>
                      <option value="in-person" style={{ color: '#2D2825' }}>In-Person at Clinic</option>
                      <option value="hybrid" style={{ color: '#2D2825' }}>Hybrid</option>
                    </select>
                    <ChevronDown className={styles.selectIcon} />
                  </div>
                </div>
              </div>

              {/* Row 5: Textarea */}
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  How can we support your journey?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your problem"
                  className={styles.textarea}
                />
              </div>

              {/* Submit Button (Pill Rounded Full Width) */}
              <button
                type="submit"
                className={styles.submitButton}
              >
                Book Your Free Consultation
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
