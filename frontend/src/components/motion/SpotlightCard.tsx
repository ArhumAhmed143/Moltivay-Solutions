'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(37, 99, 235, 0.08)',
  borderColor = 'rgba(56, 189, 248, 0.5)',
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = useState<{ x: number; y: number; isHovered: boolean }>({
    x: 0,
    y: 0,
    isHovered: false,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setCoords((prev) => ({ ...prev, isHovered: false }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`group relative overflow-hidden rounded-3xl transition-all duration-300 ${className}`}
    >
      {/* Interactive Border Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: coords.isHovered
            ? `radial-gradient(300px circle at ${coords.x}px ${coords.y}px, ${borderColor}, transparent 70%)`
            : undefined,
        }}
      />

      {/* Surface Spotlight Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: coords.isHovered
            ? `radial-gradient(420px circle at ${coords.x}px ${coords.y}px, ${spotlightColor}, transparent 80%)`
            : undefined,
        }}
      />

      {/* Inner Content */}
      <div className="relative z-20 h-full w-full">{children}</div>
    </motion.div>
  );
};

export default SpotlightCard;
