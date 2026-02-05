import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight, FaBriefcase, FaGraduationCap, FaCode, FaClock, FaUsers } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
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
      type: "work",
      icon: <FaCode className="text-blue-500" size={20} />,
      color: "from-blue-100 to-blue-50"
    },
    {
      id: 2,
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
      type: "work",
      icon: <FaCode className="text-purple-500" size={20} />,
      color: "from-purple-100 to-purple-50"
    },
    {
      id: 3,
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
      type: "work",
      icon: <FaCode className="text-emerald-500" size={20} />,
      color: "from-emerald-100 to-emerald-50"
    }
  ];

  const education = [
    {
      id: 1,
      degree: "BSc in Information Systems",
      institution: "Addis Ababa University",
      period: "2023 - Present",
      description: "Currently in 2nd year, studying information systems, databases, and software development.",
      courses: ["Database Systems", "Software Engineering", "Web Technologies", "System Analysis & Design", "Data Structures"],
      icon: <FaGraduationCap className="text-blue-500" size={20} />,
      color: "from-blue-100 to-blue-50"
    },
    {
      id: 2,
      degree: "High School Diploma",
      institution: "Secondary School",
      period: "2020 - 2022",
      description: "Completed high school education while starting my web development journey.",
      courses: ["Mathematics", "Physics", "ICT", "English", "Entrepreneurship"],
      icon: <FaGraduationCap className="text-purple-500" size={20} />,
      color: "from-purple-100 to-purple-50"
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create animated dots that light up as you scroll
  const dot1Progress = useTransform(scrollYProgress, [0, 0.33], [0, 1]);
  const dot2Progress = useTransform(scrollYProgress, [0.33, 0.66], [0, 1]);
  const dot3Progress = useTransform(scrollYProgress, [0.66, 1], [0, 1]);

  // Create animated lines between dots
  const line1Progress = useTransform(scrollYProgress, [0, 0.33], [0, 1]);
  const line2Progress = useTransform(scrollYProgress, [0.33, 0.66], [0, 1]);

  return (
    <section id="experience" className="relative py-20 md:py-32 bg-[#FDFDFD] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        
        {/* Header - Matching Hero Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto mb-12 md:mb-20"
        >
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">My Journey</h3>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#2D2D2D] uppercase tracking-tighter leading-none">
              Experience & 
              <span className="block mt-1 sm:mt-2">Education</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg font-normal mt-4 md:mt-6">
              2 years of building modern web applications while pursuing my degree in Information Systems.
            </p>
          </div>
        </motion.div>

        {/* Floating Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          {[
            { value: "2+", label: "Years Experience", icon: <FaClock className="text-blue-500" />, color: "from-blue-100 to-blue-50" },
            { value: "20+", label: "Projects Completed", icon: <FaCode className="text-purple-500" />, color: "from-purple-100 to-purple-50" },
            { value: "15+", label: "Happy Clients", icon: <FaUsers className="text-emerald-500" />, color: "from-emerald-100 to-emerald-50" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} blur-xl rounded-2xl -z-10 group-hover:blur-2xl transition-all duration-300`}></div>
              
              <div className="relative p-4 md:p-6 rounded-xl md:rounded-2xl bg-white border border-white/80 backdrop-blur-sm 
                            shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)] 
                            group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                            transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-2 md:mb-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
                    {stat.icon}
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-[#2D2D2D]">{stat.value}</p>
                </div>
                <p className="text-xs md:text-sm text-gray-500 text-center">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline - Floating Cards with Animated Timeline */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-24" ref={containerRef}>
          <div className="mb-6 md:mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-[#2D2D2D] mb-2">Professional Experience</h3>
            <p className="text-gray-400 text-sm">My journey in web development and design</p>
          </div>
          
          <div className="relative">
            {/* Animated Timeline Line Container */}
            <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 -z-10">
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
            </div>
            
            {/* Individual Lines Between Dots */}
            {experiences.map((_, index) => {
              if (index < experiences.length - 1) {
                const lineProgress = [line1Progress, line2Progress][index];
                
                return (
                  <motion.div
                    key={`line-${index}`}
                    className="absolute left-6 sm:left-8 md:left-1/2"
                    style={{
                      top: `${33 + index * 33}%`,
                      height: "33%",
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
                  </motion.div>
                );
              }
              return null;
            })}
            
            <div className="space-y-6 md:space-y-8">
              {experiences.map((exp, index) => {
                const dotProgress = [dot1Progress, dot2Progress, dot3Progress][index];
                
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Animated Timeline Dot */}
                    <div className="absolute left-6 sm:left-8 md:left-1/2 top-4 md:top-6 -translate-x-1/2 z-20">
                      {/* Main Dot */}
                      <motion.div
                        className="relative w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 border-3 md:border-4 border-white shadow-lg"
                        style={{
                          scale: dotProgress,
                          opacity: useTransform(dotProgress, [0, 0.5, 1], [0.3, 0.8, 1])
                        }}
                      >
                        {/* Pulsing Dot Core */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400"
                          style={{
                            scale: dotProgress
                          }}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [1, 0.7, 1]
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            delay: index * 0.3
                          }}
                        />
                      </motion.div>
                    </div>
                    
                    {/* Experience Card */}
                    <div className={`relative w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 lg:pr-16' : 'md:pl-8 lg:pl-16'}`}>
                      <motion.div
                        whileHover={{ y: -4, scale: 1.01 }}
                        className="relative group cursor-pointer"
                      >
                        {/* Floating Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} blur-xl rounded-2xl md:rounded-3xl -z-10 group-hover:blur-2xl transition-all duration-300`}></div>
                        
                        <div className="relative p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-white border border-white/80 backdrop-blur-sm 
                                      shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]
                                      hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                                      transition-all duration-300">
                          
                          <div className="flex items-start justify-between gap-4 md:gap-6 mb-4 md:mb-6">
                            <div className="flex items-start gap-3 md:gap-4">
                              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
                                {exp.icon}
                              </div>
                              <div>
                                <h4 className="text-lg md:text-xl font-bold text-[#2D2D2D] mb-1">{exp.title}</h4>
                                <p className="text-gray-700 text-sm md:text-base font-medium">{exp.company}</p>
                              </div>
                            </div>
                            
                            <motion.div
                              animate={{ x: [0, 2, 0] }}
                              transition={{ repeat: Infinity, duration: 2 }}
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
                                <FaArrowRight className="text-gray-500" size={10} />
                              </div>
                            </motion.div>
                          </div>
                          
                          {/* Period Badge */}
                          <div className="inline-block mb-3 md:mb-4">
                            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 font-medium text-xs md:text-sm rounded-full shadow-sm">
                              {exp.period}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">{exp.description}</p>
                          
                          {/* Achievements Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            {exp.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -5 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-2 group/achievement"
                              >
                                <motion.div
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
                                  className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-1.5 md:mt-2 flex-shrink-0"
                                />
                                <span className="text-gray-600 text-xs md:text-sm leading-relaxed group-hover/achievement:text-gray-800 transition-colors">
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
        <div className="max-w-6xl mx-auto mb-16 md:mb-24">
          <div className="mb-6 md:mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-[#2D2D2D] mb-2">Education</h3>
            <p className="text-gray-400 text-sm">Current student at Addis Ababa University</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative group cursor-pointer"
              >
                {/* Floating Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} blur-xl rounded-xl md:rounded-2xl -z-10 group-hover:blur-2xl transition-all duration-300`}></div>
                
                <div className="relative rounded-xl md:rounded-2xl bg-white border border-white/80 backdrop-blur-sm 
                              shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]
                              hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                              transition-all duration-300 p-5 md:p-6">
                  
                  <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
                      {edu.icon}
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-[#2D2D2D] mb-1">{edu.degree}</h4>
                      <p className="text-gray-700 text-sm font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  
                  {/* Period */}
                  <div className="mb-3 md:mb-4">
                    <span className="px-3 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 md:mb-6 leading-relaxed">{edu.description}</p>
                  
                  {/* Courses */}
                  <div className="pt-3 md:pt-4 border-t border-gray-100">
                    <div className="text-xs md:text-sm text-gray-500 font-medium mb-2 md:mb-3">Relevant Courses</div>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {edu.courses.map((course, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.03 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-2.5 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs rounded-full font-medium shadow-sm"
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

        {/* Tech Philosophy - Updated to match your skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16 md:mb-24"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/10 to-purple-100/10 blur-xl -z-10 rounded-full"></div>
          
          <div className="relative p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white to-white/80 border border-white/80 backdrop-blur-sm
                        shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]">
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 mb-6 md:mb-10">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2D2D2D] mb-3 md:mb-4">Development Philosophy</h3>
                <p className="text-gray-600 text-base md:text-lg max-w-2xl">
                  I believe in creating web applications that are not only visually appealing but also highly functional, 
                  scalable, and user-friendly, using the latest technologies and best practices.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 md:gap-3">
                {["Clean Code", "User-Focused", "Scalable", "Modern Tech"].map((principle, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-white/90 border border-white/80 text-gray-700 rounded-full font-medium text-xs md:text-sm
                              shadow-[0_6px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_25px_-8px_rgba(0,0,0,0.12)]
                              transition-all duration-300 cursor-default"
                  >
                    {principle}
                  </motion.span>
                ))}
              </div>
            </div>
            
            {/* Tech Skills Grid - Updated to match your stack */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-6 md:pt-10 border-t border-gray-100">
              {[
                { value: "Full Stack", label: "Development", icon: <FaCode className="text-blue-500" />, color: "from-blue-100 to-blue-50" },
                { value: "Modern", label: "Tech Stack", icon: <FaCode className="text-purple-500" />, color: "from-purple-100 to-purple-50" },
                { value: "UI/UX", label: "Design Focus", icon: <FaCode className="text-emerald-500" />, color: "from-emerald-100 to-emerald-50" },
                { value: "Responsive", label: "Design", icon: <FaCode className="text-amber-500" />, color: "from-amber-100 to-amber-50" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="relative group cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} blur-lg rounded-xl -z-10 group-hover:blur-xl transition-all duration-300`}></div>
                  
                  <div className="relative p-3 md:p-4 rounded-lg md:rounded-xl bg-white/90 border border-white/80 backdrop-blur-sm text-center">
                    <div className="flex items-center justify-center gap-2 mb-1 md:mb-2">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
                        {stat.icon}
                      </div>
                      <p className="text-lg md:text-xl font-bold text-[#2D2D2D]">{stat.value}</p>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500">{stat.label}</p>
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
            className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-[#2D2D2D] text-white font-semibold rounded-full 
                      shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25)]
                      transition-all duration-300 text-base md:text-lg"
          >
            <span>Let's Work Together</span>
            <FaArrowRight size={14} />
          </motion.a>
          
          {/* Decorative Floating Element */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-8 md:mt-12 text-gray-400 text-sm"
          >
            ↓ Scroll to see my projects
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-10 md:-left-20 w-40 h-40 md:w-72 md:h-72 bg-blue-100/5 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-1/3 -right-10 md:-right-20 w-40 h-40 md:w-80 md:h-80 bg-purple-100/5 rounded-full blur-2xl -z-10"></div>
    </section>
  );
};

export default Experience;