import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Linkedin, Mail, CheckCircle2 } from 'lucide-react';

const CEO = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background light gradient */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-br from-navy-50 via-white to-blue-50/40 rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/80 shadow-clean-lg">
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
                <div className="absolute -inset-2 bg-gradient-to-r from-electric to-accent rounded-full opacity-30 group-hover:opacity-75 blur-md transition duration-500" />
                
                {/* Image Frame */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-slate-100">
                  <img
                    src="/ceo-photo.jpg"
                    alt="Engr. Ghulam Ahmed - CEO & Founder of Moltivay Solutions"
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Verified Founder Badge */}
                <div className="absolute bottom-2 right-4 bg-white text-navy px-3.5 py-1.5 rounded-full shadow-lg border border-slate-100 flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-electric" />
                  <span className="text-xs font-bold">Executive Engineer</span>
                </div>
              </div>

              <div className="mt-6 flex items-center space-x-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-navy hover:text-electric hover:border-electric transition-colors shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:ahmedghulam622@gmail.com"
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-navy hover:text-electric hover:border-electric transition-colors shadow-sm"
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
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-electric uppercase">
                <span>Executive Leadership</span>
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="w-10 h-10 text-electric/20 absolute -top-4 -left-4 -z-10" />
                <blockquote className="text-2xl sm:text-3xl font-extrabold text-navy leading-snug tracking-tight font-heading">
                  “We build world-class digital products for startups and enterprises.”
                </blockquote>
              </div>

              {/* Short Bio Paragraph */}
              <div className="space-y-4 text-text-muted text-base leading-relaxed">
                <p>
                  As an engineering leader with deep expertise across modern web ecosystems, cloud infrastructure, and AI automation, <strong className="text-navy font-semibold">Engr. Ghulam Ahmed</strong> founded Moltivay Solutions with a singular focus: bridging high-level architectural innovation with pixel-perfect execution.
                </p>
                <p>
                  Under his leadership, Moltivay has built enterprise-grade web applications, fluid mobile platforms, and autonomous intelligence workflows that allow visionary organizations to scale without technical friction.
                </p>
              </div>

              {/* Name & Title */}
              <div className="pt-2 border-t border-slate-200/70">
                <h3 className="text-xl font-bold text-navy">
                  Engr. Ghulam Ahmed
                </h3>
                <p className="text-sm font-medium text-electric">
                  CEO & Founder, Moltivay Solutions
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CEO;
