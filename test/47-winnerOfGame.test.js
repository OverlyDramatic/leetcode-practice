const winnerOfGame = require('../src/47-winnerOfGame');

test('winnerOfGame', () => {
  expect(winnerOfGame('AAAABABBB')).toBe(true)
  expect(winnerOfGame('ABBBBBBBAAA')).toBe(false)
  expect(winnerOfGame('AA')).toBe(false)
  expect(winnerOfGame('AAAABBBB')).toBe(false)
  expect(winnerOfGame('AAABABB')).toBe(true)
});
