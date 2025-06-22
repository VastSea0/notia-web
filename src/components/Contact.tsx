import React from 'react';
import { Mail, Instagram, Download } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notia ile Başla
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fotoğraflarını hikayelere dönüştürmeye hazır mısın? Yakında mağazalarda!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-6 rounded-2xl border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Uygulamayı İndir</h3>
              <p className="text-gray-600 mb-6">
                Notia'yı mobil cihazında kullanmaya başlamak için mağazalardan indirebilirsin.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm text-gray-600 py-3 px-6 rounded-xl border border-orange-200">
                  <Download className="h-5 w-5 text-orange-600" />
                  <span>App Store - Coming Soon</span>
                </div>
                
                <div className="flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm text-gray-600 py-3 px-6 rounded-xl border border-orange-200">
                  <Download className="h-5 w-5 text-orange-600" />
                  <span>Google Play - Coming Soon</span>
                </div>
                
              <a
              href="/assets/app-debug.apk"
              download className="flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm text-gray-600 py-3 px-6 rounded-xl border border-orange-200">
                  <Download className="h-5 w-5 text-orange-600" />
                  <span>Android için BETA'yı dene!</span>
                </a>
              </div>

            
            
        
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-orange-50/30 p-6 rounded-2xl border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bağlantıda Kal</h3>
              <p className="text-gray-600 mb-4">
                Güncellemeler, ipuçları ve ilham için bizi takip et.
              </p>
              
              <div className="space-y-3">
                <a 
                  href="https://instagram.com/crusttaceas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">@crusttaceas</div>
                    <div className="text-sm text-gray-600">Instagram'da takip et</div>
                  </div>
                </a>
                
                <a 
                  href="mailto:vastseaoffical0@outlook.com"
                  className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">vastseaoffical0@outlook.com</div>
                    <div className="text-sm text-gray-600">E-posta gönder</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Sorularınız mı var?</h3>
            <p className="text-gray-600 mb-6">
              Sizden haber almak isteriz. Mesaj gönderin, en kısa sürede yanıtlayalım.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Adınız
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="Adınızı girin"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-posta Adresi
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="E-posta adresinizi girin"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Deneyiminizi paylaşın veya soru sorun..."
                ></textarea>
              </div>
              
              <a
                href="mailto:vastseaoffical0@outlook.com"
                className="w-full inline-block text-center bg-gradient-to-r from-orange-400 to-orange-600 text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Mesaj Gönder
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;