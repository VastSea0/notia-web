import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}assets/app_icon.png`}
                alt="Notia Logo"
                className="h-9 w-9 rounded-xl border border-slate-600 shadow-sm"
              />
              <span className="text-xl font-bold">Notia</span>
              <span className="text-xs bg-orange-500/20 text-orange-400 border border-orange-500/30 px-2 py-0.5 rounded-full font-medium">v1.3.0</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md mb-4 text-sm">
              Fotoğraf galerilerini kişisel bir hikaye kitabına dönüştürün. Her fotoğraf bir anı barındırır, Notia bu anıları yakalamanızı, zenginleştirmenizi ve ölümsüzleştirmenizi sağlar.
            </p>
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <span>Geliştirici:</span>
              <Heart className="h-3.5 w-3.5 text-orange-500 fill-current" />
              <a href="https://egehankahraman.vercel.app" className="text-slate-300 hover:text-orange-400 underline transition-colors">
                Egehan Kahraman (VastSea)
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Bağlantılar</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.vastsea.notia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5 font-medium text-slate-300"
                >
                  <span>Google Play Store</span>
                  <span className="text-[10px] bg-emerald-900 text-emerald-300 px-1.5 py-0.2 rounded">Yayında</span>
                </a>
              </li>
              <li>
                <Link
                  to="/versions"
                  className="hover:text-white transition-colors"
                >
                  Sürüm Geçmişi (v1.3.0)
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-white transition-colors"
                >
                  Fiyatlandırma & Pro Lisans
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Gizlilik Politikası (GDPR)
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/VastSea0/notia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub Deposu ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-slate-500">
            <div>
              © 2026 Notia by Egehan KAHRAMAN. Tüm hakları saklıdır.
            </div>
            <div>
              Notia – Anılarını Yakala, Hikayeni Yaşat
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
