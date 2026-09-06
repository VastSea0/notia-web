import React from "react";
import { motion } from "motion/react";
import { Smartphone, ExternalLink } from "lucide-react";

interface FooterProps {
  lang: "tr" | "en";
  onOpenDownload: () => void;
  navigateTo: (view: "home" | "changelog" | "privacy", targetId?: string) => void;
  scrollToId: (id: string) => void;
}

export default function Footer({
  lang,
  onOpenDownload,
  navigateTo,
  scrollToId,
}: FooterProps) {
  const t = {
    tr: {
      ctaTitle: "Anılarınızı unutulmaya terk etmeyin.",
      ctaSubtitle:
        "Notia ile her fotoğrafın bir hissi, her anının yaşayan bir öyküsü olsun. Google Play Store üzerinden hemen indirin.",
      ctaButton: "Google Play Store'dan İndir",
      desc: "Kişisel fotoğraf günlüğü ve görsel bellek sığınağı. Yalnızca Android (Google Play Store) üzerinde resmi olarak dağıtılır; Pro kullanıcılar için masaüstü Web sürümü desteği sunar.",
      features: "Özellikler",
      architecture: "Mimari & Güvenlik",
      pricing: "Fiyatlandırma",
      changelog: "Sürüm Notları",
      privacy: "Gizlilik Politikası",
      copyright: "Notia Projesi. Tüm hakları saklıdır.",
      createdBy: "Geliştirici:",
    },
    en: {
      ctaTitle: "Don't leave your memories behind.",
      ctaSubtitle:
        "Let every photo tell a story, and every story carry a heartbeat. Download now on the Google Play Store.",
      ctaButton: "Download on Google Play",
      desc: "Personal photo journal and visual memory sanctuary. Officially distributed exclusively on Android (Google Play Store); with desktop Web access for Pro users.",
      features: "Features",
      architecture: "Architecture & Security",
      pricing: "Pricing",
      changelog: "Changelog",
      privacy: "Privacy Policy",
      copyright: "Notia Project. All rights reserved.",
      createdBy: "Developer:",
    },
  }[lang];

  return (
    <footer className="mt-20 border-t border-[var(--md-sys-color-outline-variant)]/30 bg-m3-container-lowest">
      {/* Pre-Footer Call to Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="p-8 sm:p-14 rounded-[36px] bg-m3-container border border-[var(--md-sys-color-outline-variant)]/40 text-center space-y-6 shadow-xl">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--md-sys-color-on-surface)]">
            {t.ctaTitle}
          </h2>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-[var(--md-sys-color-on-surface-variant)]">
            {t.ctaSubtitle}
          </p>
          <div className="pt-2 flex justify-center">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="https://play.google.com/store/apps/details?id=com.vastsea.notia"
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 px-8 rounded-full bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] font-bold text-sm sm:text-base flex items-center gap-3 shadow-xl transition-all cursor-pointer"
            >
              <Smartphone className="w-5 h-5" />
              <span>{t.ctaButton}</span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-[var(--md-sys-color-outline-variant)]/20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand Info */}
          <div className="space-y-2 max-w-sm text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[var(--md-sys-color-primary-container)]/60 flex items-center justify-center p-1">
                <img
                  src="/assets/app_icon.png"
                  alt="Notia Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <span className="font-bold text-base text-[var(--md-sys-color-on-surface)]">Notia</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-m3-container text-[var(--md-sys-color-on-surface-variant)] border border-[var(--md-sys-color-outline-variant)]/20">
                v1.3.7 (Build 93)
              </span>
            </div>
            <p className="text-xs text-[var(--md-sys-color-on-surface-variant)] leading-relaxed font-normal">
              {t.desc}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-[var(--md-sys-color-on-surface-variant)]">
            <button
              onClick={() => scrollToId("features")}
              className="hover:text-[var(--md-sys-color-on-surface)] transition-colors cursor-pointer"
            >
              {t.features}
            </button>
            <button
              onClick={() => scrollToId("architecture")}
              className="hover:text-[var(--md-sys-color-on-surface)] transition-colors cursor-pointer"
            >
              {t.architecture}
            </button>
            <button
              onClick={() => scrollToId("pricing")}
              className="hover:text-[var(--md-sys-color-on-surface)] transition-colors cursor-pointer"
            >
              {t.pricing}
            </button>
            <button
              onClick={() => navigateTo("changelog")}
              className="hover:text-[var(--md-sys-color-on-surface)] transition-colors cursor-pointer"
            >
              {t.changelog}
            </button>
            <button
              onClick={() => navigateTo("privacy")}
              className="hover:text-[var(--md-sys-color-on-surface)] transition-colors cursor-pointer"
            >
              {t.privacy}
            </button>
            <a
              href="https://play.google.com/store/apps/details?id=com.vastsea.notia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--md-sys-color-on-surface)] transition-colors flex items-center gap-1 text-[var(--md-sys-color-primary)] font-bold"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Google Play</span>
            </a>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-8 pt-6 border-t border-[var(--md-sys-color-outline-variant)]/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[var(--md-sys-color-on-surface-variant)]">
          <p>© {new Date().getFullYear()} {t.copyright}</p>
          <p className="flex items-center gap-1.5">
            <span>{t.createdBy}</span>
            <span className="font-bold text-[var(--md-sys-color-on-surface)]">
              Egehan Kahraman (VastSea)
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
