import React from 'react';
import { Camera, Video, Megaphone, Share2, ArrowUp, Heart, Aperture, Film, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'Strategic Marketing', href: '#' },
    { name: 'Brand Photography', href: '#' },
    { name: 'Commercial Videography', href: '#' },
    { name: 'Social Media Management', href: '#' },
    { name: 'Content Creation', href: '#' },
    { name: 'Brand Development', href: '#' },
  ];

  const company = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Work', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
  ];

  const social = [
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'YouTube', href: '#', icon: Youtube },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-[#0F3834]/5 to-[#395B51]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#A8B69D]/5 to-[#F0F1CF]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Film Strip Top Border */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-[#0F3834] via-[#395B51] to-[#A8B69D] opacity-30">
        <div className="flex h-full">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="flex-1 border-r-2 border-black/50"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-8 group cursor-pointer">
                <div className="relative">
                  <img 
                    src="/Logo.png" 
                    alt="Aarambh Media Logo" 
                    className="w-16 h-16 object-contain transform group-hover:scale-110 transition-all duration-500 filter drop-shadow-2xl"
                  />
                </div>
                <div>
                  <span className="text-4xl font-black tracking-tight bg-gradient-to-r from-[#A8B69D] via-[#F0F1CF] to-[#A8B69D] bg-clip-text text-transparent">
                    Aarambh
                  </span>
                  <div className="text-sm text-[#A8B69D] font-bold tracking-widest uppercase">Media</div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-8 leading-relaxed font-light text-lg">
                Crafting visual stories that move hearts, change minds, and transform brands. 
                Where creativity meets strategy to create magic.
              </p>

              <div className="flex items-center space-x-6">
                <Camera className="w-6 h-6 text-[#A8B69D] hover:scale-110 transition-transform duration-300 cursor-pointer" />
                <Film className="w-6 h-6 text-[#395B51] hover:scale-110 transition-transform duration-300 cursor-pointer" />
                <Megaphone className="w-6 h-6 text-[#F0F1CF] hover:scale-110 transition-transform duration-300 cursor-pointer" />
                <Share2 className="w-6 h-6 text-[#0F3834] hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white">Services</h3>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-[#A8B69D] transition-all duration-300 flex items-center group text-lg font-light"
                    >
                      <span className="w-3 h-3 bg-gradient-to-r from-[#A8B69D] to-[#395B51] rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white">Company</h3>
              <ul className="space-y-4">
                {company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-[#A8B69D] transition-all duration-300 flex items-center group text-lg font-light"
                    >
                      <span className="w-3 h-3 bg-gradient-to-r from-[#A8B69D] to-[#395B51] rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white">Connect</h3>
              
              {/* Social Links */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {social.map((platform) => {
                  const Icon = platform.icon;
                  return (
                    <a
                      key={platform.name}
                      href={platform.href}
                      className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl hover:from-[#0F3834]/20 hover:to-[#395B51]/20 transition-all duration-300 group border border-gray-700/50 hover:border-[#395B51]/50"
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#A8B69D] transition-colors duration-300" />
                      <span className="text-gray-400 group-hover:text-white transition-colors duration-300 font-medium">{platform.name}</span>
                    </a>
                  );
                })}
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
                <h4 className="font-bold mb-3 text-white text-lg">Stay Inspired</h4>
                <p className="text-gray-400 text-sm mb-4 font-light">Get creative insights and behind-the-scenes content</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 bg-gray-900/50 border border-gray-600/50 rounded-l-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#395B51] focus:border-transparent transition-all duration-300"
                  />
                  <button className="bg-gradient-to-r from-[#0F3834] to-[#395B51] px-6 py-3 rounded-r-xl hover:from-[#395B51] hover:to-[#0F3834] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#395B51]/30">
                    <ArrowUp className="w-5 h-5 rotate-45 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-8 text-gray-400 text-sm">
              <span>&copy; 2024 Aarambh Media. All rights reserved.</span>
              <a href="#" className="hover:text-[#A8B69D] transition-colors duration-300 font-medium">Privacy Policy</a>
              <a href="#" className="hover:text-[#A8B69D] transition-colors duration-300 font-medium">Terms of Service</a>
            </div>

            <div className="flex items-center space-x-6">
              <a 
                href="https://devai.online" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 text-sm flex items-center font-light hover:text-[#A8B69D] transition-colors duration-300"
              >
                Developed with <Heart className="w-4 h-4 text-red-400 mx-2 animate-pulse" /> and maintained by DevAI
              </a>
              
              <button
                onClick={scrollToTop}
                className="w-12 h-12 bg-gradient-to-r from-[#0F3834] to-[#395B51] rounded-full flex items-center justify-center hover:shadow-2xl hover:shadow-[#395B51]/40 hover:scale-110 transition-all duration-500 group"
              >
                <ArrowUp className="w-6 h-6 text-white group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;