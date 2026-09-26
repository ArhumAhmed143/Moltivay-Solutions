import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import LetterReveal from '../components/LetterReveal';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  ShieldCheck, 
  Mail, 
  MessageSquare, 
  Sparkles, 
  Phone, 
  ChevronDown, 
  CheckCircle2, 
  ExternalLink,
  Compass,
  Headphones
} from 'lucide-react';

const faqs = [
  {
    q: 'How quickly can Moltivay assemble an engineering team for my project?',
    a: 'We arrange a technical discovery discussion after reviewing your project scope and availability. Delivery timing is agreed during planning.'
  },
  {
    q: 'Do you sign a Non-Disclosure Agreement (NDA) before discovery calls?',
    a: 'Yes, absolutely. We prioritize your intellectual property and provide a mutual NDA prior to discussing confidential roadmaps or proprietary product logic.'
  },
  {
    q: 'How does the Social Media Assistant service work alongside web/mobile builds?',
    a: 'Our Social Media Assistant can be deployed as an autonomous marketing engine for your newly built product, automatically generating launch campaigns, thought-leadership hooks, and omnichannel scheduling to acquire users.'
  },
  {
    q: 'What communication tools and project tracking methodology do you use?',
    a: 'We agree on a delivery cadence and project tracking approach during planning. Communication channels, review points, and staging access are defined for each engagement.'
  },
  {
    q: 'What payment models and milestone structures do you support?',
    a: 'We support milestone-based fixed-price sprints as well as dedicated monthly engineer retainers, ensuring complete cost predictability and zero surprise invoices.'
  }
];

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-electric selection:text-white">
      <Navbar />

      <main className="flex-grow pt-24 sm:pt-28">

        {/* =========================================
            CONTACT HERO SECTION WITH GLOWING PARTICLES
        ========================================= */}
        <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
          
          <motion.div 
            animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-96 h-96 bg-electric/20 rounded-full blur-3xl pointer-events-none" 
          />
          <motion.div 
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-5 left-10 w-80 h-80 bg-accent/20 rounded-full blur-2xl pointer-events-none" 
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-electric text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-electric animate-spin" style={{ animationDuration: '8s' }} />
              <span>Project Inquiries • Web, Mobile &amp; Cloud</span>
            </motion.div>

            {/* Main Title */}
            <LetterReveal
              as="h1"
              speed="headline"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6"
            >
              Start Your Next Big Build with <span className="text-electric">Moltivay</span>
            </LetterReveal>

            {/* Subtext */}
            <LetterReveal
              as="p"
              speed="paragraph"
              className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Whether you need full-stack web engineering, an iOS/Android application, or our autonomous AI Social Media Assistant, our software architects are ready to assist.
            </LetterReveal>

            {/* 3 Executive Quick Action Cards */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
            >
              <a
                href="https://wa.me/923235678381?text=Hello%20Moltivay%20Solutions,%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-clean hover:shadow-card-hover hover:border-emerald-300 transition-all duration-300 group text-left flex items-center space-x-4"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Fast Track WhatsApp</div>
                  <div className="text-sm font-extrabold text-navy group-hover:text-emerald-600 transition-colors">+92 323 5678381</div>
                </div>
              </a>

              <a
                href="mailto:ahmedghulam622@gmail.com"
                className="p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-clean hover:shadow-card-hover hover:border-blue-300 transition-all duration-300 group text-left flex items-center space-x-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-electric flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Direct Email</div>
                  <div className="text-sm font-extrabold text-navy group-hover:text-electric transition-colors truncate">ahmedghulam622@gmail.com</div>
                </div>
              </a>

              <div className="p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-clean text-left flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Islamabad HQ</div>
                  <div className="text-sm font-extrabold text-navy truncate">DHA Phase 2 (In front of DHA)</div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* =========================================
            HIGH CONVERTING CONTACT FORM CONTAINER
        ========================================= */}
        <div className="-mt-8 relative z-20">
          <ContactForm />
        </div>

        {/* =========================================
            INTERACTIVE MAP & OFFICE LOCATION RADAR
        ========================================= */}
        <section className="py-20 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-12 text-center max-w-2xl mx-auto">
              <span className="text-electric text-xs font-bold uppercase tracking-wider block mb-1">
                Physical Headquarters & Global Reach
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                Visit Our Islamabad Engineering Center
              </h3>
              <p className="text-sm text-text-muted mt-2">
                Located in prime Islamabad DHA Phase 2 with full high-speed enterprise testing labs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Column: Office Meta Details */}
              <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-clean flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-2 text-electric font-bold text-xs uppercase tracking-wider mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>Executive Office Address</span>
                    </div>
                    <h4 className="text-xl font-extrabold text-navy">
                      Islamabad DHA Phase 2
                    </h4>
                    <p className="text-sm text-text-muted mt-1 leading-relaxed">
                      In front of Defence Housing Authority office, Islamabad, Federal Capital, Pakistan.
                    </p>
                    <div className="mt-3 inline-flex items-center space-x-2 text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg font-mono">
                      <Compass className="w-3.5 h-3.5 text-electric" />
                      <span>GPS: 33.5254° N, 73.1517° E</span>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-slate-100 space-y-2">
                    <div className="flex items-center space-x-2 text-slate-500 font-bold text-xs uppercase tracking-wider">
                      <Clock className="w-4 h-4 text-electric" />
                      <span>Operating Hours</span>
                    </div>
                    <p className="text-sm font-bold text-navy">Monday – Friday: 9:00 AM – 6:00 PM</p>
                    <p className="text-xs text-text-muted">Monitoring and support options are scoped to each project.</p>
                  </div>

                  <div className="pt-5 border-t border-slate-100 space-y-2">
                    <div className="flex items-center space-x-2 text-slate-500 font-bold text-xs uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <span>Project Confidentiality</span>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed">
                      Confidential project details can be discussed before work begins.
                    </p>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <a
                    href="https://maps.google.com/?q=Defence+Housing+Authority+Islamabad+Phase+2"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-electric text-white text-xs font-bold uppercase tracking-wider hover:bg-electric-hover shadow-clean transition-all"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>

                  <a
                    href="https://wa.me/923235678381?text=Hello,%20I%20would%20like%20to%20schedule%20an%20in-person%20meeting%20at%20Moltivay%20Islamabad%20Office"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <span>Schedule In-Person Meeting</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Stylized Radar Vector Map Canvas */}
              <div className="lg:col-span-7 bg-navy rounded-3xl border border-navy-800 shadow-clean-lg overflow-hidden relative min-h-[440px] flex items-center justify-center p-8">
                
                {/* Visual Grid Lines and Road Vectors */}
                <div className="absolute inset-0 bg-[#0A1628] flex items-center justify-center overflow-hidden">
                  <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="radarGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1E293B" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#radarGrid)" />
                    {/* Simulated Highway Curves (Islamabad Expressway / GT Road) */}
                    <path d="M-50,200 Q400,160 700,320 T1400,220" fill="none" stroke="#0066FF" strokeWidth="4" opacity="0.7" />
                    <path d="M250,-50 Q450,280 850,450" fill="none" stroke="#38BDF8" strokeWidth="2" opacity="0.5" />
                    <path d="M700,-50 Q650,250 1100,550" fill="none" stroke="#94A3B8" strokeWidth="2" opacity="0.3" />
                  </svg>

                  {/* Pulsing Target Radar Rings */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative flex items-center justify-center">
                      <div className="w-36 h-36 rounded-full border border-electric/30 animate-ping absolute" style={{ animationDuration: '3s' }} />
                      <div className="w-24 h-24 rounded-full border border-electric/40 animate-pulse absolute" />
                      
                      <div className="w-14 h-14 rounded-2xl bg-electric text-white flex items-center justify-center shadow-electric-glow relative z-10 transform rotate-12">
                        <Navigation className="w-7 h-7 fill-current transform -rotate-12" />
                      </div>
                    </div>

                    <div className="mt-5 bg-navy-900/95 backdrop-blur-md px-6 py-3.5 rounded-2xl shadow-2xl border border-electric/40 text-center max-w-sm">
                      <div className="flex items-center justify-center space-x-2 text-xs font-bold text-electric">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Moltivay Solutions HQ</span>
                      </div>
                      <div className="text-sm font-extrabold text-white mt-1">
                        Islamabad DHA Phase 2
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        Directly in front of Defence Housing Authority office
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badge Bottom Left */}
                <div className="absolute bottom-5 left-5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-[11px] text-slate-300 font-mono">
                  Coordinates: 33.5254° N, 73.1517° E
                </div>

                {/* Badge Bottom Right */}
                <div className="absolute bottom-5 right-5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-[11px] text-emerald-400 font-mono">
                  ✓ Enterprise Lab Active
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =========================================
            FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION
        ========================================= */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-14">
              <span className="text-electric text-xs font-bold uppercase tracking-wider block mb-1">
                Transparent Collaboration
              </span>
              <h3 className="text-3xl font-extrabold text-navy tracking-tight">
                Frequently Asked Questions
              </h3>
              <p className="text-sm text-text-muted mt-2">
                Everything you need to know about working with Moltivay Solutions.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-base font-bold text-navy pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'transform rotate-180 text-electric' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 text-sm text-text-muted leading-relaxed border-t border-slate-100 bg-slate-50/50">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* =========================================
            PROJECT SUPPORT & CONTACT BANNER
        ========================================= */}
        <section className="py-12 bg-navy text-white border-t border-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-electric flex items-center justify-center flex-shrink-0">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Planning a Technical Project?</h4>
                <p className="text-xs text-slate-400">Tell us about your project and we will discuss suitable support options.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://wa.me/923235678381"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold tracking-wider uppercase shadow-sm transition-all"
              >
                WhatsApp Desk: +92 323 5678381
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
