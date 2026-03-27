import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { 
  FaArrowRight, FaFigma, FaReact, FaCode, FaPalette, FaDatabase, 
  FaProductHunt, FaServer, FaMagic, FaEnvelope, FaTelegram, 
  FaInstagram, FaGoogle, FaTimes, FaGem
} from 'react-icons/fa';

// --- ANIMATION VARIANTS ---
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

const About = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const services = [
    { number: "01", title: "UI/UX Design", description: "Creating intuitive interfaces and seamless user experiences using Figma & Framer", icon: <FaPalette className="text-gray-400" size={20} /> },
    { number: "02", title: "Full Stack Dev", description: "Building responsive web apps with React, Next.js, Node.js & databases", icon: <FaCode className="text-gray-400" size={20} /> },
    { number: "03", title: "Product Design", description: "Designing digital products from concept to launch with Webflow", icon: <FaProductHunt className="text-gray-400" size={20} /> },
    { number: "04", title: "Database Design", description: "Designing scalable database architectures with MongoDB, Firebase & Supabase", icon: <FaDatabase className="text-gray-400" size={20} /> },
  ];

  const contactOptions = [
    { id: "email", label: "Send Email", icon: <FaEnvelope className="text-gray-400" size={18} />, action: () => window.location.href = "mailto:fraolabmas@gmail.com", desc: "fraolabmas@gmail.com", number: "01" },
    { id: "telegram", label: "Telegram", icon: <FaTelegram className="text-gray-400" size={18} />, action: () => window.open("https://t.me/Fra_juan", "_blank"), desc: "@Fra_juan", number: "02" },
    { id: "instagram", label: "Instagram", icon: <FaInstagram className="text-gray-400" size={18} />, action: () => window.open("https://instagram.com/fres.h925", "_blank"), desc: "@fres.h925", number: "03" },
    { id: "gmail", label: "Gmail", icon: <FaGoogle className="text-gray-400" size={18} />, action: () => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=fraolabmas@gmail.com", "_blank"), desc: "Direct Compose", number: "04" }
  ];

  const handleAction = (url) => window.open(url, "_blank");

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
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tighter" style={{ fontFamily: "'Revalia', cursive" }}>Let's create together.</h3>
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

      <section id="#about" className="relative w-full min-h-screen bg-[#050505] py-20 md:py-28 overflow-hidden">
        
        {/* Dynamic Animated Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <GlowingCircle size="500px" top="-10%" left="-10%" delay={0} duration={8} color="rgba(255,255,255,0.05)" />
          <GlowingCircle size="400px" top="50%" left="70%" delay={2} duration={10} color="rgba(100,150,255,0.06)" />
          <GlowingCircle size="350px" top="80%" left="20%" delay={4} duration={12} color="rgba(200,100,255,0.04)" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md mx-auto">
              <span className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>About Me</span>
              <FaMagic className="text-white/40" size={12} />
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1]" style={{ fontFamily: "'Revalia', cursive" }}>
              <span className="text-white">Crafting Digital</span>
              <br />
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">Experiences</span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-gray-400 text-base max-w-xl mx-auto mt-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Currently studying Information Systems at Addis Ababa University with 2 years of full-stack development experience.
            </motion.p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start">
              
              {/* Left Column - Content with Floating Stats */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="relative"
              >
                {/* Intro Text */}
                <motion.div variants={fadeInUp} className="mb-10 md:mb-12">
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-gray-400 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      I'm <span className="text-white font-semibold">Fraol</span>, a passionate full-stack developer currently in my 2nd year of Information Systems at Addis Ababa University. I started my development journey in 12th grade and have been building web applications for 2 years.
                    </p>
                    <p className="text-gray-400 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      I specialize in creating modern, responsive web applications using cutting-edge technologies. My approach combines clean design with robust functionality to deliver exceptional user experiences.
                    </p>
                  </div>
                </motion.div>

                {/* Floating Stats - Glassmorphic */}
                <div className="relative mt-12 md:mt-16">
                  <div className="grid grid-cols-3 gap-3 md:gap-4">
                    {[
                      { value: "2+", label: "Years Exp", number: "01" },
                      { value: "20+", label: "Projects", number: "02" },
                      { value: "15+", label: "Clients", number: "03" }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        custom={index}
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <TiltCard>
                          <div className="group relative p-4 md:p-6 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 overflow-hidden">
                            {/* Glowing Sheen */}
                            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent pointer-events-none" />
                            
                            {/* Number */}
                            <div className="text-xs font-bold text-gray-500 mb-2" style={{ fontFamily: "'Revalia', cursive" }}>{stat.number}</div>
                            
                            <p className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2" style={{ fontFamily: "'Revalia', cursive" }}>{stat.value}</p>
                            <p className="text-xs md:text-sm text-gray-500" style={{ fontFamily: "'Poppins', sans-serif" }}>{stat.label}</p>
                          </div>
                        </TiltCard>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Column - What I Do with Numbered Cards */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
              >
                <div className="space-y-6 md:space-y-8">
                  {/* Services Header */}
                  <motion.div variants={fadeInUp} className="mb-4 md:mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Revalia', cursive" }}>What I Do</h3>
                    <p className="text-gray-500 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>Specialized services & expertise</p>
                  </motion.div>

                  {/* Numbered Service Cards */}
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        custom={index}
                        whileHover={{ scale: 1.01, x: 3 }}
                      >
                        <TiltCard>
                          <div className="group relative flex items-center gap-4 p-4 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 overflow-hidden">
                            {/* Glowing Sheen */}
                            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent pointer-events-none" />
                            
                            {/* Number */}
                            <motion.div 
                              initial={{ x: -15, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              transition={{ delay: index * 0.08 + 0.2 }}
                              className="text-xl font-bold bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent min-w-[45px]"
                              style={{ fontFamily: "'Revalia', cursive" }}
                            >
                              {service.number}
                            </motion.div>
                            
                            {/* Icon */}
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                              {service.icon}
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-white mb-0.5" style={{ fontFamily: "'Revalia', cursive" }}>{service.title}</h4>
                              <p className="text-xs text-gray-400 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>{service.description}</p>
                            </div>
                            
                            <FaArrowRight className="text-gray-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" size={12} />
                          </div>
                        </TiltCard>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Call to Action - Opens Contact Modal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 md:mt-20 text-center"
            >
              <motion.button
                onClick={() => setIsPopupOpen(true)}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-[0_8px_32px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.15)]"
                style={{ fontFamily: "'Revalia', cursive" }}
              >
                {/* Animated Background Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                
                <span className="relative z-10">Let's Create Together</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <FaArrowRight size={14} />
                </motion.div>
              </motion.button>
              
              {/* Decorative Floating Element */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="mt-8 md:mt-12 text-gray-500 text-sm"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                ↓ Scroll to see projects
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Revalia&family=Poppins:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </>
  );
};

export default About;