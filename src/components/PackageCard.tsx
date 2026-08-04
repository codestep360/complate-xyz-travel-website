import React from 'react';
import { Clock, MapPin, Star, Calendar, ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
import { TravelPackage, ColorTheme } from '../types';

interface PackageCardProps {
  pkg: TravelPackage;
  currentTheme: ColorTheme;
  onSelectPackage: (pkg: TravelPackage) => void;
  onQuickInquiry: (pkg: TravelPackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  pkg,
  currentTheme,
  onSelectPackage,
  onQuickInquiry,
}) => {
  const discountPercent = Math.round(
    ((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100
  );

  const nextBatch = pkg.batches[0];

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      
      {/* Top Image Banner */}
      <div className="relative aspect-4/3 overflow-hidden bg-slate-100 cursor-pointer" onClick={() => onSelectPackage(pkg)}>
        <img
          src={pkg.featuredImage}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

        {/* Badge */}
        {pkg.badge && (
          <div
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md backdrop-blur-xs"
            style={{ backgroundColor: currentTheme.primaryHex }}
          >
            {pkg.badge}
          </div>
        )}

        {/* Duration Pill */}
        <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/20">
          <Clock className="w-3 h-3 text-amber-400" />
          <span>{pkg.duration}</span>
        </div>

        {/* Bottom Image Overlay Details */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-1 font-semibold text-slate-100 drop-shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate max-w-[180px]">{pkg.destination}</span>
          </div>

          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/10">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="font-bold">{pkg.rating}</span>
            <span className="text-[10px] text-slate-300">({pkg.reviewsCount})</span>
          </div>
        </div>
      </div>

      {/* Package Body Info */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3
            onClick={() => onSelectPackage(pkg)}
            className="text-base font-extrabold text-slate-900 line-clamp-2 cursor-pointer hover:text-amber-600 transition-colors leading-snug"
          >
            {pkg.title}
          </h3>

          {/* Highlights Chips */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {pkg.highlights.slice(0, 3).map((item, idx) => (
              <span
                key={idx}
                className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80 flex items-center gap-1 truncate max-w-[200px]"
              >
                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                <span>{item}</span>
              </span>
            ))}
          </div>

          {/* Next Upcoming Batch */}
          {nextBatch && (
            <div className="mt-4 p-2.5 bg-amber-50/60 rounded-xl border border-amber-200/60 flex items-center justify-between text-xs text-amber-900">
              <div className="flex items-center gap-1.5 font-semibold">
                <Calendar className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Next Batch: {nextBatch.startDate}</span>
              </div>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-200/80 text-amber-900">
                {nextBatch.availableSeats} seats left
              </span>
            </div>
          )}
        </div>

        {/* Pricing & CTA */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black text-slate-900">
                ₹{pkg.price.toLocaleString()}
              </span>
              <span className="text-xs text-slate-400 line-through">
                ₹{pkg.originalPrice.toLocaleString()}
              </span>
            </div>
            <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">
              Save {discountPercent}% • Per Person
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onSelectPackage(pkg)}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              Itinerary
            </button>
            <button
              onClick={() => onQuickInquiry(pkg)}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-white shadow-xs transition-all flex items-center gap-1"
              style={{ backgroundColor: currentTheme.primaryHex }}
            >
              <span>Book</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
