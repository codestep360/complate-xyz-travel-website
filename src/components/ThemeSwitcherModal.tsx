import React from 'react';
import { X, Palette, Check, Sparkles } from 'lucide-react';
import { COLOR_THEMES } from '../data/packages';
import { ColorTheme } from '../types';

interface ThemeSwitcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: ColorTheme;
  onSelectTheme: (theme: ColorTheme) => void;
  onCustomHexChange: (hex: string) => void;
}

export const ThemeSwitcherModal: React.FC<ThemeSwitcherModalProps> = ({
  isOpen,
  onClose,
  currentTheme,
  onSelectTheme,
  onCustomHexChange,
}) => {
  const [customHex, setCustomHex] = React.useState(currentTheme.primaryHex);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-600">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Custom Brand Colors</h3>
              <p className="text-xs text-slate-500">Instant Website Theme Preview</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info Box */}
        <div className="mt-4 p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            You can customize the main accent colors, buttons, badges, and headers to match your travel agency brand!
          </p>
        </div>

        {/* Preset Color Themes */}
        <div className="mt-5 space-y-3">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            Select Brand Palette
          </label>

          <div className="grid grid-cols-1 gap-2.5">
            {COLOR_THEMES.map((theme) => {
              const isSelected = currentTheme.id === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => {
                    onSelectTheme(theme);
                    setCustomHex(theme.primaryHex);
                  }}
                  className={`w-full flex items-center justify-between p-3.5 rounded-2xl border transition-all text-left ${
                    isSelected
                      ? 'border-slate-900 bg-slate-50 ring-2 ring-slate-900/10'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-xl shadow-xs flex items-center justify-center text-white"
                      style={{ backgroundColor: theme.primaryHex }}
                    >
                      {isSelected && <Check className="w-4 h-4" />}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">{theme.name}</p>
                      <p className="text-[11px] text-slate-400 font-mono">{theme.primaryHex}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: theme.primaryHex }}
                    />
                    <div className="w-4 h-4 rounded-full bg-slate-900" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom Hex Color Picker */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
            Custom Accent Hex Code
          </label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={customHex}
              onChange={(e) => {
                setCustomHex(e.target.value);
                onCustomHexChange(e.target.value);
              }}
              className="w-10 h-10 rounded-xl cursor-pointer border border-slate-200 p-1"
            />
            <input
              type="text"
              value={customHex}
              onChange={(e) => {
                setCustomHex(e.target.value);
                if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
                  onCustomHexChange(e.target.value);
                }
              }}
              className="flex-1 bg-slate-100 rounded-xl px-3 py-2 text-xs font-mono font-bold text-slate-800 border border-slate-200 focus:outline-none"
              placeholder="#FF5A36"
            />
          </div>
        </div>

        {/* Apply CTA */}
        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-2xl text-xs font-bold text-white shadow-md transition-all"
            style={{ backgroundColor: currentTheme.primaryHex }}
          >
            Apply & View Website
          </button>
        </div>

      </div>
    </div>
  );
};
