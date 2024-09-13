const countFalsies = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Считает количество falsy-значений в массиве', () => {
  assert.deepEqual(countFalsies(['a', undefined, 'b', null, null, 0, 0, 0]), {
    undefined: 1,
    null: 2,
    false: 0,
    0: 3,
    NaN: 0,
    '': 0,
  });
});

test('Считает количество falsy-значений в массиве', () => {
  assert.deepEqual(
    countFalsies(['hi', 2 / 0, 4, NaN, false, false, null, '', '', '', false]),
    {
      undefined: 0,
      null: 1,
      false: 3,
      0: 0,
      NaN: 1,
      '': 3,
    },
  );
});

test('Корректно считает пустые элементы в разреженном массиве', () => {
  assert.deepEqual(
    countFalsies([2, , , '3', null, 0 / 0, , , '', '', Infinity - Infinity]),
    {
      undefined: 4,
      null: 1,
      false: 0,
      0: 0,
      NaN: 2,
      '': 2,
    },
  );
});
