const { expect } = require('@jest/globals')
const maxProfit = require('../../src/data_structures/06-maxProfit')

test('maxProfit', () => {
  expect(maxProfit([7,1,5,3,6,4])).toStrictEqual(5)
  expect(maxProfit([7,6,4,3,1])).toStrictEqual(0)
})
