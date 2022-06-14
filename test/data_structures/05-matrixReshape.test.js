const { expect } = require('@jest/globals')
const matrixReshape = require('../../src/data_structures/05-matrixReshape')

test('matrixReshape', () => {
  expect(matrixReshape([[1,2],[3,4]], 1, 4)).toStrictEqual([[1,2,3,4]])
  expect(matrixReshape([[1,2],[3,4]], 2, 4)).toStrictEqual([[1,2],[3,4]])
})
