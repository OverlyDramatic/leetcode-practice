const { expect } = require('@jest/globals')
const isAnagram = require('../../src/data_structures/12-isAnagram')

test('isAnagram', () => {
  expect(isAnagram('anagram', 'nagaram')).toBe(true)
  expect(isAnagram('rat', 'car')).toBe(false)
})
