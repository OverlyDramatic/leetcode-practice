const maxProfit = require('../src/22-maxProfit')

test('maxProfit', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
  expect(maxProfit([1, 2])).toBe(1)
})
