import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*<>[]/{}_+=';

export const ScrambleText = ({
  text = '',
  phrases,
  as: Component = 'h2',
  className = '',
  scrambleColor = '#0066FF',
  settledClassName = '',
  trigger = 'scroll',
  speed = 30,
  loopInterval = 4000,
}) => {
  const containerRef = useRef(null);
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
  const [displayText, setDisplayText] = useState(targetText);

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
    const settleTimes = [];

    for (let i = 0; i < length; i++) {
      if (targetText[i] === ' ') {
        settleTimes.push(1);
      } else {
        settleTimes.push(6 + Math.floor(i * 1.1) + Math.floor(Math.random() * 6));
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

    if (!containerRef.current) return;

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

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isMounted, trigger, hasTriggered, runScramble]);

  // Looping through phrases if multiple are provided
  useEffect(() => {
    if (!phrases || phrases.length <= 1 || !isMounted || !hasTriggered) return;

    const loopTimer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, loopInterval);

    return () => clearInterval(loopTimer);
  }, [phrases, isMounted, hasTriggered, loopInterval]);

  useEffect(() => {
    if (phrases && phrases.length > 1 && hasTriggered) {
      runScramble();
    }
  }, [phraseIndex]);

  return (
    <Component
      ref={containerRef}
      className={`inline-block ${className} ${!isScrambling ? settledClassName : ''}`}
      style={{ color: isScrambling ? scrambleColor : undefined }}
      aria-label={targetText}
    >
      {displayText}
    </Component>
  );
};

export default ScrambleText;
