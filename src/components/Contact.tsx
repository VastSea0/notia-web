import React, { useEffect, useState } from 'react';
import { Mail, Instagram, Download, Github, MessageCircle } from 'lucide-react';

const Contact = () => {
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
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Started with Notia
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to turn your photos into stories? Download the latest version or get in touch with our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-6 rounded-2xl border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Download Notia v1.0.8-Alpha</h3>
              <p className="text-gray-600 mb-6">
                Experience the latest AI-powered features with NotiaAI chat, privacy-first design, and enhanced note handling.
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
                
                {/* Dynamic APK download */}
                {loading ? (
                  <button
                    disabled
                    className="flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm text-gray-600 py-3 px-6 rounded-xl border border-orange-200 cursor-not-allowed w-full"
                  >
                    <Download className="h-5 w-5 text-orange-600 animate-spin" />
                    <span>Loading latest APK...</span>
                  </button>
                ) : error ? (
                  <div className="text-red-600 font-medium px-6 py-3 text-center">
                    Error loading APK: {error}
                  </div>
                ) : (
                  <a
                    href={apkUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-xl border border-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-200 w-full font-medium"
                  >
                    <Download className="h-5 w-5 text-white" />
                    <span>Download Android Alpha APK</span>
                  </a>
                )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-orange-50/30 p-6 rounded-2xl border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connect with Us</h3>
              <p className="text-gray-600 mb-4">
                Follow for updates, tips, and community discussions about Notia.
              </p>
              
              <div className="space-y-3">
                <a 
                  href="https://instagram.com/crusttaceans" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">@crusttaceans</div>
                    <div className="text-sm text-gray-600">Follow on Instagram</div>
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
                    <div className="font-medium text-gray-900">Email Support</div>
                    <div className="text-sm text-gray-600">vastseaoffical0@outlook.com</div>
                  </div>
                </a>

                <a 
                  href="https://github.com/VastSea0/notia-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                    <Github className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">GitHub Repository</div>
                    <div className="text-sm text-gray-600">Source code & releases</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Share your experience or ask a question..."
                ></textarea>
              </div>
              
              <a
                href="mailto:vastseaoffical0@outlook.com"
                className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Send Message</span>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
