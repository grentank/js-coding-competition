const earliestDay = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Возвращет день недели у самой ранней даты', () => {
  const res = earliestDay(['2024-05-01', '2024-05-02', '2024-05-03']);
  assert.equal(res, 'среда');
});

test('Возвращет день недели у самой ранней даты', () => {
  const res = earliestDay(['2024-09-16', '2024-09-13', '2024-10-01']);
  assert.equal(res, 'пятница');
});

test('Возвращет день недели у самой ранней даты', () => {
  const res = earliestDay([
    '2025-08-10',
    '2024-12-12',
    '2024-05-28',
    '2024-11-02',
    '2025-01-01',
    '2025-02-02',
    '2025-03-03',
  ]);
  assert.equal(res, 'вторник');
});
