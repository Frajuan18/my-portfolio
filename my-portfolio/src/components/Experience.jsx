import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, animate } from 'framer-motion';
import { FaArrowRight, FaBriefcase, FaGraduationCap, FaTrophy, FaStar, FaClock, FaUsers } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior UI/UX Designer",
      company: "TechVision Inc.",
      period: "2020 - Present",
      description: "Lead designer for multiple SaaS products, focusing on user-centered design and accessibility.",
      achievements: [
        "Improved user engagement by 40% through redesigned interfaces",
        "Reduced bounce rate by 25% with improved UX flows",
        "Created design systems used by 20+ products",
        "Mentored 5 junior designers"
      ],
      type: "work",
      icon: <FaBriefcase className="text-blue-500" size={20} />,
      color: "from-blue-100 to-blue-50"
    },
    {
      id: 2,
      title: "Product Designer",
      company: "CreativeStudio",
      period: "2018 - 2020",
      description: "Designed mobile and web applications for startups and established companies.",
      achievements: [
        "Delivered 50+ design projects on time and within budget",
        "Increased client retention by 30%",
        "Built prototype systems reducing development time",
        "Collaborated with 10+ development teams"
      ],
      type: "work",
      icon: <FaBriefcase className="text-purple-500" size={20} />,
      color: "from-purple-100 to-purple-50"
    },
    {
      id: 3,
      title: "Webflow Developer",
      company: "Freelance",
      period: "2016 - 2018",
      description: "Built responsive websites and e-commerce platforms using Webflow for various clients.",
      achievements: [
        "Developed 80+ websites for small businesses",
        "Achieved 95% client satisfaction rate",
        "Specialized in no-code solutions",
        "Created reusable template systems"
      ],
      type: "work",
      icon: <FaBriefcase className="text-emerald-500" size={20} />,
      color: "from-emerald-100 to-emerald-50"
    },
    {
      id: 4,
      title: "Visual Designer",
      company: "Design Agency",
      period: "2014 - 2016",
      description: "Started career in visual design, creating branding and marketing materials.",
      achievements: [
        "Designed 100+ branding packages",
        "Won 3 design awards",
        "Built foundational design skills",
        "Worked with 30+ diverse clients"
      ],
      type: "work",
      icon: <FaBriefcase className="text-amber-500" size={20} />,
      color: "from-amber-100 to-amber-50"
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Design Thinking & UI/UX",
      institution: "Design Mastery Academy",
      period: "2018",
      description: "Advanced certification in user-centered design principles and methodologies.",
      courses: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Accessibility"],
      icon: <FaGraduationCap className="text-blue-500" size={20} />,
      color: "from-blue-100 to-blue-50"
    },
    {
      id: 2,
      degree: "Visual Communication",
      institution: "Art & Design Institute",
      period: "2012 - 2014",
      description: "Focused on color theory, typography, and visual storytelling for digital media.",
      courses: ["Typography", "Color Theory", "Layout Design", "Brand Identity", "Digital Illustration"],
      icon: <FaGraduationCap className="text-purple-500" size={20} />,
      color: "from-purple-100 to-purple-50"
    },
    {
      id: 3,
      degree: "Web Development",
      institution: "Online Learning",
      period: "2016 - 2017",
      description: "Self-taught in modern web technologies to complement design skills.",
      courses: ["HTML/CSS", "JavaScript", "Responsive Design", "Webflow", "No-Code Tools"],
      icon: <FaGraduationCap className="text-emerald-500" size={20} />,
      color: "from-emerald-100 to-emerald-50"
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create animated dots that light up as you scroll
  const dot1Progress = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const dot2Progress = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const dot3Progress = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);
  const dot4Progress = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  // Create animated lines between dots
  const line1Progress = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const line2Progress = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const line3Progress = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);

  return (
    <section id="experience" className="relative py-32 bg-[#FDFDFD] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Header - Matching Hero Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-gray-700">My Journey</h3>
            <h2 className="text-6xl lg:text-7xl font-black text-[#2D2D2D] uppercase tracking-tighter leading-none">
              Experience & 
              <span className="block mt-2">Education</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg font-normal mt-6">
              12 years of crafting beautiful, functional designs that solve real problems and delight users.
            </p>
          </div>
        </motion.div>

        {/* Floating Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto"
        >
          {[
            { value: "12+", label: "Years Experience", icon: <FaClock className="text-blue-500" />, color: "from-blue-100 to-blue-50" },
            { value: "250+", label: "Projects Completed", icon: <FaTrophy className="text-purple-500" />, color: "from-purple-100 to-purple-50" },
            { value: "95%", label: "Client Satisfaction", icon: <FaStar className="text-emerald-500" />, color: "from-emerald-100 to-emerald-50" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="relative group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} blur-xl rounded-2xl -z-10 group-hover:blur-2xl transition-all duration-300`}></div>
              
              <div className="relative p-6 rounded-2xl bg-white border border-white/80 backdrop-blur-sm 
                            shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)] 
                            group-hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                            transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-bold text-[#2D2D2D]">{stat.value}</p>
                </div>
                <p className="text-sm text-gray-500 text-center">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline - Floating Cards with Animated Timeline */}
        <div className="max-w-6xl mx-auto mb-24" ref={containerRef}>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">Professional Experience</h3>
            <p className="text-gray-400 text-sm">My career journey through design and development</p>
          </div>
          
          <div className="relative">
            {/* Animated Timeline Line Container */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 -z-10">
              {/* Base Line (always visible) */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100"></div>
              
              {/* Animated Progress Line - Draws from top to bottom on scroll down */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 origin-top"
                style={{ 
                  scaleY: scrollYProgress,
                  opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.1, 1, 1, 0.1])
                }}
              />
              
              {/* Animated Glow Effect */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-full blur-sm"
                style={{ 
                  scaleY: scrollYProgress,
                  opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0.3, 0.3, 0]),
                  background: "linear-gradient(to bottom, rgba(59, 130, 246, 0.5), rgba(168, 85, 247, 0.5), rgba(16, 185, 129, 0.5))"
                }}
              />
              
              {/* Animated Particles */}
              <motion.div
                className="absolute w-full"
                style={{
                  top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                  opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0])
                }}
              >
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mx-auto blur-sm animate-pulse"></div>
              </motion.div>
            </div>
            
            {/* Individual Lines Between Dots */}
            {experiences.map((_, index) => {
              if (index < experiences.length - 1) {
                const lineProgress = [line1Progress, line2Progress, line3Progress][index];
                
                return (
                  <motion.div
                    key={`line-${index}`}
                    className="absolute left-8 md:left-1/2"
                    style={{
                      top: `${25 + index * 25}%`,
                      height: "25%",
                      width: "2px",
                      originY: 0,
                    }}
                  >
                    {/* Filling Line Animation */}
                    <motion.div
                      className="absolute w-full h-full bg-gradient-to-b from-blue-500 to-purple-500 origin-top"
                      style={{
                        scaleY: lineProgress,
                        opacity: useTransform(lineProgress, [0, 1], [0, 1])
                      }}
                    />
                    
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute w-full h-full blur-sm"
                      style={{
                        scaleY: lineProgress,
                        opacity: useTransform(lineProgress, [0, 1], [0, 0.3])
                      }}
                    />
                  </motion.div>
                );
              }
              return null;
            })}
            
            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const dotProgress = [dot1Progress, dot2Progress, dot3Progress, dot4Progress][index];
                
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Animated Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 top-6 -translate-x-1/2 z-20">
                      {/* Outer Glow Ring */}
                      <motion.div
                        className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 blur-md"
                        style={{
                          scale: dotProgress,
                          opacity: dotProgress
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          delay: index * 0.2
                        }}
                      />
                      
                      {/* Inner Glow Ring */}
                      <motion.div
                        className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-emerald-400/30"
                        style={{
                          scale: dotProgress,
                          opacity: dotProgress
                        }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          delay: index * 0.3
                        }}
                      />
                      
                      {/* Main Dot */}
                      <motion.div
                        className="relative w-4 h-4 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 border-4 border-white shadow-lg"
                        style={{
                          scale: dotProgress,
                          opacity: useTransform(dotProgress, [0, 0.5, 1], [0.3, 0.8, 1])
                        }}
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(59, 130, 246, 0.4)",
                            "0 0 0 6px rgba(59, 130, 246, 0)",
                            "0 0 0 0 rgba(168, 85, 247, 0.4)",
                            "0 0 0 6px rgba(168, 85, 247, 0)",
                            "0 0 0 0 rgba(16, 185, 129, 0.4)",
                            "0 0 0 6px rgba(16, 185, 129, 0)"
                          ]
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          delay: index * 0.5
                        }}
                      >
                        {/* Pulsing Dot Core */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400"
                          style={{
                            scale: dotProgress
                          }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            delay: index * 0.4
                          }}
                        />
                        
                        {/* Sparkle Particles */}
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                              left: "50%",
                              top: "50%",
                              translateX: "-50%",
                              translateY: "-50%",
                              rotate: `${angle}deg`,
                              x: useTransform(dotProgress, [0, 1], [0, 8]),
                              opacity: useTransform(dotProgress, [0, 1], [0, 0.8])
                            }}
                            animate={{
                              x: [8, 12, 8],
                              opacity: [0.8, 0.2, 0.8]
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 1.5,
                              delay: i * 0.1 + index * 0.2
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>
                    
                    {/* Experience Card */}
                    <div className={`relative w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                      <motion.div
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="relative group cursor-pointer"
                      >
                        {/* Floating Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} blur-xl rounded-3xl -z-10 group-hover:blur-2xl transition-all duration-300`}></div>
                        
                        <div className="relative p-8 rounded-3xl bg-white border border-white/80 backdrop-blur-sm 
                                      shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]
                                      hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                                      transition-all duration-300">
                          
                          <div className="flex items-start justify-between gap-6 mb-6">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
                                {exp.icon}
                              </div>
                              <div>
                                <h4 className="text-xl font-bold text-[#2D2D2D] mb-1">{exp.title}</h4>
                                <p className="text-gray-700 font-medium">{exp.company}</p>
                              </div>
                            </div>
                            
                            <motion.div
                              animate={{ x: [0, 3, 0] }}
                              transition={{ repeat: Infinity, duration: 2 }}
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"
                            >
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
                                <FaArrowRight className="text-gray-500" size={12} />
                              </div>
                            </motion.div>
                          </div>
                          
                          {/* Period Badge */}
                          <div className="inline-block mb-4">
                            <span className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 font-medium text-sm rounded-full shadow-sm">
                              {exp.period}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>
                          
                          {/* Achievements Grid */}
                          <div className="grid grid-cols-2 gap-4">
                            {exp.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-3 group/achievement"
                              >
                                <motion.div
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
                                  className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-2"
                                />
                                <span className="text-gray-600 text-sm leading-relaxed group-hover/achievement:text-gray-800 transition-colors">
                                  {achievement}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Empty space for alternating layout */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Education Section - Floating Cards */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">Education & Certifications</h3>
            <p className="text-gray-400 text-sm">Continuous learning and skill development</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group cursor-pointer"
              >
                {/* Floating Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} blur-xl rounded-2xl -z-10 group-hover:blur-2xl transition-all duration-300`}></div>
                
                <div className="relative rounded-2xl bg-white border border-white/80 backdrop-blur-sm 
                              shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]
                              hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                              transition-all duration-300 p-6">
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
                      {edu.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#2D2D2D] mb-1">{edu.degree}</h4>
                      <p className="text-gray-700 text-sm font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  
                  {/* Period */}
                  <div className="mb-4">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{edu.description}</p>
                  
                  {/* Courses */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-500 font-medium mb-3">Areas Covered</div>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.03 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs rounded-full font-medium shadow-sm"
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Design Philosophy - Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-24"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20 blur-3xl -z-10 rounded-full"></div>
          
          <div className="relative p-10 rounded-3xl bg-gradient-to-br from-white to-white/80 border border-white/80 backdrop-blur-sm
                        shadow-[0_25px_60px_-20px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]">
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
              <div>
                <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4">Design Philosophy</h3>
                <p className="text-gray-600 text-lg max-w-2xl">
                  I believe great design solves problems, tells stories, and creates meaningful connections 
                  between users and products through thoughtful, user-centered approaches.
                </p>
              </div>
              
              <div className="flex gap-3">
                {["User-Centered", "Minimalist", "Functional", "Purposeful"].map((principle, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white/90 border border-white/80 text-gray-700 rounded-full font-medium text-sm
                              shadow-[0_8px_25px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.12)]
                              transition-all duration-300 cursor-default"
                  >
                    {principle}
                  </motion.span>
                ))}
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-gray-100">
              {[
                { value: "100%", label: "Pixel Perfect", icon: <FaStar className="text-blue-500" />, color: "from-blue-100 to-blue-50" },
                { value: "24/7", label: "Availability", icon: <FaClock className="text-purple-500" />, color: "from-purple-100 to-purple-50" },
                { value: "50+", label: "Happy Clients", icon: <FaUsers className="text-emerald-500" />, color: "from-emerald-100 to-emerald-50" },
                { value: "10+", label: "Design Awards", icon: <FaTrophy className="text-amber-500" />, color: "from-amber-100 to-amber-50" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} blur-lg rounded-xl -z-10 group-hover:blur-xl transition-all duration-300`}></div>
                  
                  <div className="relative p-4 rounded-xl bg-white/90 border border-white/80 backdrop-blur-sm text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
                        {stat.icon}
                      </div>
                      <p className="text-2xl font-bold text-[#2D2D2D]">{stat.value}</p>
                    </div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action - Hero Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#2D2D2D] text-white font-semibold rounded-full 
                      shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.25)]
                      transition-all duration-300 text-lg"
          >
            <span>Let's Work Together</span>
            <FaArrowRight size={16} />
          </motion.a>
          
          {/* Decorative Floating Element */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-12 text-gray-400 text-sm"
          >
            ↓ Download my full resume
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-100/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-purple-100/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Experience;