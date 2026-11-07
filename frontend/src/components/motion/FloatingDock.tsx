'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Zap, 
  Layers, 
  ShieldCheck, 
  UserCheck, 
  MessageSquare, 
  ArrowUp,
  Sparkles,
  Phone
} from 'lucide-react';

export const FloatingDock = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 280);

      const sections = ['services', 'showcase', 'process', 'about', 'leadership', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 300 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'services', label: 'Services', icon: Layers },
    { id: 'showcase', label: 'Showcase', icon: Zap },
    { id: 'process', label: 'Process', icon: ShieldCheck },
    { id: 'leadership', label: 'Founder', icon: UserCheck },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  return (
    <>
      {/* 1. Global Window Top Glowing Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(56,189,248,0.8)] z-[9999] origin-left"
        style={{ scaleX }}
      />

      {/* 2. Floating Bottom Interactive Capsule Dock (Centered with x: -50% in Framer Motion) */}
      <motion.div
        initial={{ y: 80, x: '-50%', opacity: 0 }}
        animate={{
          y: visible ? 0 : 80,
          x: '-50%',
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{ left: '50%' }}
        className="fixed bottom-5 z-50 pointer-events-auto hidden md:flex items-center gap-1 p-1.5 rounded-full bg-slate-950/90 backdrop-blur-xl border border-white/15 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.6)] text-white select-none max-w-[calc(100vw-2rem)]"
      >
        {/* Equalizer Visual Pulse */}
        <div className="flex items-center gap-1 px-2.5 py-1.5 border-r border-white/10 mr-0.5 text-[10px] font-mono text-cyan-400 font-bold">
          <div className="flex items-end gap-0.5 h-3">
            <span className="w-1 bg-cyan-400 rounded-full animate-pulse h-2" />
            <span className="w-1 bg-blue-500 rounded-full animate-pulse h-3.5" style={{ animationDelay: '0.2s' }} />
            <span className="w-1 bg-cyan-300 rounded-full animate-pulse h-2.5" style={{ animationDelay: '0.4s' }} />
          </div>
          <span className="ml-1 text-[10px] tracking-wider text-slate-300 hidden lg:inline-block">60 FPS</span>
        </div>

        {/* Section Navigation Buttons */}
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
            </button>
          );
        })}

        {/* Direct WhatsApp Quick Chat Pill */}
        <a
          href="https://wa.me/923235678381?text=Hello%20Moltivay%20Solutions%2C%20I%20would%20like%20to%20get%20more%20details%20about%20your%20company%20and%20software%20development%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all ml-0.5 shadow-sm hover:shadow flex-shrink-0"
        >
          <Phone className="w-3 h-3 fill-current" />
          <span>WhatsApp</span>
        </a>

        {/* Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-1.5 rounded-full hover:bg-white/15 text-slate-400 hover:text-white transition-colors ml-0.5 flex-shrink-0"
          title="Scroll to Top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </motion.div>
    </>
  );
};

export default FloatingDock;
