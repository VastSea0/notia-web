import React from 'react';
import { Camera, Brain, Heart, Archive } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: 'Capture or Import Photos',
    description: 'Take new photos or select from your gallery. Notia supports all major image formats and subfolder organization.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
  },
  {
    icon: Brain,
    title: 'AI-Enhanced Storytelling',
    description: 'Get AI-powered tag suggestions, summaries, and inline prompts. Rich text support with markdown, bold, italic, and embedded media.',
    image: 'https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
  },
  {
    icon: Heart,
    title: 'Organize & Favorite',
    description: 'Add notes to favorites, filter by categories, and use smart search to find memories instantly across multiple languages.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
  },
  {
    icon: Archive,
    title: 'Sync & Export',
    description: 'Pull-to-refresh for instant updates, cross-platform export/import, and secure local storage with Firebase integration.',
    image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-gradient-to-br from-orange-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Notia Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the full power of AI-enhanced photo journaling in four simple steps with Notia v1.0.6-alpha.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-3xl font-bold text-orange-200">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Add feature highlights based on step */}
                    {index === 1 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full font-medium">
                          GitHub Models (GPT-4.1)
                        </span>
                        <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full font-medium">
                          Rich Text Editor
                        </span>
                        <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full font-medium">
                          Auto Tags
                        </span>
                      </div>
                    )}
                    
                    {index === 2 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                          5 Languages
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                          Smart Search
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                          Favorites System
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-6 py-3 rounded-full text-sm font-medium">
            <Brain className="h-4 w-4" />
            <span>AI features require internet connection and Firebase account</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
