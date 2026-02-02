'use client';

import { motion } from 'framer-motion';

const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Membangun website modern dengan React, Next.js, dan animasi yang smooth',
    features: ['Responsive Design', 'Fast Performance', 'SEO Optimized']
  },
  {
    icon: '⚙️',
    title: 'Backend Development',
    description: 'Membangun API yang robust dengan Python, Django, dan Flask',
    features: ['REST APIs', 'Database Design', 'Authentication']
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Mendesain interface yang indah dengan interaksi yang smooth',
    features: ['Modern Animations', 'User-Centered', 'Accessibility']
  }
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-b from-[#0d2a47] via-[#0d2a47] to-primary-blue"
    >
      {/* Background Text */}
      <div className="bg-text top-20 left-1/2 -translate-x-1/2">SERVICES</div>

      {/* Gradient Orbs */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-primary-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-primary-cyan/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-7xl md:text-8xl font-display mb-4">
            <span className="text-solid-bold">WHAT I</span>{' '}
            <span className="text-outline-bold">DO</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Layanan yang saya tawarkan untuk membantu project Anda
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect p-8 rounded-2xl hover:shadow-2xl hover:shadow-primary-teal/20 transition-all group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-6xl mb-6"
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-4 text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center gap-3 text-sm text-text-secondary"
                  >
                    <svg 
                      className="w-5 h-5 text-primary-teal flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover gradient line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                viewport={{ once: true }}
                className="mt-6 h-1 bg-gradient-to-r from-primary-teal to-primary-cyan rounded-full origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
