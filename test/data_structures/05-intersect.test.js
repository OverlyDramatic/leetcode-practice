const { expect } = require('@jest/globals')
const merge = require('../../src/data_structures/05-intersect')

test('merge', () => {
  expect(merge([1,2,2,1], [2,2])).toStrictEqual([2,2])
  expect(merge([4,9,5], [9,4,9,8,4])).toStrictEqual([4,9])
})
