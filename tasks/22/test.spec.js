const isSubObject = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Проверет, содержатся ли ключи и значения первого объекта во втором', () => {
  assert.ok(
    isSubObject({ name: 'Alex', age: 30 }, { lang: 'RU', name: 'Alex', age: 30 }),
  );
});

test('Возвращает false, если пара ключ-значение отличается', () => {
  assert.ok(
    !isSubObject({ name: 'Alex', age: 30 }, { lang: 'RU', name: 'Alex', age: 45 }),
  );
});

test('Возвращает false, если отсутствует пара ключ-значение', () => {
  assert.ok(!isSubObject({ name: 'Alex', age: 30 }, { lang: 'RU', name: 'Alex' }));
});

test('Возвращает false, если второй объект пустой', () => {
  assert.ok(!isSubObject({ name: 'Alex', age: 30 }, {}));
});
