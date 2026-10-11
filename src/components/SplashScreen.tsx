import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Utensils, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(false);
      onComplete();
      return;
    }

    // Auto-dismiss after 2.4 seconds
    const timer = setTimeout(() => {
      handleDismiss();
    }, 2400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(onComplete, 400);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0c10] text-white px-6 overflow-hidden select-none cursor-pointer"
        onClick={handleDismiss}
      >
        {/* Subtle glowing ambient backdrop */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-600/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Decorative border frame */}
        <div className="absolute inset-4 sm:inset-8 border border-amber-500/20 rounded-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-md">
          {/* Golden Crown / Utensils Emblem */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 p-0.5 shadow-2xl shadow-amber-500/20 mb-6 flex items-center justify-center"
          >
            <div className="w-full h-full bg-[#0d1117] rounded-full flex items-center justify-center border border-amber-400/30">
              <Utensils className="w-10 h-10 sm:w-11 sm:h-11 text-amber-400" />
            </div>
          </motion.div>

          {/* Restaurant Title */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="h-px w-8 bg-amber-500/50" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-400/90">
                Welcome To
              </span>
              <span className="h-px w-8 bg-amber-500/50" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 font-serif-heading">
              {RESTAURANT_INFO.name}
            </h1>

            <p className="text-sm tracking-[0.3em] font-medium text-amber-500/90 mt-1 uppercase">
              {RESTAURANT_INFO.subtitle}
            </p>
          </motion.div>

          {/* Tagline & Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-xs sm:text-sm text-neutral-400 mt-4 leading-relaxed max-w-xs"
          >
            Fine Indian, Tandoor & Chinese Delights in Kankarbagh, Patna
          </motion.p>

          {/* Skip Button */}
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            onClick={(e) => {
              e.stopPropagation();
              handleDismiss();
            }}
            className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all active:scale-95 shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Enter Menu</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
