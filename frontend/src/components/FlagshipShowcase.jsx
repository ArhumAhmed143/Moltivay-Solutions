import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrambleText from './motion/ScrambleText';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Server, 
  Lock,
  ExternalLink 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FlagshipShowcase = () => {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !imageContainerRef.current || !textContainerRef.current) return;

    // 3D Parallax effect on the image container on scroll
    gsap.fromTo(
      imageContainerRef.current,
      { y: 60, scale: 0.94, opacity: 0.8 },
      {
        y: -40,
        scale: 1.02,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      }
    );

    // Text slides in smoothly from the right on scroll
    gsap.fromTo(
      textContainerRef.current.children,
      { x: 70, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
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
    <section 
      id="what-we-build" 
      ref={sectionRef} 
      className="py-24 md:py-36 bg-gradient-to-b from-white via-slate-50/60 to-white border-b border-slate-200/90 relative overflow-hidden"
    >
      {/* Background Precision Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* =========================================================
              LEFT COLUMN: Full-Width 3D Parallax Image/Mockup Showcase
          ========================================================= */}
          <div className="lg:col-span-6 relative">
            <div 
              ref={imageContainerRef}
              className="tilt-card-wrapper transition-transform duration-300 will-change-transform"
            >
              <div className="bento-heavy-card rounded-3xl p-4 sm:p-6 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12)] border border-slate-200/90 relative overflow-hidden">
                
                {/* Mockup Top Window Bar */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200/80">
                  <div className="flex space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                    Moltivay Core // Multi-Tenant SaaS
                  </span>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                    <span className="text-[10px] font-mono text-blue-600 font-bold">ONLINE</span>
                  </div>
                </div>

                {/* High-Fidelity Terminal Panel */}
                <div className="relative aspect-[16/11] terminal-slate-card rounded-2xl overflow-hidden flex flex-col justify-between p-6 text-white border border-slate-800">
                  
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

                  {/* Mockup Header */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase block font-bold">
                        // FLAGSHIP ARCHITECTURE
                      </span>
                      <h4 className="font-heading font-extrabold text-lg text-white">
                        Multi-Tenant Enterprise Platform
                      </h4>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-blue-500/20 border border-blue-400/40 text-cyan-300 font-mono text-[10px] font-bold">
                      LATENCY: 12MS
                    </span>
                  </div>

                  {/* Central Visual Waveform & Server Node Illustration */}
                  <div className="relative z-10 my-4 space-y-2.5">
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 flex items-center justify-between font-mono text-xs shadow-inner">
                      <div className="flex items-center space-x-3">
                        <Server className="w-4 h-4 text-blue-400" />
                        <span className="text-slate-300">Cluster 01 // Multi-Region Failover</span>
                      </div>
                      <span className="text-emerald-400 font-bold">100% HEALTHY</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 flex items-center justify-between font-mono text-xs shadow-inner">
                      <div className="flex items-center space-x-3">
                        <Lock className="w-4 h-4 text-emerald-400" />
                        <span className="text-slate-300">Tenant Isolation &amp; Field Encryption</span>
                      </div>
                      <span className="text-cyan-400 font-bold">AES-256 GCM</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 flex items-center justify-between font-mono text-xs shadow-inner">
                      <div className="flex items-center space-x-3">
                        <Zap className="w-4 h-4 text-amber-400" />
                        <span className="text-slate-300">Throughput Capacity Benchmark</span>
                      </div>
                      <span className="text-white font-bold">24,000 TPS</span>
                    </div>
                  </div>

                  {/* Mockup Bottom HUD Bar */}
                  <div className="relative z-10 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>DEPLOYMENT: TIER-4 CLOUD</span>
                    <span className="text-blue-400 font-semibold">● 100% ZERO DATA LEAKAGE</span>
                  </div>

                </div>

                {/* Floating Overlay Badge on Mockup */}
                <div className="absolute bottom-10 right-10 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/90 shadow-xl flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs border border-emerald-200/60">
                    99.9%
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Mission-Critical Uptime</span>
                    <span className="text-[10px] text-slate-500 font-mono">Continuous Telemetry</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Text Slides In on Scroll
          ========================================================= */}
          <div ref={textContainerRef} className="lg:col-span-6 space-y-6">
            
            <div className="tech-chip-gray shadow-xs">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>WHAT WE BUILD // FLAGSHIP SHOWCASE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Enterprise-Scale Digital Platforms Built for{' '}
              <ScrambleText
                text="Market Precision."
                as="span"
                className="text-[#0070F3]"
                scrambleColor="#0070F3"
                speed={30}
              />
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Similar to mission-critical instruments in high-consequence industries, modern enterprise software requires uncompromising reliability, zero data degradation, and sub-millisecond response times. We build full-cycle software architectures that withstand exponential scale.
            </p>

            {/* Technical Specification Matrix */}
            <div className="space-y-3.5 pt-2">
              
              <div className="bento-heavy-card rounded-xl p-4 sm:p-5 flex items-start space-x-3.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">
                    Fault-Tolerant Microservices &amp; Multi-Tenant Isolation
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed font-normal">
                    Automated multi-region failover, containerized Kubernetes orchestration, and rigorous logical tenant boundaries.
                  </p>
                </div>
              </div>

              <div className="bento-heavy-card rounded-xl p-4 sm:p-5 flex items-start space-x-3.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">
                    Sub-Millisecond High-Throughput Pipelines
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed font-normal">
                    Distributed Redis caching, reactive WebSockets, and database indexing optimized for 24,000+ operations per second.
                  </p>
                </div>
              </div>

              <div className="bento-heavy-card rounded-xl p-4 sm:p-5 flex items-start space-x-3.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">
                    Cryptographic Security &amp; Enterprise Compliance
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed font-normal">
                    End-to-end encryption at rest and in transit (AES-256, TLS 1.3), complete audit logs, and SOC-2/HIPAA readiness.
                  </p>
                </div>
              </div>

            </div>

            {/* Action CTA */}
            <div className="pt-4">
              <Link
                to="/portfolio"
                className="inline-flex items-center text-sm sm:text-base font-bold text-blue-600 hover:text-slate-900 transition-colors group"
              >
                <span>Inspect Flagship Project Implementations</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FlagshipShowcase;
