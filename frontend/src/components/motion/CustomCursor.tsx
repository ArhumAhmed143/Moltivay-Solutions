'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hideAfterIdle = useCallback(() => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 1500);
  }, []);

  useEffect(() => {
    // Don't render on touch devices
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let mouseX = -200;
    let mouseY = -200;
    let ringX = -200;
    let ringY = -200;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);
      hideAfterIdle();

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    // Hide completely when mouse leaves the page
    const onMouseLeave = () => {
      setIsVisible(false);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
    const onMouseEnter = () => setIsVisible(true);

    const render = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    rafId = requestAnimationFrame(render);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest('a, button, input, textarea, select, [role="button"]');
      setIsHovered(!!interactive);
    };

    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(rafId);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [hideAfterIdle]);

  return (
    <>
      {/* Precision Core Dot — hidden when idle or outside window */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{ transform: 'translate3d(-200px, -200px, 0)' }}
        className={`pointer-events-none fixed top-0 left-0 -ml-1 -mt-1 z-[9999] h-2 w-2 rounded-full bg-blue-500 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovered ? 'scale-75' : 'scale-100'}`}
      />

      {/* Subtle Follower Ring — also hidden when idle */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{ transform: 'translate3d(-200px, -200px, 0)' }}
        className={`pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border border-zinc-700/60 bg-white/[0.015] transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovered
            ? '-ml-5 -mt-5 h-10 w-10 border-blue-500/50 bg-blue-500/[0.04] scale-110'
            : '-ml-3.5 -mt-3.5 h-7 w-7 scale-100'
        }`}
      />
    </>
  );
};

export default CustomCursor;
