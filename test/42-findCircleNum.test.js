const findCircleNum = require('../src/42-findCircleNum')

test('findCircleNum', () => {
  expect(
    findCircleNum([
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ])
  ).toBe(2)
  expect(
    findCircleNum([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ])
  ).toBe(3)
})
