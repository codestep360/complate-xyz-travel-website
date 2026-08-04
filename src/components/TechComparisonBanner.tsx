import React, { useState } from 'react';
import { Code2, CheckCircle2, AlertTriangle, ArrowRight, Layers, Zap, ShieldCheck, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export const TechComparisonBanner: React.FC = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner Top Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400">
                Developer Recommendation Guidance
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                React / Next.js  vs  PHP — Which one to choose for xyztravel Clone?
              </h2>
            </div>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors"
          >
            <span>{expanded ? 'Hide Tech Analysis' : 'Show Detailed Comparison'}</span>
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Expanded Tech Insights */}
        {expanded && (
          <div className="mt-8 space-y-8 animate-fade-in">
            
            {/* Verdict Highlight */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-900 border border-emerald-500/30 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-emerald-500 text-slate-950 font-black shrink-0 mt-0.5">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-emerald-400">
                  🏆 Final Recommendation: React / Next.js is 100% the Right Choice for xyztravel!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  xyztravel style websites rely heavily on <strong className="text-white">interactive package filtering</strong>, <strong className="text-white">smooth day-wise itinerary tabs</strong>, <strong className="text-white">live batch availability selectors</strong>, and <strong className="text-white">app-like mobile responsiveness</strong>. React/Next.js provides an ultra-fast, modern experience with ZERO full-page reloads.
                </p>
              </div>
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* React / Next.js Column */}
              <div className="p-6 rounded-3xl bg-slate-800/80 border border-emerald-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl">
                  Recommended Stack
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">⚛️</span>
                  <h3 className="text-lg font-black text-white">React / Next.js (Full-Stack)</h3>
                </div>

                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Instant Dynamic Filtering:</strong> Filter destinations, prices, and categories instantly without annoying browser page refreshes.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Smooth UI Animations:</strong> Fluid modals for itineraries, smooth day-by-day collapsible view, photo galleries & batch drawers.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Layers className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">SEO & High Speed (Next.js):</strong> Server-Side Rendering (SSR) & Static Generation gives top Google rank for "Spiti valley trip package".</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Reusable Component Architecture:</strong> Easily duplicate package cards, customize brand colors, or turn into React Native mobile app later!</span>
                  </li>
                </ul>
              </div>

              {/* PHP Column */}
              <div className="p-6 rounded-3xl bg-slate-800/40 border border-slate-700">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🐘</span>
                  <h3 className="text-lg font-black text-slate-300">PHP (WordPress / Laravel)</h3>
                </div>

                <ul className="space-y-3 text-xs text-slate-400">
                  <li className="flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-200">Page Reload Delay:</strong> Vanilla PHP reloads the entire page when switching categories or pages, feeling slower on mobile.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-200">Complex UI State:</strong> Managing complex state (like live theme preview, batch seat counter, custom trip builder) requires heavy jQuery or JS overlays on top of PHP.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-200">Where PHP is okay:</strong> Good only if you want an off-the-shelf WordPress theme with WooCommerce/Tourfic plugin for quick low-budget setup.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Practical Summary Note */}
            <div className="text-xs text-slate-400 bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p>
                💡 <strong className="text-white">Summary for your client project:</strong> Build the frontend in <strong className="text-amber-400">React + Vite / Next.js</strong> (just like this live demo) and backend API in <strong className="text-amber-400">Node.js (Express) or Firebase</strong>. It gives a premium, high-converting look!
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
