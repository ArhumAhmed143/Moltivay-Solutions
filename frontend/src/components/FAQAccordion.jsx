import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import ScrambleText from './motion/ScrambleText';

const faqs = [
  {
    question: 'How does Moltivay ensure enterprise-grade security and compliance?',
    answer: 'We implement defense-in-depth security architectures: automated zero-trust authentication, TLS 1.3 encryption in transit, AES-256 field-level encryption at rest, and automated dependency vulnerability scans. We align with SOC-2 Type II, Tier-4 Cloud Architecture, and HIPAA compliance standards prior to production sign-off.'
  },
  {
    question: 'What is the typical deployment timeline for an MVP versus an enterprise platform?',
    answer: 'Our focused MVP engineering sprints typically ship within 4 to 8 weeks, delivering a production-ready, test-covered release. Full-scale multi-tenant enterprise platforms with custom integrations and multi-region failover are delivered across 3 to 6-month phased milestone cycles with continuous staging access.'
  },
  {
    question: 'Do you provide dedicated technical retainers and guaranteed 24/7 SLA monitoring?',
    answer: 'Yes. Following production launch, we offer tier-structured SLA retainers covering proactive infrastructure monitoring, automated Kubernetes health checks, sub-15 minute incident escalation paths, zero-downtime maintenance patches, and dedicated senior engineering bandwidth.'
  },
  {
    question: 'How are Vision-Language Models and AI pipelines deployed with zero data leakage?',
    answer: 'We specialize in air-gapped, local-first AI deployment. Utilizing Apple Silicon (MLX framework) and quantized open-source weights (such as Qwen3-VL and Chandra 2), customer documents and clinical data are processed entirely on on-premise hardware without outbound external API calls.'
  },
  {
    question: 'What is your intellectual property (IP) transfer and mutual NDA protocol?',
    answer: '100% of all code, architecture diagrams, database schemas, and intellectual property developed during the engagement are transferred exclusively to your company upon milestone completion. We provide a binding mutual NDA prior to our initial technical scoping session.'
  }
];

const FAQItem = ({ faq, isOpen, onToggle, index }) => {
  return (
    <div className="bento-heavy-card rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs transition-all duration-300 hover:border-slate-300">
      
      {/* Header Button */}
      <button
        onClick={onToggle}
        className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 group focus:outline-none"
      >
        <span className="font-heading font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
          {faq.question}
        </span>
        
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 ${
          isOpen ? 'bg-blue-600 text-white rotate-180 shadow-xs' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'
        }`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {/* Accordion Body with Animated Glowing Line */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden relative"
          >
            {/* Glowing Blue Indicator Line that smoothly expands */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-blue-400 to-transparent origin-left shadow-[0_0_8px_rgba(0,102,255,0.4)]"
            />

            <div className="px-6 sm:px-8 pb-6 pt-4 text-slate-600 text-sm sm:text-base leading-relaxed bg-slate-50/70 border-t border-slate-100 font-normal">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

const FAQAccordion = () => {
  const [openIdx, setOpenIdx] = useState(0); // first item open by default

  const handleToggle = (index) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden border-b border-slate-200/90">
      {/* Background Precision Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="tech-chip-gray mb-4 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>FAQ // QUESTIONS &amp; ARCHITECTURAL GUIDANCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Frequently Asked{' '}
            <ScrambleText
              text="Questions."
              as="span"
              className="text-[#0070F3]"
              scrambleColor="#0070F3"
              speed={30}
            />
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Direct clarity regarding our engineering timelines, security auditing, intellectual property transfer, and SLAs.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              faq={faq}
              index={idx}
              isOpen={openIdx === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQAccordion;
