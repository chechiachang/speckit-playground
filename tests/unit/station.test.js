import { strict as assert } from 'node:assert';

function normalizeStation(row) {
  return {
    name: row.sna?.replace(/^YouBike2\.0_/, '') ?? '',
    address: row.ar ?? '',
    availableBikes: Number(row.available_rent_bikes ?? 0),
    emptyDocks: Number(row.available_return_bikes ?? 0),
  };
}

const station = normalizeStation({
  sna: 'YouBike2.0_測試站',
  ar: '台北市中正區測試路 1 號',
  available_rent_bikes: '5',
  available_return_bikes: '8',
});

assert.equal(station.name, '測試站');
assert.equal(station.address, '台北市中正區測試路 1 號');
assert.equal(station.availableBikes, 5);
assert.equal(station.emptyDocks, 8);
