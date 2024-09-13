const sumNums = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Складывает числа массива [1, 4, 7]', () => {
  assert.equal(sumNums([1, 4, 7]), 12);
});

test('Складывает числа массива [-5, 0, 6, 3]', () => {
  assert.equal(sumNums([-5, 0, 6, 3]), 4);
});

test('В пустом массиве возвращает NaN', () => {
  assert.ok(Number.isNaN(sumNums([])));
});
