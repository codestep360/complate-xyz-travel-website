import React, { useState } from 'react';
import { 
  X, MapPin, Clock, Star, Calendar, Check, XCircle, Send, 
  ChevronDown, ChevronUp, ShieldCheck, PhoneCall, Sparkles, User, Mail, MessageSquare 
} from 'lucide-react';
import { TravelPackage, ColorTheme, InquiryFormData } from '../types';

interface PackageDetailModalProps {
  pkg: TravelPackage | null;
  onClose: () => void;
  currentTheme: ColorTheme;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  pkg,
  onClose,
  currentTheme,
}) => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'batches'>('itinerary');
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [selectedBatchId, setSelectedBatchId] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    travelersCount: 2,
    preferredMonth: 'August 2026',
    cityOfOrigin: 'Delhi',
    notes: ''
  });

  React.useEffect(() => {
    if (pkg) {
      setSelectedImage(pkg.featuredImage);
      if (pkg.batches.length > 0) {
        setSelectedBatchId(pkg.batches[0].id);
      }
      setSubmitted(false);
    }
  }, [pkg]);

  if (!pkg) return null;

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    setSubmitted(true);

    // Option to auto-construct WhatsApp link
    const selectedBatch = pkg.batches.find(b => b.id === selectedBatchId);
    const message = `*Trip Inquiry for ${pkg.title}*%0A` +
      `Name: ${formData.fullName}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Travelers: ${formData.travelersCount}%0A` +
      `Origin: ${formData.cityOfOrigin}%0A` +
      `Batch Date: ${selectedBatch ? selectedBatch.startDate : formData.preferredMonth}`;

    setTimeout(() => {
      window.open(`https://wa.me/919999999999?text=${message}`, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl max-w-4xl w-full my-auto shadow-2xl border border-slate-100 overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Sticky Header Bar */}
        <div className="p-4 sm:px-6 bg-slate-900 text-white flex items-center justify-between shrink-0 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-slate-900">
                {pkg.category}
              </span>
              <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-400" />
                {pkg.destination}, {pkg.region}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-white mt-0.5 truncate max-w-xl">
              {pkg.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 space-y-6">
          
          {/* Main Photo & Thumbnails */}
          <div className="space-y-2">
            <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-slate-900 shadow-md">
              <img
                src={selectedImage || pkg.featuredImage}
                alt={pkg.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1.5 border border-white/20">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{pkg.duration}</span>
              </div>
            </div>

            {pkg.gallery.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {pkg.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      selectedImage === img ? 'border-amber-500 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Stats & Highlights */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <p className="text-slate-400 font-semibold">Pickup Location</p>
              <p className="font-bold text-slate-800">{pkg.pickupLocation}</p>
            </div>
            <div>
              <p className="text-slate-400 font-semibold">Rating</p>
              <p className="font-bold text-slate-800 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                {pkg.rating} / 5.0 ({pkg.reviewsCount} reviews)
              </p>
            </div>
            <div>
              <p className="text-slate-400 font-semibold">Package Price</p>
              <p className="font-bold text-slate-900 text-sm">
                ₹{pkg.price.toLocaleString()}{' '}
                <span className="text-[10px] text-slate-400 line-through font-normal">
                  ₹{pkg.originalPrice.toLocaleString()}
                </span>
              </p>
            </div>
            <div>
              <p className="text-slate-400 font-semibold">Solo Friendly</p>
              <p className="font-bold text-emerald-600 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Safe & Verified
              </p>
            </div>
          </div>

          {/* Overview Section */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Trip Overview
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {pkg.overview}
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <button
              onClick={() => setActiveTab('itinerary')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'itinerary'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Day-Wise Itinerary ({pkg.itinerary.length} Days)
            </button>
            <button
              onClick={() => setActiveTab('inclusions')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'inclusions'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Inclusions & Exclusions
            </button>
            <button
              onClick={() => setActiveTab('batches')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'batches'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Upcoming Batches ({pkg.batches.length})
            </button>
          </div>

          {/* Tab Content: Itinerary */}
          {activeTab === 'itinerary' && (
            <div className="space-y-3">
              {pkg.itinerary.map((day) => {
                const isExpanded = expandedDay === day.day;
                return (
                  <div
                    key={day.day}
                    className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-2xs"
                  >
                    <button
                      onClick={() => setExpandedDay(isExpanded ? null : day.day)}
                      className="w-full p-4 flex items-center justify-between text-left bg-slate-50/50 hover:bg-slate-100/80 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold text-white shrink-0"
                          style={{ backgroundColor: currentTheme.primaryHex }}
                        >
                          D{day.day}
                        </span>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                            {day.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 font-medium">
                            Stay: {day.stay} • Meals: {day.meals.join(', ')}
                          </p>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="p-4 pt-2 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                        <p>{day.description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Tab Content: Inclusions & Exclusions */}
          {activeTab === 'inclusions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200">
                <h4 className="font-extrabold text-emerald-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" /> What’s Included
                </h4>
                <ul className="space-y-2">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-rose-50/60 p-4 rounded-2xl border border-rose-200">
                <h4 className="font-extrabold text-rose-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-rose-600" /> What’s Excluded
                </h4>
                <ul className="space-y-2">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab Content: Batches */}
          {activeTab === 'batches' && (
            <div className="space-y-2">
              {pkg.batches.map((batch) => {
                const isSelected = selectedBatchId === batch.id;
                return (
                  <div
                    key={batch.id}
                    onClick={() => setSelectedBatchId(batch.id)}
                    className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                      isSelected
                        ? 'border-slate-900 bg-slate-50 ring-2 ring-slate-900/10'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-slate-500" />
                      <div>
                        <p className="text-xs font-bold text-slate-800">
                          {batch.startDate} – {batch.endDate}
                        </p>
                        <p className="text-[11px] text-slate-500 font-semibold">
                          Price: ₹{batch.price.toLocaleString()} per person
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                          batch.status === 'Filling Fast'
                            ? 'bg-amber-100 text-amber-900'
                            : 'bg-emerald-100 text-emerald-900'
                        }`}
                      >
                        {batch.availableSeats} seats left
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Instant Inquiry Form Box */}
          <div className="mt-6 p-5 bg-slate-900 text-white rounded-3xl border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-black flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Express Booking Inquiry
                </h3>
                <p className="text-xs text-slate-400">
                  Get instant WhatsApp itinerary PDF & batch seat confirmation
                </p>
              </div>

              <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-800">
                ⚡ Instant Callback
              </span>
            </div>

            {submitted ? (
              <div className="p-4 bg-emerald-900/40 border border-emerald-500/40 rounded-2xl text-center space-y-2">
                <p className="text-sm font-bold text-emerald-300">
                  🎉 Inquiry Submitted Successfully!
                </p>
                <p className="text-xs text-slate-300">
                  Connecting you to WhatsApp with full package details...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-slate-400 mb-1">Your Full Name</label>
                  <div className="flex items-center bg-slate-800 rounded-xl px-3 py-2 border border-slate-700">
                    <User className="w-3.5 h-3.5 text-slate-400 mr-2" />
                    <input
                      type="text"
                      required
                      placeholder="Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-transparent text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Mobile / WhatsApp Number</label>
                  <div className="flex items-center bg-slate-800 rounded-xl px-3 py-2 border border-slate-700">
                    <PhoneCall className="w-3.5 h-3.5 text-slate-400 mr-2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Number of Travelers</label>
                  <select
                    value={formData.travelersCount}
                    onChange={(e) => setFormData({ ...formData, travelersCount: Number(e.target.value) })}
                    className="w-full bg-slate-800 rounded-xl px-3 py-2 text-white border border-slate-700 focus:outline-none"
                  >
                    <option value={1}>1 Traveler (Solo)</option>
                    <option value={2}>2 Travelers (Duo/Couple)</option>
                    <option value={3}>3-5 Travelers (Small Group)</option>
                    <option value={6}>6+ Travelers (Custom Group)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Starting City</label>
                  <input
                    type="text"
                    placeholder="Delhi, Mumbai, Bangalore..."
                    value={formData.cityOfOrigin}
                    onChange={(e) => setFormData({ ...formData, cityOfOrigin: e.target.value })}
                    className="w-full bg-slate-800 rounded-xl px-3 py-2 text-white border border-slate-700 focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-2xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2"
                    style={{ backgroundColor: currentTheme.primaryHex }}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry & Get Itinerary on WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
