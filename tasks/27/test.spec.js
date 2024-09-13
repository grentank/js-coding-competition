const swapValues = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Меняет значения у двух ключей объекта', () => {
  assert.deepEqual(swapValues({ name: 'Alex', age: 30 }), { name: 30, age: 'Alex' });
});

test('Меняет значения у двух ключей объекта', () => {
  assert.deepEqual(swapValues({ a: 1, b: 2 }), { a: 2, b: 1 });
});

test('Игнорирует методы', () => {
  assert.deepEqual(swapValues({ name: 'Alex', sayHi() {}, age: 30 }), {
    name: 30,
    age: 'Alex',
  });
});