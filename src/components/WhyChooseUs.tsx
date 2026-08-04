import React from 'react';
import { ShieldCheck, HeartHandshake, MapPin, Award, Compass, Users2 } from 'lucide-react';
import { ColorTheme } from '../types';

interface WhyChooseUsProps {
  currentTheme: ColorTheme;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ currentTheme }) => {
  const features = [
    {
      icon: ShieldCheck,
      title: '100% Safe for Solo Females',
      description: 'Dedicated female trip captains, verified hotel stays, and 24x7 emergency backup on all group tours.',
    },
    {
      icon: HeartHandshake,
      title: 'Experienced Trip Captains',
      description: 'Passionate local leaders, mountaineers, and storytelling hosts who turn strangers into lifelong friends.',
    },
    {
      icon: MapPin,
      title: 'Handpicked Authentic Stays',
      description: 'Carefully vetted boutique homestays, Swiss luxury tents, and riverside resorts with breathtaking views.',
    },
    {
      icon: Award,
      title: 'Transparent Pricing',
      description: 'Zero hidden fees or forced commercial stops. What you see on the itinerary is exactly what you get.',
    },
    {
      icon: Users2,
      title: 'Gen-Z & Youth Community',
      description: 'Vibrant, like-minded group travelers aged 18-35. Acoustic bonfires, stargazing, and memory making.',
    },
    {
      icon: Compass,
      title: 'Customizable Private Trips',
      description: 'Tailor-made itineraries for families, couples, corporate offsites, and college reunion batches.',
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Why Travel With Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            The xyztravel Advantage
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            We don’t sell generic packages — we curate unforgettable Himalayan memories and tropical adventures.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4 shadow-sm"
                  style={{ backgroundColor: currentTheme.primaryHex }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">{feat.title}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{feat.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
