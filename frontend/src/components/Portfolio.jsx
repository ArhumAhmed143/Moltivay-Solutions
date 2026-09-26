import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const featuredProjects = [
  {
    id: 'multi-tenant-saas',
    title: 'Multi-Tenant SaaS Platform',
    category: 'Multi-Tenant SaaS',
    image: '/projects/multi-tenant-platform.svg',
    description: 'A platform-owner dashboard for managing companies, users, and analytics, with separate role-based company dashboards and tenant-specific data.',
    techStack: ['Platform Owner Dashboard', 'Company Dashboards', 'Email Invitations', 'Tenant Isolation'],
    link: '/portfolio'
  },
  {
    id: 'multi-store-pos',
    title: 'Multi Point of Sale',
    category: 'Point of Sale',
    image: '/projects/multi-store-pos.svg',
    description: 'An easy-to-use cloud POS for multi-store management, real-time sales and inventory analytics, offline support, secure operations, and detailed business reports.',
    techStack: ['Cloud POS', 'Offline Support', 'Multi-Store Management', 'Real-Time Analytics', 'Detailed Reports'],
    link: '/portfolio'
  },
  {
    id: 'paysphere',
    title: 'PaySphere — Fintech Product Concept',
    category: 'Fintech Concept',
    image: '/projects/fintech.jpg',
    description: 'Illustrative fintech concept for multi-currency accounts, portfolio analytics, asset management, and payment integrations.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Stripe API'],
    link: '/portfolio'
  },
  {
    id: 'vitalpulse',
    title: 'VitalPulse — Telehealth App Concept',
    category: 'Telehealth Concept',
    image: '/projects/mobile-health.jpg',
    description: 'Illustrative iOS and Android telehealth concept for appointment scheduling, remote vital tracking, and video visits.',
    techStack: ['React Native', 'TypeScript', 'WebSockets', 'Node.js', 'MongoDB'],
    link: '/portfolio'
  },
  {
    id: 'socialsync',
    title: 'SocialSync AI — Content Workflow Concept',
    category: 'AI Content Concept',
    image: '/projects/social-assistant.jpg',
    description: 'Illustrative AI content workflow concept for drafting social posts, planning campaigns, and reviewing engagement.',
    techStack: ['React', 'OpenAI API', 'Node.js', 'Express', 'Tailwind CSS'],
    link: '/portfolio'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and "View All Projects" CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-electric text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 block">
              Featured Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
              Products We Engineered With Precision
            </h2>
          </div>
          <div>
            <Link
              to="/portfolio"
              className="inline-flex items-center text-sm font-semibold text-electric hover:text-electric-hover group transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-clean hover:shadow-card-hover transition-all duration-300 group flex flex-col"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-navy shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-navy group-hover:text-electric transition-colors mb-3 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={project.link}
                    className="inline-flex items-center text-xs font-bold text-navy group-hover:text-electric uppercase tracking-wider transition-colors pt-3 border-t border-slate-100 w-full justify-between"
                  >
                    <span>Read Case Study</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-electric transition-colors" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-lg bg-white border border-slate-200 text-navy font-semibold hover:border-electric hover:text-electric"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
