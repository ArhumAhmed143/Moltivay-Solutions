import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MarqueeStrip from '../components/motion/MarqueeStrip';
import TrustBar from '../components/TrustBar';
import FlagshipShowcase from '../components/FlagshipShowcase';
import ProcessTimeline from '../components/ProcessTimeline';
import ThreePillars from '../components/ThreePillars';
import CEO from '../components/CEO';
import FAQAccordion from '../components/FAQAccordion';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFC] flex flex-col selection:bg-blue-600 selection:text-white">
      {/* 1. Frosted Glass Navbar with Magnetic Hover & Liquid Fill Button */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section (Company Snapshot + 3 Animated Stat Counters + 3D Tilt Card) */}
        <Hero />

        {/* Dynamic Infinite Marquee Strip */}
        <MarqueeStrip />

        {/* Enterprise Tech Ecosystem Bar */}
        <TrustBar />

        {/* 3. What We Do (Three Pillars: Cloud Engineering, Mobile Apps, AI Workflows in 3D Tilt Cards) */}
        <ThreePillars />

        {/* 4. What We Build (Flagship Showcase: 3D Parallax Image Left, Text Slide Right) */}
        <FlagshipShowcase />

        {/* 5. How We Deliver (5-Step Horizontal Timeline with Glowing Circles & Hover Expansion) */}
        <ProcessTimeline />

        {/* 6. Executive Leadership Spotlight (Founder & CEO Engr. Ghulam Ahmed) */}
        <CEO />

        {/* 7. FAQ / Questions (Accordion with Smooth Slide-Down & Glowing Indicator Line) */}
        <FAQAccordion />
      </main>

      {/* 8. Footer (Minimalist + Glowing Contact Form with Floating Labels & 3D Checkmark) */}
      <Footer />
    </div>
  );
};

export default Home;
