import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
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
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/assets/app_icon.png"
              alt="Notia Logo"
              className="h-9 w-9 rounded-xl border border-slate-200 shadow-sm"
            />
            <span className="text-xl font-semibold text-slate-900">Notia</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-slate-600 hover:text-orange-600 transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-slate-600 hover:text-orange-600 transition-colors font-medium"
            >
              How It Works
            </button>
            <Link
              to="/pricing"
              className="text-slate-600 hover:text-orange-600 transition-colors font-medium"
            >
              Pricing
            </Link>
            <Link
              to="/versions"
              className="text-slate-600 hover:text-orange-600 transition-colors font-medium"
            >
              Versions
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-600 hover:text-orange-600 transition-colors font-medium"
            >
              Contact
            </button>
            <Link
              to="/privacy"
              className="text-slate-600 hover:text-orange-600 transition-colors font-medium"
            >
              Privacy
            </Link>
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
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="py-4 space-y-3 bg-white/95 rounded-xl mt-2 backdrop-blur-sm border border-slate-200/60">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-4 py-2 text-slate-600 hover:text-orange-600 transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-4 py-2 text-slate-600 hover:text-orange-600 transition-colors font-medium"
            >
              How It Works
            </button>
            <Link
              to="/pricing"
              className="block px-4 py-2 text-slate-600 hover:text-orange-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/versions"
              className="block px-4 py-2 text-slate-600 hover:text-orange-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Versions
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-slate-600 hover:text-orange-600 transition-colors font-medium"
            >
              Contact
            </button>
            <Link
              to="/privacy"
              className="block px-4 py-2 text-slate-600 hover:text-orange-600 transition-colors font-medium"
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
