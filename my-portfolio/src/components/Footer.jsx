import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowRight, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, 
  FaTelegram, FaInstagram, FaGithub, FaLinkedin,
  FaGoogle, FaTimes, FaGem
} from 'react-icons/fa';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const Footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const contactOptions = [
    { id: "email", label: "Send Email", icon: <FaEnvelope className="text-gray-400" size={18} />, action: () => window.location.href = "mailto:fraolabmas@gmail.com", desc: "fraolabmas@gmail.com", number: "01" },
    { id: "telegram", label: "Telegram", icon: <FaTelegram className="text-gray-400" size={18} />, action: () => window.open("https://t.me/Fra_juan", "_blank"), desc: "@Fra_juan", number: "02" },
    { id: "instagram", label: "Instagram", icon: <FaInstagram className="text-gray-400" size={18} />, action: () => window.open("https://instagram.com/fres.h925", "_blank"), desc: "@fres.h925", number: "03" },
    { id: "gmail", label: "Gmail", icon: <FaGoogle className="text-gray-400" size={18} />, action: () => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=fraolabmas@gmail.com", "_blank"), desc: "Direct Compose", number: "04" }
  ];

  const quickLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Experience', url: '#experience' },
    { name: 'Projects', url: '#projects' },
    { name: 'Skills', url: '#skills' },
    { name: 'Contact', url: '#contact' }
  ];

  const contactInfo = [
    {
      type: 'Email',
      value: 'fraolabmas@gmail.com',
      icon: <FaEnvelope className="text-gray-400" size={16} />,
      action: () => window.location.href = "mailto:fraolabmas@gmail.com"
    },
    {
      type: 'Location',
      value: 'Addis Ababa, Ethiopia',
      icon: <FaMapMarkerAlt className="text-gray-400" size={16} />
    },
    {
      type: 'Status',
      value: 'Available for Projects',
      icon: <FaCheckCircle className="text-gray-400" size={16} />
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/fraol", label: "GitHub" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/fraol", label: "LinkedIn" },
    { icon: <FaTelegram />, link: "https://t.me/Fra_juan", label: "Telegram" },
    { icon: <FaInstagram />, link: "https://instagram.com/fres.h925", label: "Instagram" }
  ];

  const handleEmailClick = () => window.location.href = "mailto:fraolabmas@gmail.com";

  return (
    <>
      {/* CONTACT MODAL - Premium Glassmorphism */}
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-2xl z-[100] flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsPopupOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="w-full max-w-xl bg-white/[0.05] backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 bg-gradient-to-br from-black/80 to-black/60 p-6 md:p-8 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                    <FaGem className="text-gray-400" size={10} />
                    <span className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase">Connect</span>
                    
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tighter" style={{ fontFamily: "'Revalia', cursive" }}>Start a project.</h3>
                  <p className="text-gray-400 mt-3 text-sm leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>Let's bring your ideas to life together.</p>
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-8 hidden md:block" style={{ fontFamily: "'Poppins', sans-serif" }}>Fraol Labs © {currentYear}</div>
                </div>
                
                <div className="md:w-3/5 p-6 md:p-8 space-y-3 bg-white/[0.02]">
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
                          <div className="text-sm font-semibold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>{opt.label}</div>
                          <div className="text-xs text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>{opt.desc}</div>
                        </div>
                      </div>
                      <FaArrowRight className="text-gray-600 group-hover:text-gray-400 transition-colors" size={12} />
                    </motion.button>
                  ))}
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-4 text-center md:hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>Fraol Labs © {currentYear}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="relative bg-[#050505] overflow-hidden py-16 md:py-20">
        
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            
            {/* Contact Info Cards - Simple Glass */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-4 mb-16"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{ y: -3 }}
                  onClick={info.action}
                  className={info.action ? "cursor-pointer" : ""}
                >
                  <div className="group relative p-4 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-0.5" style={{ fontFamily: "'Poppins', sans-serif" }}>{info.type}</div>
                        <div className="text-sm font-medium text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {info.value}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Main Footer Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              
              {/* Brand Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <span className="text-black text-lg font-bold" style={{ fontFamily: "'Revalia', cursive" }}>F</span>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white" style={{ fontFamily: "'Revalia', cursive" }}>Fraol</div>
                    <div className="text-xs text-gray-500" style={{ fontFamily: "'Poppins', sans-serif" }}>Full Stack Developer</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Creating modern, functional web applications with exceptional user experiences.
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2, scale: 1.05 }}
                      className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-base font-bold text-white mb-5" style={{ fontFamily: "'Revalia', cursive" }}>Quick Links</h4>
                <div className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      initial={{ opacity: 0, x: -5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      whileHover={{ x: 3 }}
                      className="flex items-center justify-between group/link py-1"
                    >
                      <span className="text-gray-400 group-hover/link:text-white transition-colors text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {link.name}
                      </span>
                      <FaArrowRight className="text-gray-600 group-hover/link:text-gray-400 transition-all" size={10} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Connect Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="p-5 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/10">
                  <h4 className="text-base font-bold text-white mb-2" style={{ fontFamily: "'Revalia', cursive" }}>Let's Connect</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Have a project in mind? I'm available for new opportunities.
                  </p>
                  <motion.button
                    onClick={() => setIsPopupOpen(true)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2.5 rounded-lg bg-white text-black font-medium flex items-center justify-center gap-2 transition-all text-sm"
                    style={{ fontFamily: "'Revalia', cursive" }}
                  >
                    <span>Start a Project</span>
                    <FaArrowRight size={12} />
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-xs" style={{ fontFamily: "'Poppins', sans-serif" }}>
                © {currentYear} Fraol. All rights reserved.
              </p>
              
              <motion.a 
                href="#home"
                whileHover={{ y: -2 }}
                className="flex items-center gap-1 text-gray-500 hover:text-white transition-colors text-xs"
              >
                Back to top ↑
              </motion.a>
            </div>

            {/* Tagline */}
            <div className="text-center mt-6 pt-4 border-t border-white/5">
              <p className="text-gray-600 text-[10px]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Built with React • Tailwind CSS • Framer Motion
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Revalia&family=Poppins:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </>
  );
};

export default Footer;