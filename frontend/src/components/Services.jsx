import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Share2, 
  CheckCircle, 
  Headphones, 
  ArrowRight,
  Sparkles,
  Check
} from 'lucide-react';

const services = [
  {
    id: 'web-dev',
    icon: Globe,
    title: 'Web App Development',
    description: 'Custom, high-performance web applications built with modern frontend frameworks and resilient, scalable cloud architectures.',
    badge: 'Enterprise SaaS',
    features: ['React & Next.js Ecosystem', 'Microservices & Node.js', 'MongoDB Cloud Clusters'],
    color: 'from-blue-500 to-electric',
    link: '/services#web-dev'
  },
  {
    id: 'mobile-dev',
    icon: Smartphone,
    title: 'Mobile App Development',
    subtitle: '(iOS + Android)',
    description: 'Native and cross-platform mobile apps delivering fluid 60fps UX, offline-first capabilities, and seamless hardware integrations.',
    badge: 'iOS & Android',
    features: ['Cross-Platform React Native', '60 FPS Fluid Animation', 'Offline SQLite Sync'],
    color: 'from-electric to-indigo-600',
    link: '/services#mobile-dev'
  },
  {
    id: 'ui-ux',
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Human-centric product design, interactive wireframing, comprehensive design systems, and rapid prototyping that converts users.',
    badge: 'Design Systems',
    features: ['Interactive Figma Systems', 'User Journey Mapping', 'High-Fidelity Prototypes'],
    color: 'from-indigo-500 to-purple-600',
    link: '/services#ui-ux'
  },
  {
    id: 'social-media-assistant',
    icon: Share2,
    title: 'Social Media Assistant',
    isSpecial: true,
    description: 'Intelligent AI-driven social media management, automated content scheduling, caption drafting, and multichannel audience growth analytics.',
    badge: '⭐ AI Powered Suite',
    features: ['Multi-Channel Scheduler', 'AI-Assisted Copy Drafts', 'Content Calendar'],
    color: 'from-orange-500 to-accent',
    link: '/services#social-media-assistant'
  },
  {
    id: 'qa-testing',
    icon: CheckCircle,
    title: 'QA & Testing',
    description: 'Automated and manual testing to identify regressions, performance issues, and security concerns before release.',
    badge: 'Quality-Focused Testing',
    features: ['Automated Playwright Suites', 'Load & Stress Testing', 'OWASP Security Audits'],
    color: 'from-emerald-500 to-teal-600',
    link: '/services#qa-testing'
  },
  {
    id: 'maintenance-support',
    icon: Headphones,
    title: 'Maintenance & Support',
    description: 'Project-scoped infrastructure monitoring, security patch planning, performance optimization, and maintenance support.',
    badge: 'Monitoring & Maintenance',
    features: ['Monitoring Options', 'Infrastructure Health Checks', 'Planned Escalation Paths'],
    color: 'from-blue-600 to-navy',
    link: '/services#maintenance-support'
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-electric text-xs sm:text-sm font-semibold tracking-wide mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-electric animate-spin" style={{ animationDuration: '6s' }} />
            <span>Full-Stack Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-5">
            Engineering Services Built for Modern Growth
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            We deliver end-to-end engineering excellence across every layer of the digital product lifecycle.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-3xl p-8 bg-white transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between ${
                  service.isSpecial
                    ? 'border-2 border-accent/50 shadow-[0_10px_35px_rgba(255,107,53,0.12)] hover:shadow-[0_20px_50px_rgba(255,107,53,0.2)]'
                    : 'border border-slate-200/70 shadow-clean hover:shadow-card-hover hover:border-blue-200'
                }`}
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${service.color} shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        service.isSpecial
                          ? 'bg-accent/10 text-accent border border-accent/30 font-bold'
                          : 'bg-slate-100 text-slate-700 border border-slate-200/60'
                      }`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-navy group-hover:text-electric transition-colors mb-3 flex items-center">
                    <span>{service.title}</span>
                    {service.subtitle && (
                      <span className="text-xs text-text-muted font-normal ml-2">
                        {service.subtitle}
                      </span>
                    )}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-muted leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2 mb-6 pt-2 border-t border-slate-100">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-navy/80 font-medium">
                        <Check className="w-3.5 h-3.5 text-electric flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learn More Link */}
                <Link
                  to={service.link}
                  className="inline-flex items-center text-sm font-semibold text-electric group-hover:text-electric-hover transition-colors pt-3 border-t border-slate-100/80"
                >
                  <span>Explore service details</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner with Animated Glow */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-navy via-navy-800 to-navy text-white flex flex-col md:flex-row items-center justify-between shadow-clean-lg border border-navy-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-electric/20 rounded-full blur-3xl pointer-events-none" />
          <div className="mb-6 md:mb-0 text-center md:text-left relative z-10">
            <h4 className="text-2xl font-bold mb-2">Have a custom technological challenge?</h4>
            <p className="text-slate-300 text-sm max-w-xl">
              From bespoke AI integrations to cloud migrations, our engineers craft tailormade solutions.
            </p>
          </div>
          <div className="flex items-center space-x-4 relative z-10">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3.5 rounded-lg bg-electric text-white text-sm font-semibold hover:bg-electric-hover shadow-electric-glow transition-all whitespace-nowrap"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
