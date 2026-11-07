import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import StatCounter from './StatCounter';
import ScrambleText from './motion/ScrambleText';
import MagneticButton from './motion/MagneticButton';
import { 
  ArrowRight, 
  ShieldCheck, 
  Server, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  Lock, 
  Globe2, 
  Sparkles,
  Zap,
  TrendingUp,
  Radio
} from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const cardRef = useRef(null);

  // 1. Interactive Mouse Spotlight State
  const [mousePos, setMousePos] = useState({ x: 600, y: 300 });

  const handleHeroMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // 2. 3D Tilt calculation on the right-side dashboard card
    if (cardRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect();
      const cardX = e.clientX - cardRect.left;
      const cardY = e.clientY - cardRect.top;

      cardRef.current.style.setProperty('--mouse-x', `${cardX}px`);
      cardRef.current.style.setProperty('--mouse-y', `${cardY}px`);

      const centerX = cardRect.width / 2;
      const centerY = cardRect.height / 2;
      const rotateX = -((cardY - centerY) / centerY) * 10;
      const rotateY = ((cardX - centerX) / centerX) * 10;

      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }
  };

  const handleCardMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const headlineWordsLine1 = ["Engineering", "Digital", "Products"];

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleHeroMouseMove}
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50/90 via-white to-slate-50/50"
    >
      {/* Background Precision Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />

      {/* =========================================================
          1. MESH GRADIENT & MOVING BLURRED ORBS
      ========================================================= */}
      <div className="mesh-orb-1" aria-hidden="true" />
      <div className="mesh-orb-2" aria-hidden="true" />
      <div className="mesh-orb-3" aria-hidden="true" />

      {/* 2. Interactive Spotlight Following Mouse */}
      <div 
        className="hero-spotlight"
        style={{
          background: `radial-gradient(750px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 102, 255, 0.07), rgba(15, 23, 42, 0.03) 40%, transparent 70%)`
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* =========================================================
              LEFT COLUMN: Sleek Badge, Mask-Reveal Headline, Stats
          ========================================================= */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Sleeker High-Contrast Corporate Badge with Glowing Border */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6] animate-pulse" />
              <span className="text-slate-100 font-medium">Enterprise-Grade Digital Engineering</span>
              <span className="text-slate-500">|</span>
              <span className="text-cyan-400 font-mono text-[11px] font-bold hidden sm:inline">
                TIER-4 RUNTIME
              </span>
            </motion.div>

            {/* Sleek, Balanced Headline (Max 56px-64px) with Iridescent Gradient */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.14]">
              <div className="block">
                {headlineWordsLine1.map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden mr-2.5 sm:mr-3.5">
                    <motion.span
                      initial={{ y: '115%' }}
                      animate={{ y: '0%' }}
                      transition={{
                        duration: 0.85,
                        delay: 0.08 + i * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </div>

              <div className="block mt-1 sm:mt-1.5">
                <span className="inline-block overflow-hidden mr-2.5 sm:mr-3.5">
                  <motion.span
                    initial={{ y: '115%' }}
                    animate={{ y: '0%' }}
                    transition={{
                      duration: 0.85,
                      delay: 0.38,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block"
                  >
                    That
                  </motion.span>
                </span>

                {/* Sleek Blue-to-Purple-to-Cyan Gradient Text with Alphabet Scramble */}
                <span className="inline-block">
                  <ScrambleText
                    phrases={[
                      "Dominate Markets.",
                      "Scale Exponentially.",
                      "Outperform Rivals.",
                      "Accelerate Growth."
                    ]}
                    as="span"
                    className="headline-gradient font-extrabold text-[#0066FF]"
                    scrambleColor="#0066FF"
                    speed={30}
                    loopInterval={4200}
                  />
                </span>
              </div>
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.6, ease: 'easeOut' }}
              className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed"
            >
              Moltivay Solutions architects high-concurrency cloud systems, native mobile runtimes, and secure local AI enclaves engineered to outperform market competitors.
            </motion.p>

            {/* Action Buttons with Magnetic Physics */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1"
            >
              <MagneticButton to="/contact">
                <span className="btn-liquid-fill-primary inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold group active:translate-y-0">
                  <span>Consult Technical Leads</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </MagneticButton>
              
              <MagneticButton href="#what-we-build">
                <span className="btn-secondary-slate inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold active:translate-y-0">
                  <span>Explore Capabilities</span>
                </span>
              </MagneticButton>
            </motion.div>

            {/* Horizontal Row of 3 Animated Stat Counters in Heavy Bento Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-6 p-6 rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-200/90 shadow-[0_2px_12px_rgba(15,23,42,0.04)] grid grid-cols-3 gap-6 sm:gap-8 divide-x divide-slate-200/80"
            >
              <div className="pr-2">
                <StatCounter
                  target={50}
                  suffix="+"
                  label="Projects Delivered"
                  sublabel="Enterprise Cloud & Mobile"
                />
              </div>
              <div className="pl-4 sm:pl-6 pr-2">
                <StatCounter
                  target={10}
                  suffix="+"
                  label="Years Experience"
                  sublabel="Full-Stack Engineering"
                />
              </div>
              <div className="pl-4 sm:pl-6">
                <StatCounter
                  target={20}
                  suffix="+"
                  label="Countries Served"
                  sublabel="Global Client Reach"
                />
              </div>
            </motion.div>

          </div>

          {/* =========================================================
              RIGHT COLUMN: Futuristic 3D Glass Dashboard (Loop Float)
          ========================================================= */}
          <div className="lg:col-span-5 relative">
            
            {/* Gentle Loop Floating Motion */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative mx-auto max-w-lg lg:max-w-none tilt-card-wrapper"
            >
              {/* 3D Tilt Card with Glowing Gradient Border */}
              <div
                ref={cardRef}
                onMouseLeave={handleCardMouseLeave}
                className="tilt-card-3d card-glow-border glass-dashboard rounded-2xl p-6 sm:p-7 relative"
              >
                
                {/* Header HUD with Live Traffic Nodes */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200/60 tilt-card-inner">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="ml-2 text-xs font-mono text-slate-500 font-medium">
                      moltivay://us-east.edge
                    </span>
                  </div>

                  <div className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 font-mono text-[11px] font-bold shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>LIVE 60FPS</span>
                  </div>
                </div>

                {/* Live Throughput Sparkline Graphic (SVG) */}
                <div className="mb-5 p-4 rounded-xl bg-slate-900 text-white relative overflow-hidden shadow-inner tilt-card-inner">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Activity className="w-3.5 h-3.5 text-[#0070F3]" />
                      <span className="text-[11px] font-mono uppercase text-slate-400">Real-Time Core Throughput</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-300">24,850 req/sec</span>
                  </div>

                  {/* Animated Waveform SVG Chart */}
                  <div className="h-14 w-full relative">
                    <svg className="w-full h-full" viewBox="0 0 300 60" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0070F3" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#0070F3" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,45 Q30,15 60,35 T120,20 T180,40 T240,15 T300,25 L300,60 L0,60 Z"
                        fill="url(#chartGradient)"
                      />
                      <path
                        d="M0,45 Q30,15 60,35 T120,20 T180,40 T240,15 T300,25"
                        fill="none"
                        stroke="#0070F3"
                        strokeWidth="2.5"
                      />
                      <circle cx="240" cy="15" r="4" fill="#00f3ff" className="animate-ping" />
                      <circle cx="240" cy="15" r="3" fill="#ffffff" />
                    </svg>
                  </div>
                </div>

                {/* Primary Metric 1: 99.99% Uptime with Glowing Neon Accent */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50/60 to-white border border-emerald-200/80 mb-3.5 shadow-xs tilt-card-inner hover:border-emerald-400 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-wider block">Service Level Agreement</span>
                        <h4 className="font-heading font-extrabold text-xl text-[#0A2540]">99.99% Uptime</h4>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold">
                      VERIFIED
                    </span>
                  </div>

                  {/* 90-Day Uptime Segment Bars */}
                  <div className="flex items-center gap-1 pt-1">
                    {[...Array(24)].map((_, idx) => (
                      <div
                        key={idx}
                        className="h-2.5 flex-1 rounded-xs bg-emerald-500/80 hover:bg-emerald-400 transition-colors"
                        title="100% Day Uptime"
                      />
                    ))}
                  </div>
                </div>

                {/* Primary Metric 2: AI Pipeline Active with Neural Radar Accent */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50/60 to-white border border-blue-200/80 mb-4 shadow-xs tilt-card-inner hover:border-blue-400 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-lg bg-[#0070F3] text-white flex items-center justify-center shadow-xs">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#0070F3] uppercase tracking-wider block">Local-First Inference</span>
                        <h4 className="font-heading font-extrabold text-lg text-[#0A2540]">AI Pipeline Active</h4>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1.5 px-2 py-1 rounded bg-blue-100/70 text-[#0070F3] font-mono text-[11px] font-bold">
                      <span className="w-2 h-2 rounded-full bg-[#0070F3] animate-ping" />
                      <span>48.2 tok/s</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mt-2.5 pt-2 border-t border-slate-100">
                    <span>VRAM: 9.8 GB AWQ-4BIT</span>
                    <span className="text-emerald-600 font-semibold">● 100% AIR-GAPPED</span>
                  </div>
                </div>

                {/* Bottom Telemetry Ticker */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-2 border-t border-slate-100 tilt-card-inner">
                  <div className="flex items-center space-x-1.5">
                    <Lock className="w-3.5 h-3.5 text-[#0070F3]" />
                    <span>TLS 1.3 / AES-256</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                    <span>LATENCY: 11MS</span>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* =========================================================
          SUBTLE GLOWING BOTTOM SEPARATOR LINE
      ========================================================= */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[#0070F3]/40 to-transparent shadow-[0_0_15px_rgba(0,112,243,0.3)]" 
        aria-hidden="true"
      />

    </section>
  );
};

export default Hero;
