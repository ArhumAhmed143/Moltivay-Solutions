'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = ({ onComplete }: { onComplete?: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth progress counter up to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-[#030914] flex flex-col items-center justify-center text-white select-none px-6"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Logo Mark Center with Pulse */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3.5 mb-8 relative z-10"
          >
            <img
              src="/moltivay-symbol-clean.png"
              alt="Moltivay Logo"
              className="h-12 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]"
            />
            <div className="flex flex-col">
              <span className="font-heading font-black text-2xl tracking-tight text-white leading-tight">
                Moltivay
              </span>
              <span className="font-heading font-extrabold text-sm tracking-wider text-cyan-400 leading-tight">
                Solutions.
              </span>
            </div>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-full max-w-xs space-y-3 relative z-10">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 font-bold">
              <span>INITIALIZING SYSTEM</span>
              <span className="text-cyan-400">{progress}%</span>
            </div>

            {/* Glowing Track */}
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest text-center">
              {progress < 40 && 'LOADING DISTRIBUTED RUNTIMES...'}
              {progress >= 40 && progress < 80 && 'VERIFYING ARCHITECTURAL GATES...'}
              {progress >= 80 && 'READY FOR CLIENT ENGAGEMENT'}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
