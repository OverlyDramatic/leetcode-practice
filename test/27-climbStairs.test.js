const climbStairs = require('../src/27-climbStairs')

test('climbStairs', () => {
  expect(climbStairs(1)).toBe(1)
  expect(climbStairs(2)).toBe(2)
  expect(climbStairs(3)).toBe(3)
  expect(climbStairs(4)).toBe(5)
})
