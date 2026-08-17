import React from 'react';
import { 
  Edit3, 
  MapPin, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  FolderHeart,
  Globe2,
  Lock
} from 'lucide-react';

const mainPillars = [
  {
    icon: Edit3,
    title: "Zengin Markdown Not Defteri",
    badge: "Hikaye Anlatımı",
    badgeColor: "bg-orange-100 text-orange-800",
    description: "Fotoğraflar sadece birer görsel değil; duyguları ve yaşanmışlıkları barındıran hatıralardır. Başlıklar, kalın/italik vurgular, listeler ve özel etiketlerle fotoğraflarınızı anlamlı hikayelere dönüştürün.",
    highlights: ["Özel Markdown biçimlendirme", "Google Fonts tipografisi", "Etiket ve kategori filtreleme"]
  },
  {
    icon: MapPin,
    title: "İnteraktif Fotoğraf Haritası",
    badge: "Coğrafi Keşif",
    badgeColor: "bg-emerald-100 text-emerald-800",
    description: "EXIF konum desteğiyle fotoğraflarınızın çekildiği yerleri dünya haritası üzerinde görselleştirin. Şehir şehir, rota rota gezdiğiniz tüm rotaları interaktif bir seyahat haritasına dönüştürün.",
    highlights: ["Otomatik EXIF konum çözümleme", "Harita üzeri anı pinleri", "Seyahat ve rota takibi"]
  },
  {
    icon: Users,
    title: "Kişiler & Buket Koleksiyonları",
    badge: "Hafıza & Sevdikleriniz",
    badgeColor: "bg-purple-100 text-purple-800",
    description: "Fotoğraflarınızdaki sevdiklerinizi etiketleyin, özel kişi profilleri oluşturun ve onlarla geçirdiğiniz anları tek bir dokunuşla derleyin. Tematik buket albümleriyle özel anı koleksiyonları kurun.",
    highlights: ["Kişi etiketleme ve profilleme", "Buket galerisi & tematik albümler", "Kişi bazlı arama ve filtreleme"]
  },
  {
    icon: Sparkles,
    title: "NotiaAI Görsel Yaşam Asistanı",
    badge: "Akıllı Destek",
    badgeColor: "bg-blue-100 text-blue-800",
    description: "Fotoğraftan ilham alarak hikaye taslağı oluşturan, duygu durumunu çözümleyen ve günlük yazımınızı kolaylaştıran yapay zekâ asistanı.",
    highlights: ["Akıllı anı ve başlık önerileri", "Soru-cevap anı sohbeti", "Özetleme ve yapılacak listesi dönüştürücü"]
  }
];

const secondaryFeatures = [
  {
    icon: Lock,
    title: "Biyometrik Kilit & AES-256",
    desc: "Özel notlarınızı parmak izi, yüz tanıma ve AES-256 yerel şifreleme ile koruma altına alın."
  },
  {
    icon: FolderHeart,
    title: "Yerel Öncelikli (Local-First)",
    desc: "Fotoğraflarınız cihazınızda kalır; harici sunuculara izniniz dışında asla yüklenmez."
  },
  {
    icon: Globe2,
    title: "5 Dil Desteği",
    desc: "Türkçe, İngilizce, Almanca, İtalyanca ve Azerbaycan Türkçesi ile eksiksiz yerelleştirme."
  },
  {
    icon: ShieldCheck,
    title: "Google Drive & Bulut Senkronizasyon",
    desc: "Dilerseniz Google Drive veya güvenli bulut üzerinde şifreli yedekleme oluşturun."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full uppercase tracking-wider">
            Temel Yetenekler
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Anılarınızı Yaşatan Dört Ana Sütun
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Notia, anılarınızı kaydetmeyi, organize etmeyi ve yeniden keşfetmeyi keyifli hale getiren modern bir araç setidir.
          </p>
        </div>

        {/* 4 Main Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainPillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50/70 hover:bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-orange-200 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-orange-600 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60">
                  <ul className="space-y-1.5">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs font-medium text-slate-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Features Grid */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl font-bold tracking-tight">
              Gizlilik ve Mimari Güvenceleri
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Kişisel verileriniz ve anılarınız tamamen sizin kontrolünüzdedir.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryFeatures.map((sec, idx) => {
              const SecIcon = sec.icon;
              return (
                <div key={idx} className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 space-y-2.5">
                  <div className="w-9 h-9 bg-orange-500/20 text-orange-400 rounded-xl flex items-center justify-center">
                    <SecIcon className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-100">{sec.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{sec.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
