import { strict as assert } from 'node:assert';

function matchesKeyword(station, term) {
  if (!term) return true;
  return `${station.name} ${station.address}`.toLowerCase().includes(term.toLowerCase());
}

const stations = [
  { name: '台北車站', address: '中正區忠孝西路一段', availableBikes: 5, emptyDocks: 8 },
  { name: '信義廣場', address: '信義區市府路', availableBikes: 2, emptyDocks: 1 },
];

assert.equal(stations.filter((station) => matchesKeyword(station, '信義')).length, 1);
assert.equal(stations.filter((station) => matchesKeyword(station, '市府')).length, 1);
assert.equal(stations.filter((station) => matchesKeyword(station, '不存在')).length, 0);
