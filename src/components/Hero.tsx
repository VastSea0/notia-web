import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  const [apkUrl, setApkUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
              Every photo tells a story. With Notia, add your own notes, thoughts, and memories to every moment you capture.
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
                <span>Try the Android BETA!</span>
              </a>
            )}
          </div>

          <div className="mt-16">
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
              {/* Image Card 1 */}
              <div className="relative bg-white/70 backdrop-blur-sm p-6 rounded-3xl border border-slate-200/60 shadow-lg max-w-xs w-full hover:scale-105 transition-transform duration-300">
                <img
                  src="/assets/image-2.png"
                  alt="Notia app screenshot: Gallery"
                  className="w-full h-[400px] object-cover object-top rounded-2xl mb-4 border border-slate-100 shadow-sm"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-sm">
                  Gallery
                </div>
                <div className="text-left space-y-2 mt-3">
                  <h3 className="font-semibold text-slate-900 text-lg">All Your Memories in One Place</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Easily find all your photos and their stories in the gallery.
                  </p>
                </div>
              </div>

              {/* Image Card 2 */}
              <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-slate-200/60 shadow-lg max-w-xs w-full hover:scale-105 transition-transform duration-300">
                <img
                  src="/assets/image-1.png"
                  alt="Notia app screenshot: Add Story"
                  className="w-full h-[400px] object-cover object-top rounded-2xl mb-4 border border-slate-100 shadow-sm"
                />
                <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs px-3 py-1 rounded-full shadow-sm">
                  Add Story
                </div>
                <div className="text-left space-y-2 mt-3">
                  <h3 className="font-semibold text-slate-900 text-lg">Write Your Story for Each Photo</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Add your memories, feelings, or important notes to make your photos more meaningful.
                  </p>
                </div>
              </div>

              {/* Image Card 3 */}
              <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-3xl border border-slate-200/60 shadow-lg max-w-xs w-full hover:scale-105 transition-transform duration-300">
                <img
                  src="/assets/image-3.png"
                  alt="Notia app screenshot: Customize and Manage"
                  className="w-full h-[400px] object-cover object-top rounded-2xl mb-4 border border-slate-100 shadow-sm"
                />
                <div className="absolute top-4 left-4 bg-orange-700 text-white text-xs px-3 py-1 rounded-full shadow-sm">
                  Manage
                </div>
                <div className="text-left space-y-2 mt-3">
                  <h3 className="font-semibold text-slate-900 text-lg">Customize and Manage</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Change app settings as you like, safely store and organize your memories.
                  </p>
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
