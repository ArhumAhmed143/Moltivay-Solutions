import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrambleText from './motion/ScrambleText';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Globe
} from 'lucide-react';

const serviceOptions = [
  'Web App Development',
  'Mobile App (iOS/Android)',
  'AI Workflow Integration',
  'UI/UX Design Systems',
  'Cloud DevOps & QA'
];

const budgetRanges = [
  '<$5,000',
  '$5,000 – $15,000',
  '$15,000 – $35,000',
  '$35,000+'
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Web App Development',
    budget: '$5,000 – $15,000',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (service) => {
    setFormData((prev) => ({ ...prev, service }));
  };

  const handleBudgetSelect = (budget) => {
    setFormData((prev) => ({ ...prev, budget }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        loading: false,
        success: false,
        error: 'Please complete all required fields (Name, Email, and Project Details).',
      });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    try {
      let sent = false;

      // Try local endpoint first
      try {
        const endpoint = window.location.hostname === 'localhost' 
          ? '/api/contact'
          : '/api/contact';

        const payload = {
          name: formData.name,
          fullName: formData.name,
          email: formData.email,
          service: formData.service,
          company: formData.company,
          subject: `[${formData.service}] Inquiry from ${formData.name}`,
          message: `Company: ${formData.company || 'Not Specified'}\nBudget: ${formData.budget}\n\nProject Scope:\n${formData.message}`,
        };

        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          sent = true;
        }
      } catch (e) {
        console.warn('Local endpoint unavailable, falling back to direct Brevo dispatch');
      }

      // Direct Brevo fallback if local endpoint failed
      if (!sent) {
        const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY || process.env.BREVO_API_KEY || '',
            'content-type': 'application/json',
            accept: 'application/json',
          },
          body: JSON.stringify({
            sender: {
              name: 'Moltivay Solutions Portal',
              email: 'moltivaysolutions@gmail.com',
            },
            to: [{ email: 'moltivaysolutions@gmail.com', name: 'Moltivay Solutions Admin' }],
            replyTo: { email: formData.email, name: formData.name },
            subject: `[New Inquiry] ${formData.service} from ${formData.name}`,
            htmlContent: `
              <div style="font-family: Arial, sans-serif; padding: 20px; color: #0a1628;">
                <h3>New Client Project Inquiry</h3>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Company:</strong> ${formData.company || 'N/A'}</p>
                <p><strong>Service:</strong> ${formData.service}</p>
                <p><strong>Budget:</strong> ${formData.budget}</p>
                <p><strong>Message:</strong></p>
                <pre style="white-space: pre-wrap; font-family: inherit;">${formData.message}</pre>
              </div>
            `,
          }),
        });

        if (!brevoRes.ok) {
          throw new Error('Email service could not process request.');
        }
      }

      setStatus({ loading: false, success: true, error: null });
    } catch (err) {
      console.error('Contact dispatch error:', err);
      setStatus({
        loading: false,
        success: false,
        error: 'Unable to deliver message automatically. Please contact moltivaysolutions@gmail.com directly.',
      });
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      service: 'Web App Development',
      budget: '$5,000 – $15,000',
      message: '',
    });
    setStatus({ loading: false, success: false, error: null });
  };

  return (
    <section id="contact-form" className="py-20 md:py-28 relative overflow-hidden bg-slate-50/70">
      
      {/* Background Decorative Tech Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Modern Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* =========================================
              LEFT SIDE: Bold Headline & Contact Info
          ========================================= */}
          <div className="lg:col-span-5 space-y-8">
            
            <div>
              <div className="tech-chip-gray mb-4 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" style={{ animationDuration: '6s' }} />
                <span>DIRECT TECHNICAL DISCOVERY</span>
              </div>

              {/* Required Bold Headline */}
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
                Let's Build <br />
                <ScrambleText
                  text="Something Great."
                  as="span"
                  className="text-blue-600"
                  scrambleColor="#0066FF"
                  speed={30}
                />
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Whether you're architecting an MVP, scaling enterprise cloud infrastructure, or integrating autonomous AI workflows, our team is ready to execute.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5 pt-2">
              
              <div className="p-4 rounded-xl bento-heavy-card flex items-start space-x-4 border border-slate-200/90 shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 text-blue-600 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-wider block">Direct Inquiries</span>
                  <a href="mailto:moltivaysolutions@gmail.com" className="text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    moltivaysolutions@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bento-heavy-card flex items-start space-x-4 border border-slate-200/90 shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 text-blue-600 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-wider block">Turnaround SLA</span>
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    Technical Scope Review within 24 Hours
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-panel flex items-start space-x-4 border border-slate-200/90 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 text-electric flex items-center justify-center flex-shrink-0 shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-electric" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">IP Protection</span>
                  <span className="text-sm sm:text-base font-bold text-navy">
                    Mutual NDA Prior to Technical Roadmapping
                  </span>
                </div>
              </div>

            </div>

            {/* Social Links with Neon Hover Effects */}
            <div className="pt-4 border-t border-slate-200/80">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                Global Connect &amp; Channels
              </span>
              <div className="flex items-center space-x-3">
                
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:border-electric hover:text-electric hover:shadow-[0_0_15px_rgba(37,99,235,0.35)] transition-all transform hover:-translate-y-0.5"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:border-electric hover:text-electric hover:shadow-[0_0_15px_rgba(37,99,235,0.35)] transition-all transform hover:-translate-y-0.5"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>


              </div>
            </div>

          </div>

          {/* =========================================
              RIGHT SIDE: Heavy Glass Bento Form
          ========================================= */}
          <div className="lg:col-span-7">
            <div className="bento-heavy-card rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.06)] relative">
              
              <AnimatePresence mode="wait">
                
                {/* 1. SUCCESS STATE WITH SMOOTH 3D CHECKMARK */}
                {status.success ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="py-12 px-4 text-center space-y-6"
                  >
                    {/* Animated 3D Checkmark Circle */}
                    <div className="w-20 h-20 mx-auto flex items-center justify-center">
                      <svg className="w-20 h-20" viewBox="0 0 52 52">
                        <circle className="checkmark-circle" cx="26" cy="26" r="25" />
                        <path className="checkmark-check" fill="none" stroke="#2563eb" strokeWidth="3.5" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                      </svg>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
                        Inquiry Received Successfully!
                      </h3>
                      <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                        Thank you for reaching out. Our engineering team has received your project parameters and will respond within 24 hours with an initial technical assessment.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 max-w-md mx-auto text-xs font-mono text-electric">
                      <span>DISPATCH ID: #{Math.floor(100000 + Math.random() * 900000)} // ENCRYPTION: 256-BIT TLS</span>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={handleReset}
                        className="btn-liquid-fill inline-flex items-center px-6 py-3 rounded-lg border-2 border-slate-200 text-sm font-semibold text-navy hover:border-electric"
                      >
                        <span>Submit Another Specification</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (

                  /* 2. MAIN INTERACTIVE FORM */
                  <form key="form" onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="border-b border-slate-100 pb-4 mb-2">
                      <h3 className="font-heading font-bold text-xl text-navy">
                        Project Discovery Specification
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Fill in your details to receive an architectural estimate.
                      </p>
                    </div>

                    {/* Error Banner */}
                    {status.error && (
                      <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-center space-x-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{status.error}</span>
                      </div>
                    )}

                    {/* Floating Labels: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      <div className="floating-input-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder=" "
                          required
                          className="floating-input"
                        />
                        <label htmlFor="name" className="floating-label">
                          Full Name *
                        </label>
                      </div>

                      <div className="floating-input-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder=" "
                          required
                          className="floating-input"
                        />
                        <label htmlFor="email" className="floating-label">
                          Work Email Address *
                        </label>
                      </div>

                    </div>

                    {/* Floating Label: Company / Organization */}
                    <div className="floating-input-group">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder=" "
                        className="floating-input"
                      />
                      <label htmlFor="company" className="floating-label">
                        Company or Project Name (Optional)
                      </label>
                    </div>

                    {/* Interactive Service Selector Pills */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                        Target Engineering Service
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => handleServiceSelect(opt)}
                            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                              formData.service === opt
                                ? 'bg-electric text-white shadow-sm'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Budget Pills */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                        Estimated Budget Range
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {budgetRanges.map((range) => (
                          <button
                            type="button"
                            key={range}
                            onClick={() => handleBudgetSelect(range)}
                            className={`py-2 rounded-lg text-xs font-semibold text-center transition-all ${
                              formData.budget === range
                                ? 'bg-electric text-white shadow-sm'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                            }`}
                          >
                            {range}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Floating Label: Project Details */}
                    <div className="floating-input-group">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder=" "
                        required
                        className="floating-input resize-none"
                      />
                      <label htmlFor="message" className="floating-label">
                        Project Details &amp; Requirements *
                      </label>
                    </div>

                    {/* Submit Button with Liquid Hover */}
                    <div>
                      <button
                        type="submit"
                        disabled={status.loading}
                        className="btn-liquid-fill-primary w-full py-4 rounded-xl text-base font-semibold flex items-center justify-center space-x-2 shadow-clean disabled:opacity-70 group"
                      >
                        {status.loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Transmitting Specifications...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                      <span>✓ 100% Confidential Discovery</span>
                      <span>✓ Zero Spam Policy</span>
                    </div>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;
