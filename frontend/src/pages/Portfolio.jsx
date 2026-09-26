import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LetterReveal from '../components/LetterReveal';
import { 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Layers, 
  Code2, 
  Smartphone, 
  Share2, 
  Zap,
  Globe,
  Database,
  X,
  MessageSquare,
  ShieldCheck,
  Cpu,
  Activity
} from 'lucide-react';

const allProjects = [
  {
    id: 'multi-tenant-saas',
    title: 'Multi-Tenant SaaS Platform',
    category: 'Web',
    categoryBadge: 'Multi-Tenant SaaS',
    image: '/projects/multi-tenant-platform.svg',
    description: 'A central Platform Owner dashboard for managing companies, users, activity, subscriptions, and platform analytics.',
    fullOverview: 'The Multi-Tenant SaaS Platform provides separate dashboards for the Platform Owner, Company Admin, Manager, and Employee. Company Admins can invite Managers and Employees by email from the Company Dashboard settings. Each company is assigned a unique tenant ID, keeping its data isolated from other companies.',
    techStack: ['Platform Owner Dashboard', 'Company Dashboards', 'Email Invitations', 'Tenant Isolation'],
    metrics: '4 Role-Based Dashboards',
    timeline: 'Multi-Tenant SaaS',
    architecture: {
      platformOwner: 'Manage companies, users, platform activity, and analytics',
      companyAdmin: 'Company dashboard settings for inviting Managers and Employees by email',
      manager: 'Dedicated dashboard for company Managers',
      employee: 'Dedicated dashboard for company Employees',
      tenantIsolation: 'A unique tenant ID keeps each company\'s data separate'
    },
    highlights: [
      'Platform Owner, Company Admin, Manager, and Employee dashboards',
      'Company Admins invite Managers and Employees by email',
      'Unique tenant ID and isolated data for every company'
    ],
    color: 'from-indigo-600 to-cyan-500'
  },
  {
    id: 'multi-store-pos',
    title: 'Multi Point of Sale',
    category: 'Web',
    categoryBadge: 'Point of Sale',
    image: '/projects/multi-store-pos.svg',
    description: 'An easy-to-use cloud POS for multi-store management, sales, inventory, and business reporting, with offline support and real-time analytics.',
    fullOverview: 'Multi Point of Sale is a cloud-based POS platform that helps retailers manage multiple stores, track sales and inventory in real time, and review detailed business reports. It supports offline operations, protects business data, and provides a simple interface for retail teams.',
    techStack: ['Cloud POS', 'Offline Support', 'Multi-Store Management', 'Real-Time Analytics', 'Detailed Reports'],
    metrics: 'Cloud-Based POS',
    timeline: 'Multi-Store Retail',
    architecture: {
      cloudAccess: 'Access business data securely from anywhere',
      offlineSupport: 'Continue point-of-sale operations without an internet connection',
      storeManagement: 'Manage multiple stores, outlets, and locations in one place',
      reporting: 'Review detailed sales, inventory, and performance reports'
    },
    highlights: [
      'Manage multiple stores and inventory in real time',
      'Offline support with secure, reliable operations',
      'Easy-to-use interface and detailed business reports'
    ],
    color: 'from-blue-600 to-emerald-500'
  },
  {
    id: 'paysphere',
    title: 'PaySphere — Global Fintech & Wealth Management SaaS',
    category: 'Web',
    categoryBadge: 'Fintech SaaS',
    image: '/projects/fintech.jpg',
    description: 'High-speed cloud financial platform managing multi-currency accounts, automated asset rebalancing, real-time portfolio analytics, and instant Stripe-backed payout settlements.',
    fullOverview: 'PaySphere required a zero-latency, highly resilient microservices architecture capable of handling multi-million-dollar daily settlement batches. Moltivay engineered an event-driven system with MongoDB clustering, Redis transaction caching, and sub-50ms query latency.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Stripe API'],
    metrics: '$140M+ Volume Processed',
    timeline: '4 Months',
    architecture: {
      frontend: 'React 18, Tailwind CSS, Recharts for financial analytics',
      backend: 'Node.js, Express microservices, Stripe Webhooks',
      database: 'MongoDB Atlas with auto-sharding & Redis cache',
      compliance: 'PCI-DSS Level 1 audit ready, AES-256 encryption'
    },
    highlights: ['Multi-currency wallet engine', 'PCI-DSS compliance grade', 'Sub-50ms API responses'],
    color: 'from-blue-600 to-electric'
  },
  {
    id: 'vitalpulse',
    title: 'VitalPulse — Telehealth & Remote Patient Monitoring App',
    category: 'Mobile',
    categoryBadge: 'iOS & Android Telehealth',
    image: '/projects/mobile-health.jpg',
    description: 'Dual-platform iOS and Android healthcare system featuring real-time biometric telemetry, secure HIPAA-ready doctor appointments, and vital tracking.',
    fullOverview: 'VitalPulse connects clinical patients with doctors using Bluetooth BLE peripheral monitoring. Patients stream real-time ECG and heart rate measurements to doctors over encrypted WebRTC video sessions.',
    techStack: ['React Native', 'TypeScript', 'WebSockets', 'Node.js', 'MongoDB'],
    metrics: '+40% Patient Retention',
    timeline: '5 Months',
    architecture: {
      frontend: 'React Native for iOS and Android, 60fps gesture handling',
      backend: 'Node.js cluster with persistent WebSocket telemetry',
      database: 'MongoDB HIPAA-compliant cluster + SQLite offline storage',
      hardware: 'Bluetooth Low Energy (BLE) vital monitor pairing'
    },
    highlights: ['Live Bluetooth ECG telemetry', 'Encrypted WebRTC consultations', 'Offline-first SQLite sync'],
    color: 'from-electric to-indigo-600'
  },
  {
    id: 'socialsync',
    title: 'SocialSync AI — Autonomous Social Media Assistant',
    category: 'Social',
    categoryBadge: '⭐ AI Marketing Suite',
    image: '/projects/social-assistant.jpg',
    description: 'Autonomous AI assistant that generates viral LinkedIn and Twitter copy, schedules omnichannel campaigns across calendar views, and tracks engagement growth.',
    fullOverview: 'SocialSync AI eliminates the manual grind of daily social media management. Powered by customized LLMs, the platform identifies trending topics, drafts viral thought-leadership threads, and auto-schedules posts across LinkedIn, X, and Instagram.',
    techStack: ['React', 'OpenAI API', 'Node.js', 'Express', 'Tailwind CSS'],
    metrics: '20+ Hours Saved / Week',
    timeline: '3 Months',
    architecture: {
      frontend: 'React with interactive Drag-and-Drop calendar',
      aiEngine: 'Fine-tuned LLM prompts & viral hook generators',
      backend: 'Node.js scheduler queue with BullMQ and Redis',
      analytics: 'Social Graph sentiment & audience retention tracking'
    },
    highlights: ['Autonomous post generator', 'Smart time-zone queueing', 'Sentiment analytics dashboard'],
    color: 'from-orange-500 to-accent'
  },
  {
    id: 'cloudnexus',
    title: 'CloudNexus — Distributed Enterprise DevOps Portal',
    category: 'Web',
    categoryBadge: 'Cloud Infrastructure',
    image: '/projects/fintech.jpg',
    description: 'Centralized observability portal for Kubernetes clusters, continuous integration pipeline metrics, and automated infrastructure provisioning.',
    fullOverview: 'CloudNexus gives infrastructure teams real-time visibility into thousands of containerized microservices. Moltivay built a high-throughput telemetry aggregator that visualizes CPU/Memory spikes and automates canary rollbacks.',
    techStack: ['React', 'Go', 'Docker', 'GraphQL', 'Tailwind CSS', 'AWS'],
    metrics: '99.99% Guaranteed Uptime',
    timeline: '6 Months',
    architecture: {
      frontend: 'React with real-time Canvas telemetry graphing',
      backend: 'Go & Node.js edge proxy with GraphQL subscriptions',
      infrastructure: 'Docker, Kubernetes, AWS CloudWatch interop',
      security: 'Role-based IAM access controls with SSO SAML'
    },
    highlights: ['Real-time cluster telemetry', 'Automated canary deployments', 'Granular IAM RBAC permissions'],
    color: 'from-blue-700 to-navy'
  },
  {
    id: 'fitmotion',
    title: 'FitMotion — AI Form Coach & Kinetic Workout Mobile App',
    category: 'Mobile',
    categoryBadge: 'AI Computer Vision',
    image: '/projects/mobile-health.jpg',
    description: 'Computer-vision powered mobile personal trainer analyzing exercise posture and rep execution with on-device CoreML and TensorFlow Lite.',
    fullOverview: 'FitMotion acts as a personal fitness trainer in your pocket. Using native smartphone cameras, the on-device AI tracks 17 joint landmarks in real time, delivering instant haptic corrections when a user rounds their spine or misses proper squat depth.',
    techStack: ['Flutter', 'Python', 'CoreML', 'Firebase', 'Node.js'],
    metrics: '150k+ Active Workouts',
    timeline: '4.5 Months',
    architecture: {
      frontend: 'Flutter cross-platform with custom native ML views',
      aiModel: 'On-device CoreML (iOS) and TFLite (Android) 30fps model',
      backend: 'Firebase Auth & Node.js workout telemetry sync',
      haptics: 'Custom sensory vibration engine on form errors'
    },
    highlights: ['Real-time joint tracking', 'Haptic feedback on form errors', 'Personalized audio coaching'],
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'trendpulse',
    title: 'TrendPulse — Cross-Network AI Content Engine',
    category: 'Social',
    categoryBadge: '⭐ Viral Intelligence',
    image: '/projects/social-assistant.jpg',
    description: 'Generative trend discovery tool enabling brands to turn breaking industry news into viral carousel slides and engaging social threads.',
    fullOverview: 'TrendPulse constantly scrapes tech news feeds, financial wires, and Reddit discussions. When a viral topic emerges, it instantly creates formatted PDF carousels and Twitter mega-threads ready for one-click publishing.',
    techStack: ['React', 'LangChain', 'Node.js', 'PostgreSQL', 'Redis'],
    metrics: '3.4x Engagement Lift',
    timeline: '2.5 Months',
    architecture: {
      frontend: 'React carousel studio with live slide previewing',
      intelligence: 'LangChain retrieval pipeline & summarization agents',
      backend: 'Node.js distributed worker fleet with Redis',
      export: 'Automated headless Chrome PDF/Image carousel renderer'
    },
    highlights: ['Live news trend scraper', 'Auto-generated carousel decks', 'Multi-handle broadcast queue'],
    color: 'from-accent to-rose-500'
  }
];

