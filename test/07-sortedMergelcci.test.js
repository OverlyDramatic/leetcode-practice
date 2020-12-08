const merge = require('../src/07-sortedMergelcci')

test('sortedMergelcci', () => {
  expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toStrictEqual([
    1,
    2,
    2,
    3,
    5,
    6,
  ])
  expect(merge([2,0], 1, [1], 1)).toStrictEqual([1,2])
})
