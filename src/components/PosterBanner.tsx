import React from 'react';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';

interface PosterBannerProps {
  onExploreClick: () => void;
}

export const PosterBanner: React.FC<PosterBannerProps> = ({ onExploreClick }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-sans">
      <div 
        onClick={onExploreClick}
        className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-lg border border-cyan-200 transition-transform hover:scale-[1.01]"
      >
        {/* Background Image Banner */}
        <div 
          className="h-28 sm:h-36 md:h-40 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')`,
          }}
        />

        {/* Cyan Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00a8cc]/90 via-[#00a8cc]/70 to-emerald-600/80 flex items-center justify-between px-6 sm:px-12 text-white">
          <div className="max-w-xl">
            <div className="flex items-center gap-1.5 text-yellow-300 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1">
              <Compass className="w-4 h-4 animate-spin-slow" />
              <span>COMMUNITY EXPLORERS</span>
            </div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight text-white drop-shadow-sm uppercase">
              UPCOMING <span className="text-yellow-300 italic font-serif">Community</span> TRIPS
            </h2>
            <p className="hidden sm:block text-xs text-cyan-50 font-medium mt-1">
              Handpicked itineraries, like-minded co-travelers & certified trip captains!
            </p>
          </div>

          <div className="shrink-0">
            <button className="px-5 py-2.5 rounded-full bg-yellow-400 text-slate-900 font-extrabold text-xs sm:text-sm shadow-md hover:bg-yellow-300 transition-all flex items-center gap-1.5">
              <span>Explore Batches</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
