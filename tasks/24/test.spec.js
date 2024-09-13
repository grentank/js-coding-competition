const sumValues = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Складывает значения в объектах по одинаковым ключам', () => {
  const res = sumValues({ clicks: 10, scrolls: 5 }, { clicks: 4, scrolls: 2 });
  assert.deepEqual(res, { clicks: 14, scrolls: 7 });
});

test('Если ключ только в одном объекте, то значение должно остаться', () => {
  const res = sumValues({ clicks: 10, scrolls: 5 }, { clicks: 4, views: 2 });
  assert.deepEqual(res, { clicks: 14, scrolls: 5, views: 2 });
});

test('Корректно работает для разных кейсов', () => {
  const res = sumValues({ clicks: 10 }, { views: 2 });
  assert.deepEqual(res, { clicks: 10, views: 2 });
});

test('Корректно работает для разных кейсов', () => {
  const res = sumValues(
    { products: 4, posts: 3, comments: 12 },
    { likes: 2, shares: 1, posts: 33 },
  );
  assert.deepEqual(res, { products: 4, posts: 36, comments: 12, likes: 2, shares: 1 });
});
