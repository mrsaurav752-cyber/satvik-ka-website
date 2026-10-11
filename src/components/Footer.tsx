import React from 'react';
import { MapPin, Phone, Clock, ArrowUp, Utensils, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0a0c10] border-t border-neutral-800 text-neutral-400 py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {/* Top brand & Back to top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800/80">
          <div>
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Utensils className="w-5 h-5" />
              <span className="font-serif-heading text-xl font-bold tracking-wider text-white">
                {RESTAURANT_INFO.name}
              </span>
            </div>
            <p className="text-xs text-amber-500/90 font-medium tracking-widest uppercase">
              {RESTAURANT_INFO.subtitle}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#161b22] hover:bg-[#202732] text-amber-300 border border-amber-500/30 transition-colors active:scale-95 self-start sm:self-auto"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
          {/* Location */}
          <div className="space-y-2">
            <h4 className="text-neutral-200 font-semibold uppercase tracking-wider text-xs flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              Address & Location
            </h4>
            <p className="text-neutral-300 leading-relaxed">
              {RESTAURANT_INFO.address}
            </p>
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-amber-400 hover:underline pt-1"
            >
              Get Directions on Map →
            </a>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h4 className="text-neutral-200 font-semibold uppercase tracking-wider text-xs flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-amber-400" />
              Phone Numbers
            </h4>
            <p className="text-neutral-300">
              For table bookings, parties and takeaways:
            </p>
            <div className="flex flex-col gap-1.5 pt-1">
              {RESTAURANT_INFO.phones.map((phone, idx) => (
                <a
                  key={idx}
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="text-amber-300 hover:text-amber-200 font-medium transition-colors"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>

          {/* Hours & Notice */}
          <div className="space-y-2">
            <h4 className="text-neutral-200 font-semibold uppercase tracking-wider text-xs flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              Dining Hours
            </h4>
            <p className="text-neutral-300">{RESTAURANT_INFO.hours}</p>
            <p className="text-neutral-400 text-xs pt-1 leading-relaxed">
              {RESTAURANT_INFO.pricingNote}
            </p>
          </div>
        </div>

        {/* Bottom copyright & FSSAI */}
        <div className="pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <p>
            © {new Date().getFullYear()} {RESTAURANT_INFO.name}. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1">
            Crafted for premium dining experience in Patna <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};
