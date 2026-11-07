'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020710] border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-slate-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          
          {/* Brand Info (2 columns) */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            variants={{
              hidden:  { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16,1,0.3,1] } },
            }}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/moltivay-symbol-clean.png"
                alt="Moltivay Logo Symbol"
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <div className="flex flex-col justify-center">
                <span className="font-heading font-black text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors leading-tight">
                  Moltivay
                </span>
                <span className="font-heading font-extrabold text-sm tracking-wider text-blue-500 leading-tight">
                  Solutions.
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-normal">
              Corporate technology agency engineering enterprise full-stack web applications, automated SQA suites, private AI model training, and dedicated virtual assistance.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 text-slate-400 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/ghulam-ahmed-876722443/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 hover:border-[#0077b5] hover:bg-[#0077b5] hover:text-white text-slate-400 flex items-center justify-center transition-all"
                aria-label="Engr. Ghulam Ahmed LinkedIn"
              >
                <Linkedin className="w-4 h-4 fill-current" />
              </a>
            </div>
          </motion.div>

          {/* Practice Areas */}
          <motion.div
            variants={{
              hidden:  { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16,1,0.3,1] } },
            }}
          >
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              // Practice Areas
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li>
                <Link href="/#services" className="hover:text-cyan-300 transition-colors">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-cyan-300 transition-colors">
                  SQA Quality Assurance
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-cyan-300 transition-colors">
                  AI Model Training
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-cyan-300 transition-colors">
                  Social Media Strategy
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-cyan-300 transition-colors">
                  Virtual Assistance Ops
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            variants={{
              hidden:  { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16,1,0.3,1] } },
            }}
          >
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              // Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li>
                <Link href="/#about" className="hover:text-cyan-300 transition-colors">
                  About Moltivay
                </Link>
              </li>
              <li>
                <Link href="/#leadership" className="hover:text-cyan-300 transition-colors">
                  Executive Leadership
                </Link>
              </li>
              <li>
                <Link href="/#careers" className="hover:text-cyan-300 transition-colors">
                  Careers &amp; Culture
                </Link>
              </li>
              <li>
                <Link href="/#stats" className="hover:text-cyan-300 transition-colors">
                  Verified Metrics
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-300 transition-colors">
                  Direct Inquiries (Contact Page)
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Compliance & SLA */}
          <motion.div
            variants={{
              hidden:  { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16,1,0.3,1] } },
            }}
          >
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              // SLA &amp; Standards
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300">
                <span className="text-cyan-400 font-bold block mb-0.5">UPTIME SLA</span>
                <span>99.99% Guaranteed</span>
              </li>
              <li className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300">
                <span className="text-cyan-400 font-bold block mb-0.5">SECURITY ARCHITECTURE</span>
                <span>TLS 1.3 / AES-256</span>
              </li>
              <li className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300">
                <span className="text-cyan-400 font-bold block mb-0.5">COMPLIANCE</span>
                <span>SOC 2 Type II Aligned</span>
              </li>
            </ul>
          </motion.div>

        </motion.div>
      </div>

      {/* Full-Width Clean White Copyright Footer Bar */}
      <div className="bg-white border-t border-slate-200 text-slate-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <div>
            <span className="text-slate-800 font-semibold tracking-wide">
              © {new Date().getFullYear()} Moltivay Solutions. All rights reserved.
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="#contact" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Privacy Policy
            </Link>
            <Link href="#contact" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Terms of Engagement
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-600 hover:text-blue-600 font-semibold transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
