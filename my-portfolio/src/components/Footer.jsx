import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaTelegram, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Experience', url: '#experience' },
    { name: 'Projects', url: '#projects' },
    { name: 'Skills', url: '#skills' },
    { name: 'Contact', url: '#contact' }
  ];

  const handleTelegramClick = () => {
    window.open("https://t.me/Fra_juan", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/fres.h925", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:fraolabmas@gmail.com";
  };

  return (
    <footer className="relative bg-[#FDFDFD] overflow-hidden py-16 md:py-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-blue-100/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-purple-100/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Floating Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16"
          >
            {[
              {
                type: 'Email',
                value: 'fraolabmas@gmail.com',
                icon: <FaEnvelope className="text-blue-500" size={18} />,
                color: "from-blue-100 to-blue-50",
                action: handleEmailClick
              },
              {
                type: 'Location',
                value: 'Addis Ababa, Ethiopia',
                icon: <FaMapMarkerAlt className="text-purple-500" size={18} />,
                color: "from-purple-100 to-purple-50"
              },
              {
                type: 'Status',
                value: 'Available for Projects',
                icon: <FaCheckCircle className="text-emerald-500" size={18} />,
                color: "from-emerald-100 to-emerald-50"
              }
            ].map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={info.action}
                className="relative group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} blur-lg md:blur-xl rounded-lg md:rounded-xl -z-10 group-hover:blur-xl md:group-hover:blur-2xl transition-all duration-300`}></div>
                
                <div className="relative p-4 md:p-5 rounded-lg md:rounded-xl bg-white border border-white/80 backdrop-blur-sm 
                              shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)] 
                              group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                              transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-xs md:text-sm text-gray-500">{info.type}</div>
                      <div className="text-base md:text-lg font-medium text-[#2D2D2D]">
                        {info.value}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
            
            {/* Left - Brand Info */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100/10 to-gray-50/5 blur-xl rounded-xl -z-10 group-hover:blur-2xl transition-all duration-300"></div>
              
              <div className="relative p-6 rounded-xl bg-white border border-white/80 backdrop-blur-sm 
                            shadow-[0_15px_35px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg md:rounded-xl flex items-center justify-center shadow-sm"
                  >
                    <span className="text-white text-lg md:text-xl font-bold">F</span>
                  </motion.div>
                  <div>
                    <div className="text-sm font-bold text-[#2D2D2D] leading-tight">Fraol</div>
                    <div className="text-xs text-gray-500">Full Stack Developer & Designer</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Creating modern, functional web applications with exceptional user experiences.
                </p>
                
                {/* Social Icons */}
                <div className="flex items-center gap-4 mt-6">
                  <motion.button
                    whileHover={{ y: -3 }}
                    onClick={handleEmailClick}
                    className="w-10 h-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <FaEnvelope className="text-gray-500 hover:text-gray-700" size={16} />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ y: -3 }}
                    onClick={handleTelegramClick}
                    className="w-10 h-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <FaTelegram className="text-gray-500 hover:text-[#0088cc]" size={18} />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ y: -3 }}
                    onClick={handleInstagramClick}
                    className="w-10 h-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <FaInstagram className="text-gray-500 hover:text-[#E4405F]" size={18} />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Center - Quick Links */}
            <div>
              <h4 className="text-base md:text-lg font-semibold text-[#2D2D2D] mb-6">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 3 }}
                    className="flex items-center justify-between group/link cursor-pointer"
                  >
                    <span className="text-gray-600 group-hover/link:text-[#2D2D2D] transition-colors duration-300 text-sm md:text-base">
                      {link.name}
                    </span>
                    <FaArrowRight className="text-gray-300 group-hover/link:text-gray-400 transition-all duration-300" size={12} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right - Let's Connect */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100/10 to-gray-50/5 blur-xl rounded-xl -z-10 group-hover:blur-2xl transition-all duration-300"></div>
              
              <div className="relative p-6 rounded-xl bg-white border border-white/80 backdrop-blur-sm 
                            shadow-[0_15px_35px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]">
                <h4 className="text-base md:text-lg font-semibold text-[#2D2D2D] mb-4">Let's Connect</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Have a project in mind? I'm available for new opportunities and collaborations.
                </p>
                
                <motion.button
                  onClick={handleEmailClick}
                  whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#2D2D2D] text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 
                            shadow-[0_10px_25px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.25)]
                            transition-all duration-300 text-sm md:text-base"
                >
                  Start a Project
                  <FaArrowRight size={14} />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8 md:mb-12"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-gray-500 text-sm">
                &copy; {currentYear} Fraol. All rights reserved.
              </p>
            </motion.div>

            {/* Back to Top */}
            <motion.a 
              href="#home"
              whileHover={{ y: -3 }}
              className="flex items-center gap-2 text-gray-500 hover:text-[#2D2D2D] transition-colors duration-300 text-sm group/back"
            >
              Back to top
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-lg group-hover/back:text-[#2D2D2D]"
              >
                ↑
              </motion.div>
            </motion.a>

            {/* Final Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <p className="text-gray-400 text-sm">
                Built with React • Styled with Tailwind • Animated with Framer
              </p>
            </motion.div>
          </div>

          {/* Stats Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-gray-100"
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { value: "2+", label: "Years Experience" },
                { value: "20+", label: "Projects" },
                { value: "15+", label: "Happy Clients" }
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="text-xl md:text-2xl font-bold text-[#2D2D2D] mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;