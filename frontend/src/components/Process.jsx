import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Code, ShieldCheck, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    icon: Search,
    description: 'We analyze your product goals, technical feasibility, user personas, and target market to map out an airtight scope and milestone roadmap.',
  },
  {
    number: '02',
    title: 'Design',
    icon: Compass,
    description: 'Creating interactive wireframes, clickable prototypes, and cohesive design systems in Figma that prioritize user experience and conversion.',
  },
  {
    number: '03',
    title: 'Development',
    icon: Code,
    description: 'Writing clean, test-driven code across frontend, backend, and mobile utilizing modern frameworks, reusable components, and secure APIs.',
  },
  {
    number: '04',
    title: 'Testing',
    icon: ShieldCheck,
    description: 'Comprehensive QA cycles including regression, load benchmarking, multi-device responsiveness testing, and security auditing.',
  },
  {
    number: '05',
    title: 'Launch',
    icon: Rocket,
    description: 'Deployment to production clouds (AWS, Vercel, Docker), CI/CD pipeline setup, and post-launch monitoring options.',
  },
];

const Process = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-electric text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 block">
            How We Deliver
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-5">
            Our Battle-Tested Development Lifecycle
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            A transparent, agile methodology ensuring your project ships on schedule and exceeds engineering benchmarks.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-6 border border-slate-100 shadow-clean hover:shadow-card-hover hover:border-blue-100 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold font-heading text-slate-200 group-hover:text-electric/20 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-electric flex items-center justify-center group-hover:bg-electric group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-navy mb-2.5 group-hover:text-electric transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Progress Indicator line */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Phase {index + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-electric/60" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;
