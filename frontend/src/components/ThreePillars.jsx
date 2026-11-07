import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrambleText from './motion/ScrambleText';
import { 
  Server, 
  Smartphone, 
  Cpu, 
  ArrowRight, 
  Check, 
  Sparkles 
} from 'lucide-react';

const pillars = [
  {
    id: 'cloud',
    title: 'Cloud Engineering',
    subtitle: 'High-Concurrency Microservices',
    icon: Server,
    description: 'Resilient, scalable cloud backends architected with modern Node.js runtimes, distributed database clusters, containerized Kubernetes, and sub-millisecond API caching.',
    metrics: '24,000 req/sec • 99.99% SLA',
    features: [
      'Multi-Region Cloud Failover',
      'Kubernetes & Docker Orchestration',
      'Event-Driven Microservices',
      'Enterprise Redis Caching'
    ],
    link: '/services#web-dev'
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    subtitle: 'Cross-Platform Native (iOS & Android)',
    icon: Smartphone,
    description: 'High-performance mobile applications delivering fluid 60fps user experiences, offline-first SQLite synchronization, hardware sensor integration, and biometric security.',
    metrics: '60 FPS Native UX • iOS & Android',
    features: [
      'Cross-Platform React Native',
      'Offline-First Data Sync',
      'Native Biometrics & Sensors',
      'Zero Memory Leak Architecture'
    ],
    link: '/services#mobile-dev'
  },
  {
    id: 'ai-workflows',
    title: 'AI Workflows',
    subtitle: 'Autonomous Enclaves & VLMs',
    icon: Cpu,
    description: 'Production integration of open-source Vision-Language Models, clinical document extraction OCR, and autonomous agent workflows executed with zero outbound data leakage.',
    metrics: 'Local Inference • Zero Cloud Leak',
    features: [
      'Vision-Language Model Tuning',
      'High-Accuracy Document OCR',
      'Apple Silicon MLX Acceleration',
      'Air-Gapped Private Execution'
    ],
    link: '/services#social-media-assistant'
  }
];

const PillarCard = ({ pillar }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const Icon = pillar.icon;

  return (
    <div className="tilt-card-wrapper h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="tilt-card-3d bento-heavy-card h-full rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] hover:border-slate-400 hover:shadow-[0_20px_45px_-10px_rgba(0,102,255,0.12)] transition-all duration-300"
      >
        <div className="tilt-card-inner">
          
          {/* Top Row: Animated Icon + Telemetry Metric */}
          <div className="flex items-center justify-between mb-7">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200/80 border border-slate-300/80 flex items-center justify-center text-blue-600 shadow-xs group-hover:scale-105 transition-transform">
              <Icon className="w-7 h-7 text-blue-600" />
            </div>

            <span className="tech-chip-dark">
              {pillar.metrics}
            </span>
          </div>

          {/* Titles */}
          <span className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1.5">
            // {pillar.subtitle}
          </span>
          <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-3 tracking-tight">
            {pillar.title}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
            {pillar.description}
          </p>

          {/* Capabilities List */}
          <ul className="space-y-2.5 mb-7">
            {pillar.features.map((feat, idx) => (
              <li key={idx} className="flex items-center px-3 py-2 rounded-lg bg-slate-50/90 border border-slate-200/70 text-xs sm:text-sm text-slate-700 font-medium">
                <Check className="w-4 h-4 text-blue-600 mr-2.5 flex-shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>

        </div>

        {/* Footer Link */}
        <div className="pt-5 border-t border-slate-200/80 tilt-card-inner">
          <Link
            to={pillar.link}
            className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-slate-900 transition-colors group"
          >
            <span>Explore Technical Architecture</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>

      </div>
    </div>
  );
};

const ThreePillars = () => {
  return (
    <section id="what-we-do" className="py-24 md:py-32 bg-gradient-to-b from-slate-50 via-slate-100/30 to-slate-50/70 border-y border-slate-200/90 relative overflow-hidden">
      {/* Background Subtle Tech Dots */}
      <div className="absolute inset-0 bg-subtle-dots opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="tech-chip-gray mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>WHAT WE DO // THREE PILLARS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            Architectural Excellence Across{' '}
            <ScrambleText
              text="Three Core Pillars."
              as="span"
              className="text-[#0070F3]"
              scrambleColor="#0070F3"
              speed={30}
            />
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We focus our deep engineering discipline on three mission-critical domains: distributed cloud infrastructure, native mobile runtimes, and local AI intelligence.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ThreePillars;
