import React, { useState } from 'react';
import { Sparkles, Flame } from 'lucide-react';
import { MenuItem } from '../types';
import { getFoodImage, FALLBACK_FOOD_IMAGE } from '../utils/imageMap';

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const [imgSrc, setImgSrc] = useState<string>(() =>
    getFoodImage(item.name, item.sectionId, item.customImage)
  );
  const [hasImageError, setHasImageError] = useState(false);

  const handleImageError = () => {
    if (!hasImageError) {
      setHasImageError(true);
      setImgSrc(FALLBACK_FOOD_IMAGE);
    }
  };

  const isVeg = item.diet === 'veg';

  return (
    <div className="group flex flex-col sm:flex-row items-stretch bg-[#13171f] hover:bg-[#181d27] border border-neutral-800/80 hover:border-amber-500/30 rounded-2xl overflow-hidden transition-all duration-200 shadow-lg">
      {/* Food Image Container */}
      <div className="relative w-full sm:w-36 md:w-40 h-40 sm:h-auto shrink-0 bg-neutral-900 overflow-hidden">
        <img
          src={imgSrc}
          alt={item.name}
          loading="lazy"
          onError={handleImageError}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13171f] via-transparent to-black/20 sm:hidden" />

        {/* Dietary symbol floating on mobile image */}
        <div className="absolute top-2.5 left-2.5 sm:hidden z-10 bg-black/70 backdrop-blur-md p-1 rounded-md border border-white/10">
          <DietBadge isVeg={isVeg} />
        </div>

        {/* Floating Tag */}
        {(item.isBestseller || item.isChefSpecial) && (
          <div className="absolute top-2.5 right-2.5 sm:hidden z-10">
            <TagBadge isChef={item.isChefSpecial} />
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          {/* Top meta row on desktop */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <DietBadge isVeg={isVeg} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-100 group-hover:text-amber-300 transition-colors leading-snug">
                {item.name}
              </h3>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              {(item.isBestseller || item.isChefSpecial) && (
                <TagBadge isChef={item.isChefSpecial} />
              )}
            </div>
          </div>

          {/* Description */}
          {item.description && (
            <p className="text-xs text-neutral-400 line-clamp-2 sm:line-clamp-3 leading-relaxed mt-1">
              {item.description}
            </p>
          )}
        </div>

        {/* Price & Specs Footer */}
        <div className="flex items-center justify-between gap-3 mt-3 pt-3 border-t border-neutral-800/70">
          {/* Spicy Indicator if applicable */}
          <div className="flex items-center gap-1">
            {item.spicyLevel && (
              <div className="flex items-center gap-0.5" title={`Spicy Level: ${item.spicyLevel}/3`}>
                {Array.from({ length: item.spicyLevel }).map((_, i) => (
                  <Flame key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                ))}
              </div>
            )}
          </div>

          {/* Price Layout */}
          <div className="text-right">
            {item.price.isMRP || item.price.single === 'MRP' ? (
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-300 tracking-wider">
                MRP (As Stamped)
              </div>
            ) : item.price.half !== undefined && item.price.full !== undefined ? (
              <div className="flex items-center gap-2 text-xs font-bold">
                <span className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                  Half: <span className="text-amber-400">₹{item.price.half}</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  Full: <span className="text-amber-400">₹{item.price.full}</span>
                </span>
              </div>
            ) : (
              <div className="text-base sm:text-lg font-bold text-amber-400 font-mono">
                ₹{item.price.single}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const DietBadge: React.FC<{ isVeg: boolean }> = ({ isVeg }) => {
  return (
    <div
      className={`w-4 h-4 rounded-sm border flex items-center justify-center p-0.5 ${
        isVeg ? 'border-emerald-500' : 'border-rose-600'
      }`}
      title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
    >
      <div
        className={`w-2 h-2 rounded-full ${
          isVeg ? 'bg-emerald-500' : 'bg-rose-600'
        }`}
      />
    </div>
  );
};

const TagBadge: React.FC<{ isChef?: boolean }> = ({ isChef }) => {
  if (isChef) {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-950/80 text-purple-300 border border-purple-500/40 shadow-sm">
        <Sparkles className="w-2.5 h-2.5 text-purple-400" />
        Chef Special
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-950/80 text-amber-300 border border-amber-500/40 shadow-sm">
      <Sparkles className="w-2.5 h-2.5 text-amber-400" />
      Bestseller
    </span>
  );
};
