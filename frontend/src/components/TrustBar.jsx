import React from 'react';

const TrustBar = () => {
  const partners = [
    { name: 'ApexCloud', symbol: '▲ APEXCLOUD' },
    { name: 'Vanguard Systems', symbol: '❖ VANGUARD' },
    { name: 'Synapse Global', symbol: '● SYNAPSE' },
    { name: 'Hyperion Data', symbol: '◆ HYPERION' },
    { name: 'AeroPulse', symbol: '⬡ AEROPULSE' },
    { name: 'OmniVentures', symbol: '■ OMNIX' },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-semibold text-text-muted uppercase tracking-widest mb-8">
          Trusted by startups and enterprises worldwide
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-70">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-3 grayscale hover:grayscale-0 hover:text-navy hover:scale-105 transition-all duration-200 cursor-default"
            >
              <span className="font-heading font-bold text-base sm:text-lg tracking-wider text-slate-400 hover:text-navy transition-colors">
                {partner.symbol}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
