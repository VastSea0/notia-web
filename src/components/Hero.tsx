import React, { useState } from 'react';
import { Download, ChevronLeft, ChevronRight, Sparkles, Smartphone, CheckCircle, ShieldCheck } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const baseUrl = import.meta.env.BASE_URL || '/';

  const appFeatures = [
    {
      id: 1,
      image: `${baseUrl}assets/image-1.png`,
      title: "Chat with NotiaAI",
      description: "Have intelligent conversations with NotiaAI. Get creative memory prompts, daily insights, and AI-assisted storytelling for your photo diary.",
      badge: "NotiaAI Chat",
      badgeColor: "bg-blue-500",
      alt: "Notia app screenshot: NotiaAI Chat"
    },
    {
      id: 2,
      image: `${baseUrl}assets/image-2.png`,
      title: "Add Notes to Photos",
      description: "Transform your static gallery into meaningful memories by attaching rich notes, tags, and descriptions to every precious moment.",
      badge: "Photo Gallery",
      badgeColor: "bg-emerald-500",
      alt: "Notia app screenshot: Photo Gallery"
    },
    {
      id: 3,
      image: `${baseUrl}assets/image-3.png`,
      title: "Smart AI Note Creation",
      description: "Generate structured notes with NotiaAI or write manually with smart tags, category filters, and Markdown formatting.",
      badge: "Note Creation",
      badgeColor: "bg-purple-500",
      alt: "Notia app screenshot: Note Creation"
    },
    {
      id: 4,
      image: `${baseUrl}assets/image-4.png`,
      title: "AI Note Enhancement",
      description: "Enhance, summarize, and convert your handwritten thoughts or quick captions into detailed stories and organized to-do lists.",
      badge: "AI Enhancement",
      badgeColor: "bg-orange-500",
      alt: "Notia app screenshot: AI Enhancement"
    },
    {
      id: 5,
      image: `${baseUrl}assets/image-5.png`,
      title: "Custom AI Personality",
      description: "Tailor NotiaAI to your personal journaling style — choose between poetic, structured, reflective, or friendly assistants.",
      badge: "AI Personas",
      badgeColor: "bg-pink-500",
      alt: "Notia app screenshot: AI Personas"
    },
    {
      id: 6,
      image: `${baseUrl}assets/image-6.png`,
      title: "Search & Organize",
      description: "Organize your notes with albums, biometric security, favorites, and lightning-fast search across titles and photo metadata.",
      badge: "Smart Organization",
      badgeColor: "bg-indigo-500",
      alt: "Notia app screenshot: Organization"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % appFeatures.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + appFeatures.length) % appFeatures.length);
  };

  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-orange-50/50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Version badge */}
          <div className="inline-flex items-center space-x-2 bg-orange-100/80 border border-orange-200/80 px-4 py-1.5 rounded-full text-orange-800 text-xs font-semibold tracking-wide shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-orange-600 animate-pulse" />
            <span>SÜRÜM v1.3.0 (Build 83) — Google Play & Web Uyumlu</span>
          </div>

          {/* Main heading */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Fotoğraflarınızı <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Kişisel Bir Hikaye Kitabına</span> Dönüştürün
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
              Her fotoğraf bir anı barındırır. Notia; fotoğraflarınıza zengin notlar, akıllı etiketler ve yapay zeka (NotiaAI) asistanı ekleyerek hayatınızın anılarını güvenle saklamanızı ve yeniden yaşamanızı sağlar.
            </p>
          </div>

          {/* Download and CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center items-center pt-2">
            {/* Google Play Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.vastsea.notia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3.5 rounded-2xl transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5 border border-slate-700 font-medium text-sm group"
            >
              <svg className="w-6 h-6 fill-current text-white group-hover:text-orange-400 transition-colors" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 0 1-.61-.954V2.768c.15-.37.36-.69.609-.954zm11.3 11.302l2.396 2.396-12.08 7.006 9.684-9.402zm0-2.232L5.225 1.482l12.08 7.006-2.396 2.396zm1.115 1.116l3.662 2.124a1.996 1.996 0 0 0 0-3.464l-3.662 2.124v-.784z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider leading-none">Google Play'de</div>
                <div className="text-base font-bold leading-tight">Hemen İndirin</div>
              </div>
            </a>

            {/* Direct APK Button */}
            <a
              href={`${baseUrl}assets/app-debug.apk`}
              download
              className="inline-flex items-center space-x-2.5 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3.5 rounded-2xl transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5 border border-orange-500 font-medium text-sm"
            >
              <Download className="h-5 w-5" />
              <span>Direkt APK İndir (v1.3.0)</span>
            </a>

            {/* Trust Badge */}
            <div className="bg-white/90 backdrop-blur-sm px-5 py-3 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-2 text-xs text-slate-600 font-medium">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Biyometrik Kilit & Bulut Korumalı</span>
            </div>
          </div>

          {/* Carousel */}
          <div className="mt-14">
            <div className="relative max-w-5xl mx-auto">
              <div className="overflow-hidden rounded-3xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {appFeatures.map((feature) => (
                    <div key={feature.id} className="w-full flex-shrink-0">
                      <div className="flex flex-col lg:flex-row gap-8 items-center bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-slate-200/80 shadow-xl mx-3">
                        {/* Image Section */}
                        <div className="flex-shrink-0 relative">
                          <img
                            src={feature.image}
                            alt={feature.alt}
                            className="w-72 h-[520px] object-cover object-top rounded-2xl border border-slate-100 shadow-md mx-auto"
                          />
                          <div className={`absolute top-4 left-4 ${feature.badgeColor} text-white text-xs px-3.5 py-1.5 rounded-full shadow-sm font-semibold`}>
                            {feature.badge}
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1 space-y-6 text-center lg:text-left lg:pl-6">
                          <div className="space-y-3">
                            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
                              {feature.title}
                            </h3>
                            <p className="text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
                              {feature.description}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-center lg:justify-start space-x-3 pt-2">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-lg">{feature.id}</span>
                            </div>
                            <div className="text-left">
                              <div className="text-slate-400 text-xs uppercase font-medium">Özellik</div>
                              <div className="text-slate-800 font-semibold text-sm">
                                {feature.id} / {appFeatures.length}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/95 backdrop-blur-sm rounded-full border border-slate-200 shadow-md hover:bg-white transition-all flex items-center justify-center text-slate-700 hover:text-orange-600"
                aria-label="Önceki"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/95 backdrop-blur-sm rounded-full border border-slate-200 shadow-md hover:bg-white transition-all flex items-center justify-center text-slate-700 hover:text-orange-600"
                aria-label="Sonraki"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {appFeatures.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-orange-600 w-7' 
                        : 'bg-slate-300 hover:bg-slate-400 w-2'
                    }`}
                    aria-label={`Slayt ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
