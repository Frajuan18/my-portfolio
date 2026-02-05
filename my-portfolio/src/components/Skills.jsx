import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFigma, FaReact, FaPalette, FaCode, 
  FaLightbulb, FaTools, FaDatabase, FaServer,
  FaArrowRight, FaNodeJs, FaFigmaSquare
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiMongodb, SiSupabase } from 'react-icons/si';

const Skills = () => {
  const skillsData = [
    {
      category: "Full Stack Development",
      icon: <FaCode className="text-blue-500" size={22} />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Node.js", level: 82 },
        { name: "TypeScript", level: 80 },
        { name: "API Development", level: 85 }
      ]
    },
    {
      category: "UI/UX Design",
      icon: <FaPalette className="text-purple-500" size={22} />,
      skills: [
        { name: "Figma", level: 92 },
        { name: "User Research", level: 85 },
        { name: "Wireframing", level: 88 },
        { name: "Prototyping", level: 90 },
        { name: "Design Systems", level: 85 }
      ]
    },
    {
      category: "Database & Backend",
      icon: <FaDatabase className="text-emerald-500" size={22} />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "Firebase", level: 88 },
        { name: "Supabase", level: 82 },
        { name: "REST APIs", level: 87 },
        { name: "Database Design", level: 83 }
      ]
    }
  ];

  const techStack = [
    { name: "React", icon: <FaReact className="text-cyan-500" />, color: "from-cyan-100 to-cyan-50" },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-700" />, color: "from-gray-100 to-gray-50" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, color: "from-green-100 to-green-50" },
    { name: "TypeScript", icon: <FaCode className="text-blue-500" />, color: "from-blue-100 to-blue-50" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-500" />, color: "from-teal-100 to-teal-50" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, color: "from-emerald-100 to-emerald-50" },
    { name: "Firebase", icon: <SiFirebase className="text-amber-500" />, color: "from-amber-100 to-amber-50" },
    { name: "Supabase", icon: <SiSupabase className="text-sky-500" />, color: "from-sky-100 to-sky-50" },
    { name: "Figma", icon: <FaFigma className="text-pink-500" />, color: "from-pink-100 to-pink-50" },
    { name: "Framer", icon: <FaCode className="text-rose-500" />, color: "from-rose-100 to-rose-50" },
    { name: "Webflow", icon: <FaCode className="text-purple-500" />, color: "from-purple-100 to-purple-50" },
    { name: "HTML/CSS", icon: <FaCode className="text-orange-500" />, color: "from-orange-100 to-orange-50" }
  ];

  const calculateAverage = (skills) => {
    const total = skills.reduce((sum, skill) => sum + skill.level, 0);
    return Math.round(total / skills.length);
  };

  return (
    <section id="skills" className="relative py-20 md:py-32 bg-[#FDFDFD] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        
        {/* Header - Matching Hero Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto mb-12 md:mb-20"
        >
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">My Expertise</h3>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#2D2D2D] uppercase tracking-tighter leading-none">
              Skills & 
              <span className="block mt-1 sm:mt-2">Tech Stack</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg font-normal mt-4 md:mt-6">
              2 years of mastering modern web technologies and design tools to build exceptional digital products.
            </p>
          </div>
        </motion.div>

        {/* Floating Stats Cards - Consistent numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          {[
            { value: "2+", label: "Years Experience", color: "from-blue-100 to-blue-50" },
            { value: "20+", label: "Projects Completed", color: "from-purple-100 to-purple-50" },
            { value: "98%", label: "Satisfaction Rate", color: "from-emerald-100 to-emerald-50" }
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
                            transition-all duration-300 text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-1 md:mb-2">{stat.value}</p>
                <p className="text-xs md:text-sm text-gray-500">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid - Clean No Progress Bars */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {skillsData.map((categoryData, categoryIndex) => {
            const average = calculateAverage(categoryData.skills);
            
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="relative group"
              >
                {/* Floating Category Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 to-gray-50/10 blur-xl rounded-2xl md:rounded-3xl -z-10 group-hover:blur-2xl transition-all duration-300"></div>
                
                <div className="relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-white/80 backdrop-blur-sm 
                              shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]
                              hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                              transition-all duration-300">
                  
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6 md:mb-8">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
                        {categoryData.icon}
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-[#2D2D2D]">{categoryData.category}</h3>
                        <p className="text-sm text-gray-400 mt-0.5">Professional skills</p>
                      </div>
                    </div>
                    
                    {/* Average Score Badge */}
                    <div className="relative">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                        <span className="text-base md:text-xl font-bold text-white">{average}%</span>
                      </div>
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Clean Skills List - No Progress Bars */}
                  <div className="space-y-3 md:space-y-4">
                    {categoryData.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1 + categoryIndex * 0.2 }}
                        whileHover={{ x: 3 }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between p-3 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-r from-gray-50/50 to-white/50 hover:from-gray-100/50 hover:to-white transition-all duration-300 border border-white/80">
                          <div className="flex items-center gap-2 md:gap-3">
                            {/* Skill Level Indicator Dot */}
                            <div className="relative">
                              <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                                skill.level >= 90 ? 'bg-emerald-500' :
                                skill.level >= 80 ? 'bg-blue-500' :
                                skill.level >= 70 ? 'bg-purple-500' :
                                'bg-gray-400'
                              }`}></div>
                              <div className={`absolute inset-0 rounded-full animate-ping ${
                                skill.level >= 90 ? 'bg-emerald-500' :
                                skill.level >= 80 ? 'bg-blue-500' :
                                skill.level >= 70 ? 'bg-purple-500' :
                                'bg-gray-400'
                              } opacity-20`}></div>
                            </div>
                            
                            <span className="text-gray-700 text-sm md:text-base font-medium">{skill.name}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-gray-800">{skill.level}%</span>
                            <motion.div
                              initial={{ opacity: 0, x: -5 }}
                              whileHover={{ opacity: 1, x: 0 }}
                              className="opacity-0 group-hover/skill:opacity-100 transition-all duration-300"
                            >
                              <FaArrowRight className="text-gray-400" size={10} />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack - Floating Cards */}
        <div className="mb-16 md:mb-24">
          <div className="mb-6 md:mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-[#2D2D2D] mb-2">Tech & Tools Stack</h3>
            <p className="text-gray-400 text-sm">Technologies I use daily for development & design</p>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 md:gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.05,
                  rotate: [0, -3, 3, 0]
                }}
                className="relative group cursor-pointer"
              >
                {/* Floating Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} blur-lg rounded-lg md:rounded-xl -z-10 group-hover:blur-xl transition-all duration-300`}></div>
                
                <div className="relative aspect-square bg-white/90 border border-white/80 backdrop-blur-sm rounded-lg md:rounded-xl 
                              shadow-[0_10px_25px_-10px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]
                              group-hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                              transition-all duration-300 flex flex-col items-center justify-center p-2 md:p-3">
                  
                  {/* Icon */}
                  <div className="text-xl md:text-2xl mb-1 md:mb-2 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-xs md:text-sm font-medium text-[#2D2D2D]">{tech.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      Proficient
                    </div>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Development Process - Floating Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16 md:mb-24"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/10 to-purple-100/10 blur-xl -z-10 rounded-full"></div>
          
          <div className="relative p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white to-white/80 border border-white/80 backdrop-blur-sm
                        shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#2D2D2D] mb-6 md:mb-10 text-center">Development Process</h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {[
                { number: "01", title: "Planning", desc: "Requirements analysis and project architecture", color: "from-blue-100 to-blue-50" },
                { number: "02", title: "Design", desc: "UI/UX design and user flow mapping", color: "from-purple-100 to-purple-50" },
                { number: "03", title: "Development", desc: "Coding, testing, and feature implementation", color: "from-emerald-100 to-emerald-50" },
                { number: "04", title: "Deployment", desc: "Launch, monitoring, and maintenance", color: "from-amber-100 to-amber-50" }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="relative text-center group cursor-pointer"
                >
                  {/* Floating Step Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} blur-lg md:blur-xl rounded-lg md:rounded-xl -z-10 group-hover:blur-xl md:group-hover:blur-2xl transition-all duration-300`}></div>
                  
                  <div className="relative p-4 md:p-6 rounded-lg md:rounded-xl bg-white/90 border border-white/80 backdrop-blur-sm
                                shadow-[0_10px_25px_-10px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.9)]
                                group-hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.9)]
                                transition-all duration-300">
                    
                    {/* Step Number */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <span className="text-base md:text-lg font-bold text-white">{step.number}</span>
                    </div>
                    
                    <div className="text-sm md:text-base font-semibold text-[#2D2D2D] mb-1 md:mb-2">{step.title}</div>
                    <p className="text-gray-600 text-xs leading-relaxed">{step.desc}</p>
                    
                    {/* Connector Line */}
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-4 md:w-8 h-0.5 bg-gradient-to-r from-gray-200 to-transparent"></div>
                    )}
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
            <span>Discuss Your Project</span>
            <FaArrowRight size={14} />
          </motion.a>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/3 -left-10 md:-left-20 w-40 h-40 md:w-72 md:h-72 bg-blue-100/5 rounded-full blur-xl -z-10"></div>
      <div className="absolute bottom-1/4 -right-10 md:-right-20 w-40 h-40 md:w-72 md:h-72 bg-purple-100/5 rounded-full blur-xl -z-10"></div>
    </section>
  );
};

export default Skills;