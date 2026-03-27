import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  FaArrowRight, FaStar, FaRegClock, FaCode, FaShoppingCart, 
  FaFilm, FaDumbbell, FaBriefcase, FaBox, FaMagic, 
  FaGem, FaRocket, FaCrown, FaCalendarAlt, FaEye,
  FaEnvelope, FaTelegram, FaInstagram, FaGoogle, FaTimes
} from 'react-icons/fa';

// Import your local project images
import ecommerceImg from '../assets/shemeta.jpg';
import filmProductionImg from '../assets/yobo.jpg';
import jobDiscoveryImg from '../assets/job.jpg';
import gymWebsiteImg from '../assets/gym.jpg';
import productDesignImg from '../assets/jiji.jpg';

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

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const contactOptions = [
    { id: "email", label: "Send Email", icon: <FaEnvelope className="text-gray-400" size={18} />, action: () => window.location.href = "mailto:fraolabmas@gmail.com", desc: "fraolabmas@gmail.com", number: "01" },
    { id: "telegram", label: "Telegram", icon: <FaTelegram className="text-gray-400" size={18} />, action: () => window.open("https://t.me/Fra_juan", "_blank"), desc: "@Fra_juan", number: "02" },
    { id: "instagram", label: "Instagram", icon: <FaInstagram className="text-gray-400" size={18} />, action: () => window.open("https://instagram.com/fres.h925", "_blank"), desc: "@fres.h925", number: "03" },
    { id: "gmail", label: "Gmail", icon: <FaGoogle className="text-gray-400" size={18} />, action: () => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=fraolabmas@gmail.com", "_blank"), desc: "Direct Compose", number: "04" }
  ];

  const projects = [
    {
      id: 1,
      number: "01",
      title: "E-commerce Platform",
      description: "Full-featured online store with cart, checkout, and admin dashboard for product management.",
      image: ecommerceImg,
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
      category: "fullstack",
      demoLink: "#",
      featured: true,
      year: "2022",
      icon: <FaShoppingCart className="text-cyan-400" size={24} />,
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      id: 2,
      number: "02",
      title: "Film Production Website",
      description: "Showcase website for film production company with portfolio, services, and booking system.",
      image: filmProductionImg,
      tech: ["Next.js", "Firebase", "Framer Motion", "Tailwind CSS"],
      category: "fullstack",
      demoLink: "#",
      featured: true,
      year: "2024",
      icon: <FaFilm className="text-purple-400" size={24} />,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 3,
      number: "03",
      title: "Job Discovery Platform",
      description: "Modern job board with search, filtering, and application tracking for job seekers.",
      image: jobDiscoveryImg,
      tech: ["React", "Supabase", "TypeScript", "Tailwind CSS"],
      category: "fullstack",
      demoLink: "#",
      featured: true,
      year: "2023",
      icon: <FaBriefcase className="text-emerald-400" size={24} />,
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      id: 4,
      number: "04",
      title: "Gym & Fitness Website",
      description: "Responsive gym website with class schedules, membership plans, and trainer profiles.",
      image: gymWebsiteImg,
      tech: ["React", "Firebase", "Framer", "CSS Grid"],
      category: "fullstack",
      demoLink: "#",
      featured: false,
      year: "2026",
      icon: <FaDumbbell className="text-amber-400" size={24} />,
      gradient: "from-amber-500/20 to-orange-500/20"
    },
    {
      id: 5,
      number: "05",
      title: "Product Design System",
      description: "Complete design system with reusable components for web applications.",
      image: productDesignImg,
      tech: ["Figma", "Framer", "Webflow", "React"],
      category: "ui-ux",
      demoLink: "#",
      featured: false,
      year: "2024",
      icon: <FaBox className="text-rose-400" size={24} />,
      gradient: "from-rose-500/20 to-pink-500/20"
    },
    {
      id: 6,
      number: "06",
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team features.",
      image: null,
      tech: ["Next.js", "MongoDB", "Socket.io", "Tailwind CSS"],
      category: "fullstack",
      demoLink: "#",
      featured: false,
      year: "2025",
      icon: <FaCode className="text-sky-400" size={24} />,
      gradient: "from-sky-500/20 to-blue-500/20"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ui-ux', label: 'UI/UX Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  // Image placeholder component
  const ImagePlaceholder = ({ icon, title, gradient }) => (
    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${gradient}`}>
      <div className="text-center p-8">
        <div className="text-5xl mb-4 opacity-80">{icon}</div>
        <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Revalia', cursive" }}>{title}</h3>
      </div>
    </div>
  );

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

      <section id="projects" className="relative w-full min-h-screen bg-[#050505] py-20 md:py-28 overflow-hidden">
        
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <GlowingCircle size="600px" top="-10%" left="-10%" delay={0} duration={8} color="rgba(255,255,255,0.05)" />
          <GlowingCircle size="500px" top="40%" left="80%" delay={2} duration={10} color="rgba(100,150,255,0.06)" />
          <GlowingCircle size="450px" top="70%" left="10%" delay={4} duration={12} color="rgba(200,100,255,0.04)" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          {/* Floating Animated Orbs */}
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl"
          />
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
              <span className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>My Work</span>
              <FaMagic className="text-white/40" size={12} />
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1]" style={{ fontFamily: "'Revalia', cursive" }}>
              <span className="text-white">Selected</span>
              <br />
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">Projects</span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-gray-400 text-base max-w-xl mx-auto mt-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              A collection of my best web development and design projects from the past 2 years.
            </motion.p>
          </motion.div>

          {/* Stats Cards - Glassmorphic */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto"
          >
            {[
              { value: "20+", label: "Projects Completed", icon: <FaCode className="text-gray-400" size={20} />, number: "01" },
              { value: "15+", label: "Happy Clients", icon: <FaStar className="text-gray-400" size={20} />, number: "02" },
              { value: "100%", label: "Satisfaction Rate", icon: <FaRegClock className="text-gray-400" size={20} />, number: "03" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <TiltCard>
                  <div className="group relative p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 text-center overflow-hidden">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
                    <div className="text-xs font-bold text-gray-500 mb-2" style={{ fontFamily: "'Revalia', cursive" }}>{stat.number}</div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        {stat.icon}
                      </div>
                      <p className="text-3xl font-bold text-white" style={{ fontFamily: "'Revalia', cursive" }}>{stat.value}</p>
                    </div>
                    <p className="text-sm text-gray-500" style={{ fontFamily: "'Poppins', sans-serif" }}>{stat.label}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`relative px-6 py-2.5 rounded-full font-medium transition-all duration-300 text-sm ${
                  activeFilter === filter.id
                    ? 'bg-white text-black shadow-lg'
                    : 'bg-white/[0.03] text-gray-400 hover:bg-white/[0.08] border border-white/10'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-24">
              <motion.div variants={fadeInUp} className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Revalia', cursive" }}>Featured Projects</h3>
                <p className="text-gray-500 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>My best work from recent years</p>
              </motion.div>
              
              <div className="grid lg:grid-cols-3 gap-6">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <TiltCard>
                      <div className="group relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500">
                        {/* Glassmorphic Glow Sweep */}
                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />
                        
                        {/* Project Image */}
                        <div className="relative h-52 overflow-hidden">
                          {project.image ? (
                            <motion.img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-full object-cover"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.5 }}
                            />
                          ) : (
                            <ImagePlaceholder 
                              icon={project.icon} 
                              title={project.title}
                              gradient={project.gradient}
                            />
                          )}
                          
                          {/* Featured Badge */}
                          <div className="absolute top-3 right-3">
                            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/80 to-amber-600/80 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-1">
                              <FaStar size={10} />
                              Featured
                            </div>
                          </div>
                          
                          {/* Year Badge */}
                          <div className="absolute top-3 left-3">
                            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 text-xs">
                              {project.year}
                            </div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6">
                          <div className="text-xs font-bold text-gray-500 mb-2" style={{ fontFamily: "'Revalia', cursive" }}>{project.number}</div>
                          
                          <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Revalia', cursive" }}>{project.title}</h3>
                          <p className="text-gray-400 text-sm mb-4 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>{project.description}</p>
                          
                          {/* Tech Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.slice(0, 4).map((tech, i) => (
                              <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          {/* View Link */}
                          <motion.a 
                            href={project.demoLink}
                            whileHover={{ x: 5 }}
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                          >
                            <span>View Project</span>
                            <FaArrowRight size={12} />
                          </motion.a>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* All Projects Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -6 }}
              >
                <TiltCard>
                  <div className="group relative overflow-hidden rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />
                    
                    {/* Project Image */}
                    <div className="relative h-44 overflow-hidden">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <ImagePlaceholder 
                          icon={project.icon} 
                          title={project.title}
                          gradient={project.gradient}
                        />
                      )}
                      
                      {/* Year Badge */}
                      <div className="absolute top-2 left-2">
                        <div className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-400 text-xs">
                          {project.year}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5">
                      <div className="text-xs font-bold text-gray-500 mb-2" style={{ fontFamily: "'Revalia', cursive" }}>{project.number}</div>
                      
                      <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Revalia', cursive" }}>{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-3 leading-relaxed line-clamp-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{project.description}</p>
                      
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-gray-500 text-xs">
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-gray-500 text-xs">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                      
                      {/* View Link */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/10">
                        <span className="text-xs text-gray-500 capitalize">{project.category}</span>
                        <motion.a 
                          href={project.demoLink}
                          whileHover={{ x: 3 }}
                          className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                        >
                          <FaEye size={10} />
                          Details
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Development Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-24"
          >
            <TiltCard>
              <div className="relative p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 text-center">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent pointer-events-none" />
                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                  <FaGem className="text-gray-400" size={12} />
                  <span className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>My Process</span>
                  <FaRocket className="text-gray-400" size={12} />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                  {["Discovery", "Planning", "Design", "Development", "Testing", "Deployment"].map((step, i) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <span className="text-sm font-bold text-gray-400" style={{ fontFamily: "'Revalia', cursive" }}>{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <p className="text-xs text-gray-500" style={{ fontFamily: "'Poppins', sans-serif" }}>{step}</p>
                    </motion.div>
                  ))}
                </div>
                
                <p className="text-gray-400 text-sm max-w-2xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Following a systematic approach from concept to deployment ensures high-quality results 
                  and successful project outcomes every time.
                </p>
              </div>
            </TiltCard>
          </motion.div>

          {/* Call to Action - Opens Contact Modal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
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
             
              <span className="relative z-10">Start a Project</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                className="relative z-10"
              >
                <FaArrowRight size={14} />
              </motion.div>
            </motion.button>
            
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-8 text-gray-500 text-sm"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              ↓ See more on GitHub
            </motion.div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Revalia&family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Projects;