'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useCanvasScale } from '@/hooks/useCanvasScale';

const FRAME_COUNT = 192;

export function HeroSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { canvasRef, preloadImages, imagesRef } = useCanvasScale({
    frameCount: FRAME_COUNT,
    scrollProgress: 0,
    step: 6, // Load every 6th frame (192 -> 32 frames ~ 1.5MB)
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 0.8, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const mukhtarX = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const fadhlurrohmanX = useTransform(scrollYProgress, [0, 0.5], [0, 200]);

  useEffect(() => {
    preloadImages((progress) => {
      setLoadingProgress(progress);
      if (progress === 100) {
        setTimeout(() => setImagesLoaded(true), 300);
      }
    });
  }, [preloadImages]);

  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas || !containerRef.current) return;

    const drawFrame = (progress: number) => {
      const images = imagesRef.current;
      if (!images || images.length === 0) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const frameIndex = Math.min(
        images.length - 1,
        Math.floor(progress * images.length)
      );

      const img = images[frameIndex];
      if (!img || !img.complete) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const imgRatio = img.width / img.height;
      const canvasRatio = canvas.width / canvas.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (imgRatio > canvasRatio) {
        drawHeight = canvas.height;
        drawWidth = img.width * (canvas.height / img.height);
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      } else {
        drawWidth = canvas.width;
        drawHeight = img.height * (canvas.width / img.width);
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Redraw current frame
        drawFrame(scrollYProgress.get());
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const unsubscribe = scrollYProgress.on('change', (latest) => {
      requestAnimationFrame(() => drawFrame(latest));
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      unsubscribe();
    };
  }, [imagesLoaded, scrollYProgress, canvasRef, imagesRef]);

  return (
    <>
      {!imagesLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: loadingProgress === 100 ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-primary-teal mb-2">
                LOADING
              </h2>
              <p className="text-text-secondary text-sm tracking-widest">
                PORTFOLIO EXPERIENCE
              </p>
            </motion.div>

            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-teal to-primary-cyan"
                initial={{ width: '0%' }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <motion.p
              className="mt-4 text-2xl font-mono text-white"
              key={loadingProgress}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {loadingProgress}%
            </motion.p>
          </div>
        </motion.div>
      )}

      <div ref={containerRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          />

          <div className="absolute inset-0 bg-black/50 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-[2]" />

          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="relative z-10 h-full flex flex-col justify-center items-start container-custom"
          >
            <div className="mb-6">
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none mb-2"
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ x: mukhtarX }}
                transition={{ 
                  delay: 0.7, 
                  duration: 1.2,
                  type: "spring",
                  stiffness: 80
                }}
              >
                <span className="text-solid-bold block text-white font-black">
                  MUKHTAR
                </span>
              </motion.h1>
              
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-none"
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ x: fadhlurrohmanX }}
                transition={{ 
                  delay: 0.9, 
                  duration: 1.2,
                  type: "spring",
                  stiffness: 80
                }}
              >
                <span
                  className="block font-black"
                  style={{
                    WebkitTextStroke: '2px white',
                    color: 'transparent',
                  }}
                >
                  FADHLURROHMAN
                </span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="mb-12 relative"
            >
              <div className="text-lg md:text-xl font-bold tracking-[0.3em] flex">
                {"FULLSTACK".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      opacity: { delay: 1.1 + index * 0.1, duration: 0.3 },
                      y: { delay: 1.1 + index * 0.1, duration: 0.3 },
                      backgroundPosition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1.1 + index * 0.1
                      }
                    }}
                    style={{
                      display: 'inline-block',
                      background: 'linear-gradient(90deg, #14B8A6, #06B6D4, #14B8A6, #06B6D4)',
                      backgroundSize: '200% 100%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              
              <motion.div
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 blur-xl"
                style={{
                  background: 'linear-gradient(90deg, #14B8A6, #06B6D4)',
                  opacity: 0.4,
                  zIndex: -1,
                }}
              />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1.3, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="glass-effect px-6 py-4 rounded-lg border border-white/10 hover:border-primary-teal/50 transition-all cursor-pointer"
              >
                <motion.p 
                  className="text-xs text-text-secondary mb-1 uppercase tracking-wider"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  Location
                </motion.p>
                <motion.p 
                  className="text-white font-semibold"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                >
                  INDONESIA
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1.5, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="glass-effect px-6 py-4 rounded-lg border border-white/10 hover:border-primary-cyan/50 transition-all cursor-pointer"
              >
                <motion.p 
                  className="text-xs text-text-secondary mb-1 uppercase tracking-wider"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7 }}
                >
                  Current Role
                </motion.p>
                <motion.p 
                  className="text-white font-semibold"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                >
                  FULL STACK
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1.7, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="glass-effect px-6 py-4 rounded-lg bg-accent-orange/10 border border-accent-orange/30 hover:border-accent-orange/60 transition-all cursor-pointer relative overflow-hidden"
              >
                <motion.div
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-accent-orange/20 blur-xl"
                />
                
                <motion.p 
                  className="text-xs text-accent-orange/80 mb-1 uppercase tracking-wider relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.9 }}
                >
                  Status
                </motion.p>
                <motion.p 
                  className="text-accent-orange font-bold relative z-10 flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.0, duration: 0.5 }}
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-2 h-2 bg-accent-orange rounded-full inline-block"
                  />
                  AVAILABLE
                </motion.p>
              </motion.div>
            </div>

            <motion.a
              href="/documents/Mukhtar_Fadhlurrohman_ITSupport.pdf"
              download
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 1.9, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-orange to-primary-teal text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary-teal/50 transition-all group"
            >
              <svg 
                className="w-6 h-6 group-hover:-translate-y-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Resume</span>
            </motion.a>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 1 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-text-secondary uppercase tracking-widest">
                  Scroll
                </span>
                <div className="w-6 h-10 border-2 border-primary-teal/50 rounded-full flex justify-center p-2">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1 h-3 bg-primary-teal rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
