import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

export interface DestinationCardItem {
  id: string;
  name: string;
  startingPrice: string;
  image: string;
  categoryTag?: string;
}

interface DestinationsCarouselProps {
  title: string;
  subtitle: string;
  bgBannerImage: string;
  cards: DestinationCardItem[];
  onSelectDestination: (destinationName: string) => void;
  onExploreCategory: () => void;
}

export const DestinationsCarousel: React.FC<DestinationsCarouselProps> = ({
  title,
  subtitle,
  bgBannerImage,
  cards,
  onSelectDestination,
  onExploreCategory,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
        
        {/* POSTER BANNER HEADER */}
        <div 
          className="relative h-56 sm:h-64 w-full bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url('${bgBannerImage}')` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

          {/* Banner Text */}
          <div className="relative z-10 px-6 sm:px-12 text-white max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-md">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 font-medium drop-shadow-xs">
              {subtitle}
            </p>
            <button
              onClick={onExploreCategory}
              className="mt-4 px-6 py-2.5 rounded-xl bg-yellow-400 text-slate-900 font-black text-xs uppercase tracking-wider hover:bg-yellow-300 transition-all shadow-md active:scale-95"
            >
              Explore
            </button>
          </div>
        </div>

        {/* OVERLAPPING CARDS CAROUSEL */}
        <div className="relative -mt-20 z-20 pb-8 px-4 sm:px-8">
          
          {/* Scroll Navigation Controls */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 text-slate-800 shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all border border-slate-200"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => handleScroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 text-slate-800 shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all border border-slate-200"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-4 overflow-x-auto scrollbar-none py-4 px-2 scroll-smooth"
          >
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => onSelectDestination(card.name)}
                className="group relative shrink-0 w-48 sm:w-56 h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Bottom Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4 text-white">
                  <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight drop-shadow-sm group-hover:text-yellow-300 transition-colors">
                    {card.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-300 mt-0.5">
                    Starting Price <span className="text-yellow-400 font-bold">{card.startingPrice}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
