'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeStripProps {
  items?: string[];
  speed?: 'slow' | 'normal' | 'fast';
  reverse?: boolean;
  className?: string;
  theme?: 'light' | 'dark';
}

const DEFAULT_ITEMS = [
  'TIER-4 CLOUD SLA',
  'SOVEREIGN AI MODELS',
  'ZERO-REGRESSION CI/CD',
  'DISTRIBUTED POSTGRESQL',
  'APPLE SILICON MLX',
  'SUB-10MS LATENCY',
  'SOC 2 TYPE II AUDITED',
  'HIGH-CONCURRENCY APIS',
];

export const MarqueeStrip: React.FC<MarqueeStripProps> = ({
  items = DEFAULT_ITEMS,
  speed = 'normal',
  reverse = false,
  className = '',
  theme = 'light',
}) => {
  // Speed mapping in seconds for full loop
  const duration = speed === 'fast' ? 18 : speed === 'slow' ? 38 : 26;

  // Duplicate the list 4 times to ensure seamless infinite looping without any visual gaps
  const repeatedItems = [...items, ...items, ...items, ...items];

  const isDark = theme === 'dark';

  return (
    <div
      className={`relative w-full overflow-hidden py-3.5 select-none ${
        isDark
          ? 'bg-[#030914] text-white border-y border-slate-800'
          : 'bg-white/95 text-slate-800 border-y border-slate-200 shadow-2xs'
      } ${className}`}
    >
      {/* Edge gradient masks for seamless fade on sides */}
      <div
        className={`pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 sm:w-36 bg-gradient-to-r ${
          isDark
            ? 'from-[#030914] to-transparent'
            : 'from-white to-transparent'
        }`}
      />
      <div
        className={`pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 sm:w-36 bg-gradient-to-l ${
          isDark
            ? 'from-[#030914] to-transparent'
            : 'from-white to-transparent'
        }`}
      />

      {/* Framer Motion GPU-accelerated infinite walking conveyor */}
      <motion.div
        className="flex w-max items-center gap-10 whitespace-nowrap will-change-transform"
        animate={{
          x: reverse ? ['-50%', '0%'] : ['0%', '-50%'],
        }}
        transition={{
          ease: 'linear',
          duration: duration,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 group cursor-default">
            <span
              className={`font-sans text-xs sm:text-sm uppercase tracking-[0.22em] font-extrabold transition-colors duration-200 ${
                isDark
                  ? 'text-slate-200 group-hover:text-cyan-300'
                  : 'text-slate-800 group-hover:text-blue-600'
              }`}
            >
              {item}
            </span>

            {/* Glowing circular animated separator dot */}
            <span className="flex items-center justify-center relative">
              <span className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)] animate-pulse" />
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeStrip;
