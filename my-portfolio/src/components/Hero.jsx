import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaEnvelope, FaTelegram, FaInstagram, 
  FaPalette, FaDatabase, FaCode, FaArrowRight,
  FaTimes, FaGoogle
} from "react-icons/fa";
import profileImage from "../assets/unnamed (1).jpg";

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const skills = [
    { 
      title: "UI/UX Design", 
      icon: <FaPalette className="text-blue-500" size={18} />, 
      color: "blue"
    },
    { 
      title: "Database Design", 
      icon: <FaDatabase className="text-purple-500" size={18} />, 
      color: "purple"
    },
    { 
      title: "Full Stack Dev", 
      icon: <FaCode className="text-emerald-500" size={18} />, 
      color: "emerald"
    },
  ];

  const handleEmailClick = () => {
    window.location.href = "mailto:fraolabmas@gmail.com";
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/Fra_juan", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/fres.h925", "_blank");
  };

  const contactOptions = [
    {
      id: "email",
      label: "Send Email",
      icon: <FaEnvelope className="text-blue-500" size={20} />,
      action: handleEmailClick,
      color: "from-blue-100 to-blue-50",
      description: "fraolabmas@gmail.com"
    },
    {
      id: "telegram",
      label: "Message on Telegram",
      icon: <FaTelegram className="text-sky-500" size={20} />,
      action: handleTelegramClick,
      color: "from-sky-100 to-sky-50",
      description: "@Fra_juan"
    },
    {
      id: "instagram",
      label: "DM on Instagram",
      icon: <FaInstagram className="text-pink-500" size={20} />,
      action: handleInstagramClick,
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
        {isPopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsPopupOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Floating Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20 blur-3xl rounded-3xl -z-10"></div>
              
              <div className="relative rounded-3xl bg-white border border-white/80 backdrop-blur-sm 
                            shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.9)]
                            overflow-hidden">
                
                {/* Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#2D2D2D]">Get in Touch</h3>
                      <p className="text-gray-500 text-sm mt-1">Choose how you'd like to contact me</p>
                    </div>
                    <motion.button
                      whileHover={{ rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsPopupOpen(false)}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <FaTimes className="text-gray-500" size={16} />
                    </motion.button>
                  </div>
                </div>
                
                {/* Contact Options */}
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
                        setIsPopupOpen(false);
                      }}
                      className="relative group w-full text-left"
                    >
                      {/* Floating Background */}
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
                
                {/* Footer */}
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

      <section id="home" className="relative min-h-screen bg-[#FDFDFD] flex items-center overflow-hidden pt-20" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;900&display=swap');`}
        </style>

        <div className="container mx-auto px-4 sm:px-6 lg:px-20 grid lg:grid-cols-3 gap-8 md:gap-12 items-center">
          
          {/* LEFT SIDE - Intro & Hire Me Button */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 md:space-y-8 z-10"
          >
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-700">Hello, I'm</h3>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-[#2D2D2D] uppercase tracking-tighter leading-none">
                Fraol
              </h1>
            </div>
            
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-xs font-normal">
              Full-stack developer with 2 years experience building scalable applications. 
              I love creating intuitive UI and efficient backend systems.
            </p>

            {/* Hire Me Button & Email Stack */}
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <motion.button
                  onClick={() => setIsPopupOpen(true)}
                  whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#2D2D2D] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-3 shadow-lg shadow-gray-200 transition-colors w-full sm:w-auto group"
                >
                  Hire Me
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <FaArrowRight size={14} />
                  </motion.div>
                </motion.button>
                
                <div className="hidden sm:block h-10 w-[1px] bg-gray-200" />
                
                <button 
                  onClick={handleEmailClick}
                  className="text-gray-400 text-sm font-medium hover:text-gray-600 cursor-pointer transition-colors text-left sm:text-center"
                >
                  fraolabmas@gmail.com
                </button>
              </div>

              <div className="flex items-center gap-4 sm:gap-5 pt-2">
                <motion.button 
                  whileHover={{ y: -3 }}
                  onClick={handleEmailClick}
                  className="w-10 h-10 bg-[#0091FF] rounded-full flex items-center justify-center text-white shadow-md cursor-pointer"
                >
                  <FaEnvelope size={14} />
                </motion.button>
                
                <motion.button
                  whileHover={{ y: -3 }}
                  onClick={handleTelegramClick}
                  className="text-gray-300 hover:text-[#0088cc] transition-colors cursor-pointer"
                >
                  <FaTelegram size={22} />
                </motion.button>
                
                <motion.button
                  whileHover={{ y: -3 }}
                  onClick={handleInstagramClick}
                  className="text-gray-300 hover:text-[#E4405F] transition-colors cursor-pointer"
                >
                  <FaInstagram size={22} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* CENTER SECTION - Full Height Image Container */}
          <div className="relative flex justify-center items-center h-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Full Height Image Container with Decorative Elements */}
              <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full max-w-sm sm:max-w-md lg:max-w-lg flex items-center justify-center">
                
                {/* Main Image Container */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative h-full w-full flex items-center justify-center"
                >
                  {/* Decorative Background Elements */}
                  <div className="absolute inset-0 bg-gradient-to-b from-teal-100/20 to-cyan-100/20 rounded-3xl blur-3xl -z-10"></div>
                  
                  {/* Image with elegant shadow and border */}
                  <div className="relative h-[90%] w-[85%] overflow-hidden rounded-2xl lg:rounded-3xl
                                shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2),0_0_0_1px_rgba(255,255,255,0.1)]
                                border border-white/50">
                    <img 
                      src={profileImage}
                      alt="Profile" 
                      className="w-full h-full object-cover object-center"
                    />
                    
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/5"></div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30"></div>
                  </div>

                  {/* Floating Decorative Elements */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-teal-200/30 to-cyan-300/20 rounded-full blur-xl"
                  />
                  
                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                    className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-tr from-orange-200/20 to-pink-200/20 rounded-full blur-xl"
                  />

                  {/* Corner Accents */}
                  <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-teal-400/50 rounded-tl-lg"></div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-lg"></div>
                  <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-emerald-400/50 rounded-bl-lg"></div>
                  <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-blue-400/50 rounded-br-lg"></div>
                </motion.div>

                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20, x: 20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 lg:-bottom-6 lg:-right-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 
                            shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.8)]
                            border border-white/80 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center
                                  shadow-[0_8px_20px_-5px_rgba(0,0,0,0.1)]">
                      <FaPalette className="text-teal-600" size={16} sm:size={20} />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">Projects</p>
                      <p className="text-lg sm:text-xl font-bold text-gray-900">20+</p>
                    </div>
                  </div>
                </motion.div>

                {/* Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, type: "spring" }}
                  className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 lg:-top-6 lg:-left-6 bg-gradient-to-br from-gray-900 to-gray-800 
                            text-white px-3 py-2 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl
                            shadow-[0_15px_35px_-10px_rgba(0,0,0,0.3)]"
                >
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-bold">2+</p>
                    <p className="text-xs opacity-80 mt-0.5 sm:mt-1">Years Exp</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Floating Expertise Cards */}
          <div className="flex flex-col gap-4 sm:gap-6 z-10 max-w-full lg:max-w-xs ml-0 lg:ml-auto mt-8 lg:mt-0">
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center lg:text-right"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Expertise</h3>
              <p className="text-sm text-gray-400">Specialized skills</p>
            </motion.div>
            
            {/* Floating Skill Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: 0.1 * index + 0.2,
                      duration: 0.5 
                    }
                  }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group cursor-pointer"
                >
                  {/* Floating Shadow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200/30 to-gray-100/20 blur-xl rounded-xl -z-10 group-hover:blur-2xl transition-all duration-300"></div>
                  
                  {/* Main Card */}
                  <div className="relative p-4 rounded-xl bg-white border border-white/80 backdrop-blur-sm 
                                shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)] 
                                group-hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                                transition-all duration-300">
                    
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-white/5 pointer-events-none"></div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <motion.div 
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center 
                                    shadow-[0_8px_20px_-5px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)]
                                    ${skill.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100/50' :
                                      skill.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-purple-100/50' :
                                      'bg-gradient-to-br from-emerald-50 to-emerald-100/50'}`}
                        >
                          {skill.icon}
                        </motion.div>
                        
                        <div>
                          <span className="text-sm font-semibold text-gray-800 block">
                            {skill.title}
                          </span>
                          <motion.span 
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="text-xs text-gray-500 block mt-0.5"
                          >
                            {index === 0 ? "User Interface & Experience" : 
                             index === 1 ? "Database Architecture & Design" : 
                             "Full Stack Development"}
                          </motion.span>
                        </div>
                      </div>
                      
                      {/* Floating Arrow */}
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 2,
                          delay: index * 0.3
                        }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
                          <FaArrowRight className="text-gray-500 group-hover:text-gray-700 transition-colors" size={10} />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Floating Stats Boxes */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-4 sm:mt-4"
            >
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { value: "98%", label: "Satisfied", delay: 0.1 },
                  { value: "15+", label: "Clients", delay: 0.2 },
                  { value: "20+", label: "Projects", delay: 0 }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      y: 0,
                      transition: { delay: 0.6 + stat.delay }
                    }}
                    whileHover={{ 
                      y: -4,
                      scale: 1.05,
                      boxShadow: "0 15px 40px -10px rgba(0,0,0,0.1)"
                    }}
                    className="text-center p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white border border-white/80 
                              shadow-[0_8px_30px_rgba(0,0,0,0.04),0_0_0_1px_rgba(255,255,255,0.9)]
                              hover:shadow-[0_15px_50px_-10px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.9)]
                              transition-all duration-300 cursor-pointer"
                  >
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1 sm:mt-1.5">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Floating Tagline */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-gray-50/50 to-white/50 
                          border border-white/80 backdrop-blur-sm
                          shadow-[0_10px_30px_rgba(0,0,0,0.03),0_0_0_1px_rgba(255,255,255,0.8)]
                          text-center lg:text-right"
              >
                <p className="text-sm text-gray-600 italic">
                  "Elevating digital experiences"
                </p>
                <div className="w-12 h-0.5 bg-gradient-to-r from-gray-300 to-transparent mx-auto lg:ml-auto mt-2"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;