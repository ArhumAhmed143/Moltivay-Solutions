'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Server, 
  Lock, 
  ExternalLink, 
  ArrowRight,
  Activity,
  CheckCircle2,
  Database
} from 'lucide-react';
import ScrambleText from './motion/ScrambleText';
import WordReveal from './motion/WordReveal';

const projects = [
  {
    id: 'fintech',
    tabName: '01 // FINTECH CORE',
    title: 'High-Concurrency Digital Asset & Banking Engine',
    category: 'Full-Stack Distributed Systems',
    status: 'PRODUCTION DEPLOYED',
    latency: '8.4ms RTT',
    throughput: '35,000 tx/sec',
    description:
      'Engineered an ultra-low latency distributed clearing engine for international institutional banking. Features sub-second ledger reconciliation, distributed Kafka event pipelines, and multi-region PostgreSQL clusters.',
    metrics: [
      { label: 'Clearing Latency', val: '< 10ms' },
      { label: 'Uptime SLA', val: '99.999%' },
      { label: 'Daily Volume', val: '$180M+' },
    ],
    stack: ['Next.js 14', 'Go / Node.js', 'PostgreSQL', 'Kafka', 'Redis Cluster', 'Docker'],
    features: [
      'Zero-loss double-entry cryptographic ledger',
      'PCI-DSS Level 1 security architecture',
      'Real-time WebSocket streaming telemetry',
      'Automated disaster failover under 3 seconds',
    ],
  },
  {
    id: 'ai-agents',
    tabName: '02 // SOVEREIGN AI',
    title: 'Autonomous Multi-Agent Intelligence Network',
    category: 'Applied AI & Neural Fine-Tuning',
    status: 'ACTIVE RUNTIME',
    latency: '38ms TTFT',
    throughput: '2.4M tokens/hr',
    description:
      'Custom fine-tuned Vision-Language Models running in an air-gapped on-premise Kubernetes cluster. Capable of multimodal legal document parsing, automated contract analysis, and self-healing workflow orchestrations.',
    metrics: [
      { label: 'OCR Accuracy', val: '99.8%' },
      { label: 'Token Speed', val: '120 t/s' },
      { label: 'Privacy Grade', val: 'Air-Gapped' },
    ],
    stack: ['PyTorch', 'MLX Engine', 'FastAPI', 'Llama-3 Fine-tuned', 'ChromaDB', 'Kubernetes'],
    features: [
      'Complete data sovereignty with zero external API calls',
      'Sub-50ms token generation on Apple Silicon / CUDA',
      'Automated vector indexing of enterprise unstructured data',
      'Multi-agent consensus verification protocol',
    ],
  },
  {
    id: 'sqa-telemetry',
    tabName: '03 // SQA CI/CD',
    title: 'Enterprise Zero-Regression Continuous Testing Matrix',
    category: 'SQA & Test Automation Engineering',
    status: 'ZERO FAILURES',
    latency: '100% Pass Rate',
    throughput: '4,200 Tests / Run',
    description:
      'Comprehensive automated quality assurance suite executing across 6 browser engines and 14 mobile devices concurrently. Integrated directly into GitHub Actions with automated visual regression diffing.',
    metrics: [
      { label: 'Test Execution', val: '4.2k suites' },
      { label: 'Regression Rate', val: '0.00%' },
      { label: 'CI Pipeline Time', val: '4m 12s' },
    ],
    stack: ['Playwright', 'Cypress', 'Jest', 'GitHub Actions', 'Docker', 'Grafana'],
    features: [
      'Automated pixel-level visual regression auditing',
      'High-concurrency synthetic user traffic load testing',
      'OWASP Top 10 automated security penetration scan',
      'Automated Slack & JIRA incident generation',
    ],
  },
];

export const FlagshipShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = projects[activeTab];

  return (
    <section id="showcase" className="py-24 md:py-32 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Precision Micro Grid Background */}
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
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>ENTERPRISE CASE STUDIES // FLAGSHIP SYSTEMS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Architected for Mission-Critical{' '}
            <ScrambleText
              text="Global Deployments."
              as="span"
              scrambleColor="#2563eb"
              settledClassName="text-blue-600"
              speed={28}
            />
          </h2>
          <WordReveal
            text="Inspect our verified production architectures. Explore live metrics, technical stacks, and zero-regression benchmarks."
            className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal"
            delay={0.2}
          />
        </motion.div>

        {/* =========================================================
            INTERACTIVE SYSTEM TABS (Clean Corporate Buttons)
        ========================================================= */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-8 border-b border-slate-200 pb-4">
          {projects.map((proj, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-[1.02]'
                    : 'bg-white text-slate-700 hover:text-blue-600 hover:border-blue-300 border border-slate-200 shadow-2xs'
                }`}
              >
                <span>{proj.tabName}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* =========================================================
            ACTIVE SYSTEM SHOWCASE CARD (Curved Dark Midnight Terminal)
        ========================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2.5rem] border border-slate-800 bg-gradient-to-r from-[#030a16] via-[#091b38] to-[#040e1d] p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Details, Features, Stack */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Status Badges */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {current.status}
                  </span>
                  <span className="text-xs font-mono font-semibold text-cyan-300">
                    {current.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-heading leading-snug">
                  {current.title}
                </h3>

                {/* Description with WordReveal */}
                <WordReveal
                  text={current.description}
                  className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal"
                  delay={0.15}
                />

                {/* Features List */}
                <div className="space-y-2.5 pt-2">
                  {current.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-300 font-medium">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-4">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    TECHNOLOGY STACK
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {current.stack.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono font-semibold text-cyan-300 shadow-2xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                  >
                    <span>Request Architecture Brief</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

              {/* Right Column: Live Telemetry Mockup Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-slate-950 p-6 sm:p-7 text-white shadow-2xl border border-cyan-500/25 relative">
                  
                  {/* Console Header */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="text-xs font-mono text-slate-400 ml-2">
                        moltivay://telemetry.live
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 font-bold">
                      ACTIVE
                    </span>
                  </div>

                  {/* Dynamic Metric 3-Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {current.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-slate-900 rounded-xl p-3 border border-slate-800">
                        <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                          {m.label}
                        </span>
                        <span className="text-sm sm:text-base font-extrabold text-white font-heading">
                          {m.val}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Simulated Telemetry Log Feed */}
                  <div className="bg-slate-900/90 rounded-xl p-4 font-mono text-xs text-slate-300 space-y-2 border border-slate-800/80">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1 border-b border-slate-800">
                      <span>DAEMON DISPATCHER</span>
                      <span className="text-emerald-400">STATUS: OK</span>
                    </div>
                    <div className="text-cyan-400">
                      &gt; [INFO] Worker pool initialized (24 threads)
                    </div>
                    <div className="text-slate-400">
                      &gt; [METRIC] Latency stabilized at {current.latency}
                    </div>
                    <div className="text-slate-400">
                      &gt; [THROUGHPUT] Peak: {current.throughput}
                    </div>
                    <div className="text-emerald-400 flex items-center gap-1.5 pt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>Zero packet loss • Automated failover armed</span>
                    </div>
                  </div>

                  {/* Bottom Verification Seal */}
                  <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      <span>Institutional SLA Audit</span>
                    </div>
                    <span className="font-mono text-slate-500">2026 VERIFIED</span>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default FlagshipShowcase;
