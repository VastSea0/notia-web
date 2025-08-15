import React from 'react';
import { 
  Brain, 
  Edit3, 
  Sparkles, 
  Archive,
  Globe,
  RefreshCw,
  Lock
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'NotiaAI Chat',
    description: 'Intelligent conversational AI assistant for photo analysis, note generation, and smart suggestions powered by GitHub Models (GPT-4.1).',
    available: true,
    highlight: true
  },
  {
    icon: Sparkles,
    title: 'Inline AI Prompts',
    description: 'Get dynamic AI suggestions like "summarize this" or "suggest a title" directly on photo details.',
    available: true,
    highlight: true
  },
  {
    icon: Brain,
    title: 'AI-Powered Suggestions',
    description: 'Context-aware tag suggestions and summary generation with localized UI, powered by GitHub Models (GPT-4.1).',
    available: true,
    highlight: true
  },
  {
    icon: Edit3,
    title: 'Markdown Note Support',
    description: 'Replaced rich text editor with markdown-based editing in bottom sheets for better formatting and readability.',
    available: true,
  },
  {
    icon: Lock,
    title: 'Password Protection',
    description: 'Create and manage passwords directly from Home and Settings pages to secure your workspace and data.',
    available: true,
  },
  {
    icon: Lock,
    title: 'Biometric Authentication',
    description: 'Fingerprint login support with full English & Turkish localization for enhanced security and privacy.',
    available: true,
  },
  {
    icon: Edit3,
    title: 'Rich Text Notes',
    description: 'Use bold, italic, lists, and embedded images in your notes. Make your stories more expressive and customizable.',
    available: true
  },
  {
    icon: Archive,
    title: 'Smart Archiving',
    description: 'Modern bottom sheet UI with automatic organization and categorization of your photos and stories.',
    available: true
  },
  {
    icon: Globe,
    title: 'Multilingual Support',
    description: 'Fully localized in English, Turkish, Italian, German, and Azerbaijani with real-time language switching.',
    available: true
  },
  {
    icon: RefreshCw,
    title: 'Pull-to-Refresh',
    description: 'Swipe down on HomePage or NotesPage to instantly refresh content with smooth animations.',
    available: true
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why Notia v1.0.9-Alpha (Pre-Beta) is the smartest way to turn your photos into meaningful stories with AI-powered insights and enhanced security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                  feature.highlight 
                    ? 'bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200 hover:shadow-lg hover:border-orange-300' 
                    : 'bg-gradient-to-br from-orange-50 to-white border-orange-100 hover:shadow-lg'
                }`}
              >
                {feature.highlight && (
                  <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    AI-Powered
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

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
            <Brain className="h-4 w-4" />
            <span>Powered by GitHub Models (GPT-4.1)</span>
          </div>
          <p className="text-gray-600 mt-3 text-sm">
            Experience the future of photo journaling with intelligent, context-aware AI assistance and enhanced security features.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
