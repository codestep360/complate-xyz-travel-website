import React from 'react';
import { Mail, Phone, Globe, Facebook, Instagram, Linkedin, Youtube, ChevronUp } from 'lucide-react';

interface FooterSectionProps {
  onSelectCategory: (category: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onSelectCategory }) => {
  const internationalTrips = [
    'Europe', 'Bali', 'Vietnam', 'Thailand', 'Kazakhstan',
    'Singapore', 'Bhutan', 'Maldives', 'Dubai', 'Malaysia'
  ];

  const indiaTrips = [
    'Ladakh', 'Spiti Valley', 'Zanskar', 'Meghalaya', 'Kashmir',
    'Himachal Pradesh', 'Andaman', 'Kerala', 'Rajasthan', 'Nagaland'
  ];

  const xyztravelSpecial = [
    'Community Trips', 'Honeymoon Trips', 'Corporate Trips', 'Weekend Getaways'
  ];

  const quickLinks = [
    'About Us', 'Privacy Policy', 'Terms & Conditions', 'Customer Success & Support',
    'Pillar Sitemap', 'Blog Sitemap', 'Trip Sitemap', 'Disclaimer', 'Careers', 'Blogs', 'Investor Relations'
  ];

  return (
    <footer className="bg-[#0b191e] text-slate-300 font-sans pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          
          {/* Col 1: International Trips */}
          <div>
            <h4 className="font-extrabold text-white text-sm mb-4 tracking-wide">
              International Trips
            </h4>
            <ul className="space-y-2">
              {internationalTrips.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onSelectCategory(item)}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: India Trips */}
          <div>
            <h4 className="font-extrabold text-white text-sm mb-4 tracking-wide">
              India Trips
            </h4>
            <ul className="space-y-2">
              {indiaTrips.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onSelectCategory(item)}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: xyztravel Special */}
          <div>
            <h4 className="font-extrabold text-white text-sm mb-4 tracking-wide">
              xyztravel Special
            </h4>
            <ul className="space-y-2">
              {xyztravelSpecial.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onSelectCategory(item)}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div>
            <h4 className="font-extrabold text-white text-sm mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onSelectCategory(item)}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800" />

        {/* Corporate Info Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto text-xs text-slate-400">
          <h3 className="font-black text-white text-base tracking-wider uppercase">
            xyztravel EXPERIENCES PVT LTD
          </h3>
          <p className="font-mono text-[11px] text-slate-500">
            CIN-U63040HR2019PTC118957
          </p>
          <p className="text-slate-400">
            3rd Floor, Building No-436, Phase IV, Udyog Vihar, Sector-18, Gurugram, Haryana-122015
          </p>

          {/* Contacts Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-semibold text-white">
            <a href="mailto:hello@xyztravel.in" className="flex items-center gap-1.5 hover:text-cyan-400">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>hello@xyztravel.in</span>
            </a>
            <a href="tel:+918130288566" className="flex items-center gap-1.5 hover:text-cyan-400">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>+91-8130288566</span>
            </a>
            <a href="https://www.xyztravel.in" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>www.xyztravel.in</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#00a8cc] text-white flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#00a8cc] text-white flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#00a8cc] text-white flex items-center justify-center transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#00a8cc] text-white flex items-center justify-center transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          <p className="text-[11px] text-slate-500 pt-6">
            © {new Date().getFullYear()} xyztravel EXPERIENCES PVT LTD. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
