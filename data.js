/**
 * Gemi İnşaatı ve Gemi Makineleri Mühendisliği
 * YÖK Atlas Kapsamlı Veri Tabanı (2024 - 2023 - 2022 - 2021)
 * 11. Sınıf Öğrencileri İçin Tercih ve Yol Haritası Rehberi
 */

const YOK_ATLAS_DATA = [
  {
    id: "itu-orgun",
    code: "105510651",
    university: "İstanbul Teknik Üniversitesi (İTÜ)",
    faculty: "Gemi İnşaatı ve Deniz Bilimleri Fakültesi",
    program: "Gemi İnşaatı ve Gemi Makineleri Mühendisliği",
    city: "İstanbul",
    campus: "Ayazağa (Maslak) Yerleşkesi",
    type: "Devlet",
    scholarship: "Ücretsiz",
    language: "İngilizce (%100)",
    quota_2024: 40,
    enrolled_2024: 41,
    rank_2024: 16409,
    score_2024: 486.458,
    rank_2023: 24266,
    score_2023: 491.438,
    rank_2022: 31500,
    score_2022: 472.150,
    rank_2021: 42000,
    trend: "up", // Sıralama her yıl yükseliyor
    nets: {
      tyt_turkce: 32.5,
      tyt_sosyal: 15.2,
      tyt_mat: 35.8,
      tyt_fen: 17.5,
      tyt_toplam: 101.0,
      ayt_mat: 36.2,
      ayt_fizik: 12.4,
      ayt_kimya: 11.8,
      ayt_biyo: 10.9,
      ayt_toplam: 71.3,
      obp_avg: 92.4
    },
    features: [
      "1773 Mühendishane-i Bahrî-i Hümâyûn kökenli Türkiye'nin en prestijli denizcilik ekolü",
      "Ata Nutku Gemi Model Deney Çekme Havuzu (160 metre boyunda dev araştırma havuzu)",
      "Büyük Kavitasyon Tüneli ve Dolaşımlı Su Kanalı",
      "ABET Uluslararası Mühendislik Akreditasyonu (Dünya çapında denklik)",
      "MİLGEM, TCG ANADOLU ve Reis Sınıfı denizaltı projelerine en çok mühendis veren fakülte",
      "İTÜ ROV, Gemi Model ve Güneş Teknesi tasarım takımları"
    ],
    shipyard_link: "Tuzla ve Yalova tersanelerine 45 dk. Doğrudan kurumsal staj ve iş garantisi protokolleri.",
    yok_url: "https://yokatlas.yok.gov.tr/lisans.php?y=105510651"
  },
  {
    id: "itu-deniz-tek",
    code: "105510669",
    university: "İstanbul Teknik Üniversitesi (İTÜ)",
    faculty: "Gemi İnşaatı ve Deniz Bilimleri Fakültesi",
    program: "Gemi ve Deniz Teknolojisi Mühendisliği",
    city: "İstanbul",
    campus: "Ayazağa (Maslak) Yerleşkesi",
    type: "Devlet",
    scholarship: "Ücretsiz",
    language: "İngilizce (%100)",
    quota_2024: 50,
    enrolled_2024: 52,
    rank_2024: 25180,
    score_2024: 468.210,
    rank_2023: 33850,
    score_2023: 478.910,
    rank_2022: 44200,
    score_2022: 456.300,
    rank_2021: 56000,
    trend: "up",
    nets: {
      tyt_turkce: 31.0,
      tyt_sosyal: 14.5,
      tyt_mat: 33.5,
      tyt_fen: 15.8,
      tyt_toplam: 94.8,
      ayt_mat: 33.8,
      ayt_fizik: 11.2,
      ayt_kimya: 10.5,
      ayt_biyo: 9.8,
      ayt_toplam: 65.3,
      obp_avg: 90.8
    },
    features: [
      "Açık deniz (offshore) petrol platformları, deniz rüzgar türbinleri ve sualtı robotları",
      "Askeri denizaltı ve insansız sualtı araçları (İKA/SİDA) tasarımı",
      "İTÜ Maslak yerleşkesinde aynı fakülte ve laboratuvar imkanları",
      "Gemi İnşaatı ile ortak ders havuzu ve çift anadal (ÇAP) kolaylığı"
    ],
    shipyard_link: "Offshore şirketleri, sondaj gemileri (Fatih, Yavuz, Kanuni, Abdülhamid Han) ve tersaneler.",
    yok_url: "https://yokatlas.yok.gov.tr/lisans.php?y=105510669"
  },
  {
    id: "ytu-orgun",
    code: "110110368",
    university: "Yıldız Teknik Üniversitesi (YTÜ)",
    faculty: "Gemi İnşaatı ve Denizcilik Fakültesi",
    program: "Gemi İnşaatı ve Gemi Makineleri Mühendisliği",
    city: "İstanbul",
    campus: "Yıldız Yerleşkesi (Beşiktaş)",
    type: "Devlet",
    scholarship: "Ücretsiz",
    language: "İngilizce (%30)",
    quota_2024: 85,
    enrolled_2024: 88,
    rank_2024: 32688,
    score_2024: 458.449,
    rank_2023: 40128,
    score_2023: 470.531,
    rank_2022: 50800,
    score_2022: 448.200,
    rank_2021: 63000,
    trend: "up",
    nets: {
      tyt_turkce: 29.8,
      tyt_sosyal: 13.8,
      tyt_mat: 31.5,
      tyt_fen: 14.8,
      tyt_toplam: 89.9,
      ayt_mat: 31.2,
      ayt_fizik: 10.5,
      ayt_kimya: 9.9,
      ayt_biyo: 9.4,
      ayt_toplam: 61.0,
      obp_avg: 89.5
    },
    features: [
      "İstanbul Beşiktaş'ın kalbinde tarihi Yıldız Sarayı kampüsünde eğitim",
      "Tuzla ve Yalova tersanelerinde en geniş mezun & tersane müdürü ağına sahip fakülte",
      "Gemi Model Deney Havuzu ve Bilgisayar Destekli Gemi Dizayn (CAD/CAM) Labları",
      "MÜDEK Akreditasyonu ile Avrupa Mühendislik Etiketi (EUR-ACE)",
      "Mega yat ve lüks kompozit tekne tasarımında öncü akademisyen kadrosu"
    ],
    shipyard_link: "Tuzla ve Yalova tersanelerinde güçlü 'Yıldızlı Gemi Mühendisleri' mezun dayanışması.",
    yok_url: "https://yokatlas.yok.gov.tr/lisans.php?y=110110368"
  },
  {
    id: "itu-kktc-burslu",
    code: "105590057",
    university: "İTÜ - KKTC Eğitim-Araştırma Yerleşkesi",
    faculty: "Mühendislik Fakültesi",
    program: "Gemi İnşaatı ve Gemi Makineleri Mühendisliği (Burslu)",
    city: "Gazimağusa / KKTC",
    campus: "Gazimağusa Yerleşkesi & İTÜ Maslak Ortak Programı",
    type: "Devlet",
    scholarship: "Tam Burslu",
    language: "İngilizce (%100)",
    quota_2024: 5,
    enrolled_2024: 5,
    rank_2024: 33473,
    score_2024: 456.666,
    rank_2023: 44500,
    score_2023: 465.100,
    rank_2022: 55000,
    score_2022: 442.000,
    rank_2021: 71000,
    trend: "up",
    nets: {
      tyt_turkce: 29.5,
      tyt_sosyal: 13.5,
      tyt_mat: 31.0,
      tyt_fen: 14.5,
      tyt_toplam: 88.5,
      ayt_mat: 31.0,
      ayt_fizik: 10.2,
      ayt_kimya: 9.8,
      ayt_biyo: 9.2,
      ayt_toplam: 60.2,
      obp_avg: 88.9
    },
    features: [
      "İTÜ diploması ve İTÜ akademik kadrosu desteği",
      "Akdeniz stratejik denizcilik havzasında İngilizce yoğun eğitim",
      "Tam burs kapsamında yurt ve eğitim desteği",
      "Az mevcutlu sınıflarda hocalarla birebir mentörlük"
    ],
    shipyard_link: "Mersin, Antalya Serbest Bölge ve Tuzla tersaneleriyle staj işbirlikleri.",
    yok_url: "https://yokatlas.yok.gov.tr/lisans.php?y=105590057"
  },
  {
    id: "piri-reis-burslu",
    code: "204910183",
    university: "Pîrî Reis Üniversitesi (İstanbul)",
    faculty: "Mühendislik Fakültesi",
    program: "Gemi İnşaatı ve Gemi Makineleri Mühendisliği (Tam Burslu)",
    city: "İstanbul",
    campus: "Tuzla Deniz Kampüsü",
    type: "Vakıf",
    scholarship: "Tam Burslu",
    language: "İngilizce (%100)",
    quota_2024: 12,
    enrolled_2024: 13,
    rank_2024: 42636,
    score_2024: 444.582,
    rank_2023: 52100,
    score_2023: 455.300,
    rank_2022: 68000,
    score_2022: 428.000,
    rank_2021: 85000,
    trend: "up",
    nets: {
      tyt_turkce: 28.5,
      tyt_sosyal: 13.0,
      tyt_mat: 29.5,
      tyt_fen: 13.8,
      tyt_toplam: 84.8,
      ayt_mat: 29.0,
      ayt_fizik: 9.8,
      ayt_kimya: 9.2,
      ayt_biyo: 8.9,
      ayt_toplam: 56.9,
      obp_avg: 87.5
    },
    features: [
      "İMEAK Deniz Ticaret Odası destekli denizcilik ihtisas üniversitesi",
      "Tuzla Tersaneler Bölgesi'nin hemen içinde modern deniz kampüsü",
      "Öğrencilikten itibaren tersanelerde staj ve sektörle iç içe yaşam",
      "Pîrî Reis Eğitim Gemisi ile deniz ve açık deniz tecrübesi",
      "Burslu öğrencilere tam eğitim ve malzeme desteği"
    ],
    shipyard_link: "Tuzla Tersaneleri'ne yürüme mesafesinde! Sektörün tam merkezinde.",
    yok_url: "https://yokatlas.yok.gov.tr/lisans.php?y=204910183"
  },
  {
    id: "btu-orgun",
    code: "102410317",
    university: "Bursa Teknik Üniversitesi (BTÜ)",
    faculty: "Denizcilik Fakültesi",
    program: "Gemi İnşaatı ve Gemi Makineleri Mühendisliği",
    city: "Bursa",
    campus: "Yıldırım Yerleşkesi",
    type: "Devlet",
    scholarship: "Ücretsiz",
    language: "Türkçe",
    quota_2024: 45,
    enrolled_2024: 47,
    rank_2024: 59889,
    score_2024: 433.000,
    rank_2023: 80728,
    score_2023: 401.838,
    rank_2022: 104000,
    score_2022: 395.000,
    rank_2021: 132000,
    trend: "up", // Çok hızlı yükseliş gösteren program
    nets: {
      tyt_turkce: 27.0,
      tyt_sosyal: 12.5,
      tyt_mat: 27.5,
      tyt_fen: 12.8,
      tyt_toplam: 79.8,
      ayt_mat: 27.0,
      ayt_fizik: 9.0,
      ayt_kimya: 8.5,
      ayt_biyo: 8.2,
      ayt_toplam: 52.7,
      obp_avg: 86.0
    },
    features: [
      "SEP (Sektörel Eğitim Programı): Son sınıfta tam bir dönem maaşlı ve sigortalı tersane stajı",
      "Yalova Tersaneler Bölgesi'ne yalnızca 40 dakika mesafe avantajı",
      "Türkiye'nin hızla yükselen teknik üniversitesi vizyonu",
      "Gemi Hidrodinamiği ve Hesaplamalı Akışkanlar Dinamiği (CFD) Laboratuvarı",
      "Bursa'nın otomotiv ve kompozit sanayi gücü ile gemi mühendisliği entegrasyonu"
    ],
    shipyard_link: "Yalova Altınova Tersaneler Bölgesi ile doğrudan anlaşmalı SEP modeli.",
    yok_url: "https://yokatlas.yok.gov.tr/lisans.php?y=102410317"
  },
  {
    id: "ikcu-orgun",
    code: "105710264",
    university: "İzmir Kâtip Çelebi Üniversitesi (İKÇÜ)",
    faculty: "Gemi İnşaatı ve Denizcilik Fakültesi",
    program: "Gemi İnşaatı ve Gemi Makineleri Mühendisliği",
    city: "İzmir",
    campus: "Çiğli Ana Yerleşkesi",
    type: "Devlet",
    scholarship: "Ücretsiz",
    language: "İngilizce (%30)",
    quota_2024: 30,
    enrolled_2024: 31,
    rank_2024: 60649,
    score_2024: 432.315,
    rank_2023: 72347,
    score_2023: 423.410,
    rank_2022: 95000,
    score_2022: 405.000,
    rank_2021: 120000,
    trend: "up",
    nets: {
      tyt_turkce: 26.8,
      tyt_sosyal: 12.2,
      tyt_mat: 27.2,
      tyt_fen: 12.5,
      tyt_toplam: 78.7,
      ayt_mat: 26.5,
      ayt_fizik: 8.9,
      ayt_kimya: 8.3,
      ayt_biyo: 8.0,
      ayt_toplam: 51.7,
      obp_avg: 85.8
    },
    features: [
      "Ege Bölgesi'nin tek devlet Gemi İnşaatı ve Denizcilik Fakültesi",
      "İzmir Alaybey Askeri Tersanesi ve Aliağa Gemi Söküm/Dönüşüm Tesisleri yakınlığı",
      "Çeşme, Bodrum ve İzmir mega yat inşa ve bakım-onarım tesisleri ile işbirlikleri",
      "İngilizce hazırlık sınıfı ile kuvvetli yabancı dil eğitimi",
      "Modern laboratuvar altyapısı ve dinamik genç öğretim üyesi kadrosu"
    ],
    shipyard_link: "İzmir Alaybey Tersanesi, Aliağa ve Ege mega yat marinaları.",
    yok_url: "https://yokatlas.yok.gov.tr/lisans.php?y=105710264"
  },
  {
    id: "itu-kktc-50",
    code: "105590058",
    university: "İTÜ - KKTC Eğitim-Araştırma Yerleşkesi",
    faculty: "Mühendislik Fakültesi",
    program: "Gemi İnşaatı ve Gemi Makineleri Mühendisliği (%50 İndirimli)",
    city: "Gazimağusa / KKTC",
    campus: "Gazimağusa Yerleşkesi",
    type: "Devlet",
    scholarship: "%50 İndirimli",
    language: "İngilizce (%100)",
    quota_2024: 6,
    enrolled_2024: 6,
    rank_2024: 69757,
    score_2024: 425.987,
    rank_2023: 88000,
    score_2023: 412.000,
    rank_2022: 110000,
    score_2022: 388.000,
    rank_2021: 140000,
    trend: "up",
    nets: {
      tyt_turkce: 26.0,
      tyt_sosyal: 12.0,
      tyt_mat: 25.5,
      tyt_fen: 11.8,
      tyt_toplam: 75.3,
      ayt_mat: 25.0,
      ayt_fizik: 8.5,
      ayt_kimya: 8.0,
      ayt_biyo: 7.8,
      ayt_toplam: 49.3,
      obp_avg: 84.5
    },
    features: [
      "İTÜ prestiji ve diploması",
      "%50 devlet bursu desteği ile ekonomik eğitim",
      "Doğu Akdeniz'in uluslararası denizcilik rotasında stratejik konum"
    ],
    shipyard_link: "Türkiye ve KKTC tersanelerinde staj.",
    yok_url: "https://yokatlas.yok.gov.tr/lisans.php?y=105590058"
  },
  {
    id: "bandirma-orgun",
    code: "110610344",
    university: "Bandırma Onyedi Eylül Üniversitesi (BANÜ)",
    faculty: "Denizcilik Fakültesi",
    program: "Gemi İnşaatı ve Gemi Makineleri Mühendisliği",
    city: "Balıkesir",
    campus: "Bandırma Merkez Yerleşkesi",
    type: "Devlet",
    scholarship: "Ücretsiz",
    language: "Türkçe",
    quota_2024: 35,
    enrolled_2024: 36,
    rank_2024: 79814,
    score_2024: 418.918,
    rank_2023: 107450,
    score_2023: 378.500,
    rank_2022: 125000,
    score_2022: 380.000,
    rank_2021: 155000,
    trend: "up",
    nets: {
      tyt_turkce: 25.5,
      tyt_sosyal: 11.8,
      tyt_mat: 24.2,
      tyt_fen: 11.2,
      tyt_toplam: 72.7,
      ayt_mat: 23.8,
      ayt_fizik: 8.0,
      ayt_kimya: 7.6,
      ayt_biyo: 7.2,
      ayt_toplam: 46.6,
      obp_avg: 83.8
    },
    features: [
      "Marmara Denizi'nin güney kıyısında denizcilik odaklı fakülte",
      "İstanbul Yenikapı ve Kadıköy'e deniz otobüsüyle doğrudan hızlı erişim",
      "Tuzla ve Yalova tersanelerine yakın coğrafi konum",
      "Yeni kurulan modern laboratuvarlar ve genç araştırmacı kadro"
    ],
    shipyard_link: "Yalova ve Tuzla tersaneleri ile Marmara bölgesi liman işletmeleri.",
    yok_url: "https://yokatlas.yok.gov.tr/lisans.php?y=110610344"
  },
  {
    id: "ktu-orgun",
    code: "106210543",
    university: "Karadeniz Teknik Üniversitesi (KTÜ)",
    faculty: "Sürmene Deniz Bilimleri Fakültesi",
    program: "Gemi İnşaatı ve Gemi Makineleri Mühendisliği",
    city: "Trabzon",
    campus: "Muammer Dereli Yerleşkesi (Sürmene - Çamburnu)",
    type: "Devlet",
    scholarship: "Ücretsiz",
    language: "Türkçe",
    quota_2024: 45,
    enrolled_2024: 47,
    rank_2024: 86257,
    score_2024: 427.319,
    rank_2023: 113695,
    score_2023: 373.298,
    rank_2022: 122978,
    score_2022: 390.428,
    rank_2021: 148000,
    trend: "up",
    nets: {
      tyt_turkce: 25.0,
      tyt_sosyal: 11.5,
      tyt_mat: 23.5,
      tyt_fen: 10.8,
      tyt_toplam: 70.8,
      ayt_mat: 22.8,
      ayt_fizik: 7.8,
      ayt_kimya: 7.2,
      ayt_biyo: 7.0,
      ayt_toplam: 44.8,
      obp_avg: 82.5
    },
    features: [
      "Türkiye'nin en köklü denizcilik fakültelerinden biri (1982'den bu yana)",
      "Doğrudan Çamburnu Tersanesi'nin yanı başında, denize sıfır bağımsız yerleşke",
      "Karadeniz'in balıkçı gemisi, römorkör ve kuru yük gemisi inşa geleneği",
      "Gemi Deney Havuzu, Yapısal Testler ve Motor Teşhis Laboratuvarı",
      "Geniş KTÜ Deniz Bilimleri mezunlar cemiyeti ve tersanelerde güçlü bağlar"
    ],
    shipyard_link: "Çamburnu Tersanesi, Samsun ve Trabzon gemi inşaat atölyeleri, Tuzla/Yalova.",
    yok_url: "https://yokatlas.yok.gov.tr/lisans.php?y=106210543"
  },
  {
    id: "ordu-orgun",
    code: "108310321",
    university: "Ordu Üniversitesi (ODÜ)",
    faculty: "Fatsa Deniz Bilimleri Fakültesi",
    program: "Gemi İnşaatı ve Gemi Makineleri Mühendisliği",
    city: "Ordu",
    campus: "Fatsa Yerleşkesi",
    type: "Devlet",
    scholarship: "Ücretsiz",
    language: "Türkçe",
    quota_2024: 25,
    enrolled_2024: 26,
    rank_2024: 95257,
    score_2024: 408.473,
    rank_2023: 143419,
    score_2023: 352.890,
    rank_2022: 158000,
    score_2022: 362.000,
    rank_2021: 185000,
    trend: "up",
    nets: {
      tyt_turkce: 24.2,
      tyt_sosyal: 11.0,
      tyt_mat: 22.0,
      tyt_fen: 10.2,
      tyt_toplam: 67.4,
      ayt_mat: 21.0,
      ayt_fizik: 7.2,
      ayt_kimya: 6.8,
      ayt_biyo: 6.5,
      ayt_toplam: 41.5,
      obp_avg: 81.0
    },
    features: [
      "Fatsa sahilinde denize nazır modern deniz bilimleri kampüsü",
      "Butik sınıf yapısı sayesinde öğretim üyeleri ile yakın çalışma ortamı",
      "Karadeniz kıyı yapıları, balıkçı tekneleri ve sac tekne inşası odağı"
    ],
    shipyard_link: "Ordu, Ünye, Trabzon ve Tuzla tersaneleri.",
    yok_url: "https://yokatlas.yok.gov.tr/lisans.php?y=108310321"
  },
  {
    id: "itu-strathclyde",
    code: "105510678",
    university: "İstanbul Teknik Üniversitesi (İTÜ - UOLP)",
    faculty: "Gemi İnşaatı ve Deniz Bilimleri Fakültesi",
    program: "Gemi İnş. ve Gemi Mak. Müh. (İTÜ - Strathclyde University)",
    city: "İstanbul / Birleşik Krallık",
    campus: "İTÜ Maslak (1. & 2. Yıl) + Glasgow İskoçya (3. & 4. Yıl)",
    type: "Devlet (UOLP)",
    scholarship: "Ücretli",
    language: "İngilizce (%100)",
    quota_2024: 25,
    enrolled_2024: 25,
    rank_2024: 111022,
    score_2024: 375.383,
    rank_2023: 135000,
    score_2023: 362.000,
    rank_2022: 150000,
    score_2022: 365.000,
    rank_2021: 180000,
    trend: "up",
    nets: {
      tyt_turkce: 25.0,
      tyt_sosyal: 11.5,
      tyt_mat: 22.5,
      tyt_fen: 10.5,
      tyt_toplam: 69.5,
      ayt_mat: 21.5,
      ayt_fizik: 7.5,
      ayt_kimya: 7.0,
      ayt_biyo: 6.8,
      ayt_toplam: 42.8,
      obp_avg: 82.0
    },
    features: [
      "Çift Diploma: Hem İTÜ hem University of Strathclyde (İskoçya/UK) lisans diploması",
      "Strathclyde, Avrupa'nın 1 numaralı Naval Architecture & Marine Engineering merkezidir",
      "Mezuniyette İngiltere ve Avrupa'da doğrudan mühendislik yapma ve çalışma vizesi avantajı",
      "Kraliyet Mühendislik Kurumu (Royal Institution of Naval Architects - RINA) tam akreditasyonu"
    ],
    shipyard_link: "Avrupa ve Birleşik Krallık tersaneleri ile global klas kuruluşları (Lloyd's Register vb.).",
    yok_url: "https://yokatlas.yok.gov.tr/lisans.php?y=105510678"
  },
  {
    id: "iste-orgun",
    code: "110710189",
    university: "İskenderun Teknik Üniversitesi (İSTE)",
    faculty: "Barbaros Hayrettin Gemi İnşaatı ve Denizcilik Fakültesi",
    program: "Gemi İnşaatı ve Gemi Makineleri Mühendisliği",
    city: "Hatay",
    campus: "Merkez Yerleşke (İskenderun)",
    type: "Devlet",
    scholarship: "Ücretsiz",
    language: "Türkçe",
    quota_2024: 40,
    enrolled_2024: 41,
    rank_2024: 112399,
    score_2024: 403.689,
    rank_2023: 168500,
    score_2023: 338.400,
    rank_2022: 175000,
    score_2022: 350.000,
    rank_2021: 210000,
    trend: "up",
    nets: {
      tyt_turkce: 23.5,
      tyt_sosyal: 10.8,
      tyt_mat: 20.5,
      tyt_fen: 9.8,
      tyt_toplam: 64.6,
      ayt_mat: 19.5,
      ayt_fizik: 6.8,
      ayt_kimya: 6.2,
      ayt_biyo: 6.0,
      ayt_toplam: 38.5,
      obp_avg: 80.2
    },
    features: [
      "Akdeniz'in en stratejik ağır sanayi ve liman kenti İskenderun Körfezi'nde yerleşim",
      "İsdemir Çelik Tesisleri ve gemi sacı üreticilerine en yakın üniversite",
      "Doğu Akdeniz boru hatları, açık deniz lojistik ve gemi bakım-onarım odağı",
      "Barbaros Hayrettin Paşa adını taşıyan köklü denizcilik vizyonu"
    ],
    shipyard_link: "İskenderun Körfezi liman ve tersaneleri, Adana/Mersin deniz tesisleri.",
    yok_url: "https://yokatlas.yok.gov.tr/lisans.php?y=110710189"
  },
  {
    id: "piri-reis-50",
    code: "204910192",
    university: "Pîrî Reis Üniversitesi (İstanbul)",
    faculty: "Mühendislik Fakültesi",
    program: "Gemi İnşaatı ve Gemi Makineleri Mühendisliği (%50 İndirimli)",
    city: "İstanbul",
    campus: "Tuzla Deniz Kampüsü",
    type: "Vakıf",
    scholarship: "%50 İndirimli",
    language: "İngilizce (%100)",
    quota_2024: 68,
    enrolled_2024: 70,
    rank_2024: 128218,
    score_2024: 388.520,
    rank_2023: 175400,
    score_2023: 335.210,
    rank_2022: 185000,
    score_2022: 345.000,
    rank_2021: 220000,
    trend: "up",
    nets: {
      tyt_turkce: 22.8,
      tyt_sosyal: 10.5,
      tyt_mat: 19.5,
      tyt_fen: 9.2,
      tyt_toplam: 62.0,
      ayt_mat: 18.5,
      ayt_fizik: 6.5,
      ayt_kimya: 6.0,
      ayt_biyo: 5.8,
      ayt_toplam: 36.8,
      obp_avg: 79.5
    },
    features: [
      "Tuzla Tersaneler bölgesinde %50 indirimli eğitim fırsatı",
      "Tüm tersane staj ve kariyer kapılarına eşit erişim",
      "Tamamen İngilizce denizcilik mühendisliği müfredatı"
    ],
    shipyard_link: "Tuzla ve Yalova tersaneleri.",
    yok_url: "https://yokatlas.yok.gov.tr/lisans.php?y=204910192"
  },
  {
    id: "piri-reis-ucretli",
    code: "204910208",
    university: "Pîrî Reis Üniversitesi (İstanbul)",
    faculty: "Mühendislik Fakültesi",
    program: "Gemi İnşaatı ve Gemi Makineleri Mühendisliği (Ücretli)",
    city: "İstanbul",
    campus: "Tuzla Deniz Kampüsü",
    type: "Vakıf",
    scholarship: "Ücretli",
    language: "İngilizce (%100)",
    quota_2024: 36,
    enrolled_2024: 36,
    rank_2024: 234265,
    score_2024: 310.210,
    rank_2023: 260000,
    score_2023: 295.000,
    rank_2022: 280000,
    score_2022: 298.000,
    rank_2021: 299000,
    trend: "stable",
    nets: {
      tyt_turkce: 20.0,
      tyt_sosyal: 9.5,
      tyt_mat: 14.5,
      tyt_fen: 7.2,
      tyt_toplam: 51.2,
      ayt_mat: 12.0,
      ayt_fizik: 4.5,
      ayt_kimya: 4.2,
      ayt_biyo: 4.0,
      ayt_toplam: 24.7,
      obp_avg: 76.0
    },
    features: [
      "Mühendislik barajını (300.000) aşan adaylar için Tuzla'da doğrudan sektörün içinde okuma imkanı",
      "İngilizce eğitim ve Pîrî Reis mezunları ağı"
    ],
    shipyard_link: "Tuzla Tersaneler Bölgesi.",
    yok_url: "https://yokatlas.yok.gov.tr/lisans.php?y=204910208"
  }
];

