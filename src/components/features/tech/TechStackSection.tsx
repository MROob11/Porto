'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const techStack = [
  { name: 'React', category: 'Frontend', logo: '/tech-logos/react.svg', color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', logo: '/tech-logos/nextdotjs.svg', color: '#000000' },
  { name: 'TypeScript', category: 'Frontend', logo: '/tech-logos/typescript.svg', color: '#3178C6' },
  { name: 'JavaScript', category: 'Frontend', logo: '/tech-logos/javascript.svg', color: '#F7DF1E' },
  { name: 'Tailwind CSS', category: 'Frontend', logo: '/tech-logos/tailwindcss.svg', color: '#06B6D4' },
  { name: 'HTML5', category: 'Frontend', logo: '/tech-logos/html5.svg', color: '#E34F26' },
  { name: 'CSS', category: 'Frontend', logo: '/tech-logos/css.svg', color: '#663399' },


  
  { name: 'Node.js', category: 'Backend', logo: '/tech-logos/nodedotjs.svg', color: '#339933' },
  { name: 'Python', category: 'Backend', logo: '/tech-logos/python.svg', color: '#3776AB' },
  { name: 'PHP', category: 'Backend', logo: '/tech-logos/php.svg', color: '#777BB4' },
  { name: 'Laravel', category: 'Backend', logo: '/tech-logos/laravel.svg', color: '#FF2D20' },
  
  { name: 'MySQL', category: 'Database', logo: '/tech-logos/mysql.svg', color: '#4479A1' },
  { name: 'Apache', category: 'Database', logo: '/tech-logos/apache.svg', color: '#D22128' },
  { name: 'XAMPP', category: 'Database', logo: '/tech-logos/xampp.svg', color: '#FB7A24' },
  
  { name: 'Git', category: 'DevOps', logo: '/tech-logos/git.svg', color: '#F05032' },
  { name: 'GitHub', category: 'DevOps', logo: '/tech-logos/github.svg', color: '#181717' },
  { name: 'Docker', category: 'DevOps', logo: '/tech-logos/docker.svg', color: '#2496ED' },
  { name: 'Vercel', category: 'DevOps', logo: '/tech-logos/vercel.svg', color: '#000000' },
  { name: 'InfinityFree', category: 'DevOps', logo: '/tech-logos/infinityfree.svg', color: '#00A8E8' },
    
  { name: 'Figma', category: 'Design', logo: '/tech-logos/figma.svg', color: '#F24E1E' },
  { name: 'Photoshop', category: 'Design', logo: '/tech-logos/photoshop-svgrepo-com.svg', color: '#31A8FF' },
  { name: 'Canva', category: 'Design', logo: '/tech-logos/canva-svgrepo-com.svg', color: '#00C4CC' },
  { name: 'CapCut', category: 'Design', logo: '/tech-logos/capcut-svgrepo-com.svg', color: '#000000' },
];

export function TechStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const categories = ['Frontend', 'Backend', 'Database', 'DevOps', 'Design'];

  return (
    <section
      ref={sectionRef}
      id="tech"
      className="relative min-h-screen py-32 bg-gradient-to-b from-gray-50 via-gray-100 to-[#0d2a47] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -mt-px">
        <svg 
          className="relative block w-full h-28 md:h-36"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: 'rotate(180deg) scale(1.02, 1.05)' }}
        >
          <path 
            d="M0,0 C150,80 350,80 600,50 C850,20 1050,20 1200,50 L1200,120 L0,120 Z" 
            className="fill-primary-bg"
          />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full">
        <motion.div
          style={{ y }}
          className="text-[35vw] font-display font-black text-gray-300/30 whitespace-nowrap leading-none text-center"
        >
          TECH
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        <div ref={titleRef} className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-sm text-primary-teal tracking-[0.3em] mb-6 uppercase font-medium">
              // MY TOOLKIT
            </p>
            
            <h2 className="text-7xl md:text-9xl font-display font-black leading-none mb-6">
              <motion.span 
                className="block bg-gradient-to-r from-gray-900 via-primary-teal to-gray-900 bg-clip-text text-transparent"
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundSize: '200% auto' }}
              >
                TECH STACK
              </motion.span>
              <motion.span 
                className="block text-transparent"
                style={{
                  WebkitTextStroke: '2px #0a0a0a',
                }}
              >
                & SKILLS
              </motion.span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A curated collection of modern technologies I use to build robust, scalable, and beautiful digital experiences.
            </p>
          </motion.div>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category}>
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                {category}
              </motion.h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {techStack
                  .filter(tech => tech.category === category)
                  .map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ y: -8, transition: { duration: 0.2 } }}
                      className="relative bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 rounded-xl p-6 group cursor-default hover:border-primary-teal/30 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex justify-center mb-4 relative h-12">
                        <img
                          src={tech.logo}
                          alt={`${tech.name} logo`}
                          width={48}
                          height={48}
                          className="object-contain group-hover:scale-110 transition-transform duration-300"
                          style={{ filter: `drop-shadow(0 0 8px ${tech.color}40)` }}
                        />
                      </div>

                      <h4 className="text-sm font-semibold text-gray-900 text-center group-hover:text-primary-teal transition-colors">
                        {tech.name}
                      </h4>

                      <div 
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at center, ${tech.color}10 0%, transparent 70%)`,
                        }}
                      />
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-lg">
            and <span className="text-primary-teal font-bold">continuously learning</span> more
          </p>
        </motion.div>
      </div>
    </section>
  );
}

