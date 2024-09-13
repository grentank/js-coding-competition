const swapKeysAndValues = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Меняет ключи и значения в объекте', () => {
  assert.deepEqual(swapKeysAndValues({ name: 'Alex' }), { Alex: 'name' });
});

test('Меняет ключи и значения в объекте', () => {
  assert.deepEqual(swapKeysAndValues({ a: 1, b: 2 }), { 1: 'a', 2: 'b' });
});

test('Не меняет пустой объект', () => {
  assert.deepEqual(swapKeysAndValues({}), {});
});

test('Если значения повторяются, сохраняет последнее', () => {
  assert.deepEqual(swapKeysAndValues({ a: 1, b: 1, c: 1 }), { 1: 'c' });
});

test('Работает корректно', () => {
  assert.deepEqual(
    swapKeysAndValues({ name: 'Bob', age: 21, knows: 'Bob', isAlive: true }),
    { Bob: 'knows', 21: 'age', true: 'isAlive' },
  );
});
