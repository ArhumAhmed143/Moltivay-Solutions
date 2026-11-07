'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Heart, 
  Briefcase, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import ScrambleText from './motion/ScrambleText';
import WordReveal from './motion/WordReveal';

const culturePillars = [
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description:
      'Structured career development pathways, mentoring, and continuous learning opportunities in modern distributed systems, cloud runtimes, and AI.',
  },
  {
    icon: ShieldCheck,
    title: 'Meaningful Work',
    description:
      'Contribute to mission-critical software, high-concurrency cloud engines, and autonomous systems that directly power global enterprise operations.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description:
      'Work alongside leading regulatory, engineering, and scientific software architects with decades of collective experience from around the world.',
  },
  {
    icon: Heart,
    title: 'Comprehensive Benefits',
    description:
      'Competitive salary, health coverage, flexible remote working arrangements, annual equipment stipend, and continuous professional development funding.',
  },
];

export const Careers = () => {
  return (
    <section id="careers" className="py-24 md:py-32 bg-white border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Precision Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            PART 1: WHY WORK WITH US (Clean White & Blue Theme)
        ========================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-2xs">
            <span>WHY MOLTIVAY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            <ScrambleText
              text="Why Work With Us"
              as="span"
              scrambleColor="#2563eb"
              settledClassName="text-slate-900"
              speed={28}
            />
          </h2>
          <WordReveal
            text="Join a culture of engineering excellence, intellectual rigor, and uncompromising quality standards."
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
            delay={0.2}
          />
        </motion.div>

        {/* 4 Cards Grid (Matching Screenshot 3) — staggered walk-in */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {culturePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const xOffset = idx % 2 === 0 ? -25 : 25;
            return (
              <motion.div
                key={pillar.title}
                variants={{
                  hidden:  { opacity: 0, y: 40, x: xOffset, scale: 0.94 },
                  visible: { opacity: 1, y: 0,  x: 0,       scale: 1,
                    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
                  },
                }}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="bg-slate-50/80 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-slate-900"
              >
                {/* Top Subtle Border Highlight on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Rounded Icon Box */}
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors font-heading">
                    {pillar.title}
                  </h3>

                  {/* Description with WordReveal */}
                  <WordReveal
                    text={pillar.description}
                    className="text-sm text-slate-600 leading-relaxed font-normal"
                    delay={0.1}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* =========================================================
            PART 2: CURRENT OPENINGS (Matching Screenshot 4)
        ========================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-2xs">
            <span>OPEN ROLES</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Current Openings
          </h3>
        </motion.div>

        {/* Centered Speculative Application Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto bg-slate-50/70 hover:bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 text-center shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden text-slate-900"
        >
          {/* Briefcase Icon Container */}
          <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-500 border border-slate-200 flex items-center justify-center mx-auto mb-6 shadow-2xs">
            <Briefcase className="w-6 h-6" />
          </div>

          {/* Heading */}
          <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 font-heading">
            No Current Job Openings
          </h4>

          {/* Description with WordReveal */}
          <div className="mb-8 max-w-lg mx-auto">
            <WordReveal
              text="We do not have any open positions at the moment. You are welcome to submit a speculative application below — we review every submission and will reach out when a suitable role becomes available."
              className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal"
              delay={0.1}
            />
          </div>

          {/* Action Button */}
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
          >
            <span>Submit an Application</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Careers;
