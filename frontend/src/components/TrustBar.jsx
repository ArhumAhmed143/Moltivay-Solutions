import React from 'react';
import { 
  Cloud, 
  Boxes, 
  Code2, 
  Cpu, 
  Database, 
  Terminal, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

const technologies = [
  { 
    name: 'Amazon Web Services', 
    tag: 'Cloud Infrastructure', 
    icon: Cloud,
    highlight: 'Multi-Region SLA'
  },
  { 
    name: 'Kubernetes Cluster', 
    tag: 'Container Mesh', 
    icon: Boxes,
    highlight: 'Zero-Downtime'
  },
  { 
    name: 'React & Next.js Core', 
    tag: 'Web Ecosystem', 
    icon: Code2,
    highlight: 'Fluid 60 FPS'
  },
  { 
    name: 'Node.js Enterprise', 
    tag: 'Microservices Core', 
    icon: Terminal,
    highlight: 'High Concurrency'
  },
  { 
    name: 'MongoDB Atlas', 
    tag: 'Distributed Data', 
    icon: Database,
    highlight: 'Sub-ms Querying'
  },
  { 
    name: 'Apple Silicon MLX', 
    tag: 'Edge AI Acceleration', 
    icon: Cpu,
    highlight: '100% Air-Gapped'
  },
];

const TrustBar = () => {
  return (
    <section className="py-14 bg-gradient-to-b from-slate-50 via-white to-slate-50/80 border-y border-slate-200/90 relative overflow-hidden">
      
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Row with High-Contrast Telemetry */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200/80 flex-wrap gap-4">
          <div className="flex items-center space-x-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-mono text-xs font-bold text-slate-700 uppercase tracking-widest">
              Enterprise Technology Ecosystem &amp; Runtime Certified
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="tech-chip-gray">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>SOC2 &amp; HIPAA ALIGNED</span>
            </span>
            <span className="tech-chip-gray hidden sm:inline-flex">
              <span>TIER-4 CLOUD PLATFORMS</span>
            </span>
          </div>
        </div>

        {/* 6 Technology Partner Bento Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group bento-heavy-card rounded-xl p-4 sm:p-5 flex flex-col justify-between cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-blue-50 text-slate-700 group-hover:text-blue-600 border border-slate-200 group-hover:border-blue-200/80 flex items-center justify-center transition-colors shadow-xs">
                      <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="font-mono text-[9px] text-slate-400 group-hover:text-blue-600 font-bold uppercase transition-colors">
                      {tech.highlight}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xs sm:text-sm text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {tech.name}
                  </h3>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                    {tech.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TrustBar;