// Gemi İnşaat Mühendisliği 4 Yıllık Müfredat Dersleri Rehberi
const CURRICULUM_DATA = [
  {
    year: "1. Sınıf - Temel Mühendislik & Denizciliğe Giriş",
    desc: "Tüm mühendisliklerin temeli olan matematik ve fizik analizleri ile gemi geometrisinin ilk adımları.",
    courses: [
      { name: "Matematik I & II (Calculus)", desc: "Türev, integral, çok değişkenli analiz (dalga ve hacim hesapları için temel)." },
      { name: "Fizik I & II (Mekanik ve Dalga)", desc: "Kuvvet, moment, dinamik ve akışkan hareketlerinin fiziksel temelleri." },
      { name: "Gemi Mühendisliğine Giriş & Etik", desc: "Tersaneler, gemi türleri, denizcilik terminolojisi ve endüstri vizyonu." },
      { name: "Teknik Resim & Bilgisayar Destekli Çizim (CAD)", desc: "AutoCAD ve gemi teknik çizim standartları, 3 boyutlu modelleme." },
      { name: "Mühendislik Kimyası & Malzeme Bilgisi", desc: "Gemi sacı (çelik), korozyon, kompozit malzemeler ve galvanik paslanma." }
    ]
  },
  {
    year: "2. Sınıf - Gemi Teorisi & Mekanik Çekirdek",
    desc: "Gemi suyun üzerinde nasıl durur, nasıl dengede kalır ve suyun direncini nasıl yener?",
    courses: [
      { name: "Gemi Geometrisi & Endaze Çizimi", desc: "Geminin su altı formunun (lines plan / endaze) santim santim matematiksel tasarımı." },
      { name: "Gemi Hidrostatiği & Batmazlık (Statik Stabilite)", desc: "Arşimet prensibi, deplasman, metasentır (GM), gemi yalpası ve batmazlık hesapları." },
      { name: "Akışkanlar Mekaniği", desc: "Suyun ve havanın hareket denklemleri, Navier-Stokes, sınır tabaka ve kaldırma kuvveti." },
      { name: "Mukavemet I & II", desc: "Dev dalgaların gemi gövdesine yaptığı bükülme, kayma ve yorulma gerilmeleri." },
      { name: "Termodinamik & Isı Transferi", desc: "Gemi makinelerinde yakıt-enerji çevrimi, ısı kayıpları ve soğutma sistemleri." }
    ]
  },
  {
    year: "3. Sınıf - Hidrodinamik, Sevk Sistemleri & Tersane Stajı",
    desc: "Tersane tozu yutulan, pervane ve sevk hesaplarının yapıldığı uzmanlaşma yılı.",
    courses: [
      { name: "Gemi Direnci & Sevki (Hidrodinamik)", desc: "Sürtünme ve dalga direnci hesapları, model deneyleri, çekme havuzu testleri." },
      { name: "Gemi Pervane & Kavitasyon Tasarımı", desc: "Optimum pervane geometrisi, kavitasyon erozyonunu önleme, itme gücü hesabı." },
      { name: "Gemi Dizel Makineleri & Güç Sistemleri", desc: "Devasa 2-zamanlı ve 4-zamanlı deniz motorları, turboşarjlar, yakıt optimizasyonu." },
      { name: "Gemi Yapı Elemanları & Mukavemet Hesabı", desc: "Postalar, kemereler, tulaniler, dip omurgası, perde hesapları ve sonlu elemanlar (FEM)." },
      { name: "Zorunlu Tersane Stajı (Tuzla / Yalova)", desc: "Tersanede kızak, sac kesim, kaynak montajı, havuzlama ve donatım saha stajı." }
    ]
  },
  {
    year: "4. Sınıf - Tam Teşekküllü Gemi Dizaynı & Bitirme Projesi",
    desc: "Öğrenci sıfırdan bir gemiyi tasarlar, tüm klas kurallarını hesaplar ve mühendis unvanını alır.",
    courses: [
      { name: "Gemi Tasarımı (Bitirme / Mezuniyet Projesi)", desc: "Sıfırdan bir konteyner gemisi, fırkateyn veya mega yatın ana hatlarıyla projelendirilmesi." },
      { name: "Gemi Üretim Yöntemleri & Tersane Organizasyonu", desc: "Blok montaj teknolojisi, kızaktan indirme (launching), tersane vinç ve havuz planlaması." },
      { name: "Klas Kuruluşları Kuralları & IMO / SOLAS", desc: "Türk Loydu, DNV, Lloyd's Register kuralları, uluslararası deniz can ve mal güvenliği mevzuatı." },
      { name: "Gemi Yardımcı Makineleri & Boru Devreleri", desc: "Sintine, balast, yangın devreleri, dümen makineleri, evaporatörler ve jeneratörler." },
      { name: "Yeşil Gemi Teknolojileri & Alternatif Yakıtlar", desc: "LNG, hidrojen, amonyak, bataryalı elektrikli gemiler ve IMO 2050 sıfır karbon hedefleri." }
    ]
  }
];

