import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaStar, FaRegClock, FaTrophy } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "SaaS Dashboard Design",
      description: "Minimal dashboard for analytics platform focusing on user experience and data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Figma", "React", "Tailwind", "Chart.js"],
      category: "ui-ux",
      demoLink: "#",
      featured: true,
      year: "2023"
    },
    {
      id: 2,
      title: "E-commerce Website",
      description: "Modern e-commerce platform built with Webflow focusing on smooth user journey.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Webflow", "JavaScript", "CSS", "No-Code"],
      category: "webflow",
      demoLink: "#",
      featured: true,
      year: "2023"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "User-friendly banking application with clean interface and seamless navigation.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Figma", "Adobe XD", "Prototyping", "UI Design"],
      category: "ui-ux",
      demoLink: "#",
      featured: true,
      year: "2022"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Clean portfolio website for creative agency built with modern design principles.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Webflow", "Framer", "GSAP", "Responsive"],
      category: "webflow",
      demoLink: "#",
      featured: false,
      year: "2022"
    },
    {
      id: 5,
      title: "Fitness App Design",
      description: "Health and fitness tracking application with intuitive workout planning.",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Figma", "UI Kit", "Motion", "Prototype"],
      category: "ui-ux",
      demoLink: "#",
      featured: false,
      year: "2021"
    },
    {
      id: 6,
      title: "Business Website",
      description: "Corporate website for tech startup with clear messaging and lead capture.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Webflow", "CMS", "SEO", "Performance"],
      category: "webflow",
      demoLink: "#",
      featured: false,
      year: "2021"
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'ui-ux', label: 'UI/UX Design' },
    { id: 'webflow', label: 'Webflow' },
    { id: 'product', label: 'Product Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="relative py-32 bg-[#FDFDFD] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Header - Matching Hero Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-gray-700">My Work</h3>
            <h2 className="text-6xl lg:text-7xl font-black text-[#2D2D2D] uppercase tracking-tighter leading-none">
              Selected 
              <span className="block mt-2">Projects</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg font-normal mt-6">
              A curated collection of my best design and development projects from the past 12 years.
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
            { value: "250+", label: "Designs Created", icon: <FaTrophy className="text-blue-500" />, color: "from-blue-100 to-blue-50" },
            { value: "50+", label: "Websites Built", icon: <FaRegClock className="text-purple-500" />, color: "from-purple-100 to-purple-50" },
            { value: "100%", label: "Client Satisfaction", icon: <FaStar className="text-emerald-500" />, color: "from-emerald-100 to-emerald-50" }
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

        {/* Filter Buttons - Floating Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-20"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm ${
                activeFilter === filter.id
                  ? 'bg-[#2D2D2D] text-white shadow-lg shadow-gray-200'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-white/80 shadow-[0_8px_25px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.12)]'
              }`}
            >
              {filter.label}
              {activeFilter === filter.id && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 rounded-full bg-[#2D2D2D] -z-10"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Projects - Floating Cards */}
        {featuredProjects.length > 0 && (
          <div className="mb-24">
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">Featured Work</h3>
              <p className="text-gray-400 text-sm">Award-winning projects and client favorites</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group cursor-pointer"
                >
                  {/* Floating Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 to-gray-50/10 blur-xl rounded-3xl -z-10 group-hover:blur-2xl transition-all duration-300"></div>
                  
                  <div className="relative rounded-3xl bg-white border border-white/80 backdrop-blur-sm 
                                shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]
                                hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                                transition-all duration-300 overflow-hidden">
                    
                    {/* Project Image */}
                    <div className="relative h-56 overflow-hidden">
                      <motion.img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Featured Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="px-3 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-medium rounded-full flex items-center gap-1 shadow-lg">
                          <FaStar size={10} />
                          Featured
                        </div>
                      </div>
                      
                      {/* Year Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full shadow-sm">
                          {project.year}
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">{project.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
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
                      
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: techIndex * 0.05 }}
                            className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs rounded-full font-medium shadow-sm"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      
                      {/* View Project Link */}
                      <div className="pt-4 border-t border-gray-100">
                        <motion.a 
                          href={project.demoLink}
                          whileHover={{ x: 5 }}
                          className="inline-flex items-center gap-2 text-gray-700 hover:text-[#2D2D2D] font-medium text-sm"
                        >
                          <span>View Project Details</span>
                          <FaArrowRight size={12} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* All Projects Grid - Floating Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              {/* Floating Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100/10 to-gray-50/5 blur-xl rounded-2xl -z-10 group-hover:blur-2xl transition-all duration-300"></div>
              
              <div className="relative rounded-2xl bg-white border border-white/80 backdrop-blur-sm 
                            shadow-[0_15px_35px_-15px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.9)]
                            hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.9)]
                            transition-all duration-300 overflow-hidden">
                
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <div className="px-2 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-medium rounded-full shadow-lg">
                        <FaStar size={8} className="inline mr-1" />
                        Featured
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Project Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[#2D2D2D] mb-2">{project.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{project.description}</p>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, rotate: -90 }}
                      whileHover={{ opacity: 1, rotate: 0 }}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <FaArrowRight className="text-gray-400" size={12} />
                    </motion.div>
                  </div>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-500 text-xs rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{project.year}</span>
                    <a 
                      href={project.demoLink}
                      className="text-sm font-medium text-gray-700 hover:text-[#2D2D2D] transition-colors"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process & Stats - Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-24"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20 blur-3xl -z-10 rounded-full"></div>
          
          <div className="relative p-10 rounded-3xl bg-gradient-to-br from-white to-white/80 border border-white/80 backdrop-blur-sm
                        shadow-[0_25px_60px_-20px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              {[
                { value: "250+", label: "Designs Created", color: "from-blue-100 to-blue-50" },
                { value: "50+", label: "Websites Built", color: "from-purple-100 to-purple-50" },
                { value: "100%", label: "On Time Delivery", color: "from-emerald-100 to-emerald-50" },
                { value: "12+", label: "Design Awards", color: "from-amber-100 to-amber-50" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl font-bold text-[#2D2D2D] mb-2">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
                Every project starts with understanding the problem, designing the solution, 
                and delivering results that exceed expectations.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {["User Research", "Wireframing", "Prototyping", "Development", "Testing", "Launch"].map((item, index) => (
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
                    {item}
                  </motion.span>
                ))}
              </div>
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
            <span>Start a Project</span>
            <FaArrowRight size={16} />
          </motion.a>
          
          {/* Decorative Floating Element */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-12 text-gray-400 text-sm"
          >
            ↓ View more projects on Dribbble
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-100/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-purple-100/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Projects;