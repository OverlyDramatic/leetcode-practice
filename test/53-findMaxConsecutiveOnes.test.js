const findMaxConsecutiveOnes = require('../src/53-findMaxConsecutiveOnes')

test('findMaxConsecutiveOnes', () => {
  expect(findMaxConsecutiveOnes([1,1,0,1,1,1])).toBe(3)
  expect(findMaxConsecutiveOnes([1,0,1,1,0,1])).toBe(2)
  expect(findMaxConsecutiveOnes([0])).toBe(0)
})
