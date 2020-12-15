const monotoneIncreasingDigits = require('../src/19-monotoneIncreasingDigits')

test('monotoneIncreasingDigits', () => {
  expect(monotoneIncreasingDigits(10)).toBe(9)
  expect(monotoneIncreasingDigits(1234)).toBe(1234)
  expect(monotoneIncreasingDigits(332)).toBe(299)
})
