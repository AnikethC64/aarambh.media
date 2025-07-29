import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Camera, Video, Aperture, Film, Focus } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = ['Visual Storytelling', 'Brand Photography', 'Cinematic Videos', 'Creative Campaigns'];
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
        setIsTransitioning(false);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Dynamic Background with Parallax */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-[#0F3834]/30 to-[#395B51]/30 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${10 + mousePosition.y * 0.02}%`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-[#A8B69D]/30 to-[#F0F1CF]/30 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${15 + mousePosition.x * -0.015}%`,
            bottom: `${15 + mousePosition.y * -0.015}%`,
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-[#F0F1CF]/20 to-[#A8B69D]/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${50 + mousePosition.x * 0.01}%`,
            top: `${50 + mousePosition.y * 0.01}%`,
            animationDelay: '2s'
          }}
        ></div>
      </div>

      {/* Floating Camera Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            {i % 4 === 0 && <Camera className="w-6 h-6 text-orange-400" />}
            {i % 4 === 1 && <Video className="w-6 h-6 text-red-400" />}
            {i % 4 === 2 && <Aperture className="w-6 h-6 text-pink-400" />}
            {i % 4 === 3 && <Film className="w-6 h-6 text-yellow-400" />}
            {i % 4 === 0 && <Camera className="w-6 h-6 text-[#A8B69D]" />}
            {i % 4 === 1 && <Video className="w-6 h-6 text-[#395B51]" />}
            {i % 4 === 2 && <Aperture className="w-6 h-6 text-[#F0F1CF]" />}
            {i % 4 === 3 && <Film className="w-6 h-6 text-[#0F3834]" />}
          </div>
        ))}
      </div>

      {/* Film Strip Border Effect */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-[#0F3834] via-[#395B51] to-[#A8B69D] opacity-20">
        <div className="flex h-full">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex-1 border-r-2 border-black/50"></div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-[#A8B69D] via-[#395B51] to-[#0F3834] opacity-20">
        <div className="flex h-full">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex-1 border-r-2 border-black/50"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Creative Badge */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#0F3834]/20 to-[#A8B69D]/20 backdrop-blur-xl rounded-full px-6 py-3 mb-10 mt-32 border border-[#395B51]/30 group hover:scale-105 transition-all duration-500">
            <Focus className="w-5 h-5 text-[#A8B69D] animate-pulse" />
            <span className="text-[#F0F1CF] font-semibold tracking-wide">Creative Visual Studio</span>
            <div className="w-2 h-2 bg-[#A8B69D] rounded-full animate-ping"></div>
          </div>

          {/* Main Heading with Cinematic Effect */}
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-none tracking-tight">
            <span className="block bg-gradient-to-r from-[#A8B69D] via-[#F0F1CF] to-[#395B51] bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-700">
              Capture Stories
            </span>
            <span className="block bg-gradient-to-r from-[#F0F1CF] via-[#A8B69D] to-[#395B51] bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-700">
              Create Magic
            </span>
          </h1>

          {/* Dynamic Service Text with Typewriter Effect */}
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 min-h-[3rem] flex items-center justify-center space-x-2">
            <span>Crafting</span>
            <div className="relative">
              <span className={`bg-gradient-to-r from-[#A8B69D] to-[#F0F1CF] bg-clip-text text-transparent font-bold transition-all duration-500 transform ${
                isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}>
                {services[currentService]}
              </span>
            </div>
          </div>

          {/* Cinematic Description */}
          <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Where every frame tells a story, every shot captures emotion, and every project becomes a masterpiece. 
            We don't just create content – we craft visual experiences that move hearts and minds.
          </p>

          {/* CTA Buttons with Cinematic Effects */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <button className="group relative overflow-hidden bg-gradient-to-r from-[#0F3834] via-[#395B51] to-[#A8B69D] text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#395B51]/40 transition-all duration-500 hover:scale-110">
              <span className="relative z-10 flex items-center space-x-3">
                <span>Start Your Story</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#A8B69D] via-[#395B51] to-[#0F3834] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#0F3834] to-[#A8B69D] rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
            </button>
            
            <button className="group flex items-center space-x-4 text-white hover:text-[#F0F1CF] transition-all duration-500">
              <div className="relative w-16 h-16 bg-gradient-to-r from-[#0F3834]/20 to-[#A8B69D]/20 backdrop-blur-xl rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#0F3834]/40 group-hover:to-[#A8B69D]/40 transition-all duration-500 group-hover:scale-125 border border-[#395B51]/30">
                <Play className="w-7 h-7 ml-1 text-[#A8B69D]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F3834] to-[#A8B69D] rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              <div>
                <span className="font-bold text-lg block">Watch Our Reel</span>
                <span className="text-gray-400 text-sm">See the magic in motion</span>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="pb-20"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;