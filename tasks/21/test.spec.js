const symmetricDifference = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Возвращает массив элементов, которые есть только в одном массиве, а в другом их нет', () => {
  const res = symmetricDifference([1, 2, 3, 4], [5, 4, 3, 0, -2]);
  assert.deepEqual(res.toSorted(), [1, 2, 5, 0, -2].toSorted());
});

test('Возвращает массив элементов, которые есть только в одном массиве, а в другом их нет', () => {
  const res = symmetricDifference([5, 6, 7], ['a', 'b', 'c']);
  assert.deepEqual(res.toSorted(), [5, 6, 7, 'a', 'b', 'c'].toSorted());
});

test('Возвращает массив элементов, которые есть только в одном массиве, а в другом их нет', () => {
  const res = symmetricDifference(
    [1, 2, 3, 4, 'a', 'b', 'c'],
    ['c', 3, 'a', 2, 1, 4, 'b'],
  );
  assert.deepEqual(res.toSorted(), []);
});
