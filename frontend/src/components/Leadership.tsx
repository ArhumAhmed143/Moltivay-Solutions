'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Mail, 
  ArrowRight, 
  Award, 
  Briefcase,
  Sparkles,
  Linkedin
} from 'lucide-react';
import ScrambleText from './motion/ScrambleText';
import WordReveal from './motion/WordReveal';
import TiltCard from './motion/TiltCard';
import MagneticButton from './motion/MagneticButton';

export const Leadership = () => {
  return (
    <section id="leadership" className="py-24 sm:py-32 bg-white border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Precision Micro Dot Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            2-COLUMN GRID (Matching Exact Screenshot Reference)
        ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* =========================================================
              LEFT COLUMN: Founder Portrait with Executive Engineer Badge
          ========================================================= */}
          <div className="lg:col-span-5 flex justify-center">
            <TiltCard maxTilt={14} perspective={1000} flyIn={true} delay={0.1} className="max-w-sm w-full">
              <div className="relative group w-full">
                
                {/* Outer Blue Glow on Hover */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[2.5rem] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                
                {/* Image Frame - Rounded Black Container */}
                <div className="relative rounded-[2.2rem] overflow-hidden border border-slate-200 bg-slate-950 shadow-xl aspect-square flex items-center justify-center">
                  <img
                    src="/profile.jpg"
                    alt="Engr. Ghulam Ahmed - CEO & Founder of Moltivay Solutions"
                    className="w-full h-full object-cover object-top filter brightness-100 contrast-100 group-hover:scale-105 transition duration-700"
                  />

                  {/* Subtle vignette gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 pointer-events-none" />
                </div>

                {/* Floating Pill at bottom right: (Checkmark) Executive Engineer (Matching Screenshot 4) */}
                <motion.div 
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-3.5 right-4 sm:right-6 bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 group-hover:border-blue-400 transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 tracking-tight">Executive Engineer</span>
                </motion.div>

                {/* Top Left Experience Pill */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-slate-800 px-3.5 py-1.5 rounded-xl border border-slate-200/90 text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <span>5+ YRS INDUSTRY</span>
                </div>

              </div>
            </TiltCard>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Leadership Narrative & Checkmarks (Matching Image 4)
          ========================================================= */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-widest shadow-2xs">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span>LEADERSHIP &amp; PHILOSOPHY</span>
            </div>

            {/* Scramble Heading */}
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
              <ScrambleText
                text="Engr. Ghulam Ahmed"
                as="span"
                scrambleColor="#2563eb"
                settledClassName="text-slate-900"
                trigger="scroll"
                speed={28}
              />
            </h2>

            {/* Subheading */}
            <p className="text-lg font-bold text-blue-600 font-sans">
              CEO &amp; Founder, Moltivay Solutions
            </p>

            {/* Narrative Paragraph with WordReveal */}
            <WordReveal
              text="As an engineering leader with deep expertise across modern full-stack web platforms and cloud-native systems, Engr. Ghulam Ahmed founded Moltivay Solutions with a single principle: bridging strategic business goals with elite code execution. Under his direction, the agency has delivered high-concurrency systems, mission-critical mobile runtimes, and scalable digital solutions for global clients."
              className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
              delay={0.2}
            />

            {/* 3 Checkmark Bullets (Exact match to Image 4) */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-800">
                  5+ Years Industry Experience
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-800">
                  40+ Web &amp; Mobile Systems Shipped
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-800">
                  100% On-Time Milestone Delivery
                </span>
              </div>
            </div>

            {/* CTA Buttons with Magnetic Physics */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <MagneticButton strength={0.25}>
                <a
                  href="https://www.linkedin.com/in/ghulam-ahmed-876722443/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0077b5] hover:bg-[#006097] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  <Linkedin className="w-4 h-4 fill-current" />
                  <span>Connect on LinkedIn</span>
                </a>
              </MagneticButton>

              <MagneticButton strength={0.25}>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  <span>Request Executive Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>

              <MagneticButton strength={0.2}>
                <a
                  href="mailto:moltivaysolutions@gmail.com"
                  title="Direct Email to Engr. Ghulam Ahmed"
                  aria-label="Direct Email"
                  className="w-12 h-12 rounded-xl bg-slate-50 hover:bg-blue-600 text-blue-600 hover:text-white border border-slate-200 flex items-center justify-center shadow-xs transition-all duration-200 group cursor-pointer"
                >
                  <Mail className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                </a>
              </MagneticButton>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Leadership;
