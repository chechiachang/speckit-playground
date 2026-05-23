const API_URL = 'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json';

const searchInput = document.getElementById('search');
const statusEl = document.getElementById('status');
const listEl = document.getElementById('list');
const retryButton = document.getElementById('retry');

let stations = [];
let keyword = '';

function normalizeStation(row) {
  return {
    name: row.sna?.replace(/^YouBike2\.0_/, '') ?? '',
    address: row.ar ?? '',
    availableBikes: Number(row.available_rent_bikes ?? 0),
    emptyDocks: Number(row.available_return_bikes ?? 0),
  };
}

function matchesKeyword(station, term) {
  if (!term) return true;
  const haystack = `${station.name} ${station.address}`.toLowerCase();
  return haystack.includes(term.toLowerCase());
}

function setStatus(message, tone = 'info') {
  statusEl.textContent = message;
  statusEl.className = 'mb-4 rounded-2xl px-4 py-3 text-sm';
  retryButton.classList.add('hidden');
  if (tone === 'error') {
    statusEl.classList.add('bg-rose-50', 'text-rose-700', 'ring-1', 'ring-rose-200');
    retryButton.classList.remove('hidden');
  } else if (tone === 'success') {
    statusEl.classList.add('bg-emerald-50', 'text-emerald-700', 'ring-1', 'ring-emerald-200');
  } else {
    statusEl.classList.add('bg-slate-50', 'text-slate-600', 'ring-1', 'ring-slate-200');
  }
}

function render() {
  const filtered = stations.filter((station) => matchesKeyword(station, keyword));
  listEl.innerHTML = '';

  if (!stations.length) {
    listEl.innerHTML = '<div class="px-4 py-6 text-sm text-slate-500">資料載入後可開始搜尋站點。</div>';
    return;
  }

  if (!filtered.length) {
    listEl.innerHTML = '<div class="px-4 py-6 text-sm text-slate-500">找不到符合條件的站點。</div>';
    return;
  }

  const rows = filtered.map((station) => {
    const lowBikes = station.emptyDocks < 3 ? 'text-rose-600 font-semibold' : 'text-slate-700';
    return `
      <div class="grid grid-cols-12 gap-3 px-4 py-4 text-sm">
        <div class="col-span-6 md:col-span-7">
          <div class="font-medium text-slate-900">${station.name}</div>
          <div class="mt-1 text-xs text-slate-500">${station.address}</div>
        </div>
        <div class="col-span-2 text-right text-slate-700">${station.availableBikes}</div>
        <div class="col-span-2 text-right ${lowBikes}">${station.emptyDocks}</div>
        <div class="col-span-2 md:col-span-1 text-xs text-slate-500">${station.address}</div>
      </div>`;
  });

  listEl.innerHTML = rows.join('');
  setStatus(`已載入 ${filtered.length} / ${stations.length} 個站點。`, 'success');
}

async function loadStations() {
  try {
    setStatus('正在載入站點資料...');
    const response = await fetch(API_URL, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    stations = Array.isArray(data) ? data.map(normalizeStation).filter((station) => station.name && station.address) : [];
    setStatus(stations.length ? '站點資料已載入。' : '沒有可顯示的站點資料。', stations.length ? 'success' : 'error');
    render();
  } catch (error) {
    listEl.innerHTML = '<div class="px-4 py-6 text-sm text-slate-500">目前無法顯示站點資料。</div>';
    setStatus('站點資料載入失敗，請稍後再試。', 'error');
  }
}

searchInput.addEventListener('input', (event) => {
  keyword = event.target.value.trim();
  render();
});

loadStations();

retryButton.addEventListener('click', () => {
  loadStations();
});