import React from 'react';
import { 
  Smartphone,
  ExternalLink,
  MessageCircle,
  Mail,
  Github,
  Heart
} from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full uppercase tracking-wider">
            İndir & İletişim
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Notia'yı Edinin & Bize Ulaşın
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Google Play Store üzerinden hemen yükleyebilir; öneri, görüş veya destek talepleriniz için doğrudan bize yazabilirsiniz.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Download & Social */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Google Play Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl space-y-5">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Google Play'de Yayında</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight">
                  Notia Android
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Fotoğraflarınıza hayat verin. Google Play Store üzerinden Notia'yı güvenle yükleyin.
                </p>
              </div>

              <a
                href="https://play.google.com/store/apps/details?id=com.vastsea.notia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-6 rounded-2xl font-medium text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Smartphone className="h-5 w-5" />
                <span>Google Play Store'dan Yükle</span>
                <ExternalLink className="h-4 w-4 opacity-80" />
              </a>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>iOS Sürümü: Hazırlanıyor</span>
                <span>Otomatik Güncellemeler</span>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Geliştirici & Topluluk
              </h4>

              <div className="space-y-2 text-xs sm:text-sm">
                <a 
                  href="mailto:vastseaoffical0@outlook.com"
                  className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/60 hover:border-orange-300 transition-colors text-slate-700 font-medium"
                >
                  <Mail className="h-4 w-4 text-orange-600" />
                  <span>vastseaoffical0@outlook.com</span>
                </a>

                <a 
                  href="https://github.com/VastSea0/notia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/60 hover:border-orange-300 transition-colors text-slate-700 font-medium"
                >
                  <Github className="h-4 w-4 text-slate-900" />
                  <span>GitHub Deposu (VastSea0/notia)</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right: Clean Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900">
                Geri Bildirim veya Soru Gönderin
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Uygulama deneyiminiz, hata bildirimleri veya işbirliği için doğrudan bize yazabilirsiniz.
              </p>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = 'mailto:vastseaoffical0@outlook.com?subject=Notia%20Geri%20Bildirim';
              }} 
              className="space-y-4 text-xs sm:text-sm"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="font-semibold text-slate-700 block">
                    Adınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all text-slate-800"
                    placeholder="Adınız"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="font-semibold text-slate-700 block">
                    E-Posta Adresiniz
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all text-slate-800"
                    placeholder="eposta@ornek.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="font-semibold text-slate-700 block">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all text-slate-800 resize-none"
                  placeholder="Notia hakkında görüş, öneri veya sorunuz..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-3.5 px-6 rounded-xl font-medium shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="h-4 w-4 text-orange-400" />
                <span>Mesaj Gönder (E-Posta)</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
