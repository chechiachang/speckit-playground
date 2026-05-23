import { strict as assert } from 'node:assert';

function renderMessage(stations, filtered, error) {
  if (error) return '站點資料載入失敗，請稍後再試。';
  if (!stations.length) return '正在載入站點資料...';
  if (!filtered.length) return '找不到符合條件的站點。';
  return '站點資料已載入。';
}

assert.equal(renderMessage([], [], false), '正在載入站點資料...');
assert.equal(renderMessage([{ name: 'A' }], [], false), '找不到符合條件的站點。');
assert.equal(renderMessage([], [], true), '站點資料載入失敗，請稍後再試。');
