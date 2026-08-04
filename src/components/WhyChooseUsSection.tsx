import React from 'react';
import { ShieldCheck, Eye, Users, HeartHandshake, PhoneCall, Sparkles } from 'lucide-react';
import { ColorTheme } from '../types';

interface WhyChooseUsSectionProps {
  currentTheme: ColorTheme;
  onConnectNowClick: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  currentTheme,
  onConnectNowClick,
}) => {
  const features = [
    {
      title: 'No Third Party Mess',
      desc: '100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!',
      icon: ShieldCheck,
    },
    {
      title: 'Transparency & Security',
      desc: 'Real time monitoring of all trips by ground team! All routes and weather conditions are accurately updated!',
      icon: Eye,
    },
    {
      title: 'Co-Travelers Filtering',
      desc: 'Multi-step filtering to bring only like-minded people together! That’s our key to have fuss-free trips!',
      icon: Users,
    },
    {
      title: 'One Stop Hassle Free Experience',
      desc: 'Comfortable stays, trained drivers, hospitable staff and friendly trip leaders put together that one memorable trip for you!',
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans space-y-12">
      
      {/* 1. HORIZONTAL ADVENTURE CONNECT BANNER */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-cyan-200">
        <div 
          className="h-36 sm:h-44 md:h-48 w-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00a8cc]/95 via-[#00a8cc]/80 to-transparent flex items-center justify-between px-6 sm:px-12 text-white">
          <div className="max-w-md">
            <h3 className="text-xl sm:text-3xl font-black text-white leading-tight">
              Dreaming of your next Adventure?
            </h3>
            <p className="text-xs sm:text-sm text-cyan-100 font-semibold mt-1">
              Hit us up! Our travel captains are ready to help you plan.
            </p>
          </div>

          <div>
            <button
              onClick={onConnectNowClick}
              className="px-6 py-3 rounded-full bg-yellow-400 text-slate-900 font-extrabold text-xs sm:text-sm shadow-lg hover:bg-yellow-300 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-slate-900" />
              <span>Connect Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. WHY xyztravel FEATURES GRID */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why xyztravel?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl mx-auto">
            We build lifelong friendships through seamlessly planned community journeys
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-6 border border-cyan-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
              >
                {/* Decorative background curve line */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full border-2 border-cyan-200/50 pointer-events-none group-hover:scale-125 transition-transform" />

                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#00a8cc] flex items-center justify-center mb-4 border border-cyan-100 group-hover:bg-[#00a8cc] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-extrabold text-base text-[#00a8cc] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
