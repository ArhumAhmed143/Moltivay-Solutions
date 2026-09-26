import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled
          ? 'py-3.5 shadow-[0_4px_20px_rgba(10,22,40,0.08)] border-b border-slate-100'
          : 'py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Company Name */}
          <Link to="/" onClick={() => handleNavClick('/')} className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt="Moltivay Solutions"
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-navy group-hover:text-electric transition-colors leading-none">
                Moltivay
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-electric uppercase mt-1">
                Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-electric font-semibold bg-blue-50/70'
                      : 'text-navy/80 hover:text-electric hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-electric text-white text-sm font-semibold tracking-wide shadow-clean hover:bg-electric-hover transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-electric-glow active:translate-y-0"
            >
              <span>Get a Quote</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-navy hover:text-electric hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'text-electric bg-blue-50 font-semibold'
                      : 'text-navy hover:text-electric hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="pt-2">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center px-5 py-3 rounded-lg bg-electric text-white font-semibold shadow-clean hover:bg-electric-hover transition-all"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              <span>Get a Quote</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
