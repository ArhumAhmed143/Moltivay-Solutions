'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import ScrambleText from './motion/ScrambleText';
import WordReveal from './motion/WordReveal';

const steps = [
  {
    step: '01',
    phase: 'DISCOVERY & ARCHITECTURE',
    title: 'System Blueprinting & Threat Modeling',
    desc: 'Deep technical discovery to map data schemas, choose distributed runtimes (Next.js, Go, Node, PostgreSQL), and establish microservice boundaries before authoring code.',
    icon: GitBranch,
    deliverables: ['System Architecture Diagram', 'Database Schema DDL', 'Threat Model & Security Plan'],
  },
  {
    step: '02',
    phase: 'RAPID SPRINT DELIVERY',
    title: 'High-Velocity Component & API Engineering',
    desc: 'Bi-weekly production sprint cycles with clean modular code, TypeScript type safety, and atomic commits. Continuous feature previews hosted on private staging environments.',
    icon: Code2,
    deliverables: ['Production Next.js / React Apps', 'Documented REST/GraphQL APIs', 'Dockerized Containers'],
  },
  {
    step: '03',
    phase: 'ZERO-REGRESSION SQA',
    title: 'Automated E2E Testing & Performance Profiling',
    desc: 'Automated Playwright and Cypress integration tests triggered on every pull request. High-concurrency load stress tests (>50k req/s) and OWASP penetration checks.',
    icon: ShieldCheck,
    deliverables: ['Automated CI/CD Test Gates', 'Load Testing Telemetry Report', 'OWASP Penetration Audit'],
  },
  {
    step: '04',
    phase: 'ENTERPRISE PRODUCTION',
    title: 'Zero-Downtime Deployment & 24/7 SLA Operations',
    desc: 'Automated blue/green or canary production rollouts across AWS, GCP, or Cloudflare edges. Continuous telemetry monitoring, automated disaster failover, and dedicated 24/7 SLA.',
    icon: Rocket,
    deliverables: ['Global Edge Deployment', 'Grafana/Prometheus Dashboard', 'Guaranteed 99.99% SLA'],
  },
];

export const ProcessTimeline = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-white border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Grid */}
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>EXECUTION METHODOLOGY // SPRINT CYCLE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-5">
            How We Deliver with{' '}
            <ScrambleText
              text="Institutional Precision."
              as="span"
              scrambleColor="#2563eb"
              settledClassName="text-blue-600"
              speed={28}
            />
          </h2>
          <WordReveal
            text="A battle-tested 4-step engineering pipeline ensuring every release is resilient, verified, and delivered on schedule without technical debt."
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
            delay={0.2}
          />
        </motion.div>

        {/* 4 Process Cards Grid — walk-in from sides, staggered */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
        >
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                variants={{
                  hidden:  { opacity: 0, y: 50, x: idx % 2 === 0 ? -20 : 20 },
                  visible: { opacity: 1, y: 0,  x: 0,
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
                  },
                }}
                whileHover={{ y: -10, scale: 1.01, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="bg-slate-50/80 hover:bg-white rounded-3xl p-7 border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-slate-900"
              >
                {/* Step indicator glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-mono font-black text-slate-300 group-hover:text-blue-600 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold tracking-widest text-blue-600 uppercase block mb-1">
                    {item.phase}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors font-heading mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <WordReveal
                    text={item.desc}
                    className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6"
                    delay={0.1}
                  />
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    CORE DELIVERABLES
                  </span>
                  <ul className="space-y-1.5">
                    {item.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default ProcessTimeline;
