import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Check } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('xjyvbavr');

  const services = ['Photography', 'Film', 'Direction', 'Post / Retouch', 'Something else'];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@rawdistrict.com', href: 'mailto:hello@rawdistrict.com' },
    { icon: Phone, label: 'Phone', value: '+91 99492 72634', href: 'tel:+919949272634' },
    { icon: MapPin, label: 'Based in', value: 'India · Available worldwide', href: '#' },
  ];

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

          {/* Form / Success */}
          {state.succeeded ? (
            <div className="flex flex-col justify-center border border-neutral-900 p-10">
              <div className="w-12 h-12 border border-neutral-700 flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Message sent.</h3>
              <p className="text-neutral-400 leading-relaxed max-w-sm">
                Thanks for reaching out — Aniketh will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[11px] uppercase tracking-widest text-neutral-500 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={inputClass}
                  placeholder="Your name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="mt-2 text-xs text-neutral-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[11px] uppercase tracking-widest text-neutral-500 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={inputClass}
                  placeholder="your@email.com"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-2 text-xs text-neutral-500"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-[11px] uppercase tracking-widest text-neutral-500 mb-2"
                >
                  What do you need?
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" disabled className="bg-black text-neutral-400">
                    Select
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service} className="bg-black text-white">
                      {service}
                    </option>
                  ))}
                </select>
                <ValidationError
                  prefix="Service"
                  field="service"
                  errors={state.errors}
                  className="mt-2 text-xs text-neutral-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[11px] uppercase tracking-widest text-neutral-500 mb-2"
                >
                  The brief
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us about the shoot, timeline and vibe..."
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="mt-2 text-xs text-neutral-500"
                />
              </div>

              <ValidationError
                errors={state.errors}
                className="text-xs text-neutral-500"
              />

              <button
                type="submit"
                disabled={state.submitting}
                className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors duration-300 disabled:opacity-50"
              >
                {state.submitting ? 'Sending...' : 'Send brief'}
                {!state.submitting && (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
