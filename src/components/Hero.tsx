import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Floating film-frame layers. Each reacts to the cursor at its own depth
 * and carries a slow idle drift so the scene breathes even without a mouse.
 */
const frames = [
  { className: 'left-[6%] top-[16%] w-36 h-48 md:w-44 md:h-56', depth: 34, rot: 5, drift: 10, sx: 0.30, sy: 0.24, phase: 0.0, border: 'border-neutral-700' },
  { className: 'right-[10%] top-[12%] w-44 h-32 md:w-64 md:h-44', depth: 22, rot: -4, drift: 8, sx: 0.22, sy: 0.31, phase: 1.4, border: 'border-neutral-800' },
  { className: 'right-[18%] bottom-[16%] w-40 h-52 md:w-52 md:h-64', depth: 46, rot: 6, drift: 12, sx: 0.27, sy: 0.20, phase: 2.7, border: 'border-neutral-700' },
  { className: 'left-[14%] bottom-[12%] w-52 h-36 md:w-72 md:h-44', depth: 16, rot: -3, drift: 7, sx: 0.19, sy: 0.29, phase: 3.9, border: 'border-neutral-800' },
  { className: 'left-[40%] top-[46%] w-28 h-28 md:w-36 md:h-36', depth: 58, rot: -8, drift: 14, sx: 0.33, sy: 0.26, phase: 5.1, border: 'border-neutral-600' },
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<HTMLSpanElement>(null);
  const reticleRef = useRef<HTMLDivElement>(null);
  const frameRefs = useRef<Array<HTMLDivElement | null>>([]);

  // shared pointer state, mutated outside React to keep the loop cheap
  const target = useRef({ nx: 0, ny: 0, px: 0, py: 0 });
  const current = useRef({ nx: 0, ny: 0, px: 0, py: 0 });
  const hovering = useRef(false);
  const reticleOpacity = useRef(0);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      target.current.px = x;
      target.current.py = y;
      target.current.nx = (x - rect.width / 2) / (rect.width / 2);
      target.current.ny = (y - rect.height / 2) / (rect.height / 2);
      hovering.current = true;
    };
    const handleLeave = () => {
      hovering.current = false;
      target.current.nx = 0;
      target.current.ny = 0;
    };

    section.addEventListener('mousemove', handleMove);
    section.addEventListener('mouseleave', handleLeave);

    let raf = 0;
    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const tick = () => {
      const now = performance.now() / 1000;
      const c = current.current;
      const tg = target.current;

      // ease pointer toward target
      c.nx = lerp(c.nx, tg.nx, 0.06);
      c.ny = lerp(c.ny, tg.ny, 0.06);
      c.px = lerp(c.px, tg.px, 0.14);
      c.py = lerp(c.py, tg.py, 0.14);

      // frames: cursor parallax + slow idle drift
      frames.forEach((f, i) => {
        const el = frameRefs.current[i];
        if (!el) return;
        const driftX = Math.sin(now * f.sx + f.phase) * f.drift;
        const driftY = Math.cos(now * f.sy + f.phase) * f.drift;
        const px = c.nx * f.depth + driftX;
        const py = c.ny * f.depth + driftY;
        const rot = c.nx * f.rot + Math.sin(now * f.sx + f.phase) * 1.5;
        el.style.transform = `translate3d(${px}px, ${py}px, 0) rotate(${rot}deg)`;
      });

      // wordmark drifts opposite the cursor for depth
      if (wordmarkRef.current) {
        const px = c.nx * -26;
        const py = c.ny * -18;
        wordmarkRef.current.style.transform = `translate3d(${px}px, ${py}px, 0)`;
      }

      // focus reticle chases the actual pointer
      if (reticleRef.current) {
        reticleOpacity.current = lerp(reticleOpacity.current, hovering.current ? 1 : 0, 0.1);
        reticleRef.current.style.transform = `translate3d(${c.px}px, ${c.py}px, 0) translate(-50%, -50%)`;
        reticleRef.current.style.opacity = String(reticleOpacity.current);
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      section.removeEventListener('mousemove', handleMove);
      section.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-black overflow-hidden"
    >
      {/* Motion scene */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* faint oversized wordmark, echoing the logo mark */}
        <span
          ref={wordmarkRef}
          className="absolute right-[-4%] top-1/2 -translate-y-1/2 text-[36vw] font-bold leading-none text-neutral-900/70 will-change-transform"
        >
          rd
        </span>

        {/* floating film frames */}
        {frames.map((f, i) => (
          <div
            key={i}
            ref={(el) => (frameRefs.current[i] = el)}
            className={`absolute ${f.className} border ${f.border} will-change-transform`}
          >
            {/* corner ticks — a viewfinder detail */}
            <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-neutral-500" />
            <span className="absolute -top-px -right-px w-3 h-3 border-t border-r border-neutral-500" />
            <span className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-neutral-500" />
            <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-neutral-500" />
          </div>
        ))}

        {/* focus reticle that follows the cursor */}
        <div
          ref={reticleRef}
          className="absolute left-0 top-0 w-16 h-16 opacity-0 will-change-transform"
        >
          <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/70" />
          <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/70" />
          <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/70" />
          <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/70" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white/70 rounded-full" />
        </div>
      </div>

      {/* Content */}
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
      <div className="absolute bottom-10 left-0 right-0 z-10 mx-auto max-w-7xl px-6 md:px-10 pointer-events-none">
        <div className="flex items-center gap-4 text-neutral-600">
          <span className="h-px w-16 bg-neutral-700" />
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
