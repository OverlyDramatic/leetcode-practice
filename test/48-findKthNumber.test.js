const findKthNumber = require('../src/48-findKthNumber')

test('findKthNumber', () => {
  expect(findKthNumber(13, 2)).toBe(10)
  expect(findKthNumber(1, 1)).toBe(1)
})
