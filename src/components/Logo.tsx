import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

const Logo = ({ className = '', showTagline = true }: LogoProps) => {
  return (
    <a href="#home" className={`inline-flex flex-col leading-none ${className}`}>
      <span className="text-2xl md:text-[1.75rem] tracking-tight text-white">
        <span className="font-bold">raw</span>
        <span className="font-light">district</span>
      </span>
      {showTagline && (
        <span className="mt-1 text-[9px] md:text-[10px] uppercase tracking-[0.45em] text-neutral-500">
          by aniketh
        </span>
      )}
    </a>
  );
};

export default Logo;
