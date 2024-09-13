const findMedian = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Вычтсляет медиану набора [1, 1, 1, 2, 7, 7, 7] -> 2', () => {
  assert.equal(findMedian([1, 1, 1, 2, 7, 7, 7]), 2);
});

test('Вычтсляет медиану набора [-4, 10, -4, 10, -4, 9, 10] -> 9', () => {
  assert.equal(findMedian([-4, 10, -4, 10, -4, 9, 10]), 9);
});

test('Вычтсляет медиану набора [5, 7, 7, 7, 7, 5, 5, 5] -> (5+7)/2', () => {
  assert.equal(findMedian([5, 7, 7, 7, 7, 5, 5, 5]), 6);
});

test('Вычтсляет медиану набора [8, 8, 8, 8, 8] -> 8', () => {
  assert.equal(findMedian([8, 8, 8, 8, 8]), 8);
});
