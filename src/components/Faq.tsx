import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FaqProps {
  lang: "tr" | "en";
}

export default function Faq({ lang }: FaqProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const t = {
    tr: {
      chip: "Sıkça Sorulan Sorular",
      title: "Aklınıza Takılan Sorular",
      items: [
        {
          q: "Notia nedir ve klasik fotoğraf galerilerinden farkı nedir?",
          a: "Klasik galeriler dosyaları depolayan pasif listelerdir. Notia ise fotoğraflarınıza duygusal Markdown hikâyeleri, otomatik EXIF harita rotaları, kişi etiketleri, editoryal okuma modu ve çok modlu yapay zekâ analizi ekleyerek kameranızı yaşayan bir anı kitabına dönüştürür.",
        },
        {
          q: "Fotoğraflarım veya anılarım sunucularınıza yüklenir mi?",
          a: "Kesinlikle hayır. Notia katı bir yerel öncelikli (Local-First) felsefeyle çalışır. Fotoğraflarınız sadece cihazınızda kalır. Google Drive yedeklemesi etkinleştirildiğinde ise veriler sunucuya uğramaksızın cihazınızda AES-256 ile şifrelenir (Zero-Knowledge).",
        },
        {
          q: "Ömür Boyu (Lifetime) lisansı tam olarak ne sağlar?",
          a: "Tek bir defa ₺799.99 ödeyerek tüm Pro özelliklerine ve gelecekteki tüm güncellemelere kalıcı olarak sahip olursunuz. Hiçbir zaman tekrar eden aylık veya yıllık abonelik ödemezsiniz.",
        },
        {
          q: "İnternet bağlantım olmadan Notia'yı kullanabilir miyim?",
          a: "Evet. Fotoğraf ekleme, Markdown not yazma, albüm oluşturma, harita inceleme ve biyometrik güvenlik özellikleri çevrimdışı olarak %100 çalışır.",
        },
        {
          q: "NotiaAI hangi yapay zekâ modelleriyle çalışır?",
          a: "NotiaAI, görsel ve metin analizi için Google Gemini 2.5/1.5 Flash modellerini birincil motor olarak kullanır; kesintisiz hız için Groq Llama 3.3 70B yedek motoruyla desteklenir.",
        },
        {
          q: "Aboneliğimi dilediğim zaman iptal edebilir miyim?",
          a: "Evet. Satın alımlar Google Play Store veya Apple App Store altyapısıyla yürütüldüğü için hesap ayarlarınızdan dilediğiniz an tek tıkla iptal edebilirsiniz.",
        },
      ],
    },
    en: {
      chip: "Frequently Asked Questions",
      title: "Everything You Need to Know",
      items: [
        {
          q: "What is Notia and how does it differ from standard galleries?",
          a: "Standard galleries are passive file dumps. Notia enriches your photos with Markdown storytelling, emotional context, map journeys, and multimodal AI analysis, turning your camera roll into an expressive, living book.",
        },
        {
          q: "Are my photos or journals uploaded to external servers?",
          a: "No. Notia operates on a strict local-first architecture. Your photos remain on your device. When enabling Google Drive backups, data is client-side encrypted with AES-256 before upload (Zero-Knowledge).",
        },
        {
          q: "What does the Lifetime license include?",
          a: "A single ₺799.99 purchase grants permanent access to all Pro features and future updates forever. You will never be charged recurring fees.",
        },
        {
          q: "Can I use Notia completely offline?",
          a: "Yes. Adding photos, writing Markdown notes, creating albums, reviewing maps, and biometric security work 100% offline without an active internet connection.",
        },
        {
          q: "Which AI models power NotiaAI?",
          a: "NotiaAI uses Google Gemini 2.5/1.5 Flash as its primary multimodal reasoning engine, backed by Groq Llama 3.3 70B for low-latency fallbacks.",
        },
        {
          q: "Can I cancel my subscription at any time?",
          a: "Yes. All purchases are handled through Google Play Store or Apple App Store, allowing one-tap cancellation anytime from your account settings.",
        },
      ],
    },
  }[lang];

  return (
    <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" id="faq">
      <div className="text-center mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] text-xs font-semibold">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{t.chip}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[var(--md-sys-color-on-surface)]">
          {t.title}
        </h2>
      </div>

      <div className="space-y-3">
        {t.items.map((item, idx) => {
          const isOpen = activeFaq === idx;
          return (
            <div
              key={idx}
              className="rounded-[24px] bg-m3-container-low border border-[var(--md-sys-color-outline-variant)]/40 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setActiveFaq(isOpen ? null : idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="font-bold text-sm sm:text-base text-[var(--md-sys-color-on-surface)]">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[var(--md-sys-color-on-surface-variant)] transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 text-[var(--md-sys-color-primary)]" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed border-t border-[var(--md-sys-color-outline-variant)]/20 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
