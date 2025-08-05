import React, { useState, useEffect } from 'react';
import { 
  Crown, 
  Zap, 
  Star, 
  Check, 
  X,
  Gift,
  ArrowLeft,
  Sparkles,
  MessageSquare,
  Edit3,
  Users,
  Globe,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('plus');
  const [exchangeRate, setExchangeRate] = useState(40); // Default fallback
  const [isLoadingRate, setIsLoadingRate] = useState(true);

  // Fetch current USD to TRY exchange rate
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        // Using a free exchange rate API
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        
        if (data.rates && data.rates.TRY) {
          setExchangeRate(Math.round(data.rates.TRY * 100) / 100); // Round to 2 decimal places
        }
      } catch (error) {
        console.warn('Failed to fetch exchange rate, using default:', error);
        // Keep the default rate of 40
      } finally {
        setIsLoadingRate(false);
      }
    };

    fetchExchangeRate();
  }, []);
  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: `${Math.round(0 * exchangeRate)}₺`,
      priceUSD: 'Free',
      period: 'Forever',
      aiLimit: '20 / day',
      aiLimitDetails: '10 AI Notes + 10 Chat',
      ads: true,
      target: 'Students & Casual Users',
      popular: false,
      features: [
        'Daily 10 AI-powered note suggestions',
        'Daily 10 NotiaAI chat messages',
        'Basic photo note creation',
        'Local storage (unlimited)',
        'Export/import functionality',
        'Basic customization',
        'Community support'
      ],
      limitations: [
        'Ad-supported experience',
        'Limited AI interactions',
        'Basic support only'
      ]
    },
    {
      id: 'plus',
      name: 'Plus',
      price: `${Math.round(1 * exchangeRate)}₺`,
      priceUSD: '$1',
      period: 'per month',
      aiLimit: '80 / day',
      aiLimitDetails: '30 AI Notes + 50 Chat',
      ads: false,
      target: 'Active users',
      popular: true,
      features: [
        'Daily 30 AI-enhanced note creation',
        'Daily 50 NotiaAI chat interactions',
        'Ad-free experience',
        'Priority AI response speed',
        'Advanced photo organization',
        'Custom AI personality settings',
        'Premium themes & customization',
        'Email support (24h response)'
      ],
      limitations: []
    },
    {
      id: 'pro',
      name: 'Pro',
      price: `${Math.round(2.5 * exchangeRate)}₺`,
      priceUSD: '$2.5',
      period: 'per month',
      aiLimit: 'Unlimited',
      aiLimitDetails: 'Unlimited AI usage',
      ads: false,
      target: 'Power users & Content creators',
      popular: false,
      features: [
        'Unlimited AI note creation',
        'Unlimited NotiaAI chat',
        'Priority processing & fastest AI',
        'Beta feature early access',
        'Advanced analytics & insights',
        'Custom AI model preferences',
        'Multiple account sync',
        'API access (coming soon)',
        'Priority support (2h response)',
        'Feature request priority'
      ],
      limitations: []
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-orange-100/20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center space-x-2 text-slate-600 hover:text-orange-600 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="font-medium">Back to Home</span>
              </Link>
              <div className="h-5 w-px bg-slate-300"></div>
              <div className="flex items-center space-x-3">
                <img
                  src="/assets/app_icon.png"
                  alt="Notia Logo"
                  className="h-8 w-8 rounded-lg border border-slate-200"
                />
                <span className="text-lg font-semibold text-slate-900">Notia Pricing</span>
              </div>
            </div>
            <div className="text-sm text-slate-500">
              {isLoadingRate ? (
                <span className="animate-pulse">Loading rate...</span>
              ) : (
                `1 USD = ${exchangeRate}₺ TRY`
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl mx-auto mb-8">
            <Crown className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">
            Choose Your Notia
            <span className="text-orange-600 block">Experience</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Transform your memories with AI-powered storytelling. Pick the plan that fits your creative journey.
          </p>
        </div>

        {/* Beta Reward Banner */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 mb-12 border border-emerald-200">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
              <Gift className="h-6 w-6 text-white" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-emerald-900 mb-2">🎁 Beta Katılımcısı Ödülü</h3>
              <p className="text-emerald-700">
                <strong>August-September 2025</strong> arası ilk kez indiren herkese <strong>1 hafta Plus ücretsiz!</strong>
              </p>
              <p className="text-sm text-emerald-600 mt-1">
                Sınırsız AI özellikleri • Reklamsız deneyim • Öncelikli destek
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white/80 backdrop-blur-sm rounded-3xl border-2 shadow-lg p-8 transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-orange-300 scale-105 bg-gradient-to-br from-orange-50/50 to-white' 
                  : 'border-slate-200/60 hover:border-orange-200'
              } ${
                selectedPlan === plan.id ? 'ring-2 ring-orange-400' : ''
              }`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    <Star className="h-4 w-4 inline mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center space-x-2 mb-2">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-lg text-slate-500">{plan.period}</span>
                </div>
                <div className="text-slate-600 text-sm mb-3">{plan.priceUSD}</div>
                
                {/* AI Limit Badge */}
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                  plan.id === 'basic' ? 'bg-gray-100 text-gray-700' :
                  plan.id === 'plus' ? 'bg-orange-100 text-orange-700' :
                  'bg-purple-100 text-purple-700'
                }`}>
                  <Zap className="h-4 w-4 mr-2" />
                  {plan.aiLimit}
                </div>
                <div className="text-xs text-slate-500 mt-1">{plan.aiLimitDetails}</div>
                
                {/* Target Audience */}
                <div className="mt-4 text-sm text-slate-600 bg-slate-50 px-3 py-1 rounded-full inline-block">
                  <Users className="h-3 w-3 inline mr-1" />
                  {plan.target}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-slate-900 flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Features
                </h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-slate-900 flex items-center">
                      <X className="h-4 w-4 text-red-500 mr-2" />
                      Limitations
                    </h4>
                    <ul className="space-y-2 mt-2">
                      {plan.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-slate-500">
                          <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-2xl font-semibold transition-all duration-200 ${
                  plan.id === 'basic'
                    ? 'bg-slate-600 hover:bg-slate-700 text-white'
                    : plan.id === 'plus'
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg'
                    : 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg'
                }`}
              >
                {plan.id === 'basic' ? 'Download Free' : `Upgrade to ${plan.name}`}
              </button>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 text-center">
            Feature Comparison
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Features</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-600">Basic</th>
                  <th className="text-center py-4 px-4 font-semibold text-orange-600">Plus</th>
                  <th className="text-center py-4 px-4 font-semibold text-purple-600">Pro</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium">AI Note Creation (daily)</td>
                  <td className="text-center py-3 px-4">10</td>
                  <td className="text-center py-3 px-4">30</td>
                  <td className="text-center py-3 px-4">∞</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium">NotiaAI Chat (daily)</td>
                  <td className="text-center py-3 px-4">10</td>
                  <td className="text-center py-3 px-4">50</td>
                  <td className="text-center py-3 px-4">∞</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium">Ads</td>
                  <td className="text-center py-3 px-4"><X className="h-4 w-4 text-red-500 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium">Priority AI Speed</td>
                  <td className="text-center py-3 px-4"><X className="h-4 w-4 text-red-500 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><Sparkles className="h-4 w-4 text-purple-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium">Custom AI Personality</td>
                  <td className="text-center py-3 px-4"><X className="h-4 w-4 text-red-500 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium">Beta Features</td>
                  <td className="text-center py-3 px-4"><X className="h-4 w-4 text-red-500 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><X className="h-4 w-4 text-red-500 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-slate-50 to-orange-50/30 rounded-2xl p-8">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">🔄 Can I change plans anytime?</h3>
                <p className="text-slate-600 text-sm">Yes! Upgrade or downgrade your plan anytime. Changes take effect immediately, and we'll prorate the billing.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">🌍 Which countries is this available in?</h3>
                <p className="text-slate-600 text-sm">Notia is available globally! Pricing shown in Turkish Lira (₺) and US Dollars ($) for convenience.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">📱 Do I need internet for basic features?</h3>
                <p className="text-slate-600 text-sm">No! Photo notes, local storage, and basic functionality work offline. Only AI features require internet.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">🎁 What's included in the beta reward?</h3>
                <p className="text-slate-600 text-sm">1 week of Plus features (80 daily AI interactions, ad-free experience) for early adopters in August-September 2025.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">🔐 Is my data safe with subscriptions?</h3>
                <p className="text-slate-600 text-sm">Absolutely! Your photos stay local, and we follow strict privacy policies. Subscription only unlocks AI features.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">💳 What payment methods do you accept?</h3>
                <p className="text-slate-600 text-sm">Google Play Billing (credit cards, PayPal, Google Pay) and local payment methods in your region.</p>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/assets/app_icon.png"
                  alt="Notia Logo"
                  className="h-8 w-8 rounded-lg"
                />
                <span className="text-xl font-bold">Notia</span>
              </div>
              <p className="text-slate-400 text-sm">
                Transform your photos into intelligent stories with AI-powered insights and multilingual support.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Pricing</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Basic - Free forever</li>
                <li>Plus - 40₺/month</li>
                <li>Pro - 100₺/month</li>
                <li>Beta reward included</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>vastseaoffical0@outlook.com</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Feature Requests</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>© 2025 Notia by VastSea (Egehan Kahraman). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
 
export default Pricing;