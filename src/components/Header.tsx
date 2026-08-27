import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Work', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Studio', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-neutral-900' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm uppercase tracking-widest border border-neutral-700 text-white px-5 py-2 hover:bg-white hover:text-black transition-colors duration-300"
            >
              Start a project
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-80 pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col border-t border-neutral-900 pt-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-3 text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-3 text-sm uppercase tracking-widest border border-neutral-700 text-white px-5 py-3 text-center hover:bg-white hover:text-black transition-colors duration-300"
            >
              Start a project
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
