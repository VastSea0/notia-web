import React from 'react';
import { 
  Sparkles, 
  Brain, 
  Edit3, 
  Globe, 
  RefreshCw, 
  Archive, 
  Heart,
  Smartphone,
  Search,
  Download,
  Calendar,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const currentVersion = "v1.0.6-alpha";

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Note Suggestions',
    description: 'Context-aware tag suggestions and summary generation with localized UI. Built on Firebase Vertex AI.',
    status: 'available',
    version: 'v1.0.6'
  },
  {
    icon: Edit3,
    title: 'Rich Text Notes (Markdown + Media)',
    description: 'Use bold, italic, lists, and embedded images in your notes. Make your stories more expressive.',
    status: 'available',
    version: 'v1.0.6'
  },
  {
    icon: Sparkles,
    title: 'Inline AI Prompts',
    description: 'On photo details, get dynamic suggestions like "summarize this" or "suggest a title" – localized and instantly available.',
    status: 'available',
    version: 'v1.0.6'
  },
  {
    icon: Archive,
    title: 'New Bottom Sheet UI',
    description: 'Modern and intuitive interface for managing your photos and notes.',
    status: 'available',
    version: 'v1.0.6'
  },
  {
    icon: Brain,
    title: 'Auto-Generated Tags',
    description: 'AI analyzes your photo and description to recommend relevant tags automatically.',
    status: 'available',
    version: 'v1.0.6'
  },
  {
    icon: Globe,
    title: 'Full Multilingual Support',
    description: 'Available in English, Turkish, Italian, German, and Azerbaijani with complete localization.',
    status: 'available',
    version: 'v1.0.5'
  },
  {
    icon: RefreshCw,
    title: 'Pull-to-Refresh',
    description: 'Swipe down on HomePage or NotesPage to instantly refresh content.',
    status: 'available',
    version: 'v1.0.5'
  },
  {
    icon: Download,
    title: 'Mobile Export & Import',
    description: 'Cross-platform export/import system for Android, Linux, and Windows.',
    status: 'available',
    version: 'v1.0.5'
  },
  {
    icon: Heart,
    title: 'Favorites System',
    description: 'Add or remove notes to/from favorites and filter to view only favorite notes.',
    status: 'available',
    version: 'v1.0.3'
  },
  {
    icon: Search,
    title: 'Smart Gallery Filtering',
    description: 'Subfolders detection and filtering with tag suggestion logic based on file paths.',
    status: 'available',
    version: 'v1.0.2'
  }
];

const upcomingFeatures = [
  {
    icon: Users,
    title: 'Session Persistence & Biometric Login',
    description: 'Secure authentication with biometric support and remember-me functionality.'
  },
  {
    icon: RefreshCw,
    title: 'One-click Firebase Sync',
    description: 'Seamless cross-device backup and synchronization with Firebase.'
  },
  {
    icon: Brain,
    title: 'Auto Photo Classification & Smart Albums',
    description: 'AI-powered automatic photo classification and intelligent album creation.'
  },
  {
    icon: Edit3,
    title: 'Rich Note Syncing in HTML/Markdown',
    description: 'Full synchronization of rich-text notes in HTML and Markdown formats.'
  }
];

const Versions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 via-orange-50/30 to-orange-100/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
              <Calendar className="h-4 w-4" />
              <span>Current Version</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
              Notia <span className="text-orange-600">{currentVersion}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              AI Upgrade, Rich Notes & Public Build - Notia enters <strong>beta phase</strong> with smarter AI features, 
              rich-text note support, and full multi-device readiness.
            </p>
            
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle className="h-4 w-4" />
              <span>Beta Release - July 22, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Current Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover all the powerful features available in the current version of Notia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="relative p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute top-3 right-3 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                    {feature.version}
                  </div>
                  
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

      {/* Coming Soon */}
      <section className="py-16 bg-gradient-to-br from-orange-50/50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Exciting features planned for future releases of Notia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="relative p-6 bg-gradient-to-br from-gray-50 to-orange-50/30 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute top-3 right-3 bg-orange-200 text-orange-800 text-xs px-2 py-1 rounded-full font-medium">
                    <Clock className="h-3 w-3 inline mr-1" />
                    Coming Soon
                  </div>
                  
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center mb-4">
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

      {/* Platform Support */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platform Availability
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Current and planned platform support for Notia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-200">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Android</h3>
              <p className="text-gray-600 text-sm mb-3">✅ APK build ready</p>
              <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium inline-block">
                Available Now
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">iOS</h3>
              <p className="text-gray-600 text-sm mb-3">🚫 Not supported yet</p>
              <div className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-medium inline-block">
                Planned
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-200">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <Download className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Direct Download</h3>
              <p className="text-gray-600 text-sm mb-3">Beta APK available</p>
              <div className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-medium inline-block">
                Beta Access
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Versions;