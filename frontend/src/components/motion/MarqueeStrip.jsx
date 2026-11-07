import React from 'react';

const DEFAULT_ITEMS = [
  'FULL STACK WEB DEVELOPMENT',
  'ENTERPRISE CLOUD ARCHITECTURE',
  'IOS & ANDROID MOBILE APPS',
  'AI WORKFLOWS & PRIVATE LLMS',
  'REACT & REACT NATIVE ECOSYSTEMS',
  'HIGH-CONCURRENCY MICROSERVICES',
  'DEVSECOPS & CLOUD INFRASTRUCTURE',
  'SOC2 & HIPAA COMPLIANT SYSTEMS',
];

export const MarqueeStrip = ({
  items = DEFAULT_ITEMS,
  reverse = false,
  className = '',
}) => {
  const animationClass = reverse ? 'animate-marquee-reverse' : 'animate-marquee';

  return (
    <div
      className={`relative w-full overflow-hidden border-y border-slate-800 bg-slate-950 py-3.5 select-none ${className}`}
    >
      {/* Edge gradient mask for luxury fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-slate-950 to-transparent" />

      <div className="flex w-fit items-center whitespace-nowrap">
        {[0, 1].map((copyIndex) => (
          <div
            key={copyIndex}
            className={`flex items-center gap-8 px-4 ${animationClass}`}
          >
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-slate-300 font-bold transition-colors hover:text-cyan-300">
                  {item}
                </span>
                <span
                  aria-hidden="true"
                  className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
