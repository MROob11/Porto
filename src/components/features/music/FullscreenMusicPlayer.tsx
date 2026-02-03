'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';

interface Song {
  title: string;
  artist: string;
  cover: string;
  audio: string;
  lyrics?: LyricLine[];
}

interface LyricLine {
  time: number;
  text: string;
}

interface FullscreenMusicPlayerProps {
  songs: Song[];
  currentIndex: number;
  isPlaying: boolean;
  onClose: () => void;
  onSongChange: (index: number) => void;
  onPlayPause: () => void;
  audioRef: React.RefObject<HTMLAudioElement>;
}

export function FullscreenMusicPlayer({
  songs,
  currentIndex,
  isPlaying,
  onClose,
  onSongChange,
  onPlayPause,
  audioRef,
}: FullscreenMusicPlayerProps) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [currentLyricIndex, setCurrentLyricIndex] = useState(-1);

  const currentSong = songs[currentIndex];
  const lyrics = currentSong.lyrics || [];

  // Audio time update with requestAnimationFrame for reliable sync
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let animationFrameId: number;
    
    const syncState = () => {
      if (!audio) return;
      
      // Force read current state
      const time = audio.currentTime || 0;
      const dur = audio.duration && !isNaN(audio.duration) ? audio.duration : 0;
      
      setCurrentTime(time);
      setDuration(dur);
      
      // Continue syncing
      animationFrameId = requestAnimationFrame(syncState);
    };

    // Start syncing immediately
    syncState();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [audioRef, currentIndex]);

  // Update current lyric based on time
  useEffect(() => {
    if (lyrics.length === 0) return;

    const currentIndex = lyrics.findIndex((line, idx) => {
      const nextLine = lyrics[idx + 1];
      return currentTime >= line.time && (!nextLine || currentTime < nextLine.time);
    });

    // if (currentIndex !== -1) {
      setCurrentLyricIndex(currentIndex);
    // }
  }, [currentTime, lyrics]);
  // Optimize waveform animation data
  const barData = useMemo(() => {
    return {
      left: [...Array(12)].map((_, i) => ({
        heights: ["20%", `${Math.random() * 50 + 20}%`, "20%"],
        duration: 0.8 + Math.random() * 0.5,
        delay: i * 0.1
      })),
      center: [...Array(6)].map((_, i) => ({
        heights: ["40%", `${Math.random() * 80 + 40}%`, "40%"],
        duration: 0.5 + Math.random() * 0.5,
        delay: i * 0.1
      })),
      right: [...Array(12)].map((_, i) => ({
        heights: ["20%", `${Math.random() * 50 + 20}%`, "20%"],
        duration: 0.8 + Math.random() * 0.5,
        delay: i * 0.1
      }))
    };
  }, []);


  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        onPlayPause();
      }
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onClose, onPlayPause]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : songs.length - 1;
    onSongChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < songs.length - 1 ? currentIndex + 1 : 0;
    onSongChange(newIndex);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black"
      >
        {/* Waveform Animation Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="flex items-center gap-2 md:gap-4 h-96">
            {/* Left Side */}
            {barData.left.map((bar, i) => (
              <motion.div
                key={`left-${i}`}
                className="w-2 md:w-3 bg-white/20 rounded-full"
                animate={isPlaying ? { height: bar.heights } : { height: "20%" }}
                transition={{
                  duration: bar.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: bar.delay,
                  repeatType: "reverse"
                }}
              />
            ))}
            
            {/* Center Peak */}
            {barData.center.map((bar, i) => (
              <motion.div
                key={`center-${i}`}
                className="w-2 md:w-4 bg-primary-teal rounded-full shadow-[0_0_20px_rgba(20,184,166,0.5)]"
                animate={isPlaying ? { height: bar.heights } : { height: "40%" }}
                transition={{
                  duration: bar.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: bar.delay,
                  repeatType: "reverse"
                }}
              />
            ))}

            {/* Right Side */}
            {barData.right.map((bar, i) => (
              <motion.div
                key={`right-${i}`}
                className="w-2 md:w-3 bg-white/20 rounded-full"
                animate={isPlaying ? { height: bar.heights } : { height: "20%" }}
                transition={{
                  duration: bar.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: bar.delay,
                  repeatType: "reverse"
                }}
              />
            ))}
          </div>
        </div>

        {/* Background Album Grid (Faded) */}
        <div className="absolute inset-0 flex items-center justify-center p-8 opacity-20 blur-sm pointer-events-none">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-6xl">
            {songs.map((song, idx) => (
              <div
                key={idx}
                className={`aspect-square rounded-lg overflow-hidden ${
                  idx === currentIndex ? 'opacity-0' : 'opacity-50'
                }`}
              >
                <img
                  src={song.cover}
                  alt={song.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content - Mobile optimized spacing */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 py-4 md:py-8">
          {/* Close Button - Larger and more accessible on mobile */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-3 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Close player"
          >
            <X className="w-7 h-7 md:w-6 md:h-6 text-white" />
          </button>

          {/* Album Art - Smaller on mobile */}
          <motion.div
            key={currentIndex}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-4 md:mb-8"
          >
            <div className="w-48 h-48 md:w-64 lg:w-80 md:h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={currentSong.cover}
                alt={currentSong.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 shadow-[0_0_100px_rgba(20,184,166,0.6)] rounded-2xl" />
          </motion.div>

          {/* Song Info - Smaller text on mobile */}
          <motion.div
            key={`info-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-4 md:mb-8 px-4"
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2 line-clamp-2">
              {currentSong.title}
            </h2>
            <p className="text-sm md:text-lg text-gray-400">{currentSong.artist}</p>
          </motion.div>

          {/* Lyrics Display - More compact on mobile */}
          {lyrics.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-4xl h-20 md:h-32 mb-4 md:mb-8 flex items-center justify-center relative px-4"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLyricIndex}
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative"
                >
                {currentLyricIndex === -1 || !lyrics[currentLyricIndex] ? (
                  <motion.span 
                    className="text-xl md:text-2xl text-primary-teal/60 font-medium flex items-center gap-3"
                    animate={{ 
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      ♫
                    </motion.span>
                    {currentSong.title}
                    <motion.span
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      ♫
                    </motion.span>
                  </motion.span>
                ) : (
                  <motion.div
                    key={currentLyricIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="text-center px-8"
                  >
                    <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-white" style={{
                      textShadow: '0 0 30px rgba(20, 184, 166, 0.5), 0 2px 4px rgba(0,0,0,0.5)'
                    }}>
                      {lyrics[currentLyricIndex]?.text}
                    </p>
                  </motion.div>
                )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}

          {/* Controls */}
          <div className="w-full max-w-2xl">
            {/* Progress Bar */}
            <div className="mb-6">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 
                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-teal 
                  [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
              />
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-center gap-6 mb-6">
              <button
                onClick={handlePrevious}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <SkipBack className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={onPlayPause}
                className="p-5 rounded-full bg-primary-teal hover:bg-primary-teal/80 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-white" />
                ) : (
                  <Play className="w-8 h-8 text-white ml-1" />
                )}
              </button>

              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <SkipForward className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-4 justify-center">
              <button onClick={toggleMute} className="text-white hover:text-primary-teal transition-colors">
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-32 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 
                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white 
                  [&::-webkit-slider-thumb]:cursor-pointer"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
