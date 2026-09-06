import React from "react";
import { motion } from "motion/react";
import { Sun, Moon, Smartphone, GitCommit } from "lucide-react";

interface HeaderProps {
  lang: "tr" | "en";
  setLang: (lang: "tr" | "en") => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
  currentView: "home" | "changelog" | "privacy";
  navigateTo: (view: "home" | "changelog" | "privacy", targetId?: string) => void;
  scrollToId: (id: string) => void;
  onOpenDownload: () => void;
}

export default function Header({
  lang,
  setLang,
  theme,
  toggleTheme,
  currentView,
  navigateTo,
  scrollToId,
  onOpenDownload,
}: HeaderProps) {
  const isDark = theme === "dark";

  const t = {
    tr: {
      features: "Özellikler",
      architecture: "Mimari & Güvenlik",
      pricing: "Fiyatlandırma",
      changelog: "Sürüm Notları",
      faq: "S.S.S.",
      getApp: "Google Play",
    },
    en: {
      features: "Features",
      architecture: "Architecture & Security",
      pricing: "Pricing",
      changelog: "Changelog",
      faq: "FAQ",
      getApp: "Google Play",
    },
  }[lang];

  return (
    <header className="sticky top-0 z-50 bg-m3-surface border-b border-[var(--md-sys-color-outline-variant)]/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <div
          onClick={() => navigateTo("home")}
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          <div className="w-9 h-9 rounded-full bg-[var(--md-sys-color-primary-container)]/70 flex items-center justify-center p-1.5 transition-transform group-hover:scale-105">
            <img
              src="/assets/app_icon.png"
              alt="Notia Logo"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base font-black tracking-tight text-[var(--md-sys-color-on-surface)]">
              Notia
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-m3-container text-[var(--md-sys-color-on-surface-variant)] border border-[var(--md-sys-color-outline-variant)]/20">
              v1.3.7
            </span>
          </div>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1">
          <button
            onClick={() => scrollToId("features")}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] hover:bg-[var(--md-sys-color-on-surface)]/8 transition-colors cursor-pointer"
          >
            {t.features}
          </button>
          <button
            onClick={() => scrollToId("architecture")}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] hover:bg-[var(--md-sys-color-on-surface)]/8 transition-colors cursor-pointer"
          >
            {t.architecture}
          </button>
          <button
            onClick={() => scrollToId("pricing")}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] hover:bg-[var(--md-sys-color-on-surface)]/8 transition-colors cursor-pointer"
          >
            {t.pricing}
          </button>
          <button
            onClick={() => navigateTo("changelog")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              currentView === "changelog"
                ? "bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]"
                : "text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] hover:bg-[var(--md-sys-color-on-surface)]/8"
            }`}
          >
            <GitCommit className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)]" />
            <span>{t.changelog}</span>
          </button>
          <button
            onClick={() => scrollToId("faq")}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] hover:bg-[var(--md-sys-color-on-surface)]/8 transition-colors cursor-pointer"
          >
            {t.faq}
          </button>
        </nav>

        {/* Right Utilities & Actions */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === "tr" ? "en" : "tr")}
            className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-mono font-bold text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] hover:bg-[var(--md-sys-color-on-surface)]/8 transition-colors cursor-pointer"
            title={lang === "tr" ? "Switch to English" : "Türkçe'ye Geç"}
          >
            {lang === "tr" ? "EN" : "TR"}
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)] hover:bg-[var(--md-sys-color-on-surface)]/8 transition-colors cursor-pointer"
            aria-label="Theme Toggle"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Primary Google Play Store Button */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://play.google.com/store/apps/details?id=com.vastsea.notia"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 px-4 sm:px-5 rounded-full bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow flex items-center gap-2 cursor-pointer ml-1"
          >
            <Smartphone className="w-4 h-4" />
            <span>{t.getApp}</span>
          </motion.a>
        </div>
      </div>
    </header>
  );
}
