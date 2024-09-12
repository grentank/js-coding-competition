const isPalindrome = require('./index');
const test = require('node:test');
const assert = require('node:assert');

test('Проверяет, является ли число палиндромом', () => {
  assert.deepEqual(isPalindrome(22345), false);
});

test('Проверяет, является ли число палиндромом', () => {
  assert.deepEqual(isPalindrome(12321), true);
});

test('Проверяет, является ли число палиндромом', () => {
  assert.deepEqual(isPalindrome(1221), true);
});

test('Проверяет, является ли число палиндромом', () => {
  assert.deepEqual(isPalindrome(12), false);
});

test('Проверяет, является ли число палиндромом', () => {
  assert.deepEqual(isPalindrome(7), true);
});
