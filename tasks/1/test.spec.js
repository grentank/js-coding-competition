const reverseString = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Разворачивает строку hello', () => {
  assert.strictEqual(reverseString('hello'), 'olleh');
});

test('Разворачивает строку elbrus', () => {
  assert.strictEqual(reverseString('elbrus'), 'surble');
});

test('Разворачивает строку с переносами', () => {
  assert.strictEqual(reverseString('k\nl\nm\nn'), 'n\nm\nl\nk');
});

test('Разворачивает строку со спецсимволами', () => {
  assert.strictEqual(reverseString('a\tb\nc\rd\fe\bf'), 'f\be\fd\rc\nb\ta');
});
