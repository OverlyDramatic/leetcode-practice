const longestPalindrome = require('../src/25-longestPalindrome')

test('longestPalindrome', () => {
  expect(longestPalindrome('babad')).toBe('bab')
  expect(longestPalindrome('cbbd')).toBe('bb')
  expect(longestPalindrome('a')).toBe('a')
  expect(longestPalindrome('ccc')).toBe('ccc')
})
