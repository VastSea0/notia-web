import React from 'react';
import { 
  PenTool, 
  Search, 
  Heart, 
  Smartphone,
  Archive,
  Share,
  Cloud,
  Sparkles
} from 'lucide-react';

const features = [
  {
    icon: PenTool,
    title: 'Write Your Stories',
    description: 'Add personal notes, memories, and thoughts to every photo you take.',
    available: true
  },
  {
    icon: Archive,
    title: 'Smart Archiving',
    description: 'Automatically organize and categorize your photos and stories for easy access.',
    available: true
  },
  {
    icon: Search,
    title: 'Powerful Search',
    description: 'Quickly find any note or memory among your collection with smart search tools.',
    available: true
  },
  {
    icon: Heart,
    title: 'Memory Timeline',
    description: 'Relive your moments with a beautifully organized chronological timeline.',
    available: true
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Experience',
    description: 'Intuitive and seamless storytelling experience optimized for mobile devices.',
    available: true
  },
  {
    icon: Cloud,
    title: 'Cloud Sync',
    description: 'Keep your stories safe and synchronized across all your devices.',
    available: false
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Suggestions',
    description: 'Get automatic story ideas and enhancements powered by artificial intelligence.',
    available: false
  },
  {
    icon: Share,
    title: 'Easy Sharing',
    description: 'Share your favorite stories and photos effortlessly with friends and family.',
    available: false
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
            Notia combines the simplicity of photo management with the power of personal storytelling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="relative p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300"
              >
                {!feature.available && (
                  <div className="absolute top-3 right-3 bg-orange-200 text-orange-800 text-xs px-2 py-1 rounded-full font-medium">
                    Coming Soon
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
      </div>
    </section>
  );
};

export default Features;
