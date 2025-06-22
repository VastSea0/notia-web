import React from 'react';
import { Camera, Edit3, Heart } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: 'Fotoğraf Çek',
    description: 'Yeni bir fotoğraf çek veya galerinден bir fotoğraf seç.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  },
  {
    icon: Edit3,
    title: 'Hikayeni Yaz',
    description: 'O anla ilgili düşüncelerini, anılarını veya notlarını ekle.',
    image: 'https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  },
  {
    icon: Heart,
    title: 'Kaydet ve Hatırla',
    description: 'Fotoğraf hikayen otomatik olarak kaydedilir ve arşivlenir.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-gradient-to-br from-orange-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sadece üç basit adımda fotoğraflarını anlamlı hikayelere dönüştür.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-3xl font-bold text-orange-200">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  <img 
                    src={step.image}
                    alt={step.title}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;