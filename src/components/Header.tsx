import React, { useState, useEffect } from 'react';
import { Camera, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl">
              <Camera className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Notia
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-orange-600 transition-colors">
              Özellikler
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-orange-600 transition-colors">
              Nasıl Çalışır
            </a>
            <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors">
              İletişim
            </a>
          </nav>

          <button 
            className="md:hidden p-2 text-gray-600 hover:text-orange-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-3 bg-white/95 rounded-xl mt-2 backdrop-blur-sm">
            <a href="#features" className="block px-4 py-2 text-gray-600 hover:text-orange-600 transition-colors">
              Özellikler
            </a>
            <a href="#how-it-works" className="block px-4 py-2 text-gray-600 hover:text-orange-600 transition-colors">
              Nasıl Çalışır
            </a>
            <a href="#contact" className="block px-4 py-2 text-gray-600 hover:text-orange-600 transition-colors">
              İletişim
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;