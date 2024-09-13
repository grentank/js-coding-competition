const longestWord = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Находит самое длинное слово в строке', () => {
  assert.equal(longestWord('Всем привет в этом чате'), 'привет');
});

test('Находит самое длинное слово в строке', () => {
  assert.equal(longestWord('Эти слова разные. Таковы условия'), 'условия');
});

test('Работает на разных строках', () => {
  assert.equal(
    longestWord('Стол,монитор,ноутбук и\nещё разные принадлежности!'),
    'принадлежности',
  );
});
