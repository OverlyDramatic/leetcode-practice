const { expect } = require('@jest/globals')
const merge = require('../../src/data_structures/04-merge')

test('merge', () => {
  expect(merge([1,2,3,0,0,0], 3, [2,5,6], 3)).toStrictEqual([1,2,2,3,5,6])
  expect(merge([1], 1, [], 0)).toStrictEqual([1])
  expect(merge([0], 0, [1], 1)).toStrictEqual([1])
})
