import React from 'react';
import { Search, MapPin, Calendar, DollarSign, Sparkles, ShieldCheck, Users, Star } from 'lucide-react';
import { ColorTheme, FilterState, CategoryType } from '../types';

interface HeroProps {
  currentTheme: ColorTheme;
  filters: FilterState;
  onFilterChange: (updated: Partial<FilterState>) => void;
  onResetFilters: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentTheme,
  filters,
  onFilterChange,
  onResetFilters,
}) => {
  const quickCategories: { label: string; value: CategoryType }[] = [
    { label: 'All Packages', value: 'All' },
    { label: 'Weekend Getaways', value: 'Weekend Getaway' },
    { label: 'Himalayan Treks', value: 'Himalayan Trek' },
    { label: 'International Tours', value: 'International' },
    { label: 'Road Trips', value: 'Road Trip' },
    { label: 'Honeymoon Specials', value: 'Honeymoon' },
  ];

  return (
    <div className="relative bg-slate-900 text-white overflow-hidden py-16 lg:py-24">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80"
          alt="Himalayan Mountain Landscape"
          className="w-full h-full object-cover opacity-25 filter blur-[1px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-amber-300 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>India’s Most Trusted Gen-Z Travel Community</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Unforgettable Road Trips, <br />
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r"
            style={{
              backgroundImage: `linear-gradient(to right, ${currentTheme.primaryHex}, #f59e0b)`,
            }}
          >
            Treks & International Escapes
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
          Handpicked itineraries, verified local stays, and certified trip leaders.
          Explore India’s finest destinations with cool like-minded travelers.
        </p>

        {/* Interactive Search & Filter Card */}
        <div className="mt-8 max-w-4xl mx-auto bg-white rounded-3xl p-4 sm:p-5 text-slate-800 shadow-2xl border border-slate-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            
            {/* Search Input */}
            <div className="relative">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 text-left px-1">
                Destination
              </label>
              <div className="flex items-center bg-slate-100 rounded-2xl px-3 py-2.5 border border-slate-200">
                <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Spiti, Kasol, Bali..."
                  value={filters.searchQuery}
                  onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
                  className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="relative">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 text-left px-1">
                Trip Style
              </label>
              <div className="flex items-center bg-slate-100 rounded-2xl px-3 py-2.5 border border-slate-200">
                <MapPin className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                <select
                  value={filters.category}
                  onChange={(e) => onFilterChange({ category: e.target.value as CategoryType })}
                  className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer"
                >
                  <option value="All">All Categories</option>
                  <option value="Weekend Getaway">Weekend Getaway</option>
                  <option value="Himalayan Trek">Himalayan Trek</option>
                  <option value="International">International</option>
                  <option value="Road Trip">Road Trip</option>
                  <option value="Honeymoon">Honeymoon</option>
                </select>
              </div>
            </div>

            {/* Duration Filter */}
            <div className="relative">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 text-left px-1">
                Duration
              </label>
              <div className="flex items-center bg-slate-100 rounded-2xl px-3 py-2.5 border border-slate-200">
                <Calendar className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                <select
                  value={filters.durationFilter}
                  onChange={(e) => onFilterChange({ durationFilter: e.target.value as any })}
                  className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer"
                >
                  <option value="All">Any Duration</option>
                  <option value="Short (1-3 Days)">Short (1-3 Days)</option>
                  <option value="Medium (4-6 Days)">Medium (4-6 Days)</option>
                  <option value="Long (7+ Days)">Long (7+ Days)</option>
                </select>
              </div>
            </div>

            {/* Search Submit Button */}
            <div className="flex items-end">
              <button
                onClick={() => {}}
                className="w-full flex items-center justify-center gap-2 h-[42px] rounded-2xl text-sm font-bold text-white shadow-md transition-all hover:brightness-110 active:scale-98"
                style={{ backgroundColor: currentTheme.primaryHex }}
              >
                <Search className="w-4 h-4" />
                <span>Find Trips</span>
              </button>
            </div>
          </div>

          {/* Budget Range Slider */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <DollarSign className="w-4 h-4 text-slate-400" />
              <span className="font-semibold text-slate-700">Max Budget:</span>
              <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-lg border border-slate-200">
                ₹{filters.maxPrice.toLocaleString()}
              </span>
              <input
                type="range"
                min={5000}
                max={50000}
                step={2500}
                value={filters.maxPrice}
                onChange={(e) => onFilterChange({ maxPrice: Number(e.target.value) })}
                className="w-32 accent-slate-800 cursor-pointer"
              />
            </div>

            {(filters.searchQuery || filters.category !== 'All' || filters.durationFilter !== 'All' || filters.maxPrice < 50000) && (
              <button
                onClick={onResetFilters}
                className="text-xs font-semibold text-rose-600 hover:underline"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Quick Category Chips */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {quickCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => onFilterChange({ category: cat.value })}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                filters.category === cat.value
                  ? 'bg-white text-slate-900 shadow-md scale-105 font-bold'
                  : 'bg-white/10 hover:bg-white/20 text-slate-200 backdrop-blur-xs border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Key Trust Stats Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-300 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xl font-extrabold text-white">15,000+</p>
              <p className="text-xs text-slate-400">Happy Travelers</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
              <Star className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xl font-extrabold text-white">4.9 / 5.0</p>
              <p className="text-xs text-slate-400">Google & Tripadvisor</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xl font-extrabold text-white">100% Safe</p>
              <p className="text-xs text-slate-400">Solo Female Friendly</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/20 text-rose-300 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xl font-extrabold text-white">50+ Destinations</p>
              <p className="text-xs text-slate-400">India & International</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
