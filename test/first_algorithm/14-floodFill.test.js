const floodFill = require('../../src/first_algorithm/14-floodFill')

test('floodFill', () => {
  expect(
    floodFill(
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      2
    )
  ).toStrictEqual([
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ])
  expect(
    floodFill(
      [
        [0, 0, 0],
        [0, 0, 0],
      ],
      0,
      0,
      0
    )
  ).toStrictEqual([
    [0, 0, 0],
    [0, 0, 0],
  ])
})
