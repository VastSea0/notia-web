import React, { useEffect, useState } from 'react';
import { Download, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [apkUrl, setApkUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const appFeatures = [
    {
      id: 1,
      image: "/assets/image-1.png",
      title: "Chat with NotiaAI",
      description: "Have intelligent conversations with NotiaAI. Get help, ideas, and insights for your daily journaling.",
      badge: "NotiaAI Chat",
      badgeColor: "bg-blue-500",
      alt: "Notia app screenshot: NotiaAI Chat"
    },
    {
      id: 2,
      image: "/assets/image-2.png",
      title: "Add Notes to Photos",
      description: "Transform your photos into meaningful memories by adding notes and describing your day.",
      badge: "Photo Gallery",
      badgeColor: "bg-green-500",
      alt: "Notia app screenshot: Photo Gallery"
    },
    {
      id: 3,
      image: "/assets/image-3.png",
      title: "Perfect Notes with AI",
      description: "Create perfect notes with NotiaAI assistance or write manually with smart tags and organization.",
      badge: "Note Creation",
      badgeColor: "bg-purple-500",
      alt: "Notia app screenshot: Note Creation"
    },
    {
      id: 4,
      image: "/assets/image-4.png",
      title: "Improve Notes with AI",
      description: "Enhance your notes with AI suggestions, get automatic tags, or improve writing style instantly.",
      badge: "AI Enhancement",
      badgeColor: "bg-orange-500",
      alt: "Notia app screenshot: AI Enhancement"
    },
    {
      id: 5,
      image: "/assets/image-5.png",
      title: "Customize AI Personality",
      description: "Choose NotiaAI's personality and tone - inspiring, Gen Z, analytical, or whatever fits your style.",
      badge: "AI Personality",
      badgeColor: "bg-pink-500",
      alt: "Notia app screenshot: AI Personality"
    },
    {
      id: 6,
      image: "/assets/image-6.png",
      title: "All Your Notes",
      description: "View all your created notes in one place, organize them perfectly, or create new memories instantly.",
      badge: "Notes View",
      badgeColor: "bg-indigo-500",
      alt: "Notia app screenshot: Notes View"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % appFeatures.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + appFeatures.length) % appFeatures.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    async function fetchLatestRelease() {
      try {
        const response = await fetch('https://api.github.com/repos/VastSea0/notia-web/releases/latest');
        if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);

        const data = await response.json();
        const apkAsset = data.assets.find(a => a.name === 'app-release.apk');

        if (apkAsset) {
          setApkUrl(apkAsset.browser_download_url);
        } else {
          setError('APK not found in latest release');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchLatestRelease();
  }, []);

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 via-orange-50/30 to-orange-100/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight">
              Turn Your Photos
              <span className="text-orange-600 block">
                Into Stories
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Transform your photo gallery into an intelligent storybook with AI-powered suggestions, rich text notes, and multilingual support. Every photo becomes a meaningful memory with Notia v1.0.7-Alpha.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-slate-200/60 shadow-sm">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-slate-500" />
                <span className="text-slate-600 font-medium">App Store - Coming Soon</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-slate-200/60 shadow-sm">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-slate-500" />
                <span className="text-slate-600 font-medium">Google Play - Coming Soon</span>
              </div>
            </div>

            {loading ? (
              <button
                disabled
                className="bg-orange-400 cursor-not-allowed text-white px-6 py-3 rounded-2xl border border-orange-500 flex items-center space-x-3 font-medium shadow-sm"
              >
                <Download className="h-5 w-5 text-white animate-spin" />
                <span>Loading latest APK...</span>
              </button>
            ) : error ? (
              <div className="text-red-600 font-medium">Error loading APK link</div>
            ) : (
              <a
                href={apkUrl}
                download
                className="bg-orange-600 hover:bg-orange-700 transition-colors text-white px-6 py-3 rounded-2xl border border-orange-700 flex items-center space-x-3 font-medium shadow-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-5 w-5 text-white" />
                <span>Try the Android ALPHA!</span>
              </a>
            )}
          </div>

          <div className="mt-16">
            {/* App Features Carousel */}
            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-3xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {appFeatures.map((feature, index) => (
                    <div key={feature.id} className="w-full flex-shrink-0">
                      <div className="flex flex-col lg:flex-row gap-8 items-center bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/60 shadow-lg mx-4">
                        {/* Image Section - Mobile Screenshots (Vertical) */}
                        <div className="flex-shrink-0 relative">
                          <img
                            src={feature.image}
                            alt={feature.alt}
                            className="w-80 h-[600px] object-cover object-top rounded-3xl border border-slate-100 shadow-xl mx-auto"
                          />
                          <div className={`absolute top-6 left-6 ${feature.badgeColor} text-white text-sm px-4 py-2 rounded-full shadow-sm font-medium`}>
                            {feature.badge}
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1 space-y-6 text-center lg:text-left lg:pl-8">
                          <div className="space-y-4">
                            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">
                              {feature.title}
                            </h3>
                            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                          
                          {/* Feature number indicator */}
                          <div className="flex items-center justify-center lg:justify-start space-x-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-xl">{feature.id}</span>
                            </div>
                            <div className="text-left">
                              <div className="text-slate-500 text-sm">Feature</div>
                              <div className="text-slate-700 font-semibold">
                                {feature.id} of {appFeatures.length}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full border border-slate-200 shadow-lg hover:bg-white transition-colors flex items-center justify-center group"
              >
                <ChevronLeft className="h-6 w-6 text-slate-600 group-hover:text-slate-900" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full border border-slate-200 shadow-lg hover:bg-white transition-colors flex items-center justify-center group"
              >
                <ChevronRight className="h-6 w-6 text-slate-600 group-hover:text-slate-900" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-3">
                {appFeatures.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-orange-500 w-8' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">Explore all features with the carousel above</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              <div className="text-center p-3">
                <div className="text-blue-600 font-bold text-xl">AI</div>
                <div className="text-slate-600 text-xs">Chat</div>
              </div>
              <div className="text-center p-3">
                <div className="text-green-600 font-bold text-xl">Photo</div>
                <div className="text-slate-600 text-xs">Notes</div>
              </div>
              <div className="text-center p-3">
                <div className="text-purple-600 font-bold text-xl">Smart</div>
                <div className="text-slate-600 text-xs">Creation</div>
              </div>
              <div className="text-center p-3">
                <div className="text-orange-600 font-bold text-xl">AI</div>
                <div className="text-slate-600 text-xs">Enhancement</div>
              </div>
              <div className="text-center p-3">
                <div className="text-pink-600 font-bold text-xl">Custom</div>
                <div className="text-slate-600 text-xs">Personality</div>
              </div>
              <div className="text-center p-3">
                <div className="text-indigo-600 font-bold text-xl">Organize</div>
                <div className="text-slate-600 text-xs">All Notes</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
