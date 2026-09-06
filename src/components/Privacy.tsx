import React from 'react';
import {
  ArrowLeft,
  Shield,
  UserCheck,
  Smartphone,
  Sparkles,
  CreditCard,
  Trash2,
  Fingerprint,
} from 'lucide-react';

interface PrivacyProps {
  lang: 'tr' | 'en';
  onBackToHome: () => void;
}

export default function Privacy({ lang, onBackToHome }: PrivacyProps) {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-32 pb-24 w-full space-y-8">
      {/* Back to Home button */}
      <button
        onClick={onBackToHome}
        className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-[var(--md-sys-color-surface-container)] hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)] transition-colors cursor-pointer border border-[var(--md-sys-color-outline-variant)]/20"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>{lang === 'tr' ? 'Anasayfaya Dön' : 'Back to Home'}</span>
      </button>

      {/* Document Header */}
      <div className="bg-[var(--md-sys-color-surface-container)] rounded-3xl p-8 sm:p-10 border border-[var(--md-sys-color-outline-variant)]/30 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-[var(--md-sys-color-outline-variant)]/15 pb-6">
          <div className="w-12 h-12 rounded-2xl bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] flex items-center justify-center">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-[var(--md-sys-color-on-surface)] tracking-tight">
              {lang === 'tr' ? 'Gizlilik & Veri Güvenliği Politikası' : 'Privacy & Data Protection Policy'}
            </h1>
            <p className="text-xs font-mono text-[var(--md-sys-color-on-surface-variant)] mt-0.5">
              {lang === 'tr' ? 'Son Güncelleme: 30 Ağustos 2026 • Sürüm v1.3.7' : 'Last Updated: August 30, 2026 • Version v1.3.7'}
            </p>
          </div>
        </div>

        {/* Core Guarantee */}
        <div className="bg-[var(--md-sys-color-surface-container-low)] p-5 rounded-2xl border border-[var(--md-sys-color-outline-variant)]/20 space-y-2">
          <h2 className="text-sm font-bold text-[var(--md-sys-color-primary)] font-mono uppercase tracking-wider">
            {lang === 'tr' ? 'TEMEL TAAHHÜT: SIFIR BİLGİ & YEREL ÖNCELİK' : 'CORE PLEDGE: ZERO-KNOWLEDGE & LOCAL-FIRST'}
          </h2>
          <p className="text-xs sm:text-sm text-[var(--md-sys-color-on-surface)] leading-relaxed">
            {lang === 'tr'
              ? 'Notia, "Yerel Öncelikli (Local-First)" bir mimariyle geliştirilmiştir. Fotoğraflarınız yalnızca kendi cihazınızın fiziksel depolama alanında saklanır; sunucularımıza veya üçüncü taraf yapay zekâ modellerine izniniz olmadan asla yüklenmez.'
              : 'Notia is engineered with a "Local-First" architecture. Your photos remain exclusively on your device storage; they are never uploaded to our servers or third-party AI models without explicit consent.'}
          </p>
        </div>

        {/* Section 1: Data Controller */}
        <section className="space-y-3 pt-4">
          <h2 className="text-base font-bold text-[var(--md-sys-color-on-surface)] flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-[var(--md-sys-color-primary)]" />
            <span>{lang === 'tr' ? '1. Veri Sorumlusu & İletişim' : '1. Data Controller & Privacy Contact'}</span>
          </h2>
          <div className="text-xs sm:text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed space-y-1.5 bg-[var(--md-sys-color-surface-container-low)] p-4 rounded-2xl border border-[var(--md-sys-color-outline-variant)]/20 font-mono">
            <p><strong>{lang === 'tr' ? 'Geliştirici & Veri Sorumlusu:' : 'Developer & Controller:'}</strong> Egehan KAHRAMAN (VastSea)</p>
            <p><strong>{lang === 'tr' ? 'E-Posta:' : 'Email:'}</strong> <a href="mailto:vastseaoffical0@outlook.com" className="text-[var(--md-sys-color-primary)] underline">vastseaoffical0@outlook.com</a></p>
          </div>
        </section>

        {/* Section 2: Local Photos & Privacy */}
        <section className="space-y-3 pt-2">
          <h2 className="text-base font-bold text-[var(--md-sys-color-on-surface)] flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-emerald-400" />
            <span>{lang === 'tr' ? '2. Fotoğraflar ve Cihaz İçi Depolama' : '2. Photos & On-Device Storage'}</span>
          </h2>
          <p className="text-xs sm:text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
            {lang === 'tr'
              ? "Uygulama, galerinizi taramak ve not eklemenizi sağlamak için yerel işletim sistemi API'lerini kullanır. Fotoğraf dosyaları cihazınızda kalır. Şirketimiz kullanıcıların fotoğraflarını toplamaz, saklamaz veya işlemez."
              : 'Notia utilizes local OS APIs to index your gallery and attach notes. Photo files remain entirely on your device. We do not harvest, store, or process raw user photo files.'}
          </p>
        </section>

        {/* Section 3: NotiaAI & Cloud Processing */}
        <section className="space-y-3 pt-2">
          <h2 className="text-base font-bold text-[var(--md-sys-color-on-surface)] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[var(--md-sys-color-tertiary)]" />
            <span>{lang === 'tr' ? '3. NotiaAI ve Yapay Zekâ Güvenliği' : '3. NotiaAI & AI Data Handling'}</span>
          </h2>
          <div className="text-xs sm:text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed space-y-2">
            <p>
              {lang === 'tr'
                ? 'NotiaAI asistanı (not üretme, özetleme ve sohbet), güvenli API ağ geçitleri üzerinden çalışır.'
                : 'NotiaAI features (note generation, summarization, and chat) operate via secure API gateways.'}
            </p>
            <ul className="list-disc list-inside space-y-1 text-[var(--md-sys-color-on-surface-variant)] pl-2">
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
          <h2 className="text-base font-bold text-[var(--md-sys-color-on-surface)] flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-blue-400" />
            <span>{lang === 'tr' ? '4. Satın Alma ve Ödeme Güvenliği' : '4. In-App Purchases & Payments'}</span>
          </h2>
          <p className="text-xs sm:text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
            {lang === 'tr'
              ? 'Notia Pro satın alımları doğrudan Google Play Billing ve Apple StoreKit 2 üzerinden gerçekleştirilir. Kredi kartı veya finansal verileriniz Notia tarafından hiçbir şekilde görülmez ve saklanmaz.'
              : 'All in-app purchases are handled securely by Google Play Billing and Apple StoreKit 2. We never receive or store credit card or financial details.'}
          </p>
        </section>

        {/* Section 5: Biometrics & Local Encryption */}
        <section className="space-y-3 pt-2">
          <h2 className="text-base font-bold text-[var(--md-sys-color-on-surface)] flex items-center gap-2">
            <Fingerprint className="w-5 h-5 text-purple-400" />
            <span>{lang === 'tr' ? '5. Biyometrik Kilit & AES-256' : '5. Biometric Lock & Encryption'}</span>
          </h2>
          <p className="text-xs sm:text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
            {lang === 'tr'
              ? 'Parmak izi veya yüz tanıma doğrulama işlemleri cihazınızın kendi donanım güvenlik çipinde (Secure Enclave / Android KeyStore) gerçekleşir. Notia bu verilere erişemez.'
              : 'Biometric authentication (fingerprint/face) executes entirely inside the secure hardware enclave of your operating system. Notia has no access to raw biometric data.'}
          </p>
        </section>

        {/* Section 6: Account Deletion */}
        <section className="space-y-3 pt-2">
          <h2 className="text-base font-bold text-[var(--md-sys-color-on-surface)] flex items-center gap-2">
            <Trash2 className="w-5 h-5 text-red-400" />
            <span>{lang === 'tr' ? '6. Hesap ve Bulut Verilerini Silme (App Store 5.1.1 & GDPR)' : '6. Account & Data Deletion (App Store 5.1.1 & GDPR)'}</span>
          </h2>
          <div className="bg-red-950/20 border border-red-800/40 rounded-2xl p-4 text-xs sm:text-sm text-[var(--md-sys-color-on-surface)] leading-relaxed space-y-2">
            <p>
              {lang === 'tr'
                ? 'Kullanıcılar diledikleri zaman hesaplarını ve bulut verilerini silebilirler:'
                : 'Users have the right to permanently erase their account and cloud data at any time:'}
            </p>
            <p className="font-semibold text-[var(--md-sys-color-primary)] font-mono">
              {lang === 'tr'
                ? 'Uygulama İçi Silme: Notia → Profil → Hesabımı Sil'
                : 'In-App: Notia → Profile → Delete My Account'}
            </p>
            <p className="text-xs text-[var(--md-sys-color-on-surface-variant)]">
              {lang === 'tr'
                ? 'Alternatif olarak vastseaoffical0@outlook.com adresine "HESAP SILME" konulu e-posta gönderebilirsiniz.'
                : 'Alternatively, email vastseaoffical0@outlook.com with the subject "ACCOUNT DELETION".'}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
