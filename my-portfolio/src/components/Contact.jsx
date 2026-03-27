import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { 
  FaArrowRight, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaClock, 
  FaCalendar, FaMagic, FaGem, FaRocket, FaPhoneAlt,
  FaWhatsapp, FaTelegram, FaGithub, FaLinkedin
} from 'react-icons/fa';

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const subject = encodeURIComponent(`New Message from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`);
    const mailtoLink = `mailto:fraolabmas@gmail.com?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink, '_blank');
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      type: 'Email',
      value: 'fraolabmas@gmail.com',
      link: 'mailto:fraolabmas@gmail.com',
      icon: <FaEnvelope className="text-gray-400" size={20} />,
      number: "01"
    },
    {
      type: 'Location',
      value: 'Addis Ababa, Ethiopia',
      icon: <FaMapMarkerAlt className="text-gray-400" size={20} />,
      number: "02"
    },
    {
      type: 'Status',
      value: 'Available for Projects',
      icon: <FaCheckCircle className="text-gray-400" size={20} />,
      number: "03"
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/fraol", label: "GitHub", color: "from-gray-600/20 to-gray-800/20" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/fraol", label: "LinkedIn", color: "from-gray-600/20 to-gray-800/20" },
    { icon: <FaTelegram />, link: "https://t.me/Fra_juan", label: "Telegram", color: "from-gray-600/20 to-gray-800/20" },
    { icon: <FaWhatsapp />, link: "https://wa.me/251900000000", label: "WhatsApp", color: "from-gray-600/20 to-gray-800/20" }
  ];

  const specialties = [
    "UI/UX Design", "Full Stack Dev", "Product Design", 
    "Web Development", "Database Design", "React Development"
  ];

  return (
    <section id='#contact' className="relative w-full min-h-screen bg-[#050505] py-20 md:py-28 overflow-hidden">
      
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
            <span className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>Get in Touch</span>
            <FaMagic className="text-white/40" size={12} />
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1]" style={{ fontFamily: "'Revalia', cursive" }}>
            <span className="text-white">Let's Work</span>
            <br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">Together</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-gray-400 text-base max-w-xl mx-auto mt-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Have a project in mind? Let's discuss how we can create something amazing together.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            
            {/* Left Column - Contact Info */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              {/* Contact Details */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6" style={{ fontFamily: "'Revalia', cursive" }}>Contact Details</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.type}
                      variants={fadeInUp}
                      custom={index}
                      whileHover={{ y: -4 }}
                    >
                      <TiltCard>
                        <div className="group relative p-4 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 overflow-hidden">
                          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
                          
                          <div className="text-xs font-bold text-gray-500 mb-2" style={{ fontFamily: "'Revalia', cursive" }}>{info.number}</div>
                          
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                              {info.icon}
                            </div>
                            <div>
                              <div className="text-xs text-gray-500 mb-0.5" style={{ fontFamily: "'Poppins', sans-serif" }}>{info.type}</div>
                              <div className="text-sm font-medium text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                {info.link ? (
                                  <a href={info.link} className="hover:text-gray-300 transition-colors">
                                    {info.value}
                                  </a>
                                ) : (
                                  info.value
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </TiltCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Stats Cards */}
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 pt-2">
                {[
                  { value: "24h", label: "Response Time", icon: <FaClock className="text-gray-400" size={18} />, number: "04" },
                  { value: "100%", label: "Response Rate", icon: <FaCheckCircle className="text-gray-400" size={18} />, number: "05" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    custom={index + 3}
                    whileHover={{ y: -4 }}
                  >
                    <TiltCard>
                      <div className="group relative p-3 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 text-center overflow-hidden">
                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
                        
                        <div className="text-xs font-bold text-gray-500 mb-1" style={{ fontFamily: "'Revalia', cursive" }}>{stat.number}</div>
                        
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                            {stat.icon}
                          </div>
                          <p className="text-lg font-bold text-white" style={{ fontFamily: "'Revalia', cursive" }}>{stat.value}</p>
                        </div>
                        <p className="text-xs text-gray-500" style={{ fontFamily: "'Poppins', sans-serif" }}>{stat.label}</p>
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div variants={fadeInUp} className="pt-2">
                <h4 className="text-sm font-bold text-gray-400 mb-3" style={{ fontFamily: "'Revalia', cursive" }}>Connect with Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="group relative"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.color} blur-md rounded-full -z-10 group-hover:blur-lg transition-all duration-300`} />
                      <div className="relative w-10 h-10 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                        {social.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

             
      
            </motion.div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <TiltCard>
                  <div className="relative rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 overflow-hidden">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent pointer-events-none" />
                    
                    <div className="p-6 md:p-8">
                      {submitStatus === 'success' ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center py-8"
                        >
                          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center">
                            <FaCheckCircle className="text-emerald-400" size={32} />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Revalia', cursive" }}>Message Sent!</h3>
                          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            Your email client has opened. Please send the message to fraolabmas@gmail.com.
                          </p>
                          <motion.button
                            onClick={() => setSubmitStatus(null)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition-all"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                          >
                            Send Another Message
                          </motion.button>
                        </motion.div>
                      ) : (
                        <>
                          <div className="mb-6">
                            <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Revalia', cursive" }}>Send a Message</h3>
                            <p className="text-gray-400 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>Fill out the form below and I'll get back to you soon.</p>
                          </div>
                          
                          <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                              <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Your Name</label>
                                <input
                                  type="text"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  required
                                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all font-['Poppins']"
                                  placeholder="John Smith"
                                  style={{ fontFamily: "'Poppins', sans-serif" }}
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Email Address</label>
                                <input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all font-['Poppins']"
                                  placeholder="john@example.com"
                                  style={{ fontFamily: "'Poppins', sans-serif" }}
                                />
                              </div>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-400 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Your Message</label>
                              <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all resize-none font-['Poppins']"
                                placeholder="Tell me about your project..."
                                style={{ fontFamily: "'Poppins', sans-serif" }}
                              />
                            </div>
                            
                            <motion.button
                              type="submit"
                              disabled={isSubmitting}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className={`w-full py-4 rounded-xl font-medium transition-all duration-300 ${
                                isSubmitting
                                  ? 'bg-white/10 cursor-not-allowed'
                                  : 'bg-white text-black hover:bg-gray-200'
                              }`}
                              style={{ fontFamily: "'Revalia', cursive" }}
                            >
                              {isSubmitting ? (
                                <div className="flex items-center justify-center gap-2">
                                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                  <span>Opening Email...</span>
                                </div>
                              ) : (
                                <div className="flex items-center justify-center gap-2">
                                  <span>Send Message via Email</span>
                                  <FaArrowRight size={14} />
                                </div>
                              )}
                            </motion.button>
                            
                            <p className="text-center text-xs text-gray-500 pt-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                              Your information is secure. I'll only use it to respond to your inquiry.
                            </p>
                          </form>
                        </>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            </div>
          </div>

          {/* Quick Actions Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20 pt-8 border-t border-white/10"
          >
            <TiltCard>
              <div className="relative p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 text-center">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent pointer-events-none" />
                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                  <FaGem className="text-gray-400" size={12} />
                  <span className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>Ready to Start?</span>
                  <FaRocket className="text-gray-400" size={12} />
                </div>
                
                <p className="text-gray-400 text-base mb-8 max-w-2xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  For immediate inquiries or to discuss project details, feel free to reach out directly.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <motion.a
                    href="mailto:fraolabmas@gmail.com"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-all"
                    style={{ fontFamily: "'Revalia', cursive" }}
                  >
                    <FaEnvelope size={14} />
                    <span>Email Directly</span>
                    <FaArrowRight size={12} />
                  </motion.a>
                  
                  <motion.button
                    onClick={() => window.open('https://cal.com/fraol', '_blank')}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all"
                    style={{ fontFamily: "'Revalia', cursive" }}
                  >
                    <FaCalendar size={14} />
                    <span>Schedule a Call</span>
                  </motion.button>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Footer Note */}
          
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Revalia&family=Poppins:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
};

export default Contact;