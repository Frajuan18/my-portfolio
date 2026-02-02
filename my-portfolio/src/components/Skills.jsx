import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFigma, FaReact, FaPalette, FaCode, 
  FaLightbulb, FaTools, FaAward, FaArrowRight 
} from 'react-icons/fa';

const Skills = () => {
  const skillsData = [
    {
      category: "UI/UX Design",
      icon: <FaPalette className="text-blue-500" size={24} />,
      skills: [
        { name: "User Research", level: 95 },
        { name: "Wireframing", level: 98 },
        { name: "Prototyping", level: 92 },
        { name: "Interaction Design", level: 90 },
        { name: "Design Systems", level: 88 }
      ]
    },
    {
      category: "Web Development",
      icon: <FaCode className="text-purple-500" size={24} />,
      skills: [
        { name: "Webflow", level: 96 },
        { name: "React", level: 85 },
        { name: "JavaScript", level: 82 },
        { name: "HTML/CSS", level: 95 },
        { name: "Responsive Design", level: 94 }
      ]
    },
    {
      category: "Product Design",
      icon: <FaLightbulb className="text-emerald-500" size={24} />,
      skills: [
        { name: "User Testing", level: 90 },
        { name: "Design Thinking", level: 92 },
        { name: "Product Strategy", level: 85 },
        { name: "Figma", level: 97 },
        { name: "Adobe Creative Suite", level: 88 }
      ]
    }
  ];

  const techStack = [
    { name: "Figma", icon: <FaFigma className="text-pink-500" />, color: "from-pink-100 to-pink-50" },
    { name: "Webflow", icon: <FaTools className="text-blue-500" />, color: "from-blue-100 to-blue-50" },
    { name: "React", icon: <FaReact className="text-cyan-500" />, color: "from-cyan-100 to-cyan-50" },
    { name: "Adobe XD", icon: <FaPalette className="text-purple-500" />, color: "from-purple-100 to-purple-50" },
    { name: "Sketch", icon: <FaPalette className="text-orange-500" />, color: "from-orange-100 to-orange-50" },
    { name: "Framer", icon: <FaCode className="text-red-500" />, color: "from-red-100 to-red-50" },
    { name: "Tailwind", icon: <FaCode className="text-teal-500" />, color: "from-teal-100 to-teal-50" },
    { name: "JavaScript", icon: <FaCode className="text-yellow-500" />, color: "from-yellow-100 to-yellow-50" }
  ];

  const calculateAverage = (skills) => {
    const total = skills.reduce((sum, skill) => sum + skill.level, 0);
    return Math.round(total / skills.length);
  };

  return (
    <section id="skills" className="relative py-32 bg-[#FDFDFD] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Header - Matching Hero Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-gray-700">My Expertise</h3>
            <h2 className="text-6xl lg:text-7xl font-black text-[#2D2D2D] uppercase tracking-tighter leading-none">
              Skills & 
              <span className="block mt-2">Mastery</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg font-normal mt-6">
              12 years of mastering design tools and methodologies to create exceptional digital experiences.
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
            { value: "12+", label: "Years Experience", color: "from-blue-100 to-blue-50" },
            { value: "15+", label: "Tools Mastered", color: "from-purple-100 to-purple-50" },
            { value: "95%", label: "Average Proficiency", color: "from-emerald-100 to-emerald-50" }
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
                            transition-all duration-300 text-center">
                <p className="text-3xl font-bold text-[#2D2D2D] mb-2">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid - Clean No Progress Bars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
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
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 to-gray-50/10 blur-xl rounded-3xl -z-10 group-hover:blur-2xl transition-all duration-300"></div>
                
                <div className="relative p-8 rounded-3xl bg-white border border-white/80 backdrop-blur-sm 
                              shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]
                              hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                              transition-all duration-300">
                  
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
                        {categoryData.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#2D2D2D]">{categoryData.category}</h3>
                        <p className="text-sm text-gray-400 mt-1">Expert level skills</p>
                      </div>
                    </div>
                    
                    {/* Average Score Badge */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                        <span className="text-xl font-bold text-white">{average}%</span>
                      </div>
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Clean Skills List - No Progress Bars */}
                  <div className="space-y-4">
                    {categoryData.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1 + categoryIndex * 0.2 }}
                        whileHover={{ x: 5 }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-gray-50/50 to-white/50 hover:from-gray-100/50 hover:to-white transition-all duration-300 border border-white/80">
                          <div className="flex items-center gap-3">
                            {/* Skill Level Indicator Dot */}
                            <div className="relative">
                              <div className={`w-3 h-3 rounded-full ${
                                skill.level >= 95 ? 'bg-emerald-500' :
                                skill.level >= 85 ? 'bg-blue-500' :
                                skill.level >= 75 ? 'bg-purple-500' :
                                'bg-gray-400'
                              }`}></div>
                              <div className={`absolute inset-0 rounded-full animate-ping ${
                                skill.level >= 95 ? 'bg-emerald-500' :
                                skill.level >= 85 ? 'bg-blue-500' :
                                skill.level >= 75 ? 'bg-purple-500' :
                                'bg-gray-400'
                              } opacity-20`}></div>
                            </div>
                            
                            <span className="text-gray-700 font-medium">{skill.name}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-gray-800">{skill.level}%</span>
                            <motion.div
                              initial={{ opacity: 0, x: -5 }}
                              whileHover={{ opacity: 1, x: 0 }}
                              className="opacity-0 group-hover/skill:opacity-100 transition-all duration-300"
                            >
                              <FaArrowRight className="text-gray-400" size={12} />
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
        <div className="mb-24">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">Tech & Tools</h3>
            <p className="text-gray-400 text-sm">Tools I use to bring ideas to life</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0]
                }}
                className="relative group cursor-pointer"
              >
                {/* Floating Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} blur-xl rounded-2xl -z-10 group-hover:blur-2xl transition-all duration-300`}></div>
                
                <div className="relative aspect-square bg-white/90 border border-white/80 backdrop-blur-sm rounded-2xl 
                              shadow-[0_15px_35px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]
                              group-hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                              transition-all duration-300 flex flex-col items-center justify-center p-4">
                  
                  {/* Icon */}
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm font-semibold text-[#2D2D2D]">{tech.name}</div>
                    <div className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Expert Level
                    </div>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Methodology - Floating Steps */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-24"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20 blur-3xl -z-10 rounded-full"></div>
          
          <div className="relative p-10 rounded-3xl bg-gradient-to-br from-white to-white/80 border border-white/80 backdrop-blur-sm
                        shadow-[0_25px_60px_-20px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]">
            <h3 className="text-3xl font-bold text-[#2D2D2D] mb-10 text-center">Design Methodology</h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "01", title: "Research", desc: "Understanding user needs and business goals", color: "from-blue-100 to-blue-50" },
                { number: "02", title: "Wireframe", desc: "Creating structure and layout foundations", color: "from-purple-100 to-purple-50" },
                { number: "03", title: "Design", desc: "Developing visual identity and UI elements", color: "from-emerald-100 to-emerald-50" },
                { number: "04", title: "Test", desc: "Validating with users and iterating", color: "from-amber-100 to-amber-50" }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative text-center group cursor-pointer"
                >
                  {/* Floating Step Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} blur-xl rounded-2xl -z-10 group-hover:blur-2xl transition-all duration-300`}></div>
                  
                  <div className="relative p-6 rounded-2xl bg-white/90 border border-white/80 backdrop-blur-sm
                                shadow-[0_15px_35px_-15px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.9)]
                                group-hover:shadow-[0_20px_45px_-15px_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.9)]
                                transition-all duration-300">
                    
                    {/* Step Number */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-white">{step.number}</span>
                    </div>
                    
                    <div className="text-sm font-semibold text-[#2D2D2D] mb-2">{step.title}</div>
                    <p className="text-gray-600 text-xs leading-relaxed">{step.desc}</p>
                    
                    {/* Connector Line */}
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-200 to-transparent"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications & Awards - Floating Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-2xl font-bold text-[#2D2D2D] mb-10">Certifications & Awards</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "Google UX Design", 
                desc: "Professional Certificate in User Experience Design",
                year: "2023",
                icon: <FaAward className="text-blue-500" size={24} />,
                color: "from-blue-100 to-blue-50"
              },
              { 
                title: "Webflow Expert", 
                desc: "Certified Webflow Developer & Designer",
                year: "2022",
                icon: <FaCode className="text-purple-500" size={24} />,
                color: "from-purple-100 to-purple-50"
              },
              { 
                title: "Awwwards Winner", 
                desc: "Site of the Day Award for Design Excellence",
                year: "2021",
                icon: <FaAward className="text-emerald-500" size={24} />,
                color: "from-emerald-100 to-emerald-50"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} blur-xl rounded-2xl -z-10 group-hover:blur-2xl transition-all duration-300`}></div>
                
                <div className="relative p-6 rounded-2xl bg-white border border-white/80 backdrop-blur-sm 
                              shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)] 
                              group-hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                              transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
                      {cert.icon}
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#2D2D2D] mb-1">{cert.title}</div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{cert.year}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
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
            <span>Discuss Your Project</span>
            <FaArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-100/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Skills;