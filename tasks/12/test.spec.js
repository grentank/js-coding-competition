const minIndex = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Возвращает индекс наименьшего числа массива [10, 0, 7, 5, 2, 33]', () => {
  assert.equal(minIndex([10, 0, 7, 5, 2, 33]), 1);
});

test('Возвращает индекс наименьшего числа массива [-6, -5, -4, -3, 8]', () => {
  assert.equal(minIndex([-6, -5, -4, -3, 8]), 0);
});

test('Если минимальных чисел несколько, возвращает индекс первого из них [27, 49, 13, 13, 13, 25]', () => {
  assert.equal(minIndex([27, 49, 13, 13, 13, 25]), 2);
});

test('Если массив пуст, возвращает -1', () => {
  assert.equal(minIndex([]), -1);
});
