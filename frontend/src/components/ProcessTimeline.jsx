import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrambleText from './motion/ScrambleText';
import { 
  Lightbulb, 
  Compass, 
  CheckCircle, 
  Cpu, 
  Rocket, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    step: '01',
    name: 'Concept',
    subtitle: 'Discovery & Feasibility',
    icon: Lightbulb,
    description: 'We deconstruct your core objectives, evaluate technical feasibility, and architect milestone roadmaps with precise sprint schedules.',
    deliverables: ['System Architecture Blueprint', 'Tech Stack Evaluation', 'Sprint Roadmap']
  },
  {
    step: '02',
    name: 'Design',
    subtitle: 'Systems & Prototyping',
    icon: Compass,
    description: 'Developing high-fidelity Figma design systems, interactive prototypes, and pixel-perfect user journeys optimized for customer conversion.',
    deliverables: ['Interactive Design System', 'User Flow Mapping', 'Clickable Prototype']
  },
  {
    step: '03',
    name: 'Validate',
    subtitle: 'Rigorous Benchmarking',
    icon: CheckCircle,
    description: 'Stress-testing architectures for high concurrency, sub-millisecond response rates, OWASP security vulnerabilities, and zero data leakage.',
    deliverables: ['Load & Stress Reports', 'Security Penetration Audit', 'Performance Baseline']
  },
  {
    step: '04',
    name: 'Manufacture',
    subtitle: 'Full-Stack Engineering',
    icon: Cpu,
    description: 'Writing clean, modular, and test-driven code across frontend, cloud microservices, and mobile runtimes with automated test coverage.',
    deliverables: ['Clean Production Codebase', 'API Documentation', 'Automated Test Suites']
  },
  {
    step: '05',
    name: 'Deliver',
    subtitle: 'Cloud Deployment & SLA',
    icon: Rocket,
    description: 'Deploying containerized workloads to cloud clusters (AWS/Docker/Kubernetes) with automated CI/CD pipelines and 24/7 uptime observability.',
    deliverables: ['Multi-Region Cloud Rollout', 'CI/CD Automated Pipelines', '24/7 SLA Monitoring']
  }
];

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(2); // default middle
  const [hoveredStep, setHoveredStep] = useState(null);
  const sectionRef = useRef(null);
  const progressLineRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !progressLineRef.current) return;

    // ScrollTrigger to animate the progress fill as the user scrolls past
    gsap.fromTo(
      progressLineRef.current,
      { width: '0%' },
      {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 70%',
          scrub: 1,
          onUpdate: (self) => {
            const stepIdx = Math.min(
              Math.floor(self.progress * steps.length),
              steps.length - 1
            );
            setActiveStep(stepIdx);
          }
        }
      }
    );
  }, []);

  const currentStep = hoveredStep !== null ? hoveredStep : activeStep;

  return (
    <section 
      id="how-we-deliver" 
      ref={sectionRef} 
      className="py-24 md:py-32 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/80 border-b border-slate-200/90 relative overflow-hidden"
    >
      {/* Background Precision Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="tech-chip-gray mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>HOW WE DELIVER // 5-STEP LIFECYCLE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            A Disciplined Lifecycle Built on{' '}
            <ScrambleText
              text="Predictability."
              as="span"
              className="text-[#0070F3]"
              scrambleColor="#0070F3"
              speed={30}
            />
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            From initial technical discovery to production cloud deployment, our 5-step process ensures transparency, milestone adherence, and uncompromising code quality.
          </p>
        </div>

        {/* =========================================================
            HORIZONTAL TIMELINE BAR WITH GLOWING STEP CIRCLES
        ========================================================= */}
        <div className="relative mb-14 pt-4">
          
          {/* Background Grey Guide Line */}
          <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-1 bg-slate-200 hidden md:block" />

          {/* Active Filling Blue Progress Line */}
          <div 
            ref={progressLineRef}
            className="absolute top-1/2 left-6 -translate-y-1/2 h-1 bg-gradient-to-r from-[#0070F3] to-[#0A2540] shadow-[0_0_12px_rgba(0,112,243,0.5)] transition-all duration-300 hidden md:block" 
            style={{ width: `${(activeStep / (steps.length - 1)) * 96}%` }}
          />

          {/* 5 Step Circles */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              const isPastOrActive = idx <= activeStep;
              const isSelected = idx === currentStep;

              return (
                <div
                  key={s.step}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => setActiveStep(idx)}
                  className="cursor-pointer group flex flex-col items-center text-center"
                >
                  {/* Glowing Circle */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#0070F3] text-white shadow-[0_0_25px_rgba(0,112,243,0.6)] scale-110 border-4 border-white'
                      : isPastOrActive
                        ? 'bg-[#0A2540] text-white border-2 border-slate-300'
                        : 'bg-white text-slate-400 border-2 border-slate-200 hover:border-[#0070F3] hover:text-[#0070F3]'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Step Label */}
                  <div className="mt-3">
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider block ${
                      isSelected ? 'text-[#0070F3]' : 'text-slate-400'
                    }`}>
                      Step {s.step}
                    </span>
                    <h4 className={`text-base font-heading font-extrabold transition-colors ${
                      isSelected ? 'text-[#0A2540]' : 'text-slate-700 group-hover:text-[#0070F3]'
                    }`}>
                      {s.name}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* =========================================================
            EXPANDED STEP DETAILS CARD (Hover / Active Expansion)
        ========================================================= */}
        <div className="tilt-card-wrapper max-w-4xl mx-auto">
          <div className="bento-heavy-card rounded-2xl p-8 sm:p-10 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.06)] border border-slate-200/90 transition-all duration-300">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-200/80 gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
                  // PHASE {steps[currentStep].step} SPECIFICATION • {steps[currentStep].subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
                  {steps[currentStep].name}: Architectural Execution
                </h3>
              </div>

              <div className="tech-chip-gray font-mono text-xs font-bold">
                PHASE STATUS: STANDARDIZED
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 font-normal">
              {steps[currentStep].description}
            </p>

            {/* Deliverables Checklist */}
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3 font-mono">
                Key Technical Artifacts &amp; Deliverables:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {steps[currentStep].deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center space-x-2.5 font-medium text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessTimeline;
