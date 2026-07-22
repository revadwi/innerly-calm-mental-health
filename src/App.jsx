import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage/ServiceDetailPage';
import BookAppointmentPage from './pages/BookAppointmentPage/BookAppointmentPage';
import TestimonialsPage from './pages/TestimonialsPage/TestimonialsPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/detail" element={<ServiceDetailPage />} />
          <Route path="/book" element={<BookAppointmentPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
