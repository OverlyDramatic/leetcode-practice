const lengthOfLongestSubstring = require('../src/21-lengthOfLongestSubstring')

test('lengthOfLongestSubstring', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
  expect(lengthOfLongestSubstring('')).toBe(0)
  expect(lengthOfLongestSubstring(' ')).toBe(1)
})
