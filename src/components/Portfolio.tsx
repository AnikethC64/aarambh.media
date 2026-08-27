import React, { useState, useEffect, useRef } from 'react';
import { galleryItems, galleryFilters } from '../data/gallery';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => (prev.includes(i) ? prev : [...prev, i]));
          }
        });
      },
      { threshold: 0.1 }
    );
    const items = sectionRef.current?.querySelectorAll('.portfolio-item');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [activeFilter]);

  useEffect(() => {
    setVisibleItems([]);
  }, [activeFilter]);

  return (
    <section
      id="portfolio"
      className="bg-black py-28 md:py-36 border-t border-neutral-900"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">Selected work</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              The archive.
            </h2>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {galleryFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`text-sm uppercase tracking-widest pb-1 border-b transition-colors duration-300 ${
                  activeFilter === filter.id
                    ? 'text-white border-white'
                    : 'text-neutral-500 border-transparent hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry gallery — preserves each photo's native ratio */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {filteredItems.map((item, index) => (
            <div
              key={`${item.src}-${activeFilter}`}
              data-index={index}
              className={`portfolio-item reveal ${
                visibleItems.includes(index) ? 'is-visible' : ''
              } group relative mb-4 break-inside-avoid overflow-hidden bg-neutral-950`}
              style={{ transitionDelay: `${(index % 12) * 60}ms` }}
            >
              <img
                src={item.src}
                alt={`${item.label} — raw district`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="pointer-events-none absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.3em] text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs uppercase tracking-widest text-neutral-600">
          {filteredItems.length} frames
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
