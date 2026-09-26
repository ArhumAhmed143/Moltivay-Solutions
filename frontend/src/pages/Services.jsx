import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LetterReveal from '../components/LetterReveal';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Share2, 
  CheckCircle2, 
  Headphones, 
  ArrowRight, 
  Sparkles, 
  Check,
  Code2,
  Layers,
  ShieldCheck,
  Zap,
  Activity,
  Terminal,
  Cpu,
  BarChart3,
  Calendar,
  Clock,
  Send
} from 'lucide-react';

const serviceDetails = [
  {
    id: 'web-dev',
    category: 'web',
    icon: Globe,
    title: 'Web App Development',
    tagline: 'Modern, scalable, cloud-native web architectures engineered for peak performance.',
    description: 'We develop robust enterprise SaaS applications, high-traffic consumer portals, and cloud backends. Our full-stack engineering team pairs fluid React frontends with resilient Node.js backends and optimized MongoDB databases.',
    badge: 'Enterprise Architecture',
    color: 'from-blue-600 to-electric',
    accentColor: 'border-blue-500/30 text-electric bg-blue-50',
    deliverables: [
      'Custom SaaS & B2B Web Applications',
      'Progressive Web Apps (PWA) with offline support',
      'REST & GraphQL Microservices Architecture',
      'Complex Database Schema Design & Caching (Redis/MongoDB)',
      'Third-party API & Payment Gateway Integrations (Stripe, PayPal, Brevo)'
    ],
    tech: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
    previewType: 'code'
  },
  {
    id: 'mobile-dev',
    category: 'mobile',
    icon: Smartphone,
    title: 'Mobile App Development',
    subtitle: '(iOS + Android)',
    tagline: 'High-speed native and cross-platform mobile apps delivering fluid UX.',
    description: 'We craft intuitive mobile experiences tailored for iOS and Android devices. From concept to App Store and Google Play deployment, our mobile engineers build rock-solid architectures that leverage device hardware capabilities smoothly.',
    badge: 'Dual Platform 60fps',
    color: 'from-electric to-indigo-600',
    accentColor: 'border-indigo-500/30 text-indigo-600 bg-indigo-50',
    deliverables: [
      'Native iOS (Swift) & Android (Kotlin) Development',
      'Cross-Platform Mobile Apps (React Native / Flutter)',
      'Real-Time Push Notifications & In-App Messaging',
      'Bluetooth BLE, GPS, Camera, Biometric Telemetry Interop',
      'Offline Data Synchronization & SQLite Local Storage'
    ],
    tech: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase', 'RESTful APIs'],
    previewType: 'mobile'
  },
  {
    id: 'ui-ux',
    category: 'design',
    icon: Palette,
    title: 'UI/UX Design & Prototyping',
    tagline: 'Human-centered interfaces, user journey mapping, and conversion-focused design systems.',
    description: 'Great software starts with empathetic, research-backed design. We design comprehensive design systems, interactive prototypes, and frictionless user flows that maximize retention and elevate brand perception.',
    badge: 'Pixel-Perfect Fidelity',
    color: 'from-indigo-500 to-purple-600',
    accentColor: 'border-purple-500/30 text-purple-600 bg-purple-50',
    deliverables: [
      'In-Depth User Persona Research & Journey Mapping',
      'Interactive Figma Prototypes & Wireframing',
      'Scalable Design Systems & UI Component Libraries',
      'Usability Testing, Heuristic Evaluations, & Audits',
      'Micro-interactions and Delightful Motion Choreography'
    ],
    tech: ['Figma', 'Adobe Creative Suite', 'Tokens Studio', 'Protopie', 'Design Systems'],
    previewType: 'design'
  },
  {
    id: 'social-media-assistant',
    category: 'social',
    icon: Share2,
    title: 'Social Media Assistant',
    isSpecial: true,
    tagline: 'Intelligent AI-driven social content automation, scheduling, and multichannel lead growth.',
    description: 'Our proprietary Social Media Assistant service couples cutting-edge generative AI models with automated scheduling workflows. Transform your brand presence across LinkedIn, X (Twitter), and Instagram with auto-generated viral hooks, smart content calendars, and audience engagement tracking.',
    badge: '⭐ Autonomous AI Suite',
    color: 'from-orange-500 to-accent',
    accentColor: 'border-accent/40 text-accent bg-orange-50',
    deliverables: [
      'Multi-Platform Content Calendar & Auto-Scheduler',
      'AI-Powered Copywriting: Viral Hooks, Carousels, & Long-Form Thought Leadership',
      'Intelligent Hashtag & Trending Topic Trend Discovery',
      'Automated Lead Inbound Response Assistant',
      'Performance Analytics, Follower Growth, & Engagement Audits'
    ],
    tech: ['Generative AI LLMs', 'Social Graph APIs', 'Node.js Schedulers', 'Sentiment Analysis', 'Custom Dashboards'],
    previewType: 'social'
  },
  {
    id: 'qa-testing',
    category: 'qa',
    icon: CheckCircle2,
    title: 'QA & Automated Testing',
    tagline: 'Rigorous manual and automated testing guaranteeing stability, security, and speed.',
    description: 'Quality is embedded into our development lifecycle from day one. Our QA engineers execute rigorous automated test suites and exploratory tests to catch edge cases and ensure zero regressions upon every release.',
    badge: 'Zero-Defect Guarantee',
    color: 'from-emerald-500 to-teal-600',
    accentColor: 'border-emerald-500/30 text-emerald-600 bg-emerald-50',
    deliverables: [
      'End-to-End Automated Testing (Playwright / Cypress)',
      'Cross-Browser & Multi-Device Compatibility Auditing',
      'API Regression Testing & Postman Test Collections',
      'Load Testing & Stress Benchmarking',
      'Security Vulnerability & OWASP Compliance Checks'
    ],
    tech: ['Jest', 'Playwright', 'Postman', 'K6 Load Testing', 'CI/CD GitHub Actions'],
    previewType: 'qa'
  },
  {
    id: 'maintenance-support',
    category: 'support',
    icon: Headphones,
    title: '24/7 Maintenance & Cloud Support',
    tagline: '24/7 proactive system monitoring, security updates, and performance optimization.',
    description: 'Shipping software is only the first step. Moltivay Solutions provides ongoing maintenance, proactive infrastructure health checks, library upgrades, and dedicated engineering support to protect your business uptime.',
    badge: '99.98% SLA Uptime',
    color: 'from-blue-600 to-navy',
    accentColor: 'border-blue-700/30 text-blue-700 bg-blue-50',
    deliverables: [
      '24/7 Server & Database Health Monitoring',
      'Scheduled Security Patching & Dependency Updates',
      'Performance Tuning & Database Index Optimization',
      'Regular Cloud Backups & Disaster Recovery Protocols',
      'Dedicated SLA Support & Feature Iterations'
    ],
    tech: ['CloudWatch', 'Docker', 'MongoDB Atlas', 'Datadog', 'Brevo API', 'Sentry'],
    previewType: 'support'
  }
];

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'social', label: '⭐ Social Media Assistant' },
    { id: 'qa', label: 'QA & Testing' },
    { id: 'support', label: 'Cloud & Support' },
  ];

  const filteredServices = activeTab === 'all'
    ? serviceDetails
    : serviceDetails.filter(s => s.category === activeTab);

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-electric selection:text-white">
      <Navbar />

      <main className="flex-grow pt-24 sm:pt-28">
        
        {/* =========================================
            HERO SECTION WITH ANIMATED AMBIENT EFFECTS
        ========================================= */}
        <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white">
          {/* Animated Background Gradients & Tech Grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
          <motion.div 
            animate={{ scale: [1, 1.25, 1], opacity: [0.12, 0.22, 0.12] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-96 h-96 bg-electric/20 rounded-full blur-3xl pointer-events-none" 
          />
          <motion.div 
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-5 left-10 w-80 h-80 bg-accent/20 rounded-full blur-2xl pointer-events-none" 
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-electric text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-electric animate-spin" style={{ animationDuration: '8s' }} />
              <span>Full-Stack Engineering Excellence</span>
            </motion.div>

            {/* Main Title */}
            <LetterReveal
              as="h1"
              speed="headline"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6"
            >
              Engineering Digital Products That <span className="text-electric">Dominate Markets</span>
            </LetterReveal>

            {/* Subtext */}
            <LetterReveal
              as="p"
              speed="paragraph"
              className="text-lg sm:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed mb-10"
            >
              From custom enterprise web platforms and iOS/Android applications to our autonomous AI Social Media Assistant, Moltivay Solutions delivers clean code and high velocity.
            </LetterReveal>

            {/* Key Metrics Ribbon */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
            >
              <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-clean hover:shadow-card-hover transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-extrabold text-electric font-heading">99.98%</div>
                <div className="text-xs text-text-muted font-medium mt-1">Uptime SLA Reliability</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-clean hover:shadow-card-hover transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">2-Week</div>
                <div className="text-xs text-text-muted font-medium mt-1">Agile Sprint Delivery</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-clean hover:shadow-card-hover transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-extrabold text-accent font-heading">100%</div>
                <div className="text-xs text-text-muted font-medium mt-1">Automated QA Audited</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-clean hover:shadow-card-hover transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-heading">24/7</div>
                <div className="text-xs text-text-muted font-medium mt-1">Executive Support</div>
              </div>
            </motion.div>

            {/* Interactive Filter Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto"
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    activeTab === cat.id
                      ? 'bg-electric text-white shadow-electric-glow scale-105'
                      : 'bg-white text-slate-600 hover:text-navy hover:bg-slate-100 border border-slate-200/70 shadow-sm'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </motion.div>

          </div>
        </section>

        {/* =========================================
            DETAILED SERVICES SHOWCASE CARDS
        ========================================= */}
        <section className="py-12 pb-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    layout
                    key={service.id}
                    id={service.id}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`scroll-mt-32 rounded-3xl p-8 sm:p-12 lg:p-14 border transition-all duration-300 ${
                      service.isSpecial
                        ? 'bg-gradient-to-br from-orange-50/50 via-white to-blue-50/40 border-accent/40 shadow-[0_15px_40px_rgba(255,107,53,0.12)] hover:shadow-[0_20px_50px_rgba(255,107,53,0.18)]'
                        : 'bg-white border-slate-200/80 shadow-clean hover:shadow-card-hover hover:border-blue-200'
                    }`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                      
                      {/* Left: Info, Deliverables & Tech Badges */}
                      <div className="lg:col-span-7 space-y-6">
                        
                        <div className="flex items-center space-x-4">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${service.color} shadow-md`}>
                            <Icon className="w-7 h-7" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs font-bold uppercase tracking-wider text-electric">
                                Service 0{index + 1}
                              </span>
                              <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${service.accentColor}`}>
                                {service.badge}
                              </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mt-1">
                              {service.title} {service.subtitle && <span className="text-text-muted font-normal text-lg">{service.subtitle}</span>}
                            </h2>
                          </div>
                        </div>

                        <p className="text-base sm:text-lg font-medium text-navy/90 leading-snug">
                          {service.tagline}
                        </p>

                        <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                          {service.description}
                        </p>

                        {/* Deliverables Checklist with Hover Animation */}
                        <div className="pt-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                            Key Deliverables & Capabilities
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {service.deliverables.map((item, i) => (
                              <div 
                                key={i} 
                                className="flex items-start space-x-2.5 text-xs sm:text-sm text-navy/90 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                              >
                                <Check className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="pt-2 flex flex-wrap gap-2 items-center">
                          <span className="text-xs font-semibold text-slate-400 mr-2">Core Tech:</span>
                          {service.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-100 text-navy hover:bg-blue-50 hover:text-electric transition-colors"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Action CTA */}
                        <div className="pt-4 flex items-center space-x-4">
                          <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-electric text-white text-sm font-semibold hover:bg-electric-hover shadow-clean hover:shadow-electric-glow transition-all duration-200 transform hover:-translate-y-0.5"
                          >
                            <span>Request Architecture Estimate</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                          <a
                            href={`https://wa.me/923235678381?text=Hello%20Moltivay,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center text-xs font-bold text-navy hover:text-emerald-600 transition-colors"
                          >
                            <span>WhatsApp Fast Track</span>
                          </a>
                        </div>

                      </div>

                      {/* Right: Dynamic Interactive Preview Mockup Box */}
                      <div className="lg:col-span-5">
                        
                        {/* Service Type 1: Web Dev Code Preview */}
                        {service.previewType === 'code' && (
                          <div className="rounded-2xl bg-navy text-white p-5 shadow-clean-lg border border-navy-800 space-y-4">
                            <div className="flex items-center justify-between pb-3 border-b border-navy-800 text-xs">
                              <div className="flex space-x-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                              </div>
                              <span className="font-mono text-[11px] text-slate-400">ServerEngine.js</span>
                              <Terminal className="w-4 h-4 text-electric" />
                            </div>
                            <div className="font-mono text-xs text-slate-300 space-y-1.5 leading-relaxed overflow-x-auto py-2">
                              <div><span className="text-purple-400">const</span> app = express();</div>
                              <div><span className="text-blue-400">app</span>.use(cors(), express.json());</div>
                              <div className="text-slate-500">// Connect scalable MongoDB cluster</div>
                              <div><span className="text-purple-400">await</span> mongoose.connect(MONGO_URI);</div>
                              <div className="text-emerald-400">✓ Database pool: healthy</div>
                              <div className="text-electric">✓ Latency: 12ms (Global Edge)</div>
                            </div>
                            <div className="p-3 bg-navy-800 rounded-xl flex items-center justify-between text-xs">
                              <span className="text-slate-300">Target Frameworks:</span>
                              <span className="text-emerald-400 font-semibold">React + Vite + Node</span>
                            </div>
                          </div>
                        )}

                        {/* Service Type 2: Mobile App Preview */}
                        {service.previewType === 'mobile' && (
                          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 border border-blue-100 shadow-clean-lg text-navy space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Smartphone className="w-5 h-5 text-electric" />
                                <span className="font-bold text-sm">Dual App Deployment</span>
                              </div>
                              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">App Store & Play</span>
                            </div>
                            <div className="space-y-2.5 pt-2">
                              <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-sm flex items-center justify-between">
                                <span className="text-xs font-semibold">iOS Swift Native Interop</span>
                                <span className="text-xs text-electric font-mono">60 FPS Fluid</span>
                              </div>
                              <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-sm flex items-center justify-between">
                                <span className="text-xs font-semibold">Android Kotlin Architecture</span>
                                <span className="text-xs text-electric font-mono">Zero Lag</span>
                              </div>
                              <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-sm flex items-center justify-between">
                                <span className="text-xs font-semibold">Push Telemetry & Offline DB</span>
                                <span className="text-xs text-emerald-600 font-semibold">SQLite Ready</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Service Type 3: UI/UX Preview */}
                        {service.previewType === 'design' && (
                          <div className="rounded-2xl bg-white p-6 border border-purple-100 shadow-clean-lg space-y-4">
                            <div className="flex items-center justify-between text-xs text-purple-700 font-bold uppercase tracking-wider">
                              <span>Figma Design Tokens</span>
                              <Palette className="w-4 h-4 text-purple-600" />
                            </div>
                            <div className="grid grid-cols-4 gap-2 py-2">
                              <div className="h-12 rounded-xl bg-navy flex items-center justify-center text-[10px] text-white font-mono">#0A1628</div>
                              <div className="h-12 rounded-xl bg-electric flex items-center justify-center text-[10px] text-white font-mono">#0066FF</div>
                              <div className="h-12 rounded-xl bg-accent flex items-center justify-center text-[10px] text-white font-mono">#FF6B35</div>
                              <div className="h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[10px] text-navy font-mono">#F4F7FC</div>
                            </div>
                            <div className="p-3 bg-purple-50 rounded-xl text-xs text-purple-900 font-medium">
                              Built with responsive autolayout, component variables, and full accessibility WCAG AA compliance.
                            </div>
                          </div>
                        )}

                        {/* Service Type 4: Social Media Assistant AI Preview ⭐ */}
                        {service.previewType === 'social' && (
                          <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-accent text-white p-6 shadow-xl relative overflow-hidden space-y-4">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
                            <div className="flex items-center justify-between relative z-10">
                              <div className="flex items-center space-x-2">
                                <Zap className="w-5 h-5 text-yellow-300" />
                                <span className="font-bold text-sm">Autonomous Assistant Live</span>
                              </div>
                              <span className="text-[10px] uppercase font-extrabold bg-black/20 px-2.5 py-1 rounded-full">AI Schedulers</span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl space-y-2 border border-white/20 text-xs">
                              <div className="text-yellow-200 font-bold text-[11px]">Prompt: Generate Viral SaaS Hook</div>
                              <p className="text-white/90 italic">"Here are 3 high-converting LinkedIn hooks generated with automated multichannel queueing for Twitter & IG..."</p>
                              <div className="flex items-center justify-between pt-2 border-t border-white/20 text-[11px] text-white/80">
                                <span>Multi-Platform Synced</span>
                                <span className="font-bold text-white">45 Posts Scheduled</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-xs pt-1">
                              <span>Weekly Time Saved:</span>
                              <span className="font-bold bg-white text-accent px-2 py-0.5 rounded-md">20+ Hours / Week</span>
                            </div>
                          </div>
                        )}

                        {/* Service Type 5: QA Testing Preview */}
                        {service.previewType === 'qa' && (
                          <div className="rounded-2xl bg-white p-6 border border-emerald-100 shadow-clean-lg space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Automated QA Suite</span>
                              <Activity className="w-4 h-4 text-emerald-600" />
                            </div>
                            <div className="space-y-2 text-xs">
                              <div className="flex items-center justify-between p-2.5 bg-emerald-50 text-emerald-900 rounded-lg">
                                <span>✓ End-to-End Test Suite</span>
                                <span className="font-mono font-bold text-emerald-700">142/142 Passed</span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 bg-slate-50 text-navy rounded-lg">
                                <span>✓ OWASP Security Scan</span>
                                <span className="font-semibold text-emerald-600">Zero Vulnerabilities</span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 bg-slate-50 text-navy rounded-lg">
                                <span>✓ Multi-Device Load Test</span>
                                <span className="font-mono text-electric">10,000 Concurrent Req</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Service Type 6: Maintenance Preview */}
                        {service.previewType === 'support' && (
                          <div className="rounded-2xl bg-navy-900 text-white p-6 shadow-clean-lg border border-navy-800 space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                                <span className="text-xs font-bold text-emerald-400">Live Uptime Monitor</span>
                              </div>
                              <span className="text-[11px] font-mono text-slate-400">Global Cluster</span>
                            </div>
                            <div className="grid grid-cols-2 gap-3 pt-2">
                              <div className="bg-navy-800 p-3 rounded-xl">
                                <div className="text-[11px] text-slate-400">Average Uptime</div>
                                <div className="text-xl font-bold text-white mt-1">99.99%</div>
                              </div>
                              <div className="bg-navy-800 p-3 rounded-xl">
                                <div className="text-[11px] text-slate-400">SLA Response</div>
                                <div className="text-xl font-bold text-electric mt-1">&lt; 15 min</div>
                              </div>
                            </div>
                            <div className="text-xs text-slate-300 bg-navy-800/80 p-3 rounded-xl">
                              24/7 proactive patch management, automated backups, and emergency engineering escalation.
                            </div>
                          </div>
                        )}

                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </section>

        {/* =========================================
            5-STEP PRODUCT DELIVERY LIFECYCLE
        ========================================= */}
        <section className="py-20 bg-slate-50/80 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-electric text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 block">
                Predictable Engineering Cadence
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-4">
                How We Deliver Your Product From Concept to Scale
              </h2>
              <p className="text-base sm:text-lg text-text-muted">
                A disciplined, transparent delivery framework engineered to eliminate project delays, scope creep, and technical debt.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                {
                  step: '01',
                  title: 'Discovery & Blueprint',
                  desc: 'Comprehensive technical scoping, database schema architecture, and milestone roadmapping with strict NDAs.',
                  icon: Terminal,
                  tag: 'Days 1–3'
                },
                {
                  step: '02',
                  title: 'UI/UX Prototyping',
                  desc: 'High-fidelity Figma wireframes, design tokens, and user journey flows tested for maximum conversion.',
                  icon: Palette,
                  tag: 'Sprint 1'
                },
                {
                  step: '03',
                  title: '2-Week Sprints',
                  desc: 'Rapid full-stack engineering with daily standups, direct Slack sync, and Friday staging environment releases.',
                  icon: Zap,
                  tag: 'Continuous'
                },
                {
                  step: '04',
                  title: 'Automated QA Audit',
                  desc: 'Playwright E2E suites, multi-device regression passes, and OWASP security vulnerability auditing.',
                  icon: ShieldCheck,
                  tag: 'Zero-Defect'
                },
                {
                  step: '05',
                  title: 'Cloud Launch & 24/7 SLA',
                  desc: 'Production rollout on AWS/Docker clusters paired with 24/7 uptime monitoring and automated backups.',
                  icon: Activity,
                  tag: '99.98% SLA'
                }
              ].map((item, idx) => {
                const StepIcon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-clean hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="font-heading font-extrabold text-2xl text-slate-300 group-hover:text-electric transition-colors">
                          {item.step}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-electric">
                          {item.tag}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-slate-50 text-navy group-hover:bg-electric group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                        <StepIcon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-navy mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================
            BOTTOM HIGH-IMPACT CONSULTATION CTA
        ========================================= */}
        <section className="py-20 bg-navy text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric/15 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-800 text-electric text-xs font-semibold tracking-wider uppercase mb-2">
              <Sparkles className="w-4 h-4 text-electric" />
              <span>Transform Your Digital Roadmap</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Have a project in mind? Let's talk.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you need to architect a new web platform, release a mobile app, or automate your brand with our Social Media Assistant, our team is ready to help you ship.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-electric text-white text-base font-semibold shadow-clean hover:bg-electric-hover transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-electric-glow"
              >
                <span>Schedule a Tech Discovery Call</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="https://wa.me/923235678381?text=Hello%20Moltivay%20Solutions,%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-emerald-500 text-white text-base font-semibold hover:bg-emerald-600 transition-all shadow-sm"
              >
                <span>Direct WhatsApp: +92 323 5678381</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
