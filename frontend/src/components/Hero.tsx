'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Server, 
  Activity, 
  Sparkles,
  Lock,
  Globe2,
  Terminal,
  Cpu
} from 'lucide-react';
import ScrambleText from './motion/ScrambleText';
import WordReveal from './motion/WordReveal';
import TiltCard from './motion/TiltCard';
import ParticleCanvas from './motion/ParticleCanvas';
import MagneticButton from './motion/MagneticButton';
import InteractiveTerminal from './InteractiveTerminal';

export const Hero = () => {
  const [heroTab, setHeroTab] = React.useState<'visual' | 'simulator'>('visual');
  return (
    <section className="relative pt-24 sm:pt-28 pb-10 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================
            MAIN RMT-STYLE CURVED BANNER (Navy/Midnight Blue Gradient)
        ========================================================= */}
        <div className="relative rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] bg-gradient-to-r from-[#030a16] via-[#091b38] to-[#040e1d] p-7 sm:p-10 lg:p-16 border border-slate-800 shadow-[0_25px_60px_-15px_rgba(2,8,18,0.6)] overflow-hidden text-white">
          
          {/* Subtle Ambient Radial Glows & Grid */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          {/* Interactive Neural Mesh Particle Canvas */}
          <ParticleCanvas className="opacity-60" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
            
            {/* =========================================================
                LEFT COLUMN: Category Subtitle, H1 Headline, Paragraph, CTAs
            ========================================================= */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6 sm:space-y-7 pt-12 sm:pt-6 lg:pt-0"
            >
              
              {/* Category Track */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-cyan-400 font-mono"
              >
                <span>TIER-4 CLOUD</span>
                <span className="text-white/40">•</span>
                <span>ENTERPRISE ENGINEERING</span>
                <span className="text-white/40">•</span>
                <span>AI AUTOMATION</span>
              </motion.div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
                <ScrambleText
                  text="Moltivay"
                  as="span"
                  scrambleColor="#38bdf8"
                  settledClassName="text-white"
                  trigger="mount"
                  speed={28}
                />
                {' '}
                <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]">
                  Solutions
                </span>
              </h1>

              {/* Enterprise Subtitle Paragraphs with Word-by-Word Motion Reveal */}
              <div className="space-y-3 text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
                <WordReveal
                  text="Tier-4 cloud infrastructure, enterprise software engineering, and sovereign AI automation for high-growth firms — scalable full-stack web platforms, high-concurrency APIs, and zero-regression QA."
                  delay={0.3}
                  className="text-slate-300"
                />
                <WordReveal
                  text="Every product on this page connects to deep end-to-end services — architectural design, security compliance, automated testing, and 24/7 dedicated engineering."
                  delay={0.7}
                  className="text-slate-400 text-sm sm:text-base"
                />
              </div>

              {/* Action Buttons (Magnetic Physics + Fluid Spring Overshoot) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                
                {/* Button 1: White pill with arrow */}
                <MagneticButton strength={0.3}>
                  <Link
                    href="#services"
                    className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
                  >
                    <span>Explore Our Technologies</span>
                    <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>

                {/* Button 2: Frosted dark pill with play icon linking to official YouTube Overview */}
                <MagneticButton strength={0.3}>
                  <a
                    href="https://youtu.be/v5ZkqIOV7bs?feature=shared"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md group"
                  >
                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-3 h-3 fill-current ml-0.5" />
                    </div>
                    <span>Watch Overview</span>
                  </a>
                </MagneticButton>

              </div>

              {/* Trust Indicators Bar */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>99.99% Cloud SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Zero-Regression CI/CD</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Dedicated PM &amp; 24/7 Ops</span>
                </div>
              </div>

            </motion.div>

            {/* =========================================================
                RIGHT COLUMN: Boy on Apple Mac Laptop Coding with 3D Mouse Parallax Tilt & Live Terminal Simulator
            ========================================================= */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center lg:items-end">
              
              {/* Interactive View Switcher Pill */}
              <div className="mb-4 z-30">
                <div className="inline-flex items-center gap-1 p-1 rounded-full bg-slate-900/90 border border-white/15 backdrop-blur-md text-xs font-mono shadow-lg">
                  <button
                    type="button"
                    onClick={() => setHeroTab('visual')}
                    className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                      heroTab === 'visual'
                        ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-500/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Apple Mac View
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeroTab('simulator')}
                    className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                      heroTab === 'simulator'
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-400/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Live Simulator</span>
                  </button>
                </div>
              </div>

              <TiltCard maxTilt={12} perspective={1100} flyIn={true} delay={0.2} className="w-full max-w-md">
                
                {/* Radial Glow behind Mac developer visual */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-cyan-400/25 rounded-full blur-2xl transform scale-95 pointer-events-none" />

                <AnimatePresence mode="wait">
                  {heroTab === 'visual' ? (
                    <motion.div
                      key="mac-visual"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-3xl overflow-hidden border border-white/15 bg-slate-950/80 shadow-2xl backdrop-blur-sm aspect-[4/5] sm:aspect-square flex items-end justify-center group"
                    >
                      {/* Photo of young engineer coding on Apple Mac */}
                      <img
                        src="/developer-coding.jpg"
                        alt="Software Engineer Coding on Apple MacBook Pro in Modern IDE"
                        className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-95 group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Gradient bottom and edge fades into midnight navy */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040e1d] via-[#040e1d]/40 to-transparent opacity-90 pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#030a16]/70 via-transparent to-[#040e1d]/60 pointer-events-none" />

                      {/* Live Code Telemetry Overlay on the Laptop Frame */}
                      <div className="absolute bottom-5 left-5 right-5 z-20 bg-slate-950/90 backdrop-blur-md rounded-2xl p-4 border border-white/15 shadow-2xl flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                              ACTIVE MACBOOK IDE
                            </span>
                          </div>
                          <p className="text-[11px] text-cyan-300 font-mono mt-0.5">
                            const engine = new CloudRuntime();
                          </p>
                        </div>

                        <div className="text-right">
                          <span className="text-xs font-mono font-bold text-emerald-400">
                            &lt; 12ms
                          </span>
                          <p className="text-[10px] text-slate-400 uppercase">
                            BUILD PASS
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="live-terminal"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="w-full"
                    >
                      <InteractiveTerminal />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Floating Metric Badge 1: 99.99% Uptime */}
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="hidden sm:flex absolute -top-4 -left-6 z-30 bg-slate-950/90 backdrop-blur-md border border-cyan-500/40 text-white px-4 py-2.5 rounded-2xl shadow-xl items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-white block">99.99% SLA</span>
                    <span className="text-[10px] text-cyan-300 font-mono">Zero-Downtime</span>
                  </div>
                </motion.div>

                {/* Floating Metric Badge 2: Verified Code Gate */}
                <motion.div 
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="hidden sm:flex absolute -bottom-4 -right-4 z-30 bg-slate-950/90 backdrop-blur-md border border-blue-500/40 text-white px-4 py-2.5 rounded-2xl shadow-xl items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-white block">Verified Gates</span>
                    <span className="text-[10px] text-blue-300 font-mono">OWASP &amp; CI/CD</span>
                  </div>
                </motion.div>

              </TiltCard>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
