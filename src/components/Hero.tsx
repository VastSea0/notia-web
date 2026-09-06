import React from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Smartphone,
  GitCommit,
  ShieldCheck,
  Globe,
  MapPin,
} from "lucide-react";

interface HeroProps {
  lang: "tr" | "en";
  onOpenDownload: () => void;
  onNavigateChangelog: () => void;
  onScrollToFeatures: () => void;
}

const springTransition = {
  type: "spring",
  stiffness: 380,
  damping: 26,
};

export default function Hero({
  lang,
  onOpenDownload,
  onNavigateChangelog,
  onScrollToFeatures,
}: HeroProps) {
  const t = {
    tr: {
      chip: "Android Resmi Sürümü • v1.3.7 (Build 93)",
      headline: "Fotoğraflar anı yakalar, Notia duyguyu yaşatır.",
      subtitle:
        "Sıradan fotoğraf galerilerinin karmaşasından kurtulun. Google Material 3 Expressive tasarımı, çok modlu NotiaAI zekâsı ve yerel öncelikli şifreli mimarisiyle kişisel görsel anı defteriniz. Yalnızca Android'de; Pro kullanıcılar için masaüstü Web sürümü desteğiyle.",
      playStoreBtn: "Google Play Store'da Keşfet",
      playStoreSub: "Resmi Android Uygulaması",
      changelogBtn: "Sürüm Notları (v1.3.7)",
      floatingPin: "📍 Kaş, Akdeniz • 14 Ekim",
      floatingMood: "✨ NotiaAI: Nostaljik & Huzurlu",
      highlights: [
        { icon: <ShieldCheck className="w-3.5 h-3.5" />, text: "Sıfır Bilgi & AES-256 E2EE" },
        { icon: <Smartphone className="w-3.5 h-3.5" />, text: "Android (Google Play Store)" },
        { icon: <Globe className="w-3.5 h-3.5" />, text: "Pro Web Sürümü Erişimi" },
        { icon: <Sparkles className="w-3.5 h-3.5" />, text: "Gemini 2.5 & Groq Llama 3.3" },
      ],
    },
    en: {
      chip: "Official Android Release • v1.3.7 (Build 93)",
      headline: "Photos capture the moment, Notia preserves the emotion.",
      subtitle:
        "Beyond ordinary camera roll clutter. An expressive visual sanctuary crafted with Google Material 3 Expressive design, multimodal NotiaAI companion, and local-first encryption. Exclusively on Android; with full desktop Web version access for Pro users.",
      playStoreBtn: "Explore on Google Play",
      playStoreSub: "Official Android App",
      changelogBtn: "Changelog (v1.3.7)",
      floatingPin: "📍 Kaş, Mediterranean • Oct 14",
      floatingMood: "✨ NotiaAI: Nostalgic & Serene",
      highlights: [
        { icon: <ShieldCheck className="w-3.5 h-3.5" />, text: "Zero-Knowledge & AES-256 E2EE" },
        { icon: <Smartphone className="w-3.5 h-3.5" />, text: "Android (Google Play Store)" },
        { icon: <Globe className="w-3.5 h-3.5" />, text: "Pro Web Version Access" },
        { icon: <Sparkles className="w-3.5 h-3.5" />, text: "Gemini 2.5 & Groq Llama 3.3" },
      ],
    },
  }[lang];

  return (
    <section className="pt-12 sm:pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Editorial Value Proposition & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springTransition}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Assist Chip */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)]" />
            <span>{t.chip}</span>
          </div>

          {/* Display Headline */}
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[var(--md-sys-color-on-surface)] leading-[1.08]"
            style={{ fontStretch: "105%" }}
          >
            {t.headline}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[var(--md-sys-color-on-surface-variant)] leading-relaxed font-normal max-w-2xl">
            {t.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://play.google.com/store/apps/details?id=com.vastsea.notia"
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 px-8 rounded-full bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] font-bold text-sm sm:text-base flex items-center gap-3 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <Smartphone className="w-5 h-5" />
              <div className="text-left">
                <span className="block leading-tight">{t.playStoreBtn}</span>
                <span className="block text-[10px] font-normal opacity-90">{t.playStoreSub}</span>
              </div>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onNavigateChangelog}
              className="h-14 px-7 rounded-full bg-m3-container text-[var(--md-sys-color-on-surface)] border border-[var(--md-sys-color-outline-variant)]/40 font-semibold text-sm sm:text-base flex items-center gap-2.5 hover:bg-m3-container-high transition-colors cursor-pointer"
            >
              <GitCommit className="w-4 h-4 text-[var(--md-sys-color-primary)]" />
              <span>{t.changelogBtn}</span>
            </motion.button>
          </div>

          {/* Micro-feature highlights pill strip */}
          <div className="pt-4 border-t border-[var(--md-sys-color-outline-variant)]/20 grid grid-cols-2 sm:grid-cols-2 gap-2.5 max-w-xl">
            {t.highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs font-semibold text-[var(--md-sys-color-on-surface-variant)]"
              >
                <div className="w-5 h-5 rounded-full bg-[var(--md-sys-color-primary-container)]/60 text-[var(--md-sys-color-primary)] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <span className="truncate">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Handheld Smartphone Showcase (PROPER MOBILE PROPORTIONS) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 32 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...springTransition, delay: 0.15 }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative"
        >
          {/* Floating Chip 1: Location Tag */}
          <div className="hidden sm:flex absolute -top-4 -left-6 z-20 items-center gap-2 px-4 py-2 rounded-full bg-m3-container-high border border-[var(--md-sys-color-outline-variant)]/50 shadow-lg text-xs font-bold text-[var(--md-sys-color-on-surface)] select-none pointer-events-none">
            <MapPin className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)]" />
            <span>{t.floatingPin}</span>
          </div>

          {/* Smartphone Frame - Proportional, Handheld Scale */}
          <div className="relative w-[280px] sm:w-[320px] md:w-[330px] rounded-[48px] p-3 bg-m3-container-highest border-4 border-[var(--md-sys-color-outline-variant)]/40 shadow-2xl">
            {/* Phone Screen Container */}
            <div className="relative rounded-[38px] overflow-hidden bg-black border border-[var(--md-sys-color-outline-variant)]/30 aspect-[9/19.5]">
              {/* Speaker notch / top camera slit */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-neutral-900 ring-1 ring-neutral-800" />
              </div>

              {/* Natural-scale crisp screenshot */}
              <img
                src="/assets/01_home_feed.png"
                alt="Notia Android Interface"
                className="w-full h-full object-cover object-top block select-none pointer-events-none"
              />
            </div>
          </div>

          {/* Floating Chip 2: AI Mood Tag */}
          <div className="hidden sm:flex absolute -bottom-4 -right-4 z-20 items-center gap-2 px-4 py-2 rounded-full bg-m3-container-high border border-[var(--md-sys-color-outline-variant)]/50 shadow-lg text-xs font-bold text-[var(--md-sys-color-on-surface)] select-none pointer-events-none">
            <Sparkles className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)]" />
            <span>{t.floatingMood}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
