import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'photography', label: 'Photography' },
    { id: 'film', label: 'Film' },
    { id: 'portrait', label: 'Portrait' },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Concrete',
      category: 'photography',
      type: 'Series',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2025',
    },
    {
      id: 2,
      title: 'Studio No. 4',
      category: 'portrait',
      type: 'Portrait',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2025',
    },
    {
      id: 3,
      title: 'After Hours',
      category: 'film',
      type: 'Short Film',
      image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2024',
    },
    {
      id: 4,
      title: 'Grain',
      category: 'photography',
      type: 'Series',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2024',
    },
    {
      id: 5,
      title: 'Objects',
      category: 'photography',
      type: 'Product',
      image: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2024',
    },
    {
      id: 6,
      title: 'Motion',
      category: 'film',
      type: 'Brand Film',
      image: 'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2023',
    },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

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
      { threshold: 0.15 }
    );
    const items = sectionRef.current?.querySelectorAll('.portfolio-item');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [filteredItems]);

  useEffect(() => {
    setVisibleItems([]);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="bg-black py-28 md:py-36 border-t border-neutral-900" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">Selected work</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              The archive.
            </h2>
          </div>

          <div className="flex flex-wrap gap-6">
            {filters.map((filter) => (
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900">
          {filteredItems.map((item, index) => (
            <a
              key={`${item.id}-${activeFilter}`}
              href="#"
              data-index={index}
              className={`portfolio-item reveal ${
                visibleItems.includes(index) ? 'is-visible' : ''
              } group relative block bg-black overflow-hidden`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              <div className="flex items-center justify-between px-5 py-5">
                <div>
                  <h3 className="text-lg font-medium text-white">{item.title}</h3>
                  <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">
                    {item.type} · {item.year}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
