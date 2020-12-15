const isValid = require('../src/18-isValid')

test('isValid', () => {
  expect(isValid('()')).toBe(true)
  expect(isValid('()[]{}')).toBe(true)
  expect(isValid('(]')).toBe(false)
  expect(isValid('([)]')).toBe(false)
  expect(isValid('{[]}')).toBe(true)
})
