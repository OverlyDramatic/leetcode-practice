const largeGroupPositions = require('../src/39-largeGroupPositions')

test('largeGroupPositions', () => {
  expect(largeGroupPositions('abbxxxxzzy')).toStrictEqual([[3, 6]])
  expect(largeGroupPositions('abc')).toStrictEqual([])
  expect(largeGroupPositions('abcdddeeeeaabbbcd')).toStrictEqual([
    [3, 5],
    [6, 9],
    [12, 14],
  ])
  expect(largeGroupPositions('aba')).toStrictEqual([])
})
