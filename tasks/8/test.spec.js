const longestWord = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Находит самое длинное слово в строке', () => {
  assert.deepEqual(longestWord('Всем привет в этом чате'), 'привет');
});

test('Находит самое длинное слово в строке', () => {
  assert.deepEqual(longestWord('Эти слова разные. Таковы условия'), 'условия');
});

test('Работает на разных строках', () => {
  assert.deepEqual(
    longestWord('Стол,монитор,ноутбук и\nещё разные принадлежности!'),
    'принадлежности',
  );
});
