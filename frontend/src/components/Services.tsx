'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  ShieldCheck, 
  BrainCircuit, 
  Users, 
  ArrowRight, 
  Check, 
  Sparkles,
  Layers,
  Cpu,
  Lock,
  Terminal,
  ExternalLink
} from 'lucide-react';
import ScrambleText from './motion/ScrambleText';
import WordReveal from './motion/WordReveal';
import SpotlightCard from './motion/SpotlightCard';
import MagneticButton from './motion/MagneticButton';

const categories = [
  { id: 'all', label: 'All Practice Areas' },
  { id: 'full-stack', label: 'Full Stack Development' },
  { id: 'sqa', label: 'SQA & Test Automation' },
  { id: 'ai-training', label: 'AI Model Training' },
  { id: 'social-va', label: 'Growth & Virtual Assistance' },
];

const services = [
  {
    id: 'full-stack',
    category: 'full-stack',
    title: 'Full Stack Development',
    subtitle: 'Enterprise Web & Distributed Cloud',
    icon: Code2,
    badge: 'CORE ARCHITECTURE',
    description:
      'Robust, high-throughput web applications architected with modern React, Next.js, Node.js runtimes, distributed PostgreSQL databases, and high-concurrency microservices.',
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes'],
    bullets: [
      'Microservices & Distributed REST/GraphQL APIs',
      'Fluid 60 FPS responsive UI/UX architectures',
      'Containerized Kubernetes & Cloudflare edge deployments',
      'Zero-downtime database migrations & replication',
    ],
    metric: '99.99% Availability',
  },
  {
    id: 'sqa',
    category: 'sqa',
    title: 'SQA & Quality Assurance',
    subtitle: 'Automated & Manual Verification',
    icon: ShieldCheck,
    badge: 'ZERO-REGRESSION',
    description:
      'Rigorous software quality assurance protocols designed to detect regressions, stress-test high concurrency loads, and ensure flawless multi-browser compliance.',
    tags: ['Cypress', 'Playwright', 'Jest', 'Load Testing', 'OWASP', 'CI/CD Gates'],
    bullets: [
      'End-to-End automated test suites in CI/CD pipeline',
      'High-concurrency load & stress testing (>50k req/s)',
      'OWASP Top 10 security penetration checks',
      'Zero-regression release gates with instant reporting',
    ],
    metric: '100% Test Coverage',
  },
  {
    id: 'ai-training',
    category: 'ai-training',
    title: 'AI Model Training',
    subtitle: 'Private LLMs & Computer Vision',
    icon: BrainCircuit,
    badge: 'SOVEREIGN AI',
    description:
      'Fine-tuning and deploying open-weights Vision-Language Models, private on-premise LLMs, and intelligent document processing workflows with zero external data leakage.',
    tags: ['LLMs', 'Computer Vision', 'PyTorch', 'MLX', 'Quantization', 'LoRA'],
    bullets: [
      'Private air-gapped model execution & local inference',
      'High-accuracy OCR document extraction pipelines',
      'Domain-specific LoRA fine-tuning on proprietary data',
      'Low-latency Apple Silicon MLX & TensorRT acceleration',
    ],
    metric: '< 45ms Token TTFT',
  },
  {
    id: 'social-va',
    category: 'social-va',
    title: 'Social Media & Virtual Assistant',
    subtitle: 'Growth Operations & Dedicated Support',
    icon: Users,
    badge: '24/7 DEDICATED',
    description:
      'High-retention social media content strategies coupled with dedicated, vetted virtual assistants to handle operations, communications, and customer engagement around the clock.',
    tags: ['Content Strategy', 'Admin Support', '24/7 Ops', 'Analytics', 'SLA'],
    bullets: [
      'Omnichannel social growth campaigns & brand authority',
      'Dedicated technical virtual assistance & ticket handling',
      'Executive calendar, lead triage & inbox management',
      '24/7 client response coverage across US & EU time zones',
    ],
    metric: '< 5min Response Time',
  },
];

export const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            SECTION HEADER WITH SCRAMBLE & ANIMATION
        ========================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span>OUR PRACTICE AREAS // CORE CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-5 font-heading">
            Engineered for Precision Across{' '}
            <ScrambleText
              text="Four Practice Pillars."
              as="span"
              scrambleColor="#2563eb"
              settledClassName="text-blue-600"
              speed={28}
            />
          </h2>

          <WordReveal
            text="From low-latency cloud microservices and automated zero-regression QA to sovereign AI model training and around-the-clock operational growth."
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
            delay={0.2}
          />

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* =========================================================
            SERVICES BENTO GRID WITH STAGGER & HOVER PHYSICS
        ========================================================= */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <AnimatePresence>
            {filteredServices.map((service, idx) => {
              const Icon = service.icon;
              const fromLeft = idx % 2 === 0;
              return (
                <motion.div
                  layout
                  key={service.id}
                  variants={{
                    hidden:  { opacity: 0, x: fromLeft ? -50 : 50, y: 20, scale: 0.95 },
                    visible: { opacity: 1, x: 0, y: 0, scale: 1,
                      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
                    },
                  }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="h-full"
                >
                  <SpotlightCard className="bg-white p-7 sm:p-9 border border-slate-200 shadow-md hover:shadow-2xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between text-slate-900 h-full">
                    {/* Subtle Top Gradient Border on Hover */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Header: Icon, Badge, and Metric */}
                      <div className="flex items-start justify-between mb-6">
                        <motion.div 
                          whileHover={{ rotate: 10, scale: 1.15 }}
                          className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/25 group-hover:scale-110 transition-all duration-300"
                        >
                          <Icon className="w-7 h-7" />
                        </motion.div>

                        <div className="flex flex-col items-end">
                          <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-colors">
                            {service.badge}
                          </span>
                          <span className="text-[11px] font-mono text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            {service.metric}
                          </span>
                        </div>
                      </div>

                      {/* Titles */}
                      <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors font-heading tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mt-1 mb-4">
                        {service.subtitle}
                      </p>

                      {/* Description with WordReveal */}
                      <WordReveal
                        text={service.description}
                        className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal"
                        delay={0.1}
                      />

                      {/* Bullet Points */}
                      <ul className="space-y-2.5 mb-7">
                        {service.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                            <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                    </div>

                    {/* Footer: Tags & Magnetic CTA Link */}
                    <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 text-slate-600 group-hover:bg-blue-50/60 group-hover:text-blue-700 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Magnetic CTA Link */}
                      <MagneticButton strength={0.25}>
                        <Link
                          href="#contact"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 flex-shrink-0 group-hover:translate-x-1 transition-all"
                        >
                          <span>Inquire Practice</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </MagneticButton>

                    </div>

                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
