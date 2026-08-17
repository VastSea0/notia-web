import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  MapPin, 
  BookOpen, 
  Edit3, 
  Users, 
  HeartHandshake, 
  ExternalLink 
} from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const baseUrl = import.meta.env.BASE_URL || '/';

  const screenshots = [
    {
      id: 1,
      image: `${baseUrl}assets/01_home_feed.png`,
      title: "Zaman Tüneli & Anı Akışı",
      subtitle: "Fotoğraflarınızı sadece bir dosya olarak değil, bağlamı ve tarihi olan bir görsel günlük olarak inceleyin.",
      tag: "Akıllı Galeri",
      alt: "Notia Ana Sayfa Anı Akışı"
    },
    {
      id: 2,
      image: `${baseUrl}assets/02_interactive_map.png`,
      title: "İnteraktif Fotoğraf Haritası",
      subtitle: "Çektiğiniz anıların coğrafi konumlarını dünya haritası üzerinde görselleştirin ve seyahatlerinizi yeniden keşfedin.",
      tag: "Harita & Rotalar",
      alt: "Notia İnteraktif Fotoğraf Haritası"
    },
    {
      id: 3,
      image: `${baseUrl}assets/03_note_reader.png`,
      title: "Zengin Anı Okuyucu",
      subtitle: "Fotoğrafın arkasındaki hikayeyi, özel Markdown biçimlendirmesi ve temiz tipografi ile odaklanarak okuyun.",
      tag: "Odaklanmış Okuma",
      alt: "Notia Anı Okuma Ekranı"
    },
    {
      id: 4,
      image: `${baseUrl}assets/04_markdown_editor.png`,
      title: "Zengin Markdown Not Editörü",
      subtitle: "Başlıklar, kalın/italik vurgular, listeler ve özel etiketler ile düşüncelerinizi özgürce yazın.",
      tag: "Markdown Editör",
      alt: "Notia Not Düzenleyici Ekranı"
    },
    {
      id: 5,
      image: `${baseUrl}assets/05_people_memories.png`,
      title: "Kişiler & Sevdikleriniz",
      subtitle: "Fotoğraflardaki sevdiklerinizi profiller halinde etiketleyin, onlarla geçirdiğiniz anları tek tıkla filtreleyin.",
      tag: "Kişi Yönetimi",
      alt: "Notia Kişiler ve Bellek Ekranı"
    },
    {
      id: 6,
      image: `${baseUrl}assets/06_notia_ai_assistant.png`,
      title: "NotiaAI Görsel Yaşam Asistanı",
      subtitle: "Fotoğraflarınızdan ilham alan hikayeler, anlamlı özetler ve anı günlükleri oluşturmanıza yardımcı olan yapay zekâ.",
      tag: "NotiaAI Asistanı",
      alt: "NotiaAI Görsel Asistan Ekranı"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-slate-50/50">
      {/* Background Decorative Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-orange-200/30 via-amber-100/20 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-orange-200/80 shadow-xs text-orange-900 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>Kişisel Görsel Bellek & Fotoğraf Günlüğü</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Fotoğraf Galerilerini{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
              Yaşayan Bir Anı Defterine
            </span>{' '}
            Dönüştürün
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Notia, sıradan fotoğraf galerilerinin ötesine geçer. Fotoğraflarınıza zengin Markdown notlar, harita konumları, kişi etiketleri ve yapay zekâ asistanı ekleyerek anılarınızı yaşayan bir hikayeye çevirir.
          </p>

          {/* Primary CTA: Google Play Store Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.vastsea.notia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-7 py-3.5 rounded-2xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-slate-800 font-medium text-sm group"
            >
              <svg className="w-5 h-5 fill-current text-emerald-400 group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 0 1-.61-.954V2.768c.15-.37.36-.69.609-.954zm11.3 11.302l2.396 2.396-12.08 7.006 9.684-9.402zm0-2.232L5.225 1.482l12.08 7.006-2.396 2.396zm1.115 1.116l3.662 2.124a1.996 1.996 0 0 0 0-3.464l-3.662 2.124v-.784z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider leading-none">Google Play Store</div>
                <div className="text-sm font-semibold leading-tight text-white">Hemen Yükleyin</div>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-slate-400 ml-1" />
            </a>

            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs text-sm font-medium transition-colors"
            >
              Özellikleri İncele
            </a>
          </div>
        </div>

        {/* Live Mockup / Interactive Carousel Section */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          {/* Main Display Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/80 shadow-2xl p-6 sm:p-10 transition-all">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Screenshot Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group">
                  {/* Phone frame glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition duration-500" />
                  
                  <div className="relative bg-slate-900 p-2.5 rounded-3xl shadow-xl border border-slate-800">
                    <img
                      src={screenshots[currentSlide].image}
                      alt={screenshots[currentSlide].alt}
                      className="w-64 h-[500px] object-cover object-top rounded-2xl bg-slate-950"
                    />
                  </div>
                </div>
              </div>

              {/* Text & Features Panel */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full">
                  {screenshots[currentSlide].tag}
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {screenshots[currentSlide].title}
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {screenshots[currentSlide].subtitle}
                  </p>
                </div>

                {/* Quick thumbnails / slide selector */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Uygulama Ekranları ({currentSlide + 1} / {screenshots.length})
                  </div>

                  <div className="grid grid-cols-6 gap-2">
                    {screenshots.map((s, idx) => (
                      <button
                        key={s.id}
                        onClick={() => setCurrentSlide(idx)}
                        className={`relative rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                          idx === currentSlide
                            ? 'border-orange-500 scale-105 shadow-md ring-2 ring-orange-200'
                            : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={s.image}
                          alt={s.title}
                          className="w-full h-14 object-cover object-top"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Slide Nav Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                      aria-label="Önceki Ekran"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                      aria-label="Sonraki Ekran"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>

                  <span className="text-xs text-slate-400 font-medium">
                    ← Klavye veya dokunmatik geçiş →
                  </span>
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
