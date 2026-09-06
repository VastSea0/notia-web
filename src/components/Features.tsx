import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Layers,
  Edit3,
  MapPin,
  Users,
  Sparkles,
  BookOpen,
  Image as ImageIcon,
  Check,
} from "lucide-react";

interface FeaturesProps {
  lang: "tr" | "en";
}

const springTransition = {
  type: "spring",
  stiffness: 380,
  damping: 26,
};

export default function Features({ lang }: FeaturesProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const t = {
    tr: {
      chip: "Temel Yetenekler",
      title: "Anılarınızı Yaşatan 6 Temel Boyut.",
      subtitle:
        "Notia, fotoğraf çekmenin ötesinde; anılarınızı kaydetmeyi, hissetmeyi ve yeniden keşfetmeyi editoryal bir sanata dönüştürür.",
      pillars: [
        {
          id: "editor",
          icon: <Edit3 className="w-4 h-4" />,
          label: "Markdown Editörü",
          badge: "Hikâye Anlatımı",
          title: "Fotoğraflarınızı yaşayan edebiyat eserlerine dönüştürün.",
          description:
            "Yüzen araç çubuğu, paragraf arası görsel sürükleme, tam Markdown desteği ve canlı WYSIWYG düzenleme. Hislerinizi, başlıkları, alıntıları ve etiketleri özgürce yazın.",
          highlights: [
            "Zengin Markdown & WYSIWYG düzenleme",
            "Paragraf içi çoklu görsel entegrasyonu",
            "Özel etiket ve kategori filtreleme",
          ],
          image: "/assets/04_markdown_editor.png",
          alt: "Notia Zengin Markdown Editörü",
        },
        {
          id: "map",
          icon: <MapPin className="w-4 h-4" />,
          label: "İnteraktif Harita",
          badge: "Coğrafi Keşif",
          title: "Hayatınızın geçtiği yerleri dünya atlasında keşfedin.",
          description:
            "EXIF metaverilerinden otomatik çözümlenen GPS koordinatları ile tüm seyahatleriniz ve rotalarınız interaktif bir dünya haritasında görselleşir. Şehir şehir anılarınızı gezin.",
          highlights: [
            "Otomatik EXIF GPS konum çözümleme",
            "Harita üzeri kümelenmiş anı pinleri",
            "Gezi, seyahat ve rota zaman tüneli",
          ],
          image: "/assets/02_interactive_map.png",
          alt: "Notia İnteraktif Dünya Haritası",
        },
        {
          id: "reader",
          icon: <BookOpen className="w-4 h-4" />,
          label: "Editoryal Okuma",
          badge: "Durgunluk & Huzur",
          title: "Anılarınızı edebiyat dergisi zarafetinde yeniden okuyun.",
          description:
            "Fraunces ve Lora editoryal tipografi motoru sayesinde fotoğraflarınız ve duygularınız dikkat dağıtıcı öğelerden arınmış, huzurlu bir okuma seansına dönüşür.",
          highlights: [
            "Fraunces & Lora editoryal tipografi",
            "Dikkat dağıtmayan tam ekran okuma modu",
            "Duygu odaklı anı akışı",
          ],
          image: "/assets/03_note_reader.png",
          alt: "Notia Editoryal Okuma",
        },
        {
          id: "people",
          icon: <Users className="w-4 h-4" />,
          label: "Kişiler & Buketler",
          badge: "Sevdikleriniz",
          title: "Sevdiklerinizle paylaştığınız anları tek çemberde toplayın.",
          description:
            "Fotoğraflardaki kişileri etiketleyin, @Kişiler profilleri oluşturun ve birlikte geçirdiğiniz tüm anıları özel bir zaman tünelinde kronolojik olarak görüntüleyin.",
          highlights: [
            "@Kişi etiketleme ve özel profil sayfaları",
            "Buket galerisi & tematik anı albümleri",
            "Kişi bazlı arama ve filtreleme",
          ],
          image: "/assets/05_people_memories.png",
          alt: "Notia Kişiler ve Hafıza Çemberi",
        },
        {
          id: "ai",
          icon: <Sparkles className="w-4 h-4" />,
          label: "NotiaAI Asistanı",
          badge: "Çok Modlu Zekâ",
          title: "Fotoğrafların duygusunu anlayan yapay zekâ eşlikçisi.",
          description:
            "Google Gemini 2.5/1.5 ve Groq Llama 3.3 70B çok modlu zekâsı. Fotoğraflardan duygu analizi, anı yazma ilhamı ve her gün yenilenen 'Şimdi Özeti' (Now Brief).",
          highlights: [
            "Google Gemini 2.5/1.5 & Groq Llama 3.3 motorları",
            "Görselden otomatik duygu ve sahne analizi",
            "Günlük 'Şimdi Özeti' (Now Brief) anı derlemesi",
          ],
          image: "/assets/06_notia_ai_assistant.png",
          alt: "NotiaAI Görsel Asistan",
        },
        {
          id: "feed",
          icon: <ImageIcon className="w-4 h-4" />,
          label: "Editoryal Akış",
          badge: "Görsel Hafıza",
          title: "Fotoğraflarınızı yaşayan bir anı dergisine dönüştürün.",
          description:
            "2 sütunlu akıcı Masonry akışı, Google Fotoğraflar tarzı akıllı tarih gruplamaları ve editoryal dergi zarafetinde anı kartlarıyla galeriniz anlam kazanır.",
          highlights: [
            "2 sütunlu dinamik Masonry grid akışı",
            "Tarih ve konuma göre otomatik gruplama",
            "Favoriler ve gizli anı filtreleri",
          ],
          image: "/assets/01_home_feed.png",
          alt: "Notia Editoryal Anı Akışı",
        },
      ],
    },
    en: {
      chip: "Core Features",
      title: "6 Essential Dimensions that Breathe Life into Memories.",
      subtitle:
        "Notia goes far beyond shooting photos; it transforms capturing, feeling, and rediscovering your life into an editorial craft.",
      pillars: [
        {
          id: "editor",
          icon: <Edit3 className="w-4 h-4" />,
          label: "Markdown Editor",
          badge: "Storytelling",
          title: "Transform your photos into literary journal pieces.",
          description:
            "Floating workspace toolbar, inline image drag-and-drop, full Markdown support, and live WYSIWYG editing. Record your reflections, thoughts, and tags with complete freedom.",
          highlights: [
            "Rich Markdown & WYSIWYG editing",
            "Inline paragraph photo placement",
            "Custom tag and category filtering",
          ],
          image: "/assets/04_markdown_editor.png",
          alt: "Notia Rich Markdown Editor",
        },
        {
          id: "map",
          icon: <MapPin className="w-4 h-4" />,
          label: "Interactive Map",
          badge: "Geographic Discovery",
          title: "Explore where your life happened on an interactive map.",
          description:
            "Automatic EXIF GPS decoding plots your journeys, cities, and road trips onto an interactive world atlas. Relive your travels city by city.",
          highlights: [
            "Automatic EXIF GPS decoding",
            "Clustered memory pins on world map",
            "Chronological travel routes",
          ],
          image: "/assets/02_interactive_map.png",
          alt: "Notia Interactive Map",
        },
        {
          id: "reader",
          icon: <BookOpen className="w-4 h-4" />,
          label: "Editorial Reader",
          badge: "Serenity & Stillness",
          title: "Relive your thoughts with literary dignity and warmth.",
          description:
            "Fraunces and Lora editorial typography turns your memories and thoughts into a serene, distraction-free reading experience.",
          highlights: [
            "Fraunces & Lora editorial typography",
            "Distraction-free full-screen reader",
            "Emotion-centered storytelling stream",
          ],
          image: "/assets/03_note_reader.png",
          alt: "Notia Editorial Reader",
        },
        {
          id: "people",
          icon: <Users className="w-4 h-4" />,
          label: "People & Bouquets",
          badge: "Loved Ones",
          title: "Gather memories shared with loved ones into dedicated circles.",
          description:
            "Tag companions in photos, build @People profiles, and explore dedicated timelines of your shared life moments across time.",
          highlights: [
            "@People tagging & dedicated profile hubs",
            "Bouquet galleries & curated thematic albums",
            "Person-based search and filtering",
          ],
          image: "/assets/05_people_memories.png",
          alt: "Notia People & Memory Circles",
        },
        {
          id: "ai",
          icon: <Sparkles className="w-4 h-4" />,
          label: "NotiaAI Companion",
          badge: "Multimodal AI",
          title: "An intelligent companion that understands photo emotions.",
          description:
            "Powered by Google Gemini 2.5/1.5 and Groq Llama 3.3 70B. Photo vision analysis, thoughtful writing prompts, and the daily 'Now Brief'.",
          highlights: [
            "Google Gemini 2.5/1.5 & Groq Llama 3.3 fallbacks",
            "Automatic photo emotion and scene detection",
            "Daily 'Now Brief' reflective digests",
          ],
          image: "/assets/06_notia_ai_assistant.png",
          alt: "NotiaAI Companion",
        },
        {
          id: "feed",
          icon: <ImageIcon className="w-4 h-4" />,
          label: "Editorial Stream",
          badge: "Visual Memory",
          title: "Transform your camera roll into an expressive journal.",
          description:
            "A 2-column fluid Masonry layout, Google Photos style date clusters, and rich story cards give timeless meaning to your everyday snapshots.",
          highlights: [
            "2-column dynamic Masonry feed",
            "Automatic date and location clustering",
            "Favorites and private memory filtering",
          ],
          image: "/assets/01_home_feed.png",
          alt: "Notia Editorial Feed",
        },
      ],
    },
  }[lang];

  const current = t.pillars[activeTab];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="features">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[var(--md-sys-color-tertiary-container)] text-[var(--md-sys-color-on-tertiary-container)] text-xs font-semibold">
          <Layers className="w-3.5 h-3.5" />
          <span>{t.chip}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--md-sys-color-on-surface)]">
          {t.title}
        </h2>
        <p className="text-base sm:text-lg text-[var(--md-sys-color-on-surface-variant)]">
          {t.subtitle}
        </p>
      </div>

      {/* Pill Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {t.pillars.map((pillar, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={pillar.id}
              onClick={() => setActiveTab(idx)}
              className={`h-11 px-4 sm:px-5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                isActive
                  ? "bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] shadow-md"
                  : "bg-m3-container text-[var(--md-sys-color-on-surface-variant)] hover:bg-m3-container-high"
              }`}
            >
              {pillar.icon}
              <span>{pillar.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Feature Showcase Container (PROPORTIONAL SMARTPHONE FRAME) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={springTransition}
          className="p-6 sm:p-12 rounded-[36px] bg-m3-container-low border border-[var(--md-sys-color-outline-variant)]/40 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-xl"
        >
          {/* Left: Text & Key Highlights */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <span className="px-3.5 py-1 rounded-full bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] text-xs font-semibold inline-block">
              {current.badge}
            </span>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--md-sys-color-on-surface)] leading-snug">
              {current.title}
            </h3>

            <p className="text-sm sm:text-base text-[var(--md-sys-color-on-surface-variant)] leading-relaxed font-normal">
              {current.description}
            </p>

            {/* Highlights List */}
            <div className="pt-3 space-y-2.5 border-t border-[var(--md-sys-color-outline-variant)]/20">
              {current.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-[var(--md-sys-color-on-surface)]">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone Frame at Real Smartphone Handheld Scale */}
          <div className="lg:col-span-6 flex justify-center drop-shadow-xl">
            <div className="w-[260px] sm:w-[290px] md:w-[310px] rounded-[44px] p-2.5 bg-m3-container-highest border-4 border-[var(--md-sys-color-outline-variant)]/40 shadow-xl">
              <div className="rounded-[34px] overflow-hidden bg-black border border-[var(--md-sys-color-outline-variant)]/20 aspect-[9/19.5]">
                <img
                  src={current.image}
                  alt={current.alt}
                  className="w-full h-full object-cover object-top block select-none pointer-events-none"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
