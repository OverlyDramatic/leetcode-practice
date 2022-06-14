const { expect } = require('@jest/globals')
const maxSubArray = require('../../src/data_structures/02-maxSubArray')

test('maxSubArray', () => {
  expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6)
  expect(maxSubArray([1])).toBe(1)
  expect(maxSubArray([5,4,-1,7,8])).toBe(23)
  expect(maxSubArray([-1,0,-2])).toBe(0)
  expect(maxSubArray([-2,1])).toBe(1)
})