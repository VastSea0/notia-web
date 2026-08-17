import React from 'react';
import { Camera, Edit3, Compass } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    number: "01",
    title: "Fotoğrafınızı Seçin",
    desc: "Cihazınızdaki fotoğraflardan birini seçin. Notia, EXIF zaman ve konum bilgilerini anında çözümler.",
    tag: "Akıllı Tarama"
  },
  {
    icon: Edit3,
    number: "02",
    title: "Hikayenizi Yazın",
    desc: "Zengin Markdown editörü veya NotiaAI yardımıyla düşüncelerinizi, hislerinizi ve etiketlerinizi ekleyin.",
    tag: "Zengin Notlama"
  },
  {
    icon: Compass,
    number: "03",
    title: "Yeniden Keşfedin",
    desc: "Anılarınızı harita rotalarında, kişi albümlerinde ve zaman tünelinde güvenle saklayıp keyifle gezin.",
    tag: "Hafıza & Harita"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full uppercase tracking-wider">
            Kullanım Akışı
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Üç Adımda Anılarınızı Ölümsüzleştirin
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Karmaşık menüler yok; sade, odaklanmış ve hızlı bir görsel günlük deneyimi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative space-y-5"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 border border-orange-100 flex items-center justify-center">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-200 font-mono">
                    {step.number}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-orange-700 uppercase tracking-wide">
                    {step.tag}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
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
