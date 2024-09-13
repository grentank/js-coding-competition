const transformMultiple = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Преобразовывает первый аргумент с помощью переданных колбек-функций', () => {
  const res = transformMultiple('Hello, world!', (x) => x.toUpperCase());
  assert.strictEqual(res, 'HELLO, WORLD!');
});

test('Преобразовывает первый аргумент с помощью переданных колбек-функций', () => {
  const res = transformMultiple(
    'Hello, world!',
    (x) => x.toUpperCase(),
    (x) => x.replace(',', ''),
  );
  assert.strictEqual(res, 'HELLO WORLD!');
});

test('Корректно работает для чисел', () => {
  const res = transformMultiple(
    11,
    (x) => x * 3,
    (x) => x + 5,
  );
  assert.strictEqual(res, 38);
});

test('Корректно работает для чисел', () => {
  const res = transformMultiple(
    11,
    (x) => x + 5,
    (x) => x * 3,
  );
  assert.strictEqual(res, 48);
});

test('Может принимать 3 колбека', () => {
  const res = transformMultiple(
    5,
    (x) => x + 7,
    (x) => x.toString().split(''),
    (x) => x.toReversed().join(''),
  );
  assert.strictEqual(res, '21');
});
