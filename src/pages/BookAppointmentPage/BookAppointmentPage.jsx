import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import styles from './BookAppointmentPage.module.css';

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

const BookAppointmentPage = () => {
  const [selectedDate, setSelectedDate] = useState(15); // 15 is active by default
  const [selectedTime, setSelectedTime] = useState(null); // time slot selection
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const timeSlots = [
    '9.00am', '10.00am', '11.00am', '12.00pm', '1.00pm',
    '2.00pm', '3.00pm', '4.00pm', '5.00pm'
  ];

  const daysInMonth = [
    { day: 27, isCurrentMonth: false },
    { day: 28, isCurrentMonth: false },
    { day: 29, isCurrentMonth: false },
    { day: 30, isCurrentMonth: false },
    { day: 1, isCurrentMonth: true },
    { day: 2, isCurrentMonth: true },
    { day: 3, isCurrentMonth: true },
    { day: 4, isCurrentMonth: true },
    { day: 5, isCurrentMonth: true },
    { day: 6, isCurrentMonth: true },
    { day: 7, isCurrentMonth: true },
    { day: 8, isCurrentMonth: true },
    { day: 9, isCurrentMonth: true },
    { day: 10, isCurrentMonth: true },
    { day: 11, isCurrentMonth: true },
    { day: 12, isCurrentMonth: true },
    { day: 13, isCurrentMonth: true },
    { day: 14, isCurrentMonth: true },
    { day: 15, isCurrentMonth: true },
    { day: 16, isCurrentMonth: true },
    { day: 17, isCurrentMonth: true },
    { day: 18, isCurrentMonth: true },
    { day: 19, isCurrentMonth: true },
    { day: 20, isCurrentMonth: true },
    { day: 21, isCurrentMonth: true },
    { day: 22, isCurrentMonth: true },
    { day: 23, isCurrentMonth: true },
    { day: 24, isCurrentMonth: true },
    { day: 25, isCurrentMonth: true },
    { day: 26, isCurrentMonth: true },
    { day: 27, isCurrentMonth: true },
    { day: 28, isCurrentMonth: true },
    { day: 29, isCurrentMonth: true },
    { day: 30, isCurrentMonth: true },
    { day: 31, isCurrentMonth: true }
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Appointment reserved for May ${selectedDate}, 2026 at ${selectedTime || '[Please select a time]'}`);
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      
      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.badge}>
            Take the First Step
          </div>
          <h1 className={styles.heading}>
            Personalized Mental Wellness<br />
            Care & Support
          </h1>
        </section>

        {/* Booking Card */}
        <section className={styles.bookingSection}>
          <div className={styles.bookingCard}>
            <h2 className={styles.cardTitle}>Select an appointment time</h2>
            <div className={styles.divider}></div>

            <form onSubmit={handleBooking} className={styles.bookingForm}>
              {/* Left Column: Form & Time Slots */}
              <div className={styles.formColumn}>
                <div className={styles.inputGrid}>
                  {/* First Name */}
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>First Name*</label>
                    <input 
                      type="text" 
                      placeholder="First name" 
                      required 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={styles.input}
                    />
                  </div>

                  {/* Last Name */}
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Last Name*</label>
                    <input 
                      type="text" 
                      placeholder="Last name" 
                      required 
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className={styles.input}
                    />
                  </div>

                  {/* Phone Number */}
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>WhatsApp / Phone Number*</label>
                    <div className={styles.phoneInputWrapper}>
                      <div className={styles.flagPrefix}>
                        <img 
                          src="https://flagcdn.com/w40/au.png" 
                          alt="Australia flag" 
                          className={styles.flagIcon} 
                        />
                        <span className={styles.prefixText}>+61</span>
                      </div>
                      <div className={styles.phoneDivider}></div>
                      <input 
                        type="tel" 
                        placeholder="Phone number" 
                        required 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={styles.phoneInput}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Email Address*</label>
                    <input 
                      type="email" 
                      placeholder="Personal email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={styles.input}
                    />
                  </div>
                </div>

                {/* Time Slots Area */}
                <div className={styles.slotsArea}>
                  <div className={styles.slotsGrid}>
                    {timeSlots.map((time, idx) => {
                      const isSelected = selectedTime === time;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`${styles.slotButton} ${isSelected ? styles.slotButtonSelected : ''}`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Calendar & Action Button */}
              <div className={styles.calendarColumn}>
                <div className={styles.calendarContainer}>
                  {/* Calendar Header */}
                  <div className={styles.calendarHeader}>
                    <h3 className={styles.monthTitle}>May 2026</h3>
                    <div className={styles.navArrows}>
                      <button type="button" className={styles.navArrow}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 19L8 12L15 5" stroke="#0D0503" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button type="button" className={styles.navArrow}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 5L16 12L9 19" stroke="#0D0503" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Weekdays */}
                  <div className={styles.weekdaysGrid}>
                    <span>S</span>
                    <span>M</span>
                    <span>T</span>
                    <span>W</span>
                    <span>T</span>
                    <span>F</span>
                    <span>S</span>
                  </div>

                  {/* Days */}
                  <div className={styles.daysGrid}>
                    {daysInMonth.map((item, idx) => {
                      const isSelected = item.isCurrentMonth && selectedDate === item.day;
                      return (
                        <button
                          key={idx}
                          type="button"
                          disabled={!item.isCurrentMonth}
                          onClick={() => setSelectedDate(item.day)}
                          className={`
                            ${styles.dayButton} 
                            ${!item.isCurrentMonth ? styles.dayDisabled : ''} 
                            ${isSelected ? styles.daySelected : ''}
                          `}
                        >
                          {item.day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit Action Button */}
                <button type="submit" className={styles.submitButton}>
                  Book Reservation
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Social Follow Sub-Footer */}
        <section className={styles.followSection}>
          <div className={styles.followContainer}>
            <div className={styles.followLeft}>
              <div className={styles.followLine}></div>
              <span className={styles.followText}>Follow us</span>
            </div>
            <div className={styles.socialGrid}>
              <a href="#" className={styles.socialCircle} aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className={styles.socialCircle} aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className={styles.socialCircle} aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="#" className={styles.socialCircle} aria-label="YouTube">
                <YouTubeIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookAppointmentPage;
