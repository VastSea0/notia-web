import React from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 to-orange-100/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Fotoğraflarını
              <span className="text-orange-600 block">
                Hikayeye Dönüştür
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Her fotoğrafın bir hikayesi var. Notia ile çektiğin her kareye kendi notlarını, 
              düşüncelerini ve anılarını ekle.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-200">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-orange-600" />
                <span className="text-gray-700 font-medium">App Store - Coming Soon</span>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-200">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-orange-600" />
                <span className="text-gray-700 font-medium">Google Play - Coming Soon</span>
              </div>
            </div>

            <a
              href="/assets/app-debug.apk"
              download
              className="bg-orange-600 hover:bg-orange-700 transition-colors text-white px-6 py-3 rounded-full border border-orange-700 flex items-center space-x-3 font-medium shadow"
            >
              <Download className="h-5 w-5 text-white" />
              <span>Android için BETA'yı dene!</span>
            </a>
          </div>
          <div className="mt-12">
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              {/* Image 1 */}
              <div className="relative bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-orange-200 shadow-lg max-w-xs w-full hover:scale-105 transition-transform duration-300">
                <img
                  src="/assets/image-2.png"
                  alt="Notia uygulama ekran görüntüsü 1"
                  className="w-full h-[420px] object-cover object-top rounded-xl mb-3 border border-orange-100 shadow"
                />
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow">Galeri</div>
                <div className="text-left space-y-1 mt-2">
                  <h3 className="font-semibold text-gray-900">Tüm Anıların Tek Yerde</h3>
                  <p className="text-xs text-gray-600">Çektiğin tüm fotoğrafları ve onlara eklediğin hikayeleri kolayca galeri üzerinden bulabilirsin.</p>
                </div>
              </div>
              {/* Image 2 */}
              <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-orange-200 shadow-lg max-w-xs w-full hover:scale-105 transition-transform duration-300">
                <img
                  src="/assets/image-1.png"
                  alt="Notia uygulama ekran görüntüsü 2"
                  className="w-full h-[420px] object-cover object-top rounded-xl mb-3 border border-orange-100 shadow"
                />
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow">Hikaye Ekle</div>
                <div className="text-left space-y-1 mt-2">
                  <h3 className="font-semibold text-gray-900">Her Fotoğrafa Kendi Hikayeni Yaz</h3>
                  <p className="text-xs text-gray-600">Fotoğraflarına anılarını, hislerini veya önemli notlarını ekleyerek onları daha anlamlı hale getir.</p>
                </div>
              </div>
              {/* Image 3 */}
              <div className="relative bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-orange-200 shadow-lg max-w-xs w-full hover:scale-105 transition-transform duration-300">
                <img
                  src="/assets/image-3.png"
                  alt="Notia uygulama ekran görüntüsü 3"
                  className="w-full h-[420px] object-cover object-top rounded-xl mb-3 border border-orange-100 shadow"
                />
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow">Detay</div>
                <div className="text-left space-y-1 mt-2">
                  <h3 className="font-semibold text-gray-900">Kişiselleştir ve Yönet</h3>
                  <p className="text-xs text-gray-600">Uygulama ayarlarını dilediğin gibi değiştir, anılarını güvenle sakla ve yönet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;