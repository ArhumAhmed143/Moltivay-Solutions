import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowUp, Mail, Phone, MapPin, ShieldCheck, Globe } from 'lucide-react';
import ContactForm from './ContactForm';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-950 text-white relative">
      
      {/* 1. Integrated Glowing Contact Form with Floating Labels & 3D Checkmark */}
      <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50/80 border-b border-slate-200/90">
        <ContactForm />
      </div>

      {/* 2. Minimalist Corporate Footer Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-slate-800">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block">
              <div className="flex items-center space-x-3">
                <img
                  src="/logo.png"
                  alt="Moltivay Solutions"
                  className="h-10 w-auto object-contain rounded-lg bg-white p-1"
                />
                <div>
                  <span className="block font-heading font-extrabold text-2xl tracking-tight text-white leading-none">
                    MOLTIVAY
                  </span>
                  <span className="block text-[10px] font-bold tracking-[0.25em] text-[#0070F3] uppercase mt-1">
                    SOLUTIONS
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Full-stack digital engineering agency architecting high-concurrency cloud systems, native mobile applications, and private AI workflows for modern organizations.
            </p>

            <div className="flex items-center space-x-3 pt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#0070F3] flex items-center justify-center text-slate-300 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <div className="text-xs font-mono text-slate-400 flex items-center space-x-1.5 pl-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>ALL SYSTEMS OPERATIONAL</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
              // Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-[#0070F3] transition-colors">
                  Home Snapshot
                </Link>
              </li>
              <li>
                <a href="#what-we-build" className="hover:text-[#0070F3] transition-colors">
                  What We Build
                </a>
              </li>
              <li>
                <a href="#how-we-deliver" className="hover:text-[#0070F3] transition-colors">
                  How We Deliver
                </a>
              </li>
              <li>
                <a href="#what-we-do" className="hover:text-[#0070F3] transition-colors">
                  Three Pillars
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#0070F3] transition-colors">
                  FAQ &amp; Scoping
                </a>
              </li>
            </ul>
          </div>

          {/* Core Engineering Disciplines */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
              // Disciplines
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/services" className="hover:text-[#0070F3] transition-colors">
                  Distributed Cloud Core
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#0070F3] transition-colors">
                  Cross-Platform Mobile
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#0070F3] transition-colors">
                  Local AI Enclaves
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#0070F3] transition-colors">
                  Automated QA Benchmarks
                </Link>
              </li>
            </ul>
          </div>

          {/* Enterprise Support (Clean Placeholders - No Personal Info) */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
              // Executive Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#0070F3] flex-shrink-0" />
                <a href="mailto:moltivaysolutions@gmail.com" className="hover:text-white transition-colors">
                  moltivaysolutions@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#0070F3] flex-shrink-0" />
                <span>+1 (555) 019-2834</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#0070F3] flex-shrink-0 mt-0.5" />
                <span>Technology Corridor, Global Operations Center</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
          <div>
            <span>© 2026 Moltivay Solutions. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-6">
            <span>SLA: 99.99%</span>
            <span>SECURITY: AES-256</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 text-slate-400 hover:text-white transition-colors"
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
