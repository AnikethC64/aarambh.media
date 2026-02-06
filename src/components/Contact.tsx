import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, Camera, Film, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Strategic Marketing Campaign',
    'Brand Photography Session',
    'Commercial Videography',
    'Social Media Management',
    'Complete Brand Overhaul',
    'Content Creation Package',
  ];

  const budgetRanges = [
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
    'Let\'s Discuss',
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@aarambh.media',
      href: 'mailto:hello@aarambh.media',
      color: 'from-[#0F3834] to-[#395B51]',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 99492 72634',
      href: 'tel:+919949272634',
      color: 'from-[#395B51] to-[#A8B69D]',
    },
    {
      icon: MapPin,
      label: 'Studio',
      value: 'Mumbai, India',
      href: '#',
      color: 'from-[#A8B69D] to-[#F0F1CF]',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', service: '', budget: '', message: '' });
    
    // Show success message (you can implement a toast notification here)
    alert('Thank you for reaching out! We\'ll get back to you within 24 hours with a personalized proposal.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#0F3834]/10 to-[#395B51]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#A8B69D]/10 to-[#F0F1CF]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Film Strip Decoration */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-b from-[#0F3834]/20 via-[#395B51]/20 to-[#A8B69D]/20 opacity-20">
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
            <span className="block">Let's Create</span>
            <span className="block bg-gradient-to-r from-[#A8B69D] via-[#F0F1CF] to-[#A8B69D] bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Ready to transform your vision into reality? Let's discuss your project and create something 
            extraordinary that will captivate your audience and elevate your brand.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-xl rounded-3xl p-10 border border-gray-700/50">
            <div className="flex items-center space-x-3 mb-8">
              <MessageCircle className="w-8 h-8 text-[#A8B69D]" />
              <h3 className="text-3xl font-bold text-white">Start Your Project</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-semibold mb-3 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-900/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#395B51] focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white text-sm font-semibold mb-3 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-900/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#395B51] focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-white text-sm font-semibold mb-3 uppercase tracking-wider">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-900/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#395B51] focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  >
                    <option value="" className="text-gray-900">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="text-gray-900">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-white text-sm font-semibold mb-3 uppercase tracking-wider">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-900/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#395B51] focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  >
                    <option value="" className="text-gray-900">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="text-gray-900">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white text-sm font-semibold mb-3 uppercase tracking-wider">
                  Project Vision
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-900/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#395B51] focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm"
                  placeholder="Tell us about your vision, goals, timeline, and what success looks like for this project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative overflow-hidden bg-gradient-to-r from-[#0F3834] via-[#395B51] to-[#A8B69D] text-white px-8 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#395B51]/40 transition-all duration-500 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span className="relative z-10">Sending Your Vision...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6 relative z-10" />
                    <span className="relative z-10">Send Project Brief</span>
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-[#A8B69D] via-[#395B51] to-[#0F3834] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
                Ready to bring your vision to life? We're here to listen, collaborate, and create something 
                extraordinary together. Reach out and let's start the conversation.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-6 p-6 bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 group hover:scale-105"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider">{info.label}</div>
                      <div className="text-white font-bold text-lg">{info.value}</div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400 ml-auto group-hover:translate-x-2 group-hover:text-[#A8B69D] transition-all duration-300" />
                  </a>
                );
              })}
            </div>

            {/* CTA Cards */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#0F3834]/20 via-[#395B51]/20 to-[#A8B69D]/20 backdrop-blur-xl rounded-2xl p-8 border border-[#395B51]/30">
                <div className="flex items-center space-x-3 mb-4">
                  <Camera className="w-8 h-8 text-[#A8B69D]" />
                  <h4 className="text-2xl font-bold text-white">Free Consultation</h4>
                </div>
                <p className="text-gray-300 mb-6 font-light">
                  Book a 30-minute strategy session to discuss your project goals and creative vision.
                </p>
                <button className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2 group">
                  <span>Schedule Call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              <div className="bg-gradient-to-r from-[#A8B69D]/20 via-[#F0F1CF]/20 to-[#0F3834]/20 backdrop-blur-xl rounded-2xl p-8 border border-[#A8B69D]/30">
                <div className="flex items-center space-x-3 mb-4">
                  <Film className="w-8 h-8 text-[#F0F1CF]" />
                  <h4 className="text-2xl font-bold text-white">Portfolio Review</h4>
                </div>
                <p className="text-gray-300 mb-6 font-light">
                  Explore our complete portfolio and see how we've transformed brands worldwide.
                </p>
                <button className="bg-gradient-to-r from-[#A8B69D] to-[#F0F1CF] text-black px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 group">
                  <span>View Portfolio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;