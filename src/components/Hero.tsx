import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-black overflow-hidden"
    >
      {/* faint oversized watermark, echoing the logo mark */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -right-10 top-1/2 -translate-y-1/2 text-[36vw] font-bold leading-none text-neutral-900/60"
      >
        rd
      </span>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 md:px-10 pt-32 pb-20">
        <div
          className={`max-w-4xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="eyebrow mb-8">Photography &amp; Visual Studio</p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight">
            Raw frames.
            <br />
            <span className="text-neutral-500">Real stories.</span>
          </h1>

          <p className="mt-10 max-w-xl text-lg text-neutral-400 leading-relaxed">
            raw district is the studio of Aniketh — stripped-back photography and film
            that keeps things honest. No filters over the truth, just light, shadow and
            the moment.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors duration-300"
            >
              View the work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-neutral-700 text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
            >
              Book a shoot
            </a>
          </div>
        </div>
      </div>

      {/* thin baseline detail */}
      <div className="absolute bottom-10 left-0 right-0 z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-center gap-4 text-neutral-600">
          <span className="h-px w-16 bg-neutral-700" />
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
