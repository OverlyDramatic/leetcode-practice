const wordPattern = require('../src/20-wordPattern')

test('wordPattern', () => {
  expect(wordPattern('abba', 'dog cat cat dog')).toBe(true)
  expect(wordPattern('abba', 'dog cat cat fish')).toBe(false)
  expect(wordPattern('aaaa', 'dog cat cat dog')).toBe(false)
  expect(wordPattern('abba', 'dog dog dog dog')).toBe(false)
  expect(wordPattern('aaa', 'aa aa aa aa')).toBe(false)
})