// 11. Sınıf Öğrencisi İçin Özel Hazırlık & Başarı Stratejisi
const ROADMAP_DATA = {
  title: "11. Sınıf Gemi İnşaat Mühendisliği Rota Planı",
  stages: [
    {
      period: "11. Sınıf 1. Dönem (Eylül - Ocak)",
      focus: "Temeli Sağlamlaştır: Trigonometri, Vektör ve Fonksiyon Hakimiyeti",
      steps: [
        "Trigonometri konusunu adın gibi öğren: Gemi hidrostatik hesapları, dalga boyu ve momentler tamamen trigonometri üzerine kuruludur.",
        "11. Sınıf Fizik (Vektörler, Bağıl Hareket, Newton Hareket Yasaları, İki Boyutta Hareket, İş-Güç-Enerji, İtme-Momentum): Bu konular AYT Fiziğin %50'sidir ve Gemi Dinamiğinin temelidir.",
        "Haftada 2 gün TYT Paragraf ve Problem rutini başlat (Günde 20 soru paragraf, 15 soru problem).",
        "Tersane ve gemi inşa belgesellerini incele; hedefini gözünde canlandır."
      ]
    },
    {
      period: "11. Sınıf 2. Dönem (Şubat - Haziran)",
      focus: "AYT Kimya & Biyoloji ile 11. Sınıf AYT Matematik Çemberi",
      steps: [
        "11. Sınıf Matematik: Analitik Geometri ve Çember-Daire konularını bitir (Gemi endazesi ve gövde yayları bu geometriye dayanır).",
        "11. Sınıf Kimya: Sıvı Çözeltiler, Kimyasal Tepkimelerde Enerji, Hız ve Denge (İleride Gemi Makineleri Yanma analizinde işine yarayacak).",
        "Haftada 1 adet TYT Genel Denemesi çözmeye başla; süreyi ve eksik analizini gör.",
        "Hedef üniversiteni seç (Örn: İTÜ veya YTÜ) ve çalışma masana amblemini/hedefini as!"
      ]
    },
    {
      period: "11'den 12'ye Geçiş Yaz Kampı (Temmuz - Ağustos)",
      focus: "TYT'yi Çantaya Koy & 12. Sınıfa 1-0 Önde Başla",
      steps: [
        "Temmuz: TYT Matematik konularını (İlk 12 konu + Problemler + Geometri) bitir ve kamp denemesi çöz.",
        "Ağustos: TYT Fen (Fizik, Kimya, Biyoloji) 9-10 tekrarını tamamla.",
        "TYT Netini Ağustos sonunda 75-85 bandına sabitlemeye çalış.",
        "Yazın bir gün ailenden ya da öğretmeninden Tuzla veya Yalova tersanelerini kıyıdan görmeyi iste; o dev blokları görmek motivasyonunu 10 katına çıkaracaktır!"
      ]
    },
    {
      period: "12. Sınıf Son Viraj (Eylül - Sınav Günü)",
      focus: "AYT Ağırlıklı Tersane Şampiyonluk Maratonu",
      steps: [
        "Zamanının %70'ini AYT'ye, %30'unu TYT deneme & kondisyonuna ayır.",
        "Türev, İntegral ve Limit konularını kusursuz hale getir (İTÜ/YTÜ kazanmak AYT Matematikte 33+ netten geçer).",
        "ÖSYM Çıkmış Soruları (2018-2025) en az 2 kez baştan sona çöz.",
        "Deneme analizlerinde yanlış yaptığın her sorunun konusunu aynı gün tekrar et."
      ]
    }
  ]
};

