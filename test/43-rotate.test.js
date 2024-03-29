const rotate = require('../src/43-rotate')

test('rotate', () => {
  expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
  expect(rotate([-1, -100, 3, 99], 2)).toStrictEqual([3, 99, -1, -100])
})
