import React from 'react';
import { ArrowUp } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const nav = [
    { name: 'Work', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Studio', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const social = [
    { name: 'Instagram', href: '#' },
    { name: 'Behance', href: '#' },
    { name: 'YouTube', href: '#' },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-black border-t border-neutral-900">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Top */}
        <div className="py-16 grid gap-12 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-6 text-neutral-500 leading-relaxed max-w-xs">
              A photography and visual studio. Stripped back, honest, black &amp; white.
            </p>
          </div>

          <div>
            <h3 className="eyebrow mb-6">Menu</h3>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-6">Elsewhere</h3>
            <ul className="space-y-3">
              {social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-900 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-neutral-600">
            © {new Date().getFullYear()} raw district by aniketh. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors duration-300"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
