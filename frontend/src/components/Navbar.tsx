'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Code2, 
  ShieldCheck, 
  BrainCircuit, 
  Users, 
  ArrowRight,
  Building2,
  Briefcase,
  UserCheck,
  Linkedin,
  FileText
} from 'lucide-react';
import MagneticButton from './motion/MagneticButton';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Full Stack Development',
      description: 'Web applications, APIs, React, Next.js & enterprise cloud backends.',
      icon: Code2,
      href: '/#services',
    },
    {
      title: 'SQA Quality Assurance',
      description: 'Automated CI/CD testing, Cypress, Playwright & zero-regression audits.',
      icon: ShieldCheck,
      href: '/#services',
    },
    {
      title: 'AI Model Training',
      description: 'LLM fine-tuning, vision models, MLX acceleration & private enclaves.',
      icon: BrainCircuit,
      href: '/#services',
    },
    {
      title: 'Social Media & Virtual Assistant',
      description: 'Multi-platform content marketing, admin operations & 24/7 dedicated support.',
      icon: Users,
      href: '/#services',
    },
  ];

  const companyLinks = [
    { 
      name: 'About Us', 
      desc: 'Our engineering philosophy & heritage', 
      icon: Building2, 
      href: '/#about' 
    },
    { 
      name: 'Executive Leadership', 
      desc: 'Meet Founder & CEO Engr. Ghulam Ahmed', 
      icon: UserCheck, 
      href: '/#leadership' 
    },
    { 
      name: 'Careers & Team', 
      desc: 'Join our world-class engineering network', 
      icon: Briefcase, 
      href: '/#careers' 
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo (Left side) - Pure transparent M symbol directly on the navbar, NO image box */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <img
              src="/moltivay-symbol-light.png"
              alt="Moltivay Logo Symbol"
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col justify-center">
              <span className="font-heading font-black text-lg sm:text-xl tracking-tight text-slate-950 group-hover:text-blue-600 transition-colors leading-tight">
                Moltivay
              </span>
              <span className="font-heading font-extrabold text-xs sm:text-sm tracking-wider text-blue-600 leading-tight">
                Solutions.
              </span>
            </div>
          </Link>

          {/* Links (Center) - Clean, Uncluttered, Corporate */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            <Link
              href="/"
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
            >
              Home
            </Link>

            {/* Company Dropdown (Matching Screenshot Reference) */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                <span>Company</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${companyOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>

              <AnimatePresence>
                {companyOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-80 pt-2"
                  >
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl p-2.5 text-slate-900">
                      {companyLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setCompanyOpen(false)}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                {item.name}
                              </div>
                              <div className="text-xs text-slate-500 mt-0.5">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown (Mega Menu) */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full -left-20 w-[560px] pt-2"
                  >
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl p-5 text-slate-900">
                      <div className="pb-3 mb-3 border-b border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                          // CORE PRACTICE AREAS
                        </span>
                        <span className="text-xs font-semibold text-blue-600">
                          Institutional SLA Delivery
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {services.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={() => setServicesOpen(false)}
                              className="flex items-start gap-3 p-3.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group"
                            >
                              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Icon className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                                  {item.title}
                                </h4>
                                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/#showcase"
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
            >
              Showcase
            </Link>

            <Link
              href="/#process"
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
            >
              Methodology
            </Link>

            <Link
              href="/#stats"
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
            >
              Metrics
            </Link>

            <Link
              href="/contact"
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
            >
              Contact
            </Link>

          </nav>

          {/* Right Action: Request a Quote Button with Magnetic Physics */}
          <div className="hidden lg:flex items-center space-x-3">
            <MagneticButton strength={0.3}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-lg shadow-sm hover:shadow transition-all active:scale-[0.98]"
              >
                <FileText className="w-4 h-4" />
                <span>Request a Quote</span>
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Right: Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2.5 shadow-2xl overflow-hidden text-slate-800"
          >
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Home
            </Link>

            <Link
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Services (Full Stack, SQA, AI, VA)
            </Link>

            <Link
              href="/#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Enterprise Showcase
            </Link>

            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              About Us (Company Heritage)
            </Link>

            <Link
              href="/#leadership"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Executive Leadership
            </Link>

            <Link
              href="/#careers"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Careers &amp; Culture (Why Work With Us)
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Contact
            </Link>

            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-3 rounded-lg shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Request a Quote</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
