'use client';

import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const aboutTitleRef = useRef<HTMLSpanElement>(null);
  const meTitleRef = useRef<HTMLSpanElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(max-width: 767px)", () => {
        gsap.to(aboutTitleRef.current, {
          x: -10,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
        });

        gsap.to(meTitleRef.current, {
          x: 10,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
        });
      });
      
      mm.add("(min-width: 768px)", () => {
        gsap.to(aboutTitleRef.current, {
          x: -80,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
        });

        gsap.to(meTitleRef.current, {
          x: 80,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
        });
      });

      gsap.fromTo(introRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: introRef.current,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );

      gsap.fromTo(section1Ref.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: section1Ref.current,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );

      gsap.fromTo(section2Ref.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: section2Ref.current,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );

      gsap.fromTo(section3Ref.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: section3Ref.current,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative min-h-screen pt-40 pb-32 bg-primary-bg overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.03, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[25vw] font-display font-black text-white whitespace-nowrap leading-none"
        >
          ABOUT ME
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl"
        >

          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 mb-16">
            <motion.div variants={itemVariants} className="lg:flex-shrink-0">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-primary-teal to-primary-cyan mb-8"
              />
              
              <h2 className="text-7xl md:text-9xl font-display font-bold leading-none">
                <motion.span 
                  ref={aboutTitleRef}
                  className="text-solid-bold block"
                  variants={itemVariants}
                >
                  ABOUT
                </motion.span>
                <motion.span 
                  ref={meTitleRef}
                  className="text-outline-bold block"
                  variants={itemVariants}
                >
                  ME
                </motion.span>
              </h2>
            </motion.div>

            <motion.div 
              ref={introRef}
              variants={fadeUpVariants}
              className="mt-8 lg:mt-0"
            >
              <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-4">
                Hi, I'm <span className="text-primary-teal">Arthur</span> 👋
              </p>
              <p className="text-xl text-primary-teal/80 leading-relaxed">
                A passionate software engineer crafting digital experiences
              </p>
            </motion.div>
          </div>


          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20 flex justify-center md:justify-start"
          >
            <div className="relative group">

              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary-teal/30 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -bottom-4 -left-4 w-20 h-20 border-2 border-primary-cyan/30 rounded-lg"
              />

              {/* Gradient Border Container */}
              <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary-teal via-primary-cyan to-accent-orange">
                {/* Inner Container */}
                <div className="relative bg-primary-bg rounded-2xl p-2">
                  {/* Image Container with Hover Effects */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden"
                  >
                    <img
                      src="/images/mukhtar.png"
                      alt="Mukhtar Fadhlurrohman - Arthur"
                      className="w-full h-full object-cover"
                    />


                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-primary-teal/50 to-transparent"
                    />
                  </motion.div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-primary-teal to-primary-cyan rounded-full shadow-lg shadow-primary-teal/50"
                >
                  <p className="text-white font-bold text-sm tracking-wider">
                    FULLSTACK DEVELOPER
                  </p>
                </motion.div>
              </div>

              {/* Glow Effect */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-primary-teal/20 to-primary-cyan/20 rounded-2xl blur-2xl -z-10"
              />
            </div>
          </motion.div>


          <div className="space-y-12">

            <motion.div
              ref={section1Ref}
              variants={itemVariants}
              className="grid md:grid-cols-[200px,1fr] gap-6 items-start"
            >
              <div className="text-sm font-medium text-primary-teal tracking-widest">
                WHO I AM
              </div>
              <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                <p>
                  I'm a <span className="text-white font-medium">software engineer</span> specializing in creating
                  exceptional digital experiences. With expertise in modern web technologies,
                  I transform ideas into elegant, performant applications.
                </p>
                <p>
                  My approach combines <span className="text-primary-teal font-medium">technical precision</span> with 
                  creative problem-solving to deliver solutions that not only work flawlessly
                  but also provide delightful user experiences.
                </p>
              </div>
            </motion.div>


            <motion.div
              ref={section2Ref}
              variants={itemVariants}
              className="grid md:grid-cols-[200px,1fr] gap-6 items-start"
            >
              <div className="text-sm font-medium text-primary-teal tracking-widest">
                MY JOURNEY
              </div>
              <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                <p>
                  My journey in tech started with a curiosity about how things work.
                  Today, I build scalable solutions using <span className="text-white font-medium">React, Next.js, TypeScript</span>,
                  and cutting-edge animation libraries like <span className="text-white font-medium">GSAP and Framer Motion</span>.
                </p>
                <p>
                  I believe in <span className="text-primary-cyan font-medium">continuous learning</span> and staying at the 
                  forefront of web development trends to deliver modern, future-proof solutions.
                </p>
              </div>
            </motion.div>


            <motion.div
              ref={section3Ref}
              variants={itemVariants}
              className="grid md:grid-cols-[200px,1fr] gap-6 items-start"
            >
              <div className="text-sm font-medium text-primary-teal tracking-widest">
                BEYOND CODE
              </div>
              <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                <p>
                  When I'm not coding, you'll find me exploring new tech trends,
                  contributing to open source, or enjoying good music while working
                  on side projects.
                </p>
                <p>
                  I'm passionate about <span className="text-white font-medium">design systems</span>, 
                  <span className="text-white font-medium"> performance optimization</span>, and 
                  <span className="text-white font-medium"> developer experience</span>.
                </p>
              </div>
            </motion.div>
          </div>


          <motion.div
            ref={statsRef}
            variants={fadeUpVariants}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'Years of Coding', value: '2+' },
              { label: 'Hours Coded', value: '1000+' },
              { label: 'Tech Stack', value: '15+' },
              { label: 'Coffee Cups', value: '∞' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-effect p-6 rounded-lg text-center group cursor-default"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-teal mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">
                  {stat.label}
                </div>
              </motion.div>
          ))}
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
