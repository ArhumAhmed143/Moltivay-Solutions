import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white pt-20 pb-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-navy-800">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              {/* White inverted logo variation */}
              <div className="flex items-center space-x-3">
                <img
                  src="/logo.png"
                  alt="Moltivay Solutions"
                  className="h-11 w-auto object-contain rounded-lg bg-white p-1"
                />
                <div>
                  <span className="block font-heading font-extrabold text-2xl tracking-tight text-white">
                    MOLTIVAY
                  </span>
                  <span className="block text-[10px] font-bold tracking-[0.25em] text-electric uppercase -mt-1">
                    SOLUTIONS
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Moltivay Solutions is a premier web and mobile app development agency engineering scalable digital products, cloud architectures, and autonomous AI systems.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://github.com/ArhumAhmed143"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg bg-navy-800 hover:bg-electric flex items-center justify-center text-slate-300 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-electric transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-electric transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-electric transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-electric transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-electric transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-heading">
              Specialized Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/services" className="hover:text-electric transition-colors">
                  Web App Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-electric transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-electric transition-colors">
                  UI/UX Product Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-electric hover:underline font-medium">
                  Social Media Assistant ⭐
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-electric transition-colors">
                  QA & Test Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-electric transition-colors">
                  Maintenance & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-heading">
              Contact Desk
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-electric flex-shrink-0" />
                <a href="mailto:ahmedghulam622@gmail.com" className="hover:text-white transition-colors break-all">
                  ahmedghulam622@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-electric flex-shrink-0" />
                <a href="tel:+923235678381" className="hover:text-white transition-colors">
                  +92 323 5678381
                </a>
              </div>
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-electric flex-shrink-0 mt-1" />
                <span className="leading-snug">Islamabad DHA Phase 2, in front of Defence Housing Authority office</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 Moltivay Solutions. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <span>Leadership: <strong className="text-slate-400 font-medium">Engr. Ghulam Ahmed</strong></span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
