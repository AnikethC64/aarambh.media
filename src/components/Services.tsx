import React, { useEffect, useRef, useState } from 'react';
import { Camera, Video, Megaphone, Share2, ArrowRight, Aperture, Film, Palette, Target } from 'lucide-react';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Target,
      title: 'Strategic Marketing',
      description: 'Data-driven campaigns that cut through the noise and connect with your audience on an emotional level.',
      features: ['Brand Strategy', 'Campaign Development', 'Market Research', 'Performance Analytics'],
      color: 'from-[#0F3834] to-[#395B51]',
      bgPattern: 'marketing',
      delay: 0,
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Every shot is a story. We capture moments that speak louder than words and create lasting impressions.',
      features: ['Product Photography', 'Brand Portraits', 'Event Coverage', 'Commercial Shoots'],
      color: 'from-[#395B51] to-[#A8B69D]',
      bgPattern: 'photography',
      delay: 200,
    },
    {
      icon: Film,
      title: 'Videography',
      description: 'Cinematic storytelling that moves hearts, changes minds, and drives action through powerful visual narratives.',
      features: ['Brand Films', 'Commercials', 'Documentaries', 'Social Content'],
      color: 'from-[#A8B69D] to-[#F0F1CF]',
      bgPattern: 'videography',
      delay: 400,
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Building communities, sparking conversations, and creating viral moments that amplify your brand voice.',
      features: ['Content Strategy', 'Community Building', 'Influencer Partnerships', 'Viral Campaigns'],
      color: 'from-[#F0F1CF] to-[#0F3834]',
      bgPattern: 'social',
      delay: 600,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const getBackgroundPattern = (pattern: string) => {
    const patterns = {
      marketing: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230F3834' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E",
      photography: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23395B51' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='30' cy='30' r='12'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
      videography: "data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23A8B69D' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40l30-20-30-20z'/%3E%3C/g%3E%3C/svg%3E",
      social: "data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F0F1CF' fill-opacity='0.1'%3E%3Cpath d='M25 0C11.2 0 0 11.2 0 25s11.2 25 25 25 25-11.2 25-25S38.8 0 25 0zm0 40c-8.3 0-15-6.7-15-15s-15 6.7-15 15 6.7 15 15 15z'/%3E%3C/g%3E%3C/svg%3E"
    };
    return patterns[pattern as keyof typeof patterns];
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden" ref={sectionRef}>
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#0F3834]/10 to-[#395B51]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#A8B69D]/10 to-[#F0F1CF]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Film Strip Decoration */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-b from-[#0F3834]/20 via-[#395B51]/20 to-[#A8B69D]/20 opacity-30">
        <div className="flex flex-col h-full">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex-1 border-b-4 border-black/50"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#0F3834]/20 to-[#A8B69D]/20 backdrop-blur-xl rounded-full px-6 py-3 mb-8 border border-[#395B51]/30">
            <Aperture className="w-5 h-5 text-[#A8B69D] animate-spin" style={{ animationDuration: '8s' }} />
            <span className="text-[#F0F1CF] font-semibold tracking-wide">Our Expertise</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            <span className="block">Creative</span>
            <span className="block bg-gradient-to-r from-[#A8B69D] via-[#F0F1CF] to-[#A8B69D] bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            We don't just deliver services – we craft experiences. Each project is a journey of creative discovery, 
            where your vision meets our expertise to create something extraordinary.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={service.title}
                data-index={index}
                className={`service-card group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  transitionDelay: `${service.delay}ms`,
                  backgroundImage: `url("${getBackgroundPattern(service.bgPattern)}")`,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                
                {/* Floating Icon */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-2xl`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
                  
                  {/* Floating particles around icon */}
                  {isHovered && (
                    <div className="absolute inset-0">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-orange-400 rounded-full animate-ping"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                            animationDelay: `${i * 200}ms`,
                          }}
                        ></div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#A8B69D] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-8 leading-relaxed text-lg font-light">
                  {service.description}
                </p>

                {/* Features with Cinematic Style */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={feature} className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                      <div className={`w-3 h-3 bg-gradient-to-r ${service.color} rounded-full mr-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA with Cinematic Effect */}
                <button className="group/btn flex items-center text-[#A8B69D] font-bold hover:text-[#F0F1CF] transition-all duration-300 text-lg">
                  <span>Explore Service</span>
                  <ArrowRight className="w-5 h-5 ml-3 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-r from-[#0F3834]/20 to-[#A8B69D]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F3834]/5 via-[#395B51]/5 to-[#A8B69D]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="relative overflow-hidden bg-gradient-to-r from-[#0F3834] via-[#395B51] to-[#A8B69D] text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#395B51]/40 transition-all duration-500 hover:scale-110 group">
            <span className="relative z-10">View All Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#A8B69D] via-[#395B51] to-[#0F3834] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#0F3834] to-[#A8B69D] rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;