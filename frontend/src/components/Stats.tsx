'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Users, Globe2, ShieldCheck, Zap } from 'lucide-react';
import StatCounter from './StatCounter';
import ScrambleText from './motion/ScrambleText';
import WordReveal from './motion/WordReveal';

export const Stats = () => {
  const stats = [
    {
      target: 15,
      suffix: '+',
      label: 'Years Industry Track Record',
      sublabel: 'Mission-critical software architectures & production deployments',
      icon: Award,
    },
    {
      target: 240,
      suffix: '+',
      label: 'Enterprise Deliverables',
      sublabel: 'Full-stack web, cloud microservices & automated QA suites',
      icon: Briefcase,
    },
    {
      target: 50,
      suffix: '+',
      label: 'Engineers & QA Specialists',
      sublabel: 'Full-stack developers, test automation leads & AI researchers',
      icon: Users,
    },
    {
      target: 30,
      suffix: '+',
      label: 'Countries Globally Served',
      sublabel: 'United States, UK, EU, UAE & APAC enterprise client reach',
      icon: Globe2,
    },
  ];

  return (
    <section id="stats" className="py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Background ambient grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200/80 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              <span>MEASURABLE ENGINEERING METRICS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Proven Delivery at{' '}
              <ScrambleText
                text="Institutional Scale."
                as="span"
                scrambleColor="#2563eb"
                settledClassName="text-blue-600"
                speed={28}
              />
            </h2>
          </div>
          <WordReveal
            text="Every metric reflects real-world software uptime, strict zero-regression quality assurance, and long-term client partnerships."
            className="text-sm text-slate-600 max-w-md font-medium leading-relaxed"
            delay={0.2}
          />
        </motion.div>

        {/* 4 Animated Counter Cards — staggered walk-in on scroll */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.13 } },
          }}
        >
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden:   { opacity: 0, y: 40, scale: 0.93 },
                visible:  { opacity: 1, y: 0,  scale: 1,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                },
              }}
            >
              <StatCounter
                target={item.target}
                suffix={item.suffix}
                label={item.label}
                sublabel={item.sublabel}
                icon={item.icon}
                delay={idx * 0.1}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Stats;
