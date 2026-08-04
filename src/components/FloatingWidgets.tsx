import React, { useState, useEffect } from 'react';
import { ChevronUp, MessageCircle } from 'lucide-react';

export const FloatingWidgets: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-[#00a8cc] text-white flex items-center justify-center shadow-xl hover:bg-[#008ba9] transition-transform active:scale-95 border-2 border-white animate-fadeIn"
          title="Back to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918130288566?text=Hi%20xyztravel,%20I%20want%20to%20plan%20a%20trip!"
        target="_blank"
        rel="noreferrer"
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 group"
        title="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400"></span>
        </span>
        <MessageCircle className="w-8 h-8 fill-white" />
      </a>

    </div>
  );
};
