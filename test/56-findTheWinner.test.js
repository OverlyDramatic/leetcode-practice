const findTheWinner = require('../src/56-findTheWinner')

test('findTheWinner', () => {
  expect(findTheWinner(5, 2)).toEqual(3)
  expect(findTheWinner(6, 5)).toEqual(1)
  expect(findTheWinner(5, 3)).toEqual(4)
})
