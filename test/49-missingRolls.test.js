const missingRolls = require('../src/49-missingRolls')

test('missingRolls', () => {
  expect(missingRolls([3, 2, 4, 3], 4, 2)).toEqual([6, 6])
  expect(missingRolls([1, 5, 6], 3, 4)).toEqual([3, 2, 2, 2])
  expect(missingRolls([1, 2, 3, 4], 6, 4)).toEqual([])
})
