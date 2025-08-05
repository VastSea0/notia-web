import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Zap, ArrowRight } from 'lucide-react';

const PricingPreview = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-orange-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl mx-auto mb-6">
            <Crown className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Choose Your AI Experience
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start free, upgrade when you need more AI power
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Basic</h3>
            <div className="text-3xl font-bold text-slate-900 mb-2">Free</div>
            <div className="flex items-center text-sm text-slate-600 mb-4">
              <Zap className="h-4 w-4 mr-1" />
              20 AI interactions/day
            </div>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• AI-powered notes</li>
              <li>• Photo organization</li>
              <li>• Basic features</li>
            </ul>
          </div>

          {/* Plus Plan - Popular */}
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border-2 border-orange-300 shadow-lg relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                Most Popular
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Plus</h3>
            <div className="text-3xl font-bold text-slate-900 mb-2">
              40₺
              <span className="text-lg text-slate-600">/month</span>
            </div>
            <div className="flex items-center text-sm text-slate-600 mb-4">
              <Zap className="h-4 w-4 mr-1" />
              80 AI interactions/day
            </div>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• Ad-free experience</li>
              <li>• Priority AI speed</li>
              <li>• Custom AI personality</li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Pro</h3>
            <div className="text-3xl font-bold text-slate-900 mb-2">
              100₺
              <span className="text-lg text-slate-600">/month</span>
            </div>
            <div className="flex items-center text-sm text-slate-600 mb-4">
              <Zap className="h-4 w-4 mr-1" />
              Unlimited AI usage
            </div>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• Everything in Plus</li>
              <li>• Beta feature access</li>
              <li>• Priority support</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-lg"
          >
            View All Plans & Features
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
          <p className="text-sm text-slate-500 mt-3">
            🎁 Beta users get 1 week Plus free!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;