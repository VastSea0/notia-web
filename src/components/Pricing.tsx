import React from 'react';
import { 
  Sparkles, 
  Check, 
  X, 
  Shield, 
  Smartphone, 
  Infinity,
  Zap,
  ExternalLink 
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full uppercase tracking-wider">
            Notia Pro Seçenekleri
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Anılarınız İçin En Uygun Planı Seçin
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Fotoğraf notlama, Markdown ve harita özellikleri daima ücretsizdir. Sınırsız NotiaAI, reklamsız deneyim ve bulut senkronizasyonu için Pro ayrıcalıklarını keşfedin.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. Ücretsiz */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Ücretsiz Başlangıç</h3>
                <p className="text-xs text-slate-500 mt-0.5">Temel fotoğraf notlama</p>
              </div>
              <div className="text-3xl font-black text-slate-900 font-mono">
                Ücretsiz
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 pt-3 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Sınırsız fotoğraf notu & Markdown</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>İnteraktif fotoğraf haritası</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Biyometrik kilit & AES-256</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500 shrink-0" />
                  <span>Günlük 20 NotiaAI isteği</span>
                </li>
              </ul>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.vastsea.notia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition-colors"
            >
              Google Play'den Yükle
            </a>
          </div>

          {/* 2. Pro Aylık */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Pro Aylık</h3>
                <p className="text-xs text-slate-500 mt-0.5">Esnek aylık abonelik</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-slate-900 font-mono">₺49.99</span>
                <span className="text-xs text-slate-500">/ ay</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 pt-3 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Tamamen reklamsız</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-orange-500 shrink-0" />
                  <span>Sınırsız NotiaAI asistanı</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Öncelikli yanıt hızı</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Bulut senkronizasyonu</span>
                </li>
              </ul>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.vastsea.notia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors"
            >
              Uygulamada Başlat
            </a>
          </div>

          {/* 3. Pro Yıllık (En Popüler) */}
          <div className="bg-gradient-to-b from-orange-50/60 to-white rounded-3xl p-7 border-2 border-orange-500 shadow-xl relative flex flex-col justify-between space-y-6">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-orange-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                En Popüler Plan
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Pro Yıllık</h3>
                <p className="text-xs text-orange-800 font-medium mt-0.5">Aylık ~₺37.50 (Yıllık Tasarruf)</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-slate-900 font-mono">₺449.99</span>
                <span className="text-xs text-slate-500">/ yıl</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 pt-3 border-t border-orange-200/80 font-medium">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Tamamen reklamsız</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-orange-600 shrink-0" />
                  <span>Sınırsız NotiaAI kullanımı</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Öncelikli yapay zekâ hızı</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Drive & bulut yedekleme</span>
                </li>
              </ul>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.vastsea.notia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-semibold transition-colors shadow-sm"
            >
              Yıllık Pro'ya Geç
            </a>
          </div>

          {/* 4. Pro Ömür Boyu */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Ömür Boyu (Lifetime)</h3>
                <p className="text-xs text-slate-500 mt-0.5">Tek seferlik kalıcı lisans</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-slate-900 font-mono">₺799.99</span>
                <span className="text-xs text-slate-500">tek sefer</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 pt-3 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <Infinity className="h-4 w-4 text-purple-600 shrink-0" />
                  <span>Ömür boyu kalıcı lisans</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Tüm Pro ayrıcalıkları</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Gelecek güncellemelere erişim</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Sıfır tekrar eden ödeme</span>
                </li>
              </ul>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.vastsea.notia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors"
            >
              Ömür Boyu Lisans Al
            </a>
          </div>

        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 text-center">
            Detaylı Özellik Karşılaştırması
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="py-3.5 px-4 font-semibold">Özellik</th>
                  <th className="py-3.5 px-4 font-semibold text-center">Ücretsiz</th>
                  <th className="py-3.5 px-4 font-semibold text-center">Pro Aylık</th>
                  <th className="py-3.5 px-4 font-semibold text-center text-orange-600">Pro Yıllık</th>
                  <th className="py-3.5 px-4 font-semibold text-center text-purple-600">Ömür Boyu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-3.5 px-4 font-medium">Fotoğraf Notlama & Zengin Markdown</td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">İnteraktif Fotoğraf Haritası & EXIF</td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Kişi Etiketleme & Albüm Galerisi</td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Biyometrik Kilit & AES-256 Yerel Şifreleme</td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">NotiaAI Görsel Asistan & Sohbet</td>
                  <td className="text-center py-3.5 px-4 font-medium text-slate-500">20 istek / gün</td>
                  <td className="text-center py-3.5 px-4 font-bold text-slate-900">Sınırsız</td>
                  <td className="text-center py-3.5 px-4 font-bold text-orange-600">Sınırsız</td>
                  <td className="text-center py-3.5 px-4 font-bold text-purple-600">Sınırsız</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Reklamsız Deneyim</td>
                  <td className="text-center py-3.5 px-4 text-slate-400">—</td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Google Drive & Bulut Senkronizasyon</td>
                  <td className="text-center py-3.5 px-4 text-slate-400">—</td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="h-4 w-4 text-emerald-600 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h2 className="text-xl font-bold text-slate-900">Sıkça Sorulan Sorular</h2>
            <p className="text-xs text-slate-500">Üyelik ve satın almalar hakkında bilmeniz gerekenler</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-4 text-xs sm:text-sm">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900">Ödemeler nasıl güvenceye alınır?</h3>
              <p className="text-slate-600 leading-relaxed">
                Tüm satın alma işlemleri doğrudan Google Play Store veya Apple App Store altyapısıyla gerçekleştirilir. Notia sunucularında kredi kartı bilgisi tutulmaz.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900">Ömür Boyu (Lifetime) lisansı nedir?</h3>
              <p className="text-slate-600 leading-relaxed">
                Tek bir defa ₺799.99 ödeyerek tüm Pro özelliklerine ve gelecekteki güncellemelere kalıcı olarak sahip olursunuz; aylık veya yıllık yenileme ücreti ödemezsiniz.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900">Aboneliğimi istediğim an iptal edebilir miyim?</h3>
              <p className="text-slate-600 leading-relaxed">
                Evet. Google Play Store veya App Store hesap ayarlarınızdan aboneliğinizi dilediğiniz an tek tıkla iptal edebilirsiniz.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900">Temel özellikler için ödeme yapmam gerekir mi?</h3>
              <p className="text-slate-600 leading-relaxed">
                Hayır. Notia'nın fotoğraf notlama, harita, yerel şifreleme ve albüm özellikleri tamamen ücretsizdir.
              </p>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
