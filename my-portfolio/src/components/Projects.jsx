import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaStar, FaRegClock, FaCode, FaShoppingCart, FaFilm, FaDumbbell, FaBriefcase, FaBox } from 'react-icons/fa';

// Import your local project images
import ecommerceImg from '../assets/shemeta.jpg';
import filmProductionImg from '../assets/yobo.jpg';
import jobDiscoveryImg from '../assets/job.jpg';
import gymWebsiteImg from '../assets/gym.jpg';
import productDesignImg from '../assets/jiji.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-featured online store with cart, checkout, and admin dashboard for product management.",
      image: ecommerceImg,
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
      category: "fullstack",
      demoLink: "#",
      featured: true,
      year: "2023",
      icon: <FaShoppingCart className="text-blue-500" />
    },
    {
      id: 2,
      title: "Film Production Website",
      description: "Showcase website for film production company with portfolio, services, and booking system.",
      image: filmProductionImg,
      tech: ["Next.js", "Firebase", "Framer Motion", "Tailwind CSS"],
      category: "fullstack",
      demoLink: "#",
      featured: true,
      year: "2023",
      icon: <FaFilm className="text-purple-500" />
    },
    {
      id: 3,
      title: "Job Discovery Platform",
      description: "Modern job board with search, filtering, and application tracking for job seekers.",
      image: jobDiscoveryImg,
      tech: ["React", "Supabase", "TypeScript", "Tailwind CSS"],
      category: "fullstack",
      demoLink: "#",
      featured: true,
      year: "2023",
      icon: <FaBriefcase className="text-emerald-500" />
    },
    {
      id: 4,
      title: "Gym & Fitness Website",
      description: "Responsive gym website with class schedules, membership plans, and trainer profiles.",
      image: gymWebsiteImg,
      tech: ["React", "Firebase", "Framer", "CSS Grid"],
      category: "fullstack",
      demoLink: "#",
      featured: false,
      year: "2022",
      icon: <FaDumbbell className="text-amber-500" />
    },
    {
      id: 5,
      title: "Product Design System",
      description: "Complete design system with reusable components for web applications.",
      image: productDesignImg,
      tech: ["Figma", "Framer", "Webflow", "React"],
      category: "ui-ux",
      demoLink: "#",
      featured: false,
      year: "2022",
      icon: <FaBox className="text-rose-500" />
    },
    {
      id: 6,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team features.",
      image: null,
      tech: ["Next.js", "MongoDB", "Socket.io", "Tailwind CSS"],
      category: "fullstack",
      demoLink: "#",
      featured: false,
      year: "2022",
      icon: <FaCode className="text-sky-500" />
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ui-ux', label: 'UI/UX Design' },
    { id: 'product', label: 'Product Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  // Image placeholder component
  const ImagePlaceholder = ({ icon, title, color }) => (
    <div className={`w-full h-full flex items-center justify-center ${color}`}>
      <div className="text-center p-8">
        <div className="text-4xl mb-4 opacity-80">{icon}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
    </div>
  );

  return (
    <section id="projects" className="relative py-20 md:py-32 bg-[#FDFDFD] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        
        {/* Header - Matching Hero Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto mb-12 md:mb-20"
        >
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">My Work</h3>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#2D2D2D] uppercase tracking-tighter leading-none">
              Selected 
              <span className="block mt-1 sm:mt-2">Projects</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg font-normal mt-4 md:mt-6">
              A collection of my best web development and design projects from the past 2 years.
            </p>
          </div>
        </motion.div>

        {/* Floating Stats Cards - Consistent with Experience section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          {[
            { value: "20+", label: "Projects Completed", icon: <FaCode className="text-blue-500" />, color: "from-blue-100 to-blue-50" },
            { value: "15+", label: "Happy Clients", icon: <FaStar className="text-purple-500" />, color: "from-purple-100 to-purple-50" },
            { value: "100%", label: "Satisfaction Rate", icon: <FaRegClock className="text-emerald-500" />, color: "from-emerald-100 to-emerald-50" }
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

        {/* Filter Buttons - Floating Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-20"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 text-xs md:text-sm ${
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
          <div className="mb-16 md:mb-24">
            <div className="mb-6 md:mb-10">
              <h3 className="text-xl md:text-2xl font-bold text-[#2D2D2D] mb-2">Featured Projects</h3>
              <p className="text-gray-400 text-sm">My best work from recent years</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="relative group cursor-pointer"
                >
                  {/* Floating Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 to-gray-50/10 blur-xl rounded-2xl md:rounded-3xl -z-10 group-hover:blur-2xl transition-all duration-300"></div>
                  
                  <div className="relative rounded-2xl md:rounded-3xl bg-white border border-white/80 backdrop-blur-sm 
                                shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]
                                hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                                transition-all duration-300 overflow-hidden">
                    
                    {/* Project Image or Placeholder */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      {project.image ? (
                        <motion.img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                      ) : (
                        <ImagePlaceholder 
                          icon={project.icon} 
                          title={project.title}
                          color="bg-gradient-to-br from-blue-500/80 to-purple-500/80"
                        />
                      )}
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Featured Badge */}
                      <div className="absolute top-3 right-3 md:top-4 md:right-4">
                        <div className="px-2 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-medium rounded-full flex items-center gap-1 shadow-lg">
                          <FaStar size={10} />
                          Featured
                        </div>
                      </div>
                      
                      {/* Year Badge */}
                      <div className="absolute top-3 left-3 md:top-4 md:left-4">
                        <div className="px-2 py-1 md:px-3 md:py-1.5 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full shadow-sm">
                          {project.year}
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-5 md:p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-[#2D2D2D] mb-2">{project.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
                        </div>
                        
                        <motion.div
                          animate={{ x: [0, 2, 0] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"
                        >
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
                            <FaArrowRight className="text-gray-500" size={10} />
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-5">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: techIndex * 0.05 }}
                            className="px-2 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs rounded-full font-medium shadow-sm"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      
                      {/* View Project Link */}
                      <div className="pt-3 md:pt-4 border-t border-gray-100">
                        <motion.a 
                          href={project.demoLink}
                          whileHover={{ x: 3 }}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-24">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative group cursor-pointer"
            >
              {/* Floating Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100/10 to-gray-50/5 blur-xl rounded-xl md:rounded-2xl -z-10 group-hover:blur-2xl transition-all duration-300"></div>
              
              <div className="relative rounded-xl md:rounded-2xl bg-white border border-white/80 backdrop-blur-sm 
                            shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.9)]
                            hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.9)]
                            transition-all duration-300 overflow-hidden">
                
                {/* Project Image or Placeholder */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  {project.image ? (
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  ) : (
                    <ImagePlaceholder 
                      icon={project.icon} 
                      title={project.title}
                      color="bg-gradient-to-br from-gray-500/80 to-gray-700/80"
                    />
                  )}
                  
                  {project.featured && (
                    <div className="absolute top-2 right-2 md:top-3 md:right-3">
                      <div className="px-1.5 py-0.5 md:px-2 md:py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-medium rounded-full shadow-lg flex items-center gap-1">
                        <FaStar size={8} />
                        <span className="hidden sm:inline">Featured</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Year Badge */}
                  <div className="absolute top-2 left-2 md:top-3 md:left-3">
                    <div className="px-1.5 py-0.5 md:px-2 md:py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full shadow-sm">
                      {project.year}
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-4 md:p-5">
                  <div className="flex items-start justify-between mb-2 md:mb-3">
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-[#2D2D2D] mb-1 md:mb-2">{project.title}</h3>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-2 md:mb-3 line-clamp-2">{project.description}</p>
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
                  <div className="flex flex-wrap gap-1 md:gap-1.5 mb-3 md:mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-1.5 py-0.5 md:px-2 md:py-1 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-1.5 py-0.5 md:px-2 md:py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-500 text-xs rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{project.category}</span>
                    <a 
                      href={project.demoLink}
                      className="text-xs md:text-sm font-medium text-gray-700 hover:text-[#2D2D2D] transition-colors"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Development Process - Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16 md:mb-24"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/10 to-purple-100/10 blur-xl -z-10 rounded-full"></div>
          
          <div className="relative p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white to-white/80 border border-white/80 backdrop-blur-sm
                        shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-6 md:mb-10">
              {[
                { value: "20+", label: "Projects Completed", color: "from-blue-100 to-blue-50" },
                { value: "15+", label: "Happy Clients", color: "from-purple-100 to-purple-50" },
                { value: "100%", label: "On Time Delivery", color: "from-emerald-100 to-emerald-50" },
                { value: "98%", label: "Satisfaction Rate", color: "from-amber-100 to-amber-50" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-1 md:mb-2">{stat.value}</p>
                  <p className="text-xs md:text-sm text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-600 mb-4 md:mb-6 max-w-2xl mx-auto text-base md:text-lg">
                Following a systematic approach from concept to deployment ensures high-quality results 
                and successful project outcomes every time.
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {["Discovery", "Planning", "Design", "Development", "Testing", "Deployment"].map((item, index) => (
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
            className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-[#2D2D2D] text-white font-semibold rounded-full 
                      shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25)]
                      transition-all duration-300 text-base md:text-lg"
          >
            <span>Start a Project</span>
            <FaArrowRight size={14} />
          </motion.a>
          
          {/* Decorative Floating Element */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-8 md:mt-12 text-gray-400 text-sm"
          >
            ↓ See more on GitHub
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-10 md:-left-20 w-40 h-40 md:w-72 md:h-72 bg-blue-100/5 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-1/3 -right-10 md:-right-20 w-40 h-40 md:w-80 md:h-80 bg-purple-100/5 rounded-full blur-2xl -z-10"></div>
    </section>
  );
};

export default Projects;