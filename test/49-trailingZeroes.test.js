const trailingZeroes = require('../src/49-trailingZeroes')

test('trailingZeroes', () => {
  expect(trailingZeroes(3)).toBe(0)
  expect(trailingZeroes(5)).toBe(1)
  expect(trailingZeroes(0)).toBe(0)
  expect(trailingZeroes(10)).toBe(2)
  expect(trailingZeroes(30)).toBe(7)
  expect(trailingZeroes(125)).toBe(31)
  expect(trailingZeroes(200)).toBe(49)
})
