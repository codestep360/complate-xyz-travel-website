import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Sparkles, Star, Search, MapPin, Video } from 'lucide-react';
import { ColorTheme } from '../types';

interface HeroVideoSectionProps {
  currentTheme: ColorTheme;
  onExploreClick: () => void;
}

export const HeroVideoSection: React.FC<HeroVideoSectionProps> = ({
  currentTheme,
  onExploreClick,
}) => {
  const [typedText, setTypedText] = useState('');
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullText = 'Discover the World with WanderOn';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        index = 0;
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  // Guarantee video playback on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Autoplay prevented by browser:', err);
        setIsPlaying(false);
      });
    }
  }, []);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      }
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 font-sans">
      {/* VIDEO BANNER OVERLAY CONTAINER */}
      <div className="relative h-[380px] sm:h-[460px] md:h-[520px] w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Video (YouTube Embed Loop for Guaranteed Playback) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <iframe
            src="
https://www.youtube-nocookie.com/embed/3JZ_D3ELwOQ?autoplay=1&mute=1&loop=1&playlist=3JZ_D3ELwOQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1"
            title="XYZtravel Hero Travel Video"
            className="absolute top-1/2 left-1/2 w-[180%] h-[180%] -translate-x-1/2 -translate-y-1/2 object-cover opacity-85 pointer-events-none border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        {/* HTML5 Backup Video (if iframe is restricted) */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="hidden absolute inset-0 w-full h-full object-cover opacity-85"
          poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            type="video/mp4"
          />
        </video>

 

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-slate-950/30" />

        {/* Content Box */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-yellow-300 border border-white/30 mb-4 animate-bounce">
            <Sparkles className="w-3.5 h-3.5" />
            <span>India & International Community Trips</span>
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight drop-shadow-md text-white">
            Global Community of Travelers
          </h1>

          <div className="mt-3 h-8 text-lg sm:text-2xl font-bold text-yellow-400 font-mono">
            <span>{typedText}</span>
            <span className="animate-pulse">|</span>
          </div>

          {/* Quick Search CTA Box */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-yellow-400 text-slate-900 font-black text-sm shadow-xl hover:bg-yellow-300 transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4 text-slate-900" />
              <span>Explore All Trips & Packages</span>
            </button>
          </div>
        </div>
      </div>

      {/* SOCIAL ACCOUNTS REVIEWS BAR (Google, TripAdvisor, Facebook) */}
      <div className="bg-[#e6f7fa] border-t border-b border-cyan-100 py-3 px-4 shadow-inner">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-around gap-4 text-slate-800 text-xs sm:text-sm font-semibold">
          
          {/* Google Review */}
          <div className="flex items-center gap-2.5 bg-white px-4 py-2 rounded-full shadow-2xs border border-slate-200">
            {/* Google Logo */}
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-extrabold text-slate-900">4.9</span>
              <span className="text-slate-500 text-xs">(15,263 reviews)</span>
            </div>
          </div>

          {/* TripAdvisor Review */}
          <div className="flex items-center gap-2.5 bg-white px-4 py-2 rounded-full shadow-2xs border border-slate-200">
            {/* TripAdvisor Logo (Owl eyes) */}
            <div className="w-5 h-5 rounded-full bg-[#00AF87] flex items-center justify-center text-white font-black text-[10px]">
              🦉
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-extrabold text-slate-900">5.0</span>
              <span className="text-slate-500 text-xs">(4,213 reviews)</span>
            </div>
          </div>

          {/* Facebook Review */}
          <div className="flex items-center gap-2.5 bg-white px-4 py-2 rounded-full shadow-2xs border border-slate-200">
            {/* Facebook Logo */}
            <div className="w-5 h-5 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-black text-xs">
              f
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-extrabold text-slate-900">4.9</span>
              <span className="text-slate-500 text-xs">(1,123 reviews)</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
