'use client';

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*<>[]/{}_+=';

interface ScrambleTextProps {
  text?: string;
  phrases?: string[];
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div';
  className?: string;
  scrambleColor?: string; // Default subtle Blue
  settledClassName?: string;
  trigger?: 'scroll' | 'mount';
  speed?: number;
  loopInterval?: number;
}

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text = '',
  phrases,
  as: Component = 'h2',
  className = '',
  scrambleColor = '#3b82f6', // text-blue-500
  settledClassName = 'text-slate-900',
  trigger = 'scroll',
  speed = 30,
  loopInterval = 4000,
}) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(trigger === 'mount');
  const [isMounted, setIsMounted] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);

  const targetText = useMemo(() => {
    if (phrases && phrases.length > 0) {
      return phrases[phraseIndex % phrases.length];
    }
    return text;
  }, [phrases, phraseIndex, text]);

  // Single string value for rendering — NEVER duplicated in DOM
  const [displayText, setDisplayText] = useState<string>(targetText);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const runScramble = useCallback(() => {
    if (!targetText) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(targetText);
      return;
    }

    setIsScrambling(true);
    const length = targetText.length;
    const settleTimes: number[] = [];

    for (let i = 0; i < length; i++) {
      if (targetText[i] === ' ') {
        settleTimes.push(1);
      } else {
        settleTimes.push(6 + Math.floor(i * 1.2) + Math.floor(Math.random() * 8));
      }
    }

    let frame = 0;
    const maxFrames = Math.max(...settleTimes) + 3;

    const intervalId = setInterval(() => {
      frame++;

      const nextChars = targetText.split('').map((char, idx) => {
        if (char === ' ') return ' ';
        if (frame >= settleTimes[idx]) return char;
        return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      });

      setDisplayText(nextChars.join(''));

      if (frame >= maxFrames) {
        clearInterval(intervalId);
        setIsScrambling(false);
        setDisplayText(targetText);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [targetText, speed]);

  useEffect(() => {
    if (!isMounted) return;

    if (trigger === 'mount') {
      runScramble();
      return;
    }

    if (trigger === 'scroll') {
      const el = containerRef.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasTriggered) {
              setHasTriggered(true);
              runScramble();
            }
          });
        },
        { threshold: 0.15 }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }
  }, [trigger, isMounted, hasTriggered, runScramble]);

  useEffect(() => {
    if (!isMounted || !phrases || phrases.length <= 1) return;

    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, loopInterval);

    return () => clearInterval(timer);
  }, [isMounted, phrases, loopInterval]);

  useEffect(() => {
    if (isMounted && phrases && phrases.length > 0) {
      const cleanup = runScramble();
      return cleanup;
    }
  }, [phraseIndex, phrases, isMounted, runScramble]);

  return (
    <Component
      ref={containerRef as any}
      className={`font-sans tracking-tight transition-colors ${className}`}
    >
      <span
        style={{ color: isScrambling ? scrambleColor : undefined }}
        className={isScrambling ? 'font-mono' : settledClassName}
      >
        {displayText}
      </span>
    </Component>
  );
};

export default ScrambleText;
