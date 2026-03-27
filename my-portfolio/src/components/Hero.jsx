import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { 
  FaEnvelope, FaTelegram, FaInstagram, 
  FaPalette, FaDatabase, FaCode, FaArrowRight,
  FaGoogle, FaShapes, FaTerminal,
  FaMagic
} from "react-icons/fa";
import profileImage from "../assets/unnamed (1).jpg";

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

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Tech Stack Cards - Grey tones like Skills component
  const techStackCards = [
    { number: "01", name: "UI/UX Design", description: "Crafting intuitive interfaces with pixel-perfect precision.", icon: <FaPalette className="text-gray-400" size={22} /> },
    { number: "02", name: "Database Architecture", description: "Scalable data solutions for enterprise-grade applications.", icon: <FaDatabase className="text-gray-400" size={22} /> },
    { number: "03", name: "Systems Engineering", description: "Robust backend systems with clean architecture patterns.", icon: <FaTerminal className="text-gray-400" size={22} /> },
  ];

  const handleAction = (url) => window.open(url, "_blank");

  return (
    <>
      {/* PREMIUM CONTACT MODAL - Glassmorphic */}
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
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tighter" style={{ fontFamily: "'Revalia', cursive" }}>Let's build something.</h3>
                  <p className="text-gray-400 mt-3 text-sm leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>Currently accepting new projects and architectural consultations.</p>
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-8 hidden md:block" style={{ fontFamily: "'Poppins', sans-serif" }}>Fraol Labs © 2026</div>
                </div>
                
                <div className="md:w-3/5 p-6 md:p-8 space-y-3 bg-white/[0.02]">
                  {[
                    { label: "Direct Email", icon: <FaGoogle />, sub: "fraolabmas@gmail.com", link: "mailto:fraolabmas@gmail.com", color: "text-red-400" },
                    { label: "Telegram", icon: <FaTelegram />, sub: "@Fra_juan", link: "https://t.me/Fra_juan", color: "text-sky-400" },
                    { label: "Instagram", icon: <FaInstagram />, sub: "@fres.h925", link: "https://instagram.com/fres.h925", color: "text-pink-400" },
                  ].map((item, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAction(item.link)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                    >
                      <div className={`text-xl ${item.color}`}>{item.icon}</div>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>{item.label}</div>
                        <div className="text-xs text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>{item.sub}</div>
                      </div>
                    </motion.button>
                  ))}
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-4 text-center md:hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>Fraol Labs © 2026</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="home" className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        
        {/* Dynamic Animated Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <GlowingCircle size="500px" top="-10%" left="-10%" delay={0} duration={8} color="rgba(255,255,255,0.05)" />
          <GlowingCircle size="400px" top="50%" left="70%" delay={2} duration={10} color="rgba(100,150,255,0.06)" />
          <GlowingCircle size="350px" top="80%" left="20%" delay={4} duration={12} color="rgba(200,100,255,0.04)" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Content - Responsive Grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT: TEXT CONTENT */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="lg:col-span-5 text-center lg:text-left order-2 lg:order-1"
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <motion.div 
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-3 backdrop-blur-md mx-auto lg:mx-0"
                >
                  <span className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>Full Stack Developer</span>
                  <FaMagic className="text-white/40" size={12} />
                </motion.div>
                
                <motion.h1 
                  variants={fadeInUp}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[1.1]"
                  style={{ fontFamily: "'Revalia', cursive" }}
                >
                  <span className="text-white">FRAOL</span>
                  <br /> 
                  <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">DESIGN</span>
                </motion.h1>
                
                <motion.p 
                  variants={fadeInUp}
                  className="text-gray-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Crafting digital ecosystems where <span className="text-white font-semibold">aesthetic precision</span> meets <span className="text-white font-semibold">architectural integrity</span>.
                </motion.p>
              </motion.div>

              {/* BUTTON - Styled exactly like Skills component */}
              <motion.div 
                variants={fadeInUp}
                className="mt-8"
              >
                <motion.button 
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsPopupOpen(true)}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-[0_8px_32px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.15)]"
                  style={{ fontFamily: "'Revalia', cursive" }}
                >
                  {/* Animated Background Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <span className="relative z-10">Start a Project</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <FaArrowRight size={14} />
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* CENTER: THE MASKED PORTRAIT - No shadow effects */}
            <div className="lg:col-span-4 relative flex justify-center order-1 lg:order-2 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] aspect-[4/5] mx-auto"
              >
                {/* Clean Image Container - No shadows */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <img 
                    src={profileImage} 
                    className="w-full h-full object-cover object-center" 
                    alt="Profile" 
                  />
                  {/* Subtle gradient overlay for text readability - no shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                
                {/* FLOATING FREELANCE CARD - Styled exactly like Skills component with number */}
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute -bottom-5 -left-3 sm:-bottom-6 sm:-left-5 hidden md:block"
                >
                  <TiltCard>
                    <div className="group relative bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-xl p-3 sm:p-4 transition-all duration-500 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                      {/* Glowing Sheen on Hover */}
                      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />
                      
                      <div className="flex items-center gap-3">
                        {/* Icon in grey */}
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                          <FaShapes className="text-gray-400 text-sm sm:text-base" />
                        </div>
                        
                        <div>
                          <div className="text-[10px] font-black text-gray-400 uppercase tracking-wider" style={{ fontFamily: "'Poppins', sans-serif" }}>Available for</div>
                          <div className="text-xs sm:text-sm font-semibold text-white" style={{ fontFamily: "'Revalia', cursive" }}>Freelance Work</div>
                        </div>
                      </div>
                      
                      {/* Animated Bottom Glow Line */}
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </TiltCard>
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT: THE STACK - Styled exactly like Skills component with grey tones and numbers */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="lg:col-span-3 order-3 w-full"
            >
              <motion.h4 
                variants={fadeInUp} 
                className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 text-center lg:text-left mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Tech Stack
              </motion.h4>
              
              <div className="space-y-3">
                {techStackCards.map((card, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    custom={i}
                    whileHover={{ scale: 1.01, x: 3 }}
                  >
                    <TiltCard>
                      <div className="group relative flex items-center gap-4 p-4 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 overflow-hidden">
                        {/* Glowing Sheen on Hover */}
                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent pointer-events-none" />
                        
                        {/* Number with Grey Gradient */}
                        <motion.div 
                          initial={{ x: -15, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.08 + 0.2 }}
                          className="text-xl font-bold bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent min-w-[40px]"
                          style={{ fontFamily: "'Revalia', cursive" }}
                        >
                          {card.number}
                        </motion.div>
                        
                        {/* Icon in grey */}
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                          {card.icon}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-white mb-0.5" style={{ fontFamily: "'Revalia', cursive" }}>{card.name}</h3>
                          <p className="text-xs text-gray-400 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>{card.description}</p>
                        </div>
                        
                        <FaArrowRight className="text-gray-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" size={12} />
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
              
              {/* Real-time Indicator with Pulse */}
              <motion.div 
                variants={fadeInUp}
                className="pt-8 flex items-center gap-2 justify-center lg:justify-start"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>Available to start now</span>
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

export default Hero;