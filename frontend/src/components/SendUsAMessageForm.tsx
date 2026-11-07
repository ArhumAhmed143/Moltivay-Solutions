'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Loader2, 
  AlertCircle
} from 'lucide-react';

interface SendUsAMessageFormProps {
  className?: string;
  onSuccess?: () => void;
}

export const SendUsAMessageForm: React.FC<SendUsAMessageFormProps> = ({ className = '', onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const servicesList = [
    'Full-Stack Web & Cloud Architecture',
    'SQA Automated & Manual Testing',
    'Enterprise AI & Machine Learning',
    'Mobile App Engineering (iOS & Android)',
    'API Microservices & Backend Infrastructure',
    'Offshore Dedicated Engineering Team',
    'UI/UX & Product Design Engineering',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      let sentSuccessfully = false;

      // 1. First attempt: Next.js serverless API route
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const result = await response.json().catch(() => ({}));
          if (result.success) {
            sentSuccessfully = true;
          }
        }
      } catch (apiErr) {
        console.warn('Local /api/contact route unavailable, attempting direct cloud dispatch...', apiErr);
      }

      // 2. Direct Brevo Cloud Dispatch (Guaranteed delivery to moltivaysolutions@gmail.com)
      if (!sentSuccessfully) {
        const brevoKey = process.env.NEXT_PUBLIC_BREVO_API_KEY || process.env.BREVO_API_KEY || '';
        const directPayload: any = {
          sender: {
            name: 'Moltivay Solutions Portal',
            email: 'ahmedghulam622@gmail.com',
          },
          to: [
            { email: 'moltivaysolutions@gmail.com', name: 'Moltivay Solutions Admin' },
          ],
          replyTo: {
            email: formData.email.trim(),
            name: formData.fullName.trim(),
          },
          subject: `[New Inquiry] ${formData.service || 'Software Project'} - ${formData.fullName.trim()}`,
          htmlContent: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 28px; color: #0f172a; max-width: 620px; background-color: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
              <div style="border-bottom: 2px solid #2563eb; padding-bottom: 12px; margin-bottom: 20px;">
                <h2 style="color: #030a16; margin: 0 0 6px; font-size: 22px;">New Client Project Inquiry</h2>
                <p style="margin: 0; color: #64748b; font-size: 13px;">Dispatched via Moltivay Solutions "Send Us a Message" Portal</p>
              </div>

              <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: 600;">Full Name:</td>
                  <td style="padding: 8px 0; color: #0f172a; font-weight: 700;">${formData.fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email Address:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${formData.email}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${formData.email}</a></td>
                </tr>
                ${formData.company ? `
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Company:</td>
                  <td style="padding: 8px 0; color: #0f172a;">${formData.company}</td>
                </tr>` : ''}
                ${formData.phone ? `
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Phone Number:</td>
                  <td style="padding: 8px 0; color: #0f172a;">${formData.phone}</td>
                </tr>` : ''}
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Service of Interest:</td>
                  <td style="padding: 8px 0; color: #2563eb; font-weight: 700;">${formData.service || 'Custom Engineering'}</td>
                </tr>
              </table>

              <div style="background-color: #f8fafc; border-radius: 10px; border-left: 4px solid #2563eb; padding: 16px; margin: 20px 0;">
                <div style="font-weight: 700; color: #0f172a; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Project Message / Specifications:</div>
                <div style="color: #334155; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">${formData.message}</div>
              </div>

              <div style="border-top: 1px solid #f1f5f9; padding-top: 14px; margin-top: 24px; color: #94a3b8; font-size: 12px; display: flex; justify-content: space-between;">
                <span>Moltivay Solutions Executive Engineering Desk</span>
                <span>Response SLA: &lt; 24h</span>
              </div>
            </div>
          `,
        };

        const directRes = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'api-key': brevoKey,
            'content-type': 'application/json',
            accept: 'application/json',
          },
          body: JSON.stringify(directPayload),
        });

        if (!directRes.ok) {
          const errBody = await directRes.text();
          throw new Error('Email service response: ' + errBody);
        }
        sentSuccessfully = true;
      }

      setIsSubmitted(true);
      if (onSuccess) onSuccess();
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (err: any) {
      console.error('[Contact Form Error]', err);
      setErrorMessage(
        'Unable to dispatch email automatically. Please contact moltivaysolutions@gmail.com directly or WhatsApp at +92 323 5678381.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      
      {/* Heading OUTSIDE the card matching exact screenshot format */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-6">
        Send Us a Message
      </h2>

      {/* The White Card Box */}
      <div className="relative bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 lg:p-12 transition-all">
        
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div 
              key="success-box"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="py-12 sm:py-16 text-center max-w-lg mx-auto"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-6 shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
                MESSAGE DISPATCHED
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 font-heading">
                Thank You! We Received Your Request
              </h3>
              
              <p className="text-slate-600 mb-8 text-sm sm:text-base leading-relaxed">
                Your inquiry has been routed directly to <strong className="text-slate-900">moltivaysolutions@gmail.com</strong>. A principal engineer will review your project specifications and get back to you within 24 hours.
              </p>

              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4 text-slate-600" />
                <span>Send Another Message</span>
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Full Name * & Company (2 Columns) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                
                {/* Full Name * */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Your full name"
                    className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-600 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:ring-4 focus:ring-blue-100/70 outline-none transition-all duration-200 text-sm shadow-xs"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company name"
                    className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-600 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:ring-4 focus:ring-blue-100/70 outline-none transition-all duration-200 text-sm shadow-xs"
                  />
                </div>

              </div>

              {/* Row 2: Email Address * & Phone Number (2 Columns) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                
                {/* Email Address * */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@company.com"
                    className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-600 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:ring-4 focus:ring-blue-100/70 outline-none transition-all duration-200 text-sm shadow-xs"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-600 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:ring-4 focus:ring-blue-100/70 outline-none transition-all duration-200 text-sm shadow-xs"
                  />
                </div>

              </div>

              {/* Row 3: Service of Interest * (Full Width) */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Service of Interest *
                </label>
                <div className="relative">
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-600 rounded-xl px-4 py-3.5 text-slate-900 focus:ring-4 focus:ring-blue-100/70 outline-none transition-all duration-200 text-sm shadow-xs appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a service...</option>
                    {servicesList.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 4: Message * (Full Width) */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                  className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-600 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:ring-4 focus:ring-blue-100/70 outline-none transition-all duration-200 text-sm shadow-xs min-h-[140px] resize-y"
                />
              </div>

              {/* Error Notice */}
              {errorMessage && (
                <motion.div 
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{errorMessage}</span>
                </motion.div>
              )}

              {/* Submit Button & NDA Protection */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Strict NDA Protected • Zero IP Leakage Guarantee</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default SendUsAMessageForm;
