const quickSortRecursion = require('../../src/other/03-quickSort')

test('quickSort', () => {
  expect(quickSortRecursion([6, 5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5, 6])
  expect(quickSortRecursion([10, 5, 2, 3])).toStrictEqual([2, 3, 5, 10])
})
