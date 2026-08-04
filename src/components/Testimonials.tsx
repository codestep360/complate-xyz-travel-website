import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Ananya Deshmukh',
      trip: 'Spiti Valley Circuit',
      rating: 5,
      date: 'July 2026',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      text: 'As a solo female traveler, safety was my biggest priority. xyztravel trip captains made me feel 100% comfortable! Stargazing at Chandratal Lake was magical.',
    },
    {
      name: 'Rohan Mehta',
      trip: 'Kasol & Kheerganga Trek',
      rating: 5,
      date: 'June 2026',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      text: 'Best weekend getaway ever! Bonfires, acoustic guitar sessions at the camp, hot spring bath at Kheerganga top, and awesome cafe recommendations in Kasol.',
    },
    {
      name: 'Priya & Vikram',
      trip: 'Bali Island & Pool Villa',
      rating: 5,
      date: 'May 2026',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
      text: 'Booked our honeymoon through xyztravel. The private pool villa in Seminyak and Nusa Penida speedboat tour were organized seamlessly without any glitch!',
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Real Travelers, Real Stories
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            Loved By 15,000+ Explorers
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Read authentic reviews from our wanderers across Google, Instagram & Tripadvisor.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 shadow-2xs relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <img
                  src={rev.image}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-300"
                />
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 flex items-center gap-1">
                    {rev.name}
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  </h4>
                  <p className="text-[10px] text-slate-500 font-semibold">
                    {rev.trip} • {rev.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
