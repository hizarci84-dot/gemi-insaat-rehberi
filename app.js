/**
 * Gemi İnşaatı ve Gemi Makineleri Mühendisliği 11. Sınıf Rehberi
 * Uygulama Mantığı, YÖK Atlas Filtreleme, Simülatör ve Etkileşimler
 */

// Uygulama Durumu (State)
const appState = {
  currentTab: 'overview',
  activeFilter: 'all',
  searchQuery: '',
  sortBy: 'rank-asc',
  selectedForCompare: [], // Karşılaştırma için seçilen id'ler (maks 3)
  simInputs: {
    obp: 88,
    tytTurkce: 28,
    tytMat: 27,
    tytFen: 12,
    tytSosyal: 13,
    aytMat: 26,
    aytFizik: 8,
    aytKimya: 7,
    aytBiyo: 7
  }
};

// ==========================================================================
// BAŞLATMA & EVENT LISTENERS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  renderSectors();
  renderSalaries();
  renderUnis();
  initSimulator();
  renderTimeline();
  renderCurriculum();
  renderFAQ();
  loadSavedPlan();
  registerServiceWorker();
});

// ==========================================================================
// TEMA YÖNETİMİ (GECE / GÜNDÜZ)
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem('gemi_rehber_theme') || 'navy';
  if (savedTheme === 'light') {
    document.body.classList.remove('theme-navy');
    document.body.classList.add('theme-light');
  }

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      if (document.body.classList.contains('theme-light')) {
        document.body.classList.remove('theme-light');
        document.body.classList.add('theme-navy');
        localStorage.setItem('gemi_rehber_theme', 'navy');
      } else {
        document.body.classList.remove('theme-navy');
        document.body.classList.add('theme-light');
        localStorage.setItem('gemi_rehber_theme', 'light');
      }
    });
  }

  const sharePlanBtn = document.getElementById('sharePlanBtn');
  if (sharePlanBtn) {
    sharePlanBtn.addEventListener('click', sendPlanToTeacher);
  }
}

// ==========================================================================
// SEKME (NAVİGASYON) YÖNETİMİ
// ==========================================================================
function initNavigation() {
  const navButtons = document.querySelectorAll('.app-nav .nav-btn');
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.getAttribute('data-tab');
      switchTab(tabName);
    });
  });
}

function switchTab(tabId) {
  appState.currentTab = tabId;

  // Sekme butonlarını güncelle
  document.querySelectorAll('.app-nav .nav-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Sekme içeriklerini güncelle
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.remove('active');
  });

  const targetPane = document.getElementById(`tab-${tabId}`);
  if (targetPane) {
    targetPane.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ==========================================================================
// SEKTÖR VE MAAŞ BİLGİLERİ (PUSULA SEKMESİ)
// ==========================================================================
function renderSectors() {
  const container = document.getElementById('sectorCardsContainer');
  if (!container || !CAREER_DATA) return;

  container.innerHTML = CAREER_DATA.sectors.map(sec => `
    <div class="sector-card">
      <div class="sector-top">
        <h4 class="sector-name">${sec.name}</h4>
        <span class="sector-loc">${sec.locations.split(',')[0]}</span>
      </div>
      <div class="sector-roles">⚓ ${sec.roles}</div>
      <p class="sector-desc">${sec.desc}</p>
    </div>
  `).join('');
}

function renderSalaries() {
  const container = document.getElementById('salaryTableContainer');
  if (!container || !CAREER_DATA) return;

  let html = `
    <div class="salary-row head">
      <span>Kariyer Kademesi</span>
      <span>Türkiye (Aylık)</span>
      <span>Global / Yurt Dışı</span>
    </div>
  `;

  html += CAREER_DATA.salaries.map(sal => `
    <div class="salary-row">
      <span style="font-weight: 700; color: var(--text-main);">${sal.level}</span>
      <span class="salary-val-tr">${sal.tr_salary}</span>
      <span class="salary-val-global">${sal.global_salary}</span>
    </div>
  `).join('');

  container.innerHTML = html;
}

// ==========================================================================
// YÖK ATLAS ÜNİVERSİTELER & FİLTRELEME SİSTEMİ
// ==========================================================================
function initAtlasControls() {
  // Filtre Hapları
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      appState.activeFilter = pill.getAttribute('data-filter');
      renderUnis();
    });
  });

  // Arama Girişi
  const searchInput = document.getElementById('uniSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      appState.searchQuery = e.target.value.toLowerCase().trim();
      clearBtn.style.display = appState.searchQuery ? 'block' : 'none';
      renderUnis();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      appState.searchQuery = '';
      clearBtn.style.display = 'none';
      renderUnis();
    });
  }

  // Sıralama Seçimi
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      appState.sortBy = e.target.value;
      renderUnis();
    });
  }

  // Karşılaştırma Modalı Aç Butonu
  const openCompareModalBtn = document.getElementById('openCompareModalBtn');
  if (openCompareModalBtn) {
    openCompareModalBtn.addEventListener('click', openCompareModal);
  }
}

