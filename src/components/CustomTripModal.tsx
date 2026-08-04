import React, { useState } from 'react';
import { X, Sparkles, MapPin, Calendar, Users, DollarSign, Send, CheckCircle2 } from 'lucide-react';
import { ColorTheme } from '../types';

interface CustomTripModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: ColorTheme;
}

export const CustomTripModal: React.FC<CustomTripModalProps> = ({
  isOpen,
  onClose,
  currentTheme,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    durationDays: '5',
    travelers: '2',
    budgetPerPerson: '15000',
    fullName: '',
    phone: '',
    email: '',
    specialNotes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*Custom Trip Request*%0A` +
      `Destination: ${formData.destination || 'Flexible'}%0A` +
      `Days: ${formData.durationDays}%0A` +
      `Travelers: ${formData.travelers}%0A` +
      `Budget: ₹${formData.budgetPerPerson} per person%0A` +
      `Name: ${formData.fullName}%0A` +
      `Phone: ${formData.phone}`;

    setTimeout(() => {
      window.open(`https://wa.me/919999999999?text=${message}`, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-2xl bg-amber-100 text-amber-600">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900">Plan Custom Trip</h3>
              <p className="text-xs text-slate-500">100% Tailor-made for your group</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Custom Request Received!</h4>
            <p className="text-xs text-slate-600 max-w-xs mx-auto">
              Our Senior Trip Captain is opening WhatsApp to discuss custom stays, cab details, and exact itinerary options!
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold bg-slate-900 text-white"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-3.5 text-xs">
            <div>
              <label className="block text-slate-500 font-semibold mb-1">Where do you want to go?</label>
              <div className="flex items-center bg-slate-100 rounded-xl px-3 py-2 border border-slate-200">
                <MapPin className="w-4 h-4 text-slate-400 mr-2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Kashmir, Spiti, Bali, Kerala..."
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full bg-transparent text-slate-800 font-semibold focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-500 font-semibold mb-1">Duration (Days)</label>
                <select
                  value={formData.durationDays}
                  onChange={(e) => setFormData({ ...formData, durationDays: e.target.value })}
                  className="w-full bg-slate-100 rounded-xl px-3 py-2 text-slate-800 font-semibold border border-slate-200 focus:outline-none"
                >
                  <option value="3">3 Days (Weekend)</option>
                  <option value="5">5 Days</option>
                  <option value="7">7 Days</option>
                  <option value="10">10+ Days</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-500 font-semibold mb-1">Travelers Count</label>
                <div className="flex items-center bg-slate-100 rounded-xl px-3 py-2 border border-slate-200">
                  <Users className="w-4 h-4 text-slate-400 mr-2" />
                  <input
                    type="number"
                    min={1}
                    max={50}
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                    className="w-full bg-transparent text-slate-800 font-semibold focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-slate-500 font-semibold mb-1">Approx Budget Per Person</label>
              <div className="flex items-center bg-slate-100 rounded-xl px-3 py-2 border border-slate-200">
                <DollarSign className="w-4 h-4 text-slate-400 mr-2" />
                <select
                  value={formData.budgetPerPerson}
                  onChange={(e) => setFormData({ ...formData, budgetPerPerson: e.target.value })}
                  className="w-full bg-transparent text-slate-800 font-semibold focus:outline-none"
                >
                  <option value="10000">₹8,000 - ₹12,000</option>
                  <option value="15000">₹12,000 - ₹20,000</option>
                  <option value="30000">₹20,000 - ₹40,000</option>
                  <option value="50000">₹40,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-500 font-semibold mb-1">Your Name & Phone</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-100 rounded-xl px-3 py-2 text-slate-800 border border-slate-200 focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-100 rounded-xl px-3 py-2 text-slate-800 border border-slate-200 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-500 font-semibold mb-1">Special Preferences / Notes</label>
              <textarea
                rows={2}
                placeholder="e.g. Need private pool villa, pure veg food, flight inclusion..."
                value={formData.specialNotes}
                onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                className="w-full bg-slate-100 rounded-xl px-3 py-2 text-slate-800 border border-slate-200 focus:outline-none"
              />
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3 rounded-2xl font-bold text-white shadow-md transition-all flex items-center justify-center gap-2"
                style={{ backgroundColor: currentTheme.primaryHex }}
              >
                <Send className="w-4 h-4" />
                <span>Request Tailor-Made Itinerary</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
