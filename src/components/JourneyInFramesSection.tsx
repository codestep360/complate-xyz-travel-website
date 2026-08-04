import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Camera, MapPin } from 'lucide-react';

export const JourneyInFramesSection: React.FC = () => {
  const frames = [
    {
      id: 'f1',
      location: 'Vietnam',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'f2',
      location: 'Dubai',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'f3',
      location: 'Bhutan',
      image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'f4',
      location: 'Kerala',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'f5',
      location: 'Meghalaya',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'f6',
      location: 'Uttarakhand',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'f7',
      location: 'Leh Ladakh',
      image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans overflow-hidden">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
          JOURNEY IN FRAMES
        </h2>
        <div className="w-16 h-1 bg-yellow-400 mx-auto my-2 rounded-full" />
        <p className="text-xs sm:text-sm text-slate-500 font-semibold italic">
          Pictures Perfect Moments
        </p>
      </div>

      {/* Gallery Slider */}
      <div className="relative">
        <button
          onClick={() => handleScroll('left')}
          className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#00a8cc] text-white shadow-xl flex items-center justify-center hover:bg-[#008ba9] transition-all border border-white"
          aria-label="Previous frame"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => handleScroll('right')}
          className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#00a8cc] text-white shadow-xl flex items-center justify-center hover:bg-[#008ba9] transition-all border border-white"
          aria-label="Next frame"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div
          ref={scrollRef}
          className="flex items-center gap-4 overflow-x-auto scrollbar-none py-4 scroll-smooth"
        >
          {frames.map((item, idx) => (
            <div
              key={item.id}
              className={`group relative shrink-0 w-52 sm:w-60 h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 border-2 border-white ${
                idx % 2 === 0 ? 'rotate-1' : '-rotate-1'
              }`}
            >
              <img
                src={item.image}
                alt={item.location}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold border border-white/30">
                  <MapPin className="w-3 h-3 text-yellow-400" />
                  <span>{item.location}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
