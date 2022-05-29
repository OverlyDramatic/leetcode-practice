const { expect } = require('@jest/globals')
const twoSum = require('../src/01-twoSum')

test('twoSum', () => {
  expect(twoSum([1, 2, 3, 4, 5], 6)).toStrictEqual([0, 4])
  expect(twoSum([5, 2, 7, 2, 5], 4)).toStrictEqual([1, 3])
  expect(twoSum([5, 2, -7, 2, 5], -5)).toStrictEqual([1, 2])
  expect(twoSum([0, 2, -7, 2, 0], 0)).toStrictEqual([0, 4])
  expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2])
})
