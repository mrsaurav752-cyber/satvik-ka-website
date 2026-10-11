import React, { useRef, useEffect } from 'react';
import { MenuSection } from '../types';

interface CategoryNavProps {
  sections: MenuSection[];
  activeSectionId: string;
  onSelectSection: (sectionId: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  sections,
  activeSectionId,
  onSelectSection,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Smooth scroll active button into view when active section changes
  useEffect(() => {
    if (activeBtnRef.current && containerRef.current) {
      const container = containerRef.current;
      const element = activeBtnRef.current;
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      if (elementRect.left < containerRect.left || elementRect.right > containerRect.right) {
        container.scrollTo({
          left: element.offsetLeft - container.offsetWidth / 2 + element.offsetWidth / 2,
          behavior: 'smooth',
        });
      }
    }
  }, [activeSectionId]);

  return (
    <nav aria-label="Menu Sections" className="sticky top-0 z-30 bg-[#0e1116]/95 backdrop-blur-md border-b border-neutral-800 shadow-md">
      <div
        ref={containerRef}
        className="flex items-center gap-2 overflow-x-auto py-3 px-4 max-w-5xl mx-auto no-scrollbar scroll-smooth"
      >
        {sections.map((section) => {
          const isActive = section.id === activeSectionId;
          return (
            <button
              key={section.id}
              ref={isActive ? activeBtnRef : null}
              onClick={() => onSelectSection(section.id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 shrink-0 select-none ${
                isActive
                  ? 'bg-amber-500 text-neutral-950 font-bold shadow-md shadow-amber-500/20 ring-2 ring-amber-400/50'
                  : 'bg-[#181d24] text-neutral-300 hover:text-white hover:bg-[#222832] border border-neutral-700/60'
              }`}
            >
              <span>{section.title}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-semibold ${
                  isActive
                    ? 'bg-neutral-950/30 text-neutral-950'
                    : 'bg-neutral-800 text-neutral-400'
                }`}
              >
                {section.items.length}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
