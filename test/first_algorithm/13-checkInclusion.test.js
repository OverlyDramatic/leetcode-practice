const { expect } = require('@jest/globals')
const checkInclusion = require('../../src/first_algorithm/13-checkInclusion')

test('checkInclusion', () => {
  expect(checkInclusion('ab', 'eidbaooo')).toBe(true)
  expect(checkInclusion('ab', 'eidboaoo')).toBe(false)
})
