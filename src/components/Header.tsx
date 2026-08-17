import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone, ArrowLeft } from 'lucide-react';
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
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-200/60' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Hub Return Link */}
          <div className="flex items-center gap-3">
            <a
              href="https://egehankahraman.vercel.app"
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 bg-white/80 border border-slate-200 px-3 py-1.5 rounded-full transition-colors shadow-2xs"
              title="Egehan Kahraman Portfolyosu"
            >
              <ArrowLeft className="h-3 w-3" />
              <span className="font-medium hidden sm:inline">Egehan Kahraman</span>
            </a>

            <div className="h-4 w-px bg-slate-200" />

            <Link to="/" className="flex items-center gap-2.5">
              <img
                src={`${baseUrl}assets/app_icon.png`}
                alt="Notia Logo"
                className="h-8 w-8 rounded-xl shadow-xs"
              />
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">Notia</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <button
              onClick={() => scrollToSection('features')}
              className="hover:text-orange-600 transition-colors cursor-pointer"
            >
              Özellikler
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="hover:text-orange-600 transition-colors cursor-pointer"
            >
              Nasıl Çalışır?
            </button>
            <Link
              to="/pricing"
              className="hover:text-orange-600 transition-colors"
            >
              Fiyatlandırma
            </Link>
            <Link
              to="/versions"
              className="hover:text-orange-600 transition-colors"
            >
              Sürümler
            </Link>
            <Link
              to="/privacy"
              className="hover:text-orange-600 transition-colors"
            >
              Gizlilik
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-orange-600 transition-colors cursor-pointer"
            >
              İletişim
            </button>

            <a
              href="https://play.google.com/store/apps/details?id=com.vastsea.notia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-xs transition-colors"
            >
              <Smartphone className="h-3.5 w-3.5 text-emerald-400" />
              <span>Google Play</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüyü Aç"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-2xl p-5 shadow-xl border border-slate-200 space-y-3 mt-1 text-sm font-medium text-slate-700">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left py-2 hover:text-orange-600"
            >
              Özellikler
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left py-2 hover:text-orange-600"
            >
              Nasıl Çalışır?
            </button>
            <Link
              to="/pricing"
              className="block py-2 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Fiyatlandırma
            </Link>
            <Link
              to="/versions"
              className="block py-2 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Sürümler
            </Link>
            <Link
              to="/privacy"
              className="block py-2 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Gizlilik Politikası
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 hover:text-orange-600"
            >
              İletişim
            </button>

            <a
              href="https://play.google.com/store/apps/details?id=com.vastsea.notia"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3 bg-emerald-600 text-white rounded-xl text-xs font-bold"
            >
              Google Play Store'da Görüntüle
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
