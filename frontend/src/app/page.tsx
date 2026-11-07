'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import FlagshipShowcase from '@/components/FlagshipShowcase';
import ProcessTimeline from '@/components/ProcessTimeline';
import About from '@/components/About';
import Leadership from '@/components/Leadership';
import Careers from '@/components/Careers';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { LenisProvider } from '@/components/motion/LenisProvider';
import Preloader from '@/components/motion/Preloader';
import CustomCursor from '@/components/motion/CustomCursor';
import NoiseOverlay from '@/components/motion/NoiseOverlay';
import FloatingDock from '@/components/motion/FloatingDock';
import MarqueeStrip from '@/components/motion/MarqueeStrip';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  const heroMarqueeItems = [
    'TIER-4 CLOUD SLA',
    'SOVEREIGN AI MODELS',
    'ZERO-REGRESSION CI/CD',
    'DISTRIBUTED POSTGRESQL',
    'APPLE SILICON MLX',
    'SUB-10MS LATENCY',
    'SOC 2 TYPE II AUDITED',
    'HIGH-CONCURRENCY APIS',
  ];

  const techStackMarquee = [
    'REACT 19',
    'NEXT.JS 14 APP ROUTER',
    'TYPESCRIPT ARCHITECTURES',
    'DOCKER CONTAINERIZATION',
    'PLAYWRIGHT E2E',
    'CYPRESS AUTOMATION',
    'PYTORCH INFERENCE',
    'FASTAPI BACKENDS',
    'KAFKA EVENT STREAMING',
  ];

  return (
    <LenisProvider>
      <Preloader />
      <CustomCursor />
      <NoiseOverlay />
      <FloatingDock />
      <Chatbot />
      <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative">
        {/* 1. Sticky Corporate Navbar with Dark Navy Theme & 3 Company Links */}
        <Navbar />

        {/* 2. Hero Section: Curved Navy Card with Apple Mac Developer Visual & SOC-2 Seal */}
        <Hero />

        {/* Dynamic Enterprise Standards Walking Ticker Tape */}
        <MarqueeStrip items={heroMarqueeItems} speed="normal" theme="light" className="bg-slate-50/90 border-y border-slate-200" />

        {/* 3. Stats Snapshot with Dynamic Animated Counters */}
        <Stats />

        {/* 4. Core Services (Four Practice Pillars with Interactive Tabs & 3D Hover) */}
        <Services />

        {/* Modern Tech Stacks Marquee Ticker */}
        <MarqueeStrip items={techStackMarquee} speed="slow" reverse className="bg-slate-50 border-y border-slate-200" />

        {/* 5. Flagship Systems Showcase (FinTech, Sovereign AI & SQA CI/CD Matrix) */}
        <FlagshipShowcase />

        {/* 6. Execution Methodology (4-Step Delivery Pipeline) */}
        <ProcessTimeline />

        {/* 7. About Us: Company & Engineering Heritage (#about) */}
        <About />

        {/* 8. Executive Leadership: Engr. Ghulam Ahmed (#leadership) */}
        <Leadership />

        {/* 9. Careers: Why Work With Us & Current Openings (#careers) */}
        <Careers />

        {/* 10. Contact Section (Dark Navy Overlay, 2 Global Hubs & Quote Request Form) */}
        <ContactSection />

        {/* 11. Corporate Footer */}
        <Footer />
      </main>
    </LenisProvider>
  );
}
