const firstUniqChar = require('../src/33-firstUniqChar')

test('firstUniqChar', () => {
  expect(firstUniqChar('leetcode')).toBe(0)
  expect(firstUniqChar('loveleetcode')).toBe(2)
})
