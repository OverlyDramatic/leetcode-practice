const reverseString = require('../../src/first_algorithm/08-reverseString')

test('reverseString', () => {
  expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toStrictEqual([
    'o',
    'l',
    'l',
    'e',
    'h',
  ])
  expect(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])).toStrictEqual([
    'h',
    'a',
    'n',
    'n',
    'a',
    'H',
  ])
})
