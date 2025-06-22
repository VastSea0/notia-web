import React from 'react';
import { Camera, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl">
                <Camera className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Notia</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-4">
              Fotoğraf galerinizi kişisel bir hikaye kitabına dönüştürün. Her resmin anlatacak bir hikayesi var, 
              Notia bu değerli anıları sonsuza kadar korumanıza yardımcı oluyor.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Egehan KAHRAMAN</span>
              <Heart className="h-4 w-4 text-orange-500 fill-current" />
              <span>ile yapıldı</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="https://instagram.com/crusttaceas" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="mailto:vastseaoffical0@outlook.com" className="hover:text-white transition-colors">E-posta</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Notia. Tüm hakları saklıdır.
            </div>
            <div className="text-gray-400 text-sm">
              Fotoğraflarınızı hikayelere dönüştürün
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;