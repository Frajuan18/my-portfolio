import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaFigma, FaReact, FaCode, FaPalette } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="relative py-32 bg-[#FDFDFD] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Header - Matching Hero Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-gray-700">About Me</h3>
            <h2 className="text-6xl lg:text-7xl font-black text-[#2D2D2D] uppercase tracking-tighter leading-none">
              Crafting Digital
              <span className="block mt-2">Experiences</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg font-normal mt-6">
              With 12 years of experience, I blend design and development to create meaningful digital products.
            </p>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Left Column - Content with Floating Stats */}
            <div className="relative">
              {/* Intro Text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    I'm <span className="font-bold text-[#2D2D2D]">Fraol</span>, a passionate designer and developer with 12 years of experience creating exceptional digital experiences. My work combines aesthetic beauty with functional perfection.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    I believe in design that not only looks stunning but solves real problems. Every project is an opportunity to push boundaries and create something truly remarkable.
                  </p>
                </div>
              </motion.div>

              {/* Floating Stats - Hero Style */}
              <div className="relative mt-16">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "12+", label: "Years", color: "from-blue-100 to-blue-50" },
                    { value: "250+", label: "Projects", color: "from-purple-100 to-purple-50" },
                    { value: "50+", label: "Clients", color: "from-emerald-100 to-emerald-50" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index + 0.2 }}
                      whileHover={{ 
                        y: -8,
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className="relative group cursor-pointer"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} blur-xl rounded-xl -z-10 group-hover:blur-2xl transition-all duration-300`}></div>
                      
                      <div className="relative p-6 rounded-2xl bg-white border border-white/80 backdrop-blur-sm 
                                    shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)] 
                                    group-hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                                    transition-all duration-300 text-center">
                        <p className="text-3xl font-bold text-[#2D2D2D] mb-2">{stat.value}</p>
                        <p className="text-sm text-gray-500">{stat.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - What I Do with Floating Cards */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Services Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">What I Do</h3>
                  <p className="text-gray-400 text-sm">Specialized services & expertise</p>
                </div>

                {/* Floating Service Cards */}
                <div className="space-y-4">
                  {[
                    {
                      title: "UI/UX Design",
                      description: "Creating intuitive interfaces and seamless user experiences",
                      icon: <FaPalette className="text-blue-500" size={20} />,
                      color: "blue",
                      delay: 0
                    },
                    {
                      title: "Frontend Development",
                      description: "Building responsive web applications with modern tech",
                      icon: <FaCode className="text-purple-500" size={20} />,
                      color: "purple",
                      delay: 0.1
                    },
                    {
                      title: "Product Design",
                      description: "Designing digital products from concept to launch",
                      icon: <FaFigma className="text-emerald-500" size={20} />,
                      color: "emerald",
                      delay: 0.2
                    },
                    {
                      title: "3D & Visual Design",
                      description: "Crafting immersive 3D visuals and animations",
                      icon: <FaReact className="text-amber-500" size={20} />,
                      color: "amber",
                      delay: 0.3
                    }
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: service.delay }}
                      whileHover={{ 
                        y: -6,
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      className="relative group cursor-pointer"
                    >
                      {/* Floating Shadow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200/30 to-gray-100/20 blur-xl rounded-xl -z-10 group-hover:blur-2xl transition-all duration-300"></div>
                      
                      {/* Main Card */}
                      <div className="relative p-5 rounded-2xl bg-white border border-white/80 backdrop-blur-sm 
                                    shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)] 
                                    group-hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                                    transition-all duration-300">
                        
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4">
                            {/* Icon Container */}
                            <motion.div 
                              whileHover={{ rotate: 10, scale: 1.1 }}
                              className={`w-12 h-12 rounded-xl flex items-center justify-center 
                                        shadow-[0_8px_20px_-5px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)]
                                        ${service.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100/50' :
                                          service.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-purple-100/50' :
                                          service.color === 'emerald' ? 'bg-gradient-to-br from-emerald-50 to-emerald-100/50' :
                                          'bg-gradient-to-br from-amber-50 to-amber-100/50'}`}
                            >
                              {service.icon}
                            </motion.div>
                            
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-[#2D2D2D] mb-1.5">
                                {service.title}
                              </h4>
                              <p className="text-gray-500 text-sm leading-relaxed">
                                {service.description}
                              </p>
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
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2"
                          >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
                              <FaArrowRight className="text-gray-500 group-hover:text-gray-700 transition-colors" size={12} />
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack - Floating Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="pt-10 border-t border-gray-100"
                >
                  <h4 className="text-lg font-bold text-[#2D2D2D] mb-5">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: "Figma", color: "from-pink-100 to-pink-50" },
                      { name: "React", color: "from-blue-100 to-blue-50" },
                      { name: "TypeScript", color: "from-sky-100 to-sky-50" },
                      { name: "Tailwind", color: "from-teal-100 to-teal-50" },
                      { name: "Webflow", color: "from-purple-100 to-purple-50" },
                      { name: "Framer", color: "from-rose-100 to-rose-50" },
                      { name: "Blender", color: "from-orange-100 to-orange-50" },
                      { name: "Git", color: "from-gray-100 to-gray-50" }
                    ].map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * index + 0.6 }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        className="relative group cursor-pointer"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} blur-md rounded-full -z-10 group-hover:blur-lg transition-all duration-300`}></div>
                        
                        <div className="relative px-4 py-2.5 bg-white/90 border border-white/80 rounded-full 
                                      shadow-[0_8px_25px_-10px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.8)]
                                      group-hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.9)]
                                      transition-all duration-300">
                          <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Philosophy Section - Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-32 pt-20 border-t border-gray-100"
          >
            <div className="relative max-w-3xl mx-auto">
              {/* Floating Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20 blur-3xl -z-10 rounded-full"></div>
              
              <div className="relative p-10 rounded-3xl bg-gradient-to-br from-white to-white/80 border border-white/80 backdrop-blur-sm
                            shadow-[0_25px_60px_-20px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)] text-center">
                <h3 className="text-3xl font-bold text-[#2D2D2D] mb-6">Design Philosophy</h3>
                <p className="text-gray-600 text-xl leading-relaxed mb-10 italic">
                  "I believe that great design is invisible. When it's done right, users don't notice 
                  the design—they simply accomplish their goals effortlessly."
                </p>
                
                <div className="flex justify-center gap-4">
                  {["User-Centered", "Minimal & Clean", "Purposeful"].map((principle, index) => (
                    <motion.span
                      key={principle}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index + 0.2 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-6 py-3 bg-white/90 border border-white/80 rounded-full font-medium text-gray-700
                                shadow-[0_8px_25px_-10px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.8)]
                                hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.9)]
                                transition-all duration-300 cursor-default"
                    >
                      {principle}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action - Matching Hero Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-24 text-center"
          >
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#2D2D2D] text-white font-semibold rounded-full 
                        shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.25)]
                        transition-all duration-300 text-lg"
            >
              <span>Let's Create Together</span>
              <FaArrowRight size={16} />
            </motion.a>
            
            {/* Decorative Floating Element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="mt-12 text-gray-400 text-sm"
            >
              ↓ Scroll to see projects
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default About;