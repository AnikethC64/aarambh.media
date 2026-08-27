import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0, awards: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { key: 'projects', label: 'Projects Shot', value: 240, suffix: '+' },
    { key: 'clients', label: 'Clients', value: 90, suffix: '+' },
    { key: 'years', label: 'Years Behind the Lens', value: 7, suffix: '' },
    { key: 'awards', label: 'Cities Shot In', value: 12, suffix: '' },
  ] as const;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            stats.forEach((stat) => {
              let start = 0;
              const increment = stat.value / 60;
              const timer = setInterval(() => {
                start += increment;
                if (start >= stat.value) {
                  start = stat.value;
                  clearInterval(timer);
                }
                setCounters((prev) => ({ ...prev, [stat.key]: Math.floor(start) }));
              }, 30);
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-black py-28 md:py-36 border-t border-neutral-900" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Statement */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="eyebrow mb-6">The studio</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-10">
              Made by
              <br />
              <span className="text-neutral-500">Aniketh.</span>
            </h2>

            <div className="space-y-6 text-neutral-400 leading-relaxed max-w-lg">
              <p>
                raw district started as one photographer chasing honest light. It still is.
                No oversized team, no template — just a considered eye and the discipline to
                leave a frame alone when it's already right.
              </p>
              <p>
                The work leans monochrome by instinct: black, white and everything the grain
                holds in between. Whether it's a portrait, a product or a short film, the aim
                is the same — keep it raw, keep it real.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-block mt-10 text-sm uppercase tracking-widest text-white border-b border-neutral-700 pb-1 hover:border-white transition-colors duration-300"
            >
              Work with the studio
            </a>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 border-t border-l border-neutral-900 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {stats.map((stat) => (
              <div
                key={stat.key}
                className="border-b border-r border-neutral-900 p-8 md:p-10"
              >
                <div className="text-4xl md:text-5xl font-bold text-white">
                  {counters[stat.key]}
                  {stat.suffix}
                </div>
                <div className="mt-3 text-xs uppercase tracking-widest text-neutral-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
