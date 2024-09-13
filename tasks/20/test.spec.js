const commonElements = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Возвращает массив одинаковых элементов из двух массивов', () => {
  const res = commonElements([1, 2, 3, 4], [5, 4, 3, 0, -2]);
  assert.deepEqual(res.toSorted(), [3, 4].toSorted());
});

test('Возвращает пустой массив, если нет одинаковых элементов', () => {
  const res = commonElements([1, 2, 3], [4, 5, 6]);
  assert.deepEqual(res, []);
});

test('Возвращает массив одинаковых элементов из двух массивов', () => {
  const res = commonElements(['a', 'b', 5, 6, true, false], [6, 0, 0, 0, 0, 'b', true]);
  assert.deepEqual(res.toSorted(), [6, 'b', true].toSorted());
});
