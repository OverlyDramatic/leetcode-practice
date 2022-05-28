const { expect } = require('@jest/globals')
const search = require('../../src/first_algorithm/01-binarySearch')

test('search', () => {
  expect(search([-1,0,3,5,9,12], 9)).toBe(4)
  expect(search([-1,0,3,5,9,12], 12)).toBe(5)
  expect(search([-1,0,3,5,9,12], 2)).toBe(-1)
})