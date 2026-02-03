'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MusicPlayer } from './MusicPlayer';
import { FullscreenMusicPlayer } from './FullscreenMusicPlayer';
import { songs } from '@/data/songs';
import type { Song, LyricLine } from '@/data/songs';


export function MusicSection() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [showPlayer, setShowPlayer] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleSongClick = (index: number) => {
    setCurrentSongIndex(index);
    setShowPlayer(true);
    setIsPlaying(true);
  };

  const handleFullscreen = () => {
    setIsFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.error('Play failed:', err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleClosePlayer = () => {
    setShowPlayer(false);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <>
      <section 
        id="music" 
        className="relative min-h-screen bg-black overflow-hidden py-20"
      >
        {/* Animated Floating Gradient Orbs */}
        {/* Waveform Animation Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
          <div className="flex items-center gap-1.5 md:gap-3 h-64">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 md:w-3 bg-gradient-to-t from-primary-teal/40 via-primary-cyan to-primary-teal/40 rounded-full shadow-[0_0_15px_rgba(20,184,166,0.5)]"
                animate={{
                  height: [
                    "15%",
                    `${Math.random() * 60 + 30}%`,
                    "15%"
                  ]
                }}
                transition={{
                  duration: 1.2 + Math.random() * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1,
                  repeatType: "reverse"
                }}
              />
            ))}
            {/* Center Peak Bars (Taller) */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`center-${i}`}
                className="w-1.5 md:w-3 bg-gradient-to-t from-primary-teal/60 via-white to-primary-teal/60 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                animate={{
                  height: [
                    "30%",
                    `${Math.random() * 70 + 60}%`,
                    "30%"
                  ]
                }}
                transition={{
                  duration: 0.8 + Math.random() * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                  repeatType: "reverse"
                }}
              />
            ))}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`right-${i}`}
                className="w-1.5 md:w-3 bg-gradient-to-t from-primary-teal/40 via-primary-cyan to-primary-teal/40 rounded-full shadow-[0_0_15px_rgba(20,184,166,0.5)]"
                animate={{
                  height: [
                    "15%",
                    `${Math.random() * 60 + 30}%`,
                    "15%"
                  ]
                }}
                transition={{
                  duration: 1.2 + Math.random() * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1,
                  repeatType: "reverse"
                }}
              />
            ))}
          </div>
        </div>

        {/* Stars Background with subtle animation */}
        <motion.div 
          animate={{
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px]"
        />

        {/* Background Text */}
        <div className="bg-text top-20 left-1/2 -translate-x-1/2 opacity-5">MUSIC</div>

        <div className="container-custom relative z-10 px-4">
          {/* Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-display mb-4">
              <span className="text-solid-bold">MY FAV</span>{' '}
              <span className="text-outline-bold text-primary-teal">SONG</span>
            </h2>
          </motion.div>

          {/* Album Grid - Simple and directly visible */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
              {songs.map((song, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleSongClick(index)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group cursor-pointer relative"
                >
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary-teal/30 to-primary-cyan/30">
                    {/* Album Cover */}
                    <img
                      src={song.cover}
                      alt={song.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    
                    {/* Hover Overlay with Play Icon and Title */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-300 flex flex-col items-center justify-center p-4">
                      {/* Play Icon */}
                      <svg
                        className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      
                      {/* Title and Artist - Only on Hover */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        <h3 className="font-semibold text-white text-sm line-clamp-2 mb-1">
                          {song.title}
                        </h3>
                        <p className="text-xs text-gray-300 line-clamp-1">
                          {song.artist}
                        </p>
                      </div>
                    </div>

                    {/* Glow on hover */}
                    <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-primary-teal to-primary-cyan blur-lg -z-10" />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Music Player at Bottom */}
      {showPlayer && !isFullscreen && (
        <MusicPlayer
          songs={songs}
          currentIndex={currentSongIndex}
          onSongChange={setCurrentSongIndex}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
          onFullscreen={handleFullscreen}
          onClose={handleClosePlayer}
        />
      )}

      {/* Fullscreen Music Player */}
      {isFullscreen && (
        <FullscreenMusicPlayer
          songs={songs}
          currentIndex={currentSongIndex}
          isPlaying={isPlaying}
          onClose={handleCloseFullscreen}
          onSongChange={setCurrentSongIndex}
          onPlayPause={handlePlayPause}
          audioRef={audioRef}
        />
      )}

      {/* Hidden Audio Element - Stays mounted for continuous playback */}
      {showPlayer && (
        <audio 
          ref={audioRef} 
          src={songs[currentSongIndex].audio} 
          preload="metadata" 
        />
      )}
    </>
  );
}
