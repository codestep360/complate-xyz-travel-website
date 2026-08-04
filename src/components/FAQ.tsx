import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Are these trips safe for solo female travelers?',
      a: 'Absolutely! More than 45% of our group travelers are solo female travelers. We assign certified trip captains, ensure female-friendly verified hotels/camps, and foster an inclusive group atmosphere.',
    },
    {
      q: 'What is the booking process and advance amount?',
      a: 'You can reserve your seat by paying a nominal 25% advance amount. The remaining balance can be paid 3 days prior to trip departure or upon arrival at the base city.',
    },
    {
      q: 'What is the cancellation and batch postponement policy?',
      a: 'We offer free batch postponement up to 7 days before departure. If a trip is cancelled due to natural weather/roadblock conditions, you receive a 100% trip voucher valid for 1 year.',
    },
    {
      q: 'Are meals included in the package?',
      a: 'Yes! All breakfast and dinner meals mentioned in the day-wise itinerary are included in standard packages. Lunch is generally kept flexible for cafe hopping during sightseeing.',
    },
    {
      q: 'Can we customize a package for a private group or corporate team?',
      a: 'Yes, we customize private road trips, honeymoons, and corporate offsites. Use our "Plan Custom Trip" button to send your exact requirements!',
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-amber-400 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-800/80 rounded-2xl border border-slate-700/80 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-white hover:text-amber-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-slate-700/50 pt-3">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
