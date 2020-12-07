const longestCommonPrefix = require('../src/06-longestCommonPrefix')

test('longestCommonPrefix', () => {
  expect(longestCommonPrefix(["flower","flow","flight"])).toBe('fl')
  expect(longestCommonPrefix(["dog","racecar","car"])).toBe('')
  expect(longestCommonPrefix(["c","acc","ccc"])).toBe('')
})