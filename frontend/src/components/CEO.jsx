import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Mail, CheckCircle2 } from 'lucide-react';
import ScrambleText from './motion/ScrambleText';

const CEO = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/50 border-b border-slate-200/90 relative overflow-hidden">
      {/* Decorative Precision Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="terminal-slate-card rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-[0_30px_70px_-20px_rgba(15,23,42,0.4)] relative overflow-hidden">
          
          {/* Edge Glow Accent */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left: Circular Photo Placeholder & Ring Decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col items-center justify-center text-center"
            >
              <div className="relative group">
                {/* Glow ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full opacity-40 group-hover:opacity-80 blur-md transition duration-500" />
                
                {/* Image Frame */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-900">
                  <img
                    src="/ceo-photo.jpg"
                    alt="Engr. Ghulam Ahmed - CEO & Founder of Moltivay Solutions"
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Founder Badge */}
                <div className="absolute bottom-2 right-4 bg-slate-900/95 text-white px-3.5 py-1.5 rounded-full shadow-lg border border-slate-700/80 flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-bold font-mono">Executive Engineer</span>
                </div>
              </div>

              <div className="mt-6 flex items-center space-x-3">
                <a
                  href="mailto:ahmedghulam622@gmail.com"
                  className="w-10 h-10 rounded-full bg-slate-800/90 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-400 transition-colors shadow-sm"
                  aria-label="Email CEO"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Right: Leadership Content, Quote & Bio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 space-y-6 text-white"
            >
              <div className="tech-chip-dark">
                <span>// EXECUTIVE LEADERSHIP</span>
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="w-10 h-10 text-blue-500/20 absolute -top-4 -left-4 -z-10" />
                <ScrambleText
                  text="“We build world-class digital products for startups and enterprises.”"
                  as="blockquote"
                  className="text-2xl sm:text-3xl font-extrabold text-white leading-snug tracking-tight font-heading"
                  scrambleColor="#0066FF"
                  speed={25}
                />
              </div>

              {/* Short Bio Paragraph */}
              <div className="space-y-4 text-slate-300 text-base leading-relaxed font-normal">
                <p>
                  As an engineering leader with deep expertise across modern web ecosystems, cloud infrastructure, and AI automation, <strong className="text-white font-semibold">Engr. Ghulam Ahmed</strong> founded Moltivay Solutions with a singular focus: bridging high-level architectural innovation with pixel-perfect execution.
                </p>
                <p>
                  Under his leadership, Moltivay has built enterprise-grade web applications, fluid mobile platforms, and autonomous intelligence workflows that allow visionary organizations to scale without technical friction.
                </p>
              </div>

              {/* Name & Title */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Engr. Ghulam Ahmed
                  </h3>
                  <p className="text-sm font-medium text-blue-400 font-mono mt-0.5">
                    CEO &amp; Founder, Moltivay Solutions
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  <span>ISLAMABAD // GLOBAL DELIVERY</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CEO;
