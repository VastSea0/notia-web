import React from 'react';
import { 
  PenTool, 
  Search, 
  Heart, 
  Smartphone,
  Archive,
  Share,
  Cloud,
  Sparkles
} from 'lucide-react';

const features = [
  {
    icon: PenTool,
    title: 'Hikaye Yazma',
    description: 'Her fotoğrafına kişisel notlarını, anılarını ve düşüncelerini ekle.',
    available: true
  },
  {
    icon: Archive,
    title: 'Akıllı Arşivleme',
    description: 'Fotoğraflarını ve hikayelerini otomatik olarak düzenle ve kategorize et.',
    available: true
  },
  {
    icon: Search,
    title: 'Kolay Arama',
    description: 'Notların ve anıların arasında hızlıca arama yap, istediğini bul.',
    available: true
  },
  {
    icon: Heart,
    title: 'Anı Zaman Çizelgesi',
    description: 'Görsel günlüğünü kronolojik olarak gözden geçir, anılarını yeniden yaşa.',
    available: true
  },
  {
    icon: Smartphone,
    title: 'Mobil Odaklı',
    description: 'Sezgisel arayüzü ile hikaye anlatımını kolaylaştıran mobil deneyim.',
    available: true
  },
 
  {
    icon: Cloud,
    title: 'Bulut Senkronizasyonu',
    description: 'Hikayelerini güvenle yedekle ve tüm cihazlarında senkronize et.',
    available: false
  },
  {
    icon: Sparkles,
    title: 'AI Önerileri',
    description: 'Yapay zeka ile fotoğrafların için otomatik hikaye önerileri al.',
    available: false
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Güçlü Özellikler
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Notia, fotoğraf yönetiminin basitliğini kişisel hikaye anlatımının gücüyle birleştiriyor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="relative p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300"
              >
                {!feature.available && (
                  <div className="absolute top-3 right-3 bg-orange-200 text-orange-800 text-xs px-2 py-1 rounded-full font-medium">
                    Coming Soon
                  </div>
                )}
                
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;