function renderUnis() {
  const container = document.getElementById('uniGridContainer');
  if (!container || !YOK_ATLAS_DATA) return;

  // Filtreleme
  let list = YOK_ATLAS_DATA.filter(uni => {
    // Filtre hapı
    if (appState.activeFilter === 'devlet' && uni.type !== 'Devlet') return false;
    if (appState.activeFilter === 'vakif' && uni.type !== 'Vakıf') return false;
    if (appState.activeFilter === 'ingilizce' && !uni.language.includes('İngilizce')) return false;
    if (appState.activeFilter === 'istanbul' && uni.city !== 'İstanbul') return false;
    if (appState.activeFilter === 'anadolu' && uni.city === 'İstanbul') return false;

    // Arama sorgusu
    if (appState.searchQuery) {
      const q = appState.searchQuery;
      const matchName = uni.university.toLowerCase().includes(q);
      const matchCity = uni.city.toLowerCase().includes(q);
      const matchFaculty = uni.faculty.toLowerCase().includes(q);
      const matchProg = uni.program.toLowerCase().includes(q);
      if (!matchName && !matchCity && !matchFaculty && !matchProg) return false;
    }

    return true;
  });

  // Sıralama
  list.sort((a, b) => {
    if (appState.sortBy === 'rank-asc') return a.rank_2024 - b.rank_2024;
    if (appState.sortBy === 'score-desc') return b.score_2024 - a.score_2024;
    if (appState.sortBy === 'name-asc') return a.university.localeCompare(b.university, 'tr');
    if (appState.sortBy === 'quota-desc') return b.quota_2024 - a.quota_2024;
    return 0;
  });

  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 30px 10px; color: var(--text-muted);">
        <p>Arama kriterine uygun üniversite bulunamadı.</p>
        <button class="btn btn-secondary" style="margin-top: 10px;" onclick="resetFilters()">Filtreleri Sıfırla</button>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(uni => {
    const isSelected = appState.selectedForCompare.includes(uni.id);
    const badgeTypeClass = uni.type === 'Devlet' ? 'badge-devlet' : 'badge-vakif';
    const rankDiff = uni.rank_2023 - uni.rank_2024; // Pozitifse yükselmiş
    const trendText = rankDiff > 0 ? `▲ ${rankDiff.toLocaleString('tr-TR')} sıra yükseldi` : '— Dengeli';

    return `
      <div class="uni-card ${isSelected ? 'compare-selected' : ''}" id="card-${uni.id}">
        <div class="uni-top-row">
          <div class="uni-badges">
            <span class="badge-tag ${badgeTypeClass}">${uni.type}</span>
            <span class="badge-tag badge-lang">${uni.language}</span>
            ${uni.scholarship !== 'Ücretsiz' ? `<span class="badge-tag badge-vakif">${uni.scholarship}</span>` : ''}
          </div>
          <label class="uni-checkbox-wrap">
            <input type="checkbox" onchange="toggleCompare('${uni.id}')" ${isSelected ? 'checked' : ''}>
            <span>Kıyasla</span>
          </label>
        </div>

        <h3 class="uni-title">${uni.university}</h3>
        <div class="uni-faculty">${uni.faculty}</div>

        <div class="uni-metrics-grid">
          <div class="metric-item">
            <span class="metric-title">2024 Başarı Sırası</span>
            <span class="metric-val text-cyan">${uni.rank_2024.toLocaleString('tr-TR')}</span>
          </div>
          <div class="metric-item">
            <span class="metric-title">2024 Taban Puan</span>
            <span class="metric-val text-gold">${uni.score_2024.toFixed(2)}</span>
          </div>
          <div class="metric-item">
            <span class="metric-title">Kontenjan</span>
            <span class="metric-val text-emerald">${uni.quota_2024} (+${uni.enrolled_2024 - uni.quota_2024 > 0 ? uni.enrolled_2024 - uni.quota_2024 : 1})</span>
          </div>
        </div>

        <div class="uni-footer-row">
          <span class="uni-city">📍 ${uni.city} &bull; <small style="color: var(--accent-emerald); font-weight:700;">${trendText}</small></span>
          <button class="uni-detail-btn" onclick="openUniDetail('${uni.id}')">
            Detay & Netler &rarr;
          </button>
        </div>
      </div>
    `;
  }).join('');

  updateCompareButton();
}

