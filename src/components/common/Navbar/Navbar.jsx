import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// 6-petal green geometric dots SVG logo (#8A9468)
export const InnerlyLogoIcon = ({ className = "w-8 h-8" }) => (
  <svg 
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`shrink-0 ${className}`}
  >
    <circle cx="20" cy="20" r="2.5" fill="#8A9468" />
    <circle cx="31" cy="20" r="3.2" fill="#8A9468" />
    <circle cx="25.5" cy="10.47" r="3.2" fill="#8A9468" />
    <circle cx="14.5" cy="10.47" r="3.2" fill="#8A9468" />
    <circle cx="9" cy="20" r="3.2" fill="#8A9468" />
    <circle cx="14.5" cy="29.53" r="3.2" fill="#8A9468" />
    <circle cx="25.5" cy="29.53" r="3.2" fill="#8A9468" />
    <path 
      d="M20 17.5C21.8 17.5 23.6 14.8 25.5 10.47M20 17.5C18.2 17.5 16.4 14.8 14.5 10.47M20 22.5C21.8 22.5 23.6 25.2 25.5 29.53M20 22.5C18.2 22.5 16.4 25.2 14.5 29.53M17.5 20C17.5 18.2 14.8 16.4 9 20M22.5 20C22.5 18.2 25.2 16.4 31 20" 
      stroke="#8A9468" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
      opacity="0.35"
    />
  </svg>
);

const Navbar = () => {
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
    <header className="sticky top-0 z-50 w-full bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#F4EFE5]/60 transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-5 flex justify-between items-center">
        
        {/* Brand Logo (Left) */}
        <Link to="/" className="flex items-center gap-2.5 group transition-transform duration-200 hover:scale-[1.01]">
          <InnerlyLogoIcon className="w-8 h-8 md:w-9 md:h-9" />
          <span className="font-serif text-2xl md:text-[26px] font-bold tracking-tight text-[#8A9468]">
            Innerly
          </span>
        </Link>

        {/* Nav Links (Center) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isLinkActive(link.path);
            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                  active
                    ? 'text-[#8A9468] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#8A9468] after:rounded-full'
                    : 'text-[#404533] hover:text-[#8A9468]'
                }`}
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* CTA Button (Right) */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-[#8A9468] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#788257] active:bg-[#687247] transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-[#404533] hover:text-[#8A9468] hover:bg-[#8A9468]/10 transition-colors focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF9F5] border-t border-[#F4EFE5] px-6 py-5 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors py-1 ${
                    active ? 'text-[#8A9468] font-semibold' : 'text-[#404533] hover:text-[#8A9468]'
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center bg-[#8A9468] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#788257] transition-all duration-300 shadow-sm text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
