const { expect } = require('@jest/globals')
const maxProfit = require('../../src/data_structures/07-pascalTriangle')

test('maxProfit', () => {
  expect(maxProfit(5)).toStrictEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
  ])
  expect(maxProfit(1)).toStrictEqual([[1]])
})