function resetFilters() {
  appState.activeFilter = 'all';
  appState.searchQuery = '';
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  document.querySelector('.filter-pill[data-filter="all"]').classList.add('active');
  const searchInput = document.getElementById('uniSearchInput');
  if (searchInput) searchInput.value = '';
  renderUnis();
}

function toggleCompare(uniId) {
  const index = appState.selectedForCompare.indexOf(uniId);
  if (index > -1) {
    appState.selectedForCompare.splice(index, 1);
  } else {
    if (appState.selectedForCompare.length >= 3) {
      alert('En fazla 3 üniversiteyi aynı anda karşılaştırabilirsiniz.');
      renderUnis();
      return;
    }
    appState.selectedForCompare.push(uniId);
  }
  renderUnis();
}

function updateCompareButton() {
  const btn = document.getElementById('openCompareModalBtn');
  const countSpan = document.getElementById('compareCount');
  if (countSpan) countSpan.textContent = appState.selectedForCompare.length;
  if (btn) {
    btn.disabled = appState.selectedForCompare.length < 2;
  }
}

// Üniversite Detay Modalı
function openUniDetail(uniId) {
  const uni = YOK_ATLAS_DATA.find(u => u.id === uniId);
  if (!uni) return;

  const modal = document.getElementById('uniDetailModal');
  const body = document.getElementById('uniModalBody');

  body.innerHTML = `
    <div class="modal-uni-header">
      <div class="uni-badges" style="margin-bottom: 8px;">
        <span class="badge-tag badge-devlet">${uni.type}</span>
        <span class="badge-tag badge-lang">${uni.language}</span>
        <span class="badge-tag badge-vakif">${uni.scholarship}</span>
      </div>
      <h3 class="modal-uni-title">${uni.university}</h3>
      <div class="modal-uni-faculty">${uni.faculty} - ${uni.program}</div>
      <div style="font-size: 0.75rem; color: var(--accent-gold); margin-top: 4px;">Yerleşke: ${uni.campus}</div>
    </div>

    <div class="modal-sec-title">📊 YÖK Atlas Net Analizi (Son Giren Öğrenci Ortalaması)</div>
    <div class="modal-nets-grid">
      <div class="modal-net-row"><span>TYT Türkçe:</span> <strong>${uni.nets.tyt_turkce}</strong></div>
      <div class="modal-net-row"><span>TYT Temel Mat:</span> <strong>${uni.nets.tyt_mat}</strong></div>
      <div class="modal-net-row"><span>TYT Fen Bil.:</span> <strong>${uni.nets.tyt_fen}</strong></div>
      <div class="modal-net-row"><span>TYT Sosyal Bil.:</span> <strong>${uni.nets.tyt_sosyal}</strong></div>
      <div class="modal-net-row" style="color: var(--accent-cyan); font-weight:700;"><span>TYT Toplam Net:</span> <strong>${uni.nets.tyt_toplam}</strong></div>
      <div class="modal-net-row"><span>AYT Matematik:</span> <strong>${uni.nets.ayt_mat}</strong></div>
      <div class="modal-net-row"><span>AYT Fizik:</span> <strong>${uni.nets.ayt_fizik}</strong></div>
      <div class="modal-net-row"><span>AYT Kimya:</span> <strong>${uni.nets.ayt_kimya}</strong></div>
      <div class="modal-net-row"><span>AYT Biyoloji:</span> <strong>${uni.nets.ayt_biyo}</strong></div>
      <div class="modal-net-row" style="color: var(--accent-gold); font-weight:700;"><span>AYT Toplam Net:</span> <strong>${uni.nets.ayt_toplam}</strong></div>
    </div>

    <div class="modal-sec-title">📈 Yıllara Göre Başarı Sıralaması Trendi</div>
    <div style="display: flex; gap: 8px; font-family: var(--font-mono); font-size: 0.76rem; background: rgba(0,0,0,0.2); padding: 8px 10px; border-radius: var(--radius-sm); justify-content: space-around;">
      <div>2021: <strong>${uni.rank_2021 ? uni.rank_2021.toLocaleString('tr-TR') : '—'}</strong></div>
      <div>2022: <strong>${uni.rank_2022 ? uni.rank_2022.toLocaleString('tr-TR') : '—'}</strong></div>
      <div>2023: <strong>${uni.rank_2023.toLocaleString('tr-TR')}</strong></div>
      <div style="color: var(--accent-cyan);">2024: <strong>${uni.rank_2024.toLocaleString('tr-TR')}</strong></div>
    </div>

    <div class="modal-sec-title">⚓ Fakülte & Tersane Olanakları</div>
    <ul class="modal-features-list">
      ${uni.features.map(f => `<li>${f}</li>`).join('')}
    </ul>

    <div style="margin-top: 14px; font-size: 0.78rem; background: rgba(0, 229, 255, 0.08); padding: 10px; border-radius: var(--radius-sm); border-left: 3px solid var(--accent-cyan);">
      <strong>Tersane & Staj Bağlantısı:</strong> ${uni.shipyard_link}
    </div>

    <div style="margin-top: 18px; display: flex; gap: 8px;">
      <a href="${uni.yok_url}" target="_blank" rel="noopener" class="btn btn-primary" style="flex: 1; font-size: 0.8rem;">
        Resmi YÖK Atlas Sayfasını Aç ↗
      </a>
      <button class="btn btn-secondary" onclick="closeUniModal()">Kapat</button>
    </div>
  `;

  modal.classList.add('open');
}

