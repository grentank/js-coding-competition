const cacheResults = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Функция сохраняет результаты вычисления и возвращает их в будущем', () => {
  cacheResults('set', 'name', 'Alex');
  assert.equal(cacheResults('get', 'name'), 'Alex');
});

test('Функция сохраняет результаты вычисления и возвращает их в будущем', () => {
  cacheResults('set', 'name', 'Alex');
  cacheResults('set', 'age', 30);
  assert.equal(cacheResults('get', 'age'), 30);
  assert.equal(cacheResults('get', 'name'), 'Alex');
});

test('Если результаты сохранены, они должны быть иммутабельны', () => {
  cacheResults('set', 'name', 'Alex');
  cacheResults('set', 'name', 'Bob');
  assert.equal(cacheResults('get', 'name'), 'Alex');
  assert.equal(cacheResults('get', 'name'), 'Alex');
});

test('Не изменяет данные', () => {
  cacheResults('set', 'name', 'Alex');
  cacheResults('set', 'name', 'Bob');
  cacheResults('set', 'age', 30);
  cacheResults('set', 'age', 42);
  assert.equal(cacheResults('get', 'name'), 'Alex');
  assert.equal(cacheResults('get', 'age'), 30);
});
