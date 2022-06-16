const { expect } = require('@jest/globals')
const lengthOfLongestSubstring = require('../../src/first_algorithm/12-lengthOfLongestSubstring')

test('lengthOfLongestSubstring', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
})
