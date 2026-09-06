export interface ReleaseHighlights {
  added: string[];
  changed: string[];
  fixed: string[];
}

export interface ReleaseGroup {
  tag: string;
  version: string;
  isDev: boolean;
  date: string;
  commitCount: number;
  commits: {
    hash: string;
    shortHash: string;
    author: string;
    date: string;
    subject: string;
    githubUrl: string;
  }[];
  highlights: ReleaseHighlights | null;
  githubUrl: string;
}

export interface ContributorItem {
  username: string;
  name: string;
  avatarUrl: string;
  githubUrl: string;
  contributions: number;
  role: string;
}

export const REPO_COMMITS_TOTAL = 318;
export const REPO_RELEASES_TOTAL = 8;
export const LATEST_RELEASE_TAG = "v1.3.7";

export const CONTRIBUTORS_DATA: ContributorItem[] = [
  {
    username: "egehankahraman",
    name: "Egehan KAHRAMAN",
    avatarUrl: "https://avatars.githubusercontent.com/u/102927863?v=4",
    githubUrl: "https://github.com/VastSea0",
    contributions: 318,
    role: "Kurucu & Geliştirici",
  },
];

export const RELEASES_DATA: ReleaseGroup[] = [
  {
    tag: "v1.3.7",
    version: "1.3.7",
    isDev: false,
    date: "2026-08-30T10:00:00+03:00",
    commitCount: 14,
    githubUrl: "https://github.com/VastSea0/notia/releases/tag/v1.3.7",
    highlights: {
      added: [
        "**Hızlı & Minimal Oluşturma Menüsü:** Alt çubukta açılan 4 satırlı zarif işlem listesi (Yeni Not, Fotoğraflı Not, Yeni Albüm, Fotoğraf Çek).",
        "**Kesintisiz Galeri Sayfalama:** Editoryal zaman tünelinde partiler halinde arka planda yüklenen akıcı sonsuz sayfalama (Infinite Pagination).",
        "**Daha Hızlı Başlangıç:** İlk yükleme partisi 60 fotoğrafa çıkarılarak eski anılara gecikmesiz erişim sağlandı.",
        "**Dinamik Sürüm Takibi:** `PackageInfo` üzerinden cihazın gerçek derleme bilgisi sağlandı; hardcoded metinler ARB sistemine bağlandı.",
      ],
      changed: [
        "Alt menüden doğrudan albüm oluşturabilme desteği eklendi.",
        "Medya tarama motorunda bellek tüketimi düşürüldü.",
      ],
      fixed: [
        "Sayfalama sırasında meydana gelebilecek mükerrer fotoğraf anahtarları temizlendi.",
      ],
    },
    commits: [
      {
        hash: "0f48acf",
        shortHash: "0f48acf",
        author: "Egehan KAHRAMAN",
        date: "2026-08-30",
        subject: "feat(debug): add Debug Dataset V2 with authentic lifestyle photos and kDebugMode guard",
        githubUrl: "https://github.com/VastSea0/notia/commit/0f48acf",
      },
      {
        hash: "6e8a75e",
        shortHash: "6e8a75e",
        author: "Egehan KAHRAMAN",
        date: "2026-08-30",
        subject: "chore(release): bump version to 1.3.7+93",
        githubUrl: "https://github.com/VastSea0/notia/commit/6e8a75e",
      },
    ],
  },
  {
    tag: "v1.3.6",
    version: "1.3.6",
    isDev: false,
    date: "2026-08-29T18:00:00+03:00",
    commitCount: 42,
    githubUrl: "https://github.com/VastSea0/notia/releases/tag/v1.3.6",
    highlights: {
      added: [
        "**Google Material 3 Expressive Entegrasyonu:** 35 geometrik şekil (Sunny, Arch, Cookie, Burst, Flower vb.), doğal yaylı uzamsal fizik hareketleri ve 5 seviyeli yüzey hiyerarşisi.",
        "**Çift Tasarım Dili (Dual Engine):** Google Material 3 Expressive ile Apple iOS 26 Liquid Glass arasında tek dokunuşla geçiş.",
        "**Editoryal Anı Akışı (Pinterest Masonry):** 2 sütunlu akıcı fotoğraf akışı ve zengin editoryal hikaye kartları.",
        "**Sanatsal Çiçek Buketi (Bouquet Spread):** Çoklu fotoğraflara sahip notlarda yelpaze gibi açılan, sürükle-bırak ile yeniden sıralanabilen 3D fotoğraf desteleri.",
        "**Notia AI & Kişilik Modları:** Anılarınızı Romantik, Tarihçi, Şair ve Filozof tarzlarıyla yorumlayan yaratıcı yazım asistanı.",
        "**Yüzen Araç Çubuğu:** Google Workspace tarzı yüzen araç çubuğu ve paragraf arası görsel sürükleme desteği.",
      ],
      changed: [
        "Anasayfa zaman tünelinde Google Fotoğraflar tarzı akıllı tarih başlıklarına geçildi.",
        "Kişiler (@Kişiler) sayfası geometrik avatarlar ve alfabetik fihristle baştan tasarlandı.",
      ],
      fixed: [
        "Çoklu görsel seçimlerinde oluşan önbellek taşması giderildi.",
      ],
    },
    commits: [
      {
        hash: "9281305",
        shortHash: "9281305",
        author: "Egehan KAHRAMAN",
        date: "2026-08-29",
        subject: "feat(map): scan and plot unnoted device photos with persistent GPS cache",
        githubUrl: "https://github.com/VastSea0/notia/commit/9281305",
      },
      {
        hash: "aec1b5d",
        shortHash: "aec1b5d",
        author: "Egehan KAHRAMAN",
        date: "2026-08-29",
        subject: "fix: restore developer settings with mock photo seeding and gallery integration",
        githubUrl: "https://github.com/VastSea0/notia/commit/aec1b5d",
      },
    ],
  },
  {
    tag: "v1.3.5",
    version: "1.3.5",
    isDev: false,
    date: "2026-08-19T14:30:00+03:00",
    commitCount: 28,
    githubUrl: "https://github.com/VastSea0/notia/releases/tag/v1.3.5",
    highlights: {
      added: [
        "**Şimdi Özeti (Now Brief):** Günün rotası, anı skoru, eşlik eden kişiler ve fotoğraf kolajlarını içeren editoryal günlük anı panosu.",
        "**Genesis Glow & Kinetik Tipografi:** Günün vaktine göre değişen ortam ışığı ve kelime kelime dökülen akıcı metin animasyonu.",
        "**Canlı Token Akışı (SSE Streaming):** NotiaAI yanıtlarını beklemeden, gerçek zamanlı yazılırken izleyebilme.",
        "**Canlı Araç Durum Çipleri:** AI'ın anı arama ve not oluşturma adımlarını şeffafça görselleştiren akıllı durum çipleri.",
      ],
      changed: [
        "Albüm kartlarında 3D katmanlı fotoğraf destesi tasarımına geçildi.",
        "Albüm detayları editoryal mozaik düzeninde yeniden biçimlendirildi.",
      ],
      fixed: [
        "Düşük bağlantı hızlarında AI soket bağlantısının kopması engellendi.",
      ],
    },
    commits: [
      {
        hash: "461abf5",
        shortHash: "461abf5",
        author: "Egehan KAHRAMAN",
        date: "2026-08-19",
        subject: "feat(ux): streamline home navigation by removing dual-tab segmented switch",
        githubUrl: "https://github.com/VastSea0/notia/commit/461abf5",
      },
    ],
  },
  {
    tag: "v1.3.2",
    version: "1.3.2",
    isDev: false,
    date: "2026-08-15T12:00:00+03:00",
    commitCount: 16,
    githubUrl: "https://github.com/VastSea0/notia/releases/tag/v1.3.2",
    highlights: {
      added: [
        "**PDF Anı Kitabı (Memory Book):** Seçilen anıları, tarihleri ve harita konumlarını yüksek çözünürlüklü baskıya hazır PDF fotokitaba dönüştürme.",
        "**Dinamik Para Birimi:** Kullanıcının bölgesine göre yerel fiyatlandırma desteği.",
      ],
      changed: [],
      fixed: [],
    },
    commits: [],
  },
  {
    tag: "v1.3.0",
    version: "1.3.0",
    isDev: false,
    date: "2026-08-14T09:00:00+03:00",
    commitCount: 35,
    githubUrl: "https://github.com/VastSea0/notia/releases/tag/v1.3.0",
    highlights: {
      added: [
        "**AES-256 Uçtan Uca Şifreleme:** Google Drive bulut yedeklemeleri istemci tarafında şifrelendi.",
        "**Biyometrik Kilit:** Parmak izi ve Face ID ile yerel sığınak güvenliği.",
        "**GDPR & App Store Uyumlu Hesap Silme:** Tek dokunuşla tüm bulut ve yerel verileri kalıcı olarak silebilme.",
      ],
      changed: [
        "SQLite ve Firestore veri eşitleme döngüsünde bellek tüketimi düşürüldü.",
      ],
      fixed: [
        "Abonelik yenileme denetleyicisinde ömür boyu Pro ve iOS lisansları koruma altına alındı.",
      ],
    },
    commits: [],
  },
];
