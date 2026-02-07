'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { motion } from 'framer-motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

const projects = [
  { 
    year: '2026', 
    title: 'YGY Grandeur - Luxury Hotel Reservation', 
    description: 'Platform reservasi hotel bintang lima dengan pengalaman pengguna yang seamless, desain antarmuka elegan, dan sistem pembayaran otomatis.',
    tech: ['Python', 'Flask', 'MySQL', 'Tailwind CSS', 'Xendit API'],
    link: ''
  },
  { 
    year: '2025 - COMING SOON', 
    title: 'E-Commerce Platform', 
    description: 'Platform e-commerce lengkap dengan sistem pembayaran online - Segera hadir!',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: ''
  },
  { 
    year: '2025 - COMING SOON', 
    title: 'Booking System', 
    description: 'Sistem booking dan reservasi hotel yang mudah digunakan - Launching soon!',
    tech: ['Python', 'Flask', 'MySQL', 'Bootstrap'],
    link: ''
  },
];

const polaroids = [
  { src: '/assets/journey/1.jpg', alt: 'Portfolio Website - Coming Soon', rotation: -5 },
  { src: '/assets/journey/2.jpg', alt: 'E-Commerce Platform - Coming Soon', rotation: 3 },
  { src: '/assets/journey/3.jpg', alt: 'Booking System - Coming Soon', rotation: -3 },
];

