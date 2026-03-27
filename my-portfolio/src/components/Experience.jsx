import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  FaArrowRight, FaCode, FaClock, FaUsers,
  FaMagic, FaGem, FaRocket, FaCrown,
  FaLaptopCode, FaPalette, FaGraduationCap, FaBriefcase,
  FaCalendarAlt, FaEnvelope, FaTelegram, FaInstagram, FaGoogle, FaTimes
} from 'react-icons/fa';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }
  }
};

// --- 3D Tilt Card Component ---
const TiltCard = ({ children, className, ...props }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [6, -6]);
  const rotateY = useTransform(x, [-100, 100], [-6, 6]);
  const springConfig = { damping: 25, stiffness: 300 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPercent = (e.clientX - rect.left) / rect.width - 0.5;
    const yPercent = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPercent * 150);
    y.set(yPercent * 150);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.div
      style={{ rotateX: rotateXSpring, rotateY: rotateYSpring, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// --- Glowing Circle Component ---
const GlowingCircle = ({ size, top, left, delay, duration, color }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
    transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
    className="absolute rounded-full blur-[100px]"
    style={{ width: size, height: size, top, left, background: color }}
  />
);

const Experience = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const contactOptions = [
    { id: "email", label: "Send Email", icon: <FaEnvelope className="text-gray-400" size={18} />, action: () => window.location.href = "mailto:fraolabmas@gmail.com", desc: "fraolabmas@gmail.com", number: "01" },
    { id: "telegram", label: "Telegram", icon: <FaTelegram className="text-gray-400" size={18} />, action: () => window.open("https://t.me/Fra_juan", "_blank"), desc: "@Fra_juan", number: "02" },
    { id: "instagram", label: "Instagram", icon: <FaInstagram className="text-gray-400" size={18} />, action: () => window.open("https://instagram.com/fres.h925", "_blank"), desc: "@fres.h925", number: "03" },
    { id: "gmail", label: "Gmail", icon: <FaGoogle className="text-gray-400" size={18} />, action: () => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=fraolabmas@gmail.com", "_blank"), desc: "Direct Compose", number: "04" }
  ];

  // Items ordered from EARLIEST to RECENT with numbers
  const allItems = [
    {
      id: 1,
      number: "01",
      type: "education",
      title: "High School Diploma",
      institution: "Secondary School",
      period: "2021 - 2024",
      description: "Completed high school education while starting my web development journey.",
      courses: ["Mathematics", "Physics", "ICT", "English"],
      icon: <FaGraduationCap className="text-rose-400" size={24} />,
      gradient: "from-rose-500/20 to-pink-500/20",
      year: "2024",
      color: "#f43f5e"
    },
    {
      id: 2,
      number: "02",
      type: "work",
      title: "Started Web Development",
      company: "Self-Taught Journey",
      period: "2021 - 2022",
      description: "Began learning web development during 12th grade, building foundational skills.",
      achievements: [
        "Mastered HTML, CSS, and JavaScript fundamentals",
        "Built first portfolio and personal projects",
        "Learned responsive design principles",
        "Started exploring backend development"
      ],
      icon: <FaCode className="text-amber-400" size={24} />,
      gradient: "from-amber-500/20 to-orange-500/20",
      year: "2022",
      color: "#f59e0b"
    },
    {
      id: 3,
      number: "03",
      type: "work",
      title: "UI/UX Designer",
      company: "Freelance & University Projects",
      period: "2021 - Present",
      description: "Creating user-centered designs and prototypes for web and mobile applications.",
      achievements: [
        "Designed interfaces for 15+ projects using Figma & Framer",
        "Improved user engagement through better UX flows",
        "Created design systems for consistent user experiences",
        "Collaborated with development teams on implementation"
      ],
      icon: <FaPalette className="text-purple-400" size={24} />,
      gradient: "from-purple-500/20 to-pink-500/20",
      year: "2022",
      color: "#a855f7"
    },
    {
      id: 4,
      number: "04",
      type: "work",
      title: "Full Stack Developer",
      company: "Freelance & Projects",
      period: "2022 - Present",
      description: "Building full-stack web applications using modern technologies for various clients and personal projects.",
      achievements: [
        "Built 20+ responsive web applications from scratch",
        "Implemented secure authentication systems",
        "Designed scalable database architectures",
        "Optimized applications for performance and SEO"
      ],
      icon: <FaLaptopCode className="text-cyan-400" size={24} />,
      gradient: "from-cyan-500/20 to-blue-500/20",
      year: "2024",
      color: "#06b6d4"
    },
    {
      id: 5,
      number: "05",
      type: "education",
      title: "BSc in Information Systems",
      institution: "Addis Ababa University",
      period: "2025 - Present",
      description: "Currently in 2nd year, studying information systems, databases, and software development.",
      courses: ["Database Systems", "Software Engineering", "Web Technologies", "System Analysis & Design", "Data Structures"],
      icon: <FaGraduationCap className="text-emerald-400" size={24} />,
      gradient: "from-emerald-500/20 to-teal-500/20",
      year: "2025",
      color: "#10b981"
    }
  ];

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
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tighter" style={{ fontFamily: "'Revalia', cursive" }}>Let's work together.</h3>
                  <p className="text-gray-400 mt-3 text-sm leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>Currently accepting new projects and collaborations.</p>
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-8 hidden md:block" style={{ fontFamily: "'Poppins', sans-serif" }}>Fraol Labs © 2026</div>
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
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-4 text-center md:hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>Fraol Labs © 2026</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="#experience" className="relative w-full min-h-screen bg-[#050505] py-20 md:py-28 overflow-hidden">
        
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <GlowingCircle size="600px" top="-10%" left="-10%" delay={0} duration={8} color="rgba(255,255,255,0.05)" />
          <GlowingCircle size="500px" top="40%" left="80%" delay={2} duration={10} color="rgba(100,150,255,0.06)" />
          <GlowingCircle size="450px" top="70%" left="10%" delay={4} duration={12} color="rgba(200,100,255,0.04)" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md mx-auto">
              <span className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>My Journey</span>
              <FaMagic className="text-white/40" size={12} />
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1]" style={{ fontFamily: "'Revalia', cursive" }}>
              <span className="text-white">Experience &</span>
              <br />
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">Education</span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-gray-400 text-base max-w-xl mx-auto mt-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              From self-taught beginnings to university education — my journey in web development
            </motion.p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto"
          >
            {[
              { value: "2+", label: "Years Experience", icon: <FaClock className="text-gray-400" size={20} /> },
              { value: "20+", label: "Projects Completed", icon: <FaCode className="text-gray-400" size={20} /> },
              { value: "15+", label: "Happy Clients", icon: <FaUsers className="text-gray-400" size={20} /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="relative p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 text-center overflow-hidden group">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <p className="text-3xl font-bold text-white" style={{ fontFamily: "'Revalia', cursive" }}>{stat.value}</p>
                  </div>
                  <p className="text-sm text-gray-500" style={{ fontFamily: "'Poppins', sans-serif" }}>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            
          </motion.div>

          {/* Timeline - Strict Alternating: Left, Right, Left, Right, Left */}
          <div className="relative max-w-6xl mx-auto">
            {/* Center Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              <motion.div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-400 via-purple-400 to-emerald-400 origin-top"
                style={{ height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
              />
              
              {/* Decorative dots along timeline */}
              {allItems.map((_, idx) => (
                <motion.div
                  key={`dot-${idx}`}
                  className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/40 border border-white/20"
                  style={{ top: `${(idx + 0.5) * (100 / allItems.length)}%` }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                />
              ))}
            </div>

            {/* Timeline Items - Strict Alternating: 0=Left, 1=Right, 2=Left, 3=Right, 4=Left */}
            <div className="space-y-20 md:space-y-28">
              {allItems.map((item, index) => {
                // Alternating pattern: even index (0,2,4) = LEFT, odd index (1,3) = RIGHT
                const isLeft = index % 2 === 0;
                
                return (
                  <motion.div
                    key={item.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px", amount: 0.3 }}
                    variants={isLeft ? slideInLeft : slideInRight}
                    className={`relative flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
                  >
                    {/* Year Badge on Center Line */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-white/30 flex items-center justify-center shadow-xl"
                      >
                        <span className="text-sm font-bold text-white" style={{ fontFamily: "'Revalia', cursive" }}>{item.year}</span>
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-[calc(50%-3.5rem)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="group relative overflow-hidden"
                      >
                        <div className="relative p-6 md:p-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 overflow-hidden">
                          {/* Glassmorphic Glow Sweep Effect */}
                          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />
                          
                          {/* Number Badge */}
                          <div className="text-xs font-bold text-gray-500 mb-3" style={{ fontFamily: "'Revalia', cursive" }}>{item.number}</div>
                          
                          {/* Type Badge */}
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                            {item.type === 'work' ? <FaBriefcase className="text-cyan-400" size={10} /> : <FaGraduationCap className="text-emerald-400" size={10} />}
                            <span className="text-xs text-gray-400 uppercase tracking-wider" style={{ fontFamily: "'Poppins', sans-serif" }}>
                              {item.type === 'work' ? 'Experience' : 'Education'}
                            </span>
                          </div>
                          
                          {/* Icon and Title */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Revalia', cursive" }}>
                                {item.title}
                              </h3>
                              <p className="text-gray-400 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                {item.type === 'work' ? item.company : item.institution}
                              </p>
                            </div>
                          </div>
                          
                          {/* Period */}
                          <div className="flex items-center gap-2 mb-4">
                            <FaCalendarAlt className="text-gray-500" size={12} />
                            <span className="text-gray-400 text-xs" style={{ fontFamily: "'Poppins', sans-serif" }}>{item.period}</span>
                          </div>
                          
                          <p className="text-gray-400 text-sm mb-5 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {item.description}
                          </p>
                          
                          {/* Achievements or Courses */}
                          {'achievements' in item && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                              {item.achievements.map((achievement, i) => (
                                <div key={i} className="flex items-start gap-2 group/achievement">
                                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 mt-1.5" />
                                  <span className="text-gray-500 text-xs leading-relaxed group-hover/achievement:text-gray-300 transition-colors">
                                    {achievement}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {'courses' in item && (
                            <div className="mt-4 pt-4 border-t border-white/10">
                              <div className="text-xs text-gray-500 font-medium mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Key Courses</div>
                              <div className="flex flex-wrap gap-2">
                                {item.courses.map((course, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-400 text-xs"
                                    style={{ fontFamily: "'Poppins', sans-serif" }}
                                  >
                                    {course}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {/* Hover Arrow */}
                          <motion.div
                            className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                              <FaArrowRight className="text-gray-400" size={12} />
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Mobile Year Badge */}
                    <div className="md:hidden flex items-center gap-3 w-full">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-white/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-white" style={{ fontFamily: "'Revalia', cursive" }}>{item.year}</span>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Philosophy Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mt-28 mb-20"
          >
            <div className="relative max-w-3xl mx-auto">
              <div className="relative p-8 md:p-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                  <FaGem className="text-gray-400" size={12} />
                  <span className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>Development Philosophy</span>
                  <FaRocket className="text-gray-400" size={12} />
                </div>
                
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  "I believe in creating web applications that are not only visually appealing but also highly functional, 
                  scalable, and user-friendly, using the latest technologies and best practices."
                </p>
                
                <div className="flex flex-wrap justify-center gap-3">
                  {["Clean Code", "User-Focused", "Scalable", "Modern Tech"].map((principle, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {principle}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          >
            {[
              { value: "Full Stack", label: "Development", icon: <FaCode className="text-gray-400" size={22} /> },
              { value: "Modern", label: "Tech Stack", icon: <FaRocket className="text-gray-400" size={22} /> },
              { value: "UI/UX", label: "Design Focus", icon: <FaGem className="text-gray-400" size={22} /> },
              { value: "Responsive", label: "Design", icon: <FaCrown className="text-gray-400" size={22} /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.03 }}
              >
                <div className="group relative p-5 text-center bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <p className="text-lg font-bold text-white" style={{ fontFamily: "'Revalia', cursive" }}>{stat.value}</p>
                  </div>
                  <p className="text-xs text-gray-500" style={{ fontFamily: "'Poppins', sans-serif" }}>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action - Opens Contact Modal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center pb-12"
          >
            <motion.button
              onClick={() => setIsPopupOpen(true)}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-[0_8px_32px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.15)]"
              style={{ fontFamily: "'Revalia', cursive" }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Let's Work Together</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                className="relative z-10"
              >
                <FaArrowRight size={14} />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Revalia&family=Poppins:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </>
  );
};

export default Experience;