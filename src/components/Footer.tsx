import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/assets/app_icon.png"
                alt="Notia Logo"
                className="h-9 w-9 rounded-xl border border-orange-300 shadow-sm"
              />
              <span className="text-xl font-bold">Notia</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-4">
              Turn your photo gallery into a personal storybook. Every picture holds a memory, and Notia helps you capture, save, and relive them—whenever you want.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-orange-500 fill-current" />
              <span>by Egehan KAHRAMAN</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="https://instagram.com/crusttaceans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:vastseaoffical0@outlook.com"
                  className="hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Notia. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Notia – Capture Moments, Preserve Memories
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
