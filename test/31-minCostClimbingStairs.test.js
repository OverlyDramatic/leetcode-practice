const minCostClimbingStairs = require('../src/31-minCostClimbingStairs')

test('minCostClimbingStairs', () => {
  expect(minCostClimbingStairs([10, 15, 20])).toBe(15)
  expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6)
})
