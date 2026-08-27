import React, { useEffect, useRef, useState } from 'react';

const Services = () => {
  const [visible, setVisible] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: 'Photography',
      description:
        'Portraits, product and editorial work shot with intent. Every frame considered, nothing over-produced.',
      tags: ['Portrait', 'Product', 'Editorial', 'Events'],
    },
    {
      title: 'Films',
      description:
        'Short-form and cinematic video that carries a story rather than chasing trends. Shot, cut and graded in-house.',
      tags: ['Brand Films', 'Reels', 'Documentary', 'Music'],
    },
    {
      title: 'Direction',
      description:
        'Concept, moodboards and creative direction for shoots that need a point of view before the camera rolls.',
      tags: ['Concept', 'Art Direction', 'Styling', 'Location'],
    },
    {
      title: 'Post',
      description:
        'Retouching, colour and edit. A restrained, true-to-life finish — clean black and white or muted tones.',
      tags: ['Retouch', 'Colour Grade', 'Edit', 'Delivery'],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisible((prev) => (prev.includes(i) ? prev : [...prev, i]));
          }
        });
      },
      { threshold: 0.2 }
    );
    const rows = sectionRef.current?.querySelectorAll('.service-row');
    rows?.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="bg-black py-28 md:py-36" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 md:mb-24 max-w-2xl">
          <p className="eyebrow mb-6">What we do</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Services, kept simple.
          </h2>
        </div>

        <div className="border-t border-neutral-900">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-index={index}
              className={`service-row reveal ${
                visible.includes(index) ? 'is-visible' : ''
              } group grid md:grid-cols-12 gap-6 md:gap-10 border-b border-neutral-900 py-10 md:py-14`}
            >
              <div className="md:col-span-1">
                <span className="text-sm text-neutral-600">0{index + 1}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-neutral-400 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-neutral-400 leading-relaxed">{service.description}</p>
              </div>
              <div className="md:col-span-2 flex flex-wrap gap-2 items-start">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] uppercase tracking-widest text-neutral-500 border border-neutral-800 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
