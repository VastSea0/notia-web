import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Smartphone, Globe, ExternalLink, Sparkles } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: "tr" | "en";
}

export default function DownloadModal({ isOpen, onClose, lang }: DownloadModalProps) {
  const t = {
    tr: {
      headline: "Notia'ya Erişin",
      supportingText:
        "Notia resmi olarak yalnızca Android (Google Play Store) platformunda sunulmaktadır. Pro kullanıcılar ayrıca Web sürümüne erişebilir.",
      androidTitle: "Google Play Store",
      androidSub: "Android 5.0+ • v1.3.7 (Build 93) • Resmi Mağaza Sürümü",
      androidBtn: "Google Play'de Aç",
      webTitle: "Notia Web (Pro)",
      webSub: "Pro aboneler masaüstü tarayıcılarından tüm anılarına ve fotoğraflarına erişebilir.",
      webBtn: "Web Sürümüne Git",
      notice: "Notia açık kaynaklı veya APK olarak dağıtılan bir uygulama değildir; resmi indirme yalnızca Google Play Store üzerindendir.",
    },
    en: {
      headline: "Get Notia",
      supportingText:
        "Notia is officially available exclusively on Android (Google Play Store). Pro subscribers can also access the Web version.",
      androidTitle: "Google Play Store",
      androidSub: "Android 5.0+ • v1.3.7 (Build 93) • Official Store Release",
      androidBtn: "Open on Google Play",
      webTitle: "Notia Web (Pro)",
      webSub: "Pro subscribers can access their full photo memory library from any desktop browser.",
      webBtn: "Go to Web Version",
      notice: "Notia is not open-source or distributed as an APK; official installation is strictly via Google Play Store.",
    },
  }[lang];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* M3 Scrim Backdrop - Solid darkened scrim, NO blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80"
          />

          {/* M3 Expressive Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="relative w-full max-w-md rounded-[32px] p-6 sm:p-8 bg-m3-container-high text-[var(--md-sys-color-on-surface)] shadow-2xl border border-[var(--md-sys-color-outline-variant)]/40 overflow-hidden text-left"
          >
            {/* Header Icon + Close */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--md-sys-color-on-surface-variant)] hover:bg-[var(--md-sys-color-surface-container-highest)] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold tracking-tight text-[var(--md-sys-color-on-surface)]">
                {t.headline}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed font-normal">
                {t.supportingText}
              </p>
            </div>

            {/* Platform Options */}
            <div className="space-y-3">
              {/* 1. Android Google Play (Primary) */}
              <a
                href="https://play.google.com/store/apps/details?id=com.vastsea.notia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-[24px] bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] border border-[var(--md-sys-color-primary)]/40 hover:opacity-95 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] flex items-center justify-center shrink-0">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">{t.androidTitle}</div>
                    <div className="text-[11px] opacity-85 leading-tight">{t.androidSub}</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 shrink-0 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* 2. Web Sürümü (Pro) */}
              <div className="w-full p-4 rounded-[24px] bg-m3-container-low border border-[var(--md-sys-color-outline-variant)]/40 text-[var(--md-sys-color-on-surface)] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] flex items-center justify-center">
                      <Globe className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold">{t.webTitle}</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)]">
                    PRO
                  </span>
                </div>
                <p className="text-[11px] text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
                  {t.webSub}
                </p>
              </div>
            </div>

            {/* Truth Notice */}
            <div className="mt-5 pt-3 border-t border-[var(--md-sys-color-outline-variant)]/20 text-center">
              <p className="text-[11px] text-[var(--md-sys-color-on-surface-variant)] leading-normal opacity-80">
                {t.notice}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
