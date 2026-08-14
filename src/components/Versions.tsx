import React, { useState } from 'react';
import { 
  Sparkles, 
  Smartphone,
  Download,
  Calendar,
  CheckCircle,
  Clock,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Copy,
  FileText,
  ShieldCheck,
  Globe,
  Lock,
  Layers,
  Zap
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const currentVersion = "v1.3.0 (Build 83)";
const lastUpdated = "14 Ağustos 2026";

// Changelog data parsed from CHANGELOG.md & release notes
const changelogVersions = [
  {
    version: "v1.3.0 (Build 83)",
    title: "Güvenlik, Gelir Modeli Bütünlüğü & GDPR Uyumluluğu",
    date: "14 Ağustos 2026",
    description: "Bu sürüm, sunucu taraflı makbuz doğrulama, AI bonus kredi koruması, ömür boyu Pro lisans muhafazası ve App Store / GDPR gereksinimlerine tam uyumlu kalıcı hesap silme mekanizmasını sisteme kazandırır.",
    features: [
      "🔒 iOS StoreKit 2 Doğrulaması: Firebase Cloud Functions (verifyAndGrantPurchase) üzerinde Apple StoreKit 2 JWS imzalı işlem çözümlemesi ve makbuz doğrulaması devreye alındı.",
      "🛡️ AI Kredi Açığı Kapatıldı: Eşitleme sırasında tüketilen bonus kredilerin sıfırlanması/çoğaltılması açığı 'consumedBonusCredits' takibiyle tamamen kapatıldı.",
      "💎 Ömür Boyu Lisans Koruması: Otomatik abonelik yenileme denetleyicisinde ömür boyu Pro (isLifetime) ve iOS satın alımları muhafaza edildi.",
      "⏱️ Misafir AI Kota Koruması: Giriş yapmamış kullanıcılar için yerel kalıcı kota kontrolü getirilerek limit aşım bypass'ları önlendi.",
      "🗑️ Kalıcı Hesap Silme (GDPR): Profil sayfasından onaylı ve güvenli hesap ve bulut veri silme akışı eklendi."
    ],
    improvements: [
      "🔄 Yerel SQLite ve Firestore veri eşitleme döngüsünde bellek tüketimi düşürüldü.",
      "📱 Google Play Store v1.3.0 sertifikasyonu ve güvenli paket imzaları güncellendi.",
      "🌍 Türkçe ve İngilizce dil paketleri yeni güvenlik ve silme diyaloglarıyla tamamlandı."
    ],
    bugFixes: [
      "✅ Satın alma sonrası tetiklenen senkronizasyon çakışması giderildi.",
      "✅ Misafir modunda AI sohbet oturumunun beklenmedik sıfırlanması düzeltildi.",
      "✅ Geniş ekranda alt modal sayfaların taşma (overflow) hatası giderildi."
    ]
  },
  {
    version: "v1.2.1 (Build 82)",
    title: "Geniş Ekran / Web Ergonomisi & Ödeme Sertleştirme",
    date: "8 Ağustos 2026",
    description: "Tablet, masaüstü ve Web platformları için ferah düzen sınırlandırmaları eklendi; Google Play satın alma token'larında replay attack koruması sağlandı.",
    features: [
      "🌐 Geniş Ekran & Tablet Ergonomisi: Not düzenleyici, okuyucu, NotiaAI sohbet ekranı ve formlar için ConstrainedBox sınırlandırmaları uyarlandı.",
      "💳 Replay Attack Koruması: Google Play satın alma token'larının (purchaseToken) mükerrer kullanımını engelleyen sunucu taraflı audit log sistemi devreye alındı.",
      "🔒 Korumalı Firestore Alanları: isPro, isLifetime, bonusAiCredits alanları istemci tarafı manipülasyonlarına karşı korundu.",
      "⚡ Atomik İşlemler: Kredi yükleme ve Pro statü güncellemeleri batch ve transaction güvencesine alındı."
    ],
    improvements: [
      "📐 Responsive Web SPA rotalama ve Vercel optimizasyonları tamamlandı.",
      "🎨 NotiaAI sohbet balonlarında font ölçeklemesi ve Markdown başlık hiyerarşisi netleştirildi."
    ],
    bugFixes: [
      "✅ Tablet yatay modda klavye açıldığında oluşan viewport kayması düzeltildi.",
      "✅ Firestore kural ihlallerinde sessiz başarısızlık yerine açıklayıcı kullanıcı bildirimi eklendi."
    ]
  },
  {
    version: "v1.0.9 (Pre-Beta)",
    title: "Biyometrik Kimlik Doğrulama & NotiaAI Markdown Desteği",
    date: "12 Ağustos 2025",
    description: "Parmak izi / biyometrik kilit koruması, Markdown formatlı not alma ve AI sohbet geçmişi yetenekleri eklendi.",
    features: [
      "🔐 Biyometrik Doğrulama: Parmak izi ve yüz tanıma ile galeri kilidi desteği.",
      "🔑 Şifreli Alan: Özel not ve albümleri parola ile kilitleme.",
      "🤖 NotiaAI Görevleri: 'Yapılacaklar Listesine Dönüştür' ve 'Fotoğrafı Hikayeleştir' komutları.",
      "📝 Zengin Markdown Not Editörü: Kalın, italik, liste ve etiket destekli not oluşturucu."
    ],
    improvements: [
      "🔄 Asenkron not kaydetme akışında hata toleransı artırıldı.",
      "📱 Açılış ekranına (splash) sürüm ve derleme numarası eklendi."
    ],
    bugFixes: [
      "✅ Resimsiz not oluşturma sırasında oluşan null referans hatası düzeltildi.",
      "✅ Tema değişimi sırasında alt sayfalarda oluşan renk tutarsızlığı giderildi."
    ]
  }
];

const upcomingFeatures = [
  {
    icon: Globe,
    title: "Tam Özellikli Notia Web Uygulaması",
    description: "Fotoğraf albümlerinize ve yapay zeka notlarınıza tarayıcınızdan doğrudan erişebileceğiniz Web SPA sürümü."
  },
  {
    icon: Layers,
    title: "Gelişmiş AI Fotoğraf Analizi & Yüz Tanıma",
    description: "Fotoğraflardaki nesneleri, manzaraları ve sevdiklerinizi otomatik gruplayan yerel yapay zeka sınıflandırması."
  },
  {
    icon: Zap,
    title: "Uçtan Uca Şifreli Bulut Yedekleme",
    description: "Tüm fotoğraf notlarınızın sıfır bilgi (Zero-Knowledge) protokolüyle kişisel bulutunuzda yedeklenmesi."
  },
  {
    icon: Sparkles,
    title: "NotiaAI Sesli Anı Kaydedici",
    description: "Fotoğraf çekerken sesinizi dinleyip otomatik hikaye metnine ve günlüğe dönüştüren sesli asistan."
  }
];

const ChangelogVersion = ({ versionData }: { versionData: typeof changelogVersions[0] }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden mb-6 transition-all">
      <div 
        className="p-6 cursor-pointer hover:bg-slate-50/60 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-3">
              <span className="text-xl font-bold text-slate-900">{versionData.version}</span>
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {versionData.title}
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed pt-1">
              {versionData.description}
            </p>
          </div>
          <div className="flex items-center space-x-3 text-sm text-slate-500 flex-shrink-0">
            <Calendar className="h-4 w-4 text-slate-400" />
            <span>{versionData.date}</span>
            {isOpen ? <ChevronUp className="h-5 w-5 text-slate-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-5">
          {versionData.features && versionData.features.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-orange-700 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                Önemli Yenilikler
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                {versionData.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {versionData.improvements && versionData.improvements.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-amber-500" />
                İyileştirmeler & Optimizasyon
              </h4>
              <ul className="space-y-1.5 text-sm text-slate-600">
                {versionData.improvements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
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
  const [showFullChangelog, setShowFullChangelog] = useState(true);
  const [copiedVersion, setCopiedVersion] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedVersion(id);
    setTimeout(() => setCopiedVersion(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Header */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-white via-orange-50/30 to-slate-50 border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-orange-100/80 border border-orange-200 px-3.5 py-1 rounded-full text-orange-800 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5 text-orange-600" />
            <span>Mevcut Sürüm: {currentVersion}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Sürüm Geçmişi & Gelecek Planları
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Notia'nın gelişim yolculuğunu, güvenlik güncellemelerini ve planlanan yeni nesil özelliklerini buradan takip edin.
          </p>
        </div>
      </section>

      {/* Platform Availability */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Platform Desteği</h2>
            <p className="text-sm text-slate-600">Notia'nın aktif ve hazırlanan platform sürümleri</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Android */}
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center mb-3 text-white">
                  <Smartphone className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Android</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  Google Play Store üzerinden veya doğrudan APK dosyasıyla hemen yükleyin.
                </p>
              </div>
              <div>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full inline-block">
                  Google Play'de Yayında ✓
                </span>
              </div>
            </div>

            {/* Web */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center mb-3 text-white">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Web SPA</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  Tablet ve masaüstü tarayıcılardan anında erişim sağlayan responsive web sürümü.
                </p>
              </div>
              <div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full inline-block">
                  Web & Portfolyo Aktif ✓
                </span>
              </div>
            </div>

            {/* iOS */}
            <div className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center mb-3 text-white">
                  <Smartphone className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">iOS / Apple</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  StoreKit 2 satın alma ve GDPR uyumluluğu tamamlandı; App Store onayı aşamasında.
                </p>
              </div>
              <div>
                <span className="bg-slate-200 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-full inline-block">
                  StoreKit 2 Hazır ⏳
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Changelog Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Detaylı Sürüm Günlüğü (Changelog)
            </h2>
            <p className="text-sm text-slate-600">
              Son güncelleme: {lastUpdated} • En güncel: {currentVersion}
            </p>
          </div>

          <div className="space-y-4">
            {changelogVersions.map((ver, idx) => (
              <ChangelogVersion key={idx} versionData={ver} />
            ))}
          </div>

          <div className="text-center pt-8">
            <a
              href="https://github.com/VastSea0/notia/blob/main/CHANGELOG.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl font-medium text-xs transition-all shadow-sm"
            >
              <ExternalLink className="h-4 w-4" />
              <span>GitHub'da Tüm Değişiklik Günlüğünü Gör</span>
            </a>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-14 bg-white border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Yol Haritası & Yakındaki Özellikler
            </h2>
            <p className="text-sm text-slate-600">
              Notia'nın gelecek sürümleri için geliştirilen heyecan verici yenilikler.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 shadow-sm relative">
                  <div className="absolute top-4 right-4 bg-orange-100 text-orange-800 text-[11px] px-2.5 py-0.5 rounded-full font-semibold">
                    Yakında
                  </div>
                  <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center mb-3 text-white">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{feat.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{feat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Versions;
