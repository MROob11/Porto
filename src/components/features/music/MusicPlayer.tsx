'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaVolumeUp } from 'react-icons/fa';
import { Maximize, X } from 'lucide-react';

interface Song {
  title: string;
  artist: string;
  cover: string;
  audio: string;
}

interface MusicPlayerProps {
  songs: Song[];
  currentIndex: number;
  onSongChange: (index: number) => void;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  onFullscreen?: () => void;
  onClose?: () => void;
}

export function MusicPlayer({ songs, currentIndex, onSongChange, isPlaying, setIsPlaying, audioRef, onFullscreen, onClose }: MusicPlayerProps) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  const currentSong = songs[currentIndex];

  useEffect(() => {
    if (!audioRef.current) return;
    
    const audio = audioRef.current;
    audio.volume = volume;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => handleNext();

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentIndex]);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(err => console.error('Play failed:', err));
    }
  }, [currentIndex]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.error('Play failed:', err));
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : songs.length - 1;
    onSongChange(newIndex);
    setIsPlaying(true);
  };

  const handleNext = () => {
    const newIndex = currentIndex < songs.length - 1 ? currentIndex + 1 : 0;
    onSongChange(newIndex);
    setIsPlaying(true);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-2 md:bottom-0 left-0 right-0 z-50 px-2 md:px-0"
      >
        <div className="bg-gradient-to-t from-black via-zinc-900 to-zinc-900/95 backdrop-blur-xl border border-white/10 md:border-t md:border-x-0 md:border-b-0 rounded-t-2xl md:rounded-none"
        >
        <div className="container-custom py-3 md:py-4 px-4 relative">
          {/* Close Button - Visible on all devices */}
          {onClose && (
            <button
              onClick={onClose}
              className="absolute -top-2 md:top-4 right-2 md:right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
              aria-label="Close player"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          )}
          
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
            {/* Album Art & Info */}
            <div className="flex items-center gap-3 md:gap-4 flex-shrink-0 md:w-64">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={currentSong.cover}
                  alt={currentSong.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-semibold text-white truncate text-sm">
                  {currentSong.title}
                </h4>
                <p className="text-xs text-gray-400 truncate">
                  {currentSong.artist}
                </p>
              </div>
              {onFullscreen && (
                <button
                  onClick={onFullscreen}
                  className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  aria-label="Fullscreen"
                >
                  <Maximize size={18} />
                </button>
              )}
            </div>

            {/* Controls */}
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={handlePrevious}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                  aria-label="Previous"
                >
                  <FaStepBackward size={18} />
                </button>
                
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-primary-teal hover:bg-primary-teal/80 transition-colors flex items-center justify-center text-white"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} className="ml-0.5" />}
                </button>

                <button
                  onClick={handleNext}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                  aria-label="Next"
                >
                  <FaStepForward size={18} />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400 w-10 text-right">
                  {formatTime(currentTime)}
                </span>
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="flex-1 h-1 bg-gray-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-teal hover:[&::-webkit-slider-thumb]:bg-primary-teal/80"
                  style={{
                    background: `linear-gradient(to right, #14b8a6 0%, #14b8a6 ${(currentTime / duration) * 100}%, #374151 ${(currentTime / duration) * 100}%, #374151 100%)`
                  }}
                />
                <span className="text-xs text-gray-400 w-10">
                  {formatTime(duration)}
                </span>
              </div>
            </div>

            {/* Volume */}
            <div className="hidden md:flex items-center gap-2 flex-shrink-0 w-32">
              <FaVolumeUp className="text-gray-400" size={18} />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="flex-1 h-1 bg-gray-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-teal"
              />
            </div>
            </div>
          </div>
        </div>
      </motion.div>
  );
}
