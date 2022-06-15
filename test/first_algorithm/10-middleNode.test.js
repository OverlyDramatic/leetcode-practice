const middleNode = require('../../src/first_algorithm/10-middleNode')

test('middleNode', () => {
  expect(middleNode([1,2,3,4,5])).toStrictEqual([3,4,5])
  expect(middleNode([1,2,3,4,5,6])).toStrictEqual([4,5,6])
})
