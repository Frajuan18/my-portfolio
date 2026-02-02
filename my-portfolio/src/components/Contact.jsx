import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaClock, FaCalendar } from 'react-icons/fa';

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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
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
      icon: <FaEnvelope className="text-blue-500" size={20} />,
      color: "from-blue-100 to-blue-50"
    },
    {
      type: 'Location',
      value: 'Remote / Worldwide',
      icon: <FaMapMarkerAlt className="text-purple-500" size={20} />,
      color: "from-purple-100 to-purple-50"
    },
    {
      type: 'Availability',
      value: 'Currently Available',
      icon: <FaCheckCircle className="text-emerald-500" size={20} />,
      color: "from-emerald-100 to-emerald-50"
    }
  ];

  return (
    <section id="contact" className="relative py-32 bg-[#FDFDFD] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Header - Matching Hero Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-gray-700">Get in Touch</h3>
            <h2 className="text-6xl lg:text-7xl font-black text-[#2D2D2D] uppercase tracking-tighter leading-none">
              Let's Work 
              <span className="block mt-2">Together</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg font-normal mt-6">
              Have a project in mind? Let's discuss how we can create something amazing together.
            </p>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Info - Floating Cards */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">Contact Details</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.type}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="relative group cursor-pointer"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${info.color} blur-xl rounded-2xl -z-10 group-hover:blur-2xl transition-all duration-300`}></div>
                      
                      <div className="relative p-5 rounded-2xl bg-white border border-white/80 backdrop-blur-sm 
                                    shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)] 
                                    group-hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                                    transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm">
                            {info.icon}
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">{info.type}</div>
                            <div className="text-lg font-medium text-[#2D2D2D]">
                              {info.link ? (
                                <a href={info.link} className="hover:text-gray-700 transition-colors">
                                  {info.value}
                                </a>
                              ) : (
                                info.value
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats - Floating Cards */}
              <div className="pt-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "24h", label: "Response Time", icon: <FaClock className="text-blue-500" />, color: "from-blue-100 to-blue-50" },
                    { value: "100%", label: "Response Rate", icon: <FaCheckCircle className="text-emerald-500" />, color: "from-emerald-100 to-emerald-50" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="relative group cursor-pointer"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} blur-xl rounded-xl -z-10 group-hover:blur-2xl transition-all duration-300`}></div>
                      
                      <div className="relative p-4 rounded-xl bg-white border border-white/80 backdrop-blur-sm text-center">
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

              {/* Services Quick Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative group pt-6 border-t border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 to-gray-50/10 blur-xl rounded-2xl -z-10 group-hover:blur-2xl transition-all duration-300"></div>
                
                <div className="relative p-6 rounded-2xl bg-white border border-white/80 backdrop-blur-sm 
                              shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]
                              hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                              transition-all duration-300">
                  <h4 className="text-lg font-bold text-[#2D2D2D] mb-4">I Specialize In</h4>
                  <div className="flex flex-wrap gap-2">
                    {["UI/UX Design", "Webflow", "Product Design", "Visual Design", "3D Design", "React Development"].map((skill, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.03 + 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs rounded-full font-medium shadow-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form - Floating Card */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20 blur-2xl rounded-3xl -z-10 group-hover:blur-3xl transition-all duration-300"></div>
                
                <div className="relative rounded-3xl bg-gradient-to-br from-white to-white/80 border border-white/80 backdrop-blur-sm
                              shadow-[0_25px_60px_-20px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]
                              hover:shadow-[0_35px_70px_-20px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                              transition-all duration-300 p-8">
                  
                  {submitStatus === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center mx-auto mb-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 to-emerald-50/20 blur-xl -z-10 rounded-full"></div>
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                          <FaCheckCircle className="text-white" size={24} />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-[#2D2D2D] mb-3">Message Sent!</h3>
                      <p className="text-gray-600 mb-6 max-w-md mx-auto">
                        Thanks for reaching out. I'll get back to you within 24 hours.
                      </p>
                      <motion.button
                        onClick={() => setSubmitStatus(null)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full font-medium 
                                  shadow-[0_8px_25px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.12)]
                                  transition-all duration-300"
                      >
                        Send Another Message
                      </motion.button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">Send a Message</h3>
                        <p className="text-gray-600">Fill out the form below and I'll get back to you soon.</p>
                      </div>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Name Field */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                          >
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-5 py-4 bg-white/90 border border-white/80 rounded-2xl 
                                        shadow-[0_8px_25px_-10px_rgba(0,0,0,0.05),0_0_0_1px_rgba(255,255,255,0.9)]
                                        focus:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.1),0_0_0_2px_rgba(59,130,246,0.5)]
                                        outline-none transition-all duration-300 placeholder-gray-400"
                              placeholder="John Smith"
                            />
                          </motion.div>

                          {/* Email Field */}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                          >
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-5 py-4 bg-white/90 border border-white/80 rounded-2xl 
                                        shadow-[0_8px_25px_-10px_rgba(0,0,0,0.05),0_0_0_1px_rgba(255,255,255,0.9)]
                                        focus:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.1),0_0_0_2px_rgba(59,130,246,0.5)]
                                        outline-none transition-all duration-300 placeholder-gray-400"
                              placeholder="john@example.com"
                            />
                          </motion.div>
                        </div>

                        {/* Message Field */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                        >
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Your Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full px-5 py-4 bg-white/90 border border-white/80 rounded-2xl 
                                      shadow-[0_8px_25px_-10px_rgba(0,0,0,0.05),0_0_0_1px_rgba(255,255,255,0.9)]
                                      focus:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.1),0_0_0_2px_rgba(59,130,246,0.5)]
                                      outline-none transition-all duration-300 resize-none placeholder-gray-400"
                            placeholder="Tell me about your project..."
                          />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                        >
                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full py-5 rounded-2xl font-medium transition-all duration-300
                                      shadow-[0_15px_35px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)]
                                      ${isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-[#2D2D2D] to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white'
                                      }`}
                          >
                            {isSubmitting ? (
                              <div className="flex items-center justify-center gap-3">
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Sending...</span>
                              </div>
                            ) : (
                              <div className="flex items-center justify-center gap-3">
                                <span>Send Message</span>
                                <FaArrowRight size={16} />
                              </div>
                            )}
                          </motion.button>
                        </motion.div>

                        {/* Privacy Note */}
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                          className="text-center text-sm text-gray-500 pt-4"
                        >
                          Your information is secure. I'll only use it to respond to your inquiry.
                        </motion.p>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Quick Contact - Floating Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 pt-20 border-t border-gray-100"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/10 to-purple-100/10 blur-3xl -z-10 rounded-full"></div>
              
              <div className="relative max-w-4xl mx-auto text-center p-10 rounded-3xl bg-gradient-to-br from-white to-white/80 border border-white/80 backdrop-blur-sm
                            shadow-[0_25px_60px_-20px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]">
                <h3 className="text-2xl font-bold text-[#2D2D2D] mb-6">Ready to Start?</h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                  For immediate inquiries or to discuss project details, feel free to reach out directly.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <motion.a
                    href="mailto:fraolabmas@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 blur-xl rounded-full -z-10 group-hover:blur-2xl transition-all duration-300"></div>
                    
                    <div className="relative inline-flex items-center gap-3 px-8 py-4 bg-white border border-white/80 text-gray-700 font-medium rounded-full 
                                  shadow-[0_15px_35px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]
                                  hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                                  transition-all duration-300">
                      <span>Email Directly</span>
                      <FaArrowRight size={16} />
                    </div>
                  </motion.a>
                  
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-purple-50 blur-xl rounded-full -z-10 group-hover:blur-2xl transition-all duration-300"></div>
                    
                    <div className="relative inline-flex items-center gap-3 px-8 py-4 bg-white border border-white/80 text-gray-700 font-medium rounded-full 
                                  shadow-[0_15px_35px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]
                                  hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)]
                                  transition-all duration-300">
                      <span>Schedule a Call</span>
                      <FaCalendar className="text-purple-500" size={16} />
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Work Process - Floating Steps */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/10 to-amber-100/10 blur-3xl -z-10 rounded-full"></div>
              
              <div className="relative p-10 rounded-3xl bg-gradient-to-br from-white to-white/80 border border-white/80 backdrop-blur-sm
                            shadow-[0_25px_60px_-20px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.9)]">
                <h3 className="text-2xl font-bold text-[#2D2D2D] mb-10 text-center">My Work Process</h3>
                
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    { number: "01", title: "Discovery", desc: "Understanding your needs", color: "from-blue-100 to-blue-50" },
                    { number: "02", title: "Planning", desc: "Creating the strategy", color: "from-purple-100 to-purple-50" },
                    { number: "03", title: "Design", desc: "Bringing ideas to life", color: "from-emerald-100 to-emerald-50" },
                    { number: "04", title: "Delivery", desc: "Final handoff & support", color: "from-amber-100 to-amber-50" }
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
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-100/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Contact;