function closeUniModal() {
  const modal = document.getElementById('uniDetailModal');
  if (modal) modal.classList.remove('open');
}

// Karşılaştırma Modalı
function openCompareModal() {
  const unis = YOK_ATLAS_DATA.filter(u => appState.selectedForCompare.includes(u.id));
  if (unis.length < 2) return;

  const modal = document.getElementById('compareModal');
  const container = document.getElementById('compareModalContent');

  let tableHtml = `
    <table class="compare-table">
      <thead>
        <tr>
          <th>Kriter</th>
          ${unis.map(u => `<th>${u.university}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Şehir</strong></td>
          ${unis.map(u => `<td>${u.city}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>2024 Başarı Sırası</strong></td>
          ${unis.map(u => `<td style="color: var(--accent-cyan); font-weight:800; font-family: var(--font-mono);">${u.rank_2024.toLocaleString('tr-TR')}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>2024 Taban Puan</strong></td>
          ${unis.map(u => `<td style="color: var(--accent-gold); font-weight:800; font-family: var(--font-mono);">${u.score_2024.toFixed(2)}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>2023 Başarı Sırası</strong></td>
          ${unis.map(u => `<td style="font-family: var(--font-mono);">${u.rank_2023.toLocaleString('tr-TR')}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>Eğitim Dili</strong></td>
          ${unis.map(u => `<td>${u.language}</td>`).join('')}
        </tr>
        <tr>
          <td><strong>TYT Toplam Net</strong></td>
          ${unis.map(u => `<td style="font-weight:700;">${u.nets.tyt_toplam} Net</td>`).join('')}
        </tr>
        <tr>
          <td><strong>AYT Toplam Net</strong></td>
          ${unis.map(u => `<td style="font-weight:700;">${u.nets.ayt_toplam} Net</td>`).join('')}
        </tr>
        <tr>
          <td><strong>Öne Çıkan Özellik</strong></td>
          ${unis.map(u => `<td style="font-size: 0.72rem;">${u.features[0]}</td>`).join('')}
        </tr>
      </tbody>
    </table>
  `;

  container.innerHTML = tableHtml;
  modal.classList.add('open');
}

function closeCompareModal() {
  const modal = document.getElementById('compareModal');
  if (modal) modal.classList.remove('open');
}

// ==========================================================================
// 11. SINIF HEDEF & NET SİMÜLATÖRÜ MANTIĞI
// ==========================================================================
function initSimulator() {
  initAtlasControls();

  // Slider & Value Input eşlemeleri
  const bindInput = (sliderId, inputId, key) => {
    const slider = document.getElementById(sliderId);
    const input = document.getElementById(inputId);
    const label = document.getElementById(`label${key.charAt(0).toUpperCase() + key.slice(1)}`);

    if (slider) {
      slider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        appState.simInputs[key] = val;
        if (input) input.value = val;
        if (label) label.textContent = val.toFixed(1);
        calculateScoreAndMatch();
      });
    }

    if (input) {
      input.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value) || 0;
        appState.simInputs[key] = val;
        if (slider) slider.value = val;
        if (label) label.textContent = val.toFixed(1);
        calculateScoreAndMatch();
      });
    }
  };

  bindInput('sliderObp', 'inputObp', 'obp');
  bindInput('netTytTurkce', 'netTytTurkce', 'tytTurkce');
  bindInput('netTytMat', 'netTytMat', 'tytMat');
  bindInput('netTytFen', 'netTytFen', 'tytFen');
  bindInput('netTytSosyal', 'netTytSosyal', 'tytSosyal');

  bindInput('netAytMat', 'netAytMat', 'aytMat');
  bindInput('netAytFizik', 'netAytFizik', 'aytFizik');
  bindInput('netAytKimya', 'netAytKimya', 'aytKimya');
  bindInput('netAytBiyo', 'netAytBiyo', 'aytBiyo');

  calculateScoreAndMatch();
}

function applyPreset(presetType) {
  if (presetType === 'itu') {
    setSimValues({
      obp: 93,
      tytTurkce: 33, tytMat: 36, tytFen: 18, tytSosyal: 15,
      aytMat: 36, aytFizik: 12.5, aytKimya: 12, aytBiyo: 11
    });
  } else if (presetType === 'ytu') {
    setSimValues({
      obp: 90,
      tytTurkce: 30, tytMat: 32, tytFen: 15, tytSosyal: 14,
      aytMat: 31, aytFizik: 10.5, aytKimya: 10, aytBiyo: 9.5
    });
  } else if (presetType === 'btu') {
    setSimValues({
      obp: 86,
      tytTurkce: 27, tytMat: 28, tytFen: 13, tytSosyal: 12.5,
      aytMat: 27, aytFizik: 9, aytKimya: 8.5, aytBiyo: 8.2
    });
  } else if (presetType === 'ktu') {
    setSimValues({
      obp: 82,
      tytTurkce: 25, tytMat: 24, tytFen: 11, tytSosyal: 11.5,
      aytMat: 23, aytFizik: 8, aytKimya: 7.2, aytBiyo: 7
    });
  }
}

function setSimValues(vals) {
  appState.simInputs = { ...appState.simInputs, ...vals };

  // UI güncelle
  const updateUI = (id, labelId, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val;
    const lbl = document.getElementById(labelId);
    if (lbl) lbl.textContent = Number(val).toFixed(1);
  };

  updateUI('sliderObp', null, vals.obp);
  const inputObp = document.getElementById('inputObp');
  if (inputObp) inputObp.value = vals.obp;

  updateUI('netTytTurkce', 'labelTytTurkce', vals.tytTurkce);
  updateUI('netTytMat', 'labelTytMat', vals.tytMat);
  updateUI('netTytFen', 'labelTytFen', vals.tytFen);
  updateUI('netTytSosyal', 'labelTytSosyal', vals.tytSosyal);

  updateUI('netAytMat', 'labelAytMat', vals.aytMat);
  updateUI('netAytFizik', 'labelAytFizik', vals.aytFizik);
  updateUI('netAytKimya', 'labelAytKimya', vals.aytKimya);
  updateUI('netAytBiyo', 'labelAytBiyo', vals.aytBiyo);

  calculateScoreAndMatch();
}

function calculateScoreAndMatch() {
  const { obp, tytTurkce, tytMat, tytFen, tytSosyal, aytMat, aytFizik, aytKimya, aytBiyo } = appState.simInputs;

  const tytTotal = tytTurkce + tytMat + tytFen + tytSosyal;
  const aytTotal = aytMat + aytFizik + aytKimya + aytBiyo;

  document.getElementById('tytTotalDisplay').textContent = tytTotal.toFixed(1);
  document.getElementById('aytTotalDisplay').textContent = aytTotal.toFixed(1);

  // ÖSYM SAY Puan Katsayıları (2024 Gerçek Verilerle Kalibre Edilmiş)
  // TYT Katkısı (~%40): Taban 100 + net katsayıları
  const tytScore = 100 + (tytTurkce * 1.33) + (tytMat * 1.33) + (tytSosyal * 1.36) + (tytFen * 1.36);
  
  // AYT Katkısı (~%60):
  const aytScore = (aytMat * 3.05) + (aytFizik * 2.88) + (aytKimya * 3.08) + (aytBiyo * 3.08);

  // Ham Puan
  const rawScore = (tytScore * 0.40) + aytScore + 60; // Kalibrasyon sabiti

  // OBP Katkısı
  const obpScore = obp * 0.6;

  // Nihai Yerleştirme Sayısal Puanı
  const finalScore = Math.min(560, Math.max(120, rawScore + obpScore));

  // Sıralama Kestirimi (2024 YKS Sayısal Yığılma Eğrisi)
  let estRank = 280000;
  if (finalScore >= 510) {
    estRank = Math.max(1000, Math.round(1000 + (560 - finalScore) * 150));
  } else if (finalScore >= 480) {
    // 480 - 510 -> 14.000 - 20.000 bandı
    estRank = Math.round(14000 + (510 - finalScore) * 350);
  } else if (finalScore >= 455) {
    // 455 - 480 -> 25.000 - 38.000 bandı (YTÜ, İTÜ-KKTC)
    estRank = Math.round(25000 + (480 - finalScore) * 520);
  } else if (finalScore >= 430) {
    // 430 - 455 -> 40.000 - 62.000 bandı (Pîrî Reis, BTÜ, İKÇÜ)
    estRank = Math.round(40000 + (455 - finalScore) * 880);
  } else if (finalScore >= 410) {
    // 410 - 430 -> 65.000 - 90.000 bandı (Bandırma, KTÜ)
    estRank = Math.round(65000 + (430 - finalScore) * 1250);
  } else if (finalScore >= 380) {
    // 380 - 410 -> 95.000 - 135.000 bandı (Ordu, İSTE, Strathclyde)
    estRank = Math.round(95000 + (410 - finalScore) * 1330);
  } else if (finalScore >= 340) {
    // 340 - 380 -> 140.000 - 190.000
    estRank = Math.round(140000 + (380 - finalScore) * 1250);
  } else {
    estRank = Math.round(190000 + (340 - finalScore) * 1800);
  }

  // UI Skor Güncelle
  document.getElementById('resultScore').textContent = finalScore.toFixed(2);
  document.getElementById('resultRank').textContent = `~${estRank.toLocaleString('tr-TR')}`;

  // Üniversitelerle Eşleştirme
  renderSimulatorMatches(finalScore, estRank);
}

function renderSimulatorMatches(score, rank) {
  const container = document.getElementById('matchingUnisContainer');
  const coachFeedback = document.getElementById('coachFeedback');
  if (!container || !YOK_ATLAS_DATA) return;

  const matches = YOK_ATLAS_DATA.map(uni => {
    let status = 'reach'; // reach, target, safe
    let statusText = 'Ekstra Net Gerek';
    let statusClass = 'status-reach';

    // Karşılaştırma (Sıralama ve Puan bazlı)
    if (rank <= uni.rank_2024 * 0.85 || score >= uni.score_2024 + 10) {
      status = 'safe';
      statusText = '🟢 Güvenli Liman';
      statusClass = 'status-safe';
    } else if (rank <= uni.rank_2024 * 1.15 || score >= uni.score_2024 - 10) {
      status = 'target';
      statusText = '🟡 Hedef Rotada';
      statusClass = 'status-target';
    } else {
      status = 'reach';
      statusText = '🔵 Ekstra Net Gerek';
      statusClass = 'status-reach';
    }

    return { ...uni, status, statusText, statusClass };
  });

  // Sıralamaya göre göster
  matches.sort((a, b) => a.rank_2024 - b.rank_2024);

  container.innerHTML = matches.map(m => `
    <div class="match-uni-item">
      <div class="match-uni-left">
        <span class="match-uni-name">${m.university}</span>
        <span class="match-uni-sub">2024 Taban Sıra: ${m.rank_2024.toLocaleString('tr-TR')} &bull; Puan: ${m.score_2024.toFixed(1)}</span>
      </div>
      <span class="match-uni-status ${m.statusClass}">${m.statusText}</span>
    </div>
  `).join('');

  // 11. Sınıf Öğrencisine Özel Mentörlük Notu Oluştur
  if (coachFeedback) {
    let coachMsg = '';
    const { aytMat, aytFizik, tytMat } = appState.simInputs;

    if (rank <= 18000) {
      coachMsg = `🏆 <strong>Mükemmel Rota!</strong> Bu netlerle Türkiye'nin zirvesi olan <strong>İTÜ Gemi İnşaatı ve Deniz Bilimleri Fakültesi</strong> kapılarını aralamış durumdasın! 11. sınıfta bu temeli korumak için AYT Fizik denemelerini aksatma.`;
    } else if (rank <= 36000) {
      coachMsg = `⭐ <strong>Harika Performans!</strong> <strong>Yıldız Teknik Üniversitesi (YTÜ)</strong> ve İTÜ Deniz Teknolojisi şu an güvenli rotanda! İTÜ Gemi İnşaatı için ise AYT Matematik netini +4, AYT Fizik netini +2 artırman hedefine tam oturmanı sağlayacaktır.`;
    } else if (rank <= 70000) {
      coachMsg = `⚓ <strong>Güçlü Bir Gemi Mühendisi Adayısın!</strong> <strong>Bursa Teknik (BTÜ)</strong> ve <strong>İzmir Kâtip Çelebi (İKÇÜ)</strong> tam hedefinde! YTÜ ve İTÜ limanlarına ulaşmak için 11. sınıf Trigonometri ve Fizik Vektör/Hareket testlerini sıfır hataya çekmelisin.`;
    } else if (rank <= 100000) {
      coachMsg = `🌊 <strong>Hedef Rotadasın!</strong> <strong>Karadeniz Teknik (KTÜ Sürmene)</strong> ve <strong>Bandırma Onyedi Eylül</strong> programları sana açık. İlk 50 bine girip Bursa veya Yıldız Teknik'e tırmanmak için TYT Matematik'i 28+ seviyesine yükseltmeyi hedefle.`;
    } else {
      coachMsg = `🚀 <strong>11. Sınıf Büyük Fırsat!</strong> Şu anki netlerinle İskenderun Teknik ve Ordu Üniversitesi rotasındasın. Önünde tam 1.5 yıl var! 11. sınıf Fizik ve Matematik konularını eksiksiz bitirerek rahatlıkla ilk 30.000 bandına tırmanabilirsin.`;
    }

    coachFeedback.innerHTML = coachMsg;
  }
}

// ==========================================================================
// 11. SINIF YOL HARİTASI & HEDEF KARTI
// ==========================================================================
function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container || !ROADMAP_DATA) return;

  container.innerHTML = ROADMAP_DATA.stages.map((stg, idx) => `
    <div class="timeline-stage">
      <span class="stage-badge">${stg.period}</span>
      <h4 class="stage-focus">${stg.focus}</h4>
      <ul class="stage-steps-list">
        ${stg.steps.map(s => `
          <li class="stage-step-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${s}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

function saveStudentPlan() {
  const name = document.getElementById('studentName').value.trim();
  const goalUni = document.getElementById('studentGoalUni').value;
  const note = document.getElementById('studentNote').value.trim();

  const data = { name, goalUni, note, savedAt: new Date().toLocaleDateString('tr-TR') };
  localStorage.setItem('gemi_student_plan', JSON.stringify(data));
  alert('⚓ Hedef kartın başarıyla kaydedildi! Şimdi öğretmenine WhatsApp üzerinden gönderebilirsin.');
}

function loadSavedPlan() {
  const saved = localStorage.getItem('gemi_student_plan');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      if (data.name) document.getElementById('studentName').value = data.name;
      if (data.goalUni) document.getElementById('studentGoalUni').value = data.goalUni;
      if (data.note) document.getElementById('studentNote').value = data.note;
    } catch (e) {
      console.error(e);
    }
  }
}

