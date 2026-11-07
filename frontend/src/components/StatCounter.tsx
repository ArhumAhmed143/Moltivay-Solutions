'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel: string;
  icon: LucideIcon;
  duration?: number;
  delay?: number;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  target,
  suffix = '+',
  prefix = '',
  label,
  sublabel,
  icon: Icon,
  duration = 2000,
  delay = 0,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  // Triggers when 15% of the element is visible in the viewport
  const isInView = useInView(ref, { amount: 0.15 });

  const [coords, setCoords] = useState<{ x: number; y: number; isHovered: boolean }>({
    x: 0,
    y: 0,
    isHovered: false,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setCoords((prev) => ({ ...prev, isHovered: false }));
  };

  // Counting Animation (0 -> target with smooth cubic ease-out)
  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth cubic ease-out curve (1 - (1 - progress)^3)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(easeProgress * target);

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const delayTimeout = setTimeout(() => {
      animationFrameId = requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(delayTimeout);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, target, duration, delay]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: delay * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.25, ease: 'easeOut' } }}
      className="bg-slate-50/80 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
    >
      {/* Top subtle blue highlight glow on hover */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Surface Spotlight Glow following Cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: coords.isHovered
            ? `radial-gradient(320px circle at ${coords.x}px ${coords.y}px, rgba(37, 99, 235, 0.09), transparent 80%)`
            : undefined,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline">
            {prefix && (
              <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 mr-0.5">
                {prefix}
              </span>
            )}
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading group-hover:text-blue-600 transition-colors tabular-nums">
              {count}
            </span>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-600 ml-0.5">
              {suffix}
            </span>
          </div>

          <motion.div
            whileHover={{ rotate: 10, scale: 1.15 }}
            className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-500/20 group-hover:scale-110 transition-all duration-300"
          >
            <Icon className="w-6 h-6" />
          </motion.div>
        </div>

        <h3 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
          {label}
        </h3>
        <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
          {sublabel}
        </p>
      </div>

      {/* Progress pill micro-indicator */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400 relative z-10">
        <span>VERIFIED SLA</span>
        <span className="text-emerald-600 font-semibold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          ACTIVE
        </span>
      </div>
    </motion.div>
  );
};

export default StatCounter;
