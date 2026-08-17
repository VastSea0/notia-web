import React from 'react';
import { Heart, Smartphone, Github, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}assets/app_icon.png`}
                alt="Notia Logo"
                className="h-8 w-8 rounded-xl"
              />
              <span className="text-xl font-extrabold tracking-tight">Notia</span>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Fotoğraf galerilerini yaşayan bir anı defterine dönüştürün. Zengin Markdown notlar, harita konumları, kişi profilleri ve NotiaAI görsel asistanı.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <span>Geliştirici:</span>
              <a 
                href="https://egehankahraman.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-orange-400 font-medium transition-colors underline"
              >
                Egehan KAHRAMAN (VastSea)
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Uygulama
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.vastsea.notia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-slate-300 font-medium"
                >
                  <Smartphone className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Google Play Store</span>
                </a>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Fiyatlandırma & Planlar
                </Link>
              </li>
              <li>
                <Link to="/versions" className="hover:text-white transition-colors">
                  Sürüm Geçmişi
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Docs */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Gizlilik & İletişim
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link to="/privacy" className="hover:text-orange-400 text-slate-300 transition-colors font-medium">
                  Gizlilik Politikası (Privacy Policy)
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/VastSea0/notia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub Açık Kaynak
                </a>
              </li>
              <li>
                <a
                  href="mailto:vastseaoffical0@outlook.com"
                  className="hover:text-white transition-colors"
                >
                  vastseaoffical0@outlook.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            © 2026 Notia. Tüm hakları saklıdır.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-slate-400">Gizlilik Bildirimi</Link>
            <span>•</span>
            <a href="https://egehankahraman.vercel.app" className="hover:text-slate-400">Dijital İkiz Portfolyosu</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
