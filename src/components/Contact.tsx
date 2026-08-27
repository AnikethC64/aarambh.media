import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = ['Photography', 'Film', 'Direction', 'Post / Retouch', 'Something else'];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@rawdistrict.com', href: 'mailto:hello@rawdistrict.com' },
    { icon: Phone, label: 'Phone', value: '+91 99492 72634', href: 'tel:+919949272634' },
    { icon: MapPin, label: 'Based in', value: 'India · Available worldwide', href: '#' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', service: '', message: '' });
    alert('Thanks for reaching out. Aniketh will get back to you shortly.');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    'w-full bg-transparent border-b border-neutral-800 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors duration-300';

  return (
    <section id="contact" className="bg-black py-28 md:py-36 border-t border-neutral-900">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p className="eyebrow mb-6">Contact</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
              Let's make
              <br />
              <span className="text-neutral-500">something raw.</span>
            </h2>
            <p className="text-neutral-400 leading-relaxed max-w-md mb-12">
              Got a shoot in mind? Tell us what you're picturing and we'll take it from there.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-5 group"
                  >
                    <Icon className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-300" />
                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-neutral-600">
                        {info.label}
                      </div>
                      <div className="text-white group-hover:text-neutral-300 transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-[11px] uppercase tracking-widest text-neutral-500 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[11px] uppercase tracking-widest text-neutral-500 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-[11px] uppercase tracking-widest text-neutral-500 mb-2">
                What do you need?
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className={`${inputClass} appearance-none`}
              >
                <option value="" className="bg-black text-neutral-400">
                  Select
                </option>
                {services.map((service) => (
                  <option key={service} value={service} className="bg-black text-white">
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-[11px] uppercase tracking-widest text-neutral-500 mb-2">
                The brief
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="Tell us about the shoot, timeline and vibe..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send brief'}
              {!isSubmitting && (
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
