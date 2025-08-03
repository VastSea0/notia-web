import React from 'react';
import { ArrowLeft, Shield, Database, BarChart3, Lock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
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
              <span className="text-lg font-semibold text-slate-900">Notia</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-sm p-8 lg:p-12">
          
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">
              Privacy & Data Usage Policy
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Transparency builds trust. This policy outlines how Notia handles your data 
              with care and respect for your privacy.
            </p>
          </div>

          {/* Data Collection Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 flex items-center">
              <Database className="h-6 w-6 text-blue-600 mr-3" />
              Data Collection Services
            </h2>

            {/* NotiaAI Service */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">1. NotiaAI Service</h3>
              <div className="space-y-3 text-slate-700">
                <p>• Stores AI prompt logs (user-submitted text) in secure databases</p>
                <p><strong>Used solely for:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>→ A/B testing on AI responses</p>
                  <p>→ Detecting bugs and misuse</p>
                  <p>→ Improving model quality over time</p>
                </div>
                <p className="font-medium text-slate-900">
                  <strong>Does not store</strong> media, images, or user identity
                </p>
              </div>
            </div>

            {/* Account Services */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6 border border-green-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">2. Notia Account Services</h3>
              <div className="space-y-3 text-slate-700">
                <p>Manages authentication, syncing, and session tracking.</p>
                <p><strong>Collected metadata includes:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>→ Email, username, Android version, app build version</p>
                  <p>→ Count of AI requests used per day</p>
                  <p>→ File paths and note texts</p>
                </div>
                <p className="font-medium text-slate-900">
                  📁 <strong>Photos themselves are never uploaded</strong>
                </p>
              </div>
            </div>

            {/* Telemetry Services */}
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6 mb-6 border border-purple-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">3. Notia Telemetry Services</h3>
              <div className="space-y-3 text-slate-700">
                <p><strong>Collects anonymous data for:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>→ A/B testing</p>
                  <p>→ App crashes</p>
                  <p>→ Component interactions (e.g., which buttons are clicked)</p>
                </div>
                <p>All data is stored securely on <strong>Google Firebase collections</strong></p>
                <p className="font-medium text-slate-900">
                  No data is ever sold or used for advertising purposes
                </p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 flex items-center">
              <Lock className="h-6 w-6 text-blue-600 mr-3" />
              Core Values
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="font-semibold text-slate-900">🛡️ Closed-source</span>
                </div>
                <p className="text-slate-700">Licensed under proprietary terms</p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="font-semibold text-slate-900">🔐 Privacy-respecting</span>
                </div>
                <p className="text-slate-700">Your data is handled with utmost care</p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 md:col-span-2">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="font-semibold text-slate-900">🚫 No Redistribution</span>
                </div>
                <p className="text-slate-700">
                  No part of the code or assets may be reproduced, copied, or redistributed without explicit permission
                </p>
              </div>
            </div>
          </section>

          {/* Creator Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 flex items-center">
              <Mail className="h-6 w-6 text-blue-600 mr-3" />
              Creator & Contact
            </h2>
            
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-orange-800 font-bold text-lg">EK</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Egehan KAHRAMAN (VastSea)</h3>
                  <p className="text-slate-600">Creator & Maintainer</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-slate-700">
                <Mail className="h-4 w-4" />
                <a 
                  href="mailto:vastseaoffical0@outlook.com"
                  className="hover:text-orange-600 transition-colors"
                >
                  vastseaoffical0@outlook.com
                </a>
              </div>
            </div>
          </section>

          {/* License Notice */}
          <section className="bg-slate-900 text-white rounded-xl p-8">
            <h2 className="text-2xl font-serif font-bold mb-6">License Notice</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                This software and its source code, assets, and AI features are the exclusive 
                property of <strong className="text-white">Egehan Kahraman (VastSea)</strong>.
              </p>
              <p>
                Unauthorized redistribution, reverse-engineering, or copying of any part of 
                Notia is strictly prohibited.
              </p>
              <p className="text-slate-100 font-semibold">
                All Rights Reserved © 2025
              </p>
            </div>
          </section>

          {/* Last Updated */}
          <div className="text-center mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Last updated: January 2025
            </p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Privacy;