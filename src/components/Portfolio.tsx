import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Play, Camera, Video, Megaphone, Share2, Film, Aperture, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filters = [
    { id: 'all', label: 'All Work', icon: Eye },
    { id: 'marketing', label: 'Marketing', icon: Megaphone },
    { id: 'photography', label: 'Photography', icon: Camera },
    { id: 'videography', label: 'Videography', icon: Film },
    { id: 'social', label: 'Social Media', icon: Share2 },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Luxury Brand Campaign',
      category: 'marketing',
      type: 'Campaign',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Award-winning integrated campaign that increased brand awareness by 300%',
      stats: '2.5M+ Views',
    },
    {
      id: 2,
      title: 'Fashion Editorial Series',
      category: 'photography',
      type: 'Photography',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-fashion editorial that redefined contemporary style photography',
      stats: 'Featured in Vogue',
    },
    {
      id: 3,
      title: 'Corporate Documentary',
      category: 'videography',
      type: 'Video',
      image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cinematic storytelling that humanized a Fortune 500 company',
      stats: '1M+ Views',
    },
    {
      id: 4,
      title: 'Viral Social Campaign',
      category: 'social',
      type: 'Social',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Social media strategy that generated 50M+ impressions',
      stats: '50M+ Reach',
    },
    {
      id: 5,
      title: 'Product Photography',
      category: 'photography',
      type: 'Photography',
      image: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Minimalist product photography that increased sales by 200%',
      stats: '200% Sales Boost',
    },
    {
      id: 6,
      title: 'Brand Film',
      category: 'videography',
      type: 'Video',
      image: 'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Emotional brand story that won 3 international awards',
      stats: '3 Awards Won',
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll('.portfolio-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [filteredItems]);

  useEffect(() => {
    setVisibleItems([]);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden" ref={sectionRef}>
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-[#0F3834]/10 to-[#395B51]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-96 h-96 bg-gradient-to-r from-[#A8B69D]/10 to-[#F0F1CF]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Film Strip Border */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-b from-[#0F3834]/20 via-[#395B51]/20 to-[#A8B69D]/20 opacity-30">
        <div className="flex flex-col h-full">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex-1 border-b-4 border-black/50"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            <span className="block">Our</span>
            <span className="block bg-gradient-to-r from-[#A8B69D] via-[#F0F1CF] to-[#A8B69D] bg-clip-text text-transparent">
              Masterpieces
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mb-12">
            Every project is a canvas for creativity. Explore our portfolio of award-winning work 
            that has transformed brands and captivated audiences worldwide.
          </p>

          {/* Filter Buttons with Cinematic Style */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center space-x-3 px-8 py-4 rounded-full font-bold transition-all duration-500 border-2 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-[#0F3834] to-[#395B51] text-white border-[#395B51] shadow-2xl shadow-[#395B51]/40 scale-110'
                      : 'bg-gray-800/50 text-gray-300 border-gray-600 hover:bg-gray-700/50 hover:border-[#395B51]/50 hover:text-[#A8B69D] hover:scale-105'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{filter.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            const isVisible = visibleItems.includes(index);
            const isHovered = hoveredItem === index;
            
            return (
              <div
                key={`${item.id}-${activeFilter}`}
                data-index={index}
                className={`portfolio-item group relative bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Image Container with Cinematic Effects */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                  />
                  
                  {/* Film Grain Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  {/* Cinematic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                        {item.type === 'Video' ? (
                          <Play className="w-8 h-8 text-white ml-1" />
                        ) : (
                          <Eye className="w-8 h-8 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#0F3834] to-[#395B51] text-white px-3 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.stats}
                  </div>

                  {/* Type Badge */}
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold border border-[#395B51]/30">
                    {item.type}
                  </div>

                  {/* Action Button */}
                  <button className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-r from-[#0F3834] to-[#395B51] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 shadow-lg shadow-[#395B51]/40">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#A8B69D] transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#395B51]/30 rounded-3xl transition-colors duration-500 pointer-events-none"></div>
                
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0F3834] to-[#A8B69D] rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="relative overflow-hidden bg-gradient-to-r from-[#0F3834] via-[#395B51] to-[#A8B69D] text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#395B51]/40 transition-all duration-500 hover:scale-110 group">
            <span className="relative z-10">Explore Full Portfolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#A8B69D] via-[#395B51] to-[#0F3834] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#0F3834] to-[#A8B69D] rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;