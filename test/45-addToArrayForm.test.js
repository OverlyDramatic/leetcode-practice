const addToArrayForm = require('../src/45-addToArrayForm')

test('addToArrayForm', () => {
  expect(addToArrayForm([1, 2, 0, 0], 34)).toStrictEqual([1, 2, 3, 4])
  expect(addToArrayForm([2, 7, 4], 181)).toStrictEqual([4, 5, 5])
  expect(addToArrayForm([2, 1, 5], 806)).toStrictEqual([1, 0, 2, 1])
  expect(addToArrayForm([2, 1, 5], 806)).toStrictEqual([1, 0, 2, 1])
  expect(addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 1)).toStrictEqual([
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ])
})
