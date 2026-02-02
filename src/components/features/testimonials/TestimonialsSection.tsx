'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc',
    image: '/avatars/1.jpg',
    rating: 5,
    text: 'Outstanding work! Arthur delivered a beautiful, responsive website with smooth animations that exceeded our expectations. Professional and communicative throughout the entire project.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager, Digital Solutions',
    image: '/avatars/2.jpg',
    rating: 5,
    text: 'Highly skilled developer with great attention to detail. The backend API was robust and well-documented. Would definitely work with Arthur again on future projects.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder, Creative Studio',
    image: '/avatars/3.jpg',
    rating: 5,
    text: 'Arthur transformed our design mockups into a pixel-perfect, interactive website. The GSAP animations were incredibly smooth and really brought our brand to life.'
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-b from-primary-blue via-[#0d2a47] to-primary-surface"
    >
      {/* Background Text */}
      <div className="bg-text top-20 left-1/2 -translate-x-1/2">REVIEWS</div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-20 w-96 h-96 bg-primary-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-20 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl" />

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
            <span className="text-solid-bold">CLIENT</span>{' '}
            <span className="text-outline-bold">REVIEWS</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Apa kata mereka yang pernah bekerja dengan saya
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass-effect p-10 md:p-16 rounded-2xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 text-6xl text-primary-teal/20">
                "
              </div>

              {/* Stars Rating */}
              <div className="flex justify-center gap-2 mb-8">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-6 h-6 text-accent-orange"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 text-center italic">
                {currentTestimonial.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-teal to-primary-cyan flex items-center justify-center text-2xl font-bold text-white">
                  {currentTestimonial.name.charAt(0)}
                </div>
                
                <div className="text-left">
                  <p className="text-lg font-bold text-white">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {currentTestimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-12">
            {/* Previous Button */}
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors flex items-center justify-center group"
            >
              <svg 
                className="w-6 h-6 text-white group-hover:text-primary-teal transition-colors" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary-teal w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors flex items-center justify-center group"
            >
              <svg 
                className="w-6 h-6 text-white group-hover:text-primary-teal transition-colors" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Counter */}
          <p className="text-center mt-6 text-text-secondary text-sm">
            {currentIndex + 1} / {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
}
