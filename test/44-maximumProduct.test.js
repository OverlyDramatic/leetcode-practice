const maximumProduct = require('../src/44-maximumProduct')

test('maximumProduct', () => {
  expect(maximumProduct([1, 2, 3])).toBe(6)
  expect(maximumProduct([1, 2, 3, 4])).toBe(24)
})