function sendPlanToTeacher() {
  const name = document.getElementById('studentName').value.trim() || '11. Sınıf Öğrencisi';
  const goalUniSelect = document.getElementById('studentGoalUni');
  const goalUniName = goalUniSelect ? goalUniSelect.options[goalUniSelect.selectedIndex].text : 'İTÜ Gemi İnşaat';
  const note = document.getElementById('studentNote').value.trim() || 'Bu hafta 11. sınıf sayısal konularına ağırlık veriyorum.';
  
  const score = document.getElementById('resultScore').textContent;
  const rank = document.getElementById('resultRank').textContent;
  const tytTotal = document.getElementById('tytTotalDisplay').textContent;
  const aytTotal = document.getElementById('aytTotalDisplay').textContent;

  const msg = 
`⚓ *11. SINIF GEMİ İNŞAATI MÜHENDİSLİĞİ HEDEF RAPORU* ⚓

👤 *Öğrenci:* ${name}
🎯 *Hedef Üniversite:* ${goalUniName}

📊 *Simülatör Tahmini Net ve Sıralama:*
• TYT Toplam: ${tytTotal} Net
• AYT Toplam: ${aytTotal} Net
• Tahmini SAY Puanı: ${score}
• Hedeflenen Sıralama: ${rank}

📝 *Haftalık Çalışma Sözüm:*
"${note}"

🧭 *Rehber Uygulaması:* https://hizarci84-dot.github.io/gemi-insaat-rehberi/`;

  const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
}

