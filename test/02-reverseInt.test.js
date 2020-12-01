const reverseInt = require('../src/02-reverseInt')

test('reverseInt', () => {
  expect(reverseInt(123)).toBe(321)
  expect(reverseInt(1534236469)).toBe(0)
})
