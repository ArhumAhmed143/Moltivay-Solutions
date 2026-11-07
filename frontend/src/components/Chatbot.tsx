'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  ArrowRight, 
  RefreshCw, 
  Phone, 
  Mail, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  action?: {
    type: 'whatsapp' | 'quote' | 'call';
    label: string;
    href?: string;
  };
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'bot',
    text: 'Hello! I am Moltivay Agent, your dedicated AI consultant. How can I help you today?',
    time: 'Just now',
  },
  {
    id: '2',
    sender: 'bot',
    text: 'Feel free to ask me anything about our Full-Stack Web Development, SQA Testing, AI Model Training, Pricing, or Executive Leadership.',
    time: 'Just now',
  },
];

const SUGGESTIONS = [
  'What services do you provide?',
  'How do I request a quote?',
  'Who is the Founder & CEO?',
  'Tell me about SQA & QA Testing',
  'Where are your headquarters?',
  'Can I chat on WhatsApp?',
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      scrollToBottom();
    }
  }, [isOpen, messages]);

  const generateAnswer = (query: string): { text: string; action?: Message['action'] } => {
    const q = query.toLowerCase();

    // 1. Services
    if (q.includes('service') || q.includes('offer') || q.includes('provide') || q.includes('what do you do') || q.includes('work')) {
      return {
        text: 'Moltivay Solutions specializes in 4 flagship practice areas:\n\n1. Full-Stack Web Development (Next.js 14, React 19, TypeScript, Distributed PostgreSQL, Node.js)\n2. SQA & Test Automation (Automated Cypress & Playwright E2E suites, high-concurrency load testing)\n3. Private AI Model Training (Sovereign LLMs, PyTorch fine-tuning, MLX workflows)\n4. Dedicated Growth & Virtual Assistance (Technical administrative workflows & operational scaling).\n\nWhich service would you like to explore?',
        action: {
          type: 'quote',
          label: 'Request a Project Quote',
          href: '#contact',
        },
      };
    }

    // 2. Full Stack
    if (q.includes('full stack') || q.includes('web') || q.includes('next.js') || q.includes('react') || q.includes('app')) {
      return {
        text: 'Our Full-Stack engineering team builds high-throughput, microservice-ready web applications using Next.js 14 App Router, React 19, Docker containerization, and distributed SQL databases with 99.99% guaranteed uptime SLA.',
        action: {
          type: 'quote',
          label: 'Start a Web Project',
          href: '#contact',
        },
      };
    }

    // 3. SQA
    if (q.includes('sqa') || q.includes('qa') || q.includes('test') || q.includes('quality') || q.includes('cypress') || q.includes('playwright')) {
      return {
        text: 'Our Software Quality Assurance (SQA) practice provides automated end-to-end testing with Playwright & Cypress, OWASP Top 10 security penetration checks, high-concurrency load stress tests (>50,000 req/s), and zero-regression CI/CD deployment gates.',
        action: {
          type: 'quote',
          label: 'Explore SQA Services',
          href: '#contact',
        },
      };
    }

    // 4. AI Training
    if (q.includes('ai') || q.includes('model') || q.includes('machine learning') || q.includes('pytorch') || q.includes('gpt')) {
      return {
        text: 'We train and deploy sovereign AI models on private enterprise infrastructure. Our workflows utilize PyTorch, Apple Silicon MLX, local fine-tuning, and zero-data-leakage architectures to protect client IP.',
        action: {
          type: 'quote',
          label: 'Inquire About AI Training',
          href: '#contact',
        },
      };
    }

    // 5. Quote / Pricing / Cost
    if (q.includes('quote') || q.includes('cost') || q.includes('price') || q.includes('pricing') || q.includes('rate') || q.includes('budget')) {
      return {
        text: 'Every project receives an architectural proposal and transparent scoping within 24 hours. You can submit your requirements in our quote form, or contact us directly on WhatsApp for an immediate quotation.',
        action: {
          type: 'whatsapp',
          label: 'Get Fast Quote on WhatsApp',
          href: 'https://wa.me/923235678381?text=Hello%20Moltivay%20Solutions%2C%20I%20would%20like%20to%20get%20more%20details%20about%20your%20company%20and%20software%20development%20services.',
        },
      };
    }

    // 6. CEO / Founder / Leadership
    if (q.includes('ceo') || q.includes('founder') || q.includes('ghulam') || q.includes('ahmed') || q.includes('lead') || q.includes('who runs')) {
      return {
        text: 'Moltivay Solutions is led by Founder & CEO Engr. Ghulam Ahmed, a Senior Enterprise Architect and AI Systems Engineer with over 15 years of industry leadership and 240+ mission-critical software deployments globally.',
        action: {
          type: 'quote',
          label: 'View Leadership Profile',
          href: '#leadership',
        },
      };
    }

    // 7. Location / Office / Address
    if (q.includes('location') || q.includes('address') || q.includes('office') || q.includes('headquarter') || q.includes('where') || q.includes('pakistan')) {
      return {
        text: 'Moltivay Solutions Global Headquarters are located at:\n\nAbid Majeed Road, Near Bake Point Bakery,\nRawalpindi, Punjab, Pakistan.\n\nWe operate with global engineering reach across North America, UK, Europe, UAE, and APAC.',
        action: {
          type: 'call',
          label: 'Contact Technical Desk',
          href: '#contact',
        },
      };
    }

    // 8. WhatsApp / Phone / Contact
    if (q.includes('whatsapp') || q.includes('phone') || q.includes('call') || q.includes('number') || q.includes('chat')) {
      return {
        text: 'You can chat directly with our technical leadership on WhatsApp at +92 323 5678381 or call our direct desk 24/7.',
        action: {
          type: 'whatsapp',
          label: 'Open WhatsApp Chat',
          href: 'https://wa.me/923235678381?text=Hello%20Moltivay%20Solutions%2C%20I%20would%20like%20to%20get%20more%20details%20about%20your%20company%20and%20software%20development%20services.',
        },
      };
    }

    // 9. SLA / Security / Guarantee
    if (q.includes('sla') || q.includes('security') || q.includes('uptime') || q.includes('nda') || q.includes('guarantee')) {
      return {
        text: 'We guarantee 99.99% production uptime SLA, strict NDA protection, zero client IP leakage, SOC 2 Type II alignment, and zero-regression deployment gates for all systems.',
      };
    }

    // Default Fallback
    return {
      text: 'Thank you for reaching out! Moltivay Solutions provides enterprise full-stack development, SQA automation, and AI engineering. Would you like to speak directly with an engineer or submit a project proposal?',
      action: {
        type: 'whatsapp',
        label: 'Chat Directly on WhatsApp',
        href: 'https://wa.me/923235678381?text=Hello%20Moltivay%20Solutions%2C%20I%20would%20like%20to%20get%20more%20details%20about%20your%20company%20and%20software%20development%20services.',
      },
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Natural typing delay
    setTimeout(() => {
      const response = generateAnswer(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: response.text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action: response.action,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 650);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* =========================================================
          1. FLOATING CHATBOT TOGGLE BUTTON (Right Bottom Corner)
      ========================================================= */}
      <div className="fixed bottom-6 right-6 z-[9990] flex flex-col items-end pointer-events-auto">
        <AnimatePresence>
          {!isOpen && hasUnread && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="mb-3 px-3.5 py-1.5 rounded-full bg-slate-950 text-white text-xs font-semibold shadow-xl border border-white/20 flex items-center gap-2 cursor-pointer hover:border-purple-400 transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <img
                src="/moltivay-agent-logo.png"
                alt="Moltivay Agent"
                className="w-5 h-5 rounded-full object-cover border border-purple-400/60"
              />
              <span>Ask Moltivay Agent</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close Moltivay Agent' : 'Open Moltivay Agent Chat'}
          className="relative w-16 h-16 rounded-full bg-slate-950 text-white shadow-[0_10px_30px_-5px_rgba(168,85,247,0.5)] flex items-center justify-center border-2 border-purple-500/60 transition-all cursor-pointer group overflow-visible"
        >
          {/* Ambient Glowing Purple / Cyan Aura */}
          <span className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-400 opacity-40 blur-md group-hover:opacity-75 transition-opacity pointer-events-none" />

          {isOpen ? (
            <X className="w-7 h-7 text-white relative z-10 transition-transform duration-200 group-hover:rotate-90" />
          ) : (
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden p-0.5">
              <img
                src="/moltivay-agent-logo.png"
                alt="Moltivay Agent"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-900 shadow-xs animate-pulse" />
            </div>
          )}
        </motion.button>
      </div>

      {/* =========================================================
          2. CHATBOT WINDOW (Interactive Dialog)
      ========================================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-[9995] w-[calc(100vw-2rem)] sm:w-[410px] h-[570px] max-h-[calc(100vh-7rem)] bg-white rounded-3xl border border-slate-200 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden text-slate-900"
          >
            {/* Header with Official Moltivay Agent Logo */}
            <div className="bg-gradient-to-r from-[#030a16] via-[#091b38] to-[#040e1d] text-white p-4 sm:p-4.5 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="/moltivay-agent-logo.png"
                    alt="Moltivay Agent Logo"
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/60 shadow-md shadow-purple-500/30"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#091b38] animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-extrabold text-base tracking-tight text-white flex items-center gap-1.5">
                      <span>Moltivay Agent</span>
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                        OFFICIAL
                      </span>
                    </h3>
                  </div>
                  <p className="text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>ONLINE // INSTANT KNOWLEDGE</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setMessages(INITIAL_MESSAGES)}
                  title="Reset Conversation"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close Assistant"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Topic Chips */}
            <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 overflow-x-auto no-scrollbar flex items-center gap-1.5 flex-shrink-0">
              {SUGGESTIONS.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendMessage(item)}
                  className="text-[11px] font-medium whitespace-nowrap px-2.5 py-1 rounded-full bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-blue-300 transition-all shadow-2xs cursor-pointer flex-shrink-0"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/60 text-xs sm:text-sm">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.sender === 'bot' && (
                    <img
                      src="/moltivay-agent-logo.png"
                      alt="Moltivay Agent"
                      className="w-7 h-7 rounded-full object-cover border border-purple-400/50 mt-1 flex-shrink-0"
                    />
                  )}
                  <div className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} max-w-[84%]`}>
                    <div
                      className={`rounded-2xl p-3.5 leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-br-xs shadow-sm font-medium'
                          : 'bg-white text-slate-800 rounded-bl-xs border border-slate-200 shadow-sm'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.text}</p>

                      {/* Interactive Action Button in Bot Response */}
                      {msg.action && (
                        <div className="mt-3 pt-2.5 border-t border-slate-100">
                          {msg.action.type === 'whatsapp' ? (
                            <a
                              href={msg.action.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-bold bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-lg transition-all shadow-xs"
                            >
                              <Phone className="w-3.5 h-3.5 fill-current" />
                              <span>{msg.action.label}</span>
                              <ExternalLink className="w-3 h-3 ml-0.5" />
                            </a>
                          ) : (
                            <a
                              href={msg.action.href || '#contact'}
                              onClick={() => setIsOpen(false)}
                              className="inline-flex items-center gap-1.5 text-xs font-bold bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-200 transition-all"
                            >
                              <span>{msg.action.label}</span>
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 px-1">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing Indicator with Avatar */}
              {isTyping && (
                <div className="flex items-center gap-2">
                  <img
                    src="/moltivay-agent-logo.png"
                    alt="Moltivay Agent"
                    className="w-7 h-7 rounded-full object-cover border border-purple-400/50 flex-shrink-0"
                  />
                  <div className="flex items-center gap-1.5 p-3 rounded-2xl rounded-bl-xs bg-white border border-slate-200 w-fit text-slate-400 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-white border-t border-slate-200">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about services, pricing, tech stack..."
                  className="flex-1 bg-slate-100 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-blue-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white flex items-center justify-center transition-all shadow-xs cursor-pointer flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="mt-1.5 flex items-center justify-between text-[10px] text-slate-400 px-1 font-mono">
                <span>Moltivay Knowledge Base v2.4</span>
                <span className="text-emerald-600 font-semibold">Ready to Assist</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
