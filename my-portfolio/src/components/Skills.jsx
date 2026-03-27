import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { 
  FaFigma, FaReact, FaPalette, FaCode, 
  FaDatabase, FaArrowRight, FaNodeJs,
  FaRocket, FaStar, FaGem,
  FaMagic, FaCrown, FaInfinity,
  FaPencilRuler, FaLaptopCode, FaRegLightbulb,
  FaCloudUploadAlt
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiMongodb } from 'react-icons/si';

// --- ANIMATION VARIANTS (High-end reveal & floats) ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const float = {
  initial: { y: 0 },
  animate: (i = 0) => ({
    y: [0, -12, 0],
    transition: {
      duration: 5 + i,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.5
    }
  })
};

const Skills = () => {
  const skillsData = [
    {
      category: "Full Stack Development",
      icon: <FaCode className="text-white/80" size={22} />,
      gradient: "from-blue-500/20 to-cyan-500/20",
      skills: [
        { name: "React.js", level: 90, color: "#60a5fa" },
        { name: "Next.js", level: 85, color: "#ffffff" },
        { name: "Node.js", level: 82, color: "#6ee7b7" },
        { name: "TypeScript", level: 80, color: "#60a5fa" },
        { name: "API Development", level: 85, color: "#c084fc" }
      ]
    },
    {
      category: "UI/UX Design",
      icon: <FaPalette className="text-white/80" size={22} />,
      gradient: "from-pink-500/20 to-purple-500/20",
      skills: [
        { name: "Figma", level: 92, color: "#f472b6" },
        { name: "User Research", level: 85, color: "#c084fc" },
        { name: "Wireframing", level: 88, color: "#a78bfa" },
        { name: "Prototyping", level: 90, color: "#f87171" },
        { name: "Design Systems", level: 85, color: "#c084fc" }
      ]
    },
    {
      category: "Database & Backend",
      icon: <FaDatabase className="text-white/80" size={22} />,
      gradient: "from-emerald-500/20 to-teal-500/20",
      skills: [
        { name: "MongoDB", level: 85, color: "#6ee7b7" },
        { name: "Firebase", level: 88, color: "#fbbf24" },
        { name: "Supabase", level: 82, color: "#3ecf8e" },
        { name: "REST APIs", level: 85, color: "#c084fc" },
        { name: "Database Design", level: 83, color: "#60a5fa" }
      ]
    }
  ];

  const designTools = [
    { number: "01", name: "Figma", description: "Design projects and assets for a standout UX/UI portfolio.", icon: <FaFigma className="text-pink-400" size={26} />, gradient: "from-pink-500/40 to-rose-500/40" },
    { number: "02", name: "React", description: "Building dynamic and responsive user interfaces with modern React.", icon: <FaReact className="text-cyan-400" size={26} />, gradient: "from-cyan-500/40 to-blue-500/40" },
    { number: "03", name: "Next.js", description: "Server-side rendering and static site generation for performance.", icon: <SiNextdotjs className="text-white" size={24} />, gradient: "from-gray-400/30 to-gray-600/30" },
    { number: "04", name: "Node.js", description: "Scalable backend services and API development.", icon: <FaNodeJs className="text-emerald-400" size={26} />, gradient: "from-emerald-500/40 to-green-500/40" },
    { number: "05", name: "TypeScript", description: "Type-safe code for better maintainability and DX.", icon: <FaCode className="text-blue-400" size={26} />, gradient: "from-blue-500/40 to-indigo-500/40" },
    { number: "06", name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development.", icon: <SiTailwindcss className="text-teal-400" size={26} />, gradient: "from-teal-500/40 to-cyan-500/40" },
    { number: "07", name: "MongoDB", description: "NoSQL database for flexible and scalable data storage.", icon: <SiMongodb className="text-green-400" size={26} />, gradient: "from-green-500/40 to-lime-500/40" },
    { number: "08", name: "Firebase", description: "Real-time database and authentication solutions.", icon: <SiFirebase className="text-amber-400" size={26} />, gradient: "from-amber-500/40 to-orange-500/40" }
  ];

  const calculateAverage = (skills) => {
    const total = skills.reduce((sum, skill) => sum + skill.level, 0);
    return Math.round(total / skills.length);
  };

  const TiltCard = ({ children, className, ...props }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);
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

  const GlowingCircle = ({ size, top, left, delay, duration, color }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
      transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
      className="absolute rounded-full blur-[100px]"
      style={{ width: size, height: size, top, left, background: color }}
    />
  );

  return (
    <section id='#skills' className="relative w-full min-h-screen bg-[#050505] py-20 md:py-28 overflow-hidden text-white">
      
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <GlowingCircle size="600px" top="-10%" left="-10%" delay={0} duration={8} color="rgba(255,255,255,0.08)" />
        <GlowingCircle size="500px" top="40%" left="60%" delay={2} duration={10} color="rgba(100,150,255,0.1)" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 z-10">
        
        {/* Header - Staggered In-View Animation */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <span className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase">The Arsenal</span>
            <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <FaMagic className="text-white/40" size={12} />
            </motion.span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tighter mb-6" style={{ fontFamily: "'Revalia', cursive" }}>
            Skills & <span className="text-white/40">Tech Stack</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-gray-400 max-w-xl mx-auto">
            ✦ Turning complex logic into elegant, high-performance digital experiences ✦
          </motion.p>
        </motion.div>

        {/* Glassmorphic Stats - Floating Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[{ value: "2+", label: "Years Exp" }, { value: "20+", label: "Projects" }, { value: "100%", label: "Precision" }].map((stat, i) => (
            <motion.div
              key={i}
              variants={float}
              initial="initial"
              animate="animate"
              custom={i}
            >
              <TiltCard className="group relative h-full">
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 transition-all hover:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)]">
                   <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   <h2 className="text-4xl font-bold mb-1" style={{ fontFamily: "'Revalia', cursive" }}>{stat.value}</h2>
                   <p className="text-sm uppercase tracking-widest text-gray-500">{stat.label}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Main Skills Grid - Reveal from bottom */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 mb-24"
        >
          {skillsData.map((category, idx) => {
            const avg = calculateAverage(category.skills);
            return (
              <motion.div key={idx} variants={fadeInUp} custom={idx}>
                <TiltCard>
                  <div className="group relative h-full rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    
                    {/* Glowing Sheen Swish on Hover */}
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent rotate-45 pointer-events-none" />
                    
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                          className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg"
                        >
                          {category.icon}
                        </motion.div>
                        <h3 className="text-lg font-bold" style={{ fontFamily: "'Revalia', cursive" }}>{category.category}</h3>
                      </div>
                      <span className="text-xs font-black text-white/40">{avg}%</span>
                    </div>

                    <div className="space-y-6">
                      {category.skills.map((skill, sIdx) => (
                        <div key={sIdx}>
                          <div className="flex justify-between text-xs mb-2 text-gray-400 font-medium">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <div className="h-[3px] w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }} 
                              whileInView={{ width: `${skill.level}%` }} 
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: sIdx * 0.1, ease: "circOut" }}
                              className="h-full bg-white/40"
                              style={{ boxShadow: `0 0 10px ${skill.color}50` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tools Grid - Stagger Pop and Tilt */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24"
        >
          {designTools.map((tool, i) => (
            <motion.div key={i} variants={fadeInUp} custom={i}>
              <TiltCard>
                <div className="group relative h-full rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <div className="text-2xl font-black text-white/10 mb-4 group-hover:text-white/20 transition-colors" style={{ fontFamily: "'Revalia', cursive" }}>{tool.number}</div>
                  <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: "spring" }} className="mb-4 inline-block">
                    {tool.icon}
                  </motion.div>
                  <h4 className="text-sm font-bold mb-2">{tool.name}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{tool.description}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner - Glow and Pulse */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center pt-12 border-t border-white/5"
        >
          
        </motion.div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Revalia&display=swap');
      `}</style>
    </section>
  );
};

export default Skills;