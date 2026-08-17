import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Zap, ArrowRight, Check, Sparkles, Infinity, Shield } from 'lucide-react';

const PricingPreview = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full uppercase tracking-wider">
            Planlar & Üyelik
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Şeffaf & Esnek Pro Seçenekleri
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Fotoğraf notlama, zengin Markdown ve harita özellikleri daima ücretsizdir. Sınırsız NotiaAI ve Pro ayrıcalıkları için esnek planlar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* Ücretsiz Başlangıç */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Ücretsiz Başlangıç</h3>
                <p className="text-xs text-slate-500 mt-0.5">Temel fotoğraf notlama & günlük</p>
              </div>
              <div className="text-3xl font-black text-slate-900 font-mono">
                Ücretsiz
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 pt-3 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Sınırsız fotoğraf notu & Markdown</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>İnteraktif fotoğraf haritası & EXIF</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Biyometrik kilit & AES-256 şifreleme</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500 shrink-0" />
                  <span>Günlük 20 NotiaAI isteği</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Notia Pro Yıllık (En Popüler) */}
          <div className="bg-gradient-to-b from-orange-50/60 to-white rounded-3xl p-8 border-2 border-orange-500 shadow-xl relative flex flex-col justify-between space-y-6">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="bg-orange-600 text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                En Avantajlı Plan
              </span>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Notia Pro Yıllık</h3>
                <p className="text-xs text-orange-800 font-medium mt-0.5">Aylık sadece ₺37.50'ye denk gelir</p>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-black text-slate-900 font-mono">₺449.99</span>
                <span className="text-xs text-slate-500">/ yıl</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 pt-3 border-t border-orange-200/80 font-medium">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Tamamen reklamsız deneyim</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-orange-600 shrink-0" />
                  <span>Sınırsız NotiaAI görsel asistan & sohbet</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Öncelikli yapay zekâ yanıt hızı</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Bulut senkronizasyonu & Drive yedekleme</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Notia Pro Ömür Boyu */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Ömür Boyu Lisans</h3>
                <p className="text-xs text-slate-500 mt-0.5">Tek seferlik ödeme, kalıcı Pro</p>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-black text-slate-900 font-mono">₺799.99</span>
                <span className="text-xs text-slate-500">tek sefer</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 pt-3 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <Infinity className="h-4 w-4 text-purple-600 shrink-0" />
                  <span>Ömür boyu sınırsız Pro erişimi</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Yıllık Pro'daki tüm ayrıcalıklar</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Tüm gelecek özelliklere ücretsiz erişim</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Tek seferlik yatırım, sıfır abonelik</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
          >
            <span>Aylık (₺49.99/ay) ve Tüm Plan Karşılaştırmasını Görün</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PricingPreview;
