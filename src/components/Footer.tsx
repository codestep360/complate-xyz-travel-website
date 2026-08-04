import React from 'react';
import { Compass, Phone, Mail, MapPin, Instagram, Facebook, Youtube, Heart } from 'lucide-react';
import { ColorTheme } from '../types';

interface FooterProps {
  currentTheme: ColorTheme;
  onSelectCategory: (cat: string) => void;
  onOpenCustomTrip: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentTheme,
  onSelectCategory,
  onOpenCustomTrip,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center text-white"
                style={{ backgroundColor: currentTheme.primaryHex }}
              >
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Wander<span style={{ color: currentTheme.primaryHex }}>On</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              India’s premier travel tech community organizing group road trips, snow treks, and international escapes for modern explorers.
            </p>

            <div className="flex items-center space-x-3 text-slate-400">
              <a href="#" className="p-2 rounded-xl bg-slate-900 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-slate-900 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-slate-900 hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore Destinations
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => onSelectCategory('Road Trip')} className="hover:text-white transition-colors">
                  Spiti Valley Road Trip
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Weekend Getaway')} className="hover:text-white transition-colors">
                  Kasol & Kheerganga
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Himalayan Trek')} className="hover:text-white transition-colors">
                  Kedarkantha Snow Trek
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Road Trip')} className="hover:text-white transition-colors">
                  Leh Ladakh Expedition
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('International')} className="hover:text-white transition-colors">
                  Bali Tropical Package
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Trip Styles
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => onSelectCategory('Weekend Getaway')} className="hover:text-white transition-colors">
                  Weekend Getaways
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Himalayan Trek')} className="hover:text-white transition-colors">
                  Himalayan Treks
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('International')} className="hover:text-white transition-colors">
                  International Vacations
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Honeymoon')} className="hover:text-white transition-colors">
                  Honeymoon Packages
                </button>
              </li>
              <li>
                <button onClick={onOpenCustomTrip} className="hover:text-amber-400 transition-colors font-bold text-slate-300">
                  ✨ Custom Corporate & Group Trips
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact Trip Captains
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91 99999 99999 / +91 88888 88888</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>hello@xyztravel-clone.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Plot 42, Cyber City, Phase III, Gurugram, Haryana 122002</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500">
          <p>© 2026 xyztravel Clone Portal. Designed for Travel Enthusiasts.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> in React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};
