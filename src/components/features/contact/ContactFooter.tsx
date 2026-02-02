'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink, Send, ArrowUp } from 'lucide-react';

const ContactFooter: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 600;

    const particles: Particle[] = [];
    const particleCount = 80;

    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      opacity: number = 0;
      color: string = '20, 184, 166';

      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.5 + 0.2;
        const colors = ['20, 184, 166', '34, 211, 238', '14, 165, 233'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        if (!canvas) return;
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(20, 184, 166, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 600;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:mukhtarfadhlurrohman111206@gmail.com',
      label: 'mukhtarfadhlurrohman111206@gmail.com',
      color: 'from-red-500 to-pink-500',
      hoverColor: 'group-hover:from-red-400 group-hover:to-pink-400',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/MROob11',
      label: 'github.com/MROob11',
      color: 'from-gray-700 to-gray-900',
      hoverColor: 'group-hover:from-gray-600 group-hover:to-gray-800',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/mukhtar-fadhlurrohman-21a6083a5/',
      label: 'Mukhtar Fadhlurrohman',
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'group-hover:from-blue-500 group-hover:to-blue-700',
    },
  ];

  return (
    <footer id="contact" className="relative min-h-[600px] overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/10 via-transparent to-accent-cyan/10" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-primary-teal/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-primary-teal/10 border border-primary-teal/30 rounded-full text-primary-teal text-sm font-medium backdrop-blur-sm">
                Let's Work Together
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-accent-cyan to-white bg-clip-text text-transparent">
                LET'S
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-teal via-accent-cyan to-primary-teal bg-clip-text text-transparent">
                CONNECT
              </span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
              Available for freelance opportunities, collaborations, or just a friendly chat about technology and music.
            </p>

            {/* Decorative elements */}
            <div className="mt-8 flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-1 bg-gradient-to-r from-primary-teal to-accent-cyan rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${40 - i * 10}px` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 transition-all duration-500 hover:bg-white/10 hover:border-primary-teal/50 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]">
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                    animate={{
                      translateX: ['100%', '-100%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 5,
                      ease: "easeInOut"
                    }}
                  />

                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${link.color} ${link.hoverColor} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        <link.icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          {link.name}
                        </p>
                        <p className="text-white font-medium group-hover:text-primary-teal transition-colors text-xs md:text-sm truncate">
                          {link.label}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Icon */}
                    <motion.div
                      className="text-gray-400 group-hover:text-primary-teal transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} <span className="text-primary-teal font-medium">Arthur</span>. All rights reserved.
            </p>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-teal/50 rounded-full transition-all duration-300"
            >
              <span className="text-sm font-medium bg-gradient-to-r from-gray-400 to-gray-200 group-hover:from-white group-hover:to-white bg-clip-text text-transparent transition-all">
                Scroll to Top
              </span>
              <div className="p-1.5 rounded-full bg-primary-teal/10 group-hover:bg-primary-teal text-primary-teal group-hover:text-black transition-colors duration-300">
                <ArrowUp size={14} strokeWidth={2.5} />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </footer>
  );
};

export default ContactFooter;
