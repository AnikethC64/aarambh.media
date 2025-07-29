import React, { useState, useEffect } from 'react';
import { Menu, X, Camera, Video, Megaphone, Share2, Aperture } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl shadow-2xl border-b border-orange-500/20' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <img 
                src="/Logo.png" 
                alt="Aarambh Media Logo" 
                className="w-16 h-16 object-contain transform group-hover:scale-110 transition-all duration-500 filter drop-shadow-lg"
              />
            </div>
            <div>
              <span className={`text-3xl font-black tracking-tight bg-gradient-to-r from-[#A8B69D] via-[#F0F1CF] to-[#A8B69D] bg-clip-text text-transparent ${
                isScrolled ? '' : 'text-white'
              }`}>
                Aarambh
              </span>
              <div className="text-xs text-[#A8B69D] font-medium tracking-widest uppercase">Media</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative font-semibold transition-all duration-500 hover:scale-110 group ${
                  isScrolled ? 'text-white hover:text-[#A8B69D]' : 'text-white/90 hover:text-[#F0F1CF]'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A8B69D] to-[#F0F1CF] transition-all duration-500 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#A8B69D]/10 to-[#F0F1CF]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="relative overflow-hidden bg-gradient-to-r from-[#0F3834] via-[#395B51] to-[#A8B69D] text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:shadow-2xl hover:shadow-[#395B51]/40 transition-all duration-500 hover:scale-105 group">
              <span className="relative z-10">Start Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#A8B69D] via-[#395B51] to-[#0F3834] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0F3834] to-[#A8B69D] rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-3 rounded-xl transition-all duration-300 ${
              isScrolled ? 'text-white hover:bg-[#395B51]/20' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-700 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-6 border border-[#395B51]/20">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 font-semibold text-white hover:text-[#A8B69D] transition-all duration-300 border-b border-gray-800 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-4 bg-gradient-to-r from-[#0F3834] to-[#A8B69D] text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:shadow-lg transition-all duration-300">
              Start Project
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;