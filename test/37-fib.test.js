const fib = require('../src/37-fib')

test('fib', () => {
  expect(fib(0)).toBe(0)
  expect(fib(2)).toBe(1)
  expect(fib(3)).toBe(2)
  expect(fib(4)).toBe(3)
})
