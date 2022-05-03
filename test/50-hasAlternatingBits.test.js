const hasAlternatingBits = require('../src/50-hasAlternatingBits')

test('hasAlternatingBits', () => {
  expect(hasAlternatingBits(3)).toBe(false)
  expect(hasAlternatingBits(5)).toBe(true)
  expect(hasAlternatingBits(7)).toBe(false)
  expect(hasAlternatingBits(11)).toBe(false)
})
