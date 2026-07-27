import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from '../../common/Navbar/Navbar';

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
    <section className="bg-[#FDFCF8] min-h-screen text-[#1C1917] font-sans pb-16">
      {/* Dynamic Navbar Component */}
      <Navbar />

      {/* Global Constrained Wrapper */}
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column (Copywriting & Specialist Checklist) */}
          <div className="flex flex-col justify-between h-full pt-2">
            <div>
              <h1 className="font-serif text-4xl lg:text-5xl leading-tight text-[#1C1917]">
                Let's Take the First Step Together
              </h1>
              
              <p className="text-[#78716C] text-base lg:text-lg mt-6 leading-relaxed">
                Whether you're seeking guidance, have questions about our mindfulness programs, or simply need someone to talk to, our team is here to help you find your path to inner peace.
              </p>
            </div>

            <div className="mt-10 lg:mt-20">
              <p className="font-medium text-[#1C1917] text-base font-sans">
                Connect with our specialists to:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-2.5 mt-4 text-[#78716C] font-sans text-base">
                <li>Discover Personalized Care</li>
                <li>Clarify Your Path</li>
                <li>Empower Your Growth</li>
                <li>Access Expert Resources</li>
              </ul>
            </div>
          </div>

          {/* Right Column (Contact Form Container) */}
          <div className="bg-[#F4EFE5] rounded-3xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-sans">
              
              {/* Row 1: Grid 2 cols (First Name*, Last Name*) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="text-[#1C1917] font-medium text-sm mb-2 block">
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
                    className="w-full bg-white rounded-2xl px-4 py-3.5 text-sm text-[#2D2825] placeholder-[#A3887E] appearance-none border-0 outline-none focus:ring-2 focus:ring-[#8C9B6A]/40 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-[#1C1917] font-medium text-sm mb-2 block">
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
                    className="w-full bg-white rounded-2xl px-4 py-3.5 text-sm text-[#2D2825] placeholder-[#A3887E] appearance-none border-0 outline-none focus:ring-2 focus:ring-[#8C9B6A]/40 transition-all"
                  />
                </div>
              </div>

              {/* Row 2: WhatsApp / Phone Number* */}
              <div>
                <label htmlFor="phone" className="text-[#1C1917] font-medium text-sm mb-2 block">
                  WhatsApp / Phone Number*
                </label>
                <div className="w-full bg-white rounded-2xl px-4 py-3.5 flex items-center gap-2.5 focus-within:ring-2 focus-within:ring-[#8C9B6A]/40 transition-all">
                  <img 
                    src="https://flagcdn.com/w40/au.png" 
                    alt="Australia" 
                    className="w-6 h-6 rounded-full object-cover shrink-0" 
                  />
                  <span className="text-[#2D2825] font-medium text-sm shrink-0">+61</span>
                  <div className="h-5 w-[1px] bg-[#E5DED8] mx-2 shrink-0"></div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    required
                    className="w-full bg-transparent border-0 outline-none text-[#2D2825] placeholder-[#A3887E] text-sm appearance-none p-0 focus:ring-0"
                  />
                </div>
              </div>

              {/* Row 3: Email Address* */}
              <div>
                <label htmlFor="email" className="text-[#1C1917] font-medium text-sm mb-2 block">
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
                  className="w-full bg-white rounded-2xl px-4 py-3.5 text-sm text-[#2D2825] placeholder-[#A3887E] appearance-none border-0 outline-none focus:ring-2 focus:ring-[#8C9B6A]/40 transition-all"
                />
              </div>

              {/* Row 4: Grid 2 cols (Primary Wellness*, Session Preference*) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="primaryWellness" className="text-[#1C1917] font-medium text-sm mb-2 block">
                    Primary Wellness*
                  </label>
                  <div className="relative">
                    <select
                      id="primaryWellness"
                      name="primaryWellness"
                      value={formData.primaryWellness}
                      onChange={handleChange}
                      required
                      className={`w-full bg-white rounded-2xl px-4 py-3.5 text-sm appearance-none border-0 outline-none focus:ring-2 focus:ring-[#8C9B6A]/40 transition-all cursor-pointer pr-10 ${
                        formData.primaryWellness ? 'text-[#2D2825]' : 'text-[#A3887E]'
                      }`}
                    >
                      <option value="" disabled className="text-[#A3887E]">Current Focus</option>
                      <option value="anxiety" className="text-[#2D2825]">Anxiety & Stress Management</option>
                      <option value="mindfulness" className="text-[#2D2825]">Mindfulness & Meditation</option>
                      <option value="therapy" className="text-[#2D2825]">Individual Therapy</option>
                      <option value="coaching" className="text-[#2D2825]">Life Coaching</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A3887E] w-4 h-4 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="sessionPreference" className="text-[#1C1917] font-medium text-sm mb-2 block">
                    Session Preference*
                  </label>
                  <div className="relative">
                    <select
                      id="sessionPreference"
                      name="sessionPreference"
                      value={formData.sessionPreference}
                      onChange={handleChange}
                      required
                      className={`w-full bg-white rounded-2xl px-4 py-3.5 text-sm appearance-none border-0 outline-none focus:ring-2 focus:ring-[#8C9B6A]/40 transition-all cursor-pointer pr-10 ${
                        formData.sessionPreference ? 'text-[#2D2825]' : 'text-[#A3887E]'
                      }`}
                    >
                      <option value="" disabled className="text-[#A3887E]">Preferred Session Type</option>
                      <option value="online" className="text-[#2D2825]">Online / Virtual Session</option>
                      <option value="in-person" className="text-[#2D2825]">In-Person at Clinic</option>
                      <option value="hybrid" className="text-[#2D2825]">Hybrid</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A3887E] w-4 h-4 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 5: Textarea */}
              <div>
                <label htmlFor="message" className="text-[#1C1917] font-medium text-sm mb-2 block">
                  How can we support your journey?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your problem"
                  className="w-full bg-white rounded-2xl p-4 text-sm text-[#2D2825] placeholder-[#A3887E] h-36 resize-none border-0 outline-none appearance-none focus:ring-2 focus:ring-[#8C9B6A]/40 transition-all"
                />
              </div>

              {/* Submit Button (Pill Rounded Full Width) */}
              <button
                type="submit"
                className="w-full bg-[#8C9B6A] hover:bg-[#7a885b] text-white font-medium text-base text-center rounded-full py-3.5 px-6 mt-6 transition-colors shadow-sm cursor-pointer active:scale-[0.99]"
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
