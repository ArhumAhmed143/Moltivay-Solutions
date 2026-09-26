import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LetterReveal from './LetterReveal';
import { ArrowRight, Code2, Smartphone, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white">
      {/* Background Subtle Tech Grid & Glow with continuous float/pulse */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-96 h-96 bg-electric/20 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-accent/15 rounded-full blur-2xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtext, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Pill badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-electric text-xs sm:text-sm font-semibold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-electric animate-pulse" />
              <span>Full-Cycle Web & Mobile Engineering</span>
            </div>

            {/* Main Headline */}
            <LetterReveal
              as="h1"
              speed="headline"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.12]"
            >
              We Build <span className="text-electric">Web & Mobile Apps</span> That Scale
            </LetterReveal>

            {/* Subtext */}
            <LetterReveal
              as="p"
              speed="paragraph"
              className="text-lg sm:text-xl text-text-muted max-w-2xl font-normal leading-relaxed"
            >
              Moltivay Solutions — from concept to code to cloud. We partner with ambitious startups and modern enterprises to architect reliable, high-performance digital solutions.
            </LetterReveal>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-4 rounded-lg bg-electric text-white text-base font-semibold shadow-clean hover:bg-electric-hover transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-electric-glow active:translate-y-0"
              >
                <span>Start Your Project</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-7 py-4 rounded-lg bg-white border-2 border-slate-200 text-navy text-base font-semibold hover:border-electric hover:text-electric hover:bg-blue-50/30 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>View Portfolio</span>
              </Link>
            </div>

            {/* Value Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-100">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-electric flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-navy/80">Agile Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-electric flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-navy/80">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-navy/80">AI Automation</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: App Mockup Illustration / Animated Tech Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative card frame (Cleveroad clean glass aesthetic) with gentle float */}
              <motion.div 
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white rounded-2xl p-4 sm:p-6 shadow-[0_20px_50px_rgba(10,22,40,0.12)] border border-slate-100 relative"
              >
                
                {/* Browser/Device Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="px-3 py-1 bg-slate-50 border border-slate-200/60 rounded-md text-[11px] font-mono text-slate-500">
                    moltivay.dev/architecture
                  </div>
                  <Sparkles className="w-4 h-4 text-electric" />
                </div>

                {/* Interactive Code & App Showcase Graphic */}
                <div className="space-y-4">
                  
                  {/* Top Metric Bar */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50/50 p-3.5 rounded-xl border border-blue-100/60">
                      <div className="text-[11px] text-text-muted font-medium uppercase tracking-wider">Architecture</div>
                      <div className="text-xl font-bold text-navy flex items-center mt-1">
                        Cloud-ready
                        <span className="text-[10px] ml-2 px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-semibold">Scalable</span>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                      <div className="text-[11px] text-text-muted font-medium uppercase tracking-wider">Engineering</div>
                      <div className="text-xl font-bold text-electric flex items-center mt-1">
                        Quality-focused
                        <span className="text-[10px] ml-2 px-1.5 py-0.5 rounded bg-blue-100 text-electric font-semibold">Testable</span>
                      </div>
                    </div>
                  </div>

                  {/* App Dashboard Visual Box */}
                  <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-navy text-white p-4">
                    <div className="flex items-center justify-between text-xs text-slate-300 pb-3 border-b border-navy-800">
                      <div className="flex items-center space-x-2">
                        <Code2 className="w-4 h-4 text-electric" />
                        <span className="font-semibold text-white">Full-Stack Ecosystem</span>
                      </div>
                      <span className="text-[11px] text-slate-400">Node • React • Mobile</span>
                    </div>

                    <div className="py-4 space-y-2.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Frontend Engine (React / Vite)</span>
                        <span className="text-emerald-400 font-mono">Component-based</span>
                      </div>

                      <div className="flex justify-between text-xs pt-1">
                        <span className="text-slate-400">Mobile API & Cloud Services</span>
                        <span className="text-emerald-400 font-mono">Integration-ready</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Micro-Badge: Social Media Assistant */}
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50/40 rounded-xl border border-blue-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-electric flex items-center justify-center text-white">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-navy">Social Media Assistant</div>
                        <div className="text-[10px] text-text-muted">Automated content & engagement AI</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-accent/10 text-accent">
                      Active
                    </span>
                  </div>

                </div>
              </motion.div>

              {/* Decorative Floating Glass Capsule */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-slate-100 flex items-center space-x-3 hidden sm:flex"
              >
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold text-sm">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy">Scalable Architecture</div>
                  <div className="text-[11px] text-text-muted">Modern Cloud Standards</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
