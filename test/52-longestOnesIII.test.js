const longestOnes = require('../src/52-longestOnesIII')

test('longestOnes', () => {
  expect(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)).toBe(6)
  expect(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)).toBe(10)
})
