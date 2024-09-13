const mergeAndSort = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Объединяет все массивы строк в один массив и сортирует строки по их длине', () => {
  const res = mergeAndSort(['aaaa', 'bbb'], ['c', 'dd']);
  assert.deepEqual([...res].sort(), ['c', 'dd', 'bbb', 'aaaa'].sort());
});

test('Корректно работает, если массивов больше 2', () => {
  const res = mergeAndSort(['aaaa', 'bbb'], ['c', 'dd'], ['', 'eeeee']);
  assert.deepEqual([...res].sort(), ['', 'c', 'dd', 'bbb', 'aaaa', 'eeeee'].sort());
});

test('Корректно работает, если массивов больше 2', () => {
  const res = mergeAndSort(
    ['aaaaa'],
    ['bb', 'ccc'],
    ['dddddd'],
    ['e'],
    ['', 'ffff', 'ggggggg'],
  );
  assert.deepEqual(
    [...res].sort(),
    ['', 'e', 'bb', 'ccc', 'ffff', 'aaaaa', 'dddddd', 'ggggggg'].sort(),
  );
});
