import React from "react";
import { Sparkles, Check, Globe } from "lucide-react";

interface PricingProps {
  lang: "tr" | "en";
  onOpenDownload: () => void;
}

export default function Pricing({ lang, onOpenDownload }: PricingProps) {
  const t = {
    tr: {
      chip: "Fiyatlandırma",
      title: "Şeffaf, Adil ve Esnek Paketler",
      subtitle:
        "Notia Android'de ücretsiz olarak kullanılabilir. Pro kullanıcılar ayrıca masaüstü Web sürümüne ve sınırsız yapay zekâya erişir.",
      tiers: [
        {
          name: "Ücretsiz (Free)",
          price: "₺0",
          period: "sonsuza dek",
          badge: null,
          description: "Android cihazında anılarını düzenlemek ve fotoğraflarını notlamak isteyen herkes için başlangıç.",
          features: [
            "Android (Google Play) Erişimi",
            "Fotoğraf Notlama & Zengin Markdown",
            "İnteraktif Fotoğraf Haritası & EXIF",
            "Kişi Etiketleme & Albüm Galerisi",
            "Biyometrik Kilit & Yerel AES-256",
            "20 NotiaAI İsteği / Gün",
          ],
          button: "Google Play'den Başla",
          popular: false,
        },
        {
          name: "Pro Aylık",
          price: "₺49.99",
          period: "/ ay",
          badge: "Esnek",
          description: "Aylık esnek ödeme ile Web sürümü erişimi, sınırsız yapay zekâ ve bulut şifreleme gücü.",
          features: [
            "Notia Web Sürümüne Tam Erişim",
            "Sınırsız NotiaAI İstekleri & Sohbet",
            "Google Drive AES-256 Bulut Yedekleme",
            "Tamamen Reklamsız Deneyim",
            "PDF Fotoğraf Kitabı Dışa Aktarma",
            "Tüm Ücretsiz özellikler",
          ],
          button: "Aylık Abone Ol",
          popular: false,
        },
        {
          name: "Pro Yıllık",
          price: "₺34.99",
          period: "/ ay • Yıllık ₺419.99",
          badge: "7 Gün Ücretsiz Deneme • %30 Tasarruf",
          description: "En popüler tercih. 7 gün risksiz deneyin, mobil ve Web sürümünde anılarınızı sınırsızca yaşatın.",
          features: [
            "Notia Web Sürümüne Tam Erişim",
            "Pro Aylık'taki TÜM özellikler",
            "7 gün boyunca tamamen ücretsiz deneme",
            "Yıllık %30 indirim avantajı",
            "Öncelikli Geliştirici Desteği",
          ],
          button: "7 Gün Ücretsiz Dene",
          popular: true,
        },
        {
          name: "Ömür Boyu (Lifetime)",
          price: "₺799.99",
          period: "tek seferlik ödeme",
          badge: "Sıfır Abonelik",
          description: "Tek bir ödeme yapın; Android ve Web sürümüne, tüm Pro özelliklere ve gelecekteki güncellemelere ömür boyu sahip olun.",
          features: [
            "Notia Web Sürümüne Ömür Boyu Kalıcı Erişim",
            "Tüm mevcut ve gelecekteki Pro özellikler",
            "Sıfır aylık veya yıllık abonelik maliyeti",
            "Kalıcı lisans anahtarı güvencesi",
            "Tüm platform güncellemeleri dahil",
            "VIP Destek Hattı",
          ],
          button: "Ömür Boyu Lisans Al",
          popular: false,
        },
      ],
      tableTitle: "Detaylı Özellik Karşılaştırması",
      tableFeatures: [
        { name: "Android (Google Play) Erişimi", free: true, monthly: true, annual: true, lifetime: true },
        { name: "Notia Web Sürümüne Erişim (Masaüstü)", free: false, monthly: true, annual: true, lifetime: true },
        { name: "Fotoğraf Notlama & Zengin Markdown", free: true, monthly: true, annual: true, lifetime: true },
        { name: "İnteraktif Fotoğraf Haritası & EXIF", free: true, monthly: true, annual: true, lifetime: true },
        { name: "Kişi Etiketleme & Albüm Galerisi", free: true, monthly: true, annual: true, lifetime: true },
        { name: "Biyometrik Kilit & AES-256 Şifreleme", free: true, monthly: true, annual: true, lifetime: true },
        { name: "NotiaAI Görsel Asistan & Sohbet", free: "20 istek / gün", monthly: "Sınırsız", annual: "Sınırsız", lifetime: "Sınırsız" },
        { name: "Google Drive AES-256 E2EE Yedekleme", free: false, monthly: true, annual: true, lifetime: true },
        { name: "PDF Fotoğraf Kitabı Dışa Aktarma", free: false, monthly: true, annual: true, lifetime: true },
        { name: "Reklamsız Deneyim", free: false, monthly: true, annual: true, lifetime: true },
      ],
    },
    en: {
      chip: "Pricing",
      title: "Transparent, Fair, and Flexible Plans",
      subtitle:
        "Notia is free to use on Android. Pro subscribers unlock full access to the desktop Web version and unlimited AI.",
      tiers: [
        {
          name: "Free",
          price: "₺0",
          period: "forever",
          badge: null,
          description: "Start organizing your photos and memories on your Android device.",
          features: [
            "Android (Google Play) Access",
            "Photo Journaling & Rich Markdown",
            "Interactive Photo Map & EXIF",
            "People Tagging & Album Gallery",
            "Biometric Lock & Local AES-256",
            "20 NotiaAI Requests / Day",
          ],
          button: "Start on Google Play",
          popular: false,
        },
        {
          name: "Pro Monthly",
          price: "₺49.99",
          period: "/ month",
          badge: "Flexible",
          description: "Flexible monthly billing with Web version access, unlimited AI, and encrypted sync.",
          features: [
            "Full Access to Notia Web Version",
            "Unlimited NotiaAI Requests & Chat",
            "Google Drive AES-256 Cloud Backup",
            "100% Ad-Free Experience",
            "PDF Photobook Export",
            "All Free features",
          ],
          button: "Subscribe Monthly",
          popular: false,
        },
        {
          name: "Pro Annual",
          price: "₺34.99",
          period: "/ mo • Billed ₺419.99/yr",
          badge: "7-Day Free Trial • Save 30%",
          description: "Most popular choice. Enjoy a 7-day risk-free trial on both Android and Web without limits.",
          features: [
            "Full Access to Notia Web Version",
            "EVERY feature in Pro Monthly",
            "7 days completely free trial",
            "30% annual savings",
            "Priority Developer Support",
          ],
          button: "Try 7 Days Free",
          popular: true,
        },
        {
          name: "Lifetime License",
          price: "₺799.99",
          period: "one-time payment",
          badge: "Zero Subscription",
          description: "Pay once; own Android and Web access, all Pro features, and all future updates forever.",
          features: [
            "Lifetime Access to Notia Web Version",
            "All current and future Pro features",
            "Zero monthly or yearly subscription fees",
            "Permanent license guarantee",
            "All future platform updates included",
            "VIP Support Line",
          ],
          button: "Get Lifetime License",
          popular: false,
        },
      ],
      tableTitle: "Detailed Feature Comparison",
      tableFeatures: [
        { name: "Android (Google Play) Access", free: true, monthly: true, annual: true, lifetime: true },
        { name: "Notia Web Version Access (Desktop)", free: false, monthly: true, annual: true, lifetime: true },
        { name: "Photo Journaling & Rich Markdown", free: true, monthly: true, annual: true, lifetime: true },
        { name: "Interactive Photo Map & EXIF", free: true, monthly: true, annual: true, lifetime: true },
        { name: "People Tagging & Album Gallery", free: true, monthly: true, annual: true, lifetime: true },
        { name: "Biometric Lock & AES-256 Encryption", free: true, monthly: true, annual: true, lifetime: true },
        { name: "NotiaAI Visual Assistant & Chat", free: "20 req / day", monthly: "Unlimited", annual: "Unlimited", lifetime: "Unlimited" },
        { name: "Google Drive AES-256 E2EE Backup", free: false, monthly: true, annual: true, lifetime: true },
        { name: "PDF Photobook Export", free: false, monthly: true, annual: true, lifetime: true },
        { name: "Ad-Free Experience", free: false, monthly: true, annual: true, lifetime: true },
      ],
    },
  }[lang];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="pricing">
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.chip}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--md-sys-color-on-surface)]">
          {t.title}
        </h2>
        <p className="text-base sm:text-lg text-[var(--md-sys-color-on-surface-variant)]">
          {t.subtitle}
        </p>
      </div>

      {/* 4 Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.tiers.map((tier, idx) => (
          <div
            key={idx}
            className={`p-6 sm:p-7 rounded-[32px] flex flex-col justify-between transition-all ${
              tier.popular
                ? "bg-m3-container-high border-2 border-[var(--md-sys-color-primary)] shadow-xl relative"
                : "bg-m3-container-low border border-[var(--md-sys-color-outline-variant)]/40 shadow-md hover:bg-m3-container"
            }`}
          >
            <div className="space-y-4 text-left">
              {tier.popular && (
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] text-[11px] font-bold tracking-wide uppercase">
                  {tier.badge}
                </span>
              )}
              {tier.badge && !tier.popular && (
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] text-[11px] font-bold tracking-wide">
                  {tier.badge}
                </span>
              )}

              <div>
                <h3 className="text-lg font-bold text-[var(--md-sys-color-on-surface)]">
                  {tier.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-[var(--md-sys-color-on-surface)]">
                    {tier.price}
                  </span>
                  <span className="text-xs text-[var(--md-sys-color-on-surface-variant)]">
                    {tier.period}
                  </span>
                </div>
              </div>

              <p className="text-xs text-[var(--md-sys-color-on-surface-variant)] leading-relaxed font-normal">
                {tier.description}
              </p>

              <div className="pt-2 border-t border-[var(--md-sys-color-outline-variant)]/20 space-y-2.5">
                {tier.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs text-[var(--md-sys-color-on-surface)]">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className={feat.includes("Web") ? "font-bold text-[var(--md-sys-color-primary)]" : ""}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[var(--md-sys-color-outline-variant)]/20">
              <button
                onClick={onOpenDownload}
                className={`w-full py-3 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  tier.popular
                    ? "bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] shadow-md hover:shadow-lg"
                    : "bg-m3-container text-[var(--md-sys-color-on-surface)] hover:bg-m3-container-high border border-[var(--md-sys-color-outline-variant)]/40"
                }`}
              >
                {tier.button}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Feature Comparison Table */}
      <div className="mt-14 p-6 sm:p-8 rounded-[32px] bg-m3-container-low border border-[var(--md-sys-color-outline-variant)]/40 shadow-lg">
        <h3 className="text-xl font-bold text-[var(--md-sys-color-on-surface)] text-center mb-6">
          {t.tableTitle}
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[var(--md-sys-color-outline-variant)]/30 text-[var(--md-sys-color-on-surface-variant)]">
                <th className="py-3 px-4 font-semibold">{lang === "tr" ? "Özellik" : "Feature"}</th>
                <th className="py-3 px-3 font-semibold text-center">{lang === "tr" ? "Ücretsiz" : "Free"}</th>
                <th className="py-3 px-3 font-semibold text-center">{lang === "tr" ? "Pro Aylık" : "Monthly"}</th>
                <th className="py-3 px-3 font-semibold text-center text-[var(--md-sys-color-primary)] font-bold">{lang === "tr" ? "Pro Yıllık" : "Annual"}</th>
                <th className="py-3 px-3 font-semibold text-center">{lang === "tr" ? "Ömür Boyu" : "Lifetime"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--md-sys-color-outline-variant)]/20">
              {t.tableFeatures.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-m3-container/50 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-[var(--md-sys-color-on-surface)]">
                    {row.name}
                  </td>
                  <td className="py-3.5 px-3 text-center text-[var(--md-sys-color-on-surface-variant)]">
                    {typeof row.free === "boolean" ? (
                      row.free ? <Check className="w-4 h-4 text-emerald-500 mx-auto" /> : "—"
                    ) : (
                      row.free
                    )}
                  </td>
                  <td className="py-3.5 px-3 text-center text-[var(--md-sys-color-on-surface-variant)]">
                    {typeof row.monthly === "boolean" ? (
                      row.monthly ? <Check className="w-4 h-4 text-emerald-500 mx-auto" /> : "—"
                    ) : (
                      row.monthly
                    )}
                  </td>
                  <td className="py-3.5 px-3 text-center font-semibold text-[var(--md-sys-color-primary)]">
                    {typeof row.annual === "boolean" ? (
                      row.annual ? <Check className="w-4 h-4 text-[var(--md-sys-color-primary)] mx-auto" /> : "—"
                    ) : (
                      row.annual
                    )}
                  </td>
                  <td className="py-3.5 px-3 text-center text-[var(--md-sys-color-on-surface-variant)]">
                    {typeof row.lifetime === "boolean" ? (
                      row.lifetime ? <Check className="w-4 h-4 text-emerald-500 mx-auto" /> : "—"
                    ) : (
                      row.lifetime
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
