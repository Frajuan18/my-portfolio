import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaTelegram, FaInstagram, FaGoogle, FaArrowRight, FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navbarRef = useRef(null);

  const navLinks = [
    { name: 'Home', sectionId: 'home' },
    { name: 'About', sectionId: 'about' },
    { name: 'Experience', sectionId: 'experience' },
    { name: 'Projects', sectionId: 'projects' },
    { name: 'Skills', sectionId: 'skills' },
    { name: 'Contact', sectionId: 'contact' },
  ];

  // Scroll to section function - FIXED FOR MOBILE
  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      // Get navbar height
      let navbarHeight = 70; // default
      if (navbarRef.current) {
        navbarHeight = navbarRef.current.offsetHeight;
      }
      
      // Calculate position
      const elementTop = element.offsetTop;
      const offsetPosition = elementTop - navbarHeight;
      
      // Smooth scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update active section
      setActiveSection(sectionId);
    }
  };

  // Scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      const sections = navLinks.map(link => link.sectionId);
      const scrollPosition = window.scrollY + 100;
      
      let current = 'home';
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            current = sectionId;
            break;
          }
        }
      }
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const contactOptions = [
    {
      id: "email",
      label: "Send Email",
      icon: <FaEnvelope className="text-blue-500" size={20} />,
      action: () => window.location.href = "mailto:fraolabmas@gmail.com",
      color: "from-blue-100 to-blue-50",
      description: "fraolabmas@gmail.com"
    },
    {
      id: "telegram",
      label: "Message on Telegram",
      icon: <FaTelegram className="text-sky-500" size={20} />,
      action: () => window.open("https://t.me/Fra_juan", "_blank"),
      color: "from-sky-100 to-sky-50",
      description: "@Fra_juan"
    },
    {
      id: "instagram",
      label: "DM on Instagram",
      icon: <FaInstagram className="text-pink-500" size={20} />,
      action: () => window.open("https://instagram.com/fres.h925", "_blank"),
      color: "from-pink-100 to-pink-50",
      description: "@fres.h925"
    },
    {
      id: "gmail",
      label: "Open Gmail",
      icon: <FaGoogle className="text-red-500" size={20} />,
      action: () => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=fraolabmas@gmail.com", "_blank"),
      color: "from-red-100 to-red-50",
      description: "Compose in Gmail"
    }
  ];

  return (
    <>
      {/* Contact Popup Modal */}
      <AnimatePresence>
        {isContactPopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            onClick={() => setIsContactPopupOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20 blur-3xl rounded-3xl -z-10"></div>
              
              <div className="relative rounded-3xl bg-white border border-white/80 backdrop-blur-sm 
                            shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.9)]
                            overflow-hidden">
                
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#2D2D2D]">Get in Touch</h3>
                      <p className="text-gray-500 text-sm mt-1">Choose how you'd like to contact me</p>
                    </div>
                    <motion.button
                      whileHover={{ rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsContactPopupOpen(false)}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <FaTimes className="text-gray-500" size={16} />
                    </motion.button>
                  </div>
                </div>
                
                <div className="p-6 space-y-3">
                  {contactOptions.map((option, index) => (
                    <motion.button
                      key={option.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        option.action();
                        setIsContactPopupOpen(false);
                      }}
                      className="relative group w-full text-left"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${option.color} blur-lg rounded-xl -z-10 group-hover:blur-xl transition-all duration-300`}></div>
                      
                      <div className="relative p-4 rounded-xl bg-white/90 border border-white/80 backdrop-blur-sm 
                                    shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)] 
                                    group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                                    transition-all duration-300">
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
                              {option.icon}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-[#2D2D2D]">{option.label}</div>
                              <div className="text-xs text-gray-500 mt-1">{option.description}</div>
                            </div>
                          </div>
                          
                          <motion.div
                            animate={{ x: [0, 3, 0] }}
                            transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
                              <FaArrowRight className="text-gray-500 group-hover:text-gray-700 transition-colors" size={12} />
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
                
                <div className="p-6 border-t border-gray-100 bg-gradient-to-r from-gray-50/50 to-white/50">
                  <p className="text-center text-sm text-gray-500">
                    I typically respond within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav 
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-4 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm' 
            : 'py-5 bg-white'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')}
              className="text-xl sm:text-2xl font-bold text-[#2D2D2D] hover:text-gray-700 transition-colors flex items-center"
            >
              Fraol<span className="text-gray-500">.</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.sectionId}
                  onClick={() => scrollToSection(link.sectionId)}
                  className={`text-sm font-medium transition-colors duration-300 relative group ${
                    activeSection === link.sectionId 
                      ? 'text-[#2D2D2D] font-semibold' 
                      : 'text-gray-600 hover:text-[#2D2D2D]'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#2D2D2D] transition-all duration-300 ${
                    activeSection === link.sectionId ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Desktop Hire Me Button */}
            <div className="hidden md:block">
              <motion.button
                onClick={() => setIsContactPopupOpen(true)}
                whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-[#2D2D2D] text-white font-medium rounded-full shadow-lg shadow-gray-200 hover:shadow-gray-300 transition-all duration-300 text-sm"
              >
                Hire Me
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 transition-colors p-2"
                aria-label="Toggle menu"
              >
                <FaBars size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - FIXED POSITION */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="md:hidden fixed inset-0 bg-white z-50 pt-20"
            >
              {/* Mobile Menu Content */}
              <div className="h-full overflow-y-auto px-6 pb-6">
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.sectionId}
                      onClick={() => scrollToSection(link.sectionId)}
                      className={`py-4 text-left border-b border-gray-100 last:border-b-0 transition-colors duration-300 flex items-center justify-between ${
                        activeSection === link.sectionId 
                          ? 'text-[#2D2D2D] font-semibold' 
                          : 'text-gray-600 hover:text-[#2D2D2D]'
                      }`}
                    >
                      <span className="text-lg">{link.name}</span>
                      <FaArrowRight className={`transform transition-transform ${activeSection === link.sectionId ? 'rotate-0' : '-rotate-45'}`} size={16} />
                    </button>
                  ))}
                  
                  {/* Mobile Hire Me Button */}
                  <motion.button
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsContactPopupOpen(true);
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 px-6 py-4 bg-[#2D2D2D] text-white font-medium rounded-xl text-center hover:bg-gray-800 transition-colors duration-300 text-lg w-full"
                  >
                    Hire Me
                  </motion.button>
                  
                  {/* Mobile Contact Info */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-500 mb-4">Contact Me</h4>
                    <div className="flex justify-center space-x-6">
                      <button
                        onClick={() => {
                          setIsMenuOpen(false);
                          window.location.href = "mailto:fraolabmas@gmail.com";
                        }}
                        className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <FaEnvelope className="text-gray-500 hover:text-gray-700" size={18} />
                      </button>
                      
                      <button
                        onClick={() => {
                          setIsMenuOpen(false);
                          window.open("https://t.me/Fra_juan", "_blank");
                        }}
                        className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <FaTelegram className="text-gray-500 hover:text-[#0088cc]" size={20} />
                      </button>
                      
                      <button
                        onClick={() => {
                          setIsMenuOpen(false);
                          window.open("https://instagram.com/fres.h925", "_blank");
                        }}
                        className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <FaInstagram className="text-gray-500 hover:text-[#E4405F]" size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Close Button for Mobile Menu */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-2"
              >
                <FaTimes size={24} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;