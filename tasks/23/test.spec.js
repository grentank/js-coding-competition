const mergeAndSort = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Объединяет все массивы строк в один массив и сортирует строки по их длине', () => {
  const res = mergeAndSort(['aaaa', 'bbb'], ['c', 'dd']);
  assert.deepEqual(res.toSorted(), ['c', 'dd', 'bbb', 'aaaa'].toSorted());
});

test('Корректно работает, если массивов больше 2', () => {
  const res = mergeAndSort(['aaaa', 'bbb'], ['c', 'dd'], ['', 'eeeee']);
  assert.deepEqual(res.toSorted(), ['', 'c', 'dd', 'bbb', 'aaaa', 'eeeee'].toSorted());
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
    res.toSorted(),
    ['', 'e', 'bb', 'ccc', 'ffff', 'aaaaa', 'dddddd', 'ggggggg'].toSorted(),
  );
});
