import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LetterReveal from '../components/LetterReveal';
import { 
  CheckCircle2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Zap, 
  Users, 
  Mail, 
  ArrowRight,
  Code2,
  Sparkles,
  Award,
  Layers,
  Cpu,
  Terminal,
  Activity,
  Check,
  MessageSquare,
  Globe,
  Smartphone,
  Share2,
  Server
} from 'lucide-react';

const values = [
  {
    icon: Code2,
    title: 'Architectural Integrity',
    description: 'We prioritize clean, maintainable code over brittle shortcuts. Every system we build is designed to scale gracefully under peak enterprise loads without regression.',
    badge: 'Clean Code',
    color: 'from-blue-500 to-electric',
    bgColor: 'bg-blue-50 text-electric'
  },
  {
    icon: Zap,
    title: 'Relentless Velocity',
    description: 'Using agreed project iterations, CI/CD practices, and continuous integration, we deliver functional software with regular quality checks.',
    badge: 'Iterative Delivery',
    color: 'from-amber-500 to-accent',
    bgColor: 'bg-orange-50 text-accent'
  },
  {
    icon: ShieldCheck,
    title: 'Radical Transparency',
    description: 'No hidden dependencies, no vague timelines. Our clients have direct access to our engineers, sprint boards, staging repositories, and daily Slack syncs.',
    badge: 'Direct Collaboration',
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50 text-emerald-600'
  },
  {
    icon: Users,
    title: 'Customer-Obsessed Partnership',
    description: 'We treat our client projects as our own. Beyond software coding, we focus deeply on user retention metrics, conversion, performance, and business longevity.',
    badge: 'Founder Alignment',
    color: 'from-purple-500 to-indigo-600',
    bgColor: 'bg-purple-50 text-purple-600'
  },
];

const engineeringDnaTabs = [
  {
    id: 'sprints',
    title: 'Agile Delivery Cadence',
    subtitle: 'Predictable Velocity & Milestones',
    icon: Zap,
    description: 'Projects can be structured into agreed iterations with milestones, staging previews, and regular status updates.',
    points: [
      'Sprint backlog grooming & clear user stories',
      'Daily asynchronous standups on dedicated Slack channels',
      'Live staging environment deployments every Friday',
      'Instant feedback iterations with zero bureaucracy'
    ],
    codeSnippet: `// Example delivery workflow\nconst delivery = {\n  planning: "Project milestones",\n  reviews: "Regular code review",\n  testing: "Automated and manual QA",\n  releases: "Staged deployment"\n};`
  },
  {
    id: 'architecture',
    title: 'Enterprise Architecture',
    subtitle: 'Modern Full-Stack Stacks',
    icon: Server,
    description: 'We engineer with battle-tested modern frameworks: React, Next.js, Node.js, Express, MongoDB, and React Native / Flutter, ensuring sub-50ms API responses.',
    points: [
      'Microservices & REST/GraphQL API design',
      'Database index tuning & MongoDB connection pooling',
      'Stateless JWT authentication & Redis caching layers',
      'Cloud-native containerized deployments on AWS/Docker'
    ],
    codeSnippet: `// Cloud Edge Microservice Gateway\napp.use('/api/v1', rateLimiter({\n  windowMs: 15 * 60 * 1000,\n  max: 1000,\n  message: "Edge rate limit enforced"\n}));`
  },
  {
    id: 'qa',
    title: 'Automated QA & Quality Reviews',
    subtitle: 'Battle-Tested Code Hygiene',
    icon: ShieldCheck,
    description: 'Rigorous end-to-end automated test suites run before every single pull request merges, eliminating production regressions and security flaws.',
    points: [
      'End-to-End Playwright & Cypress browser tests',
      'Unit & integration tests with Jest and Supertest',
      'OWASP Top 10 security scanning on CI/CD pipelines',
      'Rolling deployment options for production services'
    ],
    codeSnippet: `// Example CI pipeline\nsteps:\n  - lint\n  - unit-and-integration-tests\n  - dependency-review\n  - deploy-to-staging`
  },
  {
    id: 'social',
    title: 'Autonomous AI Systems',
    subtitle: 'Proprietary Social Media Assistant',
    icon: Share2,
    description: 'Beyond traditional code, we embed autonomous generative AI workflows into customer businesses to automate marketing, social lead gen, and support queues.',
    points: [
      'AI-driven viral hook & content generation algorithms',
      'Multi-network auto-scheduling (LinkedIn, X, Instagram)',
      'Audience sentiment & keyword trend discovery',
      'Automated smart inquiry routing & analytics'
    ],
    codeSnippet: `// Autonomous Social Assistant Queue\nconst post = await aiAgent.generateContent({\n  topic: "Next-Gen Fintech App Architecture",\n  tone: "Authoritative & Insightful",\n  target: "LinkedIn & X Broadcast"\n});`
  }
];

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Fullstack' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'API' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Flutter', category: 'Cross-Platform' },
  { name: 'OpenAI API', category: 'AI Intelligence' },
  { name: 'Brevo API', category: 'Transactional' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'AWS Cloud', category: 'Infrastructure' }
];

