import React, { useState } from 'react';
import { Search, Phone, Palette, Sparkles, ChevronDown, Menu, X, MapPin } from 'lucide-react';
import { ColorTheme } from '../types';

interface HeaderProps {
  currentTheme: ColorTheme;
  onOpenThemeModal: () => void;
  onOpenCustomTripModal: () => void;
  onSelectCategory: (category: string) => void;
  activeCategory: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTheme,
  onOpenThemeModal,
  onOpenCustomTripModal,
  onSelectCategory,
  activeCategory,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const topNavLinks = [
    { name: 'Ladakh with Cherry', category: 'India Trips' },
    { name: 'Upcoming Trips 📅', category: 'Upcoming Trips' },
    { name: 'Corporate Tours', category: 'Corporate Tours' },
    { name: 'Blogs', category: 'Blogs' },
    { name: 'About Us', category: 'About Us' },
  ];

  const secondaryCategories = [
    {
      title: 'International Trips',
      id: 'International Trips',
      hasDropdown: true,
      items: ['Europe', 'Vietnam', 'Bali', 'Thailand', 'Japan', 'Kenya', 'Sri Lanka', 'Dubai', 'Malaysia', 'Kazakhstan'],
    },
    {
      title: 'India Trips',
      id: 'India Trips',
      hasDropdown: true,
      items: ['Leh Ladakh', 'Spiti Valley', 'Kashmir', 'Meghalaya', 'Zanskar', 'Himachal Pradesh', 'Sikkim', 'Kerala', 'Rajasthan'],
    },
    {
      title: 'Group Tours',
      id: 'Group Tours',
      hasDropdown: true,
      items: ['Weekend Getaways', 'Himalayan Treks', 'Biking Expeditions', 'Backpacking Trips'],
    },
    {
      title: 'Events & Festivals',
      id: 'Events & Festivals',
      hasDropdown: false,
    },
    {
      title: 'Weekend Getaways',
      id: 'Weekend Getaways',
      hasDropdown: false,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xs font-sans">
      {/* 1. TOP MAIN HEADER BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-3">

          {/* Logo */}
          <div
            onClick={() => onSelectCategory('All')}
            className="flex items-center gap-2 cursor-pointer group shrink-0"
          >
            <div className="relative w-10 h-10 rounded-full bg-[#00a8cc] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <MapPin className="w-6 h-6 text-yellow-300 fill-yellow-300" />
              <span className="absolute text-[10px] font-black text-slate-900 mt-[-2px]">W</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#00a8cc] leading-none uppercase">
                XYZTRAVEL<span className="text-yellow-500">ON</span>
              </span>
              <span className="text-[9px] font-bold text-slate-400 tracking-widest uppercase">
                EXPLORE THE UNEXPLORED
              </span>
            </div>
          </div>

          {/* Search Bar - Pill Design */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Where do you want to go?"
                className="w-full py-2.5 pl-5 pr-12 rounded-full border-2 border-[#00a8cc] text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00a8cc]/30 shadow-2xs"
              />
              <button
                onClick={() => onSelectCategory('All')}
                className="absolute right-1.5 p-1.5 rounded-full bg-[#00a8cc] text-white hover:bg-[#0091b0] transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Top Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-5 text-xs font-semibold text-slate-700">
            {topNavLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => onSelectCategory(link.category)}
                className="hover:text-[#00a8cc] transition-colors whitespace-nowrap"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Call Us Button & Theme Customizer */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">


            <a
              href="tel:+918130288566"
              className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#00a8cc] text-[#00a8cc] text-xs font-bold hover:bg-[#00a8cc] hover:text-white transition-all shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>+91-8130288566</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenThemeModal}
              className="p-2 rounded-lg bg-slate-100 text-slate-700"
            >
              <Palette className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#00a8cc] text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Search Bar */}
        <div className="mt-2.5 md:hidden">
          <div className="relative w-full flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Where do you want to go?"
              className="w-full py-2 pl-4 pr-10 rounded-full border border-[#00a8cc] text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
            />
            <button className="absolute right-1 p-1 rounded-full bg-[#00a8cc] text-white">
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. SECONDARY CYAN CATEGORIES NAVBAR */}
      <div className="bg-[#00a8cc] text-white shadow-md relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-start gap-4 sm:gap-8 overflow-visible py-2.5 text-xs font-bold tracking-wide flex-wrap sm:flex-nowrap">
            {secondaryCategories.map((cat) => (
              <div
                key={cat.title}
                className="relative shrink-0"
                onMouseEnter={() => setActiveDropdown(cat.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => onSelectCategory(cat.id)}
                  className={`flex items-center gap-1 hover:text-yellow-300 transition-colors py-1 ${activeCategory === cat.id ? 'text-yellow-300 border-b-2 border-yellow-300' : ''
                    }`}
                >
                  <span>{cat.title}</span>
                  {cat.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-80" />}
                </button>

                {/* Hover Dropdown */}
                {cat.hasDropdown && activeDropdown === cat.title && (
                  <div className="absolute left-0 top-full mt-1 w-52 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-100 py-2 z-[100] animate-fadeIn">
                    {cat.items?.map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          onSelectCategory(item);
                          setActiveDropdown(null);
                        }}
                        className="w-full text-left px-4 py-2 text-xs font-semibold hover:bg-cyan-50 hover:text-[#00a8cc] transition-colors flex items-center justify-between"
                      >
                        <span>{item}</span>
                        <span className="text-[10px] font-bold text-slate-400">→</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700">
            {topNavLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  onSelectCategory(link.category);
                  setMobileMenuOpen(false);
                }}
                className="p-2 bg-slate-50 rounded-lg text-left hover:bg-cyan-50 hover:text-[#00a8cc]"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-2">


            <a
              href="tel:+918130288566"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-[#00a8cc] text-white"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Us: +91-8130288566</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