// ==========================================================================
// 4 YILLIK MÜFREDAT & SSS
// ==========================================================================
function renderCurriculum() {
  const container = document.getElementById('curriculumListContainer');
  if (!container || !CURRICULUM_DATA) return;

  container.innerHTML = CURRICULUM_DATA.map((curr, idx) => `
    <div class="curriculum-year-card">
      <div class="curriculum-year-head" onclick="toggleCurriculumYear(this)">
        <div>
          <h4 class="year-title">${curr.year}</h4>
          <p class="year-desc">${curr.desc}</p>
        </div>
        <span style="font-size: 1.2rem; color: var(--accent-cyan); font-weight:700;">+</span>
      </div>
      <div class="curriculum-courses-body" style="${idx === 0 ? 'display: flex;' : 'display: none;'}">
        ${curr.courses.map(c => `
          <div class="course-item">
            <h5 class="course-name">📘 ${c.name}</h5>
            <p class="course-desc">${c.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function toggleCurriculumYear(headEl) {
  const body = headEl.nextElementSibling;
  const icon = headEl.querySelector('span');
  if (body.style.display === 'none' || !body.style.display) {
    body.style.display = 'flex';
    icon.textContent = '−';
  } else {
    body.style.display = 'none';
    icon.textContent = '+';
  }
}

function renderFAQ() {
  const container = document.getElementById('faqListContainer');
  if (!container || !CAREER_DATA) return;

  container.innerHTML = CAREER_DATA.faq.map((item, idx) => `
    <div class="faq-card ${idx === 0 ? 'open' : ''}">
      <div class="faq-question" onclick="toggleFAQ(this)">
        <span>${item.q}</span>
      </div>
      <div class="faq-answer">
        <p>${item.a}</p>
      </div>
    </div>
  `).join('');
}

function toggleFAQ(el) {
  const card = el.closest('.faq-card');
  card.classList.toggle('open');
}

// ==========================================================================
// PWA (PROGRESSIVE WEB APP)
// ==========================================================================
let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

function installPWA() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Kullanıcı PWA yüklemesini kabul etti.');
      }
      deferredPrompt = null;
    });
  } else {
    alert('📱 Bu rehberi telefonuna yüklemek için:\n\n• Safari (iPhone): Paylaş butonuna basıp "Ana Ekrana Ekle" seçeneğini seçebilirsin.\n• Chrome (Android): Sağ üstteki üç noktaya tıklayıp "Ana Ekrana Ekle / Uygulamayı Yükle" diyebilirsin.');
  }
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(err => {
        console.log('SW registration note:', err);
      });
    });
  }
}
