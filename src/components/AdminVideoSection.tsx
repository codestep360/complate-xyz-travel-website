import React, { useState } from 'react';
import { Play, Settings, Video, CheckCircle, ExternalLink, X } from 'lucide-react';

export const AdminVideoSection: React.FC = () => {
  const [videoConfig, setVideoConfig] = useState({
    title: 'Real People Real Stories From SRILANKA',
    subtitle: 'Sri Lanka Trip | xyztravel Reviews | Client Testimonials',
    embedId: '3JZ_D3ELwOQ', // YouTube video ID or default
    youtubeUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
    thumbnail: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80',
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState('');
  const [inputTitle, setInputTitle] = useState(videoConfig.title);
  const [inputSubtitle, setInputSubtitle] = useState(videoConfig.subtitle);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Helper to extract video ID from YouTube links
  const extractYouTubeId = (url: string) => {
    if (!url) return '3JZ_D3ELwOQ';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '3JZ_D3ELwOQ';
  };

  const handleSaveVideo = (e: React.FormEvent) => {
    e.preventDefault();
    const videoId = extractYouTubeId(inputUrl) || '3JZ_D3ELwOQ';
    
    setVideoConfig({
      title: inputTitle || 'Travel Story',
      subtitle: inputSubtitle || 'xyztravel Real Client Reviews',
      embedId: videoId,
      youtubeUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
      thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    });

    setIsPlaying(false);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      setIsAdminModalOpen(false);
    }, 1200);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans">
      
      {/* Container Box */}
      <div className="relative bg-white rounded-3xl p-4 sm:p-6 shadow-xl border-2 border-[#00a8cc] overflow-hidden">
        
        {/* Top Bar with Admin Edit Button */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                Featured Traveler Stories
              </span>
              <h3 className="text-sm font-extrabold text-slate-800">
                {videoConfig.title}
              </h3>
            </div>
          </div>

          {/* Admin Edit Button */}
          <button
            onClick={() => setIsAdminModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-xs"
            title="Admin: Change YouTube Video"
          >
            <Settings className="w-3.5 h-3.5 text-yellow-400" />
            <span>Admin Post Video</span>
          </button>
        </div>

        {/* Video Player Box */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 shadow-inner group">
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoConfig.embedId}?autoplay=1`}
              title={videoConfig.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div 
              onClick={() => setIsPlaying(true)}
              className="relative w-full h-full cursor-pointer overflow-hidden"
            >
              <img
                src={videoConfig.thumbnail}
                alt={videoConfig.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Title Bar */}
        <div className="mt-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#00a8cc] text-white flex items-center justify-center font-black text-xs shrink-0">
            W
          </div>
          <div>
            <h4 className="font-extrabold text-sm text-slate-900">
              {videoConfig.subtitle}
            </h4>
            <p className="text-xs text-slate-500 font-medium">
              Verified xyztravel Traveler Testimonial & Review
            </p>
          </div>
        </div>

      </div>

      {/* ADMIN POST VIDEO MODAL */}
      {isAdminModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-fadeIn">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#00a8cc]" />
                <h3 className="font-extrabold text-slate-900 text-base">
                  Admin: Post YouTube Video
                </h3>
              </div>
              <button
                onClick={() => setIsAdminModalOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {saveSuccess ? (
              <div className="py-8 text-center text-emerald-600 space-y-2">
                <CheckCircle className="w-12 h-12 mx-auto" />
                <h4 className="font-extrabold text-lg">Video Updated Successfully!</h4>
                <p className="text-xs text-slate-500">Live preview updated on the website homepage.</p>
              </div>
            ) : (
              <form onSubmit={handleSaveVideo} className="mt-4 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    YouTube Video URL or Video ID
                  </label>
                  <input
                    type="text"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    placeholder="e.g. https://www.youtube.com/watch?v=3JZ_D3ELwOQ"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#00a8cc] outline-none"
                    required
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    Paste any YouTube video link to showcase travel reviews.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Banner Section Title
                  </label>
                  <input
                    type="text"
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                    placeholder="Real People Real Stories"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#00a8cc] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Video Description Subtitle
                  </label>
                  <input
                    type="text"
                    value={inputSubtitle}
                    onChange={(e) => setInputSubtitle(e.target.value)}
                    placeholder="Sri Lanka Trip | xyztravel Reviews"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#00a8cc] outline-none"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsAdminModalOpen(false)}
                    className="flex-1 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-[#00a8cc] text-white text-xs font-extrabold hover:bg-[#008ba9] shadow-sm"
                  >
                    Save & Publish Video
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
