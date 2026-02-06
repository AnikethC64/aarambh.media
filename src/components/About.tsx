import React, { useEffect, useRef, useState } from 'react';
import { Users, Award, Clock, Heart, ArrowRight, Target } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0, awards: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Award, label: 'Projects Completed', value: 500, suffix: '+', color: 'from-[#0F3834] to-[#395B51]' },
    { icon: Users, label: 'Happy Clients', value: 150, suffix: '+', color: 'from-[#395B51] to-[#A8B69D]' },
    { icon: Clock, label: 'Years Experience', value: 8, suffix: '+', color: 'from-[#A8B69D] to-[#F0F1CF]' },
    { icon: Heart, label: 'Awards Won', value: 25, suffix: '+', color: 'from-[#F0F1CF] to-[#0F3834]' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate counters
            stats.forEach((stat, index) => {
              let start = 0;
              const increment = stat.value / 60;
              const timer = setInterval(() => {
                start += increment;
                if (start >= stat.value) {
                  start = stat.value;
                  clearInterval(timer);
                }
                setCounters(prev => ({
                  ...prev,
                  [index === 0 ? 'projects' : index === 1 ? 'clients' : index === 2 ? 'years' : 'awards']: Math.floor(start)
                }));
              }, 30);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden" ref={sectionRef}>
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-[#0F3834]/10 to-[#395B51]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-[#A8B69D]/10 to-[#F0F1CF]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Film Strip Decoration */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-b from-[#0F3834]/20 via-[#395B51]/20 to-[#A8B69D]/20 opacity-20">
        <div className="flex flex-col h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex-1 border-b-4 border-black/50"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            <span className="block">The</span>
            <span className="block bg-gradient-to-r from-[#A8B69D] via-[#F0F1CF] to-[#A8B69D] bg-clip-text text-transparent">
              Creators
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Content */}
          <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h3 className="text-4xl font-bold text-white mb-8 leading-tight">
              Where Vision Meets
              <span className="block bg-gradient-to-r from-[#A8B69D] to-[#F0F1CF] bg-clip-text text-transparent">
                Execution
              </span>
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
              We're not just another creative agency. We're storytellers, dreamers, and visual architects 
              who believe that every brand has an extraordinary story waiting to be told.
            </p>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
              From the first spark of inspiration to the final frame, we pour our hearts into every project, 
              creating visual experiences that don't just capture attention – they capture souls.
            </p>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed font-light">
              Our work has been featured in international publications, won prestigious awards, and most 
              importantly, transformed businesses and touched millions of lives around the world.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="relative overflow-hidden bg-gradient-to-r from-[#0F3834] to-[#395B51] text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-[#395B51]/40 transition-all duration-500 hover:scale-105 group flex items-center justify-center space-x-3">
                <span className="relative z-10">Our Story</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#395B51] to-[#0F3834] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button className="border-2 border-[#395B51] text-[#A8B69D] px-8 py-4 rounded-full font-bold hover:bg-[#395B51] hover:text-white transition-all duration-500 hover:scale-105">
                Meet the Team
              </button>
            </div>
          </div>

          {/* Stats with Cinematic Design */}
          <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const counterValue = index === 0 ? counters.projects : 
                                  index === 1 ? counters.clients : 
                                  index === 2 ? counters.years : counters.awards;
                
                return (
                  <div key={stat.label} className="relative bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 text-center group hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="text-4xl font-black text-white mb-3">
                      {counterValue}{stat.suffix}
                    </div>
                    
                    <div className="text-sm text-gray-300 font-semibold uppercase tracking-wider">
                      {stat.label}
                    </div>

                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;