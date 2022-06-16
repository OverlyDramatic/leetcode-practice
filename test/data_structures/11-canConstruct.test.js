const { expect } = require('@jest/globals')
const canConstruct = require('../../src/data_structures/11-canConstruct')

test('canConstruct', () => {
  expect(canConstruct('a', 'b')).toBe(false)
  expect(canConstruct('aa', 'ab')).toBe(false)
  expect(canConstruct('aa', 'aab')).toBe(true)
})
