import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Share2, 
  CheckCircle, 
  Headphones, 
  ArrowRight,
  Sparkles,
  Check,
  Cloud,
  Cpu
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 'web-dev',
    icon: Globe,
    title: 'Cloud & Web App Development',
    description: 'Custom, high-concurrency web applications built with modern frontend frameworks and resilient, scalable cloud architectures.',
    badge: 'Enterprise SaaS',
    features: ['React & Next.js Ecosystem', 'Microservices & Node.js', 'MongoDB Cloud Clusters'],
    color: 'from-blue-500 to-electric',
    link: '/services#web-dev',
    iconAnim: 'animate-spin-slow',
  },
  {
    id: 'mobile-dev',
    icon: Smartphone,
    title: 'Mobile App Development',
    subtitle: '(iOS + Android)',
    description: 'Native and cross-platform mobile apps delivering fluid 60fps UX, offline-first capabilities, and seamless hardware integrations.',
    badge: 'iOS & Android',
    features: ['Cross-Platform React Native', '60 FPS Fluid Animation', 'Offline SQLite Sync'],
    color: 'from-electric to-indigo-600',
    link: '/services#mobile-dev',
    iconAnim: 'animate-bounce-gentle',
  },
  {
    id: 'ui-ux',
    icon: Palette,
    title: 'UI/UX Design Systems',
    description: 'Human-centric product design, interactive wireframing, comprehensive design systems, and rapid prototyping that converts users.',
    badge: 'Design Systems',
    features: ['Interactive Figma Systems', 'User Journey Mapping', 'High-Fidelity Prototypes'],
    color: 'from-indigo-500 to-purple-600',
    link: '/services#ui-ux',
    iconAnim: 'animate-pulse-gentle',
  },
  {
    id: 'social-media-assistant',
    icon: Cpu,
    title: 'AI Workflow Integration',
    isSpecial: true,
    description: 'Intelligent AI-driven autonomous workflows, local model integration, automated document processing, and real-time intelligence.',
    badge: '⭐ AI Powered Suite',
    features: ['Custom VLM Integrations', 'Autonomous Agent Pipelines', 'Zero-Leak Private AI'],
    color: 'from-blue-600 to-cyan-500',
    link: '/services#social-media-assistant',
    iconAnim: 'animate-pulse-fast',
  },
  {
    id: 'qa-testing',
    icon: CheckCircle,
    title: 'Quality Assurance & Automated QA',
    description: 'Automated Playwright suites and manual edge testing to eliminate regressions, performance bottlenecks, and security vulnerabilities.',
    badge: 'Zero-Regression Testing',
    features: ['Automated Playwright Suites', 'Load & Stress Benchmarks', 'OWASP Security Audits'],
    color: 'from-emerald-500 to-teal-600',
    link: '/services#qa-testing',
    iconAnim: 'animate-bounce-gentle',
  },
  {
    id: 'maintenance-support',
    icon: Cloud,
    title: 'Cloud Infrastructure & DevOps',
    description: 'Project-scoped infrastructure monitoring, security patch planning, continuous delivery pipelines, and 24/7 incident recovery.',
    badge: '24/7 Reliability',
    features: ['Containerized Kubernetes / Docker', 'Health Auditing', 'Automated Failover'],
    color: 'from-blue-600 to-navy',
    link: '/services#maintenance-support',
    iconAnim: 'animate-spin-slow',
  },
];

// Interactive 3D Tilt Card Component
const TiltCard = ({ service, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set cursor radial coordinates for glowing border
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);

    // Calculate 3D tilt
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

  const IconComponent = service.icon;

  return (
    <div className="tilt-card-wrapper h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="tilt-card-3d card-glow-border glass-panel h-full rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.14)]"
      >
        <div className="tilt-card-inner">
          
          {/* Top Row: Animated Icon + Badge */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-electric shadow-sm group-hover:scale-110 transition-transform">
              <IconComponent className="w-7 h-7 text-electric" style={{ animation: 'floatIcon 3s ease-in-out infinite' }} />
            </div>

            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              {service.badge}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-navy mb-3">
            {service.title}
          </h3>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Features Checklist */}
          <ul className="space-y-2.5 mb-8">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-xs sm:text-sm text-slate-700">
                <Check className="w-4 h-4 text-electric mr-2.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Learn More Action Link */}
        <div className="pt-4 border-t border-slate-100 tilt-card-inner">
          <Link
            to={service.link}
            className="inline-flex items-center text-sm font-bold text-electric hover:text-blue-700 transition-colors group"
          >
            <span>Explore Engineering Specs</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>

      </div>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsContainerRef.current) return;

    const cards = cardsContainerRef.current.children;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-electric text-xs sm:text-sm font-semibold tracking-wide mb-4 shadow-sm border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-electric animate-spin" style={{ animationDuration: '6s' }} />
            <span>Full-Stack Engineering &amp; Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-5">
            Engineering Capabilities Built to <span className="text-electric text-electric-glow">Dominate</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From resilient cloud microservices to 60fps mobile architectures and autonomous AI intelligence pipelines.
          </p>
        </div>

        {/* 3D Tilt Cards Grid */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <TiltCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>

      <style>{`
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(4deg); }
        }
      `}</style>
    </section>
  );
};

export default Services;
