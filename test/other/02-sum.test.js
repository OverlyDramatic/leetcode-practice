const { sum, num, max } = require('../../src/other/02-sum')

test('sum', () => {
  expect(sum([2, 4, 6])).toBe(12)
  expect(sum([1, 2, 3, 4, 5, 6])).toBe(21)
})

test('num', () => {
  expect(num([2, 4, 6])).toBe(3)
  expect(num([1, 2, 3, 4, 5, 6])).toBe(6)
})

test('max', () => {
  expect(max([2, 4, 6])).toBe(6)
  expect(max([1, 2, 3, 4, 5, 6])).toBe(6)
})
