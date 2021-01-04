const moveZeroes = require('../src/38-moveZeroes')

test('moveZeroes', () => {
  expect(moveZeroes([0, 1, 0, 3, 12])).toStrictEqual([1, 3, 12, 0, 0])
  expect(moveZeroes([0, 0, 1])).toStrictEqual([1, 0, 0])
})