// Sektör, Kariyer, Tersaneler ve Maaşlar Bilgi Veritabanı
const CAREER_DATA = {
  sectors: [
    {
      name: "Tersaneler (Shipyards)",
      roles: "Tersane Müdürü, Dizayn Mühendisi, Saha Üretim Mühendisi, Kalite Kontrol (QC) Mühendisi, Planlama Mühendisi",
      locations: "Tuzla (İstanbul), Yalova (Altınova), Karadeniz (Çamburnu/Trabzon, Ereğli), Antalya Serbest Bölge, Bodrum",
      desc: "Geminin çelik sacdan denize inişine kadar tüm aşamalarını yönetirsiniz. Devasa vinçler, yüzdürme havuzları ve yüksek teknolojili blok montaj sahaları."
    },
    {
      name: "Gemi Tasarım & Dizayn Ofisleri (Design Offices)",
      roles: "Gemi Form Tasarımcısı, CFD / Hidrodinamik Analisti, Yapısal Hesaplama Uzmanı, İç Mimari & Donatım Mühendisi",
      locations: "İstanbul (Tuzla, Levent, Ataşehir), Yalova, İzmir, Antalya, Yurt dışı (Hollanda, Norveç, Almanya)",
      desc: "Bilgisayar başında Maxsurf, Rhino, AutoCAD, NAPA ve ANSYS programları ile geleceğin otonom, yeşil veya askeri gemilerini modelliyorsunuz."
    },
    {
      name: "Savunma Sanayii (Naval Defence)",
      roles: "Harp Gemisi Tasarımcısı, Sualtı Akustik Mühendisi, Silah & Sensör Entegrasyon Uzmanı",
      locations: "STM Savunma, ASELSAN, HAVELSAN, ROKETSAN, ASFAT, İstanbul ve Gölcük Askeri Tersaneleri",
      desc: "MİLGEM Korvetleri, TCG ANADOLU LHD, İtfaiye ve Kurtarma Gemileri, İnsansız Deniz Araçları (ULAQ, MARLİN) ve Milli Denizaltı (MİLDEN) projeleri."
    },
    {
      name: "Uluslararası Klas Kuruluşları (Classification Societies / Loydlar)",
      roles: "Gemi Sörveyörü (Surveyor), Plan Onay Mühendisi (Plan Approval Engineer), Kural Geliştirici",
      locations: "Türk Loydu, DNV (Norveç-Almanya), Lloyd's Register (Birleşik Krallık), ABS (ABD), Bureau Veritas (Fransa)",
      desc: "Gemilerin uluslararası standartlara, can güvenliğine ve deniz çevresine uygunluğunu denetler, sertifikalandırırsınız. Dünya çapında saygın ve yüksek döviz gelirli kariyer."
    },
    {
      name: "Mega Yat & Süper Yat İnşası (Luxury Yacht Industry)",
      roles: "Yat Tasarımcısı, Kompozit Malzeme Uzmanı, Proje Yöneticisi",
      locations: "Antalya Serbest Bölge, Tuzla, Bodrum, Yalova",
      desc: "Türkiye dünyanın en büyük 3 mega yat üreticisinden biridir (İtalya ve Hollanda ile yarışıyor). Milyonlarca dolarlık lüks yatların tasarım ve üretiminde en çok aranan mühendislerdir."
    }
  ],
  salaries: [
    { level: "Yeni Mezun (Tersane / Ofis)", tr_salary: "45.000 TL - 75.000 TL / Ay", global_salary: "$2.000 - $3.500 / Ay" },
    { level: "3-5 Yıl Deneyimli Uzman Mühendis", tr_salary: "85.000 TL - 150.000 TL / Ay", global_salary: "$4.000 - $7.000 / Ay" },
    { level: "Kıdemli / Tersane Müdürü / Proje Lideri", tr_salary: "180.000 TL - 350.000+ TL / Ay", global_salary: "$8.000 - $15.000+ / Ay" }
  ],
  faq: [
    {
      q: "Gemi İnşaat Mühendisi gemiye binip aylarca okyanusta kalır mı?",
      a: "HAYIR! En büyük yanılgı budur. Gemiye binip aylarca sefer yapanlar 'Gemi Makineleri İşletme' veya 'Deniz Ulaştırma İşletme (Kaptanlık)' mezunlarıdır. Gemi İnşaatı Mühendisleri KARADA çalışır; tersanelerde, dizayn ofislerinde, genel merkezlerde, klas kuruluşlarında ve savunma sanayiinde görev yaparlar. Yalnızca yeni yapılan geminin 2-3 günlük deniz tecrübesi (sea trial) testlerine katılırlar."
    },
    {
      q: "Yabancı dil (İngilizce) ne kadar önemlidir?",
      a: "Hayati öneme sahiptir! Uluslararası denizcilik örgütü IMO kuralları, SOLAS yönetmelikleri, yazılımlar (Rhino, Maxsurf, NAPA) ve klas kural kitapları tamamen İngilizcedir. İngilizcesi iyi olan bir gemi mühendisi Hollanda, Almanya, Norveç, Singapur ve Dubai tersanelerinde çok kolay iş bulur."
    },
    {
      q: "Kadın öğrenciler için uygun bir bölüm müdür?",
      a: "Kesinlikle evet! Günümüzde İTÜ ve YTÜ Gemi İnşaatı bölümlerinde kadın öğrenci oranı %25-30'lara ulaşmıştır. Özellikle Dizayn Ofisleri, 3D Modelleme, Hidrodinamik Hesaplama, Proje Planlama, Kalite Kontrol ve Klaslama kuruluşlarında çok sayıda başarılı kadın gemi inşaatı mühendisi yönetici olarak çalışmaktadır."
    },
    {
      q: "Gemi İnşaatı ile Makine Mühendisliği arasındaki fark nedir?",
      a: "Gemi İnşaatı Mühendisi, Makine Mühendisliğinin tüm temel mekanik, termodinamik ve mukavemet bilgisine sahiptir. Ancak üzerine akışkanlar hidrodinamiği, gemi geometrisi, batmazlık, pervane tasarımı ve devasa deniz yapılarının inşası gibi benzersiz bir uzmanlık katar. Bir gemi mühendisi makine mühendisinin yaptığı işi yapabilir, ancak bir makine mühendisi gemi tasarlayamaz."
    }
  ]
};
