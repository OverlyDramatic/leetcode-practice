const maxConsecutiveAnswers = require('../src/51-maxConsecutiveAnswers')

test('maxConsecutiveAnswers', () => {
  expect(maxConsecutiveAnswers('TTFF', 2)).toBe(4)
  expect(maxConsecutiveAnswers('TFFT', 1)).toBe(3)
  expect(maxConsecutiveAnswers('TTFTTFTT', 1)).toBe(5)
})
