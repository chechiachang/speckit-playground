import { strict as assert } from 'node:assert';

function matchesKeyword(station, term) {
  if (!term) return true;
  const haystack = `${station.name} ${station.address}`.toLowerCase();
  return haystack.includes(term.toLowerCase());
}

const station = { name: '台北車站', address: '中正區忠孝西路一段' };

assert.equal(matchesKeyword(station, '台北'), true);
assert.equal(matchesKeyword(station, '忠孝'), true);
assert.equal(matchesKeyword(station, '松山'), false);
