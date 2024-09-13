const sumAllDigits = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Складывает все цифры всех переданных чисел', () => {
  assert.strictEqual(sumAllDigits(25, 37, 100, 4012), 25); // 25 = 2 + 5 + 3 + 6 + 1 + 0 + 0 + 4 + 0 + 1 + 2
});

test('Складывает все цифры всех переданных чисел', () => {
  assert.strictEqual(sumAllDigits(11, 43, 22, 98, 102, 32, 11, 23, 74, 75), 68);
});

test('Складывает все цифры всех переданных чисел', () => {
  assert.strictEqual(sumAllDigits(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), 46);
});

test('Складывает все цифры всех переданных чисел', () => {
  assert.strictEqual(sumAllDigits(2), 2);
});
