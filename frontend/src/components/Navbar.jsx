import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

// Magnetic NavLink Component
const MagneticNavLink = ({ to, onClick, children, isActive }) => {
  const linkRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!linkRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(linkRef.current, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.25,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (!linkRef.current) return;
    gsap.to(linkRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <NavLink
        ref={linkRef}
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `inline-block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            isActive
              ? 'text-blue-600 font-semibold bg-slate-100 border border-slate-200/90 shadow-2xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === path && !location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? 'py-3.5 glass-nav shadow-[0_8px_30px_rgba(15,23,42,0.06)]'
          : 'py-5 bg-white/75 backdrop-blur-xs border-b border-slate-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Company Name */}
          <Link
            to="/"
            onClick={() => handleNavClick('/')}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <img
                src="/logo.png"
                alt="Moltivay Solutions"
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute -inset-1 rounded-full bg-blue-500/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors leading-none">
                Moltivay
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-blue-600 uppercase mt-1">
                Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Magnetic Hover */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <MagneticNavLink
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
              >
                {link.name}
              </MagneticNavLink>
            ))}
          </nav>

          {/* Right Action: Liquid Fill "Get a Quote" Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="btn-liquid-fill-primary inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-sm font-semibold tracking-wide border border-blue-600 shadow-sm active:translate-y-0"
            >
              <span>Get a Quote</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-electric hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-slate-200/80 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => handleNavClick(link.path)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-base font-medium ${
                  isActive
                    ? 'text-electric font-semibold bg-blue-50'
                    : 'text-slate-700 hover:text-electric hover:bg-slate-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-liquid-fill-primary w-full inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold"
            >
              <span>Get a Quote</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
