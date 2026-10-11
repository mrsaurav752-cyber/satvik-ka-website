import React from 'react';
import { MapPin, Phone, Clock, QrCode, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const Header: React.FC = () => {
  return (
    <header className="relative w-full overflow-hidden bg-[#0c0f14] border-b border-amber-500/20 text-white">
      {/* Background hero image with dramatic dark gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
          alt="Restaurant Ambiance"
          className="w-full h-full object-cover opacity-25 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f14] via-[#0c0f14]/85 to-[#0c0f14]/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-6 pb-6 sm:pb-8">
        {/* Top Status Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-medium text-emerald-400 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open Today: 11 AM – 11 PM</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-[11px] font-medium text-amber-300 backdrop-blur-md">
            <QrCode className="w-3.5 h-3.5 text-amber-400" />
            <span>Table QR Menu</span>
          </div>
        </div>

        {/* Main Branding Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-amber-400/90 text-xs font-semibold tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Multi-Cuisine Experience</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 font-serif-heading drop-shadow-sm">
              {RESTAURANT_INFO.name}
            </h1>

            <p className="text-base sm:text-lg font-semibold tracking-widest text-amber-400 uppercase">
              {RESTAURANT_INFO.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl leading-relaxed">
              Serving the authentic taste of North Indian, Tandoor, Ahuna Meat, Chinese and Continental cafe specials.
            </p>
          </div>

          {/* Quick Contact & Action Card */}
          <div className="bg-[#151a22]/90 border border-amber-500/20 rounded-xl p-4 md:p-5 backdrop-blur-md flex flex-col gap-3 max-w-md shadow-xl">
            {/* Address */}
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-neutral-200">{RESTAURANT_INFO.address}</p>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-amber-400 hover:text-amber-300 underline inline-block mt-0.5"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>

            {/* Phone numbers */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-neutral-800">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <div className="flex flex-wrap gap-2 text-xs">
                {RESTAURANT_INFO.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-medium transition-colors"
                  >
                    <span>{phone}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
