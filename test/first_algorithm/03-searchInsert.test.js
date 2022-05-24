const { expect } = require('@jest/globals')
const searchInsert = require('../../src/first_algorithm/03-searchInsert')

test('searchInsert', () => {
  expect(searchInsert([1,3,5,6], 5)).toBe(2)
  expect(searchInsert([1,3,5,6], 2)).toBe(1)
  expect(searchInsert([1,3,5,6], 7)).toBe(4)
})