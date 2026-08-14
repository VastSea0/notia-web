import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const baseUrl = import.meta.env.BASE_URL || '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/' && location.pathname !== '') {
      window.location.href = `${baseUrl}#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Portfolio Back Link */}
          <div className="flex items-center space-x-3">
            <a
              href="https://egehankahraman.vercel.app"
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-orange-600 bg-slate-100/80 hover:bg-orange-50 border border-slate-200/80 hover:border-orange-200 px-2.5 py-1 rounded-full transition-all"
              title="Egehan Kahraman Portfolyosuna Dön"
            >
              <span className="text-[10px]">←</span>
              <span className="hidden sm:inline">Egehan Kahraman</span>
            </a>
            <span className="text-slate-300 font-light hidden sm:inline">/</span>

            <Link to="/" className="flex items-center space-x-2.5">
              <img
                src={`${baseUrl}assets/app_icon.png`}
                alt="Notia Logo"
                className="h-8 w-8 rounded-xl border border-slate-200 shadow-sm"
              />
              <span className="text-xl font-bold text-slate-900 tracking-tight">Notia</span>
              <span className="text-[11px] font-semibold bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">v1.3.0</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-7">
            <button
              onClick={() => scrollToSection('features')}
              className="text-slate-600 hover:text-orange-600 transition-colors font-medium text-sm"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-slate-600 hover:text-orange-600 transition-colors font-medium text-sm"
            >
              How It Works
            </button>
            <Link
              to="/pricing"
              className="text-slate-600 hover:text-orange-600 transition-colors font-medium text-sm"
            >
              Pricing
            </Link>
            <Link
              to="/versions"
              className="text-slate-600 hover:text-orange-600 transition-colors font-medium text-sm"
            >
              Versions
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-600 hover:text-orange-600 transition-colors font-medium text-sm"
            >
              Contact
            </button>
            <Link
              to="/privacy"
              className="text-slate-600 hover:text-orange-600 transition-colors font-medium text-sm"
            >
              Privacy
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.vastsea.notia"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-medium text-xs transition-all shadow-sm"
            >
              Get App
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-orange-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="py-4 space-y-3 bg-white/95 rounded-2xl mt-2 p-4 shadow-lg border border-slate-200/80">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-3 py-2 text-slate-600 hover:text-orange-600 transition-colors font-medium text-sm"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-3 py-2 text-slate-600 hover:text-orange-600 transition-colors font-medium text-sm"
            >
              How It Works
            </button>
            <Link
              to="/pricing"
              className="block px-3 py-2 text-slate-600 hover:text-orange-600 transition-colors font-medium text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/versions"
              className="block px-3 py-2 text-slate-600 hover:text-orange-600 transition-colors font-medium text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Versions
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-slate-600 hover:text-orange-600 transition-colors font-medium text-sm"
            >
              Contact
            </button>
            <Link
              to="/privacy"
              className="block px-3 py-2 text-slate-600 hover:text-orange-600 transition-colors font-medium text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
