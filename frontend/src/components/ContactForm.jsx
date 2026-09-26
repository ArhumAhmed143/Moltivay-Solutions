import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  User, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  Layers 
} from 'lucide-react';

const serviceOptions = [
  'Web App Development',
  'Mobile App (iOS/Android)',
  'UI/UX Design',
  '⭐ Social Media Assistant',
  'QA & Automated Testing',
  'Cloud Maintenance & Support'
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
    service: 'Web App Development',
    budget: '$5,000 – $15,000',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (service) => {
    setFormData((prev) => ({ 
      ...prev, 
      service, 
      subject: `${service} Inquiry` 
    }));
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
        error: 'Please fill in all mandatory fields (Name, Email, and Message).',
        message: '',
      });
      return;
    }

    setStatus({ loading: true, success: false, error: null, message: '' });

    try {
      const endpoint = window.location.hostname === 'localhost' 
        ? 'http://localhost:5000/api/contact'
        : '/api/contact';

      const submissionPayload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject || `${formData.service} (Budget: ${formData.budget})`,
        message: `[Interested Service]: ${formData.service}\n[Estimated Budget]: ${formData.budget}\n\n[Project Scope]:\n${formData.message}`
      };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionPayload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          error: null,
          message: data.message || 'Your inquiry was delivered to our project team. We will follow up by email.',
        });
        setFormData({
          name: '',
          email: '',
          service: 'Web App Development',
          budget: '$5,000 – $15,000',
          subject: '',
          message: '',
        });
      } else {
        throw new Error(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus({
        loading: false,
        success: false,
        error: err.message || 'Unable to connect to the backend server. Please verify your connection or reach out on WhatsApp.',
        message: '',
      });
    }
  };

  return (
    <section id="contact-form" className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* =========================================
              LEFT COLUMN: EXECUTIVE INFO & QUICK ACTIONS
          ========================================= */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Executive Navy Card */}
            <div className="rounded-3xl bg-navy text-white p-8 sm:p-10 shadow-clean-lg border border-navy-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-electric/15 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-electric text-xs font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Executive Consultation Desk</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Direct Access to Senior Leadership
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    Skip junior sales reps. Speak directly with lead architects to assess feasibility, tech stack selection, and milestone costs.
                  </p>
                </div>

                {/* Pulsing Live WhatsApp Button */}
                <a
                  href="https://wa.me/923235678381?text=Hello%20Moltivay%20Solutions,%20I%20would%20like%20to%20discuss%20a%20project%20with%20Engr.%20Ghulam%20Ahmed"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl shadow-lg shadow-emerald-500/20 transition-all duration-300 group transform hover:-translate-y-0.5"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-200 animate-ping" />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-100">
                          Contact us on WhatsApp
                        </span>
                      </div>
                      <div className="text-base font-extrabold text-white">+92 323 5678381</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-600 group-hover:bg-emerald-700 transition-colors">
                    Chat Now
                  </span>
                </a>

                {/* Email Direct */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
                    <Mail className="w-4 h-4 text-electric" />
                    <span>Project inquiries</span>
                  </div>
                  <a
                    href="mailto:ahmedghulam622@gmail.com"
                    className="text-base sm:text-lg font-bold text-white hover:text-electric transition-colors block break-all"
                  >
                    ahmedghulam622@gmail.com
                  </a>
                  <p className="text-[11px] text-slate-400">Response times vary by project and availability.</p>
                </div>

                {/* Physical HQ Address */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>Office Headquarters</span>
                  </div>
                  <div className="text-sm font-semibold text-white leading-snug">
                    Islamabad DHA Phase 2, in front of Defence Housing Authority office
                  </div>
                  <div className="text-xs text-slate-400">Islamabad, Federal Capital, Pakistan</div>
                </div>

                {/* Assurance Badges */}
                <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-3 text-xs text-slate-300">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Project confidentiality</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-electric flex-shrink-0" />
                    <span>Project Discovery</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Why Moltivay Pill Card */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy">
                What Happens Next?
              </h4>
              <ul className="space-y-2 text-xs text-text-muted">
                <li className="flex items-start space-x-2">
                  <span className="font-bold text-electric">1.</span>
                  <span>We evaluate your specifications with our software architects.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold text-electric">2.</span>
                  <span>We schedule an optional 30-min technical discovery session.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold text-electric">3.</span>
                  <span>You receive a project roadmap with milestones and pricing options based on scope.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* =========================================
              RIGHT COLUMN: INTERACTIVE HIGH-CONVERTING FORM
          ========================================= */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-clean-lg relative">
            
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-electric mb-1">
                <span>Inquiry Dispatch</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                Send Us Your Project Vision
              </h3>
              <p className="text-sm text-text-muted mt-1">
                Select your service, estimated budget, and scope. Your inquiry will be sent to our project team.
              </p>
            </div>

            {/* Alert Banners */}
            <AnimatePresence>
              {status.success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start space-x-3.5 shadow-sm"
                >
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold">Inquiry Sent Successfully!</div>
                    <div className="text-xs text-emerald-800 mt-0.5">{status.message}</div>
                    <div className="text-[11px] text-emerald-700 mt-2 font-medium">
                      Sent to: <span className="font-bold">ahmedghulam622@gmail.com</span> (CEO & Founder)
                    </div>
                  </div>
                </motion.div>
              )}

              {status.error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-8 p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start space-x-3.5 shadow-sm"
                >
                  <AlertCircle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold">Transmission Warning</div>
                    <div className="text-xs text-rose-800 mt-0.5">{status.error}</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-7">
              
              {/* Service Selection Pills */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  Service You Need <span className="text-accent">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((serv) => {
                    const isSelected = formData.service === serv;
                    return (
                      <button
                        key={serv}
                        type="button"
                        onClick={() => handleServiceSelect(serv)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                          isSelected
                            ? 'bg-electric text-white shadow-electric-glow scale-[1.02]'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                        }`}
                      >
                        {serv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      maxLength={120}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Henderson"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-electric focus:ring-4 focus:ring-electric/10 text-sm text-navy placeholder:text-slate-400 transition-all font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      maxLength={254}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-electric focus:ring-4 focus:ring-electric/10 text-sm text-navy placeholder:text-slate-400 transition-all font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Budget Range Chips */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  Estimated Budget (USD)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {budgetRanges.map((b) => {
                    const isSelected = formData.budget === b;
                    return (
                      <button
                        key={b}
                        type="button"
                        onClick={() => handleBudgetSelect(b)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                          isSelected
                            ? 'bg-navy text-white shadow-sm ring-2 ring-electric/30'
                            : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                        }`}
                      >
                        {b}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message Scope */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Project Scope & Requirements <span className="text-accent">*</span>
                  </label>
                  <span className="text-[11px] text-slate-400">
                    {formData.message.length} characters
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  maxLength={5000}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline your application goals, target platform (Web/iOS/Android/AI), desired features, or launch timeline..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-electric focus:ring-4 focus:ring-electric/10 text-sm text-navy placeholder:text-slate-400 transition-all resize-none font-medium leading-relaxed"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 rounded-xl bg-electric text-white text-sm font-bold shadow-clean hover:bg-electric-hover transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-electric-glow active:translate-y-0 disabled:opacity-60 disabled:pointer-events-none"
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      <span>Sending your inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Project Inquiry</span>
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>

                <div className="text-xs text-text-muted flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Strict confidentiality protected</span>
                </div>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;
