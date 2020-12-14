const groupAnagrams = require('../src/17-groupAnagrams')

test('groupAnagrams', () => {
  expect(
    groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
  ).toStrictEqual([['ate', 'eat', 'tea'], ['nat', 'tan'], ['bat']])
})
