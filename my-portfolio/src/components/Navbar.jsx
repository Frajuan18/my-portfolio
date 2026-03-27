import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { 
  FaEnvelope, FaTelegram, FaInstagram, FaGoogle, 
  FaArrowRight, FaTimes, FaBars, FaMagic, FaGem
} from 'react-icons/fa';

// --- Animation Variants ---
const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }
  }
};

// --- 3D Tilt Button Component ---
const TiltButton = ({ children, onClick, className, ...props }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [3, -3]);
  const rotateY = useTransform(x, [-100, 100], [-3, 3]);
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPercent = (e.clientX - rect.left) / rect.width - 0.5;
    const yPercent = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPercent * 100);
    y.set(yPercent * 100);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.button
      style={{ rotateX: rotateXSpring, rotateY: rotateYSpring, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navbarRef = useRef(null);

  // Section IDs that match your actual page sections
  const navLinks = [
    { name: 'Home', sectionId: '#home' },
    { name: 'About', sectionId: '#about' },
    { name: 'Experience', sectionId: '#experience' },
    { name: 'Projects', sectionId: '#projects' },
    { name: 'Skills', sectionId: '#skills' },
    { name: 'Contact', sectionId: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 80;
      // For home section, add extra padding to give distance from navbar
      const offset = sectionId === 'home' ? navbarHeight : navbarHeight;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state for navbar background
      setScrolled(window.scrollY > 20);
      
      const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 80;
      const scrollPosition = window.scrollY + navbarHeight + 100;
      
      // Get all sections
      const sections = navLinks.map(link => ({
        id: link.sectionId,
        element: document.getElementById(link.sectionId)
      })).filter(section => section.element);
      
      // Find which section is currently in view
      let currentSection = 'home';
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.element.offsetTop;
        const sectionBottom = sectionTop + section.element.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = section.id;
          break;
        }
      }
      
      // If at the very bottom of the page, set active to last section
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100) {
        currentSection = sections[sections.length - 1].id;
      }
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactOptions = [
    { id: "email", label: "Send Email", icon: <FaEnvelope className="text-gray-400" size={18} />, action: () => window.location.href = "mailto:fraolabmas@gmail.com", desc: "fraolabmas@gmail.com", number: "01" },
    { id: "telegram", label: "Telegram", icon: <FaTelegram className="text-gray-400" size={18} />, action: () => window.open("https://t.me/Fra_juan", "_blank"), desc: "@Fra_juan", number: "02" },
    { id: "instagram", label: "Instagram", icon: <FaInstagram className="text-gray-400" size={18} />, action: () => window.open("https://instagram.com/fres.h925", "_blank"), desc: "@fres.h925", number: "03" },
    { id: "gmail", label: "Gmail", icon: <FaGoogle className="text-gray-400" size={18} />, action: () => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=fraolabmas@gmail.com", "_blank"), desc: "Direct Compose", number: "04" }
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Revalia&family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        /* Add scroll margin to all sections for proper offset from navbar */
        #home {
          scroll-margin-top: 80px;
        }
        #about, #experience, #projects, #skills, #contact {
          scroll-margin-top: 80px;
        }
      `}</style>

      {/* --- CONTACT MODAL (Premium Glassmorphism) --- */}
      <AnimatePresence>
        {isContactPopupOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-2xl z-[100] flex items-center justify-center p-4"
            onClick={() => setIsContactPopupOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30, opacity: 0 }} 
              animate={{ scale: 1, y: 0, opacity: 1 }} 
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
                      <FaGem className="text-gray-400" size={10} />
                      <span className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase">Connect</span>
                      
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Revalia', cursive" }}>Get In Touch</h3>
                    <p className="text-gray-500 text-sm">Select your preferred channel</p>
                  </div>
                  <button 
                    onClick={() => setIsContactPopupOpen(false)} 
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <FaTimes className="text-gray-400" size={14} />
                  </button>
                </div>

                <div className="space-y-3">
                  {contactOptions.map((opt, i) => (
                    <motion.button
                      key={opt.id}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={opt.action}
                      className="w-full group flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-xs font-bold text-gray-500 min-w-[28px]" style={{ fontFamily: "'Revalia', cursive" }}>{opt.number}</div>
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                          {opt.icon}
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-semibold text-white">{opt.label}</div>
                          <div className="text-xs text-gray-500">{opt.desc}</div>
                        </div>
                      </div>
                      <FaArrowRight className="text-gray-600 group-hover:text-gray-400 transition-colors" size={12} />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN NAVBAR (Premium Glassmorphism) --- */}
      <motion.nav 
        ref={navbarRef}
        initial="hidden"
        animate="visible"
        variants={fadeInDown}
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${
          scrolled 
            ? 'py-3 bg-[#050505]/80 backdrop-blur-2xl border-b border-white/10 shadow-lg' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <motion.button 
            onClick={() => scrollToSection('home')} 
            className="group flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-lg">
              <span className="text-black font-black text-xl" style={{ fontFamily: "'Revalia', cursive" }}>F</span>
            </div>
            <span className="text-xl font-bold tracking-tighter text-white" style={{ fontFamily: "'Revalia', cursive" }}>
              Fraol<span className="text-gray-500">.</span>
            </span>
          </motion.button>

          {/* Desktop Nav - Glassmorphic Pill with Active Section Highlight */}
          <div className="hidden md:flex items-center gap-1 p-1 bg-white/[0.03] backdrop-blur-xl rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <motion.button
                  key={link.sectionId}
                  onClick={() => scrollToSection(link.sectionId)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'text-black' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-white rounded-full"
                      transition={{ type: "spring", duration: 0.5 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Hire Me Button - Glassmorphic */}
          <div className="hidden md:block">
            <TiltButton
              onClick={() => setIsContactPopupOpen(true)}
              className="group relative px-6 py-2.5 bg-white text-black font-bold rounded-full overflow-hidden transition-all shadow-[0_8px_32px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10 flex items-center gap-2 text-xs uppercase tracking-tighter" style={{ fontFamily: "'Revalia', cursive" }}>
                Hire Me <FaMagic className="text-black/40 group-hover:rotate-12 transition-transform" size={12} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </TiltButton>
          </div>

          {/* Mobile Toggle */}
          <motion.button 
            onClick={() => setIsMenuOpen(true)} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-gray-400 p-2 rounded-lg bg-white/5 border border-white/10"
          >
            <FaBars size={20} />
          </motion.button>
        </div>

        {/* --- MOBILE FULLSCREEN MENU with Active Section Highlight --- */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ x: '100%', opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              exit={{ x: '100%', opacity: 0 }} 
              transition={{ type: 'spring', damping: 25 }}
              className="fixed inset-0 bg-[#050505] backdrop-blur-3xl z-[90] flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center">
                    <span className="text-black font-black text-xl" style={{ fontFamily: "'Revalia', cursive" }}>F</span>
                  </div>
                  <span className="text-xl font-bold text-white" style={{ fontFamily: "'Revalia', cursive" }}>Fraol<span className="text-gray-500">.</span></span>
                </div>
                <motion.button 
                  onClick={() => setIsMenuOpen(false)} 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
                >
                  <FaTimes size={18} className="text-gray-400" />
                </motion.button>
              </div>

              <div className="flex flex-col gap-4 flex-1">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.sectionId;
                  return (
                    <motion.button
                      key={link.sectionId}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(link.sectionId)}
                      className={`text-4xl font-bold text-left py-2 transition-colors ${
                        isActive ? 'text-white' : 'text-gray-600 hover:text-gray-400'
                      }`}
                      style={{ fontFamily: "'Revalia', cursive" }}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeMobileIndicator"
                          className="w-8 h-0.5 bg-white mt-1"
                          transition={{ type: "spring", duration: 0.5 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              <div className="mt-auto pt-8">
                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => { setIsMenuOpen(false); setIsContactPopupOpen(true); }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-white text-black font-bold rounded-xl text-lg flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Revalia', cursive" }}
                >
                  Hire Me
                  <FaArrowRight size={14} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;