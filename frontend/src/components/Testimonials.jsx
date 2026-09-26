import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ClipboardCheck, MessagesSquare } from 'lucide-react';

const principles = [
  {
    title: 'Understand the brief',
    description: 'Align on your users, goals, requirements, and constraints before choosing an implementation.',
    icon: Compass,
  },
  {
    title: 'Plan the work',
    description: 'Agree on scope, technical direction, milestones, and review points before development begins.',
    icon: ClipboardCheck,
  },
  {
    title: 'Review as we build',
    description: 'Share working progress at agreed checkpoints and incorporate feedback throughout delivery.',
    icon: MessagesSquare,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-electric text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 block">
            Working Together
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-5">
            A Clear Path From Scope to Launch
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            A collaborative process keeps priorities, decisions, and next steps visible.
          </p>
        </div>

        {/* Delivery principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-clean hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-lg bg-blue-50 text-electric flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
