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
    <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 to-orange-100/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Turn Your Photos
              <span className="text-orange-600 block">
                Into Stories
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Every photo tells a story. With Notia, add your own notes, thoughts, and memories to every moment you capture.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* App Store Coming Soon Button */}
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-200">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-orange-600" />
                <span className="text-gray-700 font-medium">App Store - Coming Soon</span>
              </div>
            </div>

            {/* Google Play Coming Soon Button */}
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-200">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5 text-orange-600" />
                <span className="text-gray-700 font-medium">Google Play - Coming Soon</span>
              </div>
            </div>

             
            {loading ? (
              <button
                disabled
                className="bg-orange-400 cursor-not-allowed text-white px-6 py-3 rounded-full border border-orange-700 flex items-center space-x-3 font-medium shadow"
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
                className="bg-orange-600 hover:bg-orange-700 transition-colors text-white px-6 py-3 rounded-full border border-orange-700 flex items-center space-x-3 font-medium shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-5 w-5 text-white" />
                <span>Try the Android BETA!</span>
              </a>
            )}
          </div>

          <div className="mt-12">
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              {/* Image Card 1 */}
              <div className="relative bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-orange-200 shadow-lg max-w-xs w-full hover:scale-105 transition-transform duration-300">
                <img
                  src="/assets/image-2.png"
                  alt="Notia app screenshot: Gallery"
                  className="w-full h-[420px] object-cover object-top rounded-xl mb-3 border border-orange-100 shadow"
                />
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow">
                  Gallery
                </div>
                <div className="text-left space-y-1 mt-2">
                  <h3 className="font-semibold text-gray-900">All Your Memories in One Place</h3>
                  <p className="text-xs text-gray-600">
                    Easily find all your photos and their stories in the gallery.
                  </p>
                </div>
              </div>

              {/* Image Card 2 */}
              <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-orange-200 shadow-lg max-w-xs w-full hover:scale-105 transition-transform duration-300">
                <img
                  src="/assets/image-1.png"
                  alt="Notia app screenshot: Add Story"
                  className="w-full h-[420px] object-cover object-top rounded-xl mb-3 border border-orange-100 shadow"
                />
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow">
                  Add Story
                </div>
                <div className="text-left space-y-1 mt-2">
                  <h3 className="font-semibold text-gray-900">Write Your Story for Each Photo</h3>
                  <p className="text-xs text-gray-600">
                    Add your memories, feelings, or important notes to make your photos more meaningful.
                  </p>
                </div>
              </div>

              {/* Image Card 3 */}
              <div className="relative bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-orange-200 shadow-lg max-w-xs w-full hover:scale-105 transition-transform duration-300">
                <img
                  src="/assets/image-3.png"
                  alt="Notia app screenshot: Customize and Manage"
                  className="w-full h-[420px] object-cover object-top rounded-xl mb-3 border border-orange-100 shadow"
                />
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow">
                  Manage
                </div>
                <div className="text-left space-y-1 mt-2">
                  <h3 className="font-semibold text-gray-900">Customize and Manage</h3>
                  <p className="text-xs text-gray-600">
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
