import React, { useState } from 'react';
import { Send, CheckCircle, PhoneCall, Mail, User, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    destination: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans">
      <div className="bg-[#00a8cc] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left Side Illustration & Branding */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-yellow-300 text-xs font-bold border border-white/30">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>24/7 Travel Expert Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Plan Your Dream Vacation With xyztravel
          </h2>

          <p className="text-sm text-cyan-100 font-medium max-w-md mx-auto lg:mx-0">
            Get personalized itineraries, group discount options, and instant callback from our verified trip captains!
          </p>

          {/* Travel Graphic Art */}
          <div className="relative max-w-xs mx-auto lg:mx-0 pt-4">
            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&q=80"
              alt="Travelers Call Back"
              className="rounded-2xl shadow-lg border-2 border-white/40 max-h-56 object-cover"
            />
          </div>
        </div>

        {/* Right Side Form Card */}
        <div className="w-full lg:w-[420px] bg-white text-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
          <div className="text-center mb-6">
            <span className="text-xs font-extrabold uppercase text-[#00a8cc] tracking-wider">
              Get in Touch
            </span>
            <h3 className="text-xl font-black text-slate-900 mt-0.5">
              Allow Us to Call You Back!
            </h3>
          </div>

          {submitted ? (
            <div className="py-8 text-center text-emerald-600 space-y-3">
              <CheckCircle className="w-14 h-14 mx-auto text-emerald-500" />
              <h4 className="text-xl font-black text-slate-900">Thank You!</h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Our xyztravel travel captain will call you back shortly on{' '}
                <span className="font-bold text-slate-900">+91 {formData.phone}</span>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', phone: '', destination: '', email: '' });
                }}
                className="mt-4 px-6 py-2 rounded-full bg-[#00a8cc] text-white text-xs font-bold hover:bg-[#008ba9]"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Smith"
                    className="w-full py-2.5 pl-10 pr-4 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#00a8cc]"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <span className="py-2.5 px-3 rounded-xl border border-slate-300 bg-slate-50 text-xs font-bold text-slate-700 flex items-center shrink-0">
                    +91 ∨
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter 10-digit Number"
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#00a8cc]"
                  />
                </div>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full py-2.5 pl-10 pr-4 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#00a8cc] appearance-none bg-white"
                  >
                    <option value="">-- Select destination --</option>
                    <option value="Leh Ladakh">Leh Ladakh</option>
                    <option value="Spiti Valley">Spiti Valley</option>
                    <option value="Kashmir">Kashmir</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Bali">Bali</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Europe">Europe</option>
                    <option value="Other">Other Custom Destination</option>
                  </select>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">
                  Email Id
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full py-2.5 pl-10 pr-4 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#00a8cc]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-black text-sm uppercase tracking-wider shadow-lg transition-transform active:scale-95 mt-2"
              >
                Submit
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
