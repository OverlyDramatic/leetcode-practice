const detectCapitalUse = require('../src/46-detectCapitalUse');

test('detectCapitalUse', () => {
  expect(detectCapitalUse('USA')).toBe(true)
  expect(detectCapitalUse('leetcode')).toBe(true)
  expect(detectCapitalUse('Google')).toBe(true)
  expect(detectCapitalUse('FlaG')).toBe(false)
});
