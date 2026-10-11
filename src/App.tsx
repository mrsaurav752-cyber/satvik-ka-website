import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Phone, ChevronUp, Sparkles, UtensilsCrossed } from 'lucide-react';
import { MENU_SECTIONS, RESTAURANT_INFO } from './data/menuData';
import { FoodDiet, MenuSection } from './types';
import { SplashScreen } from './components/SplashScreen';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { SearchBar } from './components/SearchBar';
import { MenuCard } from './components/MenuCard';
import { Footer } from './components/Footer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDiet, setSelectedDiet] = useState<'all' | FoodDiet>('all');
  const [activeSectionId, setActiveSectionId] = useState<string>(MENU_SECTIONS[0].id);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Filtered menu sections based on search query and dietary selection
  const filteredSections = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return MENU_SECTIONS.map((section) => {
      const filteredItems = section.items.filter((item) => {
        // Diet check
        if (selectedDiet !== 'all' && item.diet !== selectedDiet) {
          return false;
        }

        // Query check
        if (!q) return true;

        const nameMatch = item.name.toLowerCase().includes(q);
        const descMatch = item.description?.toLowerCase().includes(q) ?? false;
        const sectionMatch = section.title.toLowerCase().includes(q);

        return nameMatch || descMatch || sectionMatch;
      });

      return {
        ...section,
        items: filteredItems,
      };
    }).filter((section) => section.items.length > 0);
  }, [searchQuery, selectedDiet]);

  // Total matching items across all sections
  const totalMatches = useMemo(() => {
    return filteredSections.reduce((acc, sec) => acc + sec.items.length, 0);
  }, [filteredSections]);

  // Scroll spy to update active section in CategoryNav
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top button
      if (window.scrollY > 450) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // If user is searching, avoid override
      if (searchQuery.trim()) return;

      const scrollPosition = window.scrollY + 160;

      for (let i = MENU_SECTIONS.length - 1; i >= 0; i--) {
        const section = MENU_SECTIONS[i];
        const el = sectionRefs.current[section.id];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSectionId(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [searchQuery]);

  // Smooth scroll to target section
  const handleSelectSection = (sectionId: string) => {
    setActiveSectionId(sectionId);
    const targetEl = sectionRefs.current[sectionId];
    if (targetEl) {
      const headerOffset = 110;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0e1116] text-[#e6edf3] flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      {/* Cinematic Splash Screen for initial load */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      {/* Main Header */}
      <Header />

      {/* Sticky Category Navigation */}
      <CategoryNav
        sections={filteredSections.length > 0 ? filteredSections : MENU_SECTIONS}
        activeSectionId={activeSectionId}
        onSelectSection={handleSelectSection}
      />

      {/* Instant Search Bar & Dietary Filters */}
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedDiet={selectedDiet}
        onDietChange={setSelectedDiet}
        totalMatches={totalMatches}
      />

      {/* Main Menu Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
        {filteredSections.length === 0 ? (
          /* Empty Search State */
          <div className="py-20 text-center flex flex-col items-center justify-center max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <UtensilsCrossed className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-neutral-100 font-serif-heading mb-2">
              No Dishes Found
            </h3>
            <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
              We couldn't find any dishes matching "{searchQuery}". Try searching for
              "Paneer", "Chicken", "Biryani", "Thali", or reset your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDiet('all');
              }}
              className="px-5 py-2.5 rounded-full bg-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-lg"
            >
              Reset Filters & Show All (192 Items)
            </button>
          </div>
        ) : (
          /* Render Sections */
          <div className="space-y-12">
            {filteredSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                ref={(el) => {
                  sectionRefs.current[section.id] = el;
                }}
                className="scroll-mt-32"
              >
                {/* Section Header */}
                <div className="mb-5 pb-3 border-b border-amber-500/20 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif-heading tracking-wide">
                        {section.title}
                      </h2>
                    </div>
                    {section.subtitle && (
                      <p className="text-xs sm:text-sm text-neutral-400 mt-1 pl-4">
                        {section.subtitle}
                      </p>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-amber-400/90 pl-4 sm:pl-0">
                    {section.items.length} {section.items.length === 1 ? 'item' : 'items'}
                  </span>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        {/* Floating Call Button */}
        <a
          href={`tel:${RESTAURANT_INFO.phones[0].replace(/\s+/g, '')}`}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide shadow-2xl border border-emerald-400/30 transition-all hover:scale-105 active:scale-95"
          aria-label="Call restaurant for order or reservation"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Call to Order / Reserve</span>
          <span className="sm:hidden">Call Now</span>
        </a>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="self-end p-3 rounded-full bg-[#181d26]/90 hover:bg-[#222834] text-amber-400 border border-amber-500/40 shadow-xl transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
