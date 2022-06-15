const { expect } = require('@jest/globals')
const setZeroes = require('../../src/data_structures/09-setZeroes')

test('setZeroes', () => {
  expect(
    setZeroes([
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ])
  ).toStrictEqual([
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ])
  expect(
    setZeroes([
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ])
  ).toStrictEqual([
    [0, 0, 0, 0],
    [0, 4, 5, 0],
    [0, 3, 1, 0],
  ])
})
