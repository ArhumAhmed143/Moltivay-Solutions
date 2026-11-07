'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingDock from '@/components/motion/FloatingDock';
import Chatbot from '@/components/Chatbot';
import SendUsAMessageForm from '@/components/SendUsAMessageForm';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare, 
  ExternalLink, 
  Sparkles, 
  HelpCircle,
  ChevronDown,
  Globe2,
  Lock,
  Zap,
  Server
} from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How fast can Moltivay Solutions respond to our inquiry?',
      a: 'We review and respond to all enterprise and project inquiries within one business day (guaranteed response time < 24 hours). For urgent mission-critical requirements, reach us instantly via WhatsApp at +92 323 5678381.',
    },
    {
      q: 'Can we sign an NDA before disclosing our technical architecture?',
      a: 'Yes, absolutely. We enforce a strict bilateral Non-Disclosure Agreement (NDA) with complete intellectual property protection and zero IP leakage guarantee before receiving any proprietary code or design artifacts.',
    },
    {
      q: 'What engagement models do you support for enterprise clients?',
      a: 'We provide Fixed-Price Milestone Contracts for defined scope, Time & Materials (T&M) for iterative agile sprints, and Dedicated Offshore Engineering Pods for continuous long-term team extension.',
    },
    {
      q: 'What timezones do your engineering teams operate across?',
      a: 'Our core development centers operate on PKT (UTC+5) with overlap shifts accommodating North American (EST/PST), European (GMT/CET), and Gulf/APAC enterprise operational windows.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar />

      <main className="pt-20 sm:pt-24">
        {/* =========================================================
            2. HERO BANNER: Matching Exact Reference Screenshot (Dark Moody Hero with "GET IN TOUCH" badge)
        ========================================================= */}
        <section className="relative bg-[#030a16] text-white py-24 sm:py-32 overflow-hidden border-b border-slate-800">
          
          {/* Ambient Lighting & Depth Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
          
          {/* Subtle Isometric Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          {/* Artistic Blurred "C O N T A C T   U S" Backdrop Motif (Inspired by Screenshot) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
            <span className="font-heading font-black text-6xl sm:text-8xl md:text-9xl tracking-[0.25em] text-cyan-400 blur-[2px]">
              CONTACT US
            </span>
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            
            {/* Pill: • GET IN TOUCH (Matching exact screenshot badge) */}
            <motion.div 
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-mono font-bold tracking-widest uppercase mb-6 shadow-lg shadow-black/40 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>GET IN TOUCH</span>
            </motion.div>

            {/* Main Headline: Contact Moltivay Solutions */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 font-heading leading-[1.15]"
            >
              Contact Moltivay Solutions
            </motion.h1>

            {/* Subtitle matching reference screenshot text style */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal"
            >
              Request a quote for custom software development, cloud infrastructure, AI automation, or full-stack web platforms. Islamabad, Pakistan headquarters — we respond within one business day.
            </motion.p>

            {/* Quick Micro Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 text-xs sm:text-sm font-medium text-slate-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>NDA Protected Intake</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>&lt; 24h Response SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Direct Principal Architect Review</span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* =========================================================
            3. MAIN CONTENT: Send Us a Message Form & Company Channels
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: The "Send Us a Message" Form Card (Matching Reference Screenshot) */}
            <div className="lg:col-span-7">
              <SendUsAMessageForm className="shadow-2xl" />
            </div>

            {/* RIGHT COLUMN: Official Company Contact Details & Headquarters */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Card 1: Global Engineering Headquarters */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    GLOBAL HEADQUARTERS
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-2">
                  Moltivay Solutions Headquarters
                </h3>
                <p className="text-sm text-slate-500 mb-4 font-normal">
                  Software engineering campus, enterprise web &amp; cloud systems, and SQA center.
                </p>

                <div className="space-y-3.5 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900 block text-sm">
                        Abid Majeed Road, Near Bake Point Bakery
                      </span>
                      <span className="text-slate-500 text-xs">
                        Rawalpindi, Punjab, Pakistan
                      </span>
                    </div>
                  </div>

                  {/* Interactive Google Map Preview with 1-Click Direct Location Link */}
                  <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden border border-slate-200 shadow-sm group my-3">
                    <iframe
                      title="Moltivay Solutions Google Map Location"
                      src="https://maps.google.com/maps?q=Abid+Majeed+Road,+Near+Bake+Point+Bakery,+Rawalpindi,+Punjab,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      className="w-full h-full border-0 filter contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      allowFullScreen
                    />
                    {/* Clickable Overlay to open directly in Google Maps */}
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Abid+Majeed+Road+Near+Bake+Point+Bakery+Rawalpindi+Punjab+Pakistan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10 cursor-pointer bg-transparent"
                      title="Click to open location in Google Maps"
                    />
                    <div className="absolute bottom-2.5 right-2.5 z-20 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 text-blue-600 font-bold text-[11px] shadow-md border border-slate-200 backdrop-blur-sm">
                        <MapPin className="w-3 h-3 text-blue-600" />
                        <span>Open in Maps</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </span>
                    </div>
                  </div>

                  {/* Clickable Google Location Button */}
                  <div className="pt-1">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Abid+Majeed+Road+Near+Bake+Point+Bakery+Rawalpindi+Punjab+Pakistan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-lg border border-blue-200 transition-colors shadow-xs"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                    <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>09:00 – 18:00 PKT // Mon – Sat</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Direct Communications (Email Icon & WhatsApp) */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    DIRECT ACCESS
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-2">
                  Direct Inquiries &amp; WhatsApp
                </h3>
                <p className="text-sm text-slate-500 mb-6 font-normal">
                  Connect directly with our solutions team for immediate project scoping.
                </p>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <a href="tel:+923235678381" className="font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      +92 323 5678381
                    </a>
                  </div>

                  {/* WhatsApp Button with Pre-filled English Message */}
                  <div>
                    <a
                      href="https://wa.me/923235678381?text=Hello%20Moltivay%20Solutions%2C%20I%20would%20like%20to%20get%20more%20details%20about%20your%20company%20and%20software%20development%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold text-sm transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <MessageSquare className="w-4 h-4 text-emerald-600" />
                        <span>Chat Instantly on WhatsApp</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>

                  {/* Email with Icon Button */}
                  <div className="pt-2 flex items-center gap-3 border-t border-slate-100">
                    <a
                      href="mailto:moltivaysolutions@gmail.com"
                      title="Email Moltivay Solutions"
                      className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-200 flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-105 cursor-pointer"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 block">Direct Inquiries</span>
                      <a href="mailto:moltivaysolutions@gmail.com" className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">
                        moltivaysolutions@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Trust & Assurance Guarantees */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider mb-3">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>ENTERPRISE COMPLIANCE</span>
                </div>
                <h4 className="font-heading font-bold text-lg text-white mb-2">
                  Institutional Security Standards
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal mb-4">
                  All contracts include strict mutual NDA terms, IP transfer upon milestone settlement, and secure cloud enclaves aligned with SOC 2 Type II and Tier-4 infrastructure.
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-cyan-300">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-center">
                    100% IP OWNERSHIP
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-center">
                    TIER-4 CLOUD SLA
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================
            4. FREQUENTLY ASKED QUESTIONS (FAQ Accordion)
        ========================================================= */}
        <section className="bg-white border-t border-slate-200 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                CLIENT FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading mt-3">
                Common Questions About Working With Us
              </h2>
              <p className="text-sm sm:text-base text-slate-500 mt-2 font-normal">
                Everything you need to know before initiating a software development partnership.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={faq.q}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50 hover:border-slate-300"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer hover:text-blue-600 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      {/* Floating Utilities */}
      <FloatingDock />
      <Chatbot />

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
