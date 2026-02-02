import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated navLinks to match your sections exactly
  const navLinks = [
    { name: 'Home', href: '#home', section: 'home' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Experience', href: '#experience', section: 'experience' },
    { name: 'Projects', href: '#projects', section: 'projects' },
    { name: 'Skills', href: '#skills', section: 'skills' },
    { name: 'Contact', href: '#contact', section: 'contact' },
  ];

  const handleNavClick = (href, section) => {
    setIsMenuOpen(false);
    setActiveSection(section);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm' 
          : 'py-5 bg-white'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* Logo - Simple Text (Original UI) */}
          <div className="flex items-center">
            <a 
              href="#home" 
              className="text-2xl font-bold text-gray-900"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home', 'home');
              }}
            >
              Fraol<span className="text-gray-500">.</span>
            </a>
          </div>

          {/* Desktop Navigation - Simple Links (Original UI) */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, link.section);
                }}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Right Side - Hire Me Button (Original UI) */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact', 'contact');
              }}
              className="px-6 py-2.5 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors duration-300 text-sm"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button (Original UI) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 space-y-1.5">
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Simple Mobile Menu (Original UI) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href, link.section);
                    }}
                    className="text-gray-600 hover:text-gray-900 py-2 transition-colors duration-300 border-b border-gray-100 last:border-b-0"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact', 'contact');
                  }}
                  className="mt-2 px-4 py-3 bg-gray-900 text-white font-medium rounded-md text-center hover:bg-gray-800 transition-colors duration-300"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;