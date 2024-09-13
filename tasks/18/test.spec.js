const toShoutingCase = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Приводит к кричащему регистру: Всем привет в чате -> ВСЕМ_привет_В_этом_ЧАТЕ', () => {
  assert.equal(toShoutingCase('Всем привет в этом чате'), 'ВСЕМ_привет_В_этом_ЧАТЕ');
});

test('Эти слова разные. Таковы условия -> ЭТИ_слова_РАЗНЫЕ_таковы_УСЛОВИЯ', () => {
  assert.equal(
    toShoutingCase('Эти слова разные, Таковы условия'),
    'ЭТИ_слова_РАЗНЫЕ_таковы_УСЛОВИЯ',
  );
});

test('Its Time to Javascript -> ITS_time_TO_javascript', () => {
  assert.equal(toShoutingCase('Its Time to Javascript'), 'ITS_time_TO_javascript');
});
