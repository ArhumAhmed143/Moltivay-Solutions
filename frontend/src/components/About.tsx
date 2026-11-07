'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  Cpu, 
  Globe2, 
  CheckCircle2, 
  Layers,
  Sparkles,
  Lock
} from 'lucide-react';
import ScrambleText from './motion/ScrambleText';
import WordReveal from './motion/WordReveal';

const companyPrinciples = [
  {
    icon: ShieldCheck,
    title: 'Sovereign Architecture & Clean IP',
    description:
      'We build systems that our clients own 100%. Every line of code, Dockerized configuration, and database migration is transferred with zero restrictive vendor lock-in.',
  },
  {
    icon: Cpu,
    title: 'Zero-Regression Verification',
    description:
      'Our dedicated SQA leads maintain automated end-to-end integration test suites across multi-browser and mobile matrices, guaranteeing flawless release stability.',
  },
  {
    icon: Globe2,
    title: 'Global Delivery & 24/7 Continuity',
    description:
      'With dual engineering liaisons across North America and South Asia, our development cycles run continuously with guaranteed response SLAs for enterprise partners.',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50/60 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Precision Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-2xs">
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            <span>COMPANY // ENGINEERING HERITAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-5">
            Architecting the Future of{' '}
            <ScrambleText
              text="Enterprise Software."
              as="span"
              scrambleColor="#2563eb"
              settledClassName="text-blue-600"
              speed={28}
            />
          </h2>

          <WordReveal
            text="Moltivay Solutions is a corporate technology development and engineering consultancy. We partner with ambitious founders, venture-backed scaleups, and established enterprises to build resilient, distributed digital infrastructures."
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
            delay={0.2}
          />
        </motion.div>

        {/* 3 Principles Cards Grid — walk-in from alternating sides */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {companyPrinciples.map((principle, idx) => {
            const Icon = principle.icon;
            const xDir = idx === 0 ? -60 : idx === 2 ? 60 : 0;
            return (
              <motion.div
                key={principle.title}
                variants={{
                  hidden:  { opacity: 0, x: xDir, y: 30, scale: 0.95 },
                  visible: { opacity: 1, x: 0,    y: 0,  scale: 1,
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
                  },
                }}
                whileHover={{ y: -10, scale: 1.01, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-slate-900"
              >
                {/* Top Subtle Border Highlight on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors font-heading">
                    {principle.title}
                  </h3>

                  <WordReveal
                    text={principle.description}
                    className="text-sm text-slate-600 leading-relaxed font-normal"
                    delay={0.1}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Agency Capability Snapshot Banner (Clean Dark Navy Accent) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                // INSTITUTIONAL STANDARDS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight text-white">
                Aligned with SOC 2 Type II &amp; Tier-4 Cloud Infrastructure
              </h3>
              <WordReveal
                text="Every software system built by Moltivay adheres to rigorous security standards, encrypted data transmission protocols, and zero-trust perimeter isolation."
                className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal"
                delay={0.1}
              />
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="#leadership"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                <span>Meet Executive Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#careers"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-xl backdrop-blur-md border border-white/20 transition-all active:scale-[0.98]"
              >
                <span>Explore Careers &amp; Culture</span>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
