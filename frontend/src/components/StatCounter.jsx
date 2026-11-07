import React, { useState, useEffect, useRef } from 'react';

const StatCounter = ({ target, suffix = '', label, sublabel }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!counterRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const duration = 2000; // 2 seconds
          const startTime = performance.now();

          const updateCount = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // easeOutExpo function for expensive, smooth deceleration
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            const currentCount = Math.floor(easeProgress * target);
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={counterRef} className="flex flex-col">
      <div className="flex items-baseline space-x-1">
        <span className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A2540] tracking-tight">
          {count}
        </span>
        <span className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0070F3]">
          {suffix}
        </span>
      </div>
      <span className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider mt-1">
        {label}
      </span>
      {sublabel && (
        <span className="text-[11px] font-mono text-slate-400 mt-0.5">
          {sublabel}
        </span>
      )}
    </div>
  );
};

export default StatCounter;
