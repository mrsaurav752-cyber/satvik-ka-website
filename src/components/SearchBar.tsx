import React from 'react';
import { Search, X, CircleDot } from 'lucide-react';
import { FoodDiet } from '../types';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedDiet: 'all' | FoodDiet;
  onDietChange: (diet: 'all' | FoodDiet) => void;
  totalMatches: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedDiet,
  onDietChange,
  totalMatches,
}) => {
  return (
    <div className="w-full bg-[#12161f] border-b border-neutral-800/80 py-3.5 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative w-full sm:flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search 192 dishes (e.g. Butter Chicken, Paneer Tikka, Biryani)..."
            className="w-full pl-10 pr-10 py-2.5 bg-[#1a202c] border border-neutral-700/80 rounded-xl text-sm text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-white rounded-md transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Dietary Filters & Counter */}
        <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
          <div className="flex items-center gap-1.5 p-1 bg-[#1a202c] rounded-xl border border-neutral-700/70">
            <button
              onClick={() => onDietChange('all')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                selectedDiet === 'all'
                  ? 'bg-amber-500 text-neutral-950 shadow-sm'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => onDietChange('veg')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                selectedDiet === 'veg'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-neutral-300 hover:text-emerald-400'
              }`}
            >
              <CircleDot className="w-3 h-3 text-emerald-400 fill-emerald-400" />
              <span>Veg</span>
            </button>
            <button
              onClick={() => onDietChange('non-veg')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                selectedDiet === 'non-veg'
                  ? 'bg-rose-700 text-white shadow-sm'
                  : 'text-neutral-300 hover:text-rose-400'
              }`}
            >
              <CircleDot className="w-3 h-3 text-rose-400 fill-rose-400" />
              <span>Non-Veg</span>
            </button>
          </div>

          <span className="text-[11px] font-medium text-neutral-400 shrink-0 px-2 py-1 bg-[#181d24] rounded-md border border-neutral-800">
            {totalMatches} {totalMatches === 1 ? 'item' : 'items'}
          </span>
        </div>
      </div>
    </div>
  );
};