const AboutPage = () => {
  const [activeDnaTab, setActiveDnaTab] = useState(engineeringDnaTabs[0].id);
  const currentDna = engineeringDnaTabs.find(t => t.id === activeDnaTab) || engineeringDnaTabs[0];

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-electric selection:text-white">
      <Navbar />

      <main className="flex-grow pt-24 sm:pt-28">
        
        {/* =========================================
            HERO SECTION WITH MODERN AMBIENT EFFECTS
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
              <span>Who We Are & What Drives Us</span>
            </motion.div>

            {/* Main Title */}
            <LetterReveal
              as="h1"
              speed="headline"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6"
            >
              Engineering High-Velocity Digital Products with <span className="text-electric">Architectural Precision</span>
            </LetterReveal>

            {/* Subtext */}
            <LetterReveal
              as="p"
              speed="paragraph"
              className="text-lg sm:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Moltivay Solutions is a specialized Web & Mobile App Development agency. We partner with ambitious founders and fast-scaling enterprises to ship resilient software and autonomous AI tools on time.
            </LetterReveal>

            {/* Floating Metric Ribbons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
            >
              <div className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-clean hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-electric flex items-center justify-center mx-auto mb-3">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">Web & Mobile</div>
                <div className="text-xs sm:text-sm font-semibold text-text-muted mt-1">Product Engineering</div>
              </div>

              <div className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-clean hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-electric font-heading">Cloud-ready</div>
                <div className="text-xs sm:text-sm font-semibold text-text-muted mt-1">Architecture</div>
              </div>

              <div className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-clean hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-accent flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-accent font-heading">Iterative</div>
                <div className="text-xs sm:text-sm font-semibold text-text-muted mt-1">Delivery Milestones</div>
              </div>

              <div className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-clean hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-purple-600 font-heading">Ongoing</div>
                <div className="text-xs sm:text-sm font-semibold text-text-muted mt-1">Engineering Support</div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* =========================================
            COMPANY STORY & NARRATIVE
        ========================================= */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Story narrative */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-50 text-electric text-xs font-bold uppercase tracking-wider">
                  <span>Our Heritage & Vision</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
                  Bridging the Gap Between Bold Vision & High-Stakes Technical Execution
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-text-muted leading-relaxed">
                  <p>
                    Founded on the premise that modern software must be beautiful, lightning-fast, and architecturally resilient, <strong className="text-navy">Moltivay Solutions</strong> was created to eliminate the common friction points in digital product development.
                  </p>
                  <p>
                    Too often, ambitious startups and enterprises find themselves trapped between bloated legacy consulting firms that move at a glacial pace, or unreliable freelancers without architectural rigor. 
                  </p>
                  <p>
                    Moltivay combines high-velocity agile sprints with senior architectural leadership. Whether developing full-stack web platforms, 60fps iOS and Android mobile apps, or autonomous AI Social Media Assistant systems, we turn complex challenges into competitive advantages.
                  </p>
                </div>

                {/* Key Commitments Checklist */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-navy font-semibold">
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0" />
                    <span>Zero Brittle Technical Debt</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0" />
                    <span>Agile Project Iterations</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0" />
                    <span>Direct Senior Slack Access</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0" />
                    <span>Autonomous AI Enhancements</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Visual Infographic Feature Card */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl bg-gradient-to-br from-navy via-navy to-slate-900 text-white p-8 sm:p-10 shadow-clean-lg border border-navy-800 overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-electric/15 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-electric/20 text-electric flex items-center justify-center font-bold font-mono">
                          M
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">Moltivay Core Operating System</div>
                          <div className="text-xs text-slate-400">Enterprise Engineering Engine v2.4</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        Active & Healthy
                      </span>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-slate-300">Development Velocity:</span>
                        <span className="text-electric font-bold">Project Milestones</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-slate-300">QA Automation Coverage:</span>
                        <span className="text-emerald-400 font-bold">94.8% Pass Rate</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-slate-300">Average Edge API Latency:</span>
                        <span className="text-accent font-bold">&lt; 38ms Global</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-slate-300">Core Specialty:</span>
                        <span className="text-purple-300 font-bold">Web • Mobile • AI Assistant</span>
                      </div>
                    </div>

                    <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
                      <span>Security Standard:</span>
                      <span className="text-slate-200">OWASP Top 10 + Mutual NDA Protected</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            INTERACTIVE ENGINEERING DNA SECTION
        ========================================= */}
        <section className="py-20 bg-slate-50/80 border-y border-slate-200/80 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-electric text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 block">
                How We Build
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-4">
                Our Engineering DNA & Delivery Standard
              </h2>
              <p className="text-base sm:text-lg text-text-muted">
                Explore the practices we use to plan, build, review, and deliver digital products.
              </p>
            </div>

            {/* Interactive Pillar Selector Tabs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 max-w-5xl mx-auto">
              {engineeringDnaTabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeDnaTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDnaTab(tab.id)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-center space-x-3.5 ${
                      isActive
                        ? 'bg-white border-electric shadow-clean-lg ring-2 ring-electric/20 translate-y-[-2px]'
                        : 'bg-white/60 hover:bg-white border-slate-200/80 shadow-sm'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isActive ? 'bg-electric text-white shadow-electric-glow' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <TabIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-navy leading-tight">{tab.title}</div>
                      <div className="text-[11px] text-text-muted hidden sm:block mt-0.5">{tab.subtitle}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active DNA Detail Showcase */}
            <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-clean-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-electric">
                    <span>Engineering Pillar</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                    {currentDna.title}
                  </h3>
                  <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                    {currentDna.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {currentDna.points.map((pt, i) => (
                      <div key={i} className="flex items-start space-x-3 text-sm text-navy font-medium">
                        <Check className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-navy text-white p-6 shadow-clean border border-navy-800 font-mono text-xs space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-navy-800 text-[11px] text-slate-400">
                      <div className="flex space-x-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </div>
                      <span>moltivay-dna.ts</span>
                      <Terminal className="w-4 h-4 text-electric" />
                    </div>
                    <pre className="text-slate-300 leading-relaxed overflow-x-auto whitespace-pre-wrap py-2 font-mono text-[12px]">
                      {currentDna.codeSnippet}
                    </pre>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* =========================================
            MISSION & VISION SECTION
        ========================================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Mission Card */}
              <div className="bg-gradient-to-br from-blue-50/50 via-white to-white p-8 sm:p-12 rounded-3xl border border-blue-100 shadow-clean hover:shadow-card-hover transition-all duration-300 space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-electric text-white flex items-center justify-center shadow-electric-glow">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-electric block">
                  Our Mission
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                  Empowering Builders With Resilient Software
                </h3>
                <p className="text-text-muted text-base leading-relaxed">
                  To empower founders and enterprises with resilient, secure, and intuitive web and mobile products engineered with speed, transparent collaboration, and unyielding code quality.
                </p>
                <div className="pt-2 flex items-center space-x-2 text-xs font-bold text-electric">
                  <span>Zero Compromises on Scalability</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-gradient-to-br from-orange-50/50 via-white to-white p-8 sm:p-12 rounded-3xl border border-orange-100 shadow-clean hover:shadow-card-hover transition-all duration-300 space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-accent text-white flex items-center justify-center shadow-sm">
                  <Eye className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent block">
                  Our Vision
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                  The Global Standard for Modern Software Agencies
                </h3>
                <p className="text-text-muted text-base leading-relaxed">
                  To build reliable digital products through thoughtful engineering, clear communication, and lasting client partnerships.
                </p>
                <div className="pt-2 flex items-center space-x-2 text-xs font-bold text-accent">
                  <span>Pioneering Autonomous AI Integration</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            CEO & FOUNDER SPOTLIGHT SECTION
        ========================================= */}
        <section className="py-20 bg-slate-50/80 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-electric text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 block">
                Executive Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
                Meet Our Founder & CEO
              </h2>
              <p className="text-sm sm:text-base text-text-muted mt-2">
                Engineering direction driven by rigorous software architecture and founder-first dedication.
              </p>
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200/80 shadow-clean-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
                
                {/* Photo Column */}
                <div className="md:col-span-5 flex flex-col items-center">
                  <div className="relative group">
                    <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-100 relative">
                      <img
                        src="/ceo-photo.jpg"
                        alt="Engr. Ghulam Ahmed - CEO & Founder"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* Verified Leadership Pill */}
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-navy text-white text-[11px] font-bold px-3.5 py-1 rounded-full shadow-md border border-white/20 whitespace-nowrap flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-electric" />
                      <span>Founder & Chief Architect</span>
                    </div>
                  </div>

                  <div className="mt-7 text-center">
                    <h3 className="text-2xl font-extrabold text-navy">Engr. Ghulam Ahmed</h3>
                    <p className="text-sm font-bold text-electric mt-0.5">CEO & Founder, Moltivay Solutions</p>
                    <p className="text-xs text-text-muted mt-1">Lead Software Architect</p>
                  </div>
                </div>

                {/* Narrative & Quote Column */}
                <div className="md:col-span-7 space-y-5 text-sm sm:text-base text-text-muted leading-relaxed">
                  <blockquote className="text-xl sm:text-2xl font-bold text-navy italic border-l-4 border-electric pl-5 font-heading leading-snug">
                    “We build world-class digital products for startups and enterprises.”
                  </blockquote>

                  <p>
                    <strong className="text-navy font-semibold">Engr. Ghulam Ahmed</strong> is an engineering executive and software architect with a passion for designing scalable distributed microservices, fluid cross-platform mobile apps, and autonomous AI automation suites.
                  </p>
                  
                  <p>
                    Under Ghulam's technical stewardship, Moltivay Solutions operates with uncompromising engineering hygiene: strict continuous integration, zero unnecessary complexity, and a modern design aesthetic inspired by world-class standards.
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-4 items-center">
                    <a
                      href="https://wa.me/923235678381?text=Hello%20Engr.%20Ghulam%20Ahmed,%20I%20would%20like%20to%20consult%20on%20a%20project"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      <span>WhatsApp: +92 323 5678381</span>
                    </a>

                    <a
                      href="mailto:ahmedghulam622@gmail.com"
                      className="inline-flex items-center px-4 py-2.5 rounded-xl bg-blue-50 text-electric hover:bg-electric hover:text-white text-xs font-bold transition-all"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      <span>ahmedghulam622@gmail.com</span>
                    </a>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            CORE VALUES SECTION
        ========================================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-electric text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 block">
                Guiding Principles
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
                Our Core Values
              </h2>
              <p className="text-sm sm:text-base text-text-muted mt-2">
                The four non-negotiable principles that drive every engineering decision at Moltivay.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-clean hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-12 h-12 rounded-2xl ${v.bgColor} flex items-center justify-center`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                          {v.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-navy mb-3">
                        {v.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                        {v.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================
            TECHNOLOGY STACK STRIP
        ========================================= */}
        <section className="py-14 bg-slate-50 border-t border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 block">
              Core Technologies & Frameworks Mastered
            </span>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
              {technologies.map((t) => (
                <div
                  key={t.name}
                  className="px-4 py-2 rounded-xl bg-white border border-slate-200/80 shadow-sm text-xs font-bold text-navy flex items-center space-x-2 hover:border-electric transition-colors"
                >
                  <span>{t.name}</span>
                  <span className="text-[10px] font-semibold text-slate-400">({t.category})</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            HIGH CONVERTING BOTTOM CTA
        ========================================= */}
        <section className="py-20 bg-navy text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
            <span className="text-electric text-xs sm:text-sm font-semibold tracking-wider uppercase block">
              Start Your Engineering Partnership
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight">
              Ready to build exceptional software with <span className="text-electric">Moltivay</span>?
            </h3>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Share your project vision today. Receive a comprehensive architecture roadmap, milestone timeline, and cost estimate within 24 hours.
            </p>
            <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-electric text-white text-base font-semibold hover:bg-electric-hover shadow-electric-glow transition-all transform hover:-translate-y-0.5"
              >
                <span>Schedule Discovery Consultation</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="https://wa.me/923235678381?text=Hello%20Moltivay%20Solutions,%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 transition-all"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-emerald-400" />
                <span>WhatsApp Fast Track</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
