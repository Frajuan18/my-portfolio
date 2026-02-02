import React from "react";
import { motion } from "framer-motion";
import { 
  FaEnvelope, FaDribbble, FaBehance, 
  FaPalette, FaCube, FaCode, FaArrowRight 
} from "react-icons/fa";
import profileImage from "../assets/unnamed (1).jpg";

const Hero = () => {
  const skills = [
    { 
      title: "UI/UX Design", 
      icon: <FaPalette className="text-blue-500" size={18} />, 
      color: "blue"
    },
    { 
      title: "3D Design", 
      icon: <FaCube className="text-purple-500" size={18} />, 
      color: "purple"
    },
    { 
      title: "React Dev", 
      icon: <FaCode className="text-emerald-500" size={18} />, 
      color: "emerald"
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#FDFDFD] flex items-center overflow-hidden pt-20" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;900&display=swap');`}
      </style>

      <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-3 gap-12 items-center">
        
        {/* LEFT SIDE - Intro & New Hire Me Button */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8 z-10"
        >
          <div className="space-y-1">
            <h3 className="text-2xl font-semibold text-gray-700">Hello, I'm</h3>
            <h1 className="text-7xl lg:text-8xl font-black text-[#2D2D2D] uppercase tracking-tighter leading-none">
              Fraol
            </h1>
          </div>
          
          <p className="text-gray-500 text-lg leading-relaxed max-w-xs font-normal">
            Designer with 12 years experience sketching, building and coaching. 
            I love fun UI and making helpful products.
          </p>

          {/* Hire Me Button & Email Stack */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
               <motion.button
                 whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }}
                 whileTap={{ scale: 0.95 }}
                 className="bg-[#2D2D2D] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 shadow-lg shadow-gray-200 transition-colors"
               >
                 Hire Me
                 <FaArrowRight size={14} />
               </motion.button>
               
               <div className="hidden sm:block h-10 w-[1px] bg-gray-200" />
               
               <span className="text-gray-400 text-sm font-medium hover:text-gray-600 cursor-pointer transition-colors">
                  fraolabmas@gmail.com
               </span>
            </div>

            <div className="flex items-center gap-5 pt-2">
                <motion.div 
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 bg-[#0091FF] rounded-full flex items-center justify-center text-white shadow-md cursor-pointer"
                >
                    <FaEnvelope size={14} />
                </motion.div>
                <FaDribbble className="text-gray-300 hover:text-pink-400 transition-colors cursor-pointer" size={20} />
                <FaBehance className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer" size={22} />
            </div>
          </div>
        </motion.div>

        {/* CENTER SECTION - Full Height Image Container */}
        <div className="relative flex justify-center items-center h-full min-h-[80vh]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Full Height Image Container with Decorative Elements */}
            <div className="relative h-[80vh] w-full max-w-md lg:max-w-lg flex items-center justify-center">
              
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
                  className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-teal-200/30 to-cyan-300/20 rounded-full blur-xl"
                />
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                  className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tr from-orange-200/20 to-pink-200/20 rounded-full blur-xl"
                />

                {/* Corner Accents */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-teal-400/50 rounded-tl-lg"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-lg"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-emerald-400/50 rounded-bl-lg"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-blue-400/50 rounded-br-lg"></div>
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-white rounded-2xl p-4 
                          shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.8)]
                          border border-white/80 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center
                                shadow-[0_8px_20px_-5px_rgba(0,0,0,0.1)]">
                    <FaPalette className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Projects</p>
                    <p className="text-xl font-bold text-gray-900">120+</p>
                  </div>
                </div>
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, type: "spring" }}
                className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 bg-gradient-to-br from-gray-900 to-gray-800 
                          text-white px-5 py-3 rounded-xl
                          shadow-[0_15px_35px_-10px_rgba(0,0,0,0.3)]"
              >
                <div className="text-center">
                  <p className="text-2xl font-bold">12+</p>
                  <p className="text-xs opacity-80 mt-1">Years Exp</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE - Floating Expertise Cards */}
        <div className="flex flex-col gap-6 z-10 max-w-xs ml-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-right"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Expertise</h3>
            <p className="text-sm text-gray-400">Specialized skills</p>
          </motion.div>
          
          {/* Floating Skill Cards with Perfect Shadows */}
          <div className="space-y-4">
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
                
                {/* Main Card with Perfect Shadow */}
                <div className="relative p-4 rounded-xl bg-white border border-white/80 backdrop-blur-sm 
                              shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)] 
                              group-hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                              transition-all duration-300">
                  
                  {/* Subtle glow border effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-white/5 pointer-events-none"></div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Icon with floating effect */}
                      <motion.div 
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className={`w-11 h-11 rounded-xl flex items-center justify-center 
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
                           index === 1 ? "3D Modeling & Rendering" : 
                           "Frontend Development"}
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
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
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
            className="mt-4"
          >
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "98%", label: "Satisfied", delay: 0.1 },
                { value: "50+", label: "Clients", delay: 0.2 },
                { value: "120+", label: "Projects", delay: 0 }
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
                  className="text-center p-4 rounded-xl bg-white border border-white/80 
                            shadow-[0_8px_30px_rgba(0,0,0,0.04),0_0_0_1px_rgba(255,255,255,0.9)]
                            hover:shadow-[0_15px_50px_-10px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.9)]
                            transition-all duration-300 cursor-pointer"
                >
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1.5">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Floating Tagline */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 p-4 rounded-xl bg-gradient-to-r from-gray-50/50 to-white/50 
                        border border-white/80 backdrop-blur-sm
                        shadow-[0_10px_30px_rgba(0,0,0,0.03),0_0_0_1px_rgba(255,255,255,0.8)]
                        text-right"
            >
              <p className="text-sm text-gray-600 italic">
                "Elevating digital experiences"
              </p>
              <div className="w-12 h-0.5 bg-gradient-to-r from-gray-300 to-transparent ml-auto mt-2"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;