const techPartners = [
  'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 
  'TypeScript', 'React Native', 'Flutter', 'Python', 'OpenAI', 'Brevo API', 'Docker', 'AWS'
];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterCategories = [
    { id: 'All', label: 'All Projects', count: allProjects.length },
    { id: 'Web', label: 'Web Applications', count: allProjects.filter(p => p.category === 'Web').length },
    { id: 'Mobile', label: 'Mobile Apps (iOS & Android)', count: allProjects.filter(p => p.category === 'Mobile').length },
    { id: 'Social', label: '⭐ Social Media Assistant', count: allProjects.filter(p => p.category === 'Social').length },
  ];

  const filteredProjects = activeFilter === 'All'
    ? allProjects
    : allProjects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-electric selection:text-white">
      <Navbar />

      <main className="flex-grow pt-24 sm:pt-28">
        
        {/* =========================================
            PORTFOLIO HERO SECTION
        ========================================= */}
        <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
          
          <motion.div 
            animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-96 h-96 bg-electric/20 rounded-full blur-3xl pointer-events-none" 
          />
          <motion.div 
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-5 left-10 w-80 h-80 bg-accent/20 rounded-full blur-2xl pointer-events-none" 
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-electric text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-electric animate-spin" style={{ animationDuration: '8s' }} />
              <span>Proven Global Deployments & Measurable Outcomes</span>
            </motion.div>

            <LetterReveal
              as="h1"
              speed="headline"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6"
            >
              Featured Works & <span className="text-electric">Engineering Case Studies</span>
            </LetterReveal>

            <LetterReveal
              as="p"
              speed="paragraph"
              className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Explore how Moltivay Solutions architects high-speed web apps, native mobile apps, and autonomous Social Media Assistant systems with zero compromises.
            </LetterReveal>

            {/* Impact Metric Strip */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
            >
              <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-clean hover:shadow-card-hover transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-extrabold text-electric font-heading">$140M+</div>
                <div className="text-xs text-text-muted font-medium mt-1">Processed Volume</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-clean hover:shadow-card-hover transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">50+</div>
                <div className="text-xs text-text-muted font-medium mt-1">Digital Products Shipped</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-clean hover:shadow-card-hover transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-extrabold text-accent font-heading">20+ Hrs</div>
                <div className="text-xs text-text-muted font-medium mt-1">Saved / Wk via AI Assistant</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-clean hover:shadow-card-hover transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-heading">99.99%</div>
                <div className="text-xs text-text-muted font-medium mt-1">SLA Cloud Reliability</div>
              </div>
            </motion.div>

            {/* Interactive Filter Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto"
            >
              {filterCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center space-x-2 ${
                    activeFilter === cat.id
                      ? 'bg-electric text-white shadow-electric-glow scale-105'
                      : 'bg-white text-slate-600 hover:text-navy hover:bg-slate-100 border border-slate-200/80 shadow-sm'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    activeFilter === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </motion.div>

          </div>
        </section>

        {/* =========================================
            PROJECT CARDS SHOWCASE GRID
        ========================================= */}
        <section className="py-12 pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
            >
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.92, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-clean hover:shadow-card-hover transition-all duration-300 flex flex-col group hover:-translate-y-2 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Project Mockup Image with Zoom & Floating Pill */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                        <span className="text-xs font-bold text-white bg-electric/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-lg flex items-center space-x-1.5">
                          <span>Inspect Architecture</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                      
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-navy shadow-sm">
                          {project.categoryBadge}
                        </span>
                      </div>

                      {/* Floating Key Metric Pill */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                        <div className="bg-navy/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 font-bold flex items-center space-x-1.5">
                          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{project.metrics}</span>
                        </div>
                        <div className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-mono">
                          {project.timeline}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-navy group-hover:text-electric transition-colors mb-3 leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-sm text-text-muted leading-relaxed font-normal mb-5">
                          {project.description}
                        </p>

                        {/* Architectural Highlights */}
                        <div className="space-y-2 pt-2 border-t border-slate-100 mb-5">
                          {project.highlights.map((h, i) => (
                            <div key={i} className="flex items-center space-x-2 text-xs text-navy/80 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-electric flex-shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-electric transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* CTA Link */}
                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(project);
                            }}
                            className="inline-flex items-center text-xs font-bold text-navy group-hover:text-electric uppercase tracking-wider transition-colors"
                          >
                            <span>Inspect Specs</span>
                            <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
                          </button>
                          
                          <a
                            href={`https://wa.me/923235678381?text=Hello%20Moltivay,%20tell%20me%20about%20${encodeURIComponent(project.title)}`}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs text-slate-400 hover:text-emerald-600 font-semibold transition-colors flex items-center space-x-1"
                          >
                            <MessageSquare className="w-3 h-3" />
                            <span>Inquire</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            INTERACTIVE MODAL / DETAIL DRAWER
        ========================================= */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative border border-slate-200"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-electric">
                      {selectedProject.categoryBadge}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-3 leading-snug">
                      {selectedProject.title}
                    </h2>
                  </div>

                  <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-slate-100 relative shadow-sm">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-navy/90 backdrop-blur-md px-4 py-2 rounded-xl text-white text-xs font-bold flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span>{selectedProject.metrics}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Project Overview</h3>
                    <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                      {selectedProject.fullOverview || selectedProject.description}
                    </p>
                  </div>

                  {/* Architecture Specs Breakdown */}
                  {selectedProject.architecture && (
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 text-xs">
                      <h4 className="font-bold text-navy uppercase tracking-wider flex items-center space-x-2">
                        <Cpu className="w-4 h-4 text-electric" />
                        <span>System Architecture Breakdown</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600">
                        {Object.entries(selectedProject.architecture).map(([key, val]) => (
                          <div key={key} className="bg-white p-3 rounded-xl border border-slate-200/60">
                            <span className="block font-bold text-navy capitalize text-[11px] mb-0.5">{key}:</span>
                            <span className="text-text-muted">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech stack chips */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      {['multi-store-pos', 'multi-tenant-saas'].includes(selectedProject.id) ? 'Platform Features' : 'Technologies Deployed'}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-blue-50 text-electric font-semibold text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3 items-center justify-between">
                    <Link
                      to="/contact"
                      className="px-6 py-3 rounded-xl bg-electric text-white text-xs font-bold hover:bg-electric-hover shadow-electric-glow transition-all"
                    >
                      Request Similar Architecture
                    </Link>
                    <a
                      href={`https://wa.me/923235678381?text=Hello%20Moltivay%20Solutions,%20I%20would%20like%20to%20discuss%20${encodeURIComponent(selectedProject.title)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all flex items-center space-x-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Inquire via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =========================================
            TECHNICAL TOOLING & STACK BAR
        ========================================= */}
        <section className="py-16 bg-slate-50 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-4">
              Core Engineering Ecosystem
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
              {techPartners.map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm text-xs font-semibold text-navy hover:border-electric hover:text-electric transition-colors cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            BOTTOM HIGH-IMPACT CONSULTATION CTA
        ========================================= */}
        <section className="py-20 bg-navy text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
              Ready to engineer your next flagship product?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              We provide an upfront roadmap, architecture specification, and milestone-based estimation with zero surprises.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-electric text-white text-sm font-semibold hover:bg-electric-hover shadow-electric-glow transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Book Architecture Discovery</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="https://wa.me/923235678381?text=Hello%20Moltivay%20Solutions,%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition-all shadow-sm"
              >
                <span>Chat on WhatsApp: +92 323 5678381</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
