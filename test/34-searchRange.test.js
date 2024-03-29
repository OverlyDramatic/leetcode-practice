const searchRange = require('../src/34-searchRange')

test('searchRange', () => {
  expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toStrictEqual([3, 4])
  expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toStrictEqual([-1, -1])
  expect(searchRange([], 0)).toStrictEqual([-1, -1])
})
