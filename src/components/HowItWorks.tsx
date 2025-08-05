import React from 'react';
import { Camera, FileText, MessageSquare, Settings } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: 'Gallery - Browse Your Photos',
    description: 'Start in the Gallery section where all your device photos are displayed. Tap any photo to open it, add notes, mark as favorite, and swipe left/right to navigate between photos seamlessly.',
    features: ['Device photo access', 'Swipe navigation', 'Add notes & favorites', 'Photo viewer'],
  },
  {
    icon: FileText,
    title: 'Notes - Create & Organize',
    description: 'Visit the Notes section to view all your created notes. Use the create button to choose between "Photo Note" or "Text Note" - all your memories organized in one place.',
    features: ['Create button', 'Photo notes', 'Text notes', 'All notes view'],
  },
  {
    icon: MessageSquare,
    title: 'NotiaAI Chat - Get AI Help',
    description: 'Access the floating NotiaAI chat button from anywhere in the app. Chat with AI for note suggestions, inspiration, and intelligent assistance for better storytelling.',
    features: ['Floating chat button', 'AI suggestions', 'Note recommendations', 'Smart assistance'],
  },
  {
    icon: Settings,
    title: 'Note Details & Management',
    description: 'When photos have notes, tap "View Note Details" to open a bottom sheet with full note content. Manage all your memories with rich editing and organization features.',
    features: ['Bottom sheet view', 'Note details', 'Rich editing', 'Memory management'],
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
            Experience the full power of AI-enhanced photo journaling in four simple steps with Notia v1.0.7-Alpha.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;

            return (
              <div key={index} className={`flex flex-col gap-8 items-center`}>
                <div className="w-full max-w-4xl space-y-6 text-center">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-orange-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                      {step.description}
                    </p>
                    
                    {/* Feature highlights */}
                    <div className="flex flex-wrap gap-3 justify-center mt-6">
                      {step.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="bg-orange-100 text-orange-800 text-sm px-4 py-2 rounded-full font-medium border border-orange-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-6 py-3 rounded-full text-sm font-medium">
            <MessageSquare className="h-4 w-4" />
            <span>NotiaAI chat requires internet connection • Available in 5 languages</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
