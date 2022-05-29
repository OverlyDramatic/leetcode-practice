const moveZeroes = require('../../src/first_algorithm/06-moveZeroes');

test('moveZeroes', () => {
  expect(moveZeroes([0,1,0,3,12])).toStrictEqual([1,3,12,0,0])
  expect(moveZeroes([0])).toStrictEqual([0])
})