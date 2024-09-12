const removeDuplicates = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Вовзращает массив, в котором нет дупликатов (все элементы уникальны)', () => {
  assert.deepEqual(removeDuplicates([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
});

test('Вовзращает массив, в котором нет дупликатов (есть повторения)', () => {
  assert.deepEqual(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), [1, 2, 3, 4, 5]);
});

test('Вовзращает массив, в котором нет дупликатов (все элементы одинаковы)', () => {
  assert.deepEqual(removeDuplicates(['abc', 'abc', 'abc', 'abc', 'abc']), ['abc']);
});

test('Вовзращает массив, в котором нет дупликатов (различает строки и числа)', () => {
  assert.deepEqual(removeDuplicates([1, true, '1', '1', true, '1', 1]), [1, true, '1']);
});

test('Вовзращает массив, в котором нет дупликатов (пустой массив)', () => {
  assert.deepEqual(removeDuplicates([]), []);
});
