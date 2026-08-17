import React, { useState } from 'react';
import { 
  Sparkles, 
  Smartphone, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  CheckCircle,
  Zap,
  ShieldCheck,
  Globe
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const currentVersion = "v1.3.3 (Build 86)";

const changelogVersions = [
  {
    version: "v1.3.3 (Build 86)",
    title: "Performans, Kararlılık & SemVer Güncelleyici İyileştirmeleri",
    date: "16 Ağustos 2026",
    description: "Sürüm denetleyiciye SemVer karşılaştırması entegre edildi, albüm ve kişi senkronizasyonunda çakışma yönetimi güçlendirildi.",
    features: [
      "Monotonik Senkronizasyon: Albüm, kişi ve özel etiket metaverileri için dinamik zaman damgalı çakışma çözümleme altyapısı.",
      "UUID Not Tanımlayıcıları: Kırılgan dosya yolu referansları yerine kalıcı, değişmez UUID (note_{uuid}) mimarisine geçildi.",
      "Google Drive Anahtar Kurtarma: AES-256 anahtar türetiminde Google Hesap ID entegrasyonu ve çoklu anahtar kurtarma desteği.",
      "Akıllı Sürüm Kontrolü: UpdaterService'e SemVer algoritması eklenerek geliştirici ve yeni sürümlerde gereksiz bildirimlerin önüne geçildi."
    ],
    improvements: [
      "SQLite ve bellek yönetimi optimize edildi, fotoğraf geçiş akıcılığı artırıldı.",
      "Giriş akışında mükerrer sayfa yığını (stacking) temizlendi.",
      "ARB yerelleştirme dosyaları yeni güvenlik ve profil diyaloglarıyla zenginleştirildi."
    ]
  },
  {
    version: "v1.3.0 (Build 83)",
    title: "Güvenlik, Gelir Modeli Bütünlüğü & GDPR / App Store Uyumluluğu",
    date: "14 Ağustos 2026",
    description: "Sunucu taraflı makbuz doğrulama, AI bonus kredi koruması, ömür boyu Pro lisans muhafazası ve App Store 5.1.1(v) uyumlu hesap silme akışı devreye alındı.",
    features: [
      "iOS StoreKit 2 Doğrulaması: Firebase Cloud Functions üzerinde Apple StoreKit 2 JWS işlem doğrulaması.",
      "AI Kredi Açığı Kapatıldı: Eşitleme sırasında bonus kredilerin suistimal edilmesini önleyen consumedBonusCredits mekanizması.",
      "Ömür Boyu Lisans Koruması: Abonelik yenileme denetleyicisinde ömür boyu Pro ve iOS alımları koruma altına alındı.",
      "Kalıcı Hesap Silme: Profil sayfasından onaylı ve güvenli hesap ve bulut veri silme akışı eklendi."
    ],
    improvements: [
      "Yerel SQLite ve Firestore veri eşitleme döngüsünde bellek tüketimi düşürüldü.",
      "Google Play Store v1.3.0 sertifikasyonu ve güvenli paket imzaları güncellendi."
    ]
  },
  {
    version: "v1.2.1 (Build 82)",
    title: "Geniş Ekran / Web Ergonomisi & Ödeme Sertleştirme",
    date: "8 Ağustos 2026",
    description: "Tablet, masaüstü ve Web platformları için ferah düzen sınırlandırmaları eklendi; Google Play satın alma token'larında replay attack koruması sağlandı.",
    features: [
      "Geniş Ekran & Tablet Ergonomisi: Not düzenleyici, okuyucu ve AI sohbet ekranı için ConstrainedBox sınırlandırmaları.",
      "Replay Attack Koruması: Google Play purchaseToken mükerrer kullanımını engelleyen sunucu taraflı audit log sistemi.",
      "Korumalı Firestore Alanları: isPro, isLifetime, bonusAiCredits alanları istemci manipülasyonuna kapatıldı."
    ],
    improvements: [
      "Responsive Web SPA rotalama ve Vercel optimizasyonları tamamlandı."
    ]
  }
];

const ChangelogVersion = ({ versionData }: { versionData: typeof changelogVersions[0] }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden mb-6 transition-all">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-6 sm:p-8 cursor-pointer hover:bg-slate-50/80 flex items-start justify-between gap-4 select-none"
      >
        <div className="space-y-1.5">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="font-extrabold text-lg text-slate-900">{versionData.version}</span>
            <span className="text-xs bg-orange-100 text-orange-800 font-semibold px-2.5 py-0.5 rounded-full">
              {versionData.date}
            </span>
          </div>
          <h3 className="text-base font-bold text-slate-800">{versionData.title}</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{versionData.description}</p>
        </div>

        <button className="text-slate-400 hover:text-slate-600 p-1 mt-1">
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-slate-100 space-y-4 text-xs sm:text-sm">
          {versionData.features && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5" />
                Özellikler & Güvenlik
              </h4>
              <ul className="space-y-1.5 text-slate-700 pl-2">
                {versionData.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {versionData.improvements && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5" />
                İyileştirmeler
              </h4>
              <ul className="space-y-1.5 text-slate-600 pl-2">
                {versionData.improvements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Versions = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-orange-600" />
            <span>Mevcut: {currentVersion}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Sürüm Geçmişi & Değişiklikler
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Notia'nın gelişim sürecini, eklenen yeni özellikleri ve güvenlik güncellemelerini buradan inceleyin.
          </p>
        </div>

        {/* Versions List */}
        <div className="space-y-4">
          {changelogVersions.map((ver, idx) => (
            <ChangelogVersion key={idx} versionData={ver} />
          ))}
        </div>

        {/* GitHub link */}
        <div className="text-center pt-4">
          <a
            href="https://github.com/VastSea0/notia/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-5 py-2.5 rounded-full transition-colors shadow-xs"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>GitHub'da Tüm CHANGELOG.md'yi Görüntüle</span>
          </a>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Versions;
