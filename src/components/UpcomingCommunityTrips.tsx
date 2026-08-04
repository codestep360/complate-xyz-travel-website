import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { TravelPackage, ColorTheme } from '../types';

interface UpcomingCommunityTripsProps {
  packages: TravelPackage[];
  currentTheme: ColorTheme;
  onSelectPackage: (pkg: TravelPackage) => void;
  onViewAllClick: () => void;
}

export const UpcomingCommunityTrips: React.FC<UpcomingCommunityTripsProps> = ({
  packages,
  currentTheme,
  onSelectPackage,
  onViewAllClick,
}) => {
  const months = [
    "AUG '26", "SEP '26", "OCT '26", "NOV '26", "DEC '26",
    "JAN '27", "FEB '27", "MAR '27", "APR '27", "MAY '27"
  ];

  const [selectedMonth, setSelectedMonth] = useState("AUG '26");
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -350 : 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans">
      {/* Header Row */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Upcoming Community Trips
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Group departs scheduled with top-rated trip captains
          </p>
        </div>

        <button
          onClick={onViewAllClick}
          className="flex items-center gap-1 text-xs font-extrabold text-[#00a8cc] hover:text-[#008ba9] transition-colors"
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Month Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-slate-200">
        {months.map((m) => {
          const isSelected = selectedMonth === m;
          return (
            <button
              key={m}
              onClick={() => setSelectedMonth(m)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${
                isSelected
                  ? 'bg-[#00a8cc] text-white border-[#00a8cc] shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-[#00a8cc]'
              }`}
            >
              {m}
            </button>
          );
        })}
      </div>

      {/* Trips Scroll List */}
      <div className="relative mt-6">
        
        {/* Navigation Arrows */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#00a8cc] text-white shadow-lg flex items-center justify-center hover:bg-[#008ba9] transition-transform active:scale-95"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => handleScroll('right')}
          className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#00a8cc] text-white shadow-lg flex items-center justify-center hover:bg-[#008ba9] transition-transform active:scale-95"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex items-stretch gap-5 overflow-x-auto scrollbar-none py-2 scroll-smooth"
        >
          {packages.map((pkg) => {
            const formattedPrice = pkg.price.toLocaleString('en-IN');
            const originalPriceFormatted = pkg.originalPrice.toLocaleString('en-IN');

            return (
              <div
                key={pkg.id}
                onClick={() => onSelectPackage(pkg)}
                className="group shrink-0 w-72 sm:w-80 rounded-2xl overflow-hidden bg-slate-950 text-white shadow-lg border border-slate-800 cursor-pointer flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                {/* Image & Price Badge */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={pkg.featuredImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Yellow Offer Price Badge */}
                  <div className="absolute top-3 left-3 bg-yellow-400 text-slate-950 px-3 py-1 rounded-full text-xs font-black shadow-md flex items-center gap-1.5">
                    <span className="line-through text-slate-700 font-bold text-[10px]">
                      ₹{originalPriceFormatted}
                    </span>
                    <span>₹{formattedPrice} Onwards</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <h3 className="font-extrabold text-sm text-white line-clamp-2 leading-snug group-hover:text-yellow-300 transition-colors">
                    {pkg.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 font-semibold text-cyan-300">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{pkg.duration}</span>
                      </span>
                      <span className="flex items-center gap-1 truncate text-slate-400">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{pkg.pickupLocation}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-slate-300 text-xs pt-1 border-t border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                      <span className="font-semibold text-yellow-300">
                        {pkg.batches[0]?.startDate || 'Upcoming Batches'}
                      </span>
                      {pkg.batches.length > 1 && (
                        <span className="text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                          +{pkg.batches.length - 1} batches
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
