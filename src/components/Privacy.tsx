import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Shield, 
  Lock, 
  UserCheck, 
  Smartphone, 
  Sparkles, 
  Server, 
  CreditCard, 
  Trash2, 
  Fingerprint, 
  Globe 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Privacy = () => {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full space-y-12">
        
        {/* Document Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 border border-orange-100 flex items-center justify-center">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {lang === 'tr' ? 'Gizlilik & Veri Güvenliği Politikası' : 'Privacy & Data Protection Policy'}
                </h1>
                <p className="text-xs text-slate-500 mt-0.5">
                  {lang === 'tr' ? 'Son Güncelleme: 17 Ağustos 2026 • Sürüm 2.2' : 'Last Updated: August 17, 2026 • Version 2.2'}
                </p>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
              <button
                onClick={() => setLang('tr')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  lang === 'tr' ? 'bg-white text-orange-600 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Türkçe
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  lang === 'en' ? 'bg-white text-orange-600 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                English
              </button>
            </div>
          </div>

          {/* Core Principle Banner */}
          <div className="bg-orange-50/70 border border-orange-200/80 rounded-2xl p-5 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
            <p className="font-bold text-orange-950 flex items-center gap-2">
              <Lock className="h-4 w-4 text-orange-600" />
              {lang === 'tr' ? 'Temel Gizlilik İlkesi' : 'Core Privacy Principle'}
            </p>
            <p>
              {lang === 'tr'
                ? 'Notia, "Yerel Öncelikli (Local-First)" bir mimariyle geliştirilmiştir. Fotoğraflarınız yalnızca kendi cihazınızın fiziksel depolama alanında saklanır; sunucularımıza veya üçüncü taraf yapay zekâ modellerine izniniz olmadan asla yüklenmez.'
                : 'Notia is engineered with a "Local-First" architecture. Your photos remain exclusively on your device storage; they are never uploaded to our servers or third-party AI models without explicit consent.'}
            </p>
          </div>

          {/* Section 1: Data Controller */}
          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-orange-600" />
              <span>{lang === 'tr' ? '1. Veri Sorumlusu & İletişim' : '1. Data Controller & Privacy Contact'}</span>
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-1.5 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <p><strong>{lang === 'tr' ? 'Geliştirici & Veri Sorumlusu:' : 'Developer & Controller:'}</strong> Egehan KAHRAMAN (VastSea)</p>
              <p><strong>{lang === 'tr' ? 'E-Posta:' : 'Email:'}</strong> <a href="mailto:vastseaoffical0@outlook.com" className="text-orange-600 underline">vastseaoffical0@outlook.com</a></p>
              <p><strong>{lang === 'tr' ? 'Resmi Sayfa:' : 'Official Showcase:'}</strong> <a href="https://egehankahraman.vercel.app/projects/notia" className="text-orange-600 underline">https://egehankahraman.vercel.app/projects/notia</a></p>
            </div>
          </section>

          {/* Section 2: Local Photos & Privacy */}
          <section className="space-y-3 pt-2">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-emerald-600" />
              <span>{lang === 'tr' ? '2. Fotoğraflar ve Cihaz İçi Depolama' : '2. Photos & On-Device Storage'}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'tr'
                ? 'Uygulama, galerinizi taramak ve not eklemenizi sağlamak için yerel işletim sistemi API\'lerini kullanır. Fotoğraf dosyaları cihazınızda kalır. Şirketimiz kullanıcıların fotoğraflarını toplamaz, saklamaz veya işlemez.'
                : 'Notia utilizes local OS APIs to index your gallery and attach notes. Photo files remain entirely on your device. We do not harvest, store, or process raw user photo files.'}
            </p>
          </section>

          {/* Section 3: NotiaAI & Cloud Processing */}
          <section className="space-y-3 pt-2">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-orange-600" />
              <span>{lang === 'tr' ? '3. NotiaAI ve Yapay Zekâ Güvenliği' : '3. NotiaAI & AI Data Handling'}</span>
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                {lang === 'tr'
                  ? 'NotiaAI asistanı (not üretme, özetleme ve sohbet), API sağlayıcıları üzerinden çalışır.'
                  : 'NotiaAI features (note generation, summarization, and chat) operate via secure API gateways.'}
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
                <li>
                  {lang === 'tr'
                    ? 'Metin ve not girdileriniz kamuya açık yapay zeka modellerinin genel eğitiminde (model training) kullanılmaz.'
                    : 'Your prompt texts and notes are not used to train public foundational AI models.'}
                </li>
                <li>
                  {lang === 'tr'
                    ? 'Fotoğraf dosyaları AI sunucularına kalıcı olarak aktarılmaz; yalnızca kullanıcının girdiği metin açıklamaları işlenir.'
                    : 'Raw photo files are not permanently stored on AI inference servers; only text descriptions are processed.'}
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: StoreKit 2 & Google Play Billing */}
          <section className="space-y-3 pt-2">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-blue-600" />
              <span>{lang === 'tr' ? '4. Satın Alma ve Ödeme Güvenliği' : '4. In-App Purchases & Payments'}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'tr'
                ? 'Notia Plus ve Pro satın alımları doğrudan Google Play Billing ve Apple StoreKit 2 üzerinden gerçekleştirilir. Kredi kartı veya finansal verileriniz Notia tarafından hiçbir şekilde görülmez ve saklanmaz.'
                : 'All in-app purchases are handled securely by Google Play Billing and Apple StoreKit 2. We never receive or store credit card or financial details.'}
            </p>
          </section>

          {/* Section 5: Biometrics & Local Encryption */}
          <section className="space-y-3 pt-2">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Fingerprint className="h-5 w-5 text-purple-600" />
              <span>{lang === 'tr' ? '5. Biyometrik Kilit & AES-256' : '5. Biometric Lock & Encryption'}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'tr'
                ? 'Parmak izi veya yüz tanıma doğrulama işlemleri cihazınızın kendi donanım güvenlik çipinde (Secure Enclave / Android KeyStore) gerçekleşir. Notia bu verilere erişemez.'
                : 'Biometric authentication (fingerprint/face) executes entirely inside the secure hardware enclave of your operating system. Notia has no access to raw biometric data.'}
            </p>
          </section>

          {/* Section 6: Account Deletion */}
          <section className="space-y-3 pt-2">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Trash2 className="h-5 w-5 text-red-600" />
              <span>{lang === 'tr' ? '6. Hesap ve Bulut Verilerini Silme (App Store 5.1.1 & GDPR)' : '6. Account & Data Deletion (App Store 5.1.1 & GDPR)'}</span>
            </h2>
            <div className="bg-red-50/60 border border-red-200/80 rounded-2xl p-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
              <p>
                {lang === 'tr'
                  ? 'Kullanıcılar diledikleri zaman hesaplarını ve bulut verilerini silebilirler:'
                  : 'Users have the right to permanently erase their account and cloud data at any time:'}
              </p>
              <p className="font-semibold text-red-950">
                {lang === 'tr'
                  ? 'Uygulama İçi Silme: Notia → Profil → Hesabımı Sil'
                  : 'In-App: Notia → Profile → Delete My Account'}
              </p>
              <p className="text-xs text-slate-500">
                {lang === 'tr'
                  ? 'Alternatif olarak vastseaoffical0@outlook.com adresine "HESAP SILME" konulu e-posta gönderebilirsiniz.'
                  : 'Alternatively, email vastseaoffical0@outlook.com with the subject "ACCOUNT DELETION".'}
              </p>
            </div>
          </section>

          {/* Public URLs */}
          <div className="pt-6 border-t border-slate-100 text-xs text-slate-400 font-mono space-y-1">
            <div>Showcase: <a href="https://egehankahraman.vercel.app/projects/notia/privacy" className="text-orange-600 underline">https://egehankahraman.vercel.app/projects/notia/privacy</a></div>
            <div>Web: <a href="https://notia.app/privacy" className="text-orange-600 underline">https://notia.app/privacy</a></div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
