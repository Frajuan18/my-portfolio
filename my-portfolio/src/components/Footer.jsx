import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            
            {/* Left - Logo & Description */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#2D2D2D] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">M</span>
                </div>
                <div>
                  <div className="text-xs font-medium text-[#2D2D2D] leading-tight">Designing for</div>
                  <div className="text-xs font-medium text-[#2D2D2D] leading-tight">Amazing People</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                Creating beautiful, functional designs that solve real problems and delight users.
              </p>
            </div>

            {/* Center - Quick Links */}
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-6">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="block text-gray-700 hover:text-[#2D2D2D] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right - Contact Info */}
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-6">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">📧</span>
                  <a 
                    href="mailto:morgan@designer.com" 
                    className="text-gray-700 hover:text-[#2D2D2D] transition-colors duration-300 text-sm"
                  >
                    morgan@designer.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">📍</span>
                  <span className="text-gray-700 text-sm">Remote / Worldwide</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">✅</span>
                  <span className="text-gray-700 text-sm">Currently Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                &copy; {currentYear} Morgan. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-gray-500 text-sm">Follow:</span>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="text-gray-500 hover:text-[#2D2D2D] transition-colors duration-300 text-sm"
                >
                  Dribbble
                </a>
                <a 
                  href="#" 
                  className="text-gray-500 hover:text-[#2D2D2D] transition-colors duration-300 text-sm"
                >
                  Behance
                </a>
                <a 
                  href="#" 
                  className="text-gray-500 hover:text-[#2D2D2D] transition-colors duration-300 text-sm"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Back to Top */}
            <a 
              href="#home" 
              className="flex items-center gap-2 text-gray-500 hover:text-[#2D2D2D] transition-colors duration-300 text-sm"
            >
              Back to top
              <span className="text-lg">↑</span>
            </a>
          </div>

          {/* Final Note */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-400 text-sm">
              Built with passion • Designed with purpose • Delivered with excellence
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;