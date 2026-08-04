import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroVideoSection } from './components/HeroVideoSection';
import { PosterBanner } from './components/PosterBanner';
import { DestinationsCarousel, DestinationCardItem } from './components/DestinationsCarousel';
import { UpcomingCommunityTrips } from './components/UpcomingCommunityTrips';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { JourneyInFramesSection } from './components/JourneyInFramesSection';
import { AdminVideoSection } from './components/AdminVideoSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';
import { FloatingWidgets } from './components/FloatingWidgets';

import { PackageCard } from './components/PackageCard';
import { PackageDetailModal } from './components/PackageDetailModal';
import { ThemeSwitcherModal } from './components/ThemeSwitcherModal';
import { CustomTripModal } from './components/CustomTripModal';

import { TRAVEL_PACKAGES, COLOR_THEMES } from './data/packages';
import { TravelPackage, ColorTheme } from './types';
import { ArrowUpDown, SlidersHorizontal, Sparkles } from 'lucide-react';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<ColorTheme>(COLOR_THEMES[0]);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [isCustomTripModalOpen, setIsCustomTripModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);

  // Filters & Navigation state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'popular' | 'priceAsc' | 'priceDesc' | 'rating'>('popular');

  // India Trips Cards Data
  const indiaTripsCards: DestinationCardItem[] = [
    {
      id: 'ind-1',
      name: 'Leh Ladakh',
      startingPrice: '₹15,800',
      image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ind-2',
      name: 'Spiti Valley',
      startingPrice: '₹17,999',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ind-3',
      name: 'Kashmir',
      startingPrice: '₹24,499',
      image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ind-4',
      name: 'Meghalaya',
      startingPrice: '₹13,499',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ind-5',
      name: 'Zanskar',
      startingPrice: '₹9,499',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ind-6',
      name: 'Himachal',
      startingPrice: '₹7,999',
      image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ind-7',
      name: 'Sikkim',
      startingPrice: '₹21,499',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ind-8',
      name: 'Kerala',
      startingPrice: '₹14,999',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    },
  ];

  // International Trips Cards Data
  const internationalTripsCards: DestinationCardItem[] = [
    {
      id: 'intl-1',
      name: 'Europe',
      startingPrice: '₹89,990',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'intl-2',
      name: 'Vietnam',
      startingPrice: '₹34,999',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'intl-3',
      name: 'Bali',
      startingPrice: '₹22,500',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'intl-4',
      name: 'Thailand',
      startingPrice: '₹26,499',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'intl-5',
      name: 'Japan',
      startingPrice: '₹1,29,990',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'intl-6',
      name: 'Kenya',
      startingPrice: '₹1,49,990',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'intl-7',
      name: 'Sri Lanka',
      startingPrice: '₹32,999',
      image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
    },
  ];

  // Romantic Escapes Cards Data
  const romanticCards: DestinationCardItem[] = [
    {
      id: 'rom-1',
      name: 'Bali',
      startingPrice: '₹22,500',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'rom-2',
      name: 'Maldives',
      startingPrice: '₹60,599',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'rom-3',
      name: 'Singapore',
      startingPrice: '₹44,999',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'rom-4',
      name: 'Thailand',
      startingPrice: '₹26,499',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'rom-5',
      name: 'Vietnam',
      startingPrice: '₹34,999',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'rom-6',
      name: 'Kashmir',
      startingPrice: '₹24,499',
      image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'rom-7',
      name: 'Andaman',
      startingPrice: '₹34,999',
      image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
    },
  ];

  // Filtered packages
  const filteredPackages = useMemo(() => {
    return TRAVEL_PACKAGES.filter((pkg) => {
      // Search Query
      if (
        searchQuery &&
        !pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !pkg.destination.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !pkg.region.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'All') {
        if (selectedCategory === 'India Trips' && pkg.region === 'Southeast Asia') return false;
        if (selectedCategory === 'International Trips' && pkg.region !== 'Southeast Asia' && pkg.category !== 'International') return false;
        if (selectedCategory === 'Weekend Getaways' && pkg.category !== 'Weekend Getaway') return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'priceAsc') return a.price - b.price;
      if (sortBy === 'priceDesc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.reviewsCount - a.reviewsCount;
    });
  }, [searchQuery, selectedCategory, sortBy]);

  const handleSelectDestination = (destName: string) => {
    setSearchQuery(destName);
    const element = document.getElementById('packages-feed');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-cyan-100 selection:text-cyan-900">
      
      {/* 1. Header (Top Bar + Cyan Sub Navbar) */}
      <Header
        currentTheme={currentTheme}
        onOpenThemeModal={() => setIsThemeModalOpen(true)}
        onOpenCustomTripModal={() => setIsCustomTripModalOpen(true)}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        activeCategory={selectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 2. Hero Video Banner + Social Accounts Review Bar */}
      <HeroVideoSection
        currentTheme={currentTheme}
        onExploreClick={() => {
          const el = document.getElementById('packages-feed');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 3. Horizontal Small Banner Like a Poster */}


      {/* 4. India Trips Poster Banner + Cards Carousel */}
      <DestinationsCarousel
        title="India Trips"
        subtitle="A Journey Through Time, Colour And Culture"
        bgBannerImage="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1600&q=80"
        cards={indiaTripsCards}
        onSelectDestination={handleSelectDestination}
        onExploreCategory={() => setSelectedCategory('India Trips')}
      />

      {/* 5. International Trips Poster Banner + Cards Carousel */}
      <DestinationsCarousel
        title="International Trips"
        subtitle="Discover the world, one destination at a time"
        bgBannerImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80"
        cards={internationalTripsCards}
        onSelectDestination={handleSelectDestination}
        onExploreCategory={() => setSelectedCategory('International Trips')}
      />

      {/* 6. Upcoming Community Trips Section */}
      <div id="community-trips">
        <UpcomingCommunityTrips
          packages={TRAVEL_PACKAGES}
          currentTheme={currentTheme}
          onSelectPackage={(pkg) => setSelectedPackage(pkg)}
          onViewAllClick={() => setSelectedCategory('All')}
        />
      </div>

      {/* 7. Romantic Escapes Trips Poster Banner + Cards Carousel */}
      <DestinationsCarousel
        title="Romantic Escapes"
        subtitle="Where Forever Begins...Together!"
        bgBannerImage="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=80"
        cards={romanticCards}
        onSelectDestination={handleSelectDestination}
        onExploreCategory={() => setSelectedCategory('Honeymoon')}
      />

      {/* Main Packages Feed Section */}
      <main id="packages-feed" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        
        {/* Section Header Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#00a8cc]">
              Handcrafted Itineraries
            </span>
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
              <span>All Packages & Expeditions</span>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-100 text-[#00a8cc]">
                {filteredPackages.length} Available
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs text-xs font-semibold text-slate-700">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8cc]" />
              <span>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent font-bold text-slate-900 focus:outline-none cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Package Grid */}
        {filteredPackages.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                currentTheme={currentTheme}
                onSelectPackage={(p) => setSelectedPackage(p)}
                onQuickInquiry={(p) => setSelectedPackage(p)}
              />
            ))}
          </div>
        ) : (
          <div className="mt-8 text-center py-12 bg-white rounded-3xl border border-slate-200 p-8 max-w-md mx-auto shadow-xs">
            <SlidersHorizontal className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No trips match your search</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Try searching for a destination like "Spiti", "Ladakh", or "Bali".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 rounded-full text-xs font-bold bg-[#00a8cc] text-white"
            >
              Reset Search
            </button>
          </div>
        )}

      </main>

      {/* 8. Why Choose Us Section (Connect Banner + 4 Cards) */}
      <WhyChooseUsSection
        currentTheme={currentTheme}
        onConnectNowClick={() => setIsCustomTripModalOpen(true)}
      />

      {/* 9. Journey In Frames Section */}
      <JourneyInFramesSection />

      {/* 10. Video Section (Admin YouTube Video Post) */}
      <AdminVideoSection />

      {/* 11. Contact Section (Allow Us To Call You Back) */}
      <ContactSection />

      {/* 12. Footer Section */}
      <FooterSection
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 13. Floating Widgets (WhatsApp + Scroll To Top) */}
      <FloatingWidgets />

      {/* Modals */}
      <PackageDetailModal
        pkg={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        currentTheme={currentTheme}
      />

      <ThemeSwitcherModal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
        currentTheme={currentTheme}
        onSelectTheme={(theme) => setCurrentTheme(theme)}
        onCustomHexChange={(hex) =>
          setCurrentTheme((prev) => ({
            ...prev,
            primaryHex: hex,
            primaryClass: 'text-white',
          }))
        }
      />

      <CustomTripModal
        isOpen={isCustomTripModalOpen}
        onClose={() => setIsCustomTripModalOpen(false)}
        currentTheme={currentTheme}
      />

    </div>
  );
}