export function JourneySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !planeRef.current) return;

    const ctx = gsap.context(() => {
      // Airplane follows curved SVG path
      gsap.to(planeRef.current, {
        motionPath: {
          path: "#curvedPath",
          align: "#curvedPath",
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-b from-[#0d2a47] via-primary-blue to-primary-surface"
    >
      <div className="bg-text top-20 left-1/2 -translate-x-1/2">JOURNEY</div>

      <div className="absolute top-20 left-10 w-64 h-32 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-40 right-20 w-80 h-40 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-1/4 w-72 h-36 bg-white/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-7xl md:text-8xl font-display mb-4">

            <span className="text-solid-bold">MY</span>{' '}
            <span className="text-outline-bold">JOURNEY</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl">
            Showcase project web yang sudah saya buat dan kembangkan
          </p>
        </motion.div>

        <div className="relative min-h-[1200px]">
          <svg 
            ref={lineRef}
            className="absolute left-0 top-0 w-full h-full pointer-events-none" 
            style={{ zIndex: 1 }}
            viewBox="0 0 400 1200"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              id="curvedPath"
              d="M 200,50 Q 280,200 180,400 Q 120,550 220,750 Q 280,900 200,1100"
              stroke="url(#pathGradient)"
              strokeWidth="3"
              fill="none"
            />
          </svg>

          <div
            ref={planeRef}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 z-20"
            style={{ willChange: 'transform' }}
          >
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                className="text-primary-teal drop-shadow-lg"
              >
                <path
                  d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>
          </div>

          <div className="space-y-40 ml-0">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative w-full"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 0.1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -top-20 left-0 text-[120px] md:text-[180px] font-black text-white leading-none pointer-events-none"
                >
                  0{index + 1}
                </motion.div>

                <motion.div 
                  className="glass-effect p-6 md:p-10 rounded-2xl hover:shadow-2xl hover:shadow-primary-teal/20 transition-all relative overflow-hidden"
                  whileHover={{ y: -8 }}
                >
                  <div className="grid md:grid-cols-[300px,1fr] gap-8 items-start">
                    {project.link ? (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <motion.div
                          whileHover={{ scale: 1.05, rotate: 0 }}
                          className="bg-white p-4 shadow-2xl rounded-sm transform"
                          style={{ rotate: `${polaroids[index].rotation}deg` }}
                        >
                          <div className="w-full aspect-video bg-gradient-to-br from-primary-teal/20 to-primary-cyan/20 rounded-sm mb-3 overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                              {index === 0 ? 'COMING SOON 🚧' : 'Screenshot Here'}
                            </div>
                          </div>
                          <p className="text-xs text-gray-800 text-center font-handwriting">
                            {project.title}
                          </p>
                          
                          <div className="absolute inset-0 bg-primary-teal/0 group-hover:bg-primary-teal/10 transition-colors rounded-sm flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <span className="text-primary-teal font-bold text-sm bg-white px-4 py-2 rounded-full shadow-lg">
                              Click to View
                            </span>
                          </div>
                        </motion.div>
                      </a>
                    ) : (
                      <div className="block cursor-not-allowed opacity-75">
                        <motion.div
                          className="bg-white p-4 shadow-2xl rounded-sm transform"
                          style={{ rotate: `${polaroids[index].rotation}deg` }}
                        >
                          <div className="w-full aspect-video bg-gradient-to-br from-gray-300 to-gray-400 rounded-sm mb-3 overflow-hidden relative">
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 text-sm font-bold">
                              <div className="text-2xl mb-2">🚧</div>
                              <div>COMING SOON</div>
                            </div>
                          </div>
                          <p className="text-xs text-gray-800 text-center font-handwriting">
                            {project.title}
                          </p>
                        </motion.div>
                      </div>
                    )}

                    <div className="space-y-4">
                      <div>
                        <span className="text-primary-teal text-sm font-bold tracking-widest">
                          {project.year}
                        </span>
                        <h3 className="text-4xl md:text-5xl font-black mt-2 mb-3 text-white">
                          {project.title}
                        </h3>
                        <p className="text-text-secondary text-lg leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-4 py-2 bg-primary-teal/10 text-primary-teal border border-primary-teal/30 rounded-lg text-sm font-medium hover:bg-primary-teal/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {project.link ? (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 mt-6 px-6 py-3 bg-gradient-to-r from-primary-teal to-primary-cyan text-white rounded-lg font-bold hover:shadow-lg hover:shadow-primary-teal/50 transition-all group"
                        >
                          <span>VIEW PROJECT</span>
                          <svg 
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      ) : (
                        <div className="inline-flex items-center gap-3 mt-6 px-6 py-3 bg-gray-500 text-white rounded-lg font-bold opacity-50 cursor-not-allowed">
                          <span>COMING SOON 🚧</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none -mb-px">
        <svg 
          className="relative block w-full h-40 md:h-48"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ d: "M0,50 C300,80 600,20 900,50 C1050,65 1150,50 1200,40 L1200,120 L0,120 Z" }}
            animate={{ 
              d: [
                "M0,50 C300,80 600,20 900,50 C1050,65 1150,50 1200,40 L1200,120 L0,120 Z",
                "M0,40 C300,20 600,80 900,40 C1050,50 1150,65 1200,50 L1200,120 L0,120 Z",
                "M0,50 C300,80 600,20 900,50 C1050,65 1150,50 1200,40 L1200,120 L0,120 Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            fill="rgba(13, 42, 71, 0.7)"
            className="mix-blend-multiply"
          />
          
          <motion.path
            initial={{ d: "M0,70 C200,50 400,90 600,60 C800,30 1000,70 1200,50 L1200,120 L0,120 Z" }}
            animate={{ 
              d: [
                "M0,70 C200,50 400,90 600,60 C800,30 1000,70 1200,50 L1200,120 L0,120 Z",
                "M0,50 C200,90 400,50 600,80 C800,60 1000,40 1200,70 L1200,120 L0,120 Z",
                "M0,70 C200,50 400,90 600,60 C800,30 1000,70 1200,50 L1200,120 L0,120 Z"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            fill="rgba(13, 42, 71, 0.5)"
            className="mix-blend-multiply"
          />
          
          <path 
            d="M0,90 C300,70 600,90 900,80 C1050,75 1150,85 1200,80 L1200,120 L0,120 Z" 
            fill="#0d2a47"
          />
        </svg>
      </div>
    </section>
  );
}
