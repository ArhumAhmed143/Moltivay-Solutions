'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Building2, 
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import ScrambleText from './motion/ScrambleText';
import WordReveal from './motion/WordReveal';
import SendUsAMessageForm from './SendUsAMessageForm';

export const ContactSection = () => {

  return (
    <section id="contact" className="relative bg-slate-50 border-b border-slate-200 overflow-hidden">
      
      {/* =========================================================
          1. DARK NAVY OVERLAY HERO BANNER (Strictly RMT-Style)
      ========================================================= */}
      <div className="relative bg-gradient-to-r from-[#030a16] via-[#091b38] to-[#040e1d] text-white py-20 md:py-24 overflow-hidden border-b border-slate-800">
        
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>DIRECT ARCHITECTURAL ACCESS // INSTANT QUOTE</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
            <ScrambleText
              text="Contact a Software Agency"
              as="span"
              scrambleColor="#38bdf8"
              settledClassName="text-white"
              trigger="mount"
              speed={28}
            />
          </h1>

          <WordReveal
            text="Request an enterprise quotation for Full Stack Development, SQA, AI Model Training, or Dedicated Virtual Assistance. We respond within one business day."
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
            delay={0.2}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* =========================================================
            2. HEADQUARTERS & DIRECT COMMUNICATION (Clean White Cards)
        ========================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12"
        >
          
          {/* Card 1: Official Company Headquarters */}
          <motion.div 
            whileHover={{ y: -10, scale: 1.01, transition: { duration: 0.25, ease: 'easeOut' } }}
            className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-8 hover:shadow-xl hover:border-blue-400 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                GLOBAL HEADQUARTERS
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-2">
              Moltivay Solutions Headquarters
            </h3>
            <p className="text-sm text-slate-500 mb-6 font-normal">
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

              <div className="flex items-center gap-3 pt-1">
                <a
                  href="mailto:moltivaysolutions@gmail.com"
                  title="Direct Email to Moltivay Solutions"
                  aria-label="Direct Email to Moltivay Solutions"
                  className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-200 flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-110 hover:shadow-md cursor-pointer group"
                >
                  <Mail className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>09:00 – 18:00 PKT // Mon – Sat</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Direct Technical & Founder Desk */}
          <motion.div 
            whileHover={{ y: -10, scale: 1.01, transition: { duration: 0.25, ease: 'easeOut' } }}
            className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-8 hover:shadow-xl hover:border-blue-400 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                DIRECT INQUIRY DESK
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-2">
              Direct Contact &amp; Support
            </h3>
            <p className="text-sm text-slate-500 mb-6 font-normal">
              Direct technical scoping, enterprise retainers, and fast proposal turnaround.
            </p>

            <div className="space-y-3.5 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <a href="tel:+923235678381" className="hover:text-blue-600 transition-colors font-bold text-slate-900">
                  +92 323 5678381
                </a>
              </div>

              {/* WhatsApp Quick Chat */}
              <div className="pt-1">
                <a
                  href="https://wa.me/923235678381?text=Hello%20Moltivay%20Solutions%2C%20I%20would%20like%20to%20get%20more%20details%20about%20your%20company%20and%20software%20engineering%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href="mailto:moltivaysolutions@gmail.com"
                  title="Direct Email to Moltivay Solutions"
                  aria-label="Direct Email to Moltivay Solutions"
                  className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-200 flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-110 hover:shadow-md cursor-pointer group"
                >
                  <Mail className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>24/7 Dedicated Client SLA Support</span>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* =========================================================
            3. INTERACTIVE QUOTE REQUEST FORM (Matching Exact Image Format)
        ========================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SendUsAMessageForm />
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;
