import React from 'react';

const TrustBar = () => {
  const technologies = ['React', 'Node.js', 'MongoDB', 'React Native', 'Flutter', 'AWS'];

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-semibold text-text-muted uppercase tracking-widest mb-8">
          Technologies in our stack
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-70">
          {technologies.map((technology) => (
            <div
              key={technology}
              className="flex items-center justify-center p-3"
            >
              <span className="font-heading font-bold text-base sm:text-lg text-slate-500">
                {technology}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
