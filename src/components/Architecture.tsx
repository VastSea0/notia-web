import React from "react";
import { ShieldCheck, Sliders, FileText, Lock, Cpu } from "lucide-react";

interface ArchitectureProps {
  lang: "tr" | "en";
}

export default function Architecture({ lang }: ArchitectureProps) {
  const t = {
    tr: {
      chip: "Mimari ve Güvenlik",
      title: "Güvenilir, Zarif ve Bağımsız.",
      subtitle:
        "Notia sıradan bir galeri değil; mahremiyetinize saygılı, yüksek mühendislik eseri bir sığınaktır.",
      pillars: [
        {
          icon: <ShieldCheck className="w-6 h-6 text-[var(--md-sys-color-primary)]" />,
          title: "Sıfır Bilgi & Yerel Öncelik",
          description:
            "Fotoğraflarınız sunucularımıza asla yüklenmez. Cihazınızda kalır; Google Drive yedeklemesi açıldığında ise istemci taraflı AES-256 ile şifrelenir.",
          tag: "AES-256 E2EE",
        },
        {
          icon: <Sliders className="w-6 h-6 text-[var(--md-sys-color-primary)]" />,
          title: "Çift Tasarım Dili (Dual Engine)",
          description:
            "Google Material 3 Expressive (35 poligon şekil, yaylı uzamsal dinamikler) ile Apple iOS 26 Liquid Glass arayüzleri arasında ayarlardan tek dokunuşla geçiş yapın.",
          tag: "M3 Expressive & iOS 26",
        },
        {
          icon: <FileText className="w-6 h-6 text-[var(--md-sys-color-primary)]" />,
          title: "Baskıya Hazır Fotoğraf Kitapları",
          description:
            "Seyahatlerinizi veya özel anılarınızı yüksek çözünürlüklü, basılabilir PDF photobook olarak dışa aktarın. Dijital hatıralarınız kütüphanenize girsin.",
          tag: "PDF Photobook Export",
        },
        {
          icon: <Lock className="w-6 h-6 text-[var(--md-sys-color-primary)]" />,
          title: "Biyometrik Donanım Güvenliği",
          description:
            "Parmak izi ve Face ID doğrulaması ile anı defterinizi meraklı gözlerden tamamen gizleyin. Secure Enclave / Android KeyStore donanım güvencesi.",
          tag: "Biometric Hardware Lock",
        },
      ],
    },
    en: {
      chip: "Architecture & Security",
      title: "Private, Elegant, and Sovereign.",
      subtitle:
        "Notia is not a typical camera roll; it is an engineered sanctuary that respects human sovereignty and digital craft.",
      pillars: [
        {
          icon: <ShieldCheck className="w-6 h-6 text-[var(--md-sys-color-primary)]" />,
          title: "Zero-Knowledge & Local-First",
          description:
            "Your photos are never harvested on remote servers. Data stays on your device; Google Drive cloud backups are client-side encrypted with AES-256.",
          tag: "AES-256 E2EE",
        },
        {
          icon: <Sliders className="w-6 h-6 text-[var(--md-sys-color-primary)]" />,
          title: "Dual Interface Engine",
          description:
            "Switch with one tap between Google Material 3 Expressive (35 polygon shapes, spring dynamics) and Apple iOS 26 Liquid Glass native experience.",
          tag: "M3 Expressive & iOS 26",
        },
        {
          icon: <FileText className="w-6 h-6 text-[var(--md-sys-color-primary)]" />,
          title: "Print-Ready Photobooks",
          description:
            "Export travel albums and intimate logs into high-resolution, print-ready PDF booklets. Bring digital moments into physical reality.",
          tag: "PDF Photobook Export",
        },
        {
          icon: <Lock className="w-6 h-6 text-[var(--md-sys-color-primary)]" />,
          title: "Biometric Hardware Security",
          description:
            "Lock your memory journal with biometric authentication backed by operating system hardware enclaves (Apple Secure Enclave / Android KeyStore).",
          tag: "Biometric Hardware Lock",
        },
      ],
    },
  }[lang];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="architecture">
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] text-xs font-semibold">
          <Cpu className="w-3.5 h-3.5 text-[var(--md-sys-color-primary)]" />
          <span>{t.chip}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--md-sys-color-on-surface)]">
          {t.title}
        </h2>
        <p className="text-base sm:text-lg text-[var(--md-sys-color-on-surface-variant)]">
          {t.subtitle}
        </p>
      </div>

      {/* 4 Solid M3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {t.pillars.map((item, idx) => (
          <div
            key={idx}
            className="p-8 rounded-[32px] bg-m3-container border border-[var(--md-sys-color-outline-variant)]/40 space-y-4 shadow-md transition-all hover:bg-m3-container-high text-left"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-[var(--md-sys-color-primary-container)]/70 flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-m3-container-lowest text-[var(--md-sys-color-on-surface-variant)] border border-[var(--md-sys-color-outline-variant)]/30">
                {item.tag}
              </span>
            </div>
            <h3 className="text-xl font-bold text-[var(--md-sys-color-on-surface)]">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-[var(--md-sys-color-on-surface-variant)] leading-relaxed font-normal">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
