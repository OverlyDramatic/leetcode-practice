const isPalindrome = require('../src/03-isPalindrome')

test('isPalindrome', () => {
  expect(isPalindrome(121)).toBe(true)
  expect(isPalindrome(1221)).toBe(true)
  expect(isPalindrome(123)).toBe(false)
})
