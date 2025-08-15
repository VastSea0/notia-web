import React, { useState } from 'react';
import { 
  Sparkles, 
  Brain, 
  Edit3, 
  Globe, 
  RefreshCw, 
  Archive, 
  Smartphone,
  Download,
  Calendar,
  CheckCircle,
  Clock,
  Users,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Copy,
  FileText,
  MessageSquare,
  Lock,
  BarChart3
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const currentVersion = "v1.0.9-Alpha (Pre-Beta)";
const lastUpdated = "August 12, 2025";

// Changelog data parsed from CHANGELOG.md
const changelogVersions = [
  {
    version: "v1.0.9-Alpha (Pre-Beta)",
    title: "Security, AI Enhancements & Stability",
    date: "August 12, 2025",
    description: "This release strengthens security, enriches AI-powered features, and improves the overall stability of Notia. Now you can protect your workspace with biometric and password authentication while enjoying smarter, more versatile AI interactions.",
    features: [
      "🔐 Biometric Authentication: Fingerprint login support with full English & Turkish localization.",
      "🔑 Password Protection: Create and manage passwords directly from Home and Settings pages.",
      "🤖 AI Enhancements: 'Convert to To-do List' and 'Summarize' commands with long-press support for copying or saving AI messages as notes.",
      "📝 Markdown Support: AI messages now support markdown formatting for better readability.",
      "📄 Markdown Note Support: Replaced rich text editor with markdown-based editing in bottom sheets.",
      "📊 Subscription & Limit Management: Fetch AI usage limits from Firestore based on subscription type with localized display in settings."
    ],
    improvements: [
      "🔄 Async handling & mounted checks in note editing and saving flows (#54).",
      "🎨 Improved AI page app bar with better title layout and tooltips.",
      "📱 App version displayed on splash screen (#51) and in the About dialog.",
      "🌍 Localization improvements for typing indicators, AI usage limits, note creation, and message actions.",
      "🧠 AI dialogs now preserve note ID & type, with improved layouts and enhanced functionality."
    ],
    bugFixes: [
      "✅ Fixed #54: Remove debug print statements from note editing/saving & improve process with async handling and mounted checks",
      "✅ Fixed #55: Enhance AI features dialog by preserving note ID/type and updating rich description",
      "✅ Fixed #56, #57: Refactor NotiaAIPage layout for improved readability & consistency",
      "✅ Fixed #53: Add biometric authentication support with localization (English/Turkish)",
      "✅ Fixed #52: Implement password protection dialog and functionality in home/settings pages",
      "✅ Fixed #51: Display app version on splash screen",
      "✅ Fixed #48: Add edit functionality to notes with bottom sheet support",
      "✅ Fixed #47: Refactor AI features dialog for improved readability and functionality, including limit checks and enhanced telemetry logging",
      "✅ Fixed #45: Add web support for Firebase options and improve initialization handling",
      "🧼 Correct application label casing in AndroidManifest.xml",
      "💬 AI usage limit dialog message clarity and localization improvements",
      "🔄 Updated Firestore document reference for AI limits",
      "🧹 Removed unused imports and plugins, cleaned localization file formatting"
    ]
  },
  {
    version: "v1.0.8-Alpha",
    title: "Smart AI, Privacy-First & Cleaner Interface",
    date: "August 7, 2025",
    description: "Notia continues its transformation into a smarter, more refined and privacy-respecting workspace. With a redesigned NotiaAI experience, privacy policy compliance, and enhanced note handling — this update makes your workflow faster, more secure, and more intuitive.",
    features: [
      "🤖 NotiaAI Chat Page: Access a brand-new chat interface with personality selection and chat history management.",
      "💬 Integrated AI Features: Use AI directly from NotesPage, PhotoViewer, and NoteDetailsBottomSheet with typing indicators and localized AI messages.",
      "🧠 AI Note Saving & Customization: Notes created with NotiaAI can now be saved directly, with improved theme consistency and message formatting.",
      "🔐 Privacy Policy Integration: Added in-app privacy policy links and acceptance checkboxes on login/registration. Fully localized.",
      "📈 Telemetry & Analytics Engine: Added toggleable telemetry service with improved enable/disable logic and clear opt-out messages.",
      "⏱️ Loading Timeout & Permission Handling: Improved behavior in AI-related workflows with timeout fallback and clearer permission prompts."
    ],
    improvements: [
      "🧩 Adaptive NoteDetailsBottomSheet: Bottom sheets now resize based on content, improving photo and text note handling.",
      "🧼 Refined Onboarding & Theming: Gradients and hardcoded colors replaced with theme-aware styling for a more polished feel.",
      "🧠 Smarter Chat & Note UI: AI suggestions and note creation are now more stable, visually consistent, and error-resilient.",
      "🌍 Full Turkish & English Coverage: Newly added features are now fully localized.",
      "🗓️ Improved Time & Save Strings: Added localization for terms and enhanced save confirmation messages."
    ],
    bugFixes: [
      "✅ Fixed #39: Replaced incorrect usage of FilledButton.icon",
      "✅ Fixed #43: No available photo messages now shown properly in note selection",
      "✅ Fixed #40: Removed unnecessary language options in settings",
      "✅ Fixed #38: (Unspecified but resolved)",
      "🧼 Addressed image-not-found edge cases and AI crashes due to null image references",
      "📎 Fixed crash related to missing privacy URL in settings",
      "🔤 Fixed localization formatting (missing commas, casing issues)"
    ]
  },
  {
    version: "v1.0.7-Alpha",
    title: "Smart Storage, Seamless UI & In-App Picker",
    date: "August 3, 2025",
    description: "Notia evolves into a more polished and privacy-conscious companion: local storage, sleek UI refactors, and smoother image handling pave the way for the future.",
    features: [
      "🧾 Local Note Saving with SharedPreferences: Notes now persist locally — offline support begins here. Ideal for users on the go or with privacy in mind.",
      "📸 In-App Photo Picker Integration: No more switching to gallery. Select or capture photos directly inside Notia using the built-in picker.",
      "🗂️ Note Type Selection UI: Choose between text and photo notes with a new bottom sheet interface.",
      "🔔 Smart Notifications (AI-Powered): Get notified when AI improves a note, suggests tags, or updates content — seamlessly integrated with the new notification system.",
      "📊 Telemetry & Analytics Engine: Track anonymized app usage and behavior to improve performance and user experience (opt-out ready)."
    ],
    improvements: [
      "🖼️ Aspect Ratio Caching for Images: NotesPage now remembers image sizes for better performance and more stable layout rendering.",
      "🧩 Simplified NoteDetails Layout: Removed visual clutter like AspectRatio wrapping — photos display beautifully and consistently.",
      "🧠 More Responsive AIFeatures: Fixed edge cases in photo path nullability, improved messaging, and debug behavior.",
      "⚡ Startup Optimization: Splash screen now shows for just 1 second.",
      "🧹 Deep Refactoring: Bottom sheets, viewer pages, and model classes rewritten for clarity and performance.",
      "🔐 Gradle & Java Upgrade: Now running on Java 17 with fixed build errors for modern device compatibility."
    ],
    bugFixes: [
      "✅ Fixed #31: Missing localization in photo notes",
      "✅ Fixed #33: Nullable currentVersion crash in Settings",
      "✅ Fixed #36: Incorrect casing in package name",
      "🧼 Resolved image-not-found edge cases and improved fallback handling",
      "📎 Fixed AI dialog crashes caused by null image references",
      "🧠 AI-related null safety fixes: More stable behavior when notes lack images or metadata."
    ]
  },
  {
    version: "v1.0.6-alpha",
    title: "AI Upgrade, Rich Notes & Public Build",
    date: "July 22, 2025",
    description: "Notia enters alpha phase with smarter AI features, rich-text note support, and full multi-device readiness.",
    features: [
      "🧠 AI-Powered Note Suggestions: Context-aware tag suggestions and summary generation with localized UI. Built on GitHub Models (GPT-4.1).",
      "🖋️ Rich Text Notes (Markdown + Media): Use bold, italic, lists, and embedded images in your notes.",
      "📎 Inline AI Prompts: On photo details, get dynamic suggestions like 'summarize this' or 'suggest a title' – localized and instantly available.",
      "📂 New Bottom Sheet UI",
      "🧪 Dynamic Prompt Debug Console: Toggle AI test/debug mode in settings for live prompt editing.",
      "🧾 Auto-Generated Tags: AI can now analyze your photo and description to recommend relevant tags.",
      "💬 Localized AI explanations: All AI messages and prompts are localized for a seamless experience."
    ],
    improvements: [
      "🧭 Fully localized interface (final polish): Even edge case strings and AI messages now have multi-language support.",
      "🧹 Cleanup pass on string literals: Removed hardcoded Text elements in favor of AppLocalizations methods.",
      "🖼️ Improved image preloading: PhotoViewer and Grid now load high-res images more smoothly.",
      "🧠 AI pulse animations refined: Lighter, more fluid animations and better visibility in dark mode.",
      "📂 Backup/export enhancements: Folder permissions, format validation, and export naming logic improved."
    ],
    bugFixes: [
      "🔤 Dynamic language switch fixes: More widgets now react instantly to language change.",
      "🐛 AI loading spinner stuck bug fixed",
      "🧱 Rich note overflow bug resolved",
      "📸 Image not found crash fixed in PhotoViewerPage",
      "🔄 Reset button now clears filters properly",
      "🧼 General performance and cleanup across HomePage and AI components."
    ]
  },
  {
    version: "v1.0.5-alpha",
    title: "Localization, Pull-to-Refresh & Export System Overhaul",
    date: "July 2025",
    description: "Massive improvements in internationalization, data portability, and platform compatibility.",
    features: [
      "🌐 Full multilingual support (5 languages): English, Turkish, Italian, German, and Azerbaijani",
      "🌀 Pull-to-Refresh: Swipe down on HomePage or NotesPage to instantly refresh content",
      "📤 Mobile Export & Import (Revamped): Cross-platform export/import reliable on Android, Linux, and Windows",
      "🔁 Grid Reset Mechanism: Tap to quickly reset gallery view"
    ],
    improvements: [
      "🏁 Localized onboarding experience: First-time users get AI-related hints in their native language",
      "🗂️ Directory refresh: Homepage updates instantly when changing directory",
      "🧠 Localized search filters: Search options support all five languages with RTL alignment",
      "🧭 Improved AI feature descriptions: Enhanced wording and visual consistency",
      "🧹 Refactored HomePage: Better performance and stability",
      "🔒 Authentication Polishing: UI enhancements with smoother animations"
    ],
    bugFixes: [
      "❌ replaceAll crash: Fixed misuse of replaceAll() in localization strings",
      "📂 Linux Firebase init: Firebase initialization now works properly on Linux",
      "🧱 Photo preview layout: Fixed UI glitch with photo layout spacing",
      "🧰 Snackbar theming: Better dark mode support",
      "💬 Dynamic language switch bugs: More UI components reflect real-time language changes"
    ]
  },
  {
    version: "v1.0.4-alpha",
    title: "Smart Gallery, Bug Fixes & Modern Codebase",
    date: "July 2025",
    description: "Complete codebase modernization with faster and smarter gallery and notes pages.",
    features: [
      "🗂️ Smart folder & gallery management: Subfolder support and quick folder filtering",
      "🔄 Grid/List view cycling: Switch between gallery views with a single tap",
      "🧠 AI Pulse banner: Smart suggestion/AI banner on homepage",
      "📝 Persistent & secure storage: Notes and settings stored more reliably",
      "🛠️ Advanced error handling: Clear dialogs for folder or permission issues",
      "🏷️ Folder & tag filtering: More precise filtering options",
      "🧩 Modernized codebase: HomePage and gallery state management rewritten"
    ],
    improvements: [
      "🎨 HomeHeader and gallery UI/UX redesigned with Material 3 compliance",
      "⚡ Enhanced filtering, sorting, and search algorithms",
      "🌙 More robust theme and language switching",
      "🧹 Code cleanup: Removed unused enums, improved separation of concerns",
      "🗃️ Per-note storage system for more secure note handling"
    ]
  }
];

const features = [
  {
    icon: Lock,
    title: 'Biometric Authentication',
    description: 'Fingerprint login support with full English & Turkish localization for enhanced security.',
    status: 'available',
    version: 'v1.0.9'
  },
  {
    icon: Lock,
    title: 'Password Protection',
    description: 'Create and manage passwords directly from Home and Settings pages to secure your workspace.',
    status: 'available',
    version: 'v1.0.9'
  },
  {
    icon: Brain,
    title: 'Enhanced AI Commands',
    description: 'Convert to To-do List and Summarize commands with long-press support for copying or saving AI messages.',
    status: 'available',
    version: 'v1.0.9'
  },
  {
    icon: Edit3,
    title: 'Markdown Note Support',
    description: 'Replaced rich text editor with markdown-based editing in bottom sheets for better formatting.',
    status: 'available',
    version: 'v1.0.9'
  },
  {
    icon: BarChart3,
    title: 'Subscription & Limit Management',
    description: 'Fetch AI usage limits from Firestore based on subscription type with localized display.',
    status: 'available',
    version: 'v1.0.9'
  },
  {
    icon: MessageSquare,
    title: 'NotiaAI Chat Page',
    description: 'Access a brand-new chat interface with personality selection and chat history management.',
    status: 'available',
    version: 'v1.0.8'
  },
  {
    icon: Brain,
    title: 'Integrated AI Features',
    description: 'Use AI directly from NotesPage, PhotoViewer, and NoteDetailsBottomSheet with localized messages.',
    status: 'available',
    version: 'v1.0.8'
  },
  {
    icon: Lock,
    title: 'Privacy Policy Integration',
    description: 'In-app privacy policy links and acceptance checkboxes on login/registration, fully localized.',
    status: 'available',
    version: 'v1.0.8'
  },
  {
    icon: BarChart3,
    title: 'Telemetry & Analytics',
    description: 'Toggleable telemetry service with clear opt-out options for better app improvement.',
    status: 'available',
    version: 'v1.0.8'
  },
  {
    icon: Archive,
    title: 'Local Note Saving',
    description: 'Notes now persist locally with SharedPreferences — offline support begins here. Perfect for privacy-conscious users.',
    status: 'available',
    version: 'v1.0.7'
  },
  {
    icon: Smartphone,
    title: 'In-App Photo Picker',
    description: 'No more switching to gallery. Select or capture photos directly inside Notia using the built-in picker.',
    status: 'available',
    version: 'v1.0.7'
  },
  {
    icon: Brain,
    title: 'Smart Notifications (AI-Powered)',
    description: 'Get notified when AI improves a note, suggests tags, or updates content — seamlessly integrated.',
    status: 'available',
    version: 'v1.0.7'
  },
  {
    icon: Brain,
    title: 'AI-Powered Note Suggestions',
    description: 'Context-aware tag suggestions and summary generation with localized UI. Built on GitHub Models (GPT-4.1).',
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
    description: 'Modern and intuitive interface for managing your photos and notes with note type selection.',
    status: 'available',
    version: 'v1.0.7'
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
  const [showFullChangelog, setShowFullChangelog] = useState(false);
  const [copiedVersion, setCopiedVersion] = useState<string | null>(null);

  const copyToClipboard = (text: string, version: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedVersion(version);
      setTimeout(() => setCopiedVersion(null), 2000);
    });
  };

  const ChangelogVersion = ({ versionData }: { versionData: typeof changelogVersions[0] }) => (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-2xl font-bold text-slate-900">{versionData.version}</span>
            <button
              onClick={() => copyToClipboard(versionData.version, versionData.version)}
              className="p-1.5 hover:bg-orange-100 rounded-lg transition-colors"
              title="Copy version"
            >
              {copiedVersion === versionData.version ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <Copy className="h-4 w-4 text-slate-400" />
              )}
            </button>
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-1">{versionData.title}</h3>
          <p className="text-sm text-slate-500 mb-3">{versionData.date}</p>
          <p className="text-slate-600 leading-relaxed">{versionData.description}</p>
        </div>
      </div>

      <div className="space-y-6">
        {versionData.features && (
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
              <Sparkles className="h-5 w-5 text-orange-600 mr-2" />
              New Features
            </h4>
            <ul className="space-y-2">
              {versionData.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-slate-700 leading-relaxed pl-2">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {versionData.improvements && (
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
              <RefreshCw className="h-5 w-5 text-green-600 mr-2" />
              Improvements
            </h4>
            <ul className="space-y-2">
              {versionData.improvements.map((improvement, idx) => (
                <li key={idx} className="text-sm text-slate-700 leading-relaxed pl-2">
                  {improvement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {versionData.bugFixes && (
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
              <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
              Bug Fixes
            </h4>
            <ul className="space-y-2">
              {versionData.bugFixes.map((fix, idx) => (
                <li key={idx} className="text-sm text-slate-700 leading-relaxed pl-2">
                  {fix}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
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
              Smart AI, Privacy-First & Cleaner Interface - Notia continues its transformation into a smarter, more refined and privacy-respecting workspace with a redesigned NotiaAI experience.
            </p>
            
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle className="h-4 w-4" />
              <span>Alpha Release - August 7, 2025</span>
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
              <p className="text-gray-600 text-sm mb-3">Alpha APK available</p>
              <div className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-medium inline-block">
                Alpha Access
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Changelog Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-orange-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Release History
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Detailed changelog with all features, improvements, and fixes across versions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <button
                onClick={() => setShowFullChangelog(!showFullChangelog)}
                className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl transition-colors font-medium"
              >
                <FileText className="h-5 w-5" />
                <span>{showFullChangelog ? 'Hide' : 'See'} Full Changelog</span>
                {showFullChangelog ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
              
              <a
                href="https://github.com/VastSea0/notia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-xl transition-colors font-medium"
              >
                <ExternalLink className="h-5 w-5" />
                <span>View on GitHub</span>
              </a>
            </div>

            <div className="text-sm text-slate-500 flex items-center justify-center space-x-4">
              <span>Last updated: {lastUpdated}</span>
              <span>•</span>
              <button
                onClick={() => copyToClipboard(currentVersion, 'current')}
                className="flex items-center space-x-1 hover:text-orange-600 transition-colors"
              >
                <span>Current: {currentVersion}</span>
                {copiedVersion === 'current' ? (
                  <CheckCircle className="h-3 w-3 text-green-600" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
              </button>
            </div>
          </div>

          {/* Changelog Content */}
          {showFullChangelog && (
            <div className="space-y-8">
              {changelogVersions.map((version, index) => (
                <ChangelogVersion key={index} versionData={version} />
              ))}

              {/* Link to Full Changelog */}
              <div className="text-center py-8">
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Want to see more?
                  </h3>
                  <p className="text-slate-600 mb-4">
                    View the complete changelog including earlier versions on GitHub.
                  </p>
                  <a
                    href="https://github.com/VastSea0/notia/blob/main/CHANGELOG.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Complete CHANGELOG.md</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Versions;