const { expect } = require('@jest/globals')
const firstUniqChar = require('../../src/data_structures/10-firstUniqChar')

test('firstUniqChar', () => {
  expect(firstUniqChar('leetcode')).toBe(0)
  expect(firstUniqChar('loveleetcode')).toBe(2)
  expect(firstUniqChar('aabb')).toBe(-1)
})
