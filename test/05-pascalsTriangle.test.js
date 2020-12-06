const pascalsTriangle = require('../src/05-pascalsTriangle')

test('pascalsTriangle', () => {
  expect(pascalsTriangle(5)).toStrictEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
  ])
})
